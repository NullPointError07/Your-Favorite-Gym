import {
  faBarsProgress,
  faBed,
  faBowlFood,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import Box from "./Box";

const FrontPageSection = () => {
  return (
    <div className="m-12">
      <div className="text-center">
        <h1 className="text-5xl">Four Pillars of Fitness</h1>
        <p className="my-3">
          The Four Pillars of Fitness: Workout, Progression, Nutrition,
          Recovery. Achieve balance, reach goals, and thrive.
        </p>
      </div>

      <div className="flex mt-8">
        <Box
          icon={faDumbbell}
          heading="Workout"
          text="Elevate your body and mind"
        />
        <Box
          icon={faBowlFood}
          heading="Nutrition"
          text="Fuel for a thriving life"
        />
        <Box
          icon={faBarsProgress}
          heading="Progression"
          text=" Strive, grow, conquer"
        />

        <Box
          icon={faBed}
          heading="Recovery"
          text="Renew, rejuvenate, restore"
        />
      </div>
    </div>
  );
};

export default FrontPageSection;
