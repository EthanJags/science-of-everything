import Image from "next/image";
import { client } from "./lib/sanity";
import Hero from "@/components/Hero";
import Podcast from "@/components/Podcast";
import Podcastlist from "@/components/Podcastlist";
import { Waves } from "@/components/ui/waves-background";

import { SplineScene } from "@/components/ui/splite";
import { HeroSection } from "@/components/galaxy-interactive-hero-section";

export default async function Home() {
  return (
    <div>
      <main className="bg-black relative h-screen w-screen">
      <HeroSection />
    </main>
    <Podcastlist truncateTo={3} />
    </div>
  );
}
