import { z } from "zod";
import axios from "axios";

const url = "https://www.course-api.com/react-tours-project";

export const tourSchema = z.object({
  id: z.string(),
  image: z.string(),
  info: z.string(),
  name: z.string(),
  price: z.string(),
});

export type Tour = z.infer<typeof tourSchema>;

export const fetchTours = async (): Promise<Tour[]> => {
  const response = await axios.get<Tour[]>(url);

  const result = tourSchema.array().safeParse(response.data);

  if (!result.success) throw Error("Failed to pars tours");

  return result.data;
};
