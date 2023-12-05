import { useLoaderData } from "react-router-dom";
import ProductCard from "../../../Components/ProductCard";
import Slider from "../../../Components/Slider";
import NoDataFound from "../../../Components/NoDataFound";

const Apple = () => {
  const data = useLoaderData();
  return (
    <div className="dark:bg-gray-900">
      <div>
        <Slider></Slider>
      </div>
      <p className="dark:text-white w-fit mx-auto pt-10 text-2xl font-bold border-b-2">Latest Products</p>
      <div>
        {data.length === 0 ? (
          <NoDataFound></NoDataFound>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-w-[90vw] py-10 mx-auto">
            {data.map((product, index) => (
              <ProductCard key={index} product={product}></ProductCard>
            ))}{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apple;
