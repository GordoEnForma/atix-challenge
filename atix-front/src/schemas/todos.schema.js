import { z } from "zod";

export const todoSchema = z.object({
  title: z.string().min(1, { message: "Ingrese un todo" }).optional(),
});
