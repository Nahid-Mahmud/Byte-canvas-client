import { Link } from "react-router-dom";

const BrandCards = ({ brand }) => {
  const { id, image, urlPath, name } = brand;

  return (
    <Link to={urlPath}>
      <div className=" rounded overflow-hidden shadow-lg dark:shadow-emerald-50">
        <img className="w-full h-96" src={image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold dark:text-white text-xl mb-2">{name}</div>
        </div>
      </div>
    </Link>
  );
};

export default BrandCards;
