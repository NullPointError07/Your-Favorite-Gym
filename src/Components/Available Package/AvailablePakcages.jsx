/* eslint-disable react/prop-types */
import { useState } from "react";
import Package from "./Package";

const AvailablePakcages = ({ packages }) => {
  const [showAll, setshowAll] = useState(false);
  const handleShowAll = () => {
    setshowAll(true);
  };

  return (
    <div className="mx-12">
      <h1 className="text-center text-5xl">Available Packages</h1>
      <p className="text-center my-3">
        Discover tailored gym packages for your fitness goals. Enjoy top-notch
        equipment, classes, and personalized training. <br></br> Achieve your
        best with flexible plans for an active lifestyle.
      </p>
      <div className="grid grid-cols-2 gap-5 ">
        {packages.slice(0, showAll ? 10 : 4).map((data) => (
          <Package key={data.id} data={data}></Package>
        ))}
      </div>
      <div className="text-center mt-4">
        {!showAll && <button onClick={handleShowAll}>See All Packages</button>}
      </div>
    </div>
  );
};

export default AvailablePakcages;
