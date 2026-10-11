'use client';

import { useEffect, useMemo, useState } from 'react';
import { fetchRegistryJson, isWebUrl } from '@/lib/registry-api';

interface Plugin {
  id: string;
  name: string;
  description: string;
  author: string;
  version: string;
  category: string;
  tags: string[];
  repo: string;
  download: string;
  readme: string;
}

function isPlugin(value: unknown): value is Plugin {
  if (typeof value !== 'object' || value === null) return false;
  const plugin = value as Record<string, unknown>;

  return (
    typeof plugin.id === 'string' &&
    typeof plugin.name === 'string' &&
    typeof plugin.description === 'string' &&
    typeof plugin.author === 'string' &&
    typeof plugin.version === 'string' &&
    typeof plugin.category === 'string' &&
    Array.isArray(plugin.tags) &&
    plugin.tags.every((tag) => typeof tag === 'string') &&
    isWebUrl(plugin.repo) &&
    isWebUrl(plugin.download) &&
    isWebUrl(plugin.readme)
  );
}

export function PluginRegistry() {
  const [plugins, setPlugins] = useState<Plugin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    let active = true;

    fetchRegistryJson('plugins')
      .then((data) => {
        if (!Array.isArray(data) || !data.every(isPlugin)) {
          throw new Error('The plugin registry returned invalid data.');
        }
        if (active) setPlugins(data);
      })
      .catch((cause: unknown) => {
        console.error('Unable to load the plugin registry.', cause);
        if (active) {
          setError(
            cause instanceof Error ? cause.message : 'Unable to load the plugin registry.',
          );
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const categories = useMemo(
    () => ['All', ...new Set(plugins.map((plugin) => plugin.category))].sort((a, b) =>
      a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b),
    ),
    [plugins],
  );

  const filteredPlugins = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return plugins.filter((plugin) => {
      const matchesCategory = category === 'All' || plugin.category === category;
      const searchableText = [
        plugin.name,
        plugin.description,
        plugin.author,
        ...plugin.tags,
      ]
        .join(' ')
        .toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [category, plugins, query]);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 rounded-xl border bg-fd-card p-4 sm:flex-row sm:items-center">
        <label className="min-w-0 flex-1">
          <span className="sr-only">Search plugins</span>
          <input
            className="w-full rounded-lg border bg-fd-background px-3 py-2 text-sm"
            type="search"
            placeholder="Find plugins..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="flex gap-2 overflow-x-auto" aria-label="Filter by category">
          {categories.map((item) => (
            <button
              className={`shrink-0 rounded-lg border px-3 py-2 text-sm ${
                category === item ? 'bg-fd-primary text-fd-primary-foreground' : 'bg-fd-background'
              }`}
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p className="py-8 text-center text-fd-muted-foreground" role="status">
          Loading plugin registry...
        </p>
      ) : error ? (
        <p className="rounded-xl border border-fd-border p-6 text-fd-muted-foreground" role="alert">
          Unable to load the plugin registry: {error}
        </p>
      ) : filteredPlugins.length === 0 ? (
        <p className="rounded-xl border border-dashed p-8 text-center text-fd-muted-foreground">
          No plugins found.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredPlugins.map((plugin) => (
            <article className="flex flex-col rounded-xl border bg-fd-card p-5" key={plugin.id}>
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-fd-primary text-lg font-semibold text-fd-primary-foreground">
                  {plugin.name.charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <h2 className="font-semibold">{plugin.name}</h2>
                  <p className="text-sm text-fd-muted-foreground">
                    {plugin.author} · {plugin.version}
                  </p>
                </div>
              </div>
              <p className="my-4 flex-1 text-sm text-fd-muted-foreground">{plugin.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-fd-secondary px-2 py-1 text-xs">
                  {plugin.category}
                </span>
                {plugin.tags.map((tag) => (
                  <span
                    className="rounded-md border px-2 py-1 text-xs text-fd-muted-foreground"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 border-t pt-4 text-sm">
                <a href={plugin.readme} target="_blank" rel="noreferrer">
                  Documentation
                </a>
                <a href={plugin.repo} target="_blank" rel="noreferrer">
                  Repository
                </a>
                <a className="font-medium text-fd-primary" href={plugin.download}>
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
