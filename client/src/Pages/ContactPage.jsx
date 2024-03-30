import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testinomial from "../components/Testinomial";
import data from "../server.json";
import { Link } from "react-router-dom";

// icons
import { TiTick } from "react-icons/ti";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";

function Contactus() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <article>
          {/* <!-- 
        - #HERO
      --> */}

          {/* An Exciting Lineup Of Top Brands In Our Showrooms! End */}
          {/* services  */}
          <section className="section mt-12 get-start">
            <div className="container">
              <div className="mb-5">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Contact Information
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  Do you have any queries regarding the pricing, plans, services
                  or anything? Fill up this form to get a prompt response from
                  our team.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-10">
                {/* left container  */}
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="h3 text-theme-semibold">Our Head Office</h3>
                  </div>
                  <div className="h-56">
                    <img
                      className="h-full w-full object-cover object-center rounded-2xl"
                      src="assets/garadge/garadge1.jpeg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="h4 text-theme-semibold">
                      Head Office Details
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-2 flex items-center gap-2">
                      <span>
                        <IoLocationSharp className="text-theme-red text-2xl" />
                      </span>
                      <span className="p text-theme-500">
                        261, Ground Floor, Lane Number-5, Westend Marg,
                        Saidulajab, Saket, New Delhi, Delhi 110030 Get
                        Directions
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="p text-theme-500">
                        <FaBlenderPhone className="text-lg text-theme-red" />
                      </span>
                      <span>+91 9999 9999 99</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>
                        <IoMail className="text-lg text-theme-red" />
                      </span>
                      <span>info@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>
                        <IoMail className="text-lg text-theme-red" />
                      </span>
                      <span>+91 7744900001</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>
                        <IoMail className="text-lg text-theme-red" />
                      </span>
                      <span>urbangarage@gmail.com</span>
                    </div>
                  </div>
                </div>
                {/* right container  */}
                <div className="flex flex-col gap-8">
                  <div>
                    <h2 className="h3 text-theme-semibold">
                      Do you have a query? Ask us!
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="" className="text-theme-500">
                        Name*
                      </label>
                      <input
                        className="p-1 bg-gray-100 text-sm text-theme-500 border-theme-gray outline-none"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-theme-500">
                        Mobile*
                      </label>
                      <input
                        className="p-1 bg-gray-100 text-sm text-theme-500 border-theme-gray outline-none"
                        type="text"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-theme-500">
                        Car*
                      </label>
                      <input
                        className="p-1 bg-gray-100 text-sm text-theme-500 border-theme-gray outline-none"
                        type="text"
                        placeholder="Enter Car Brand/Model"
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-theme-500">
                        Service*
                      </label>
                      <input
                        className="p-1 bg-gray-100 text-sm text-theme-500 border-theme-gray outline-none"
                        type="text"
                        placeholder="Enter Select Service"
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-theme-500">
                        State*
                      </label>
                      <input
                        className="p-1 bg-gray-100 text-sm text-theme-500 border-theme-gray outline-none"
                        type="text"
                        placeholder="Select State"
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-theme-500">
                        City*
                      </label>
                      <input
                        className="p-1 bg-gray-100 text-sm text-theme-500 border-theme-gray outline-none"
                        type="text"
                        placeholder="Select City"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </section>
      
          {/* sell banner end  */}

          {/* Our Experience Centres */}
          <section className="section get-start">
            <div className="container">
              <div className="mb-5">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Our Experience Centres
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  Test drive, learn about services and more at your nearest
                  showroom.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-x-5 gap-y-5">
                {/* card 1 */}

                <div className="relative h-96 p-10 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('assets/garadge/garadge1.jpeg')]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
                  <div className="relative z-10">
                    <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                      CHANDIGARH
                    </h1>
                    <p className="p font-extrabold text-theme-500">
                      Standing at the heart of the Millennium city, our team of
                      seasoned experts offers an array luxury car services and
                      tailored solutions to cater to your every automotive
                      requirement.
                    </p>

                    <div className="flex gap-x-3">
                      <button className="outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                        Book a visit
                      </button>
                      <button className="bg-white text-gray-700 px-6 text-theme-semibold py-2 rounded-lg ">
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>

                {/* card 2 */}

                <div className="relative h-96 p-10 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('assets/garadge/garadge4.jpeg')]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
                  <div className="relative z-10">
                    <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                      Karnal
                    </h1>
                    <p className="p font-extrabold text-theme-500">
                      Witness the grandeur of India's largest pre-owned car
                      experience centre, where our highly skilled team of
                      experts bring you a wide array of comprehensive
                      car-related services.
                    </p>

                    <div className="flex gap-x-3">
                      <button className="outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                        Book a visit
                      </button>
                      <button className="bg-white text-gray-700 px-6 text-theme-semibold py-2 rounded-lg ">
                        Get a Direction
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OUR SERVICES */}
          <section className="section" id="hero-banner">
            <div className="relative h-screen">
              {/* Overlay div with gradient from black to transparent */}
              <div className="absolute -z-10 h-full w-full bg-gradient-to-r from-black to-transparent opacity-60"></div>
              <div className="h-full grid grid-cols-1 md:grid-cols-2">
                <div className=" absolute -z-20 h-full w-full">
                  <img
                    className="h-full w-full object-cover object-left"
                    src="https://api.luxuryride.in/public/cms-page/our_service_centers-1689576363766-569547964-service-centre-desktop-.png"
                    alt=""
                  />
                </div>
                {/* Left container remains unchanged */}

                {/* Right container */}
                <div className="  opacity-80 p-10">
                  <div className="mb-2">
                    {/* <h3 className="text-theme-semibold font-semibold text-xl">
                      Why Choose
                    </h3> */}
                    <h2 className="h1 text-white text-theme-bold font-bold text-2xl">
                      Our Services
                    </h2>
                  </div>
                  <div className="mb-2">
                    <p className="text-theme-500 text-white">
                      We provide complete professional services in our state of
                      the art service centres designed to keep your ride running
                      smoothly and impressively.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-5 mb-10">
                    <div>
                      <ul className="text-theme-500 flex flex-col gap-y-5">
                        <li className="flex text-white items-center text-theme-500">
                          <TiTick className="text-white text-xl" />
                          OEM/OES Parts
                        </li>
                        <li className="flex text-white items-center text-theme-500">
                          {" "}
                          <TiTick className="text-white text-xl" /> PAN India
                          Delivery
                        </li>
                        <li className="flex text-white  items-center text-theme-500">
                          {" "}
                          <TiTick className="text-white text-xl" /> In House
                          Service Available
                        </li>
                        <li className="flex text-white  items-center text-theme-500">
                          {" "}
                          <TiTick className="text-white text-xl" /> 350+ Check
                          Evaluations
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5 max-w-1xl">
                    <button className="outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                      Book Service package
                    </button>
                    <button className="outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                      Book Service
                    </button>
                    <button className="outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                      Book Car Care
                    </button>
                    <button className="outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                      Buy Extended Warranty
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* testinomials  */}
          <Testinomial />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default Contactus;
