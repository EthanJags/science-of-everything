import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section with image on right */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-white text-4xl font-bold mb-4">About</h1>
          <p className="text-xl mb-6 text-white">
  I started <strong>The Science of Everything</strong> to explore how the universe works — from the smallest particles to the largest galaxies, from the origins of life to the rise of intelligence and technology. My goal is to break down complex ideas into clear, first-principle explanations that anyone can follow and connect across physics, biology, and computer science.
</p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="bg-gray-200 rounded-lg w-full max-w-md aspect-[4/3] flex items-center justify-center">
            <Image
              src="/assets/JamesFodor.png"
              alt="About Us"
              width={500}
              height={375}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-white">Contact me</h2>
      <p className="text-gray-200 mb-4">I love hearing from listeners! Feel free to email me at <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
    </div>
  );
}
