import { defineCollection, z } from 'astro:content';

const resourceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    href: z.string(),
  }),
});

export const collections = {
  resources: resourceCollection,
};
