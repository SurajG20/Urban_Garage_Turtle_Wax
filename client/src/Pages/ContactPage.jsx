import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testinomial";
import { Link } from "react-router-dom";
import { SuccessAlert, ErrorAlert } from "../components/Alerts";
// icons
import { TiTick } from "react-icons/ti";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDirections } from "react-icons/md";

function Contactus() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    queryType: "",
    message: "",
  });

  const { mutate, isLoading, isSuccess, isError, error } = useMutation(
    (data) => axios.post(`${import.meta.env.VITE_API_URL}/contact`, data),
    {
      onSuccess: () => {
        setFormData({
          firstName: "",
          lastName: "",
          mobileNumber: "",
          email: "",
          queryType: "",
          message: "",
        });
      },
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate(formData);
  };

  return (
    <>
      <>
        {isSuccess && <SuccessAlert msg="Submission Successful!" />}
        {isError && <ErrorAlert msg={`Error: ${error.message}`} />}
      </>

      <div className="relative">
        <Navbar />
        <main>
          <article>
            {/* <!-- 
        - #HERO
      --> */}

            {/* An Exciting Lineup Of Top Brands In Our Showrooms! End */}
            {/* services  */}
            <section className="section mt-12 get-start text-white">
              <div className="container">
                <div className="mb-5 md:mb-12">
                  <h2 className="h2 section-title text-center text-theme-semibold ">
                    Contact Information
                  </h2>
                  <p className="p max-w-3xl m-auto text-center text-theme-500">
                    Do you have any queries regarding the pricing, plans,
                    services or anything? Fill up this form to get a prompt
                    response from our team.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  {/* left container  */}
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="h3 text-theme-semibold underline">
                        Our Head Office
                      </h3>
                    </div>
                    <div className="md:h-96 w-full border rounded-2xl overflow-hidden shadow shadow-white border-white">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center "
                        src="assets/banners/banner1.jpg"
                        alt="Urban Garage Head Office"
                      />
                    </div>
                    <div>
                      <h3 className="h4 text-theme-semibold  ">
                        Head Office Details
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="col-span-2 flex items-center gap-2">
                        <span>
                          <IoLocationSharp className="text-theme-red text-2xl" />
                        </span>
                        <span className="p text-theme-500 flex gap-x-3 flex-wrap">
                          Plot No 98, Industrial Area Phase I, Chandigarh,
                          160002
                          <span>
                            <Link
                              className="text-theme-red text-theme-semibold underline flex gap-x-2 items-center"
                              target="_blank"
                              to={
                                "https://www.google.com/maps/dir//Plot+No+98,+Industrial+Area+Phase+I,+Chandigarh,+160002/@30.70935,76.7218037,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390fed0d68f936e9:0xd6fcbf0dac51de9f!2m2!1d76.8041805!2d30.7093577?entry=ttu"
                              }
                            >
                              Get Direction <MdDirections className="text-xl" />
                            </Link>
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="p text-theme-500">
                          <FaBlenderPhone className="text-lg text-theme-red" />
                        </span>
                        <span>+91 7744900001</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>
                          <IoMail className="text-lg text-theme-red" />
                        </span>
                        <span>support@dcbi.in</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>
                          <FaPhoneAlt className="text-lg text-theme-red" />
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
                        <span className="text-theme-red mx-2"> Ask us!</span>
                      </h2>
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-10"
                    >
                      <div>
                        <label
                          htmlFor="firstName"
                          className="text-theme-500 flex items-center mb-1"
                        >
                          First Name <span className="text-theme-red">*</span>
                        </label>
                        <input
                          id="firstName"
                          required
                          className="p-2 w-full bg-gray-50 text-sm text-theme-500 text-black  outline-none rounded-md cursor-pointer"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter Your First Name"
                        />
                      </div>
                      {/* Last Name */}
                      <div>
                        <label
                          htmlFor="lastName"
                          className="text-theme-500 flex items-center  mb-1"
                        >
                          Last Name<span className="text-theme-red">*</span>
                        </label>
                        <input
                          id="lastName"
                          required
                          className="p-2 w-full bg-gray-50 text-sm text-theme-500 text-black  outline-none rounded-md cursor-pointer"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter Your Last Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="mobileNumber"
                          className="text-theme-500 flex items-center  mb-1"
                        >
                          Mobile Number<span className="text-theme-red">*</span>
                        </label>
                        <input
                          id="mobileNumber"
                          type="number"
                          minLength={10}
                          maxLength={10}
                          required
                          className="p-2 w-full bg-gray-50 text-sm text-theme-500 text-black  outline-none rounded-md cursor-pointer"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="Enter Your Mobile Number"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor=""
                          className="text-theme-500 flex items-center  mb-1"
                        >
                          Email<span className="text-theme-red">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="p-2 w-full bg-gray-50 text-sm text-theme-500 text-black  outline-none rounded-md cursor-pointer"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter Your Email Id"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="queryType"
                          className="text-theme-500 flex items-center  mb-1"
                        >
                          Select Query<span className="text-theme-red">*</span>
                        </label>
                        <select
                          id="queryType"
                          required
                          className="p-2 w-full bg-gray-50 text-sm text-theme-500 text-black border-theme-gray outline-none rounded-md cursor-pointer "
                          name="queryType"
                          value={formData.queryType}
                          onChange={handleChange}
                          placeholder="Select Query"
                        >
                          <option value="">--- Service Type ---</option>
                          <option value="Buy car">Buy Car </option>
                          <option value="Sell Car">Sell Car</option>
                          <option value="Coating Service">
                            Coating Service{" "}
                          </option>
                          <option value="PPF Service">PPF Service </option>
                          <option value="Coating Service">
                            Coating Service{" "}
                          </option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="message"
                          className="text-theme-500 flex items-center  mb-1"
                        >
                          Describe Your Query
                          <span className="text-theme-red">**</span>
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          type="text"
                          required
                          maxLength={215}
                          className="p-2 w-full bg-gray-50 text-sm text-theme-500 text-black border-theme-gray outline-none rounded-md"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write Your Query Here"
                        />
                      </div>
                      <div className="">
                        {isLoading ? (
                          <button
                            type="button"
                            className="bg-theme-red text-white flex justify-center items-center py-2 px-5 rounded-lg"
                            disabled
                          >
                            <svg
                              className="h-6 w-8 animate-spin stroke-white"
                              viewBox="0 0 256 256"
                            >
                              <line
                                x1="128"
                                y1="32"
                                x2="128"
                                y2="64"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></line>
                              <line
                                x1="195.9"
                                y1="60.1"
                                x2="173.3"
                                y2="82.7"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></line>
                              <line
                                x1="224"
                                y1="128"
                                x2="192"
                                y2="128"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></line>
                              <line
                                x1="195.9"
                                y1="195.9"
                                x2="173.3"
                                y2="173.3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></line>
                              <line
                                x1="128"
                                y1="224"
                                x2="128"
                                y2="192"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></line>
                              <line
                                x1="60.1"
                                y1="195.9"
                                x2="82.7"
                                y2="173.3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></line>
                              <line
                                x1="32"
                                y1="128"
                                x2="64"
                                y2="128"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></line>
                              <line
                                x1="60.1"
                                y1="60.1"
                                x2="82.7"
                                y2="82.7"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></line>
                            </svg>
                            Processing...
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="bg-theme-red text-white py-2 px-8 rounded-lg"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </form>
                    <div></div>
                  </div>
                </div>
              </div>
            </section>

            {/* map  */}
            <section>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.320966417172!2d76.80163007557947!3d30.7093759745956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0d68f936e9%3A0xd6fcbf0dac51de9f!2sUrban%20Garage!5e0!3m2!1sen!2sin!4v1712774932653!5m2!1sen!2sin"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>

            {/* Our Experience Centres */}
            <section className="section get-start text-white">
              <div className="container">
                <div className="mb-5 md:mb-10">
                  <h2 className="h2 section-title text-center text-theme-semibold ">
                    Explore Our Service Centres
                  </h2>
                  <p className="p max-w-3xl m-auto text-center text-theme-500">
                    Schedule your maintenances, repairs and other services
                    easily with a Urban Garage Service Centres near you.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-x-5 gap-y-5">
                  {/* card 1 */}

                  <div className="relative flex flex-col gap-y-8">
                    {/* New wrapper for positioning */}
                    <div className="relative z-0 w-96 rounded-2xl">
                      {/* img-container */}
                      <div className="h-64 border theme-border-white shadow hover:shadow-white overflow-hidden rounded-2xl">
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
                          <div className="text-theme-500 text-black text-sm">
                            Sq. Ft. Area
                          </div>
                        </div>
                        <div className="bg-gray-200  px-5 text-center rounded-md">
                          <div className="text-theme-500  text-theme-red">
                            250+
                          </div>
                          <div className="text-theme-500 text-black font-semibold text-sm">
                            Cars
                          </div>
                        </div>
                        <div className="bg-gray-200  px-5 text-center rounded-md">
                          <div className="text-theme-500  text-theme-red">
                            500+
                          </div>
                          <div className="text-theme-500 text-black text-sm">
                            Customers
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                      <div>
                        <h3 className="h3 text-theme-semibold">Chandigarh</h3>
                        <p className="p text-theme-500">
                          Plot No 98, Industrial Area Phase I, Chandigarh,
                          160002
                        </p>
                      </div>
                      <div className="flex gap-5">
                        <Link
                          target="_blank"
                          to={
                            "https://www.google.com/maps/dir//urbangarage/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390fed0d68f936e9:0xd6fcbf0dac51de9f?sa=X&ved=1t:3061&ictx=111"
                          }
                        >
                          <button className="bg-theme-red text-theme-semibold text-white py-2 px-10 rounded-lg hover:bg-white hover:text-theme-red border-2 hover:border-red-600">
                            Get Directions
                          </button>
                        </Link>
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
                      <div className="h-64  border theme-border-white shadow hover:shadow-white overflow-hidden rounded-2xl">
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
                          <div className="text-theme-500 text-black text-sm">
                            Sq. Ft. Area
                          </div>
                        </div>
                        <div className="bg-gray-200  px-5 text-center rounded-md">
                          <div className="text-theme-500  text-theme-red">
                            250+
                          </div>
                          <div className="text-theme-500 text-black font-semibold text-sm">
                            Cars
                          </div>
                        </div>
                        <div className="bg-gray-200  px-5 text-center rounded-md">
                          <div className="text-theme-500  text-theme-red">
                            800+
                          </div>
                          <div className="text-theme-500 text-black text-sm">
                            Customers
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                      <div>
                        <h3 className="h3 text-theme-semibold">
                          Service Centre
                        </h3>
                        <p className="p text-theme-500">
                          Plot No 98, Industrial Area Phase 1, Chandigarh -
                          160002
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

            {/* testinomials  */}
            <Testimonial />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Contactus;
