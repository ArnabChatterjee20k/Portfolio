import { z, defineCollection } from "astro:content";
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // externalLink: z.string().url().optional(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      githublink: z.string().optional(),
      image:image().optional(),
      liveurl: z.string().optional(),
      description: z.string().optional(),
      tags: z.array(z.string()),
    }),
});

export const collections = { blog, work };
