const formatTodoArray = (data: any) => {
  return data.map((todo: any) => ({
    id: todo._id,
    title: todo.title,
    content: todo.content,
    createdDate: new Date(todo.createdDate),
  }));
};

export default formatTodoArray;
