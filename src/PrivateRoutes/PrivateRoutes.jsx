import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvideer";
import Loader from "../Components/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/logIn"}></Navigate>;
  }
};

export default PrivateRoutes;
