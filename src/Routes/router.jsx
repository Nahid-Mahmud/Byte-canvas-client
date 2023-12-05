// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPAge/ErrorPage";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Gooogle from "../Pages/AllBrands/Google/Gooogle";
import Apple from "../Pages/AllBrands/Apple/Apple";
import Samsung from "../Pages/AllBrands/Samsung/Samsung";
import Sony from "../Pages/AllBrands/Sony/Sony";
import Huawei from "../Pages/AllBrands/Huawei/Huawei";
import Xiaomi from "../Pages/AllBrands/Xiaomi/Xiaomi";
import ViewProductDetail from "../Components/ViewProductDetail";
import UpdatedProduct from "../Components/UpdatedProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./brands.json"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/google",
        element: <Gooogle></Gooogle>,
        loader: () => fetch("http://localhost:5000/google"),
      },
      {
        path: "/apple",
        element: <Apple></Apple>,
        loader: () => fetch("http://localhost:5000/apple"),
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch("http://localhost:5000/samsung"),
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () => fetch("http://localhost:5000/sony"),
      },
      {
        path: "/huawei",
        element: <Huawei></Huawei>,
        loader: () => fetch("http://localhost:5000/huawei"),
      },
      {
        path: "/xiaomi",
        element: <Xiaomi></Xiaomi>,
        loader: () => fetch("http://localhost:5000/xiaomi"),
      },
      {
        path: "/apple/:id",
        element: (
          <PrivateRoutes>
            <ViewProductDetail></ViewProductDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/apple/${params.id}`),
      },
      {
        path: "/google/:id",
        element: (
          <PrivateRoutes>
            <ViewProductDetail></ViewProductDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/google/${params.id}`),
      },
      {
        path: "/sony/:id",
        element: (
          <PrivateRoutes>
            <ViewProductDetail></ViewProductDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/sony/${params.id}`),
      },
      {
        path: "/huawei/:id",
        element: (
          <PrivateRoutes>
            <ViewProductDetail></ViewProductDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/huawei/${params.id}`),
      },
      {
        path: "/xiaomi/:id",
        element: (
          <PrivateRoutes>
            <ViewProductDetail></ViewProductDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/xiaomi/${params.id}`),
      },
      {
        path: "/samsung/:id",
        element: (
          <PrivateRoutes>
            <ViewProductDetail></ViewProductDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/samsung/${params.id}`),
      },
      {
        path: "/apple/:id/update",
        element: (
          <PrivateRoutes>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/apple/${params.id}`),
      },
      {
        path: "/google/:id/update",
        element: (
          <PrivateRoutes>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/google/${params.id}`),
      },
      {
        path: "/sony/:id/update",
        element: (
          <PrivateRoutes>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/sony/${params.id}`),
      },
      {
        path: "/huawei/:id/update",
        element: (
          <PrivateRoutes>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/huawei/${params.id}`),
      },
      {
        path: "/xiaomi/:id/update",
        element: (
          <PrivateRoutes>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/xiaomi/${params.id}`),
      },
      {
        path: "/samsung/:id/update",
        element: (
          <PrivateRoutes>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/samsung/${params.id}`),
      },
    ],
  },
]);

export default router;
