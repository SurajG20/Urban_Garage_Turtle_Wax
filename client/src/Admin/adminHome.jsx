import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Header from "./adminHeader";
import Footer from "../components/Footer";
import axios from "axios";
import { SuccessAlert, ErrorAlert, LoadingAlert } from "../components/Alerts";

const fetchData = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/car`);
  return data;
};


function AdminDashboard() {
  const queryClient = useQueryClient();
  const { data, error, isLoading, isError, isSuccess } = useQuery(
    "data",
    fetchData
  );

  const deleteMutation = useMutation(
    (id) => {
      
      return axios.delete(`${import.meta.env.VITE_API_URL}/car/${id}`);
    },
    {
      onSuccess: () => {
        console.log("Car successfully deleted");
        queryClient.invalidateQueries("data");
      },
      onError: (error) => {
        console.error("Error deleting product:", error);
      },
    }
  );

  const deleteProduct = async (id) => {
    try {
      await deleteMutation.mutateAsync(id);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <>
        {isLoading && <LoadingAlert msg="Loading..." />}
        {deleteMutation.isLoading && <LoadingAlert msg="Deleting..." />}

        {isSuccess && <SuccessAlert msg="Welcome Admin" />}
        {deleteMutation.isSuccess && (
          <SuccessAlert msg="Car successfully deleted" />
        )}
        {isError && <ErrorAlert msg="Failed! Try again..." />}
        {deleteMutation.isError && <ErrorAlert msg="Failed to delete" />}
      </>
      <div className="bg-theme-black min-h-screen flex flex-col ">
        <Header />
        <main className="flex-grow ">
          {isLoading ? (
            <LoadingAlert msg="Loading..." />
          ) : isError ? (
            <ErrorAlert msg={error.message} />
          ) : (
            <section>
              <div className="max-w-7xl m-auto mt-20">
                <ul role="list" className="w-full divide-y  divide-gray-100">
                  {data.map((item) => (
                    <li
                      key={item._id}
                      className="w-full bg-gray-300 px-10 mb-1 flex  flex-col gap-y-5 md:flex-row justify-between gap-x-6 py-5"
                    >
                      <div className="w-full  grid grid-cols-3 min-w-0 gap-x-4">
                        <div className="h-64 w-full">
                          <img
                            loading="lazy"
                            className="h-full w-full flex-none rounded-xl bg-gray-50"
                            src={
                              item.img.length > 0
                                ? item.thumbnail
                                : "assets/loading.jpeg"
                            }
                            alt="Urban Garage "
                          />
                        </div>

                        {/* col2 */}
                        <div className="col-span-2 grid md:grid-cols-2">
                          <p className="col-span-2 md:text-xl text-theme-500  flex gap-x-2 font-semibold leading-6 text-gray-900 uppercase">
                            <span className="text-black font-bold whitespace-nowrap">
                              Name :
                            </span>{" "}
                            <span className="text-theme-red text-theme-semibold">
                              {item.name?item.name:"N/A"}
                            </span>
                          </p>
                          <p className="mt-1 text-theme-500 flex gap-x-2   truncate text-md leading-5 text-gray-800">
                            <span className="text-black font-bold">
                              Model :
                            </span>
                            {item.model?item.model:"N/A"}
                          </p>
                          <p className="mt-1 text-theme-500 flex gap-x-2  truncate text-md leading-5 text-gray-800">
                            <span className="text-black font-bold">
                              Company Brand :
                            </span>{" "}
                            {item.make?item.make:"N/A"}
                          </p>
                          <p className="mt-1 text-theme-500 flex gap-x-2  truncate text-md leading-5 text-gray-800">
                            <span className="text-black font-bold">
                              {"Model Year "}
                            </span>
                            {item.modelyear?item.modelyear:"N/A"}
                          </p>

                          {/* col3 */}

                          <p className="mt-1 text-theme-500  flex gap-x-2 font-semibold leading-6 text-gray-900 uppercase">
                            <span className="text-black font-bold">
                              Price :
                            </span>{" "}
                            <span className="text-theme-red text-theme-semibold">
                              ₹ {item.price?item.price:"N/A"} /-
                            </span>
                          </p>
                          <p className="mt-1 text-theme-500 flex gap-x-2   truncate text-md leading-5 text-gray-800">
                            <span className="text-black font-bold">Fuel :</span>
                            {item.fuel?item.fuel:"N/A"}
                          </p>
                          <p className="mt-1 text-theme-500 flex gap-x-2  truncate text-md leading-5 text-gray-800">
                            <span className="text-black font-bold">
                              Kms Driven:
                            </span>{" "}
                            {item.kms?item.kms:"N/A"} km
                          </p>
                          <p className="mt-1 text-theme-500 flex gap-x-2  truncate text-md leading-5 text-gray-800">
                            <span className="text-black font-bold">
                              {"Ownership"}
                            </span>
                            {item.owner?item.owner:"N/A"}
                          </p>

                          {/* col4 */}

                          <p className="mt-1 text-theme-500  flex gap-x-2 font-semibold leading-6 text-gray-900 uppercase">
                            <span className="text-black font-bold">
                              Reg.Year :
                            </span>{" "}
                            <span className="text-theme-red text-theme-semibold">
                              {item.reg?item.reg:"N/A"}
                            </span>
                          </p>
                          <p className="mt-1 text-theme-500 flex gap-x-2   truncate text-md leading-5 text-gray-800">
                            <span className="text-black font-bold">
                              Color :
                            </span>
                            {item.colour?item.colour:"N/A"}
                          </p>
                          <p className="mt-1 text-theme-500 flex gap-x-2  truncate text-md leading-5 text-gray-800">
                            <span className="text-black font-bold">
                              Insurance :
                            </span>{" "}
                            {item.insurance?item.insurance:"N/A"}
                          </p>
                        </div>
                      </div>
                      <div className="min-w-36 flex gap-2  sm:flex-col justify-end gap-y-5 sm:items-end">
                        <div className="w-full">
                          <button
                            onClick={() => deleteProduct(item._id)}
                            className="py-2 w-full bg-black text-white text-theme-semibold  rounded-md"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AdminDashboard;
