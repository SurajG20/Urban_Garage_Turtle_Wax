import React from "react";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div
      className="h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center relative p-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0  opacity-50 bg-gray-50 blur-xl"></div>{" "}
      {/* Overlay */}
      <div className="p-5 w-full md:w-1/3 bg-white rounded-lg shadow-lg z-10">
        <form>
          <div className="mb-10 ">
            <div className="h-16 w-16 m-auto mb-5">
              <Link to={"/"}>
                <img
                  className="h-full w-full object-cover object-center"
                  src="assets/logo/light-logo.png"
                  alt="Urban Garage"
                />
              </Link>
            </div>
            <h2 className="h2 text-theme-semibold text-center">Admin Login</h2>
          </div>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              placeholder="Enter Username"
              type="email"
              id="email"
              name="email"
              className="py-2 px-3 mt-1 bg-gray-200 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              className="py-2 px-3 mt-1 bg-gray-200 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none rounded-md"
            />
          </div>
          <div className="mb-4">
            <button className="bg-theme-red text-white py-2 px-5 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
