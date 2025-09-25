import React from "react";
import { SparklesText } from "@/components/ui/sparkles-text";
import { ShaderAnimation } from "./ShaderAnimation";

export default function Hero() {
  return (
    <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-xl">
      <ShaderAnimation />
      <div className="absolute pointer-events-none z-10 text-center text-white">
        <h1 className="text-7xl leading-none tracking-tighter whitespace-pre-wrap font-calendas italic mb-4">
          The Science of <SparklesText text="Everything" />
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Exploring the fascinating world of science through engaging
          conversations and expert insights
        </p>
        <button className="pointer-events-auto bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
          Listen Now
        </button>
      </div>
    </div>
  );
}
