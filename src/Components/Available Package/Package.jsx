/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Package = ({ data }) => {
  const {
    id,
    logo,
    program_type,
    program_level,
    gym_company_name,
    cost,
    location,
  } = data;

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };

  const navigate = useNavigate();

  return (
    <div className="border-2 border-dotted border-teal-500 bg-teal-500 bg-opacity-20 rounded py-6 px-10">
      <div>
        <img src={logo} style={{ width: 150, height: 50 }} alt="" />
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

        {/* <Link to={`details/${id}`}>
          <button>View Details</button>
        </Link> */}
        <button onClick={() => navigate(`/details/${id}`)}>View Details</button>
      </div>
    </div>
  );
};

export default Package;
