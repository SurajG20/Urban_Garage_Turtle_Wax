import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { SuccessAlert, ErrorAlert } from "../components/Alerts";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

function UpdatePassword() {
  const [tab, setTab] = useState(true);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const loginMutation = useMutation(
    (data) => {
      return axios.put(
        `${import.meta.env.VITE_API_URL}/admin/update-password`,
        data
      );
    },
    {
      onSuccess: (data) => {
        login(data.data);
        navigate("/login");
      },

      onError: (error) => {
        setErrorMessage(
          error.response.data.error || "An unexpected error occurred"
        );
      },
    }
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const newpassword = event.target.newpassword.value;

    loginMutation.mutate({ username, password, newpassword });
  };

  return (
    <>
      <>
        {loginMutation.isSuccess && <SuccessAlert msg="Welcome Admin" />}
        {loginMutation.isError && <ErrorAlert msg="Update Password Failed.!" />}
      </>

      <div
        className="h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center relative p-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 opacity-50 bg-gray-50 blur-xl"></div>
        <div className="p-5 w-full md:w-1/3 bg-white rounded-lg shadow-lg z-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <div className="h-16 w-16 m-auto mb-5">
                <Link to={"/"}>
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="/assets/logo/light-logo.png"
                    alt="Urban Garage"
                  />
                </Link>
              </div>
              <h2 className="h2 text-theme-semibold text-center">
                Update Password
              </h2>
            </div>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block text-sm text-theme-semibold text-gray-700"
              >
                Username
              </label>
              <input
                placeholder="Enter Username"
                type="text"
                id="username"
                name="username"
                className="py-2 text-theme-semibold px-3 mt-1 bg-gray-200 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none rounded-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="Password-field"
                className="block text-sm text-theme-semibold text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  placeholder="Password"
                  type={`${visible ? "password" : "text"}`}
                  id="Password-field"
                  name="password"
                  className="py-2 text-theme-semibold px-3 mt-1 bg-gray-200 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none rounded-md"
                />
                {visible ? (
                  <FaEyeSlash
                    className="absolute right-2 top-1/3 hover:cursor-pointer"
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <FaEye
                    className="absolute right-2 top-1/3 hover:cursor-pointer"
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="newpassword"
                className="block text-sm text-theme-semibold text-gray-700"
              >
                New Password{" "}
                <span className="text-theme-red text-sm">
                  **new password should not be same as old password**
                </span>
              </label>
              <div className="relative">
                <input
                  placeholder="Create New Password"
                  type={`${tab ? "password" : "text"}`}
                  id="newpassword"
                  name="newpassword"
                  className="py-2 text-theme-semibold px-3 mt-1 bg-gray-200 ring-gray-300 focus:ring-2 focus:ring-theme-red focus:outline-none rounded-md"
                />
                {tab ? (
                  <FaEyeSlash
                    className="absolute right-2 top-1/3 hover:cursor-pointer"
                    onClick={() => setTab(false)}
                  />
                ) : (
                  <FaEye
                    className="absolute right-2 top-1/3 hover:cursor-pointer"
                    onClick={() => setTab(true)}
                  />
                )}
              </div>
              <Link to={"/login"} className="mt-1">
                <p className="text-sm text-end text-theme-500 text-blue-800 hover:text-blue-500">
                  Login
                </p>
              </Link>
            </div>
            <div className="mb-4">
              {loginMutation.isLoading ? (
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="195.9"
                      y1="60.1"
                      x2="173.3"
                      y2="82.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="224"
                      y1="128"
                      x2="192"
                      y2="128"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="195.9"
                      y1="195.9"
                      x2="173.3"
                      y2="173.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="128"
                      y1="224"
                      x2="128"
                      y2="192"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="60.1"
                      y1="195.9"
                      x2="82.7"
                      y2="173.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="32"
                      y1="128"
                      x2="64"
                      y2="128"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="60.1"
                      y1="60.1"
                      x2="82.7"
                      y2="82.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                  </svg>
                  Processing...
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-theme-red text-white py-2 px-5 rounded-lg text-theme-semibold"
                >
                  Update Password
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdatePassword;
