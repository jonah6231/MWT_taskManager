import { TodoData } from '../components/TodoItem';

const formatTodoData = (data: any): TodoData => {
  return {
    id: data._id,
    title: data.title,
    content: data.content,
    createdDate: new Date(data.createdDate),
  };
};

export default formatTodoData;
