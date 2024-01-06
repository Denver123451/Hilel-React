import { useContext } from "react";
import { SiteContext } from "../Components/context/SiteInfoContext.jsx";

const Home = () => {
  const data = useContext(SiteContext);
  return (
    <>
      <p>Site made: {data.dataOfPublic}</p>
      <h2>This is our main page!</h2>
      <p>What did you expect?</p>
    </>
  );
};

export default Home;
