import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Usuario es requerido",
  }),
  email: z
    .string({
      required_error: "Correo requerido",
    })
    .email({
      message: "Correo no es valido",
    }),
  password: z
    .string({
      required_error: "Contraseña requerida",
    })
    .min(6, {
      message: "Contraseña debe tener al menos 6 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
