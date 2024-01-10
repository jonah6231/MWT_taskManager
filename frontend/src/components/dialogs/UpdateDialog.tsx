import { MutableRefObject, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { TodoData } from '../TodoItem';
import TodoForm from '../forms/TodoForm';
import EditIcon from '../icons/EditIcon';
import useTodo from '../../hooks/useTodo';

type UpdateDialogProps = {
  data: TodoData;
};

const UpdateDialog: React.FC<UpdateDialogProps> = ({ data }) => {
  const { updateTodo } = useTodo();
  const formDataRef = useRef() as MutableRefObject<any>;

  const [show, setShow] = useState(false);

  const handleShowDialog = () => setShow(true);
  const handleCloseDialog = () => setShow(false);

  const handleSaveChanges = () => {
    updateTodo(data.id || '', formDataRef.current.getData());
    handleCloseDialog();
  };

  return (
    <div onClick={e => e.stopPropagation()}>
      <EditIcon onClick={handleShowDialog} />

      <Modal show={show} onHide={handleCloseDialog} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TodoForm ref={formDataRef} data={data} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleCloseDialog}>
            Cancel
          </Button>
          <Button variant='success' onClick={handleSaveChanges}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateDialog;
