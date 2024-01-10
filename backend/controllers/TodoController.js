const Todo = require('../models/Todo');
let todoCount = 1;

const TodoController = {
  async getAll(_, res) {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async getById(_, res) {
    res.json(res.todo);
  },

  async post(req, res) {
    try {
      const todo = new Todo({
        title: req.body.title?.trim() || `Untitled todo #${todoCount++}`,
        content: req.body.content?.trim() || '',
      });
      const newTodo = await todo.save();
      res.status(201).json(newTodo);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  async put(req, res) {
    if (req.body.title != null)
      res.todo.title = req.body.title.trim() || `Untitled todo #${todoCount++}`;
    if (req.body.content != null) res.todo.content = req.body.content.trim();

    try {
      const updatedTodo = await res.todo.save();
      res.json(updatedTodo);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async delete(_, res) {
    try {
      await res.todo.deleteOne();
      res.json({ message: 'Deleted todo successfully!' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async getTodo(req, res, next) {
    let todo;
    try {
      todo = await Todo.findById(req.params.id);
      if (todo == null)
        return res.status(404).json({ message: 'Todo not found!' });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }

    res.todo = todo;
    next();
  },
};

module.exports = TodoController;
