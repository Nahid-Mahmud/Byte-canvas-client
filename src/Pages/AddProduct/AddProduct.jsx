import React from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleSubmitData = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const image = e.target.image.value;

    const productType = e.target.productType.value;

    const rating = e.target.rating.value;

    const description = e.target.description.value;

    const brand = e.target.brand.value;

    const price = e.target.price.value;
    const productallDetail = {
      productName,
      image,
      productType,
      rating,
      description,
      brand,
      price,
    };
    // post data
    fetch(`http://localhost:5000/${brand}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productallDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Next",
          });
        }
      });

    console.log(productallDetail);
    e.target.reset();
  };
  return (
    <div className="dark:bg-gray-900 py-10 ">
      <p className="dark:text-white border-b-2 w-fit mx-auto mb-5  text-center text-2xl font-semibold">
        Add Your Product
      </p>
      <form
        onSubmit={handleSubmitData}
        className="md:w-1/2 w-[90vw] shadow-md p-10 dark:shadow-emerald-50  mx-auto"
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Type
          </label>
          <input
            type="text"
            id="productType"
            name="productType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Rating
          </label>
          <input
            type="text"
            id="rating"
            name="rating"
            placeholder="1 to 5"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Short Description
          </label>
          <input
            name="description"
            type="text"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="text-xl space-y-3 dark:text-white space-x-3">
          <p>Please select Brand.</p>
          <input type="radio" name="brand" value="apple" />
          <label>Apple</label>
          <br />
          <input type="radio" name="brand" value="samsung" />{" "}
          <label>Samsung</label>
          <br />
          <input type="radio" name="brand" value="google" />
          <label>Google</label>
          <br />
          <input type="radio" name="brand" value="sony" />
          <label>Sony</label>
          <br />
          <input type="radio" name="brand" value="huawei" />
          <label>Huawei</label>
          <br />
          <input type="radio" name="brand" value="xiaomi" />
          <label>Xiaomi</label>
        </div>
        <div className="mt-10 pb-10">
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
