import React,{useState} from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { SuccessAlert, ErrorAlert } from "../components/Alerts";


function AdminLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const loginMutation = useMutation(
    (data) => {
      return axios.post(`${import.meta.env.VITE_API_URL}/admin`, data);
    },
    {
      onSuccess: (data) => {
        login(data.data);
        navigate("/admin-dashboard");
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

    loginMutation.mutate({ username, password });
  };

  return (
    <>
      <>
        {loginMutation.isSuccess && <SuccessAlert msg="Login Successful!" />}
        {loginMutation.isError && (
          <ErrorAlert msg="Login Failed! Try again..." />
        )}
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
            <div className="mb-10">
              <div className="h-16 w-16 m-auto mb-5">
                <Link to={"/"}>
                  <img
                    className="h-full w-full object-cover object-center"
                    src="assets/logo/light-logo.png"
                    alt="Urban Garage"
                  />
                </Link>
              </div>
              <h2 className="h2 text-theme-semibold text-center">
                Admin Login
              </h2>
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
                type="text"
                id="username"
                name="username"
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
              {loginMutation.isLoading ? (
                <button
                  type="button"
                  className="bg-theme-red text-white flex justify-center items-center py-2 px-5 rounded-lg"
                  disabled
                >
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
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
                  className="bg-theme-red text-white py-2 px-5 rounded-lg"
                >
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
