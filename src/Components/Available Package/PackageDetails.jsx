import { useLoaderData, useParams } from "react-router-dom";

const PackageDetails = () => {
  const dataDetails = useLoaderData();
  const data = dataDetails.fitness_programs;
  console.log(data);

  const paramsId = useParams();
  const id = paramsId.id;

  return (
    <div>
      <h1>Placeholder Details for Package ID: {data.id}</h1>
      {/* Render the details of the package with the given ID */}
    </div>
  );
};

export default PackageDetails;
