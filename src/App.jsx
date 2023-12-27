import { useState } from "react";
import ToDos from "./Components/To-Dos.jsx";

function App() {
  const [isCounterOpen, setIsCounterOpen] = useState(false);

  return (
    <>
      <h1>My to-do list</h1>

      {isCounterOpen ? <ToDos /> : ""}
      <button onClick={() => setIsCounterOpen(!isCounterOpen)}>
        Show to-do list
      </button>
    </>
  );
}

export default App;
