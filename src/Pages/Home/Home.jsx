import { useLoaderData } from "react-router-dom";
import BrandCards from "./BrandCards";
import ContactUs from "./ContactUs";
import HowItWorks from "./HowItWorks";
import { useEffect, useState } from "react";
import Banner from "./Banner";
const Home = () => {
  const brandList = useLoaderData();

  const [brandData, setBrandData] = useState(null);

  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrandData(data));
  }, []);

  return (
    <div className=" dark:bg-gray-900">
      <div>
        <Banner></Banner>
      </div>
      <div className="max-w-[90vw] py-10 mx-auto">
        <p className=" font-bold text-3xl dark:text-white mb-10 border-b-2 pb-3 w-fit mx-auto">
          Brands We Are Proud to Work With
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
          {brandData?.map((brand, index) => (
            <BrandCards key={index} brand={brand}></BrandCards>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center max-w-[90vw] py-10 mx-auto">
        <ContactUs></ContactUs>
      </div>
      <hr className="max-w-[90vw] mx-auto" />
      <div>
        <HowItWorks></HowItWorks>
      </div>
    </div>
  );
};

export default Home;

// https://i.ibb.co/6Xyptyt/Printme-1.png
