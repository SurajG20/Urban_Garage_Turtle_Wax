import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import Testinomial from "../components/Testinomial";
import Image from "../utils/Image";
import { useCarContext } from "../CarContext";
// icons
import { TiTick } from "react-icons/ti";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import BuyForm from "../components/BuyForm";
import { ErrorAlert, LoadingAlert } from "../components/Alerts";
function BuyPage() {
  const { cars, isLoading, isError, error } = useCarContext();

  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      to left, /* This changes the direction */
      rgba(0, 0, 3, 5), 
      rgba(0, 0, 0, 0.0) /* End of the gradient is now fully transparent */
    ),
    url('/assets/banners/car11.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };

  return (
    <div>
      <Navbar />
      <main>
        <article>
          {/* <!-- 
        - #HERO
      --> */}
          <section className="relative text-white">
            <div
              className="abosolute mt-20 md:mt-16 m-1  -z-50 overflow-hidden top-0 md:h-screen flex items-center justify-center rounded-2xl  md:rounded-none"
              style={backgroundImg}
            >
              {/* <div className="absolute -z-10 h-full w-full bg-gradient-to-r from-black to-transparent opacity-60"></div> */}
              <div className="absolute -z-10 bg-black opacity-20 rounded-2xl md:rounded-none h-56vh md:h-screen w-full"></div>
              <div className="container grid md:grid-cols-2 gap-y-10 md:gap-x-52 ">
                <div className="min-w-3xl">
                  <div className="mb-10">
                    <h2 className="h1 text-theme-semibold md:text-start text-center text-white">
                      High Quality, More Comfort
                    </h2>
                  </div>
                  <div className="mt-5">
                    <ul className="ms-10 md:ms-0 text-theme-semibold text-white flex flex-col  gap-y-5">
                      <li className="flex">
                        <TiTick className="text-white text-xl" />
                        <span>Largest Assortment of Pre-Owned Luxury Cars</span>
                      </li>
                      <li className="flex">
                        {" "}
                        <TiTick className="text-white text-xl" />
                        <span>Easy Financing Options</span>
                      </li>
                      <li className="flex">
                        {" "}
                        <TiTick className="text-white text-xl" />
                        <span>Sell Or Upgrade Effortlessly</span>
                      </li>
                      <li className="flex justify-center md:justify-start items-center gap-x-5">
                        {" "}
                        <div className="bg-gray-200 theme-border-white rounded-lg p-3 hover:cursor-pointer">
                          <MdVerifiedUser className="text-4xl text-red-600" />
                        </div>
                        <div className="bg-gray-200 theme-border-white rounded-lg p-3 hover:cursor-pointer">
                          <FaCar className="text-4xl text-red-600" />
                        </div>
                        <div className="bg-gray-200 theme-border-white rounded-lg p-3 hover:cursor-pointer">
                          <TbChecklist className="text-4xl text-red-600" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-black">
                  <BuyForm />
                </div>
              </div>
            </div>
          </section>

          {/* <!-- 
        - #FEATURED CAR
      --> */}
          {isLoading ? (
            <LoadingAlert msg="Loading..." />
          ) : isError ? (
            <ErrorAlert msg={error.message} />
          ) : (
            <section
              className="section featured-car text-white"
              id="featured-car"
            >
              <div className="container">
                <div className="mb-5 md:mb-10">
                  <h2 className="h2 text-theme-semibold text-center section-title m-auto">
                    Take A Glimpse Of Our Collection
                  </h2>
                  <p className="p max-w-3xl m-auto text-center text-theme-500">
                    Explore our curated selection of luxury cars online.
                  </p>
                </div>
                <ul className="featured-car-list">
                  {cars.map((item) => (
                    <li key={item._id}>
                      <CarCard item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
          <hr className="container py-4" />
          {/* <!-- 
        - #GET START
      --> */}

          {/* hero Banner section Start  */}
          <section className="section" id="hero-banner">
            <div className="relative md:h-96">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
                {/* Overlay div */}
                <div className="absolute h-full w-full bg-black opacity-20 z-10"></div>
                <div className="absolute z-0 h-full w-full">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-left"
                    src="/assets/banners/banner11.jpeg"
                    alt="Urban Garage"
                  />
                </div>
                {/* left container  */}
                <div className="hidden  md:flex items-end justify-center">
                  <div className="h-[22rem]">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-left"
                      src="/assets/banners/banner11.jpeg"
                      alt="Uran Garage"
                    />
                  </div>
                </div>
                {/* right container  */}
                <div className="bg-white p-4 md:p-5 opacity-90">
                  <div className="mb-2">
                    <h3 className="text-theme-semibold font-semibold text-xl">
                      Why Choose
                    </h3>
                    <h2 className="text-theme-bold font-bold text-2xl">
                      URBAN GARAGE!
                    </h2>
                  </div>
                  <div className="mb-2">
                    <p className="text-theme-500 text-black">
                      Urban Garage is a one stop destination for the Foremost,
                      Exclusive and Extravagant Pre-Owned luxury cars. We are
                      here to serve efficiently all across the country with our
                      wide array of products and services equipped by our
                      State-of-the-Art showrooms and Workshops to make your
                      journey easy and lucrative.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-y-2 gap-x-5">
                    <div className="">
                      <ul className="text-theme-500 flex flex-col gap-y-2">
                        <li className="flex items-center">
                          <TiTick className="text-red-500 text-xl" />
                          Urban Garage
                        </li>
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> PAN India
                          Delivery
                        </li>
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> In House
                          Service Available
                        </li>
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> 350+ Check
                          Evaluations
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-theme-500 flex flex-col gap-y-2">
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> 15 Day
                          Money Back Guarantee
                        </li>
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> 30 Day or
                          1000 KMs Consumables Warranty
                        </li>
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> 1/2/3 Year
                          Buy Back Facility
                        </li>
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> 100%
                          Certified Cars
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* hero Banner section End  */}
          {/* An Exciting Lineup Of Top Brands In Our Showrooms! Start */}
          <section className="section text-white" id="brand">
            <div className="container">
              <h2 className="h2 mb-5 md:mb-10 section-title text-center text-theme-semibold">
                An Exciting Lineup Of Top Brands In Our Showrooms!
              </h2>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-5 gap-y-10 has-scrollbar">
                <div className="h-16 w-auto m-auto">
                  <Image
                    src="assets/brands/brand1.png"
                    alt="Urban Garage Brand"
                    onError="assets/icons/loading.png"
                  />
                </div>
                <div className="h-16 w-auto m-auto">
                  <Image
                    src="assets/brands/brand12.png"
                    alt="Urban Garage Brand"
                    onError="assets/icons/loading.png"
                  />
                </div>
                <div className="h-16 w-auto m-auto">
                  <Image
                    src="assets/brands/brand3.png"
                    alt="Urban Garage Brand"
                    onError="assets/icons/loading.png"
                  />
                </div>
                <div className="h-16 w-auto m-auto">
                  <Image
                    src="assets/brands/brand7.png"
                    alt="Urban Garage Brand"
                    onError="assets/icons/loading.png"
                  />
                </div>
                <div className="h-16 w-auto m-auto">
                  <Image
                    src="assets/brands/brand5.png"
                    alt="Urban Garage Brand"
                    onError="assets/icons/loading.png"
                  />
                </div>
                <div className="h-16  w-auto m-auto">
                  <Image
                    src="assets/brands/brand6.png"
                    alt="Urban Garage Brand"
                    onError="assets/icons/loading.png"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* An Exciting Lineup Of Top Brands In Our Showrooms! End */}
          {/* services  */}
          <section className="section  mt-20 md:mt-16  get-start text-white">
            <div className="container">
              <div className="mb-5 md:mb-10">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Team Urban Garage Is Dedicated To Delivering Excellence
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  Our team of highly skilled technicians is specially trained to
                  provide your car with personalized care and luxurious
                  services.
                </p>
              </div>
              <ul className="get-start-list grid grid-cols-1 md:grid-cols-4">
                {/* Buy  */}
                <li>
                  <Link to={"/buy"}>
                    <div
                      className="relative flex items-end rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden theme-border-white"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1559167628-4be72e2c264f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                      }}
                    >
                      {/* Gradient Overlay for the Lower Part with Blue Shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

                      {/* Content */}
                      <div className="group z-10 relative p-4">
                        <h3 className="text-white text-2xl text-theme-bold font-bold">
                          Buy
                        </h3>
                        <p className="hidden text-sm group-hover:block opacity-0 group-hover:opacity-100 mt-2 translate-y-2 group-hover:-translate-y-1 transition-all duration-1000 ease-in-out">
                          Choose from an hand selected premium collection of
                          Pre-Owned Luxuary Cars
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>

                {/* Sell  */}
                <li>
                  <Link to={"/sell"}>
                    <div
                      className="relative flex items-end theme-border-white rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                      style={{
                        backgroundImage:
                          "url('https://wallpapers.com/images/high/car-pictures-nd7l8nd4skb9wuah.webp')",
                      }}
                    >
                      {/* Gradient Overlay for the Lower Part with Red Shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-60"></div>

                      {/* Content */}
                      <div className="group z-10 relative p-4">
                        <h3 className="text-white text-2xl text-theme-bold font-bold">
                          Sell
                        </h3>
                        <p className="hidden text-sm group-hover:block opacity-0 group-hover:opacity-100 mt-2 translate-y-2 group-hover:-translate-y-1 transition-all duration-1000 ease-in-out">
                          Now, Sell Your Car on Your Fingertips in 59 minutes.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>

                {/* Service */}
                <li>
                  <Link to={"/service"}>
                    <div
                      className="relative flex items-end theme-border-white rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                      style={{
                        backgroundImage:
                          "url('https://wallpapers.com/images/high/car-repair-2560-x-1709-wallpaper-636vaflv6nxnjh7x.webp')",
                      }}
                    >
                      {/* Gradient Overlay for the Lower Part with Blue Shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-60"></div>

                      {/* Content */}
                      <div className="group z-10 relative p-4">
                        <h3 className="text-white text-2xl text-theme-bold font-bold">
                          Service
                        </h3>
                        <p className="hidden text-sm group-hover:block opacity-0 group-hover:opacity-100 mt-2 translate-y-2 group-hover:-translate-y-1 transition-all duration-1000 ease-in-out">
                          Now, Sell Your Car on Your Fingertips in 59 minutes.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>

                {/* Car care  */}
                <li>
                  <Link to={"coating"}>
                    <div
                      className="relative flex items-end theme-border-white rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                      style={{
                        backgroundImage:
                          "url('https://www.5kcarcare.com/branch-assets/assets/img/about.jpg')",
                      }}
                    >
                      {/* Gradient Overlay for the Lower Part with Blue Shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-60"></div>

                      {/* Content */}
                      <div className="group z-10 relative p-4">
                        <h3 className="text-white text-2xl text-theme-bold font-bold">
                          Car Care
                        </h3>
                        <p className="hidden text-sm group-hover:block opacity-0 group-hover:opacity-100 mt-2 translate-y-2 group-hover:-translate-y-1 transition-all duration-1000 ease-in-out">
                          Experience the ultimate in car protection or just give
                          your car a spa day.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>

                {/* PPF  */}
                <li>
                  <Link to={"/ppf"}>
                    <div
                      className="relative flex items-end theme-border-white theme-border-white rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                      style={{
                        backgroundImage:
                          "url('https://m.media-amazon.com/images/I/51gnPqGh0oL._SL500_.jpg')",
                      }}
                    >
                      {/* Gradient Overlay for the Lower Part with Blue Shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-90"></div>

                      {/* Content */}
                      <div className="group z-10 relative p-4">
                        <h3 className="text-white text-2xl text-theme-bold font-bold">
                          PPF
                        </h3>
                        <p className="hidden text-sm group-hover:block opacity-0 group-hover:opacity-100 mt-2 translate-y-2 group-hover:-translate-y-1 transition-all duration-1000 ease-in-out">
                          Explore our range and discover products that redefine
                          excellence.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>

                {/* turtle wax produdcts  */}
                <li>
                  <Link to={"/turtle-wax-products"}>
                    <div
                      className="relative flex items-end theme-border-white theme-border-white rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                      style={{
                        backgroundImage:
                          "url('https://www.turtlewax.com/cdn/shop/files/PDP2000x2000_300dpi_600x600.jpg?v=1707815615')",
                      }}
                    >
                      {/* Gradient Overlay for the Lower Part with Blue Shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-60"></div>

                      {/* Content */}
                      <div className="group z-10 relative p-4">
                        <h3 className="text-white text-2xl text-theme-bold font-bold">
                          Turtle wax products
                        </h3>
                        <p className="hidden text-sm group-hover:block opacity-0 group-hover:opacity-100 mt-2 translate-y-2 group-hover:-translate-y-1 transition-all duration-1000 ease-in-out">
                          At Turtle Wax, we’re a dedicated team of auto
                          enthusiasts that live and breathe Turtle Wax® & auto
                          culture.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>

                {/* Recent work */}
                <li>
                  <Link to={"/recent-work"}>
                    <div
                      className="relative flex items-end theme-border-white rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                      style={{
                        backgroundImage:
                          "url('/assets/garage/garage-four.jpeg')",
                      }}
                    >
                      {/* Gradient Overlay for the Lower Part with Blue Shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-80"></div>

                      <div className="group z-10 relative p-4">
                        <h3 className="text-white text-2xl text-theme-bold font-bold">
                          Turtle wax products
                        </h3>
                        <p className="hidden text-sm group-hover:block opacity-0 group-hover:opacity-100 mt-2 translate-y-2 group-hover:-translate-y-1 transition-all duration-1000 ease-in-out">
                          At Turtle Wax, we’re a dedicated team of auto
                          enthusiasts that live and breathe Turtle Wax® & auto
                          culture.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>

                {/* About us  */}
                <li>
                  <Link to={"/about-us"}>
                    <div
                      className="relative flex items-end theme-border-white rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                      style={{
                        backgroundImage:
                          "url('/assets/garage/garage-one.jpeg')",
                      }}
                    >
                      {/* Gradient Overlay for the Lower Part with Blue Shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-80"></div>

                      {/* Content */}
                      <div className="group z-10 relative p-4">
                        <h3 className="text-white text-2xl text-theme-bold font-bold">
                          About Us
                        </h3>
                        <p className="hidden text-sm group-hover:block opacity-0 group-hover:opacity-100 mt-2 translate-y-2 group-hover:-translate-y-1 transition-all duration-1000 ease-in-out">
                          Urban Garage Ride is the ultimate destination you have
                          been seeking, offering a mesmerizing range of
                          pre-owned luxury cars coupled with exceptional car
                          service.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          {/* sell banner start */}
          <section className="section get-start">
            <div className="container ">
              <div className="h-80 flex flex-col gap-y-2 items-center justify-center rounded-2xl theme-border-white text-white bg-[url(https://api.luxuryride.in/public/cms-page/selling_your_car-1689576424628-941539955-sell-your-car-desktop.png);] text-theme-500">
                <h1 className="md:text-4xl h3 font-semibold text-theme-bold tracking-wide text-nowrap">
                  Sell Your Car At Highest Price In{" "}
                </h1>
                <p className="h1 font-extrabold text-theme-bold">59 Minutes</p>
                <div className="flex flex-col md:flex-row gap-x-5">
                  <p className="flex items-center gap-3 text-theme-500">
                    <FaBlenderPhone className="text-xl" />
                    Instant Call Back
                  </p>
                  <p className="flex items-center gap-3 text-theme-500">
                    <FaCar className="text-xl" />
                    Doorstep Evalution
                  </p>
                  <p className="flex items-center gap-3 text-theme-500">
                    <FaMoneyCheckAlt className="text-xl" />
                    Instants Payment
                  </p>
                </div>
                <div>
                  <Link to={"/sell"}>
                    <button className="bg-white hover:bg-gray-300 text-gray-700 px-8 text-theme-semibold py-2 rounded-lg ">
                      Sell Your Car
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* sell banner end  */}
          {/* service location banners */}
          <section className="section get-start text-white">
            <div className="container">
              <div className="mb-5 md:mb-10">
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

                <div
                  style={{
                    backgroundImage: "url('/assets/garage/garage-two.jpeg')",
                  }}
                  className="relative h-80 md:h-96  theme-border-white hover:shadow-sm hover:shadow-white p-4 border border-black flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
                  <div className="relative z-10">
                    <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap uppercase">
                      Service Packages
                    </h1>
                    <p className="p font-extrabold text-theme-500">
                      We strive to build long lasting relationships with our
                      clients and that is why we provide you with every kinds
                      after-sales service with our comprehensive service
                      packages.
                    </p>

                    <div className="flex gap-x-3 mt-5">
                      <Link to={"/service"}>
                        <button className="theme-border-white hover:bg-white text-white hover:text-gray-900 px-8 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                          Know more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* card 2 */}

                <div
                  style={{
                    backgroundImage: "url('/assets/garage/garage-four.jpeg')",
                  }}
                  className="relative h-80 md:h-96  theme-border-white hover:shadow-sm hover:shadow-white border border-black p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
                  <div className="relative z-10">
                    <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap uppercase">
                      RECENT WORK
                    </h1>
                    <p className="p font-extrabold text-theme-500">
                      Recently visited a new location? Discover the latest
                      additions to our service network and explore our
                      state-of-the-art facilities, now available even beyond the
                      original network's boundaries.
                    </p>

                    <div className="flex gap-x-3 mt-5">
                      <Link to={"/recent-work"}>
                        <button className="theme-border-white hover:bg-white text-white hover:text-gray-900 px-8 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                          Know more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* OUR SERVICES */}

          {/* form  */}
          <section>
            <div className="container">
              <div className="mb-5 md:mb-10">
                <h2 className="h2 section-title flex flex-col md:flex-row items-center justify-center text-center text-theme-semibold text-white">
                  Buy Your Luxury Car From{" "}
                  <span className="text-theme-red mx-2">URBAN GARAGE</span>
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500 text-white">
                  Experience a seamless purchasing process and unbeatable market
                  prices with our experts.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-x-2">
                <div className="hidden relative md:block min-h-min">
                  <img
                    className="h-full w-full object-cover object-center rounded-2xl theme-border-white"
                    src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt={`Urban Garage`}
                  />
                  <div className="absolute left-12 bottom-20 bg-theme-red rounded-3xl">
                    <h2 className="text-theme-bold text-2xl text-white uppercase px-8 py-2">
                      {" "}
                      Urban garage
                    </h2>
                  </div>
                  <div className="absolute left-12 bottom-5 bg-theme-red rounded-3xl">
                    <h2 className="text-theme-bold text-2xl text-white uppercase px-8 py-2">
                      {" "}
                      BUY CAR WITH ZERO HIDDEN charges !
                    </h2>
                  </div>
                </div>

                <div>
                  <BuyForm />
                </div>
              </div>
            </div>
          </section>

          {/* <!-- 
        - #BLOG
      --> */}
          <section className="section">
            <Testinomial />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default BuyPage;
