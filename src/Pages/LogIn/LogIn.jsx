import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvideer";
import { toast } from "react-toastify";
import axios from "axios";

const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { googleSignIn, emailPasswordSignIn } = useContext(AuthContext);
  const [signUpError, setsignUpError] = useState(null);
  // email pass

  const emailPassLogin = (e) => {
    e.preventDefault();
    setsignUpError("");
    console.log(`first`);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
    emailPasswordSignIn(email, password)
      .then((result) => {
        const currentUser = result.user;
        if (currentUser) {
          toast(" Login Successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }

        const user = { email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location.state ? location.state : "/");
            }
          });
      })
      .catch((error) => {
        console.log(error);
        setsignUpError(error?.message);
      });
    // e.target.reset();
  };

  // google

  const handleGoogleButton = () => {
    setsignUpError("");
    googleSignIn()
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        if (currentUser) {
          toast(" Login Successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setsignUpError(error?.message);
      });
  };

  return (
    <div className="dark:bg-gray-900 flex flex-col gap-10 py-10  ">
      <div className=" mx-auto  shadow-md dark:shadow-emerald-50   lg:w-1/2">
        <form
          onSubmit={emailPassLogin}
          className="dark:bg-gray-900 rounded px-8 p-6    "
        >
          <p className="capitalize text-2xl font-bold text-center dark:text-white m-10 border-b w-fit mx-auto">
            log in to your ByteCanvas Account!{" "}
          </p>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Username"
              name="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block dark:text-gray-200  text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              required
            />
            <p className="text-red-500 text-xs italic">{signUpError}</p>
          </div>
          <div className="flex  items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
            <p className="dark:text-gray-200 ">
              Don't have an account?
              <br />
              <Link
                className="inline-block align-baseline font-bold  text-blue-500 text-xl hover:text-blue-800"
                to={"/signup"}
              >
                {" "}
                Sign Up.
              </Link>
            </p>
          </div>
        </form>
        <div></div>
        <div className="my-10  w-fit  mx-auto">
          <button
            type=""
            onClick={handleGoogleButton}
            className="hover:scale-110 transition items-center text-base flex outline gap-5 px-5 focus:ring-4 focus:outline-none font-medium rounded-lg  py-2.5 text-center dark:bg-blue-600 "
          >
            <FcGoogle className="text-lg"></FcGoogle> Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
