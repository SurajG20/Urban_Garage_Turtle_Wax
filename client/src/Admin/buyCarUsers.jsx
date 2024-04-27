import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Header from "./adminHeader";
import Footer from "../components/Footer";
import { SuccessAlert, ErrorAlert, LoadingAlert } from "../components/Alerts";
// icons 
import { BsFillFuelPumpFill } from "react-icons/bs";
// import { IoSpeedometerSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
// import { FaAddressCard } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";

function fetchPeople() {
  return axios.get(`${import.meta.env.VITE_API_URL}/buyCar-users`);
}

function BuyCarUser() {
  const { data, error, isError, isLoading, isSuccess } = useQuery(
    "people",
    fetchPeople,
    {
      select: (data) => data.data,
    }
  );
  const deleteMutation = useMutation((id) => {
    return axios.delete(`${import.meta.env.VITE_API_URL}/buyCar-users/${id}`);
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  return (
    <>
      <>
        {deleteMutation.isLoading && <LoadingAlert msg="Deleting..." />}
        {deleteMutation.isSuccess && <SuccessAlert msg="Successfully Deleted" />}
        {deleteMutation.isError && (
          <ErrorAlert msg={deleteMutation.error.message} />
        )}
        {isLoading && <isLoading msg="Loadin... Please wait" />}
        {isError && <ErrorAlert msg="Failed! Try again..." />}
      </>
      <div className="bg-theme-black min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow h-[80vh] overflow-y-auto">
          <section>
            <div className="mx-2 mt-20">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3  flex justify-center items-center gap-1"
                      >
                        <span>
                          <FaUser className="text-theme-red text-lg" />
                        </span>{" "}
                        Customer Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-center ">
                        <p className="flex items-center justify-center gap-2">
                          <FaPhoneAlt className="text-theme-red text-lg" />{" "}
                          <span className="text-gray-800">Mobile No</span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="flex items-center justify-center gap-2">
                          <FaCar className="text-theme-red text-lg" />{" "}
                          <span className="text-gray-800">
                            Car Model/Company
                          </span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="flex items-center justify-center gap-2">
                          <FaCalendarAlt className="text-theme-red text-lg" />{" "}
                          <span className="text-gray-800">Model Year</span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="flex items-center justify-center gap-2">
                          <BsFillFuelPumpFill className="text-theme-red text-lg" />{" "}
                          <span className="text-gray-800">Fuel Type</span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="flex items-center justify-center gap-2">
                          <FaMoneyBillAlt className="text-theme-red text-lg" />{" "}
                          <span className="text-gray-800">Budget</span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <LoadingAlert msg="Loading..." />
                    ) : isError ? (
                      <ErrorAlert msg={error.message} />
                    ) : (
                      data.map((users) => (
                        <tr
                          key={users.id}
                          className="odd:bg-white odd:dark:bg-gray-600 even:bg-gray-50 even:dark:bg-gray-600 border-b border-gray-300 "
                        >
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            {users.fullName}
                          </td>
                          <td className="px-6 py-4 font-medium text-blue-600 dark:text-blue-500 text-center">
                            +91 {users.mobileNumber}
                          </td>
                          <td className="px-6 py-4 text-gray-700 text-center">
                            {users.carBrand}
                          </td>
                          <td className="px-6 py-4 text-gray-700 text-center ">
                            {users.modelYear}
                          </td>
                          <td className="px-6 py-4 text-gray-700 text-center">
                            {users.fuelType}
                          </td>
                          <td className="px-6 py-4 text-gray-700 flex items-center">
                            <span className="mx-1 text-theme-red text-center">
                              ₹
                            </span>{" "}
                            {users.budget}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            <button
                              onClick={() => handleDelete(users._id)}
                              className="font-medium text-theme-red dark:text-theme-red hover:underline text-center"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default BuyCarUser;
