import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { SuccessAlert, ErrorAlert } from "./Alerts";
function BuyForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    carBrand: "",
    modelYear: "",
    fuelType: "",
    budget: "",
  });

  // Setup mutation using React Query and Axios
  const formMutation = useMutation((data) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/buyCar-users`, data);
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
        setFormData({
          fullName: "",
          mobileNumber: "",
          carBrand: "",
          modelYear: "",
          fuelType: "",
          budget: "",
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
        <div className="mb-5">
          <h3
            className="h2 text-theme-semibold flex flex-col md:flex-row  gap-x-2 py-2 md:h-12
           items-start md:items-center justify-center  text-center md:text-left"
          >
            <span className="text-black">Please Enter Your </span>
            <span className="text-theme-red hover:underline">
              Car Details !
            </span>{" "}
          </h3>
          <p className="text-theme-500 text-start md:text-center text-theme-red">
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
              id="full-name"
              required
              name="fullName"
              value={formData.fullName}
              className="px-2 py-2 h-12
               bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
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
              className="px-2 py-2 h-12
               bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
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
              maxLength={4}
              value={formData.modelYear}
              className="px-2 py-2 h-12
               bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
              type="number"
              placeholder="Enter Model Year"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="carBrand"
              className="text-theme-500 flex items-center"
            >
              Car Brand/Car Model<span className="text-red-600">*</span>
            </label>
            <select
              id="carBrand"
              required
              type="text"
              name="carBrand"
              value={formData.carBrand}
              className="px-2 py-2 h-12
               bg-gray-200 w-full text-lg text-theme-500 border-theme-gray outline-none rounded-md cursor-pointer"
              onChange={handleChange}
            >
              <option value="">--- Select Brand ---</option>
              <option value="audi">Audi</option>
              <option value="Mercedes">Mercedes</option>
              <option value="BMW">BMW</option>
              <option value="Jaguar">Jaguar</option>
              <option value="Jaguar">luxus</option>
              <option value="Porche">Porche</option>
              <option value="Volvo">Volvo</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="fuelType"
              className="text-theme-500 flex items-center"
            >
              Fuel Type<span className="text-red-600">*</span>
            </label>
            <select
              id="fuelType"
              required
              type="text"
              name="fuelType"
              value={formData.fuelType}
              className="px-2 py-2 h-12
               bg-gray-200 w-full text-lg text-theme-500 border-theme-gray outline-none rounded-md cursor-pointer"
              onChange={handleChange}
            >
              <option value="">--- Select Fuel Type ---</option>
              <option value="Petrol">Petrol</option>
              <option value="Disel">Disel</option>
              <option value="EV">EV</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="text-theme-500 flex items-center"
            >
              Budget<span className="text-red-600">*</span>
            </label>
            <input
              id="budget"
              required
              name="budget"
              value={formData.budget}
              className="px-2 py-2 h-12
               bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
              type="number"
              placeholder="Enter Your Budget"
              onChange={handleChange}
            />
          </div>

          {/* <div className="hidden md:flex items-center justify-center">
            <h2 className="h2 text-theme-red text-theme-bold">
              URBAN GARAGE LUXURY CARS !
            </h2>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="195.9"
                    x2="82.7"
                    y2="173.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="32"
                    y1="128"
                    x2="64"
                    y2="128"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="60.1"
                    x2="82.7"
                    y2="82.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
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

export default BuyForm;
