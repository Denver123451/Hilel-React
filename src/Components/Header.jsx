import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "./context/SiteInfoContext.jsx";

const Header = () => {
  const data = useContext(SiteContext);
  return (
    <>
      <h2>Header</h2>
      <div> Site made by {data.made}</div>
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
