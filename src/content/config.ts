import { defineCollection, z } from 'astro:content';

const TAGS = [
  'html',
  'css',
  'javascript',
  'typescript',
  'design',
  'reading',
  'tool',
  'git',
] as const;

const resourceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    href: z.string(),
    tags: z.array(z.enum(TAGS)),
  }),
});

export const collections = {
  resources: resourceCollection,
};
