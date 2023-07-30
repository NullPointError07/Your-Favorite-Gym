/* eslint-disable react/prop-types */
const Box = ({ icon, heading, text }) => {
  return (
    <div className="flex-1 bg-white p-4 rounded-lg shadow-md mx-2">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">{heading}</h3>
        <p className="mt-2">{text}</p>
      </div>
    </div>
  );
};

const FrontPageSection = () => {
  return (
    <div className="mx-12">
      <div className="text-center">
        <h1 className="text-5xl">Four Pillars of Fitness</h1>
        <p className="my-3">
          The Four Pillars of Fitness: Workout, Progression, Nutrition,
          Recovery. Achieve balance, reach goals, and thrive.
        </p>
      </div>

      <div className="flex mt-8">
        <Box
          icon={<i className="fas fa-chart-bar fa-3x"></i>}
          heading="Progression"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Box
          icon={<i className="fas fa-dumbbell fa-3x"></i>}
          heading="Workout"
          text="Vivamus nec massa vitae quam aliquet pellentesque."
        />
        <Box
          icon={<i className="fas fa-utensils fa-3x"></i>}
          heading="Nutrition"
          text="Maecenas ut lorem at elit facilisis lacinia non eu ipsum."
        />
        <Box
          icon={<i className="fas fa-bed fa-3x"></i>}
          heading="Recovery"
          text="Curabitur at tortor vel massa commodo vestibulum eu a odio."
        />
      </div>
    </div>
  );
};

export default FrontPageSection;
