import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DeleteIcon from '../icons/DeleteIcon';
import useTodo from '../../hooks/useTodo';

type DeleteDialogProps = {
  id: string;
};

const DeleteDialog: React.FC<DeleteDialogProps> = ({ id }) => {
  const { deleteTodo } = useTodo();
  const [show, setShow] = useState(false);

  const handleShowDialog = () => setShow(true);
  const handleCloseDialog = () => setShow(false);

  const handleAgree = () => {
    deleteTodo(id);
    handleCloseDialog();
  };

  return (
    <div onClick={e => e.stopPropagation()}>
      <DeleteIcon onClick={handleShowDialog} />

      <Modal show={show} onHide={handleCloseDialog} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this todo?</Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleCloseDialog}>
            No
          </Button>
          <Button variant='success' onClick={handleAgree}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteDialog;
