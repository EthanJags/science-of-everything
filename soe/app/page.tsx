import Image from "next/image";
import { client } from "./lib/sanity";
import Hero from "@/components/Hero";
import Podcast from "@/components/Podcast";
import Podcastlist from "@/components/Podcastlist";
import { Waves } from "@/components/ui/waves-background";
import { SplineScene } from "@/components/ui/splite";

export default async function Home() {
  return (
    <div>
      <main>
        <div className="relative z-20">
          {" "}
          {/* Add higher z-index to Hero */}
          <Hero />
        </div>

        {/* <Waves
          lineColor="rgba(255, 255, 255, 0.3)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        /> */}

        <Podcastlist truncateTo={3} />
      </main>
    </div>
  );
}
