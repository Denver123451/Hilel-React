const ToDo = ({ todo }) => {
  return (
    <li>
      <h2>{todo.title}</h2>
      <p>{todo.body}</p>
    </li>
  );
};

export default ToDo;
