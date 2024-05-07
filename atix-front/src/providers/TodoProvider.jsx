import { createContext, useContext, useState } from "react";
import {
    createTodoRequest,
    deleteTodoRequest,
    getTodoRequest,
    getTodosRequest,
    updateTodoRequest,
} from "../api/todos";

const TodoContext = createContext(null);

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos must be used within a TodosProvider");
    }
    return context;
}


export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        const res = await getTodosRequest();
        setTodos(res.data);
    };


    const deleteTodo = async (id) => {
        try {
            const res = await deleteTodoRequest(id);
            if (res.status === 204)
                setTodos(todos.filter((todo) => todo._id !== id));

        } catch (error) {
            console.log(error);
        }
    }
    const createTodo = async (todo) => {
        try {
            const res = await createTodoRequest(todo);
            setTodos([...todos, res.data]);
        } catch (error) {
            console.log(error);
        }
    };
    const getTodo = async (id) => {
        try {
            const res = await getTodoRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
    const updateTodo = async (id) => {
        try {
            const res = await updateTodoRequest(id);
            // todos.map((todo) => {
            //     if (todo._id === res.data._id) {
            //         todo.isCompleted = res.data.isCompleted;
            //     }
            // });
            console.log(res.data);
            setTodos(
                todos.map((todo) => {
                    if (todo._id === res.data._id) {
                        todo.isCompleted = res.data.isCompleted;
                    }
                    return todo;
                }));
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <TodoContext.Provider
            value={{ todos, createTodo, deleteTodo, updateTodo, getTodos, getTodo }}
        >
            {children}
        </TodoContext.Provider>
    )
}


