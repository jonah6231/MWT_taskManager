import { MutableRefObject, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import TodoForm from '../forms/TodoForm';
import useTodo from '../../hooks/useTodo';

type AddDialogProps = {
  show?: boolean;
  onClose?: () => void;
};

const AddDialog: React.FC<AddDialogProps> = props => {
  const formRef = useRef() as MutableRefObject<any>;
  const { addNewTodo } = useTodo();

  const handleAdd = () => {
    addNewTodo(formRef.current.getData());
    props.onClose?.();
  };

  return (
    <Modal show={props.show} onHide={props.onClose} centered>
      <Modal.Header>
        <Modal.Title>Add new Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TodoForm ref={formRef} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onClose}>
          Cancel
        </Button>
        <Button variant='success' onClick={handleAdd}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddDialog;
