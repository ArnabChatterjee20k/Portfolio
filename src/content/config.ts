import { z, defineCollection } from "astro:content";
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // date: z.coerce.date(),
    // externalLink: z.string().url().optional(),
  }),
});

export const collections = { blog };
