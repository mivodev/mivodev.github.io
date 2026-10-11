import { llms, loader } from 'fumadocs-core/source';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { createElement } from 'react';
import { BookOpenCheck, BookOpenText, Router, Settings2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [],
  icon(name) {
    if (!name) return;

    const icons: Record<string, LucideIcon> = {
      BookOpenCheck,
      BookOpenText,
      Router,
      Settings2,
    };

    const Icon = icons[name];
    return Icon ? createElement(Icon) : undefined;
  },
});

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
});
