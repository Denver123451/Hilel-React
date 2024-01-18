import { useContext, useEffect, useState } from "react";
import ToDo from "../Components/ToDo.jsx";
import { SwitchContext } from "../Components/context/ToogleContext.jsx";

const ToDos = () => {
  const { value, onChange } = useContext(SwitchContext);

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
      <button onClick={() => onChange(!value)}>Open page</button>
      <div>
        {value && (
          <ul>
            {todos.map((todo) => (
              <ToDo key={todo.id} todo={todo}></ToDo>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ToDos;
