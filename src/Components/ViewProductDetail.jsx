import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewProductDetail = () => {
  const data = useLoaderData();

  const { _id, brand, description, image, price, productName, productType, rating } = data;
  console.log(data);
  // post data
  const newCrtdDaata = {
    brand,
    description,
    image,
    price,
    productName,
    productType,
    rating,
  };
  console.log(newCrtdDaata);
  const handleCart = () => {
    fetch("https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCrtdDaata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added to Cart Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="card max-w-[90vw] my-10 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img className="max-h-screen w-fit" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p className="capitalize"> Brand: {brand}</p>
        <p>Price: {price}</p>
        <p>Product Type : {productType}</p>
        <p>Rating : {rating}/5</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button onClick={handleCart} className="btn btn-primary">
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProductDetail;
