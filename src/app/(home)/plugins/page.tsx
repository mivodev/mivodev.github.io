import type { Metadata } from 'next';
import { PluginRegistry } from '@/components/plugin-registry';

export const metadata: Metadata = {
  title: 'Plugins',
  description: 'Browse community plugins for MIVO.',
};

export default function PluginsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 md:px-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Plugin Registry</h1>
        <p className="mt-3 max-w-2xl text-fd-muted-foreground">
          Explore community plugins to extend MIVO.
        </p>
      </header>
      <PluginRegistry />
    </main>
  );
}
