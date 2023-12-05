import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    brand,
    description,
    image,
    price,
    productName,
    productType,
    rating,
  } = product;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className="h-96" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p className="capitalize font-medium">Brand Name : {brand}</p>
        <p>Product Type : {productType}</p>
        <p>Rating : {rating}/5 </p>
        <div className="card-actions justify-end">
          <Link to={`/${brand}/${_id}`}>
            {" "}
            <button className="btn btn-primary">Details</button>
          </Link>
          <Link to={`/${brand}/${_id}/update`}>
            <button className="btn btn-neutral">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
