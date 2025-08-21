import React from "react";
import EarthScene from "./Earth";
import Image from "next/image";
import { SITE_NAME, SITE_TAGLINE } from "@/app/lib/constants";
import { SplineScene } from "@/components/ui/splite";
import { SparklesText } from "@/components/ui/sparkles-text"


export default function Hero() {
  return (
    <div className="relative h-[100vh] w-full">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* <Image
          src="/assets/galaxyUpscaled.jpg"
          alt="Galaxy"
          fill
          className="object-cover"
        /> */}
                <SplineScene scene="https://prod.spline.design/k57BF118jR5AqdNY/scene.splinecode" />

      </div>
      {/* Centered hero content */}
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full">
        <div className="mr-auto ml-4 place-self-center lg:col-span-7">
          <div className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-8xl text-white">
          The Science of <SparklesText text="Everything" />
          </div>
          <p className="text-white mt-4">{SITE_TAGLINE}</p>
        </div>
      </div>
    </div>
  );
}
