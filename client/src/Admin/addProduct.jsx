import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import Header from "./adminHeader";
import Footer from "../components/Footer";
import { SuccessAlert, ErrorAlert } from "../components/Alerts";


function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    modelNumber: "",
    price: "",
    description: "",
    images: [],
    thumbnail: "",
  });

  const { mutate, isLoading, isSuccess, isError, error } = useMutation(
    async (data) => {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/product`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return response.data;
    },
    {
      onSuccess: () => {
        setFormData({
          name: "",
          modelNumber: "",
          price: "",
          description: "",
          images: [],
          thumbnail: "",
        });
        console.log({ msg: "Product Saved Successfully!" });
      },
      onError: (error) => {
        console.log({ msg: `Failed to add product: ${error.message}` });
      },
    }
  );

  const handleInputChange = (event) => {
    const { name, files, type } = event.target;
    if (type === "file") {
      if (name === "images") {
        const selectedFiles =
          files.length > 8 ? Array.from(files).slice(0, 8) : Array.from(files);
        setFormData((prevState) => ({
          ...prevState,
          images: selectedFiles,
        }));
        if (files.length > 8) {
          alert("Only the first 8 images will be uploaded.");
        }
      } else if (name === "thumbnail") {
        // Ensure only one file is processed for thumbnail
        setFormData((prevState) => ({
          ...prevState,
          thumbnail: files[0],
        }));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: event.target.value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "images" && Array.isArray(value)) {
        value.forEach((file) => dataToSend.append("images", file));
      } else if (key === "thumbnail" && value) {
        dataToSend.append("thumbnail", value);
      } else {
        dataToSend.append(key, value);
      }
    });

    mutate(dataToSend);
  };

  return (
    <>
      {isSuccess && <SuccessAlert msg="Product Saved Successfully!" />}
      {isError && <ErrorAlert msg={`Error: ${error.message}`} />}
      <div className=" min-h-screen flex flex-col ">
        <Header />
        <main className="flex-grow ">
          <section>
            <div className="container px-6 py-24  lg:px-8">
              <div className="relative bg-gray-100 px-20 py-5 border rounded-lg shadow">
                <h1 className="mb-10 text-3xl text-theme-red text-theme-bold text-theme-semibold text-center uppercase hover:underline">
                  Add New Product
                </h1>
                <p className="text-sm text-theme-500 text-theme-red">
                  ** all fields in the form are mandatory **
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-16 max-w-6xl sm:mt-10"
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                    {/* Product Name */}
                    <div>
                      <label
                        htmlFor="product-name"
                        className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                      >
                        Product Name <span className="text-theme-red">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="product-name"
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          autoComplete="given-name"
                          className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                          placeholder="Enter Product Name"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    {/* Product Model Name*/}
                    <div>
                      <label
                        htmlFor="product-number"
                        className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                      >
                        Product Number<span className="text-theme-red">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="product-number"
                          required
                          type="text"
                          name="modelNumber"
                          value={formData.modelNumber}
                          autoComplete="car-model"
                          className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                          placeholder="Enter Car Model"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* car price  */}
                    <div className="Price">
                      <label
                        htmlFor="product-price"
                        className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                      >
                        Price<span className="text-theme-red">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="product-price"
                          required
                          type="Number"
                          name="price"
                          value={formData.price}
                          autoComplete="price"
                          className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                          placeholder="Enter Product Price.."
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/*Thubnail Image Upload */}
                    <div className="">
                      <label
                        htmlFor="thubnail-image"
                        className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                      >
                        Upload Thubnail Images
                        <span className="text-theme-red">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          required
                          type="file"
                          name="thumbnail"
                          id="thubnail-image"
                          accept="image/*"
                          onChange={handleInputChange}
                          className="text-theme-bold w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:text-theme-semibold flex items-center
                          file:bg-violet-50 file:text-violet-700
                          hover:file:bg-violet-100"
                        />
                      </div>
                    </div>
                    {/* Image Upload */}
                    <div className="">
                      <label
                        htmlFor="images"
                        className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                      >
                        Upload Images
                        <span className="text-theme-red font-medium">
                          **max 8 Images Can Uploaded**
                        </span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          required
                          type="file"
                          name="images"
                          id="images"
                          multiple
                          accept="image/*"
                          onChange={handleInputChange}
                          className="text-theme-bold w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:text-theme-semibold flex items-center
                          file:bg-violet-50 file:text-violet-700
                          hover:file:bg-violet-100"
                        />
                      </div>
                    </div>
                    {/* Descriptoin*/}
                    <div  className="col-span-2">
                      <label
                        htmlFor="product-description"
                        className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                      >
                        Descriptionr<span className="text-theme-red">*</span>
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          id="product-description"
                          required
                          maxLength={500}
                          type="text"
                          name="description"
                          value={formData.description}
                          autoComplete="car-model"
                          className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                          placeholder="Enter Product Description.."
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 ">
                    {isLoading ? (
                      <button
                        type="button"
                        className="bg-theme-red text-white flex justify-center items-center py-2 px-5 rounded-lg"
                        disabled
                      >
                        <svg
                          className="h-6 w-8 animate-spin stroke-white"
                          viewBox="0 0 256 256"
                        >
                          <line
                            x1="128"
                            y1="32"
                            x2="128"
                            y2="64"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="24"
                          ></line>
                          <line
                            x1="195.9"
                            y1="60.1"
                            x2="173.3"
                            y2="82.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="24"
                          ></line>
                          <line
                            x1="224"
                            y1="128"
                            x2="192"
                            y2="128"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="24"
                          ></line>
                          <line
                            x1="195.9"
                            y1="195.9"
                            x2="173.3"
                            y2="173.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="24"
                          ></line>
                          <line
                            x1="128"
                            y1="224"
                            x2="128"
                            y2="192"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="24"
                          ></line>
                          <line
                            x1="60.1"
                            y1="195.9"
                            x2="82.7"
                            y2="173.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="24"
                          ></line>
                          <line
                            x1="32"
                            y1="128"
                            x2="64"
                            y2="128"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="24"
                          ></line>
                          <line
                            x1="60.1"
                            y1="60.1"
                            x2="82.7"
                            y2="82.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="24"
                          ></line>
                        </svg>
                        Adding...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="bg-theme-red text-white py-2 px-8 rounded-lg"
                      >
                        Add New Product
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AddProduct;
