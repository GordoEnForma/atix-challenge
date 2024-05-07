import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({
        message: "Ingrese un email valido",
    }),
    password: z.string().min(6, {
        message: "La contraseña debe de tener al menos 6 caracteres",
    }),
});

export const registerSchema = z
    .object({
        username: z
            .string({
                required_error: "El username es requerido",
            })
            .min(3, {
                message: "El username debe tener minimo 3 caracteres",
            }),
        email: z.string().email({
            message: "Ingrese un email valido",
        }),
        password: z.string().min(6, {
            message: "La contraseña debe de tener al menos 6 caracteres",
        }),
        confirmPassword: z.string().min(6, {
            message: "La contraseña debe de tener al menos 6 caracteres",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
    });