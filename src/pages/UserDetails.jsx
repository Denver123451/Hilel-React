import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserDetails = () => {
  const params = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const resoult = await fetch(
          `https://jsonplaceholder.typicode.com/users/${params.id}`,
        );

        if (!resoult.ok) {
          throw new Error("failed to fetch");
        }

        const data = await resoult.json();
        setUser(data);
      } catch (e) {
        console.log(e.massage);
      }
    };
    getUser();
  }, [params.id]);

  return (
    <div>
      <h3> Name: {user.name}</h3>
      <p>User Name: {user.username} </p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>
        Address: {user?.address?.city} | {user?.address?.street} |{" "}
        {user?.address?.suite}
      </p>
    </div>
  );
};

export default UserDetails;
