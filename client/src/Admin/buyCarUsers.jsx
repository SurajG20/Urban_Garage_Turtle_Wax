import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Header from "./adminHeader";
import Footer from "../components/Footer";
import { SuccessAlert, ErrorAlert, LoadingAlert } from "../components/Alerts";
import { Link } from "react-router-dom";

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



  return (
    <>
      <>
        {isLoading && <isLoading msg="Loadin... Please wait" />}
        {isSuccess && <SuccessAlert msg=" Successfull!" />}
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
                      <th scope="col" className="px-6 py-3  text-center">
                        Customer Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Mobile No
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Car Model/Company
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Model Year
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Fuel Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Budget
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
                            <a
                              href="#"
                              onClick={() => handleDelete(users.id)} // Assuming handleDelete is defined elsewhere
                              className="font-medium text-theme-red dark:text-theme-red hover:underline text-center"
                            >
                              Delete
                            </a>
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
