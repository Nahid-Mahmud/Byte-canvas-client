import React from "react";
import Swal from "sweetalert2";

export const CartItem = ({ cart, setCartData, cartData }) => {
  const { image, productName, price, rating, brand, _id } = cart;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Product has been deleted.", "success");
              const remaining = cartData?.filter((scart) => scart._id !== _id);
              setCartData(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="cartImage" className="h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>Price: {price}</p>
        <p>Rating : {rating}</p>
        <p className="text-sm">Brand : {brand}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
