import { TodosForm } from "../components/add-todos"
import { ListTodos } from "../components/list-todos"
import { LogoutButton } from "../components/logout-button"
import { useAuth } from "../providers/AuthProvider"
export const TodosPage = () => {
    const { user } = useAuth()
    console.log(user);
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <LogoutButton />
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold  text-gray-900 dark:text-gray-50">Bienvenido {user.username}</h1>
                <p className="mb-10 dark:text-gray-50">¡Añade y completa tareas!</p>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Lista de tareas</h2>
                <TodosForm />
                <div className="space-y-2">
                    <ListTodos />
                </div>
            </div>
        </div >
    )
}