import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Header from "./adminHeader";
import Footer from "../components/Footer";
import { SuccessAlert, ErrorAlert, LoadingAlert } from "../components/Alerts";

// icons
import { FaCar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function fetchPeople() {
  return axios.get(`${import.meta.env.VITE_API_URL}/service`);
}

function ServiceUsers() {
  const queryClient = useQueryClient();
  const { data, error, isError, isLoading } = useQuery("people", fetchPeople, {
    select: (data) => data.data,
  });

  const deleteServiceUserMutation = useMutation(
    (id) => {
      return axios.delete(`${import.meta.env.VITE_API_URL}/service/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("people");
        console.log("Service user successfully deleted");
      },
      onError: (error) => {
        console.log("Failed to delete service user!");
      },
    }
  );

  const deleteServiceUser = async (id) => {
    try {
      await deleteServiceUserMutation.mutateAsync(id);
    } catch (error) {
      console.error("Error when deleting service user:", error);
    }
  };

  return (
    <>
      <>
        {deleteServiceUserMutation.isLoading && (
          <LoadingAlert msg="Deleting ..." />
        )}
        {deleteServiceUserMutation.isSuccess && (
          <SuccessAlert msg="Successfully Deleted" />
        )}
        {deleteServiceUserMutation.isError && (
          <ErrorAlert msg="Failed! Try again..." />
        )}
        {isLoading && <LoadingAlert msg="Loading... Please wait" />}
        {isError && <ErrorAlert msg="Failed! Try again..." />}
      </>
      <div className=" min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow h-[95vh] overflow-y-auto">
          <section>
            <div className="mx-2 mt-20">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3  text-center">
                        <p className="flex items-center justify-center gap-2">
                          <FaUser className="text-theme-red text-lg" />{" "}
                          <span className="text-gray-800">Customer Name</span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="flex items-center justify-center gap-2">
                          <FaPhoneAlt className="text-theme-red text-lg" />{" "}
                          <span className="text-gray-800">Mobile No</span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="flex items-center justify-center gap-2">
                          <FaCar className="text-theme-red text-lg" />{" "}
                          <span className="text-gray-800">
                            Car Name/Car Model
                          </span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="flex items-center justify-center gap-2">
                          <FaCalendarAlt className="text-theme-red text-lg" />{" "}
                          <span className="text-gray-800">Service</span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="flex items-center justify-center gap-2">
                          <FaCalendarAlt className="text-theme-red text-lg" />{" "}
                          <span className="text-gray-800">Reg Number</span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="flex items-center justify-center gap-2">
                          {" "}
                          <span className="text-gray-800">Action</span>
                        </p>
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
                            {users.fullName ? users.fullName : "N/A"}
                          </td>
                          <td className="px-6 py-4 font-medium text-blue-600 dark:text-blue-500 text-center">
                            +91{" "}
                            {users.mobileNumber ? users.mobileNumber : "N/A"}
                          </td>
                          <td className="px-6 py-4 text-gray-700 text-center">
                            {users.carName ? users.carName : "N/A"} /
                            {users.carBrand ? users.carBrand : "N/A"}
                          </td>

                          <td className="px-6 py-4 text-gray-700 text-center">
                            {users.serviceName ? users.serviceName : "N/A"}
                          </td>
                          <td className="px-6 py-4 text-gray-700 text-center">
                            {users.regNumber ? users.regNumber : "N/A"}
                          </td>

                          <td className="px-6 py-4 text-gray-700 flex justify-center">
                            <button
                              onClick={() => deleteServiceUser(users._id)}
                              className="font-medium text-theme-red  dark:text-theme-red hover:underline text-center"
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

export default ServiceUsers;
