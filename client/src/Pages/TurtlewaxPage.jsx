import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import Testinomial from "../components/Testinomial";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import Image from "../utils/Image";
import data from "../server.json";
// icons
import { TiTick } from "react-icons/ti";
import { IoIosStar } from "react-icons/io";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import ProductCard from "../components/ProductCard";

function TurtleWaxPage() {
  const [cars, setCars] = useState([]);
  const [carIndex, setCarIndex] = useState(0);
  const carImg = [
    "https://www.turtlewax.com/cdn/shop/files/car_57740be5-a1de-45fe-9308-aead52156bbe_1920x720.png?v=1670861356",
    "https://www.turtlewax.com/cdn/shop/files/car-hover-glass_95263926-d75b-41ee-91b7-647493cfede3_1920x720.png?v=1670861544",
    "https://www.turtlewax.com/cdn/shop/files/car-hover-interior_29612dd7-9baa-487e-bd4a-2022749c0226_1920x720.png?v=1670861421",
    "https://www.turtlewax.com/cdn/shop/files/car-hover-headlights_c6ba5b66-c626-4d26-b121-f3cdabe88909_1920x720.png?v=1670861445",
    "https://www.turtlewax.com/cdn/shop/files/car-hover-tires_a1359a9a-c078-47d6-ae86-8cec772fb4ed_1920x720.png?v=1670861487",
    "https://www.turtlewax.com/cdn/shop/files/car-hover-paint_178a04b5-c588-4e25-8877-4d039127185e_1920x720.png?v=1670861464",
  ];

  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      to top, 
      rgba(0, 0, 0, 0.8), 
      rgba(0, 0, 0, 0)
    ),
    url('https://www.turtlewax.com/cdn/shop/files/d3c2c916-2fb9-4206-af93-b1f11d1b33c7_1500x.progressive.jpg?v=1707902215')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };

  useEffect(() => {
    setCars(data.products);
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
          {/* featured Products  */}

          <section className="">
            <div
              className="abosolute mt-20 md:mt-16 m-1  -z-50 overflow-hidden top-0 h-[65vh] md:h-screen flex items-center justify-start rounded-2xl  md:rounded-none"
              style={backgroundImg}
            >
              <div className="absolute -z-10 bg-black opacity-20 rounded-2xl md:rounded-none h-56vh md:h-screen w-full"></div>
              <div className="container ml-auto px-10 py-5">
                {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
                <div className="max-w-xl flex flex-col gap-y-5">
                  <div>
                    <h1 className="md:text-6xl h1 text-center md:text-start text-white leading-[5rem] font-bold tracking-wide text-theme-extrabold ">
                      BUY ONE GET ONE ON SELECTED PRODUCTS <br />
                      <span className="text-green-900 font-extrabold text-6xl">
                        SAVE NOW
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WHAT ARE YOU WORKING ON TODAY? */}
          <section className="section text-white" id="">
            <div className="container">
              <p className="h2 text-start text-theme-bold text-green-900">
                PRODUCT FINDER
              </p>
              <h2 className="h1 mb-5 md:mb-10 text-start section-title text-theme-semibold">
                WHAT ARE YOU WORKING ON TODAY?
              </h2>

              <div className=" flex justify-end">
                <div className="relative md:h-96 w-full md:w-[50rem]">
                  <img
                    className="h-full w-full object-cover object-center"
                    src={carImg[carIndex]}
                    alt="Urban Garage Turtlewax"
                  />
                  <div className="absolute top-0 h-full w-full grid grid-cols-3 gap-5 p-20">
                    <div
                      onMouseEnter={() => setCarIndex(0)}
                      onMouseLeave={() => setCarIndex(0)}
                      className="hover:cursor-pointer rounded-2xl"
                    >
                      {""}
                    </div>
                    <div
                      onMouseEnter={() => setCarIndex(1)}
                      onMouseLeave={() => setCarIndex(0)}
                      className="hover:cursor-pointer rounded-2xl"
                    >
                      {""}
                    </div>
                    <div
                      onMouseEnter={() => setCarIndex(2)}
                      onMouseLeave={() => setCarIndex(0)}
                      className="hover:cursor-pointer rounded-2xl"
                    >
                      {""}
                    </div>
                    <div
                      onMouseEnter={() => setCarIndex(3)}
                      onMouseLeave={() => setCarIndex(0)}
                      className="hover:cursor-pointer rounded-2xl"
                    >
                      {""}
                    </div>
                    <div
                      onMouseEnter={() => setCarIndex(4)}
                      onMouseLeave={() => setCarIndex(0)}
                      className="hover:cursor-pointer rounded-2xl"
                    >
                      {""}
                    </div>
                    <div
                      onMouseEnter={() => setCarIndex(5)}
                      onMouseLeave={() => setCarIndex(0)}
                      className="hover:cursor-pointer rounded-2xl"
                    >
                      {""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- 
        - #FEATURED Products
      --> */}

          <section
            className="section featured-car text-white"
            id="featured-car"
          >
            <div className="container">
              <div className="title-wrapper">
                <h2 className="h2 mb-5 md:mb-10 text-theme-semibold section-title m-auto flex items-center flex-wrap justify-center">
                  TRENDING &nbsp;
                  <span className="font-bold text-green-900 hover:underline">
                    TURTLEWAX{" "}
                  </span>{" "}
                  &nbsp; PRODUCTS
                </h2>
                {/* 
                <Link to="#" className="featured-car-link">
                  <span>Veja mais</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link> */}
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {cars &&
                  cars.map((item) => (
                    <li className="w-100" key={item._id}>
                      <ProductCard item={item} />
                    </li>
                  ))}
              </ul>
            </div>
          </section>

          {/*  NEW PRODUCTS*/}
          <section className="section text-white " id="">
            <div className="container">
              <h2 className="h2 mb-5 md:mb-10 section-title text-center text-theme-semibold">
                NEW PRODUCTS
              </h2>

              <div className="flex flex-col md:grid md:grid-cols-3 gap-x-5 gap-y-10">
                {/* card 1 */}
                <div className="relative h-72 md:h-96 rounded-2xl theme-border-white overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 "></div>
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110"
                    src="https://turtlewax.in/cdn/shop/files/Exterior_Home_page_600x600.png?v=1701961116"
                    alt="Urban Garadge Turtlewax"
                  />
                  <div className="absolute top-0 h-full w-full flex justify-center items-end">
                    <div className="font-bold text-white text-4xl text-theme-bold">
                      EXTERIOR
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="relative  h-72 md:h-96 rounded-2xl theme-border-white overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-2xl"></div>
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://turtlewax.in/cdn/shop/files/Interior_HOme_page_600x600.png?v=1701961075"
                    alt="Urban Garadge Turtlewax"
                  />
                  <div className="absolute top-0 h-full w-full flex justify-center items-end">
                    <div className="font-bold text-white text-4xl text-theme-bold">
                      INTERIOR
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className="relative  h-72 md:h-96 rounded-2xl theme-border-white overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-2xl"></div>
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://turtlewax.in/cdn/shop/files/Hs_Group_shot_600x600.png?v=1701960680"
                    alt="Urban Garadge Turtlewax"
                  />
                  <div className="absolute top-0 h-full w-full flex justify-center items-end">
                    <div className="font-bold text-white text-4xl text-theme-bold">
                      HYBRID SOLUTIONS
                    </div>
                  </div>
                </div>
                {/* card 4 */}
                <div className="col-span-3 relative  h-80  md:h-96  rounded-2xl theme-border-white gap-y1- overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-2xl"></div>
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://turtlewax.in/cdn/shop/files/turtle-wax-worldwide_1200x400.jpg?v=1693805101"
                    alt="Urban Garadge Turtlewax"
                  />
                  <div className="absolute top-0 h-full w-full flex justify-start p-4 items-end">
                    <div className="max-w-2xl font-bold text-white  text-theme-bold">
                      <h1 className="h1 text-green-900">
                        TURTLE WAX WORLDWIDE
                      </h1>
                      <h3 className="h2 underline">
                        SEE THE LATEST FROM THE TURTLE WAX COMMUNITY
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Want to Know Morw Abt  Turtlewax*/}
          <section className="section text-white" id="">
            <div className="">
              {/* card 1 */}
              <div className="col-span-3 relative  h-80  md:h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 "></div>
                <img
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                  src="https://turtlewax.in/cdn/shop/files/footer-background_1200x400.png?v=1693806894"
                  alt="Urban Garadge Turtlewax"
                />
                <div className="absolute top-0 h-full w-full flex items-center justify-center p-4 ">
                  <div className="max-w-2xl  font-bold text-white  text-theme-bold">
                    <h1 className="mb-5 h1 text-white">
                      WANT MORE TURTLE WAX ?
                    </h1>
                    <p className="p mb-5 text-center text-theme-500 tracking-wide underline">
                      Sign up for Turtle Wax India's newsletter and be the first
                      to know about new product launches, car care tips, and
                      exciting giveaways.
                    </p>
                    <div className="flex justify-center">
                      <Link
                        target="_blank"
                        to="https://turtlewax.in/"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white text-gray-800 px-8 py-3 tracking-wider">
                          Visit TurtleWax Products
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Explore Our Service Centres */}
          <section className="section get-start text-white">
            <div className="container">
              <div className="mb-5 md:mb-10">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Explore Our Service Centres
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  Schedule your maintenances, repairs and other services easily
                  with a Urban Garage Service Centres near you.
                </p>
              </div>

              <div className="md:flex justify-center gap-x-5 gap-y-5">
                {/* card 1 */}

                <div className=" flex flex-col gap-y-8">
                  {/* New wrapper for positioning */}
                  <div className="relative z-0 w-full md:w-96 theme-border-white rounded-2xl">
                    {/* img-container */}
                    <div className="h-64 overflow-hidden rounded-2xl">
                      <img
                        className="h-full w-full object-cover object-center"
                        src="assets/garage/garage-two.jpeg"
                        alt="Urban Garage"
                        loading="lazy"
                      />
                    </div>
                    {/* Absolute container moved here, outside the overflow-hidden container */}
                    <div className="absolute z-20 bottom-0 -mb-5 w-full flex justify-around">
                      <div className="bg-gray-200 text-black  px-5 text-center theme-border-white rounded-md">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 text-sm">
                          Sq. Ft. Area
                        </div>
                      </div>

                      <div className="bg-gray-200 text-black  px-5 text-center theme-border-white rounded-md">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 font-semibold text-sm">
                          Sq. Ft. Area
                        </div>
                      </div>

                      <div className="bg-gray-200 text-black  px-5 text-center theme-border-white rounded-md">
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

                <div className="flex flex-col gap-y-8 bordder">
                  {/* New wrapper for positioning */}
                  <div className="relative z-0 w-full md:w-96 rounded-2xl theme-border-white">
                    {/* img-container */}
                    <div className="h-64 overflow-hidden rounded-2xl">
                      <Image
                        src="assets/garage/garage4.jpeg"
                        alt="Urban Garage"
                        onError="assets/garage/garage-two.jpeg"
                      />
                    </div>
                    {/* Absolute container moved here, outside the overflow-hidden container */}
                    <div className="absolute z-20 bottom-0 -mb-5 w-full flex justify-around">
                      <div className="bg-gray-200 text-black  px-5 text-center rounded-md theme-border-white">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 text-sm">
                          Sq. Ft. Area
                        </div>
                      </div>
                      <div className="bg-gray-200 text-black  px-5 text-center rounded-md theme-border-white">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 font-semibold text-sm">
                          Sq. Ft. Area
                        </div>
                      </div>
                      <div className="bg-gray-200 text-black  px-5 text-center rounded-md theme-border-white">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 text-sm">
                          Sq. Ft. Area
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-5 ">
                    <div className="">
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
              </div>
            </div>
          </section>

          {/* service location banners */}
          <section className="section get-start text-white">
            <div className="container">
              {/* <div className="mb-5">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Our Experience Centres
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  Test drive, learn about services and more at your nearest
                  showroom.
                </p>
              </div> */}

              <div className="grid md:grid-cols-2 gap-x-5 gap-y-5">
                {/* card 1 */}

                <div className="relative h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('https://luxuryride.in/img/get-your-car.png')]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
                  <div className="relative z-10">
                    <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                      Service Packages
                    </h1>
                    <p className="p font-extrabold text-theme-500">
                      We strive to build long lasting relationships with our
                      clients and that is why we provide you with every kinds
                      after-sales service with our comprehensive service
                      packages.
                    </p>

                    <div className="flex gap-x-3 mt-5">
                      <button className="outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                        Know more
                      </button>
                    </div>
                  </div>
                </div>

                {/* card 2 */}

                <div className="relative h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('https://luxuryride.in/img/Extended-Warranty.png')]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
                  <div className="relative z-10">
                    <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                      Extended Warranty
                    </h1>
                    <p className="p font-extrabold text-theme-500">
                      Looking to extend your warranty coverage? Up to 8 years
                      additional warranty coverage is available even after
                      original coverage expiry.
                    </p>

                    <div className="flex gap-x-3 mt-5">
                      <button className="outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                        Know more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Save BIG With Urban Garage */}
          <section className="section text-white ">
            <div className="container">
              <div className="mb-5 md:mb-10">
                <h2 className="h2 text-center section-title text-theme-semibold">
                  Save BIG With Urban Garage
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                {/* card 1 */}
                <div className="border border-gray-400 rounded-xl overflow-hidden">
                  <div className="h-48">
                    <Image
                      src="https://luxuryride.in/img/Free-Pick-drop.png"
                      alt="Urban Garage"
                      onError="assets/loading.jpeg"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <h3 className="h3 text-theme-bold text-red-600">
                      Free Pickup & Drop
                    </h3>
                    <p className="text-theme-500">
                      We provide free of cost pickup and drop service of your
                      car from your doorstep to serve you with a comfortable and
                      reliable experience.
                    </p>
                  </div>
                </div>
                {/* card 2 */}
                <div className="border border-gray-400 rounded-xl overflow-hidden">
                  <div className="h-48">
                    <Image
                      src="https://luxuryride.in/img/oem-parts.png"
                      alt="Urban Garage Genuine OEM parts"
                      onError="assets/loading.jpeg"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <h3 className="h3 text-theme-bold text-red-600">
                      Genuine OEM parts
                    </h3>
                    <p className="text-theme-500">
                      We use genuine parts while serving your car to provide you
                      with a best quality and reliable experience.
                    </p>
                  </div>
                </div>
                {/* card 3 */}
                <div className="border border-gray-400 rounded-xl overflow-hidden">
                  <div className="h-48">
                    <Image
                      src="https://luxuryride.in/img/30-days-warranty.png"
                      alt="Urban Garage Service Works"
                      onError="assets/loading.jpeg"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <h3 className="h3 text-theme-bold text-red-600">
                      30 Day Warranty
                    </h3>
                    <p className="text-theme-500">
                      Our 30 days consumables warranty covers all your car parts
                      against any defects or faults.
                    </p>
                  </div>
                </div>
                {/* card 4 */}
                <div className="border border-gray-400 rounded-xl overflow-hidden">
                  <div className="h-48">
                    <Image
                      src="https://luxuryride.in/img/transparent-billing.png"
                      alt="Urban Garage Service Works"
                      onError="assets/loading.jpeg"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <h3 className="h3 text-theme-bold text-red-600">
                      Transparent billing
                    </h3>
                    <p className="text-theme-500">
                      We provide free of cost pickup and drop service of your
                      car from your doorstep to serve you with a comfortable and
                      reliable experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* How Urban Garage Works?  */}
          <section className="section " id="">
            <div className="container ">
              <div className="h-full grid grid-cols-1 items-center justify-center md:grid-cols-2 rounded-2xl overflow-hidden theme-border-white">
                {/* left container  */}
                <div className="md:flex items-end justify-center">
                  <div className="md:h-96 w-full">
                    <Image
                      src="https://luxuryride.in/img/service-works.png"
                      alt="Urban Garage"
                      onError="assets/loading.jpeg"
                    />
                  </div>
                </div>
                {/* right container  */}
                <div className="bg-gray-200 p-5 opacity-80 flex flex-col gap-5">
                  <div className="mb-2">
                    <h2 className="h1 text-theme-bold font-bold text-2xl text-black">
                      How Urban Garage Works?
                    </h2>
                  </div>
                  {/* card 1 */}
                  <div className="text-theme-500 flex flex-col gap-y-2">
                    <div className="text-theme-500">
                      <div className="flex items-center gap-2">
                        <span>
                          <TiTick className="text-red-500 text-xl" />
                        </span>
                        <span className="text-lg font-bold">
                          Select the perfect car service
                        </span>
                      </div>

                      <p className="ml-7 text-black">
                        Get quality service and repairs at affordable prices.
                      </p>
                    </div>
                  </div>
                  {/* card 2 */}
                  <div className="text-theme-500 flex flex-col gap-y-2">
                    <div className="text-theme-500">
                      <div className="flex items-center gap-2">
                        <span>
                          <TiTick className="text-red-500 text-xl" />
                        </span>
                        <span className="text-lg font-bold">
                          Schedule Free Doorstep Pick-up
                        </span>
                      </div>

                      <p className="ml-7 text-black">
                        We provide no cost pick and drop facility to our service
                        centres.
                      </p>
                    </div>
                  </div>
                  {/* card 3 */}
                  <div className="text-theme-500 flex flex-col gap-y-2">
                    <div className="text-theme-500">
                      <div className="flex items-center gap-2">
                        <span>
                          <TiTick className="text-red-500 text-xl" />
                        </span>
                        <span className="text-lg font-bold">
                          Track Your Car Service Real-Time
                        </span>
                      </div>

                      <p className="ml-7 text-black">
                        Get real time updates on WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* why choose us Banner section End  */}
          {/* An Exciting Lineup Of Top Brands In Our Showrooms! Start */}
          <section className="section get-start text-white">
            <div className="container ">
              <div className="mb-5 md:mb-10">
                <h2 className="h2 section-title text-center text-theme-semibold">
                  Original Parts Partner
                </h2>
                <p className=" max-w-3xl m-auto text-center text-theme-500">
                  We source only 100% genuine and authentic spare parts from
                  reputed vendors and suppliers ensuring what goes into your car
                  is nothing but the best.
                </p>
              </div>

              <div className=" grid grid-cols-2 sm:grid-cols-3 gap-5 md:grid-cols-6 ">
                {/* card 1 */}
                <div className=" md:h-28 md:w-36 m-auto bg-gray-100 theme-border-white rounded-xl">
                  <img
                    loading="lazy"
                    className=" h-full w-full object-cover object-center"
                    src="https://turtlewax.in/cdn/shop/files/TW_Icon_Wordmark_RGB.png?v=1696332285"
                    alt="Urban Garage Partner "
                  />
                </div>
                {/* card 2 */}
                <div className="md:h-28 md:w-36 m-auto bg-gray-100 theme-border-white rounded-xl">
                  <img
                    loading="lazy"
                    className=" h-full w-full object-cover object-center"
                    src="https://luxuryride.in/img/spare-parts1.png"
                    alt="Urban Garage Partner "
                  />
                </div>
                {/* card 3 */}
                <div className="md:h-28 md:w-36 m-auto bg-gray-100 theme-border-white rounded-xl">
                  <img
                    loaging="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://luxuryride.in/img/spare-parts2.png"
                    alt="Urban Garage Partner"
                  />
                </div>
                {/* card 4 */}
                <div className="md:h-28 md:w-36 m-auto bg-gray-100 theme-border-white rounded-xl">
                  <img
                    loaging="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://luxuryride.in/img/spare-parts3.png"
                    alt="Urban Garage Partner"
                  />
                </div>
                {/* card 5 */}
                <div className="md:h-28 md:w-36 m-auto bg-gray-100 theme-border-white rounded-xl">
                  <img
                    loaging="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://luxuryride.in/img/spare-parts4.png"
                    alt="Urban Garage Partner"
                  />
                </div>
                {/* card 6*/}
                <div className="md:h-28 md:w-36 m-auto bg-gray-100 theme-border-white rounded-xl">
                  <img
                    loaging="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://luxuryride.in/img/spare-parts5.png"
                    alt="Urban Garage Partner"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* sell banner start */}
          <section className="section get-start">
            <div className="container">
              <div className=" md:h-80 p-4 flex flex-col gap-y-2 items-center justify-center rounded-2xl text-white bg-[url(https://luxuryride.in/img/incredible-bg.png);] text-theme-500 theme-border-white">
                <h1 className="text-5xl font-semibold text-theme-bold tracking-wide text-nowrap">
                  Stats Don’t Lie!
                </h1>
                <p className="p text-center md:text-start font-bold tracking-wider text-theme-bold">
                  Impressive Customer Statistics That Showcase Our Success
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-x-12 bg-white bg-opacity-50 shadow-lg p-6 rounded-lg theme-border-white">
                  {/* card 1 */}
                  <div className="flex flex-col items-center text-theme-500 gap-3 text-theme-500 ">
                    <span className="h1 font-semibold text-theme-500">
                      50,000+
                    </span>
                    <span className="Car Serviced">Instant Call Back</span>
                  </div>
                  {/* card 2  */}
                  <div className="flex flex-col items-center text-theme-500 gap-3 text-theme-500">
                    <span className="h1 text-theme-500 text-theme-500">
                      10,000+
                    </span>
                    <span className="">Happy Customers</span>
                  </div>
                  {/* card 3 */}
                  <div className="flex flex-col items-center text-theme-500 gap-3 text-theme-500">
                    <span className="h1 flex items-center text-theme-500">
                      4.7{" "}
                      <span>
                        <IoIosStar className="text-yellow-500 text-xl" />
                      </span>
                    </span>
                    <span className="Car Serviced ">Average Rating</span>
                  </div>
                  {/* card 4 */}
                  <div className="flex flex-col items-center text-theme-500 gap-3 text-theme-500">
                    <span className="h1 text-theme-500">9+</span>
                    <span className="Car Serviced">Brands Serviced</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* sell banner end  */}
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
                    alt="Urban Garage Service Centers"
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
          {/* testinomials  */}
          <Testinomial />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default TurtleWaxPage;
