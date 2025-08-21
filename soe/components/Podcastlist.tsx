import { client } from "../app/lib/sanity";
import Podcast from "./Podcast";

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

  return (
    <div>
      {displayData.map((podcast: any) => (
        <Podcast key={podcast._id} {...podcast} />
      ))}
    </div>
  );
}
