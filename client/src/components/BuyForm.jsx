import React from 'react'

function BuyForm() {
  return (
    <div>
      <div className="h-full bg-white flex flex-col justify-between p-5 rounded-xl">
        {/* first container  */}
        <div>
          <h3 className="h2 text-theme-semibold flex gap-2 items-center ">
            <span className="text-black">Please Enter Your </span>
            <span className="text-theme-red hover:underline">
              Car Details
            </span>{" "}
          </h3>
          <p className="text-theme-500">Fields marked with an * are required</p>
        </div>
        {/* second container  */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="full-name"
              className="text-theme-500 flex items-center"
            >
              Name<span className="text-red-600">*</span>
            </label>
            <input
              required
              name="full-name"
              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
              placeholder="Enter Name"
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
              name="number"
              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div>
            <label
              htmlFor="car-name"
              className="text-theme-500 flex items-center"
            >
              Car<span className="text-red-600">*</span>
            </label>
            <input
              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              required
              name="car-name"
              type="text"
              placeholder="Enter Car Brand/Model"
            />
          </div>
          <div>
            <label
              htmlFor="service-name"
              className="text-theme-500 flex items-center"
            >
              Service<span className="text-red-600">*</span>
            </label>
            <input
              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              name="service-name"
              type="text"
              placeholder="Enter Select Service"
            />
          </div>
          <div>
            <label
              htmlFor="state-name"
              className="text-theme-500 flex items-center"
            >
              State<span className="text-red-600">*</span>
            </label>
            <input
              required
              name="state-name"
              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
              placeholder="Select State"
            />
          </div>
          <div>
            <label
              htmlFor="city-name"
              className="text-theme-500 flex items-center"
            >
              City<span className="text-red-600">*</span>
            </label>
            <input
              required
              name="city-name"
              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
              type="text"
              placeholder="Select City"
            />
          </div>
        </div>
        {/* third container  */}
        <div className="mt-5">
          <button className="px-5 py-2 rounded-lg bg-theme-red text-white text-theme-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyForm