import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { SuccessAlert, ErrorAlert } from "./Alerts";

function SellForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    modelYear: "",
    ownerType: "",
    kilometersDriven: "",
    carName: "",
    fuelType: "",
    regCity: "",
    address: "",
  });

  // Setup mutation using React Query and Axios
  const formMutation = useMutation((data) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/sellCar-users`, data);
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formMutation.mutate(formData, {
      onSuccess: (response) => {
        console.log("Success:", response.data);
        setFormData({
          fullName: "",
          mobileNumber: "",
          modelYear: "",
          ownerType: "",
          kilometersDriven: "",
          carName: "",
          fuelType: "",
          regCity: "",
          address: "",
        });
        
      },
      onError: (error) => {
        console.error("Error:", error);
        // Handle errors, e.g., show error notifications
      },
    });
  };

  return (
    <>
      <>
        {formMutation.isSuccess && <SuccessAlert msg="Saved Successfully!" />}
        {formMutation.isError && (
          <ErrorAlert msg="Failed! Try again..." />
        )}
      </>
      <div className="h-full bg-white flex flex-col justify-between p-5 rounded-xl">
        {/* first container  */}
        <div>
          <h3 className="h2 text-theme-semibold md:flex  gapx-2 py-2 h-12 items-center ">
            <span className="text-black">Please Enter Your </span>
            <span className="text-theme-red hover:underline">
              Car Details
            </span>{" "}
          </h3>
          <p className="text-theme-500 text-theme-red">
            Fields marked with an * are required
          </p>
        </div>
        {/* second container  */}
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5 md:gap-10"
        >
          <div>
            <label
              htmlFor="full-name"
              className="text-theme-500 flex items-center"
            >
              Full Name<span className="text-red-600">*</span>
            </label>
            <input
              required
              name="fullName"
              value={formData.fullName}
              className="px-2 py-2 h-12 bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="text-theme-500 flex items-center"
            >
              Mobile <span className="text-red-600">*</span>
            </label>
            <input
              required
              name="mobileNumber"
              value={formData.mobileNumber}
              className="px-2 py-2 h-12 bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
              type="number"
              placeholder="Enter Mobile Number"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="modelYear"
              className="text-theme-500 flex items-center"
            >
              Model Year<span className="text-red-600">*</span>
            </label>
            <input
              id="modelYear"
              required
              name="modelYear"
              value={formData.modelYear}
              className="px-2 py-2 h-12 bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
              type="number"
              placeholder="Enter Model Year"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="owner-type"
              className="text-theme-500 flex items-center"
            >
              Owner Type<span className="text-red-600">*</span>
            </label>
            <select
              required
              name="ownerType"
              value={formData.ownerType}
              id="owner-type"
              className="px-2 py-2 h-12 bg-gray-200 w-full text-lg text-theme-500 border-theme-gray outline-none rounded-md cursor-pointer"
              onChange={handleChange}
            >
              <option value="">--- Select Owner Type ---</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="number"
              className="text-theme-500 flex items-center"
            >
              kilometers Driven <span className="text-red-600">*</span>
            </label>
            <input
              required
              name="kilometersDriven"
              value={formData.kilometersDriven}
              className="px-2 py-2 h-12 bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
              type="number"
              placeholder="Enter kilometers Driven"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="car-name"
              className="text-theme-500 flex items-center"
            >
              Car Name/Car Model<span className="text-red-600">*</span>
            </label>
            <input
              className="px-2 py-2 h-12  bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
              required
              name="carName"
              value={formData.carName}
              type="text"
              placeholder="Enter Car Brand/Model"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="owner-type"
              className="text-theme-500 flex items-center"
            >
              Fuel Type<span className="text-red-600">*</span>
            </label>
            <select
              required
              name="fuelType"
              value={formData.fuelType}
              id="fuel-type"
              className="px-2 py-2 h-12 bg-gray-200 w-full text-lg text-theme-500 border-theme-gray outline-none rounded-md cursor-pointer"
              onChange={handleChange}
            >
              <option value="">--- Select Fuel Type ---</option>
              <option value="first">Petrol</option>
              <option value="Disel">Disel</option>
              <option value="EV">EV</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="city-name"
              className="text-theme-500 flex items-center"
            >
              Reg.City<span className="text-red-600">*</span>
            </label>
            <input
              required
              name="regCity"
              value={formData.regCity}
              className="px-2 py-2 h-12 bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
              placeholder="Select City"
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="address"
              className="text-theme-500 flex items-center"
            >
              Address<span className="text-red-600">*</span>
            </label>
            <input
              required
              name="address"
              value={formData.address}
              className="px-2 py-2 h-12 bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
              placeholder="Select State"
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            {formMutation.isLoading ? (
              <button
                type="button"
                className="bg-theme-red text-white flex justify-center items-center py-2 px-5 rounded-lg"
                disabled
              >
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  {/* SVG content for spinner icon */}
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.231 5.789 3.222 7.778l2.778-2.487zM14.708 22a7.962 7.962 0 005.292-2H24c-1.231 1.789-3 3.208-5.084 4.084l-4.208-4.084z"
                  ></path>
                </svg>
                Processing...
              </button>
            ) : (
              <button
                type="submit"
                className="bg-theme-red text-white py-2 px-8 rounded-lg"
              >
                Submit
              </button>
            )}
          </div>
        </form>
        {/* third container  */}
      </div>
    </>
  );
}

export default SellForm;
