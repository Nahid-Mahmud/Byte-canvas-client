import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const routeError = useRouteError();
  console.log(routeError);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/0Z6hdWC/wave-haikei-1.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className=" space-y-5 my-10 flex flex-col items-center justify-center to-blue-900">
            <p className="text-center text-2xl font-semibold text-white">
              Are You Lost?{" "}
            </p>
            {routeError?.status ? (
              <div className="text-2xl  text-center font-semibold">
                <p>
                  Page {routeError?.statusText} : {routeError?.status}!!!
                </p>
                <p>{routeError.data}</p>
              </div>
            ) : (
              <div>
                <p className="text-3xlfont-semibold">
                  OOps ! Page Does Not Exist!
                </p>
              </div>
            )}
          </div>
          <Link to={"/"}>
            <button className="btn btn-primary">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
