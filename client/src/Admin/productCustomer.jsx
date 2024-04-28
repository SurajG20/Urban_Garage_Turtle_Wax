import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Header from "./adminHeader";
import Footer from "../components/Footer";
import { SuccessAlert, ErrorAlert, LoadingAlert } from "../components/Alerts";

import { MdMessage } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function fetchPeople() {
  return axios.get(`${import.meta.env.VITE_API_URL}/product-customer`);
}

function ProductCustomer() {
  const queryClient = useQueryClient();
  const { data, error, isSuccess, isError, isLoading } = useQuery(
    "people",
    fetchPeople,
    {
      select: (data) => data.data,
    }
  );

  const deleteContactUserMutation = useMutation(
    (id) => {
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/product-customer/${id}`
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("contacts");
        console.log("Contact user successfully deleted");
      },
      onError: (error) => {
        console.log("Failed to delete contact user!");
      },
    }
  );

  const deleteContactUser = async (id) => {
    try {
      await deleteContactUserMutation.mutateAsync(id);
    } catch (error) {
      console.error("Error when deleting contact user:", error);
    }
  };

  return (
    <>
      <>
        {deleteContactUserMutation.isLoading && (
          <LoadingAlert msg="Deleting..." />
        )}
        {deleteContactUserMutation.isSuccess && (
          <SuccessAlert msg="Successfully Deleted" />
        )}
        {deleteContactUserMutation.isError && (
          <ErrorAlert msg="Failed! Try again..." />
        )}
        {isLoading && <LoadingAlert msg="Loading..." />}
        {isError && <ErrorAlert msg="Failed! Try again..." />}
      </>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow h-[80vh] overflow-y-auto">
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
                          <span className="text-gray-800">Mobile Number</span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="flex items-center justify-center gap-2">
                          <FaCalendarAlt className="text-theme-red text-lg" />{" "}
                          <span className="text-gray-800">Product Name</span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="flex items-center justify-center gap-2">
                          <MdMessage className="text-theme-red text-lg" />{" "}
                          <span className="text-gray-800">Model Number</span>
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <p className="flex items-center justify-center gap-2">
                          <span className="text-theme-red text-lg">₹</span>
                         
                          <span className="text-gray-800"> Price</span>
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
                            {`${users.fullName}`}
                          </td>
                          <td className="px-6 py-4 font-medium text-blue-600 dark:text-blue-500 text-center whitespace-nowrap">
                            +91 {users.mobileNumber}
                          </td>

                          <td className="px-6 py-4 text-gray-700 text-center">
                            {users.queryType}
                          </td>
                          <td className="px-6 py-4 text-gray-700  text-xs text-justify">
                            {/* {users.message} */}
                            {users && users.message
                              ? users.message.length > 50
                                ? `${users.message.substring(0, 50)}...`
                                : users.message
                              : null}
                          </td>

                          <td className="px-6 py-4 text-gray-700">
                            <button
                              onClick={() => deleteContactUser(users._id)} // Assuming handleDelete is defined elsewhere
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

export default ProductCustomer;
