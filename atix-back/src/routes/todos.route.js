import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  updateTodo,
  getTodos,
  getTodo,
} from "../controllers/todos.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/parseValidation.middleware.js";
import { createTodoSchema } from "../schemas/todo.schema.js";

const router = Router();

router.get("/todos", auth, getTodos);

router.post("/todos", auth, validateSchema(createTodoSchema), createTodo);

router.get("/todos/:id", auth, getTodo);

router.put("/todos/:id", auth, updateTodo);

router.delete("/todos/:id", auth, deleteTodo);

export default router;
