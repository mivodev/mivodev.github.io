'use client';

import { useEffect, useState } from 'react';
import { fetchRegistryJson, isWebUrl } from '@/lib/registry-api';

interface Release {
  version: string;
  date: string;
  size: number;
  download: string;
  notes: string;
  prerelease: boolean;
  latest: boolean;
}

function isRelease(value: unknown): value is Release {
  if (typeof value !== 'object' || value === null) return false;
  const release = value as Record<string, unknown>;

  return (
    typeof release.version === 'string' &&
    typeof release.date === 'string' &&
    typeof release.size === 'number' &&
    isWebUrl(release.download) &&
    isWebUrl(release.notes) &&
    typeof release.prerelease === 'boolean' &&
    typeof release.latest === 'boolean'
  );
}

function formatSize(bytes: number) {
  if (bytes <= 0) return '—';

  const units = ['B', 'KB', 'MB', 'GB'];
  const unit = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${Number((bytes / 1024 ** unit).toFixed(2))} ${units[unit]}`;
}

export function ReleaseArchive() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let active = true;

    fetchRegistryJson('releases')
      .then((data) => {
        if (!Array.isArray(data) || !data.every(isRelease)) {
          throw new Error('The release registry returned invalid data.');
        }
        if (active) setReleases(data);
      })
      .catch((cause: unknown) => {
        console.error('Unable to load the release archive.', cause);
        if (active) {
          setError(
            cause instanceof Error ? cause.message : 'Unable to load the release archive.',
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

  return (
    <div className="overflow-x-auto rounded-xl border">
      {loading ? (
        <p className="p-8 text-center text-fd-muted-foreground" role="status">
          Loading release archive...
        </p>
      ) : error ? (
        <p className="p-6 text-fd-muted-foreground" role="alert">
          Unable to load the release archive: {error}
        </p>
      ) : (
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead className="border-b bg-fd-secondary/50">
            <tr>
              <th className="px-4 py-3 font-medium">Version</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Size</th>
              <th className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {releases.map((release) => (
              <tr className="border-b last:border-0" key={release.version}>
                <td className="px-4 py-4 font-mono font-medium">
                  {release.version}
                  {release.latest && (
                    <span className="ml-2 rounded-full bg-fd-primary/10 px-2 py-1 font-sans text-xs text-fd-primary">
                      Latest
                    </span>
                  )}
                  {release.prerelease && (
                    <span className="ml-2 rounded-full bg-fd-secondary px-2 py-1 font-sans text-xs">
                      Pre-release
                    </span>
                  )}
                </td>
                <td className="px-4 py-4 text-fd-muted-foreground">{release.date || '—'}</td>
                <td className="px-4 py-4 font-mono text-fd-muted-foreground">
                  {formatSize(release.size)}
                </td>
                <td className="px-4 py-4 text-right">
                  <a className="mr-4 text-fd-primary" href={release.download}>
                    Download
                  </a>
                  <a href={release.notes} target="_blank" rel="noreferrer">
                    Notes
                  </a>
                </td>
              </tr>
            ))}
            {releases.length === 0 && (
              <tr>
                <td className="px-4 py-8 text-center text-fd-muted-foreground" colSpan={4}>
                  No releases found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
