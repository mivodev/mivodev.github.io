import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";
import { source } from "@/lib/source";

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, siteUrl).toString();

  return [
    "/",
    "/plugins",
    "/releases",
    ...source.getPages().map((page) => page.url),
  ].map((path) => ({ url: url(path) }));
}
