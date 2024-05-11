import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/Herohome";
import Testinomial from "../components/Testinomial";
import { useMutation } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { SuccessAlert, ErrorAlert } from "../components/Alerts";

// icons
import { TiTick } from "react-icons/ti";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MdSlowMotionVideo } from "react-icons/md";

function PPFPage() {
  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      to right, 
      rgba(0, 0, 0, 2), 
      rgba(0, 0, 0, 0)
    ),
    url(https://img.freepik.com/free-photo/person-working-car-wrapping_23-2149342627.jpg?w=900)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };
  const [cars, setCars] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    carName: "",
    carBrand: "",
    serviceName: "",
    stateName: "",
  });

  // Update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // React Query mutation setup
  const mutation = useMutation((data) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/service`, data);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData, {
      onSuccess: (response) => {
        // Handle success scenario
        setFormData({
          fullName: "",
          mobileNumber: "",
          carName: "",
          carBrand: "",
          serviceName: "",
          stateName: "",
        });
      },
      onError: (error) => {
        // Handle error scenario
        console.error("Submission error:", error);
      },
    });
  };

  return (
    <>
      <>
        {mutation.isSuccess && <SuccessAlert msg="Saved Successfully!" />}
        {mutation.isError && <ErrorAlert msg="Failed! Try again..." />}
      </>

      <div className="relative">
        <Navbar />
        <main>
          <article>
            {/* <!-- 
        - #HERO
      --> */}

            <>
              <section className="">
                <div
                  className="abosolute mt-20 md:mt-16 m-1 -z-50 overflow-hidden top-0 md:h-screen flex items-center justify-center rounded-2xl  md:rounded-none"
                  style={backgroundImg}
                >
                  <div className="absolute -z-10 bg-black opacity-20 rounded-2xl md:rounded-none h-56vh md:h-screen w-full"></div>
                  <div className="container">
                    <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-52">
                      {/* left container  */}
                      <div className="flex flex-col  gap-y-5">
                        <div>
                          <h1 className="text-4xl md:text-start text-theme-bold  text-center text-white font-bold tracking-wide text-theme-semibold">
                            Detailing Services That Fulfill All Your Needs
                          </h1>
                        </div>

                        <div>
                          <ul className="flex flex-col gap-y-5">
                            <li className="flex gap-2 items-center justify-start">
                              <span className="p-1 rounded-full bg-green-600">
                                <TiTick className="text-white" />
                              </span>
                              <span className="text-white text-theme-semibold">
                                Recommended by 10,000+ customers across India
                              </span>
                            </li>
                            <li className="flex gap-2 items-center justify-start">
                              <span className="p-1 rounded-full bg-green-600">
                                <TiTick className="text-white" />
                              </span>
                              <span className="text-white  text-theme-semibold">
                                Your trusted partner in top-tier car care
                              </span>
                            </li>
                            <li className="flex gap-2 items-center justify-start">
                              <span className="p-1 rounded-full bg-green-600">
                                <TiTick className="text-white" />
                              </span>
                              <span className="text-white text-theme-semibold">
                                Where quality meets trust: More than 10,000
                                customers can't be wrong.
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="grid grid-cols-3">
                          {/* rating  */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-1">
                              <IoIosStar className="text-xl md:text-2xl  text-yellow-600" />
                              <IoIosStar className="text-xl md:text-2xl  text-yellow-600" />
                              <IoIosStar className="text-xl md:text-2xl  text-yellow-600" />
                              <IoIosStar className="text-xl md:text-2xl  text-yellow-600" />
                              <IoIosStar className="text-xl md:text-2xl  text-yellow-600" />
                            </div>
                            <div>
                              <p className="md:whitespace-nowrap text-center md:text-start text-theme-500 text-white">
                                Based on 100+ ratings
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-1">
                              <h2 className="text-white text-xl md:text-2xl text-theme-semibold">
                                5000+
                              </h2>
                            </div>
                            <div>
                              <p className="md:whitespace-nowrap text-center md:text-start text-theme-500 text-white">
                                Detailing done
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-1">
                              <h2 className="text-white text-xl md:text-2xl  text-theme-semibold">
                                8000+
                              </h2>
                            </div>
                            <div>
                              <p className="md:whitespace-nowrap text-center md:text-start text-theme-500 text-white">
                                Registered users
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* right container  */}
                      <form onSubmit={handleSubmit} className="h-full">
                        <div className="h-full bg-white flex flex-col justify-between p-5 rounded-xl">
                          {/* first container  */}
                          <div className="mb-5 md:mb-10">
                            <h3 className="h2 text-theme-semibold flex flex-col justify-center md:flex-row gap-2  ">
                              <span className="text-black">
                                Please Enter Your{" "}
                              </span>
                              <span className="text-theme-red hover:underline">
                                Car Details
                              </span>{" "}
                            </h3>
                            <p className="text-theme-500 text-start md:text-center text-theme-red">
                              Fields marked with an * are required
                            </p>
                          </div>
                          {/* second container  */}
                          <div className="grid md:grid-cols-2 gap-3">
                            <div>
                              <label
                                htmlFor="full-name"
                                className="text-theme-500 flex items-center"
                              >
                                Name<span className="text-red-600">*</span>
                              </label>
                              <input
                                id="full-name"
                                required
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
                                type="text"
                                placeholder="Enter Name"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="mobile-number"
                                className="text-theme-500 flex items-center"
                              >
                                Mobile <span className="text-red-600">*</span>
                              </label>
                              <input
                                type="mobile-number"
                                required
                                maxLength={10}
                                minLength={10}
                                id="mobile-number"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
                                placeholder="Enter Mobile Number"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="regNumber"
                                className="text-theme-500 flex items-center"
                              >
                                Reg.Number
                              </label>
                              <input
                                id="regNumber"
                                type="text"
                                name="regNumber"
                                required
                                value={formData.regNumber}
                                onChange={handleChange}
                                className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
                                placeholder="Select State"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="car-name"
                                className="text-theme-500 flex items-center"
                              >
                                Car Model
                              </label>
                              <input
                                id="car-name"
                                type="car-name"
                                name="carName"
                                value={formData.carName}
                                onChange={handleChange}
                                className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
                                placeholder="Enter Car Brand/Model"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="car-brand"
                                className="text-theme-500 flex items-center"
                              >
                                Car Brand
                              </label>
                              <select
                                id="car-brand"
                                type="text"
                                name="carBrand"
                                value={formData.carBrand}
                                onChange={handleChange}
                                className="p-2 w-full bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md cursor-pointer"
                                placeholder="Select Car Brand"
                              >
                                <option value="">--- Select Brand ---</option>
                                <option value="audi">Audi</option>
                                <option value="Mercedes">Mercedes</option>
                                <option value="BMW">BMW</option>
                                <option value="Jaguar">Jaguar</option>
                                <option value="Luxus">luxus</option>
                                <option value="Porche">Porche</option>
                                <option value="Volvo">Volvo</option>
                              </select>
                            </div>
                            <div>
                              <label
                                htmlFor="city-name"
                                className="text-theme-500 flex items-center"
                              >
                                Service
                              </label>
                              <select
                                id="city-name"
                                type="text"
                                name="cityName"
                                value={formData.serviceName}
                                className="p-2 w-full bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md cursor-pointer"
                                onChange={handleChange}
                                placeholder="Select City"
                              >
                                <option value="">--- Select Service ---</option>
                                <option value="Ceramic Coating">
                                  Ceramic Coating
                                </option>
                                <option value="Detailing">Detailing</option>
                                <option value="Peelable Paint">
                                  Peelable Paint
                                </option>
                                <option value="Car Wash">Car Wash</option>
                              </select>
                            </div>
                          </div>
                          {/* third container  */}
                          <div className="mt-5">
                            {mutation.isLoading ? (
                              <button
                                type="button"
                                className="bg-theme-red text-white flex justify-center items-center py-2 px-5 rounded-lg"
                                disabled
                              >
                                <svg
                                  className="h-6 w-6 animate-spin stroke-white"
                                  viewBox="0 0 256 256"
                                >
                                  <line
                                    x1="128"
                                    y1="32"
                                    x2="128"
                                    y2="64"
                                    strokelinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"
                                  ></line>
                                  <line
                                    x1="195.9"
                                    y1="60.1"
                                    x2="173.3"
                                    y2="82.7"
                                    strokelinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"
                                  ></line>
                                  <line
                                    x1="224"
                                    y1="128"
                                    x2="192"
                                    y2="128"
                                    strokelinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"
                                  ></line>
                                  <line
                                    x1="195.9"
                                    y1="195.9"
                                    x2="173.3"
                                    y2="173.3"
                                    strokelinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"
                                  ></line>
                                  <line
                                    x1="128"
                                    y1="224"
                                    x2="128"
                                    y2="192"
                                    strokelinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"
                                  ></line>
                                  <line
                                    x1="60.1"
                                    y1="195.9"
                                    x2="82.7"
                                    y2="173.3"
                                    strokelinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"
                                  ></line>
                                  <line
                                    x1="32"
                                    y1="128"
                                    x2="64"
                                    y2="128"
                                    strokelinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"
                                  ></line>
                                  <line
                                    x1="60.1"
                                    y1="60.1"
                                    x2="82.7"
                                    y2="82.7"
                                    strokelinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"
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
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </>

            {/* hero Banner section End  */}

            {/* what is PPF */}
            <section className="section get-start text-white relative">
              <div className="hidden md:block absolute w-full md:w-[32rem] right-0 top-0">
                <img
                  loading="lazy"
                  src="/assets/banners/car14.png"
                  className=" h-full w-full object-cover object-center"
                  alt="urban garage"
                />
              </div>
              {/* container 1 */}
              <div className="container ">
                <div className="mb-5 md:mb-10 max-w-3xl">
                  <h2 className="h2 section-title text-start text-theme-semibold flex items-center ">
                    What is{" "}
                    <span className="mx-2 text-theme-red text-theme-bold">
                      PPF (paint protection film) ?
                    </span>
                  </h2>
                  <p className="p max-w-3xl m-auto text-justify text-theme-500">
                    Paint Protection Film, often referred to as a clear bra, is
                    a transparent layer that is applied to a vehicle's exterior
                    to shield it from potential damage caused by road debris, UV
                    rays, bird droppings, scratches, and more. PPF is
                    meticulously designed to be durable and virtually invisible,
                    ensuring that your car's appearance remains unaffected while
                    receiving optimal protection.
                  </p>
                  <br />
                  <p className="p max-w-3xl m-auto text-justify text-theme-500">
                    PPF is a highly effective solution for maintaining your
                    car's finish and preserving its resale value. It is a
                    popular choice among car enthusiasts and owners who want to
                    keep their vehicles looking pristine for years to come.
                  </p>
                  <br />
                  <p className="p max-w-3xl m-auto text-justify text-theme-500">
                    At Urban Garage, we offer top-tier PPF services that are
                    tailored to your car's specific needs. Our team of experts
                    is dedicated to providing you with the best protection
                    possible, ensuring that your car remains in top condition
                    for years to come.
                  </p>
                </div>
                {/* card 1 */}
                <div></div>
              </div>
            </section>

            {/* what is icons  */}
            <section className="section get-start text-white">
              {/* container 1 */}
              <div className="container mb-10">
                <div className="flex flex-col gap-10">
                  <h2 className="h2 mb-5  section-title text-start justify-center text-theme-semibold md:flex items-center ">
                    Clear and
                    <span className="md:mx-2 text-theme-red text-theme-bold">
                      complete protection
                    </span>
                    against
                  </h2>
                  <div className="grid md:grid-cols-3 gap-10">
                    {/* card 1 */}
                    <div className="bg-white text-gray-800 rounded-2xl border theme-border-white shadow hover:shadow-white text-theme-semibold  p-2 grid md:grid-cols-4 gap-5 items-center justify-center">
                      <div className=" text-gray-800 text-theme-semibold  h-20 w-20 rounded-full ">
                        <img
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          src="https://www.thedetailingmafia.com/assets/images/pages/ppf/icons/1.webp"
                          alt="urban garage"
                        />
                      </div>
                      <div className="col-span-3">
                        <h2 className="h2 text-start text-theme-500">
                          Scratches & Swirl Marks
                        </h2>
                      </div>
                    </div>
                    {/* card 2 */}
                    <div className="bg-white text-gray-800 rounded-2xl border theme-border-white shadow hover:shadow-white text-theme-semibold  p-2 grid md:grid-cols-4 gap-5 items-center">
                      <div className=" text-theme-semibold  h-20 w-20 rounded-full">
                        <img
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          src="https://www.thedetailingmafia.com/assets/images/pages/ppf/icons/2.webp"
                          alt="urban garage"
                        />
                      </div>
                      <div className="col-span-3">
                        <h2 className="h2 text-start text-theme-500">
                          Stone Chips
                        </h2>
                      </div>
                    </div>
                    {/* card 3 */}
                    <div className="bg-white text-gray-800 rounded-2xl border theme-border-white shadow hover:shadow-white text-theme-semibold  p-2 grid md:grid-cols-4 gap-5 items-center">
                      <div className=" text-theme-semibold  h-20 w-20 rounded-full">
                        <img
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          src="https://www.thedetailingmafia.com/assets/images/pages/ppf/icons/4.webp"
                          alt="urban garage"
                        />
                      </div>
                      <div className="col-span-3">
                        <h2 className="h2 text-start text-theme-500">
                          Paint scuff
                        </h2>
                      </div>
                    </div>
                    {/* card 4 */}
                    <div className="bg-white text-gray-800 rounded-2xl border theme-border-white shadow hover:shadow-white text-theme-semibold  p-2 grid md:grid-cols-4 gap-5 items-center">
                      <div className=" text-theme-semibold  h-20 w-20 rounded-full">
                        <img
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          src="https://www.thedetailingmafia.com/assets/images/pages/ppf/icons/5.webp"
                          alt="urban garage"
                        />
                      </div>
                      <div className="col-span-3">
                        <h2 className="h2 text-start text-theme-500">
                          Door dings
                        </h2>
                      </div>
                    </div>
                    {/* card 5 */}
                    <div className="bg-white text-gray-800 rounded-2xl border theme-border-white shadow hover:shadow-white text-theme-semibold  p-2 grid md:grid-cols-4 gap-5 items-center">
                      <div className=" text-theme-semibold  h-20 w-20 rounded-full">
                        <img
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          src="https://www.thedetailingmafia.com/assets/images/pages/ppf/icons/6.webp"
                          alt="urban garage"
                        />
                      </div>
                      <div className="col-span-3">
                        <h2 className="h2 text-start text-theme-500">
                          Paint discoloration
                        </h2>
                      </div>
                    </div>
                    {/* card 6 */}
                    <div className="bg-white text-gray-800 rounded-2xl border theme-border-white shadow hover:shadow-white text-theme-semibold  p-2 grid md:grid-cols-4 gap-5 items-center">
                      <div className=" text-theme-semibold  h-20 w-20 rounded-full">
                        <img
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          src="https://www.thedetailingmafia.com/assets/images/pages/ppf/icons/7.webp"
                          alt="urban garage"
                        />
                      </div>
                      <div className="col-span-3">
                        <h2 className="h2 text-start text-theme-500">
                          Water Stains
                        </h2>
                      </div>
                    </div>
                    {/* card 7 */}
                    <div className="bg-white text-gray-800 rounded-2xl border theme-border-white shadow hover:shadow-white text-theme-semibold  p-2 grid md:grid-cols-4 gap-5 items-center">
                      <div className=" text-theme-semibold  h-20 w-20 rounded-full">
                        <img
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          src="https://www.thedetailingmafia.com/assets/images/pages/ppf/icons/8.webp"
                          alt="urban garage"
                        />
                      </div>
                      <div className="col-span-3">
                        <h2 className="h2 text-start text-theme-500">
                          Bird droppings
                        </h2>
                      </div>
                    </div>
                    {/* card 8 */}
                    <div className="bg-white text-gray-800 rounded-2xl border theme-border-white shadow hover:shadow-white text-theme-semibold  p-2 grid md:grid-cols-4 gap-5 items-center">
                      <div className=" text-theme-semibold  h-20 w-20 rounded-full">
                        <img
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          src="https://www.thedetailingmafia.com/assets/images/pages/ppf/icons/10.webp"
                          alt="urban garage"
                        />
                      </div>
                      <div className="col-span-3">
                        <h2 className="h2 text-start text-theme-500">
                          Mineral Contaminations
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Transform Your Car The Way You Want */}

            <section className="section get-start text-white">
              {/* container 1 */}
              <div className="container mb-10 md:mb-20">
                <div className="mb-5 md:mb-10">
                  <h2 className="h2 section-title text-center text-theme-semibold ">
                    Transform Your Car The Way You Want
                  </h2>
                  <p className="p max-w-3xl m-auto text-center text-theme-500">
                    Maintain your car hygiene and cleanliness with Urban Garage.
                    We offer a variety of care care solutions to ensure a
                    driving experience like never before!
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-5">
                  {/* card 1 */}
                  <div className="md:col-span-3 h-72 rounded-2xl overflow-hidden theme-border-white">
                    <img
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                      src="https://luxuryride.in/_next/image?url=%2Fimg%2Fppf-banner.png&w=1920&q=75"
                      alt="Urban Garage Coating"
                    />
                  </div>
                  {/* card 2 */}
                  <div className="md:col-span-2  flex flex-col gap-y-2 items-start justify-between rounded-2xl   text-theme-500">
                    <div className="flex flex-col  gap-y-5">
                      <div>
                        <h1 className="h2 text-start text-theme-bold  font-bold tracking-wide text-theme-semibold">
                          PPF (Paint Protection Film)
                        </h1>
                        <p className="p text-lg text-theme-semibold ">
                          Guard your car with invisible armor, up to 12-years
                          warranty shielding against road wear and tear
                        </p>
                      </div>

                      <div>
                        <ul className="flex flex-col gap-y-5 text-white">
                          <li className="flex gap-2 items-center">
                            <span className="p-1 rounded-full bg-green-600">
                              <TiTick className="text-white" />
                            </span>
                            <span className=" text-theme-semibold">
                              Self-healing technology, seamlessly erasing minor
                              scratches and swirl marks.
                            </span>
                          </li>
                          <li className="flex gap-2 items-center">
                            <span className="p-1 rounded-full bg-green-600">
                              <TiTick className="text-white" />
                            </span>
                            <span className=" text-theme-semibold">
                              HydroShield technology for unparalleled defense
                              against the elements.
                            </span>
                          </li>
                          <li className="flex gap-2 items-center">
                            <span className="p-1 rounded-full bg-green-600">
                              <TiTick className="text-white" />
                            </span>
                            <span className=" text-theme-semibold">
                              High-gloss PPF, engineered for enduring shine and
                              non-yellowing perfection.
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <button className="px-5 py-2 bg-theme-red text-white text-theme-semibold rounded-lg">
                          Enquire Now
                        </button>
                        <button className="px-5 py-2 bg-white text-gray-800 text-theme-semibold  text-gray-800 text-theme-semibold rounded-lg flex gap-x-1 items-center">
                          <span>
                            <MdSlowMotionVideo />
                          </span>{" "}
                          Watch Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* container 3  */}
              <div className="container mb-10 md:mb-20">
                <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-5">
                  {/* card 1 */}
                  <div className="md:col-span-3 h-72 rounded-2xl overflow-hidden theme-border-white">
                    <img
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                      src="https://luxuryride.in/_next/image?url=%2Fimg%2Fdetailing-banner.png&w=1920&q=75"
                      alt="Urban Garage Detailing"
                    />
                  </div>
                  {/* card 2 */}
                  <div className="md:col-span-2 flex flex-col gap-y-2 items-start justify-between rounded-2xl text-white  text-theme-500">
                    <div className="flex flex-col  gap-y-5">
                      <div>
                        <h1 className="h2 text-start text-theme-bold  font-bold tracking-wide text-theme-semibold">
                          Detailing
                        </h1>
                        <p className="p text-lg text-theme-semibold ">
                          Unveil the true beauty of your car with our meticulous
                          detailing, where every inch receives expert attention
                        </p>
                      </div>

                      <div>
                        <ul className="flex flex-col gap-y-5">
                          <li className="flex gap-2 items-center">
                            <span className="p-1 rounded-full bg-green-600">
                              <TiTick className="text-white" />
                            </span>
                            <span className=" text-theme-semibold">
                              We thoroughly cleanse every nook and cranny for
                              improved aesthetic.
                            </span>
                          </li>
                          <li className="flex gap-2 items-center">
                            <span className="p-1 rounded-full bg-green-600">
                              <TiTick className="text-white" />
                            </span>
                            <span className=" text-theme-semibold">
                              We ensure a clean and shiny engine bay by removing
                              grime and grease.
                            </span>
                          </li>
                          <li className="flex gap-2 items-center">
                            <span className="p-1 rounded-full bg-green-600">
                              <TiTick className="text-white" />
                            </span>
                            <span className=" text-theme-semibold">
                              We bring every detail to life, from chrome accents
                              to trim surfaces.
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <button className="px-5 py-2 bg-theme-red text-white text-theme-semibold rounded-lg">
                          Enquire Now
                        </button>
                        <button className="px-5 py-2 bg-white  text-theme-semibold  text-gray-800 text-theme-semibold rounded-lg flex gap-x-1 items-center">
                          <span>
                            <MdSlowMotionVideo />
                          </span>{" "}
                          Watch Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* OUR SERVICES */}
            <section className="section text-white" id="hero-banner">
              <div className="relative h-screen">
                {/* <!-- Adjusted overlay with modified opacity for better content visibility --> */}
                <div className="absolute z-10 h-full w-full bg-gradient-to-r from-black to-transparent opacity-80"></div>
                <div className="h-full grid grid-cols-1 md:grid-cols-2">
                  <div className="absolute -z-0 h-full w-full">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="https://st.depositphotos.com/15237386/53335/i/450/depositphotos_533350644-stock-photo-closeup-installing-protective-transparent-vinyl.jpg"
                      alt="Urban Garage"
                    />
                  </div>
                  {/* <!-- Right container --> */}
                  <div className="opacity-50 bg-black p-4 md:p-10 z-20 relative">
                    <div className="mb-2">
                      <h2 className="h1 text-white text-theme-bold font-bold text-2xl shadow-md">
                        Our Services
                      </h2>
                    </div>
                    <div className="mb-2">
                      <p className="text-theme-500 text-white shadow-md">
                        We provide complete professional services in our state
                        of the art service centres designed to keep your ride
                        running smoothly and impressively.
                      </p>

                      <div className="grid grid-cols-2 gap-x-5 mb-10">
                        <div>
                          <ul className="text-theme-500 flex flex-col gap-y-5">
                            <li className="flex gap-2 text-white items-center text-theme-500">
                              <TiTick className="text-red-600 text-xl" />
                              OEM/OES Parts
                            </li>
                            <li className="flex gap-2 text-white items-center text-theme-500">
                              {" "}
                              <TiTick className="text-red-600 text-xl" /> PAN
                              India Delivery
                            </li>
                            <li className="flex gap-2 text-white  items-center text-theme-500">
                              {" "}
                              <TiTick className="text-red-600 text-xl" /> In
                              House Service Available
                            </li>
                            <li className="flex gap-2 text-white  items-center text-theme-500">
                              {" "}
                              <TiTick className="text-red-600 text-xl" /> 350+
                              Check Evaluations
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5 max-w-1xl">
                        <button className="theme-border-white text-center hover:bg-white text-gray-800 text-theme-semibold  text-white hover:text-gray-900 px-6 py-2 rounded-lg bg-transparent text-theme-semibold tracking-wide transition-colors">
                          Book Service package
                        </button>
                        <button className="theme-border-white text-center hover:bg-white text-gray-800 text-theme-semibold  text-white hover:text-gray-900 px-6 py-2 rounded-lg bg-transparent text-theme-semibold tracking-wide transition-colors">
                          Book Service
                        </button>
                        <button className="theme-border-white text-center hover:bg-white text-gray-800 text-theme-semibold  text-white hover:text-gray-900 px-6 py-2 rounded-lg bg-transparent text-theme-semibold tracking-wide transition-colors">
                          Book Car Care
                        </button>
                        <button className="theme-border-white text-center hover:bg-white text-gray-800 text-theme-semibold  text-white hover:text-gray-900 px-6 py-2 rounded-lg bg-transparent text-theme-semibold tracking-wide transition-colors">
                          Buy Extended Warranty
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- 
        - #BLOG
      --> */}

            <section>
              <Testinomial />
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default PPFPage;
