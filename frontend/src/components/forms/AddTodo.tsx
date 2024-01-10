import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddDialog from '../dialogs/AddDialog';

const AddTodo: React.FC = () => {
  const [showAdd, setShowAdd] = useState(false);

  const handleShowAdd = () => setShowAdd(true);
  const handleCloseAdd = () => setShowAdd(false);

  return (
    <div className='mt-3'>
      <Button variant='success' onClick={handleShowAdd}>
        Add new Todo
      </Button>

      <AddDialog show={showAdd} onClose={handleCloseAdd} />
    </div>
  );
};

export default AddTodo;
