/* eslint-disable react/prop-types */
import Package from "./Package";

const AvailablePakcages = ({ packages }) => {
  return (
    <div className="mx-12">
      <h1 className="text-center text-5xl">Available Packages</h1>
      <p className="text-center my-3">
        Discover tailored gym packages for your fitness goals. Enjoy top-notch
        equipment, classes, and personalized training. <br></br> Achieve your
        best with flexible plans for an active lifestyle.
      </p>
      <div className="grid grid-cols-2 gap-5 ">
        {packages.map((data) => (
          <Package key={data.id} data={data}></Package>
        ))}
      </div>
    </div>
  );
};

export default AvailablePakcages;
