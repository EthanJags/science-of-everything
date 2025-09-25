import { client } from "../app/lib/sanity";
import { HoverEffect } from "./ui/hover-effect-card";

interface PodcastlistProps {
  truncateTo?: number; // Optional prop to limit number of podcasts
}

async function getData() {
  const query = `*[_type == "podcast"] | order(episodeNumber desc) {
    _id,
    title,
    description,
    slug,
    thumbnail,
    "thumbnailUrl": thumbnail.asset->url,
    audio,
    "audioUrl": audio.asset->url,
    episodeNumber
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Podcastlist({ truncateTo }: PodcastlistProps) {
  const data = await getData();

  // If truncateTo is provided, slice the data array
  const displayData = truncateTo ? data.slice(0, truncateTo) : data;

  // Transform podcast data into the items format expected by HoverEffect
  const items = displayData.map((podcast: any) => ({
    title: podcast.title,
    description: podcast.description,
    link: `/episode/${podcast.slug.current}`,
    imageUrl: podcast.thumbnailUrl,
    imageAlt: podcast.title,
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <HoverEffect items={items} />
    </div>
  );
}
