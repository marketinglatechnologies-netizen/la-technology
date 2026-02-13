import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "u66gy9f4",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export default sanityClient;