import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedProduct = () => {
  const data = useLoaderData();
  const { _id, brand, description, image, price, productName, productType, rating } = data;
  const previousProductBrand = brand;

  const handleUpdate = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const image = e.target.image.value;
    const productType = e.target.productType.value;
    const rating = e.target.rating.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const brand = e.target.brand.value;
    if (previousProductBrand !== brand) {
      Swal.fire(
        "Wrong Brand Selected",
        `You are updating "${previousProductBrand}" product. Please Select "${previousProductBrand}" brand. `,
        "warning"
      );
      return;
    }
    const updatedProduct = {
      productName,
      image,
      productType,
      rating,
      description,
      price,
      brand,
    };
    fetch(`https://brand-shop-server-infqfbok2-nahid-mahmud.vercel.app/${brand}/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="dark:bg-gray-900 py-10 ">
      <p className="dark:text-white border-b-2 w-fit mx-auto mb-5  text-center text-2xl font-semibold">
        Update Your Product
      </p>
      <form onSubmit={handleUpdate} className="md:w-1/2 w-[90vw] shadow-md p-10 dark:shadow-emerald-50  mx-auto">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            defaultValue={productName}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={image}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Type</label>
          <input
            type="text"
            id="productType"
            name="productType"
            defaultValue={productType}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
          <input
            type="text"
            id="rating"
            name="rating"
            placeholder="1 to 5"
            defaultValue={rating}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            defaultValue={price}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
          <input
            name="description"
            type="text"
            id="description"
            defaultValue={description}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="text-xl space-y-3 dark:text-white space-x-3">
          <p className="capitalize">Please select Brand. ( {previousProductBrand} ) </p>
          <input type="radio" name="brand" value="apple" />
          <label>Apple</label>
          <br />
          <input type="radio" name="brand" value="samsung" /> <label>Samsung</label>
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
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatedProduct;
