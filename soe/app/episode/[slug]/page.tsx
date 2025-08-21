// app/podcast/[slug]/page.tsx
import { notFound } from "next/navigation";
import { client, urlFor } from "../../lib/sanity";

export default async function PodcastPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  console.log(slug);
  // Fetch podcast data based on the slug.
  const podcast = await client.fetch(
    `*[_type == "podcast" && slug.current == $slug][0]`,
    { slug },
  );

  if (!podcast) {
    // notFound();
  }

  return (
    <div>
      <h1>{podcast.title}</h1>
      {/* Render other podcast details */}
      {podcast.thumbnail && (
        <img src={urlFor(podcast.thumbnail).url()} alt={podcast.title} />
      )}
      <p>{podcast.description}</p>
    </div>
  );
}
