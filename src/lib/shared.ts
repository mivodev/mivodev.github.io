import { createGetUrl } from "fumadocs-core/source";

export const appName = "MIVO";
export const docsRoute = "/docs";
export const docsImageRoute = "/og/docs";
export const docsContentRoute = "/llms.mdx/docs";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "mivodev",
  repo: "docs",
  branch: "main",
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[] }) {
  const segments = [...page.slugs, "content.md"];

  return { segments, url: getContentUrl(segments) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[] }) {
  const segments = [...page.slugs, "image.png"];

  return { segments, url: getImageUrl(segments) };
}
