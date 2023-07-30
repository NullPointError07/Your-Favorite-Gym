import frontPageImage from "../../assets/frontPageImage.png";
import FrontPageSection from "../FrontPageSection/FrontPageSection";

const FrontPage = () => {
  return (
    <div>
      <div className="flex items-center mx-12">
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
            className="w-full h-auto"
          />
        </div>
      </div>
      <FrontPageSection></FrontPageSection>
    </div>
  );
};

export default FrontPage;
