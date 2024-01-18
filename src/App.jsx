import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./Components/Header.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Todos from "./pages/Todos.jsx";
import Users from "./pages/Users.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import SwitchContext from "./Components/context/ToogleContext.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/todos" element={<Todos />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
