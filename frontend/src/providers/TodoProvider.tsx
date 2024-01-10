import { PropsWithChildren, useEffect, useState } from 'react';
import TodoContext from '../contexts/TodoContext';
import { TodoData } from '../components/TodoItem';
import TodoAPI from '../api/TodoAPI';

const TodoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<TodoData[]>([]);
  const [loadTodos, setLoadTodos] = useState(true);

  const triggerLoadTodos = () => {
    setLoadTodos(true);
  };

  const addNewTodo = async (data: TodoData) => {
    await TodoAPI.addTodo(data);
    setTodos([...todos, data]);
  };

  const updateTodo = async (id: string, data: TodoData) => {
    await TodoAPI.updateTodo(id, data);
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, ...data } : todo)));
  };

  const deleteTodo = async (id: string) => {
    await TodoAPI.deleteTodo(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    if (!loadTodos) return;

    TodoAPI.getAllTodos().then(setTodos);
    setLoadTodos(false);
  }, [loadTodos]);

  const value = {
    todos,
    triggerLoadTodos,
    addNewTodo,
    updateTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
