import { useTodos } from "../providers/TodoProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema } from "../schemas/todos.schema";
import { Input } from "./ui/Input";

export const TodosForm = () => {

    const { createTodo } = useTodos();

    const form = useForm({
        resolver: zodResolver(todoSchema),
        
    });
    const onSubmit = (data) => {
        console.log(data)
        const title = data.title;
        createTodo({
            title
        })
        form.reset();
    }
    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className=" mb-4" >
            <div className="w-full flex items-center">
                <Input
                    {...form.register("title")}
                    type="text"
                    placeholder="Añadir una nueva tarea"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    Añadir
                </button>
            </div>
            <div>
                {form.formState.errors.title && <p className="text-red-500 text-xs mt-1 ml-1.5">{form.formState.errors.title.message}</p>}
            </div>
        </ form >
    )

}