import { useContext } from "react";
import ToDo from "../Components/ToDo.jsx";
import { SwitchContext } from "../Components/context/ToogleContext.jsx";
import useFetch from "../hooks/useFetch.jsx";

const ToDos = () => {
  const { value, onChange } = useContext(SwitchContext);

  const {
    data: todos,
    isError,
    isLoading,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>My Todos</h2>
      <button onClick={() => onChange(!value)}>Open page</button>
      <div>
        {value && (
          <div>
            {isError && <div>Failed to fetch data</div>}
            <ul>
              {!!todos &&
                todos.map((todo) => <ToDo key={todo.id} todo={todo}></ToDo>)}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ToDos;
