import { Form } from 'react-bootstrap';
import { TodoData } from '../TodoItem';
import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';

type TodoFormProps = {
  data?: TodoData;
};

const TodoForm: ForwardRefRenderFunction<any, TodoFormProps> = (
  { data },
  ref
) => {
  const [title, setTitle] = useState(data?.title);
  const [content, setContent] = useState(data?.content);

  useImperativeHandle(ref, () => ({
    getData() {
      return {
        title,
        content,
      };
    },
  }));

  return (
    <Form>
      <Form.Group controlId='todoTitle' className='mb-4'>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter your title here...'
          value={title}
          onChange={e => setTitle(e.target.value)}
          autoFocus
        />
      </Form.Group>
      <Form.Group controlId='todoContent' className='mb-4'>
        <Form.Label>Content:</Form.Label>
        <Form.Control
          as='textarea'
          placeholder='Enter your content here...'
          value={content}
          onChange={e => setContent(e.target.value)}
          style={{ height: '200px', resize: 'none' }}
        />
      </Form.Group>
    </Form>
  );
};

export default forwardRef(TodoForm);
