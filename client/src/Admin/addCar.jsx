import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import Header from "./adminHeader";
import Footer from "../components/Footer";
import { SuccessAlert, ErrorAlert } from "../components/Alerts";

function AddCar() {
  const [formData, setFormData] = useState({
    name: "",
    make: "",
    price: "",
    description: "",
    images: [],
    thumbnail: "",
  });

  const { mutate, isLoading, isSuccess, isError, error } = useMutation(
    async (data) => {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/car`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return response.data;
    },
    {
      onSuccess: () => {
        setFormData({
          name: "",
          model: "",
          modelyear: "",
          make: "",
          price: "",
          owner: "",
          reg: "",
          kms: "",
          fuel: "",
          colour: "",
          insurance: "",
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
        // Select only the first 8 files if more than 8 are uploaded
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
              <div className="relative bg-gray-100 px-20 py-5 border shadow-md">
                <h1 className="mb-10 text-3xl text-theme-red text-theme-bold text-theme-semibold text-center uppercase hover:underline">
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
                          value={formData.name}
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
                          value={formData.model}
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
                          type="number"
                          maxLength={4}
                          name="modelyear"
                          value={formData.modelyear}
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
                          value={formData.make}
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
                          value={formData.price}
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
                          value={formData.owner}
                          id="owner"
                          autoComplete="organization"
                          className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                          placeholder="Enter Car Model Year"
                          onChange={handleInputChange}
                        >
                          <option value="">--select owner Type--</option>
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
                          value={formData.reg}
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
                          value={formData.kms}
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
                          value={formData.fuel}
                          id="fuel"
                          autoComplete="fuel"
                          className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                          placeholder="Enter Kilometers Driven"
                          onChange={handleInputChange}
                        >
                          <option value="--/--">--select Fuel Type--</option>
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
                          value={formData.colour}
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
                          value={formData.insurance}
                          id="insurance"
                          autoComplete="insurance"
                          className="text-theme-bold w-full rounded-md border-0 px-3.5 py-2 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none bg-gray-200"
                          placeholder="Enter Insurance Details.."
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
                        Upload Images<span className="text-theme-red">*</span>
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
                            strokeWidth="24"
                          ></line>
                          <line
                            x1="195.9"
                            y1="60.1"
                            x2="173.3"
                            y2="82.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="24"
                          ></line>
                          <line
                            x1="224"
                            y1="128"
                            x2="192"
                            y2="128"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="24"
                          ></line>
                          <line
                            x1="195.9"
                            y1="195.9"
                            x2="173.3"
                            y2="173.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="24"
                          ></line>
                          <line
                            x1="128"
                            y1="224"
                            x2="128"
                            y2="192"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="24"
                          ></line>
                          <line
                            x1="60.1"
                            y1="195.9"
                            x2="82.7"
                            y2="173.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="24"
                          ></line>
                          <line
                            x1="32"
                            y1="128"
                            x2="64"
                            y2="128"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="24"
                          ></line>
                          <line
                            x1="60.1"
                            y1="60.1"
                            x2="82.7"
                            y2="82.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                        Add New Car
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

export default AddCar;
