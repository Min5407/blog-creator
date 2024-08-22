import { z } from "zod";

export const BlogSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
  slug: z.string().min(1).max(190),
  description: z.string().min(1).max(200),
  image: z.string(),
});

export type BlogSchemaType = z.infer<typeof BlogSchema>;
