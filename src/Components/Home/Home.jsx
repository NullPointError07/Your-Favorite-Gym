import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div>This is Home</div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
