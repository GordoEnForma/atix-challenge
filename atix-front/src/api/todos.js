import axios from "./axios";

export const getTodosRequest = async () => axios.get("/todos");

export const createTodoRequest = async (todo) => axios.post("/todos", todo);

export const updateTodoRequest = async (id) => axios.put(`/todos/${id}`, id);

export const deleteTodoRequest = async (id) => axios.delete(`/todos/${id}`);

export const getTodoRequest = async (id) => axios.get(`/todos/${id}`);
