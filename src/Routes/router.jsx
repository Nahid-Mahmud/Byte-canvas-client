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
        loader: () => fetch("https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/cart"),
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
        loader: () => fetch("https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/google"),
      },
      {
        path: "/apple",
        element: <Apple></Apple>,
        loader: () => fetch("https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/apple"),
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch("https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/samsung"),
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () => fetch("https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/sony"),
      },
      {
        path: "/huawei",
        element: <Huawei></Huawei>,
        loader: () => fetch("https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/huawei"),
      },
      {
        path: "/xiaomi",
        element: <Xiaomi></Xiaomi>,
        loader: () => fetch("https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/xiaomi"),
      },
      {
        path: "/apple/:id",
        element: (
          <PrivateRoutes>
            <ViewProductDetail></ViewProductDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/apple/${params.id}`),
      },
      {
        path: "/google/:id",
        element: (
          <PrivateRoutes>
            <ViewProductDetail></ViewProductDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/google/${params.id}`),
      },
      {
        path: "/sony/:id",
        element: (
          <PrivateRoutes>
            <ViewProductDetail></ViewProductDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/sony/${params.id}`),
      },
      {
        path: "/huawei/:id",
        element: (
          <PrivateRoutes>
            <ViewProductDetail></ViewProductDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/huawei/${params.id}`),
      },
      {
        path: "/xiaomi/:id",
        element: (
          <PrivateRoutes>
            <ViewProductDetail></ViewProductDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/xiaomi/${params.id}`),
      },
      {
        path: "/samsung/:id",
        element: (
          <PrivateRoutes>
            <ViewProductDetail></ViewProductDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/samsung/${params.id}`),
      },
      {
        path: "/apple/:id/update",
        element: (
          <PrivateRoutes>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/apple/${params.id}`),
      },
      {
        path: "/google/:id/update",
        element: (
          <PrivateRoutes>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/google/${params.id}`),
      },
      {
        path: "/sony/:id/update",
        element: (
          <PrivateRoutes>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/sony/${params.id}`),
      },
      {
        path: "/huawei/:id/update",
        element: (
          <PrivateRoutes>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/huawei/${params.id}`),
      },
      {
        path: "/xiaomi/:id/update",
        element: (
          <PrivateRoutes>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/xiaomi/${params.id}`),
      },
      {
        path: "/samsung/:id/update",
        element: (
          <PrivateRoutes>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/samsung/${params.id}`),
      },
    ],
  },
]);

export default router;
