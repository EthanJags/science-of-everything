import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ysu5py18",
  dataset: "production",
  apiVersion: "2023-05-03", // currently same as Jan Marshall's version
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
