import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { registerSchema } from "../schemas/auth.schema"
import { useAuth } from "../providers/AuthProvider"
import { useEffect } from "react"
import { Input } from "./ui/Input"

export const RegisterForm = () => {

  const form = useForm({
    resolver: zodResolver(registerSchema)
  })
  const { signup, errors, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    signup(data)
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/todos')
    }

  }, [isAuthenticated])
  return (
    <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="space-y-4">
        {
          errors.map((error, index) => (

            <p key={index} className="text-red-500 text-xs dark:text-red-500 dark:text-xs">{error}</p>
          ))
        }
        <div className="space-y-2">
          <h2 className="text-2xl font-bold dark:text-slate-200">Registrese en la plataforma</h2>
          <p className="text-gray-500 dark:text-gray-400">Ingrese los siguientes detalles para registrar su cuenta</p>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="username">
              Nombre de Usuario
            </label>
            <Input
              {...form.register("username")}
              placeholder="Ingrese su username"
              type="text"
            />
            {
              form.formState.errors.username && <p className="text-red-500 text-xs">{form.formState.errors.username.message}</p>
            }
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
              Correo
            </label>
            <Input
              {...form.register("email")}
              placeholder="asd@example.com"
            />
            {
              form.formState.errors.email && <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>
            }
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="password">
                Contraseña
              </label>
            </div>
            <Input
              {...form.register("password")}
              placeholder="Ingrese una contraseña"
              type="password"
            />
            {
              form.formState.errors.password && <p className="text-red-500 text-xs">{form.formState.errors.password.message}</p>
            }
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="confirmPassword"
              >
                Confirmar Contraseña
              </label>
            </div>
            <Input
              type="password"
              {...form.register("confirmPassword")}
              placeholder="Confirme su contraseña"
            />
            {
              form.formState.errors.confirmPassword && <p className="text-red-500 text-xs">{form.formState.errors.confirmPassword.message}</p>
            }
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-gray-900 py-2 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  )
}