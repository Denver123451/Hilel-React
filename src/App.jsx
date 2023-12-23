import Counter from "./Components/Counter.jsx";
import { useState } from "react";

function App() {
  const [isCounterOpen, setIsCounterOpen] = useState(false);

  return (
    <>
      <h1>My counter</h1>

      {isCounterOpen ? (
        <Counter />
      ) : (
        <button onClick={() => setIsCounterOpen(!isCounterOpen)}>
          Show counter
        </button>
      )}
    </>
  );
}

export default App;
