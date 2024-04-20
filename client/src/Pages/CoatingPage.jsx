import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/Herohome";
import Testinomial from "../components/Testinomial";
import { useMutation } from "react-query";
import axios from "axios";
// import Dropdown from "../utils/Dropdown";

// icons
import { TiTick } from "react-icons/ti";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

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
        alert("Submission successful:", response.data);
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
                  <div className="grid md:grid-cols-2 md:gap-x-52">
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
                              Recommended by 10,000+ customers across India
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
                          <h3 className="h2 text-theme-semibold flex gap-2 items-center ">
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
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label
                              htmlFor="full-name"
                              className="text-theme-500 flex items-center"
                            >
                              Name<span className="text-red-600">*</span>
                            </label>
                            <input
                              required
                              id="full-name"
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
                              required
                              type="text"
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
                              required
                              type="text"
                              id="car-name"
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
                              required
                              type="text"
                              id="car-brand"
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
                              City<span className="text-red-600">*</span>
                            </label>
                            <input
                              required
                              id="city-name"
                              type="text"
                              name="cityName"
                              value={formData.cityName}
                              className="p-2 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none rounded-md"
                              onChange={handleChange}
                              placeholder="Select City"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="state-name"
                              className="text-theme-500 flex items-center"
                            >
                              State<span className="text-red-600">*</span>
                            </label>
                            <input
                              required
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
                          <button
                            type="submit"
                            className="px-10 py-2 rounded-lg bg-theme-red text-white text-theme-semibold"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </>

          {/* hero Banner section End  */}

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
                  We offer a variety of care care solutions to ensure a driving
                  experience like never before!
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-5">
                {/* card 1 */}
                <div className="md:col-span-3 md:h-72 rounded-2xl overflow-hidden theme-border-white">
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

                    <div className="">
                      <button className="px-5 py-2 bg-theme-red text-white text-theme-semibold rounded-lg">
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* container 2  */}
            <div className="container mb-10 md:mb-20">
              <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-5">
                {/* card 1 */}
                <div className="md:col-span-3 h-72 rounded-2xl overflow-hidden theme-border-white">
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
                            Unleash a lasting high-gloss sheen without the need
                            for waxing.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="">
                      <button className="px-5 py-2 bg-theme-red text-white text-theme-semibold rounded-lg">
                        Enquire Now
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

                    <div className="">
                      <button className="px-5 py-2 bg-theme-red text-white text-theme-semibold rounded-lg">
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* container 4 */}
            <div className="container mb-10 md:mb-20">
              <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-5">
                {/* card 1 */}
                <div className="md:col-span-3 h-72 rounded-2xl overflow-hidden theme-border-white">
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    src="https://luxuryride.in/_next/image?url=%2Fimg%2Fpeelable-paint-banner.png&w=1920&q=75"
                    alt="Urban Garage Peelable Paint"
                  />
                </div>
                {/* card 2 */}
                <div className="md:col-span-2  flex flex-col gap-y-2 items-start justify-between rounded-2xl text-white  text-theme-500">
                  <div className="flex flex-col  gap-y-5">
                    <div>
                      <h1 className="h2 text-start text-theme-bold  font-bold tracking-wide text-theme-semibold">
                        Peelable Paint
                      </h1>
                      <p className="p text-lg text-theme-semibold ">
                        Peelable paint is a specialized coating that provides a
                        temporary and removable solution for various surfaces
                      </p>
                    </div>

                    <div>
                      <ul className="flex flex-col gap-y-5">
                        <li className="flex gap-2 items-center">
                          <span className="p-1 rounded-full bg-green-600">
                            <TiTick className="text-white" />
                          </span>
                          <span className=" text-theme-semibold">
                            Our peelable car paint is designed for easy
                            application with minimal effort.
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

                    <div className="">
                      <button className="px-5 py-2 bg-theme-red text-white text-theme-semibold rounded-lg">
                        Enquire Now
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
                    className="h-full w-full object-cover object-left"
                    src="https://api.luxuryride.in/public/cms-page/our_service_centers-1689576363766-569547964-service-centre-desktop-.png"
                    alt="Urban Garage"
                  />
                </div>
                {/* <!-- Right container --> */}
                <div className="opacity-90 p-4 md:p-10 z-20 relative">
                  <div className="mb-2">
                    <h2 className="h1 text-white text-theme-bold font-bold text-2xl shadow-md">
                      Our Services
                    </h2>
                  </div>
                  <div className="mb-2">
                    <p className="text-theme-500 text-white shadow-md">
                      We provide complete professional services in our state of
                      the art service centres designed to keep your ride running
                      smoothly and impressively.
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
                          <TiTick className="text-red-600 text-xl" /> PAN India
                          Delivery
                        </li>
                        <li className="flex gap-2 text-white  items-center text-theme-500">
                          {" "}
                          <TiTick className="text-red-600 text-xl" /> In House
                          Service Available
                        </li>
                        <li className="flex gap-2 text-white  items-center text-theme-500">
                          {" "}
                          <TiTick className="text-red-600 text-xl" /> 350+ Check
                          Evaluations
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5 max-w-1xl">
                    <button className="theme-border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                      Book Service package
                    </button>
                    <button className="theme-border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                      Book Service
                    </button>
                    <button className="theme-border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                      Book Car Care
                    </button>
                    <button className="theme-border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
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
  );
}

export default CoatingPage;
