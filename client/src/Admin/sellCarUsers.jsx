import React from "react";
import { useQuery } from "react-query";
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

  return (
    <>
      <>
        {isLoading && <isLoading msg="Loadin... Please wait" />}
        {isSuccess && <SuccessAlert msg=" Successfull!" />}
        {isError && <ErrorAlert msg="Failed! Try again..." />}
      </>
      <div className=" min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow h-[80vh] overflow-y-auto">
          <section>
            {/* <div className="px-5 mt-20">
              <ul role="list" className="divide-y divide-gray-100">
                <li className="grid grid-cols-2 md:grid-cols-6">
                  <div className="font-bold h3 text-theme-red text-theme-bold text-center">
                    User Details
                  </div>
                  <div className="font-bold h3 text-theme-red text-theme-bold text-center">
                    Car Name/Car Model
                  </div>
                  <div className="font-bold h3 text-theme-red text-theme-bold text-center">
                    Fuel Type/Kms
                  </div>
                  <div className="font-bold h3 text-theme-red text-theme-bold text-center">
                    Owner /Kms
                  </div>
                  <div className="font-bold h3 text-theme-red text-theme-bold text-center">
                    Reg.City /Address
                  </div>
                  <div className="font-bold h3 text-theme-red text-theme-bold text-center">
                    Contact User
                  </div>
                </li>
                {data.map((users) => (
                  <>
                    <li
                      key={users._id}
                      className="grid grid-cols-6 gap-x-6 py-5 bg-gray-300 px-2 mb-1"
                    >
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto text-center">
                          <p className="text-xl  font-semibold leading-6 text-gray-900">
                            {users.fullName}
                          </p>
                          <p className="mt-1 truncate text-md leading-5 text-gray-900">
                            {users.mobileNumber}
                          </p>
                        </div>
                      </div>
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto text-center">
                          <p className="text-xl  font-semibold leading-6 text-gray-900">
                            {users.carName}
                          </p>
                          <p className="mt-1 truncate text-md leading-5 text-gray-900">
                            {users.modelYear}
                          </p>
                        </div>
                      </div>
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto text-center">
                          <p className="text-xl  font-semibold leading-6 text-gray-900">
                            {users.fuelType}
                          </p>
                          <p className="mt-1 truncate text-md leading-5 text-gray-900">
                            {users.kilometersDriven}
                          </p>
                        </div>
                      </div>
                    
                      <div className="flex min-w-92 gap-x-4">
                        <div className="min-w-0 flex-auto text-center">
                          <p className="text-xl font-semibold leading-6 text-gray-900">
                            {users.ownerType}
                          </p>
                          <p className="mt-1 truncate text-md leading-5 text-gray-900">
                            {users.kilometersDriven}
                          </p>
                        </div>
                      </div>
                  
                      <div className="flex items-center justify-center min-w-92 gap-x-4">
                        <div className="min-w-0 flex-auto text-center">
                          <p className="text-xl font-semibold leading-6 text-gray-900">
                            {users.regCity}
                          </p>
                          <p className="mt-1 truncate text-md leading-5 text-gray-900">
                            {users.address} /-
                          </p>
                        </div>
                      </div>
                    
                      <div className="min-w-56 flex gap-2  justify-center gap-y-5 sm:items-end">
                        <div className="w-full">
                          <Link
                            target="_blank"
                            to={`tel:${users.mobileNumber}}`}
                          ></Link>
                          <button className="py-2 w-full hover:bg-blue-900 hover:text-white border-theme-black text-black text-theme-semibold rounded-md">
                            Call
                          </button>
                        </div>
                        <div className="w-full">
                          <button className="py-2 w-full bg-black text-white text-theme-semibold rounded-md">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                    <hr className="text-gray-900" />
                  </>
                ))}
              </ul>
            </div> */}

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
                        Reg.City /{" "}
                        <FaAddressCard className="text-theme-red mx-1" />
                        Address
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
                            {users.address ? users.address.slice(0, 12) : "N/A"}...
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

export default SellCarUser;
