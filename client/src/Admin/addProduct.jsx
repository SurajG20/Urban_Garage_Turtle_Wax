import React, { useState } from "react";
import Header from "./adminHeader";
import Footer from "../components/Footer";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AddProduct() {
  const [formData, setFormData] = useState({
    images: [],
  });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (files) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataToSend = new FormData();

    // Append files as 'images' in FormData
    if (formData.images.length) {
      Array.from(formData.images).forEach((file) => {
        dataToSend.append("images", file); // Ensure 'images' is used on the backend to retrieve files
      });
    }

    // Append other form data
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "images") {
        // Avoid appending 'images' as it is handled separately
        dataToSend.append(key, value);
      }
    });

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        body: dataToSend, // Send FormData
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      console.log(result);
      alert("Product added successfully!");
      // Redirect to products page

    } catch (error) {
      console.error("Error uploading product:", error);
      alert(`Failed to add product: ${error.message}`);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow ">
        <section>
          <div className="container px-6 py-24  lg:px-8">
            <div className="relative bg-gray-100 px-20 py-5 border rounded-lg shadow">
            
              <h1 className="text-3xl text-theme-red text-theme-bold text-theme-semibold text-center uppercase hover:underline">
                Add New CAR
              </h1>
              <p className="text-sm text-theme-500 text-theme-red">
                ** all fields in the form are mandatory **
              </p>
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-16 max-w-6xl sm:mt-10"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {/* Car Name */}
                  <div>
                    <label
                      htmlFor="car-name"
                      className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                    >
                      Car Name <span className="text-theme-red">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="text"
                        name="name"
                        id="car-name"
                        autoComplete="given-name"
                        className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Name/Model"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* Car Model Name*/}
                  <div>
                    <label
                      htmlFor="car-model"
                      className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                    >
                      Car Model Name<span className="text-theme-red">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="text"
                        name="model"
                        id="car-model"
                        autoComplete="car-model"
                        className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Model"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* Car Model Year */}
                  <div className="">
                    <label
                      htmlFor="modelyear"
                      className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                    >
                      Car Model Year<span className="text-theme-red">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="text"
                        name="modelyear"
                        id="modelyear"
                        autoComplete="organization"
                        className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Model Year"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* Company/Brand Name */}
                  <div className="">
                    <label
                      htmlFor="make"
                      className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                    >
                      Company/Brand Name
                      <span className="text-theme-red">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="text"
                        name="make"
                        id="make"
                        autoComplete="Company Name"
                        className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Company/Brand Name"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* car price  */}
                  <div className="">
                    <label
                      htmlFor="price"
                      className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                    >
                      Price<span className="text-theme-red">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="Number"
                        name="price"
                        id="price"
                        autoComplete="price"
                        className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Price.."
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* Car Owner */}
                  <div className="">
                    <label
                      htmlFor="owner"
                      className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                    >
                      Car Owner<span className="text-theme-red">*</span>
                    </label>
                    <div className="mt-2.5">
                      <select
                        required
                        type="text"
                        name="owner"
                        id="owner"
                        autoComplete="organization"
                        className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Model Year"
                        onChange={handleInputChange}
                      >
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                      </select>
                    </div>
                  </div>
                  {/* Reg.Year */}
                  <div className="">
                    <label
                      htmlFor="reg.year"
                      className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                    >
                      Reg.No<span className="text-theme-red">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="text"
                        name="reg"
                        id="reg.year"
                        className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Registration Year"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* Kilometers driven  */}
                  <div className="">
                    <label
                      htmlFor="kms"
                      className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                    >
                      Kilomerters Driven
                      <span className="text-theme-red">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="Number"
                        name="kms"
                        id="kms"
                        autoComplete="kms"
                        className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Kilometers Driven"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* fuel */}
                  <div className="">
                    <label
                      htmlFor="fuel"
                      className=" text-sm text-theme-semibold  leading-6 text-gray-900 flex items-center gap-2"
                    >
                      Fuel Type <span className="text-theme-red">*</span>
                      <span className="text-sm text-gray-600">
                        (Diesel/Petrol/EV/Hybrid)
                      </span>
                    </label>
                    <div className="mt-2.5">
                      <select
                        required
                        type="text"
                        name="fuel"
                        id="fuel"
                        autoComplete="kms"
                        className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Kilometers Driven"
                        onChange={handleInputChange}
                      >
                        <option value="Diesel">Diesel</option>
                        <option value="Petrol">Petrol</option>
                        <option value="EV">EV</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>
                  {/* Car Color */}
                  <div className="">
                    <label
                      htmlFor="colour"
                      className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                    >
                      Car Color<span className="text-theme-red">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="text"
                        name="colour"
                        id="colour"
                        autoComplete="colour"
                        className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Color.."
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* insurance */}
                  <div className="">
                    <label
                      htmlFor="insurance"
                      className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                    >
                      Insurance<span className="text-theme-red">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="text"
                        name="insurance"
                        id="insurance"
                        autoComplete="insurance"
                        className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Insurance Details.."
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* Image Upload */}
                  <div className="">
                    <label
                      htmlFor="images"
                      className="text-theme-bold text-sm text-theme-semibold flex items-center leading-6 text-gray-900"
                    >
                      Upload Images<span className="text-theme-red">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="file"
                        name="images" // This should match the name used in parser.array()
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
                </div>
                <div className="mt-10 ">
                  <button
                    type="submit"
                    className="text-theme-bold m-auto w-4/5 text-center rounded-md bg-red-600 px-3.5 py-2.5 flex justify-center text-sm text-theme-semibold  items-center text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AddProduct;
