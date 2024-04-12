import React from 'react'
import Header from "./adminHeader";
import Footer from "../components/Footer";

function AddProduct() {
  return (
    <div className="bg-white min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow ">
        <section>
          <div className="container mt-20">
            <ul role="list" className="divide-y divide-gray-100">
              {people.map((person) => (
                <li
                  key={person.email}
                  className="flex flex-col justify-between gap-x-6 py-5"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-32 w-36 flex-none rounded-xl bg-gray-50"
                      src={person.imageUrl}
                      alt="Urban Garage "
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {person.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {person.email}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {person.email}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {person.email}
                      </p>
                    </div>
                  </div>

                  <div className=" shrink-0 flex sm:flex-col justify-center gap-y-5 sm:items-end">
                    <div className="w-full">
                      <button className="py-2 w-full border-theme-black text-black text-theme-semibold rounded-md">
                        Edit
                      </button>
                    </div>
                    <div className="w-full">
                      <button className="py-2 px-5 bg-black text-white rounded-md hover:bg-white hover:text-black hover:ring-1 hover:ring-black">
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AddProduct;