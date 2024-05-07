import Todo from "../models/todo.model.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).populate("user");
    res.json(todos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = new Todo({
      title,
      isCompleted: false,
      user: req.user.id,
    });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deletedTask = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTask)
      return res.status(404).json({ message: "Todo no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    // const { isCompleted } = req.body;
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo no encontrado" });

    const todoUpdated = await Todo.findByIdAndUpdate(
      req.params.id,
      { isCompleted: !todo.isCompleted },
      { new: true }
    );

    if (!todoUpdated)
      return res.status(404).json({ message: "Todo no encontrado" });

    return res.json(todoUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo no encontrado" });
    return res.json(todo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
