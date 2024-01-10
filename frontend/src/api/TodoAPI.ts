import axios from 'axios';
import { TodoData } from '../components/TodoItem';
import formatTodoData from '../utils/formatTodoData';
import formatTodoArray from '../utils/formatTodoArray';

const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api/todos';

const TodoAPI = {
  async getAllTodos() {
    try {
      const res = await axios.get(API_URL);
      return formatTodoArray(res.data);
    } catch (e: any) {
      console.error(e.message);
    }
  },

  async getTodoById(id: string) {
    try {
      const res = await axios.get(`http://localhost:5000/api/todos/${id}`);
      return formatTodoData(res.data);
    } catch (e: any) {
      console.error(e.message);
    }
  },

  async addTodo(data: TodoData) {
    try {
      await axios.post('http://localhost:5000/api/todos', data);
    } catch (e: any) {
      console.error(e.message);
    }
  },

  async deleteTodo(id: string) {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
    } catch (e: any) {
      console.error(e.message);
    }
  },

  async updateTodo(id: string, data: TodoData) {
    try {
      await axios.put(`http://localhost:5000/api/todos/${id}`, data);
    } catch (e: any) {
      console.error(e.message);
    }
  },
};

export default TodoAPI;
