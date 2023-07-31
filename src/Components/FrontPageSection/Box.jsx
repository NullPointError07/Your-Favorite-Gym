/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Box = ({ icon, heading, text }) => {
  return (
    <div className="flex-1 bg-teal-500 bg-opacity-50 p-4 rounded-lg shadow-md mx-2 ">
      <div className="flex items-center justify-center h-12 w-12 mb-3 ms-4 bg-teal-50 bg-opacity-20 text-teal">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">{heading}</h3>
        <p className="mt-2">{text}</p>
      </div>
    </div>
  );
};

export default Box;
