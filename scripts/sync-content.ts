import * as fs from 'node:fs/promises';
import { type DocumentRecord, sync } from 'fumadocs-core/search/algolia';
import { algoliasearch } from 'algoliasearch';

const records = JSON.parse(await fs.readFile('.next/server/app/static.json.body', 'utf-8')) as DocumentRecord[];

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.ALGOLIA_WRITE_KEY!,
);

await sync(client, {
  indexName: 'document',
  documents: records,
});

console.log(`search updated: ${records.length} records`);
