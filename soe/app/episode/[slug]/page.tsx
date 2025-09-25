import { notFound } from "next/navigation";
import Image from "next/image";
import { client, urlFor } from "../../lib/sanity";
import SanityAudioPlayer from "../../../components/SanityAudioPlayer";

export default async function EpisodePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Fetch podcast data based on the slug
  const podcast = await client.fetch(
    `*[_type == "podcast" && slug.current == $slug][0]{
      title,
      description,
      thumbnail,
      "audioUrl": audio.asset->url,
      episodeNumber
    }`,
    { slug }
  );

  if (!podcast) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Episode Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {podcast.title}
          </h1>
          {podcast.episodeNumber && (
            <p className="text-gray-400 text-lg">
              Episode {podcast.episodeNumber}
            </p>
          )}
        </div>

        {/* Episode Image */}
        {podcast.thumbnail && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-2xl relative aspect-video">
            <Image
              src={urlFor(podcast.thumbnail).width(800).height(450).url()}
              alt={podcast.title}
              width={800}
              height={450}
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Audio Player */}
        {podcast.audioUrl && (
          <div className="mb-8 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4">Listen to Episode</h2>
            <SanityAudioPlayer audioUrl={podcast.audioUrl} />
          </div>
        )}

        {/* Episode Description */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-4">About This Episode</h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {podcast.description}
          </p>
        </div>
      </div>
    </div>
  );
}
