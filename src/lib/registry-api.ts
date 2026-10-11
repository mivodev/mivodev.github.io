export type RegistryResource = "plugins" | "releases";

export const REGISTRY_API_BASE_URL = (
  process.env.NEXT_PUBLIC_REGISTRY_API_BASE_URL ??
  "https://mivodev.github.io/registry"
)
  .trim()
  .replace(/\/+$/, "");

export async function fetchRegistryJson(
  resource: RegistryResource,
): Promise<unknown> {
  const response = await fetch(`${REGISTRY_API_BASE_URL}/${resource}.json`);

  if (!response.ok) {
    throw new Error(
      `Registry request failed (${response.status} ${response.statusText})`,
    );
  }

  return response.json();
}

export function isWebUrl(value: unknown): value is string {
  if (typeof value !== "string") return false;

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}
