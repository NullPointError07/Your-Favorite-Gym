import { useLoaderData, useParams } from "react-router-dom";

const PackageDetails = () => {
  const { id } = useParams();

  const details = useLoaderData();

  return (
    <div>
      <h1>
        Gym Facilities:
        <ol>
          {details.included_features.map((features, index) => (
            <li key={index}>
              {index + 1}. {features}
            </li>
          ))}
        </ol>
      </h1>
      <h1>Placeholder Details for Package ID: {details.id}</h1>
      <h1>
        Training Description: <p>{details.training_description}</p>
      </h1>
      <h1>
        Diet Description: <p>{details.diet_description}</p>
      </h1>
      <h1>
        Goal Achievement:
        <p>Expected years {details.goal_achievement_years} Years</p>
      </h1>
    </div>
  );
};

export default PackageDetails;

// loader function

export const packageDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4044/fitness_programs/${id}`);
  return res.json();
};
