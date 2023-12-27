const ToDo = ({ todo }) => {
  console.log(todo);
  return (
    <li>
      <h2>{todo.title}</h2>
      <p>{todo.body}</p>
    </li>
  );
};

export default ToDo;
