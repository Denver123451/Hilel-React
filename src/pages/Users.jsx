import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SwitchContext } from "../Components/context/ToogleContext.jsx";

const Users = () => {
  const [users, setUsers] = useState([]);

  const { value, onChange } = useContext(SwitchContext);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const resoult = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!resoult.ok) {
          throw new Error("failed to fetch");
        }

        const data = await resoult.json();
        setUsers(data);
      } catch (e) {
        console.log(e.massage);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <h2> Users page</h2>
      <button onClick={() => onChange(!value)}>Open page</button>
      <div>
        {value && (
          <div>
            <ul>
              {users.map((user) => (
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
