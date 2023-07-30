import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="text-7xl">
          One Step Closer To Your <br></br>
          <span className="text-green-500">Dream Body</span>
        </h1>
        <p className="text-lg">
          Transform Your Body, Elevate Your Mind. Get Fit, Stay Strong, Be
          Unstoppable. Embrace the Gym, Unleash Your Power.
        </p>
        <button>Get Started</button>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
