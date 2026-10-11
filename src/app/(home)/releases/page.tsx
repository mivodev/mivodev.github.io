import type { Metadata } from 'next';
import { ReleaseArchive } from '@/components/release-archive';

export const metadata: Metadata = {
  title: 'Releases',
  description: 'Download current and previous releases of MIVO.',
};

export default function ReleasesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 md:px-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Release Archive</h1>
        <p className="mt-3 max-w-2xl text-fd-muted-foreground">
          Download current and previous versions of MIVO.
        </p>
      </header>
      <ReleaseArchive />
      <p className="mt-6 text-sm text-fd-muted-foreground">
        Older versions may contain security vulnerabilities or be incompatible with current
        add-ons. We recommend using the latest stable release.
      </p>
    </main>
  );
}
