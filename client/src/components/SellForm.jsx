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
          // address: "",
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
        {formMutation.isError && <ErrorAlert msg="Failed! Try again..." />}
      </>
      <div className="h-full bg-white flex flex-col justify-between p-4 rounded-xl">
        {/* first container  */}
        <div>
          <h3 className="h2 text-theme-semibold md:flex  md:justify-start gap-x-2 py-2  items-center ">
            <span className="text-black">Please Enter Your </span>
            <span className="text-theme-red hover:underline">Car Details</span>
          </h3>
          <p className="text-theme-500 text-theme-red">
            Fields marked with an * are required
          </p>
        </div>
        {/* second container  */}
        <form
          onSubmit={handleSubmit}
          className=" grid md:grid-cols-2 gap-x-5 gap-y-2"
        >
          <div>
            <label
              htmlFor="full-name"
              className="text-theme-500 flex items-center"
            >
              Full Name<span className="text-red-600">*</span>
            </label>
            <input
              id="full-name"
              required
              name="fullName"
              value={formData.fullName}
              className="px-2 py-2 h-10 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
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
              id="number"
              required
              maxLength={10}
              minLength={10}
              name="mobileNumber"
              value={formData.mobileNumber}
              className="px-2 py-2 h-10 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
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
              name="modelYear"
              maxLength={4}
              value={formData.modelYear}
              className="px-2 py-2 h-10 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
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
              id="owner-type"
              type="number"
              maxLength={2}
              name="ownerType"
              value={formData.ownerType}
              className="px-2 py-2 h-10 bg-gray-200 w-full text-sm text-theme-500 border-theme-gray outline-none rounded-md cursor-pointer"
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
              htmlFor="driven-km"
              className="text-theme-500 flex items-center"
            >
              kilometers Driven <span className="text-red-600">*</span>
            </label>
            <input
              id="driven-km"
              name="kilometersDriven"
              value={formData.kilometersDriven}
              className="px-2 py-2 h-10 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
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
              id="car-name"
              className="px-2 py-2 h-10  bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
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
              name="owner-type"
              typeof="text"
              value={formData.fuelType}
              id="fuel-type"
              className="px-2 py-2 h-10 bg-gray-200 w-full text-sm text-theme-500 border-theme-gray outline-none rounded-md cursor-pointer"
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
              name="regCity"
              value={formData.regCity}
              className="px-2 py-2 h-10 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
              placeholder="Select City"
              onChange={handleChange}
            />
          </div>
          {/* <div className="md:col-span-2">
            <label
              htmlFor="address"
              className="text-theme-500 flex items-center"
            >
              Address<span className="text-red-600">*</span>
            </label>
            <input
              name="address"
              value={formData.address}
              className="px-2 py-2 h-10 bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
              placeholder="Select State"
              onChange={handleChange}
            />
          </div> */}
          <div className="mt-5">
            {formMutation.isLoading ? (
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
                    strokelinecap="round"
                    strokelinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="195.9"
                    x2="173.3"
                    y2="173.3"
                    strokelinecap="round"
                    strokelinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="128"
                    y1="224"
                    x2="128"
                    y2="192"
                    strokelinecap="round"
                    strokelinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="195.9"
                    x2="82.7"
                    y2="173.3"
                    strokelinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="32"
                    y1="128"
                    x2="64"
                    y2="128"
                    strokelinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="60.1"
                    x2="82.7"
                    y2="82.7"
                    strokelinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
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
