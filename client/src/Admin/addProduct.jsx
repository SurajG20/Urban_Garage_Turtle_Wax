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
     Object.keys(formData).forEach((key) => {
       if (key === "images") {
         [...formData[key]].forEach((file) => {
           dataToSend.append(key, file); // Ensures multiple files are appended
         });
       } else {
         dataToSend.append(key, formData[key]);
       }
     });

     try {
       const response = await fetch("http://localhost:3000/products", {
         method: "POST",
         body: dataToSend,
       });
       const result = await response.json();
       console.log(result);
     } catch (error) {
       console.error("Error uploading product:", error);
     }
   };

  return (
    <div className="bg-white min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow ">
        <section>
          <div className="container ">
            <div className="isolate bg-white px-6 py-24  lg:px-8">
              <form
                action="#"
                method="POST"
                className="mx-auto mt-16 max-w-6xl sm:mt-10"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {/* Car Name */}
                  <div>
                    <label
                      htmlFor="car-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Car Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id="car-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Name/Model"
                      />
                    </div>
                  </div>
                  {/* Car Model Name*/}
                  <div>
                    <label
                      htmlFor="car-model"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Car Model Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="model"
                        id="car-model"
                        autoComplete="car-model"
                        className="block w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Model"
                      />
                    </div>
                  </div>
                  {/* Car Model Year */}
                  <div className="">
                    <label
                      htmlFor="modelyear"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Car Model Year
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="modelyear"
                        id="modelyear"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Model Year"
                      />
                    </div>
                  </div>
                  {/* Company/Brand Name */}
                  <div className="">
                    <label
                      htmlFor="make"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Company/Brand Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="make"
                        id="make"
                        autoComplete="Company Name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Company/Brand Name"
                      />
                    </div>
                  </div>
                  {/* car price  */}
                  <div className="">
                    <label
                      htmlFor="price"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Price
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="Number"
                        name="price"
                        id="price"
                        autoComplete="price"
                        className="block w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Price.."
                      />
                    </div>
                  </div>
                  {/* Car Owner */}
                  <div className="">
                    <label
                      htmlFor="owner"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Car Owner
                    </label>
                    <div className="mt-2.5">
                      <select
                        type="text"
                        name="owner"
                        id="owner"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Model Year"
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
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Reg.Year
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="Number"
                        name="reg"
                        id="reg.year"
                        className="block w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Registration Year"
                      />
                    </div>
                  </div>
                  {/* Kilometers driven  */}
                  <div className="">
                    <label
                      htmlFor="kms"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Kilomerters Driven
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="Number"
                        name="kms"
                        id="kms"
                        autoComplete="kms"
                        className="block w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Kilometers Driven"
                      />
                    </div>
                  </div>
                  {/* fuel */}
                  <div className="">
                    <label
                      htmlFor="fuel"
                      className=" text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2"
                    >
                      Fuel Type{" "}
                      <span className="text-sm text-gray-600">
                        (Disel/Petrol/EV/Hybrid)
                      </span>
                    </label>
                    <div className="mt-2.5">
                      <select
                        type="text"
                        name="fuel"
                        id="fuel"
                        autoComplete="kms"
                        className="block w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Kilometers Driven"
                      >
                        <option value="Disel">Disel</option>
                        <option value="Disel">Petrol</option>
                        <option value="Disel">EV</option>
                        <option value="Disel">Hybrid</option>
                      </select>
                    </div>
                  </div>
                  {/* Car Color */}
                  <div className="">
                    <label
                      htmlFor="colour"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Car Color
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="colour"
                        id="colour"
                        autoComplete="colour"
                        className="block w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Car Color.."
                      />
                    </div>
                  </div>
                  {/* insurance */}
                  <div className="">
                    <label
                      htmlFor="insurance"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Insurance
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="insurance"
                        id="insurance"
                        autoComplete="insurance"
                        className="block w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                        placeholder="Enter Insurance Details.."
                      />
                    </div>
                  </div>
                  {/* Image Upload */}
                  <div className="">
                    <label
                      htmlFor="images"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Upload Images
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="file"
                        name="images"
                        id="images"
                        multiple
                        accept="image/*"
                        className="block w-full text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
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
