import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Components/Nav";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvideer";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Components/Loader";

const MainLayout = () => {
  const { dark } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <div className={`${dark ? "dark" : ""} `}>
      <Nav></Nav>
      {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
