import { createContext } from 'react';
import { TodoData } from '../components/TodoItem';

type TodoContextValue = {
  todos: TodoData[];
  triggerLoadTodos: () => void;
  addNewTodo: (data: TodoData) => void | Promise<any>;
  updateTodo: (id: string, data: TodoData) => void | Promise<any>;
  deleteTodo: (id: string) => void | Promise<any>;
};

const TodoContext = createContext<TodoContextValue>({
  todos: [],
  triggerLoadTodos: () => {},
  addNewTodo: (_: any) => {},
  updateTodo: (_: string, _1: any) => {},
  deleteTodo: (_: string) => {},
});

export default TodoContext;
