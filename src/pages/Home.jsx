import { useContext } from "react";
import { SiteContext } from "../Components/context/SiteInfoContext.jsx";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/slices/counterSlice.js";

const Home = () => {
  const data = useContext(SiteContext);
  const dispatch = useDispatch();
  const counterData = useSelector((state) => state.counter);

  console.log(counterData);

  const handelIncrement = () => {
    dispatch(increment());
  };
  const handelDecrement = () => {
    dispatch(decrement());
  };
  const handelReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <p>Today: {data.dataOfPublic}</p>
      <h2>Main counter of Ukraine!</h2>
      <div>Muscovites have already died: {counterData.counter}</div>

      <button onClick={handelIncrement}>+</button>
      <button onClick={handelDecrement}>-</button>
      <button onClick={handelReset}>Reset</button>
    </>
  );
};

export default Home;
