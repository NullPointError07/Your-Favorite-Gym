import { useLoaderData } from "react-router-dom";
import frontPageImage from "../../assets/frontPageImage2.png";
import FrontPageSection from "../FrontPageSection/FrontPageSection";
import AvailablePakcages from "../Available Package/AvailablePakcages";

const FrontPage = () => {
  const data = useLoaderData();

  return (
    <div>
      <div className="bg-teal-500 bg-opacity-50">
        <div className="flex items-center mx-12 ">
          <div>
            <h1 className="text-7xl">
              One Step <br></br> Closer To Your <br></br>
              <span className="text-green-500">Dream Body</span>
            </h1>
            <p className="text-lg my-6">
              Transform Your Body, Elevate Your Mind. <br></br> Get Fit, Stay
              Strong, Be Unstoppable. <br></br> Embrace the Gym, Unleash Your
              Power.
            </p>
            <button>Get Started</button>
          </div>
          <div className="flex-1">
            <img
              src={frontPageImage}
              alt="imageplaceholder"
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>
      </div>
      <FrontPageSection></FrontPageSection>
      <AvailablePakcages packages={data.fitness_programs}></AvailablePakcages>
    </div>
  );
};

export default FrontPage;
