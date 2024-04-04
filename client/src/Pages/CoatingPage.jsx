import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/Herohome";
import CarCard from "../components/CarCard";
import data from "../server.json";
import { Link } from "react-router-dom";
// import Dropdown from "../utils/Dropdown";

// icons
import { TiTick } from "react-icons/ti";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

function CoatingPage() {
  const backgroundImg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(assets/cars/car1.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(data.cars);
  }, []);

  //  useEffect(() => {
  //    const fetchData = async () => {
  //     fetch("your-api-endpoint")
  //       .then((response) => response.json())
  //       .then((data) => setCars(data.cars));
  //      setCars(data.cars);
  //    };
  //    fetchData();
  //  }, []);

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
                className="abosolute mt-20 m-1 -z-50 overflow-hidden top-0 md:h-screen flex items-center justify-center rounded-2xl  md:rounded-none"
                style={backgroundImg}
              >
                <div className="absolute -z-10 bg-black opacity-20 rounded-2xl md:rounded-none h-56vh md:h-screen w-full"></div>
                <div className="container">
                  <div className="grid md:grid-cols-2 gap-y-5 gap-x-52">
                    {/* right container  */}
                    <div className="flex flex-col gap-y-5 p-4">
                      <div>
                        <h1 className="h1 md:text-[2.8rem] md:text-start text-theme-bold  text-center text-white font-bold tracking-wide text-theme-semibold">
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

                      <div className="hidden md:grid grid-cols-3 gap-3">
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex items-center gap-1">
                            <IoIosStar className="text-2xl text-yellow-600" />
                            <IoIosStar className="text-2xl text-yellow-600" />
                            <IoIosStar className="text-2xl text-yellow-600" />
                            <IoIosStar className="text-2xl text-yellow-600" />
                            <IoIosStar className="text-2xl text-yellow-600" />
                          </div>
                          <div>
                            <p className="whitespace-nowrap text-theme-500 text-white">
                              Based on 100+ ratings
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                          <div className="flex items-center gap-1">
                            <h2 className="text-white text-2xl text-theme-semibold">
                              5000+
                            </h2>
                          </div>
                          <div>
                            <p className="whitespace-nowrap text-theme-500 text-white">
                              Detailing done
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                          <div className="flex items-center gap-1">
                            <h2 className="text-white text-2xl text-theme-semibold">
                              8000+
                            </h2>
                          </div>
                          <div>
                            <p className="whitespace-nowrap text-theme-500 text-white">
                              Registered users
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* left container  */}
                    <div className="hidden md:block h-full">
                      <div className="h-full bg-white flex flex-col justify-between p-5 rounded-xl">
                        {/* first container  */}
                        <div>
                          <h3 className="h2 text-theme-semibold flex gap-2 items-center ">
                            <span>Please Enter Your </span>
                            <span className="text-theme-red">
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
                            <label htmlFor="" className="text-theme-500">
                              Name*
                            </label>
                            <input
                              className="p-1 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none"
                              type="text"
                              placeholder="Enter Name"
                            />
                          </div>
                          <div>
                            <label htmlFor="" className="text-theme-500">
                              Mobile*
                            </label>
                            <input
                              className="p-1 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none"
                              type="text"
                              placeholder="Enter Mobile Number"
                            />
                          </div>
                          <div>
                            <label htmlFor="" className="text-theme-500">
                              Car*
                            </label>
                            <input
                              className="p-1 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none"
                              type="text"
                              placeholder="Enter Car Brand/Model"
                            />
                          </div>
                          <div>
                            <label htmlFor="" className="text-theme-500">
                              Service*
                            </label>
                            <input
                              className="p-1 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none"
                              type="text"
                              placeholder="Enter Select Service"
                            />
                          </div>
                          <div>
                            <label htmlFor="" className="text-theme-500">
                              State*
                            </label>
                            <input
                              className="p-1 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none"
                              type="text"
                              placeholder="Select State"
                            />
                          </div>
                          <div>
                            <label htmlFor="" className="text-theme-500">
                              City*
                            </label>
                            <input
                              className="p-1 bg-gray-200 text-sm text-theme-500 border-theme-gray outline-none"
                              type="text"
                              placeholder="Select City"
                            />
                          </div>
                        </div>
                        {/* third container  */}
                        <div>
                          <button className="px-5 py-2 rounded-lg bg-theme-red text-white text-theme-semibold">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>

          {/* hero Banner section End  */}

          {/* Transform Your Car The Way You Want */}

          <section className="section get-start">
            {/* container 1 */}
            <div className="container mb-10 md:mb-20">
              <div className="mb-5">
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
                <div className="md:col-span-3 h-72 rounded-2xl overflow-hidden">
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
                      <ul className="flex flex-col gap-y-5">
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
                <div className="md:col-span-3 h-72 rounded-2xl overflow-hidden">
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    src="https://luxuryride.in/_next/image?url=%2Fimg%2Fceramic-banner.png&w=1920&q=75"
                    alt="Urban Garage Coating"
                  />
                </div>
                {/* card 2 */}
                <div className="md:col-span-2  flex flex-col gap-y-2 items-start justify-between rounded-2xl   text-theme-500">
                  <div className="flex flex-col  gap-y-5">
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
                <div className="md:col-span-3 h-72 rounded-2xl overflow-hidden">
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    src="https://luxuryride.in/_next/image?url=%2Fimg%2Fdetailing-banner.png&w=1920&q=75"
                    alt="Urban Garage Detailing"
                  />
                </div>
                {/* card 2 */}
                <div className="md:col-span-2  flex flex-col gap-y-2 items-start justify-between rounded-2xl   text-theme-500">
                  <div className="flex flex-col  gap-y-5">
                    <div>
                      <h1 className="h2 text-start text-theme-bold  font-bold tracking-wide text-theme-semibold">
                        Detailing
                      </h1>
                      <p className="p  text-lg text-theme-semibold ">
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
                <div className="md:col-span-3 h-72 rounded-2xl overflow-hidden">
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    src="https://luxuryride.in/_next/image?url=%2Fimg%2Fpeelable-paint-banner.png&w=1920&q=75"
                    alt="Urban Garage Peelable Paint"
                  />
                </div>
                {/* card 2 */}
                <div className="md:col-span-2  flex flex-col gap-y-2 items-start justify-between rounded-2xl   text-theme-500">
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

          <section className="section" id="hero-banner">
            <div className="relative h-screen">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
                {/* Overlay div */}
                <div className="absolute -z-10 h-full w-full bg-black opacity-60 "></div>
                <div className="absolute -z-20 h-full w-full">
                  <img
                    className="h-full w-full object-cover object-left"
                    src="https://api.luxuryride.in/public/cms-page/our_service_centers-1689576363766-569547964-service-centre-desktop-.png"
                    alt=""
                  />
                </div>
                {/* left container  */}

                {/* right container  */}
                <div className=" p-5 opacity-80">
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

          {/* <!-- 
        - #BLOG
      --> */}

          <section className="section blog" id="blog">
            <div className="container">
              <h2 className="h2 section-title text-theme-semibold">
                Customers Reviews
              </h2>

              <ul className="blog-list has-scrollbar">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-78.png&w=1920&q=75"
                          alt="Abertura de novos escritórios da empresa"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link
                        to="#"
                        className="btn card-badge text-theme-semobold"
                      >
                        Balwindar Singh
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title text-theme-500">Audi Q3</h3>
                      <p className="text-theme-400">
                        i had the best Experience with Urban Garadge ,I test
                        Drive their Audi Q3 at the chandighad showroom and on
                        the day of the test drive , i had a cap on intead of my
                        truban.
                      </p>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">14 jan 2022</time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-75.png&w=1920&q=75"
                          alt="Quais carros são mais vulneráveis"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link
                        to="#"
                        className="btn card-badge text-theme-semibold"
                      >
                        Naveen Mishra
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title text-theme-500">
                        <Link to="#">Hyundai Verna</Link>
                      </h3>
                      <p className="text-theme-400">
                        It was amazing experience... The gesture..the quality of
                        work ..the process ..it's all of the excellent
                        quality...thanks @Urban Garadge for the amazing
                        experience 👍👍
                      </p>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">Jan 22, 2022</time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-48.png&w=1920&q=75"
                          alt="As estatísticas mostraram qual idade média"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link to="#" className="btn card-badge">
                        Naveen Mishra
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title text-theme-500">
                        <Link to="#">BMW GT</Link>
                      </h3>
                      <p className="text-theme-400">
                        It was amazing experience... The gesture..the quality of
                        work ..the process ..it's all of the excellent
                        quality...thanks @Urban Garadge for the amazing
                        experience 👍👍
                      </p>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">feb 10, 2022</time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-50.png&w=1920&q=75"
                          alt="O que é necessário ao alugar um carro?"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link to="#" className="btn card-badge">
                        Carros
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        <Link to="#">
                          O que é necessário ao alugar um carro?
                        </Link>
                      </h3>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">Janeiro 14, 2022</time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-26.png&w=1920&q=75"
                          alt="Novas regras para lidar com nossos carros"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link to="#" className="btn card-badge">
                        Empresa
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        <Link to="#">
                          Novas regras para lidar com nossos carros
                        </Link>
                      </h3>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">Janeiro 14, 2022</time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-45.png&w=1920&q=75"
                          alt="Novas regras para lidar com nossos carros"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link to="#" className="btn card-badge">
                        Empresa
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        <Link to="#">
                          Novas regras para lidar com nossos carros
                        </Link>
                      </h3>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">Janeiro 14, 2022</time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-36.png&w=1920&q=75"
                          alt="Novas regras para lidar com nossos carros"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link to="#" className="btn card-badge">
                        Empresa
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        <Link to="#">
                          Novas regras para lidar com nossos carros
                        </Link>
                      </h3>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">Janeiro 14, 2022</time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="https://luxuryride.in/_next/image?url=https%3A%2F%2Fapi.luxuryride.in%2Fpublic%2Ftestimonial%2Fuser_image-mask-group-29.png&w=1920&q=75"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link to="#" className="btn card-badge">
                        Empresa
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        <Link to="#">
                          Novas regras para lidar com nossos carros
                        </Link>
                      </h3>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">Janeiro 14, 2022</time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default CoatingPage;
