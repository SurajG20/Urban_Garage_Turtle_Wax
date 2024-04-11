import React from "react";

function AdminLogin() {
  return (
    <div
      className="h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: "url('assets/logo/dark-logo.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="p-5 w-1/3 bg-white rounded-lg shadow-lg z-10">
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
