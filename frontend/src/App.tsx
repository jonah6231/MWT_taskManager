import { Container } from 'react-bootstrap';
import AddTodo from './components/forms/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <Container>
      <AddTodo />
      <TodoList />
    </Container>
  );
}

export default App;
