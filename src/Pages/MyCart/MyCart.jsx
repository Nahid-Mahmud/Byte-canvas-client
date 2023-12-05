import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CartItem } from "./CartItem";

const MyCart = () => {

  const data = useLoaderData();
  const [cartData, setCartData] =useState(data)
  console.log(data);
  return (
    <div className="grid grid-cols-1 py-10 md:grid-cols-2  lg:grid-cols-3 max-w-[90vw] mx-auto gap-10 ">
      {cartData.map((cart, index) => (
        <CartItem cartData={cartData} setCartData={setCartData} key={index} cart={cart}></CartItem>
      ))}
    </div>
  );
};

export default MyCart;
