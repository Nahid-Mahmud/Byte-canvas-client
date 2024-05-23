import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { LuBird } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className=" rounded-b-lg shadow-2xl border    dark:bg-gray-800 ">
      <div className="w-full  mx-auto p-4 md:max-w-[90vw] md:py-8">
        <div className="flex flex-col md:flex-row items-center md:justify-around">
          <div className="flex items-center gap-2">
            <LuBird className="text-2xl dark:text-white" />
            <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ByteCanvas</p>
          </div>
          <div className=" hidden  text-2xl lg:flex flex-col gap-5">
            <p className="dark:text-white">Social Accounts</p>

            <div className="flex justify-center gap-10 text-2xl">
              <FaGoogle className=" dark:text-white hover:scale-110 transition cursor-pointer" />
              <FaFacebook className=" dark:text-white hover:scale-110 transition cursor-pointer" />
              <FaLinkedin className=" dark:text-white hover:scale-110 transition cursor-pointer" />
            </div>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to={"/"} className="mr-4 hover:underline md:mr-6 ">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/addProduct"} className="mr-4 hover:underline md:mr-6">
                Add Product
              </Link>
            </li>
            <li>
              <Link to={"myCart"} className="mr-4 hover:underline md:mr-6 ">
                My Cart
              </Link>
            </li>
            <li>
              <Link to={"/signUp"} className="hover:underline">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex lg:hidden justify-center gap-10 text-2xl">
          <FaGoogle className=" dark:text-white hover:scale-110 transition cursor-pointer" />
          <FaFacebook className=" dark:text-white hover:scale-110 transition cursor-pointer" />
          <FaLinkedin className=" dark:text-white hover:scale-110 transition cursor-pointer" />
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-sm text-gray-500 sm:text-center text-center dark:text-gray-400">
          © 2023 ByteCanvas™ . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
