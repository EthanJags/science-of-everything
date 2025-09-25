import Image from "next/image";
import { client } from "./lib/sanity";
import Hero from "@/components/Hero";
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
        <Podcastlist truncateTo={3} />
      </main>
    </div>
  );
}
