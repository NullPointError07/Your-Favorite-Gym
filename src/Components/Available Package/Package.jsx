import { useState } from "react";

const Package = ({ data }) => {
  const {
    logo,
    program_type,
    program_level,
    gym_company_name,
    duration_weeks,
    cost,
    location,
  } = data;

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };

  return (
    <div className="border-2 border-dotted border-teal-500 rounded py-6 px-10">
      <div>
        <h1 className="text-2xl">{program_type}</h1>
        <p className="my-4">{gym_company_name}</p>
        <div>
          {program_level.map((level, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`${
                selectedButtonIndex === index ? "selected" : ""
              } mr-3 `}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="flex space-x-6 my-3">
          <p>{location}</p>
          <p>Cost: {cost[selectedButtonIndex]}$</p>
        </div>

        <button>View Details</button>
      </div>
    </div>
  );
};

export default Package;
