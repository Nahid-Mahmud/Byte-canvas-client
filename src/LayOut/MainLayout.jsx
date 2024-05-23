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

/*
### Description:
ByteCanvas: A sleek e-commerce platform for top Technology and Electronics brands, featuring robust product management and user authentication.

### Key Features:
1. Comprehensive Product Management**: Add, update, and view detailed information for a wide range of tech products.
2. Secure User Authentication**: Email/password and social login options, with private routes for personalized experiences.
3. Dynamic Brand Pages**: Brand-specific product displays with advertising sliders and product details.

*/
