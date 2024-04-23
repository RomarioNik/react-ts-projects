import { z } from "zod";

export const jobSchema = z.object({
  company: z.string(),
  dates: z.string(),
  duties: z.array(z.string()),
  id: z.string(),
  order: z.number(),
  title: z.string(),
});

export type Job = z.infer<typeof jobSchema>;
