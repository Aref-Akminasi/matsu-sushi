import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '3z8b2row',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});
