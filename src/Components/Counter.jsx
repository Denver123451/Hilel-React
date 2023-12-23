import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handelIncrement = () => {
    setCounter(counter + 1);
  };

  const handelDecrement = () => {
    setCounter(counter - 1);
  };

  const handleClear = () => {
    setCounter(0);
  };

  return (
    <>
      <h2>{counter}</h2>

      <div>
        <button onClick={handelIncrement}>+</button>
        <button onClick={handelDecrement}>-</button>
        <button onClick={handleClear}>C</button>
      </div>
    </>
  );
};
export default Counter;
