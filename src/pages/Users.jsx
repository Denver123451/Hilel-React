import { useContext } from "react";
import { Link } from "react-router-dom";
import { SwitchContext } from "../Components/context/ToogleContext.jsx";
import useFetch from "../hooks/useFetch.jsx";

const Users = () => {
  const { isLoading, isError, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  const { value, onChange } = useContext(SwitchContext);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2> Users page</h2>
      <button onClick={() => onChange(!value)}>Open page</button>
      <div>
        {value && (
          <div>
            {isError && <div>Failed to fetch data</div>}
            <ul>
              {!!data &&
                data.map((user) => (
                  <li key={user.id}>
                    <Link to={`${user.id}`}>
                      <h3>User name {user.name}</h3>
                      <div>
                        {user.username} <br></br>
                        {user.email}
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Users;
