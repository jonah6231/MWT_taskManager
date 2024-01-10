import useTodo from '../hooks/useTodo';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const { todos, deleteTodo } = useTodo();

  return todos.map(todoData => (
    <TodoItem
      key={todoData.id}
      data={{ ...todoData, createdDate: new Date(todoData.createdDate || '') }}
      onDelete={deleteTodo}
    />
  ));
};

export default TodoList;
