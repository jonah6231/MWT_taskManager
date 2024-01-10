const todoRouter = require('./api/todos');

const route = app => {
  app.use('/api/todos', todoRouter);
};

module.exports = route;
