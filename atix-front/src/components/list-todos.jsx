import { useEffect } from "react";
import { useTodos } from "../providers/TodoProvider"
export const ListTodos = () => {
    const { todos, getTodos, deleteTodo, updateTodo } = useTodos()
    useEffect(() => {
        getTodos()
    }, [])

    if (!todos) {
        return <div className="text-white">Añada todos</div>
    }
    return (
        <div className="space-y-2">
            {
                todos.map((todo) => (
                    <TodoItem key={todo._id} todo={todo} changeStatus={updateTodo} deleteTodo={deleteTodo} />
                ))

            }
        </div>
    )
}

const TodoItem = ({ todo, deleteTodo, changeStatus }) => {

    const onDelete = (id) => {
        window.confirm("Are you sure you want to delete this todo?") && deleteTodo && deleteTodo(id);
    }

    return (
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-md px-4 py-2" >
            <div className="flex items-center">
                <input defaultChecked={todo.isCompleted} onClick={() => changeStatus(todo._id)} className="mr-2 text-blue-500 focus:ring-blue-500 focus:ring-offset-0" type="checkbox" />

                {
                    todo.isCompleted ? (
                        <span
                            className={"text-gray-900 dark:text-gray-100  line-through"}>
                            {todo.title}
                        </span>

                    ) : (
                        <span
                            className={"text-gray-900 dark:text-gray-100 "}>
                            {todo.title}
                        </span>

                    )
                }
            </div>
            <button onClick={() => onDelete(todo._id)} className="text-red-500 hover:text-red-600 focus:outline-none">
                <TrashIcon className="h-5 w-5" />
            </button>
        </div >

    )


}


function TrashIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}