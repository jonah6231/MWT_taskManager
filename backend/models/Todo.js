const { model, Schema } = require('mongoose');

const Todo = new Schema({
  title: String,
  content: String,
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Todo', Todo, 'todos');
