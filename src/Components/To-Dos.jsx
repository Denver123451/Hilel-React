import { useEffect, useState } from "react";
import ToDo from "./To-do.jsx";

const ToDos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const resoult = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );

        if (!resoult.ok) {
          throw new Error("failed to fetch");
        }

        const data = await resoult.json();
        setTodos(data);
      } catch (e) {
        console.log(e.massage);
      }
    };
    getTodos();
  }, []);

  return (
    <>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo}></ToDo>
        ))}
      </ul>
    </>
  );
};

export default ToDos;
