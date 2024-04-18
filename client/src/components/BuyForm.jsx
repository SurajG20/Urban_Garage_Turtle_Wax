import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";

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
    <div>
      <div className="h-full bg-white flex flex-col justify-between p-5 rounded-xl">
        {/* first container  */}
        <div>
          <h3
            className="h2 text-theme-semibold md:flex  gapx-2 py-2 h-12
           items-center "
          >
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
              required
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
              required
              id="modelYear"
              name="modelYear"
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
              required
              name="carBrand"
              value={formData.carBrand}
              id="carBrand"
              className="px-2 py-2 h-12
               bg-gray-200 w-full text-lg text-theme-500 border-theme-gray outline-none rounded-md"
              onChange={handleChange}
            >
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
              className="px-2 py-2 h-12
               bg-gray-200 w-full text-lg text-theme-500 border-theme-gray outline-none rounded-md"
              onChange={handleChange}
            >
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
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-theme-red text-white text-theme-semibold"
            >
              Submit
            </button>
          </div>
        </form>
        {/* third container  */}
      </div>
    </div>
  );
}

export default BuyForm;
