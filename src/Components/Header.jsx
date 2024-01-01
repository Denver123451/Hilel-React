import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h2>Header</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/todos">ToDos</NavLink>
      </nav>
      <hr></hr>
    </>
  );
};

export default Header;
