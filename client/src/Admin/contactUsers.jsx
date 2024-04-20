import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Header from "./adminHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function fetchPeople() {
  return axios.get(`${import.meta.env.VITE_API_URL}/contact`);
}

function ContactUser() {
  const { data, error, isError, isLoading } = useQuery("people", fetchPeople, {
    select: (data) => data.data,
    
  });
  console.log(data);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow h-[80vh] overflow-y-auto">
        <section>
          <div className="container mt-20">
            <ul role="list" className="divide-y divide-gray-100">
              <li className="grid grid-cols-2 md:grid-cols-5">
                <div className="uppercase font-bold h3 text-theme-red text-theme-bold text-center">
                  User Details
                </div>
                <div className="uppercase font-bold h3 text-theme-red text-theme-bold text-center">
                  Query Type
                </div>
                <div className="uppercase col-span-2 font-bold h3 text-theme-red text-theme-bold text-center">
                  Message
                </div>
                <div className="uppercase font-bold h3 text-theme-red text-theme-bold text-center">
                  Contact User
                </div>
              </li>
              {data.map((users) => (
                <>
                  <li
                    key={users._id}
                    className="grid grid-cols-5 gap-x-6 py-5 bg-gray-300 px-2 mb-1"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto text-center">
                        <p className="text-xl  font-semibold leading-6 text-gray-900">
                          {`${users.firstName} ${users.lastName}`}
                        </p>
                        <p className="mt-1 truncate text-md leading-5 text-gray-900">
                          {users.mobileNumber}
                        </p>
                      </div>
                    </div>
                    {/* car details   */}
                    <div className="flex min-w-92 gap-x-4">
                      <div className="min-w-0 flex-auto text-center">
                        <p className="text-md font-semibold leading-6 text-gray-900">
                          {users.queryType}
                        </p>
                      </div>
                    </div>
                    {/* fuel and budget */}
                    <div className="col-span-2 flex items-center justify-center min-w-92 gap-x-4">
                      <div className="min-w-0 flex-auto text-center">
                        <p className="text-md font-semibold leading-6 text-gray-900">
                          {users.message}
                        </p>
                      </div>
                    </div>
                    {/* Action buttons  */}
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUser;
