import React, { useState } from "react";
import { useMutation } from "react-query";

function SellForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    manufactureYear: "",
    ownerType: "",
    kilometersDriven: "",
    carName: "",
    fuelType: "",
    regCity: "",
    address: "",
  });
  const mutation = useMutation((newData) => {
    return fetch("/api/submit-car-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div>
      <div className="h-full bg-white flex flex-col justify-between p-5 rounded-xl">
        {/* first container  */}
        <div>
          <h3 className="h2 text-theme-semibold md:flex  gap-2 items-center ">
            <span className="text-black">Please Enter Your </span>
            <span className="text-theme-red hover:underline">
              Car Details
            </span>{" "}
          </h3>
          <p className="text-theme-500">Fields marked with an * are required</p>
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
              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
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
              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
              placeholder="Enter Mobile Number"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="full-name"
              className="text-theme-500 flex items-center"
            >
              Model Year<span className="text-red-600">*</span>
            </label>
            <input
              required
              name="manufactureYear"
              value={formData.manufactureYear}
              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
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
              className="p-2 bg-gray-200 w-full text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              onChange={handleChange}
            >
              <option value="first">First Owner</option>
              <option value="second">Second Owner</option>
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
              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
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
              className="p-2  bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
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
              className="p-2 bg-gray-200 w-full text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              onChange={handleChange}
            >
              <option value="first">Petrol</option>
              <option value="second">Disel</option>
              <option value="second">EV</option>
              <option value="second">Hybrid</option>
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
              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
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
              name="state-name"
              value={formData.address}
              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
              placeholder="Select State"
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <button
              type="button"
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

export default SellForm;
