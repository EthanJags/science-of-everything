import React from "react";
import EarthScene from "./Earth";
import Image from "next/image";
import { SITE_NAME, SITE_TAGLINE } from "@/app/lib/constants";
import { SplineScene } from "@/components/ui/splite";
import { SparklesText } from "@/components/ui/sparkles-text";
import { ShaderAnimation } from "./ShaderAnimation";
import { HeroSection } from "./galaxy-interactive-hero-section";
import Podcastlist from "./Podcastlist";

export default function Hero() {
  return (
    <main className="bg-black relative h-screen w-screen">
      <HeroSection />
    </main>
  );
}
