import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Header from "./adminHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { SuccessAlert, ErrorAlert, LoadingAlert } from "../components/Alerts";

// icons
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoSpeedometerSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function fetchPeople() {
  return axios.get(`${import.meta.env.VITE_API_URL}/sellCar-users`);
}

function SellCarUser() {
  const { data, error, isError, isLoading, isSuccess } = useQuery(
    "people",
    fetchPeople,
    {
      select: (data) => data.data,
    }
  );
  const deleteSellCarUserMutation = useMutation(
    (id) => {
      // console.log("Deleting user with ID:", id);
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/sellCar-users/${id}`
      );
    },
    {
      onSuccess: () => {
        console.log("User successfully deleted");
        queryClient.invalidateQueries("sellPeople");
      },
      onError: (error) => {
        console.error("Error deleting user:", error);
      },
    }
  );

  const deleteSellCarUser = async (id) => {
    try {
      await deleteSellCarUserMutation.mutateAsync(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <>
        {deleteSellCarUserMutation.isLoading && (
          <LoadingAlert msg="Deleting..." />
        )}
        {deleteSellCarUserMutation.isSuccess && (
          <SuccessAlert msg="Successfully Deleted" />
        )}
        {deleteSellCarUserMutation.isError && (
          <ErrorAlert msg="Failed! Try again..." />
        )}
        {isLoading && <isLoading msg="Loadin... Please wait" />}
        {isError && <ErrorAlert msg="Failed! Try again..." />}
      </>
      <div className=" min-h-screen flex flex-col">
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
                        className="px-6 py-3 text-center flex items-center"
                      >
                        <FaUser className="text-theme-red mr-1" /> Customer Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="text-gray-800 flex items-center gap-1">
                          <FaPhoneAlt className="text-theme-red mr-1" />
                          Mobile No
                        </p>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center whitespace-nowrap "
                      >
                        <p className="flex items-center gap-2 text-gray-900">
                          <span className="flex items-center justify-center gap-1">
                            <FaCar className="text-theme-red mr-1" /> Car Name
                          </span>
                          <span className="flex items-center justify-center gap-1">
                            <FaCalendarAlt className="text-theme-red mr-1" />
                            Model Year
                          </span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 flex items-center ">
                        <BsFillFuelPumpFill className="text-theme-red mr-1" />{" "}
                        Fuel Type/{" "}
                        <IoSpeedometerSharp className="m-1 text-theme-red" />
                        Kms
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Owner /Kms
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center flex items-center"
                      >
                        <FaAddressCard className="text-theme-red mx-1" />
                        Reg.City / Address
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
                            {users.carName} / {users.modelYear}
                          </td>
                          <td className="px-6 py-4 text-gray-700 text-center ">
                            {users.fuelType}/{users.kilometersDriven}kms
                          </td>
                          <td className="px-6 py-4 text-gray-700 text-center">
                            {users.fuelType}
                          </td>
                          <td className="px-6 py-4 text-gray-900 flex items-center text-xs">
                            {users.regCity}/
                            {users.address ? users.address.slice(0, 12) : "N/A"}
                            ...
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            <button
                              onClick={() => deleteSellCarUser(users._id)} // Assuming handleDelete is defined elsewhere
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

export default SellCarUser;
