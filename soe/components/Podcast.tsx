"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SanityAudioPlayer from "./SanityAudioPlayer";

export default function Podcast({
  title,
  slug,
  description,
  thumbnail,
  audio,
  thumbnailUrl,
  audioUrl,
}: {
  title: string;
  slug: { current: string };
  description: string;
  thumbnail: string;
  audio: object;
  thumbnailUrl: string;
  audioUrl: string;
}) {
  return (
    <div
      className="relative max-w-4xl mx-auto my-8 p-6 rounded-2xl shadow-2xl transition-all duration-300 ease-out
                  backdrop-blur-xl bg-gradient-to-br from-white/40 to-white/10 dark:from-black/40 dark:to-black/10
                 border border-gray-200/50 dark:border-gray-700/30 hover:shadow-indigo-200/30 dark:hover:shadow-indigo-900/20
                 group overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-6 relative z-10">
        {/* Image Container with Inner Shadow */}
        <div className="relative w-full md:w-1/3 aspect-square rounded-xl overflow-hidden shadow-inner">
          {thumbnail && (
            <div className="relative w-full h-full">
              <Image
                src={thumbnailUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          )}
        </div>

        {/* Content Container */}
        <div
          className="w-full md:w-2/3 flex flex-col justify-center relative z-10"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(30px)",
          }}
        >
          <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
            {title}
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link href={`/episode/${slug.current}`} className="block">
              <div
                className="self-start px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg 
                          hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300 shadow-lg 
                          hover:shadow-indigo-600/40 font-medium"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(40px)",
                }}
              >
                Listen Now
              </div>
            </Link>

            {audio && (
              <div
                className="self-start px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg 
                          transition-colors duration-300 shadow-lg hover:shadow-purple-600/40"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(40px)",
                }}
              >
                <SanityAudioPlayer audioUrl={audioUrl} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
