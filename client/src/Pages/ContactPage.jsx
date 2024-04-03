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
              <div className="grid md:grid-cols-2 gap-10">
                {/* left container  */}
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="h3 text-theme-semibold">Our Head Office</h3>
                  </div>
                  <div className="h-56">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center rounded-2xl"
                      src="assets/garage/garage1.jpeg"
                      alt="Urban Garage Head Office"
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
                    <h2 className="h3 text-theme-semibold flex items-center">
                      Do you have a query ?{" "}
                      <span className="text-theme-red">Ask us!</span>
                    </h2>
                  </div>
                  <div className="flex flex-col md:grid grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor=""
                        className="text-theme-500 flex items-center"
                      >
                        First Name <span className="text-theme-red">*</span>
                      </label>
                      <input
                        className="p-2 bg-gray-50 text-sm text-theme-500 border-theme-gray outline-none"
                        type="text"
                        placeholder="Enter Your First Name"
                      />
                    </div>
                    {/* Last Name */}
                    <div>
                      <label
                        htmlFor=""
                        className="text-theme-500 flex items-center"
                      >
                        Last Name<span className="text-theme-red">*</span>
                      </label>
                      <input
                        className="p-2 bg-gray-50 text-sm text-theme-500 border-theme-gray outline-none"
                        type="text"
                        placeholder="Enter Your Last Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-theme-500 flex items-center"
                      >
                        Mobile Number<span className="text-theme-red">*</span>
                      </label>
                      <input
                        className="p-2 bg-gray-50 text-sm text-theme-500 border-theme-gray outline-none"
                        type="text"
                        placeholder="Enter Your Mobile Number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-theme-500 flex items-center"
                      >
                        Email<span className="text-theme-red">*</span>
                      </label>
                      <input
                        className="p-2 bg-gray-50 text-sm text-theme-500 border-theme-gray outline-none"
                        type="text"
                        placeholder="Enter Your Email Id"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-theme-500 flex items-center"
                      >
                        Select Query<span className="text-theme-red">*</span>
                      </label>
                      <input
                        className="p-2 bg-gray-50 text-sm text-theme-500 border-theme-gray outline-none"
                        type="text"
                        placeholder="Select Select Query"
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor=""
                        className="text-theme-500 flex items-center"
                      >
                        Describe Your Query
                        <span className="text-theme-red">**</span>
                      </label>
                      <textarea
                        className="p-2 w-full bg-gray-50 text-sm text-theme-500 border-theme-gray outline-none"
                        type="text"
                        placeholder="Write Your Query Here"
                      />
                    </div>
                    <div className="">
                      <button className="px-5 py-2 rounded-lg bg-theme-red text-white text-theme-semibold">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </section>

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

                <div className="relative h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('assets/garage/garage1.jpeg')]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
                  <div className="relative z-10 flex flex-col gap-3">
                    <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                      CHANDIGARH
                    </h1>
                    <p className="p tracking-wider text-justify font-bold text-theme-500">
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

                <div className="relative h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('assets/garage/garage4.jpeg')]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
                  <div className="relative z-10 flex flex-col gap-3">
                    <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                      Karnal
                    </h1>
                    <p className="p tracking-wider text-justify font-bold text-theme-500">
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

          {/* Our Experience Centres */}
          <section className="section get-start">
            <div className="container">
              <div className="mb-5">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Explore Our Service Centres
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  Schedule your maintenances, repairs and other services easily
                  with a Urban Garage Service Centres near you.
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-x-5 gap-y-5">
                {/* card 1 */}

                <div className="relative flex flex-col gap-y-8">
                  {/* New wrapper for positioning */}
                  <div className="relative z-0 w-96 rounded-2xl">
                    {/* img-container */}
                    <div className="h-64 overflow-hidden rounded-2xl">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://api.luxuryride.in/public/experience-center/service_center_banner-1689850171539-961537586-delhi-alipur.png"
                        alt=""
                      />
                    </div>
                    {/* Absolute container moved here, outside the overflow-hidden container */}
                    <div className="absolute z-50 flex gap-5 bottom-0 -mb-5 left-5">
                      <div className="bg-gray-200  px-5 text-center rounded-md">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 text-sm">
                          Sq. Ft. Area
                        </div>
                      </div>
                      <div className="bg-gray-200  px-5 text-center rounded-md">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 font-semibold text-sm">
                          Sq. Ft. Area
                        </div>
                      </div>
                      <div className="bg-gray-200  px-5 text-center rounded-md">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 text-sm">
                          Sq. Ft. Area
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-5">
                    <div>
                      <h3 className="h3 text-theme-semibold">
                        Karnal Service Centre
                      </h3>
                      <p className="p text-theme-500">
                        118, Milestone, Nh-1, Karnal, (Haryana) – 132001
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <button className="bg-theme-red text-theme-semibold text-white py-2 px-10 rounded-lg hover:bg-white hover:text-theme-red border-2 hover:border-red-600">
                        Get Directions
                      </button>
                      <button className="text-theme-semibold py-2 px-10 rounded-lg hover:bg-white text-theme-red border-2 hover:border-red-600">
                        Book Visit
                      </button>
                    </div>
                  </div>
                </div>
                {/* card 2 */}

                <div className="relative flex flex-col gap-y-8">
                  {/* New wrapper for positioning */}
                  <div className="relative z-0 w-96 rounded-2xl">
                    {/* img-container */}
                    <div className="h-64 overflow-hidden rounded-2xl">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://api.luxuryride.in/public/experience-center/service_center_banner-1689853292460-261947597-alipur-service-centre.png"
                        alt=""
                      />
                    </div>
                    {/* Absolute container moved here, outside the overflow-hidden container */}
                    <div className="absolute z-50 flex gap-5 bottom-0 -mb-5 left-5">
                      <div className="bg-gray-200  px-5 text-center rounded-md">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 text-sm">
                          Sq. Ft. Area
                        </div>
                      </div>
                      <div className="bg-gray-200  px-5 text-center rounded-md">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 font-semibold text-sm">
                          Sq. Ft. Area
                        </div>
                      </div>
                      <div className="bg-gray-200  px-5 text-center rounded-md">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 text-sm">
                          Sq. Ft. Area
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-5">
                    <div>
                      <h3 className="h3 text-theme-semibold">
                        Delhi Service Centre
                      </h3>
                      <p className="p text-theme-500">
                        Khasra No. 98, 2, GT Karnal Road,Dham, Alipur, Delhi,
                        110036
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <button className="bg-theme-red text-theme-semibold text-white py-2 px-10 rounded-lg hover:bg-white hover:text-theme-red border-2 hover:border-red-600">
                        Get Directions
                      </button>
                      <button className="text-theme-semibold py-2 px-10 rounded-lg hover:bg-white text-theme-red border-2 hover:border-red-600">
                        Book Visit
                      </button>
                    </div>
                  </div>
                </div>

                {/* <div className="relative h-64 p-10 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('assets/garadge/garadge4.jpeg')]">
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
                </div> */}
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
                    loading="lazy"
                    className="h-full w-full object-cover object-left"
                    src="https://api.luxuryride.in/public/cms-page/our_service_centers-1689576363766-569547964-service-centre-desktop-.png"
                    alt="Uran Garage Service Centre"
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
                  <div className="grid md:grid-cols-2 gap-5 max-w-1xl">
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
