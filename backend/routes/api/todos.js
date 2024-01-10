const TodoController = require('../../controllers/TodoController');

const todoRouter = require('express').Router();

todoRouter.get('/', TodoController.getAll);

todoRouter.get('/:id', TodoController.getTodo, TodoController.getById);

todoRouter.post('/', TodoController.post);

todoRouter.put('/:id', TodoController.getTodo, TodoController.put);

todoRouter.delete('/:id', TodoController.getTodo, TodoController.delete);

module.exports = todoRouter;
