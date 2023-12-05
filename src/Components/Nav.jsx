import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvideer";
import { FaMoon, FaSun } from "react-icons/fa";

const Nav = () => {
  const { dark, setDark, user, signoutAll } = useContext(AuthContext);
  const handlesignOut = () => {
    signoutAll()
      .then(() => {
        console.log(`SignOut success`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li className="">
        <NavLink
          to={"/"}
          className="block  md:text-xl py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:lg:text-white dark:md:text-black  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          aria-current="page"
        >
          <button className="p-2"> Home</button>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addProduct"}
          className="block md:text-xl py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:lg:text-white dark:md:text-black  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          <button className="p-2"> Add Product</button>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/myCart"}
          className="block md:text-xl py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:lg:text-white dark:md:text-black  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          <button className="p-2"> My Cart </button>
        </NavLink>
      </li>
      {user ? (
        ""
      ) : (
        <li>
          <NavLink
            to={"/logIn"}
            className="block md:text-xl py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:lg:text-white dark:md:text-black  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            <button className="p-2"> Login </button>
          </NavLink>
        </li>
      )}
      <li
        className={`cursor-pointer mr-5 ${user ? "" : "hidden"}`}
        onClick={() => {
          setDark(!dark);
        }}
      >
        <button>
          {dark ? (
            <FaSun
              title="White Mode"
              className="text-2xl dark:text-black md:dark:text-white lg:text-white "
            />
          ) : (
            <FaMoon title="Dark Mode" className="text-xl text-black" />
          )}
        </button>
      </li>
    </>
  );

  return (
    <div className=" bg-white shadow-lg border z-50  border-gray-200 dark:bg-gray-800">
      <div className=" md:max-w-[90vw] mx-auto  ">
        <div className="navbar z-10   ">
          <div className="navbar-start">
            <div className="dropdown z-10">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <img
              className="md:h-32 h-20  w-auto"
              src="https://i.ibb.co/fSTHFwN/Byte-Canvas.png"
              alt="logo"
            />
            <p className="font-bold hidden md:inline-block text-2xl dark:text-gray-400">ByteCanvas</p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu items-center space-x-5 menu-horizontal px-1">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            <div
              className={`cursor-pointer mr-5 ${user ? "hidden" : ""}`}
              onClick={() => {
                setDark(!dark);
              }}
            >
              {dark ? (
                <FaSun
                  title="White Mode"
                  className="text-2xl dark:text-white lg:text-white "
                />
              ) : (
                <FaMoon title="Dark Mode" className="text-xl text-black" />
              )}
            </div>
            {user ? (
              <div className="flex items-center md:gap-3 gap-1 mr-2">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <p className="w-28 text-sm dark:text-white md:w-auto">{user?.displayName}</p>
              </div>
            ) : (
              ""
            )}
            {user ? (
              <button
                onClick={handlesignOut}
                className="btn text-xs px-1 py-0 m-0 btn-warning "
              >
                Signout
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
