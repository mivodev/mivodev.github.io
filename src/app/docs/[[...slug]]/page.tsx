import type { Metadata } from 'next';
import { DocsContentPage, getDocsMetadata } from '@/components/docs-page';
import { source } from '@/lib/source';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  return <DocsContentPage slug={params.slug} />;
}

export async function generateStaticParams() {
  return source.getPages().map((page) => ({ slug: page.slugs }));
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  return getDocsMetadata(params.slug);
}
