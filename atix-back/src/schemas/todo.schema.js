import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string({
    required_error: "Todo es requerido",
  }),
  isCompleted: z.boolean().default(false),
});
