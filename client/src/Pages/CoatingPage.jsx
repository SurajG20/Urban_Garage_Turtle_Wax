import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/Herohome";
import Testinomial from "../components/Testinomial";
import { useMutation } from "react-query";
import axios from "axios";
import { SuccessAlert, ErrorAlert } from "../components/Alerts";

// icons
import { TiTick } from "react-icons/ti";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MdSlowMotionVideo } from "react-icons/md";
import CardGallery from "../components/CardGallery";

function CoatingPage() {
  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      to right, 
      rgba(0, 0, 0, 2), 
      rgba(0, 0, 0, 0)
    ),
    url(https://as1.ftcdn.net/v2/jpg/07/02/14/46/1000_F_702144627_n5EaVmj4dsFknURMzv7RFI9b1uX0ktcW.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    carName: "",
    carBrand: "",
    cityName: "",
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
          cityName: "",
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
                  className="abosolute mt-20 md:mt-16 m-1  -z-50 overflow-hidden top-0 md:h-screen flex items-center justify-center rounded-2xl  md:rounded-none"
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
                            <li className="flex gap-2 items-center">
                              <span className="p-1 rounded-full bg-green-600">
                                <TiTick className="text-white" />
                              </span>
                              <span className="text-white text-theme-semibold">
                                Recommended by 10,000+ customers across India
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <span className="p-1 rounded-full bg-green-600">
                                <TiTick className="text-white" />
                              </span>
                              <span className="text-white text-theme-semibold">
                                Your trusted partner in top-tier car care
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <span className="p-1 rounded-full bg-green-600">
                                <TiTick className="text-white" />
                              </span>
                              <span className="text-white text-theme-semibold">
                                Chosen by 10,000+ customers for exceptional
                                vehicle service.
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="grid grid-cols-3">
                          {/* rating  */}
                          <div className="flex flex-col justify-between items-center  gap-2">
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

                          <div className="flex flex-col justify-between items-center gap-2">
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

                          <div className="flex flex-col justify-between items-center gap-2">
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
                          <div>
                            <h3 className="h2 text-theme-semibold flex flex-col md:flex-row gap-2  ">
                              <span className="text-black">
                                Please Enter Your{" "}
                              </span>
                              <span className="text-theme-red hover:underline">
                                Car Details
                              </span>{" "}
                            </h3>
                            <p className="text-theme-500">
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
                                htmlFor="car-name"
                                className="text-theme-500 flex items-center"
                              >
                                Car Model<span className="text-red-600">*</span>
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
                                <span className="text-red-600">*</span>
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
                                Service<span className="text-red-600">*</span>
                              </label>
                              <select
                                id="city-name"
                                type="text"
                                name="cityName"
                                value={formData.cityName}
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
                            <div>
                              <label
                                htmlFor="state-name"
                                className="text-theme-500 flex items-center"
                              >
                                Address<span className="text-red-600">*</span>
                              </label>
                              <input
                                id="state-name"
                                type="text"
                                name="stateName"
                                value={formData.stateName}
                                onChange={handleChange}
                                className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
                                placeholder="Select State"
                              />
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
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </>

            {/* hero Banner section End  */}

            {/* what is Coating */}
            <section className="section get-start text-white relative">
              <div className="hidden md:block absolute w-full md:w-[32rem] right-0 top-20">
                <img
                  src="/assets/banners/car6.png"
                  className="scale-x-[-1] h-full w-full object-cover object-center"
                  alt="urban garage"
                />
              </div>
              {/* container 1 */}
              <div className="container ">
                <div className="mb-5 md:mb-10p max-w-3xl">
                  <h2 className="h2 section-title text-start text-theme-semibold flex items-center ">
                    What is{" "}
                    <span className="mx-2 text-theme-red text-theme-bold">
                      Ceramic Coating ?
                    </span>
                  </h2>
                  <p className="p max-w-3xl m-auto text-justify text-theme-500">
                    Ceramic coating is a clear coat which includes a liquid
                    polymer. These come in many forms and types depending upon
                    the composition of the coating. There are two components
                    that add together to form Ceramic coating. The Physical
                    which Protects and the Shine comes from the Chemical
                    component.
                  </p>
                  <br />
                  <p className="p max-w-3xl m-auto text-justify text-theme-500">
                    When ceramic coating is applied on a car’s body, the polymer
                    forms a chemical bonding with the factory paint.
                  </p>
                  <br />
                  <p className="p max-w-3xl m-auto text-justify text-theme-500">
                    Once coated, it can only be removed by abrasion and not by
                    any chemicals. If done correctly, ceramic coating can even
                    last the lifetime of the car.
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
                    Benefits of
                    <span className="md:mx-2 text-theme-red text-theme-bold">
                      Ceramic Coating
                    </span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-10">
                    {/* card 1 */}
                    <div className=" grid  md:grid-cols-4 gap-5 items-center justify-center">
                      <div className="bg-white h-28 w-28 rounded-full ">
                        <img
                          loading="lazy"
                          src="https://www.thedetailingmafia.com/assets/images/pages/ourservices/Hydrophobic-in-Nature.webp"
                          alt="urban garage"
                        />
                      </div>
                      <div className="col-span-3">
                        <h2 className="h2 text-start text-theme-500">
                          HYDROPHOBIC IN NATURE CERAMIC COATING
                        </h2>
                      </div>
                    </div>
                    {/* card 2 */}
                    <div className="grid md:grid-cols-4 gap-5 items-center">
                      <div className="bg-white h-28 w-28 rounded-full">
                        <img
                          loading="lazy"
                          src="https://www.thedetailingmafia.com/assets/images/pages/ourservices/Protection-from-Chemical-Stains.webp"
                          alt="urban garage"
                        />
                      </div>
                      <div className="col-span-3">
                        <h2 className="h2 text-start text-theme-500">
                          PROTECTION FROM UV RAYS
                        </h2>
                      </div>
                    </div>
                    {/* card 3 */}
                    <div className="grid md:grid-cols-4 gap-5 items-center">
                      <div className="bg-white h-28 w-28 rounded-full">
                        <img
                          loading="lazy"
                          src="https://www.thedetailingmafia.com/assets/images/pages/ourservices/Protection-from-UV-Rays.webp"
                          alt="urban garage"
                        />
                      </div>
                      <div className="col-span-3">
                        <h2 className="h2 text-start text-theme-500">
                          PROTECTION FROM CHEMICAL STAINS
                        </h2>
                      </div>
                    </div>
                    {/* card 4 */}
                    <div className="grid md:grid-cols-4 gap-5 items-center">
                      <div className="bg-white h-28 w-28 rounded-full">
                        <img
                          loading="lazy"
                          src="https://www.thedetailingmafia.com/assets/images/pages/ourservices/The-Glossy-Touch.webp"
                          alt="urban garage"
                        />
                      </div>
                      <div className="col-span-3">
                        <h2 className="h2 text-start text-theme-500">
                          THE GLOSSY TOUCH CERAMIC COATING
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
              </div>
              {/* container 2  */}
              <div className="container mb-10 md:mb-20">
                <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-5">
                  {/* card 1 */}
                  <div className="md:col-span-3 h-72 md:h-96 rounded-2xl overflow-hidden theme-border-white">
                    <img
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                      src="https://luxuryride.in/_next/image?url=%2Fimg%2Fceramic-banner.png&w=1920&q=75"
                      alt="Urban Garage Coating"
                    />
                  </div>
                  {/* card 2 */}
                  <div className="md:col-span-2  flex flex-col gap-y-2 items-start justify-between rounded-2xl text-white text-theme-500">
                    <div className="flex flex-col gap-y-5">
                      <div>
                        <h1 className="h2 text-start text-theme-bold  font-bold tracking-wide text-theme-semibold">
                          Ceramic Coating
                        </h1>
                        <p className="p text-lg text-theme-semibold ">
                          Experience automotive excellence with our
                          professional-grade ceramic coating for unmatched gloss
                          and protection
                        </p>
                      </div>

                      <div>
                        <ul className="flex flex-col gap-y-5">
                          <li className="flex gap-2 items-center">
                            <span className="p-1 rounded-full bg-green-600">
                              <TiTick className="text-white" />
                            </span>
                            <span className=" text-theme-semibold">
                              Adds an extra layer of defense against high
                              temperatures and sun exposure.
                            </span>
                          </li>
                          <li className="flex gap-2 items-center">
                            <span className="p-1 rounded-full bg-green-600">
                              <TiTick className="text-white" />
                            </span>
                            <span className=" text-theme-semibold">
                              Delivers superior water and dirt repellency for a
                              showroom-worthy finish.
                            </span>
                          </li>
                          <li className="flex gap-2 items-center">
                            <span className="p-1 rounded-full bg-green-600">
                              <TiTick className="text-white" />
                            </span>
                            <span className=" text-theme-semibold">
                              Unleash a lasting high-gloss sheen without the
                              need for waxing.
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex justify-center md:justify-start gap-2">
                        <button className="px-5 py-2 bg-theme-red text-white text-theme-semibold rounded-lg">
                          Enquire Now
                        </button>
                        <button className="px-5 py-2 bg-white text-gray-800 text-theme-semibold rounded-lg flex gap-x-1 items-center">
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
                  <div className="md:col-span-3 h-72 md:h-96 rounded-2xl overflow-hidden theme-border-white">
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

                      <div className="flex justify-center md:justify-start gap-2">
                        <button className="px-5 py-2 bg-theme-red text-white text-theme-semibold rounded-lg">
                          Enquire Now
                        </button>
                        <button className="px-5 py-2 bg-white text-gray-800 text-theme-semibold rounded-lg flex gap-x-1 items-center">
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

            <section>
              <CardGallery />
            </section>

            {/* OUR SERVICES */}
            <section className="section text-white" id="hero-banner">
              <div className="relative min-h-min">
                {/* <!-- Adjusted overlay with modified opacity for better content visibility --> */}
                <div className="absolute z-10 h-full w-full bg-gradient-to-r from-black to-transparent opacity-80"></div>
                <div className="h-full grid grid-cols-1 md:grid-cols-2">
                  <div className="absolute -z-0 h-full w-full">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                      src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8yMl9waG90b19vZl9zcG9ydF9jYXJfd2l0aF9zb2FwX2ZvYW1fZnJvbV9jYXJfd19kZWM4ZDcwNS0wMGU3LTQ3ZjgtYmI3Ny03ZWI5MjcxZmNkNjlfMS5qcGc.jpg"
                      alt="Urban Garage"
                    />
                  </div>
                  {/* <!-- Right container --> */}
                  <div className="opacity-90 p-4 md:p-10 z-20 relative">
                    <div className="mb-2">
                      <h2 className="h1 text-white text-theme-bold font-bold text-2xl shadow-md flex items-center gap-2">
                        Ceramic <span className="text-theme-red">Wash</span>
                      </h2>
                    </div>
                    <div className="mb-2">
                      <p className="text-theme-500 text-white shadow-md">
                        We provide complete professional services in our state
                        of the art service centres designed to keep your ride
                        running smoothly and impressively.
                      </p>
                    </div>
                    {/* <!-- Adjustments to text shadow for better visibility --> */}
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
                            <TiTick className="text-red-600 text-xl" /> In House
                            Service Available
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
                      <button className="theme-border-white text-center hover:bg-white text-white hover:text-gray-900 px-6 py-2 rounded-lg bg-transparent text-theme-semibold tracking-wide transition-colors">
                        Book Service package
                      </button>
                      <button className="theme-border-white text-center hover:bg-white text-white hover:text-gray-900 px-6 py-2 rounded-lg bg-transparent text-theme-semibold tracking-wide transition-colors">
                        Book Service
                      </button>
                      <button className="theme-border-white text-center hover:bg-white text-white hover:text-gray-900 px-6 py-2 rounded-lg bg-transparent text-theme-semibold tracking-wide transition-colors">
                        Book Car Care
                      </button>
                      <button className="theme-border-white text-center hover:bg-white text-white hover:text-gray-900 px-6 py-2 rounded-lg bg-transparent text-theme-semibold tracking-wide transition-colors">
                        Buy Extended Warranty
                      </button>
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

export default CoatingPage;
