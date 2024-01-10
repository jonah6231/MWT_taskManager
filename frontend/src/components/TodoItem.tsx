import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import DeleteDialog from './dialogs/DeleteDialog';
import UpdateDialog from './dialogs/UpdateDialog';

export type TodoData = {
  id?: string;
  title?: string;
  content?: string;
  createdDate?: Date;
};

type TodoItemProps = {
  data: TodoData;
  onUpdate?: (id: string, data: TodoData) => void | Promise<any>;
  onDelete?: (id: string) => void | Promise<any>;
};

const TodoItem: React.FC<TodoItemProps> = ({ data }) => {
  const [showTodos, setShowTodos] = useState(false);

  const handleCloseTodo = () => setShowTodos(false);
  const handleShowTodo = () => setShowTodos(true);

  return (
    <>
      <Card
        className='my-4'
        onClick={handleShowTodo}
        style={{ cursor: 'pointer' }}
      >
        <Card.Header className='d-flex justify-content-between'>
          <Card.Title>{data.title || 'Untitled todo'}</Card.Title>
          <div className='d-flex gap-2'>
            <UpdateDialog data={data} />
            <DeleteDialog id={data.id || ''} />
          </div>
        </Card.Header>
        <Card.Body>{data.content}</Card.Body>
      </Card>

      <Modal show={showTodos} onHide={handleCloseTodo} centered>
        <Modal.Header closeButton>
          <Modal.Title>{data.title || 'Untitled todo'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.content}</Modal.Body>
        <Modal.Footer>{`Created at ${data.createdDate?.toLocaleDateString(
          'en-US',
          { dateStyle: 'long' }
        )}`}</Modal.Footer>
      </Modal>
    </>
  );
};

export default TodoItem;
