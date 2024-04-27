import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import Testinomial from "../components/Testinomial";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import data from "../server.json";
import { Link } from "react-router-dom";
import Image from "../utils/Image";
// icons
import { TiTick } from "react-icons/ti";
import HeroSection from "../components/HeroSection";
import { IoIosStar } from "react-icons/io";
import garage4 from "../../public/assets/garage/garage-four.jpeg";


function ServicePage() {
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
          <HeroSection
            imgURL={
              "https://i.pinimg.com/474x/8e/e2/cf/8ee2cf74d200737498b14660dd017834.jpg"
            }
            title={"Find The Best Pocket Friendly Car Service For You!"}
          />
          {/* Life Is Too Short To Spend At A Repair Shop */}
          <section className="section text-white" id="">
            <div className="container">
              <h2 className="h2 mb-5 mb:mb-10 section-title text-center text-theme-semibold">
                Life Is Too Short To Spend At A Repair Shop
              </h2>
              <p className="p max-w-3xl m-auto text-center text-theme-500">
                Experience the epitome of automotive excellence as we offer
                comprehensive professional car services, ensuring your wheels
                are primed for all journeys.
              </p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 has-scrollbar">
                {/* card 1 */}
                <div className="h-42 col-span-2 flex flex-col border theme-border-white hover:shadow-sm hover:shadow-white justify-between bg-gradient-to-r from-red-500 to-red-900 rounded-2xl p-4">
                  <div className="">
                    <h2 className="h3  text-theme-bold text-white">
                      Periodic Maintenance
                    </h2>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col justify-end">
                      <h4 className="text-xl text-theme-semibold text-white">
                        Recommended by 10,000+ Customers
                      </h4>
                      <p className="text-sm text-theme-500 text-white">
                        4.9 Average Rating
                      </p>
                    </div>
                    <div>
                      <img
                        loading="lazy"
                        src="https://luxuryride.in/img/periodic-maintenance.svg"
                        alt="Urban Garage Periodic Maintenance"
                      />
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="h-42  flex flex-col justify-between border theme-border-white hover:shadow-sm hover:shadow-white rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <div className="h-[3rem]">
                        <div className="h-[3rem]">
                          <Image
                            src="/assets/icons/icon1.png"
                            alt="Urban Garage AC Service & Repair"
                            onError="assets/icons/loading.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">
                      AC Service & Repair
                    </h3>
                  </div>
                </div>

                {/* card 3*/}
                <div className="h-42  flex flex-col justify-between border theme-border-white hover:shadow-sm hover:shadow-white  rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <div className="h-[3rem]">
                        <Image
                          src="assets/icons/icon2.png"
                          alt="Urban Garage Battery"
                          onError="assets/icons/loading.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">Battery</h3>
                  </div>
                </div>
                {/* card 4*/}
                <div className="h-42  flex flex-col justify-between border theme-border-white hover:shadow-sm hover:shadow-white  rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <div className="h-[3rem]">
                        <Image
                          src="assets/icons/icon3.png"
                          alt="Urban Garage Denting & Painting"
                          onError="assets/icons/loading.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">
                      Denting & Painting
                    </h3>
                  </div>
                </div>
                {/* card 5*/}
                <div className="h-42  flex flex-col justify-between border theme-border-white hover:shadow-sm hover:shadow-white  rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <div className="h-[3rem]">
                        <Image
                          src="assets/icons/icon5.png"
                          alt="Urban Garage Windshield & Glasses"
                          onError="assets/icons/loading.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">
                      Windshield & Glasses
                    </h3>
                  </div>
                </div>
                {/* card 6*/}
                <div className="h-42  flex flex-col justify-center items-start border theme-border-white hover:shadow-sm hover:shadow-white  rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <div className="h-[3rem]">
                        <Image
                          src="assets/icons/icon4.png"
                          alt="Urban Garage Suspension & Fitments"
                          onError="assets/icons/loading.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">
                      Suspension & Fitments
                    </h3>
                  </div>
                </div>
                {/* card 7*/}
                <div className="h-42  flex flex-col justify-between border theme-border-white hover:shadow-sm hover:shadow-white rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <div className="h-[3rem]">
                        <Image
                          src="assets/icons/icon7.png"
                          alt="Urban Garage Tyres & Wheel Care"
                          onError="assets/icons/loading.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">
                      Tyres & Wheel Care
                    </h3>
                  </div>
                </div>
                {/* card 8*/}
                <div className="h-42  flex flex-col justify-between border theme-border-white hover:shadow-sm hover:shadow-white rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <div className="h-[3rem]">
                        <Image
                          src="assets/icons/icon6.png"
                          alt="Urban Garage Inspection & Checkups"
                          onError="assets/icons/loading.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">
                      Inspection & Checkups
                    </h3>
                  </div>
                </div>
                {/* card 9*/}
                <div className="h-42  flex flex-col justify-between border theme-border-white hover:shadow-sm hover:shadow-white rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <div className="h-[3rem]">
                        <Image
                          src="assets/icons/icon9.png"
                          alt="Urban Garage Insurance Claims"
                          onError="assets/icons/loading.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">Insurance Claims</h3>
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
                <p className="p  max-w-3xl m-auto text-center text-theme-500">
                  Schedule your maintenances, repairs and other services easily
                  with a Urban Garage Service Centres near you.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-x-5 gap-y-5">
                {/* card 1 */}

                <div className="relative flex flex-col  gap-y-8 ">
                  {/* New wrapper for positioning */}
                  <div className="relative z-0 w-full md:w-96 rounded-2xl">
                    {/* img-container */}
                    <div className="h-64 border  hover:shadow-sm hover:shadow-white overflow-hidden rounded-2xl theme-border-white">
                      <Image
                        src="assets/garage/garage-two.jpeg"
                        alt="Urban Garage"
                        onError="assets/garage/garage-one.jpeg"
                      />
                    </div>
                    {/* Absolute container moved here, outside the overflow-hidden container */}
                    <div className="absolute z-50 flex justify-around md:gap-5 bottom-0 -mb-5 w-full">
                      <div className="bg-gray-200  px-5 text-center rounded-md theme-border-white">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 text-sm text-gray-900">
                          Sq. Ft. Area
                        </div>
                      </div>
                      <div className="bg-gray-200  px-5 text-center rounded-md theme-border-white">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 font-semibold text-sm text-gray-900">
                          Sq. Ft. Area
                        </div>
                      </div>
                      <div className="bg-gray-200  px-5 text-center rounded-md theme-border-white">
                        <div className="text-theme-500 text-theme-red ">
                          8,000
                        </div>
                        <div className="text-theme-500 text-sm text-gray-900">
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
                  <div className="relative z-0 md:w-96 rounded-2xl">
                    {/* img-container */}
                    <div className="h-64 overflow-hidden rounded-2xl border theme-border-white hover:shadow-sm hover:shadow-white">
                      <Image
                        src="assets/garage/garage-four.jpeg"
                        alt="Urban Garage"
                        onError="assets/garage/garage-one.jpeg"
                      />
                    </div>
                    {/* Absolute container moved here, outside the overflow-hidden container */}
                    <div className="absolute z-50 flex justify-around md:gap-5 bottom-0 -mb-5 w-full">
                      <div className="bg-gray-200  px-5 text-center rounded-md theme-border-white">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 text-sm text-gray-900">
                          Sq. Ft. Area
                        </div>
                      </div>
                      <div className="bg-gray-200  px-5 text-center rounded-md theme-border-white">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 font-semibold text-sm text-gray-900">
                          Sq. Ft. Area
                        </div>
                      </div>
                      <div className="bg-gray-200  px-5 text-center rounded-md theme-border-white">
                        <div className="text-theme-500 text-theme-red">
                          8,000
                        </div>
                        <div className="text-theme-500 text-sm text-gray-900">
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
              </div>
            </div>
          </section>

          {/* service location banners */}
          <section className="section get-start">
            <div className="container ">
              <div className="mb-5">
                <h2 className="h2 section-title text-center text-white text-theme-semibold ">
                  The Best Car Service Near You
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  Test drive, learn about services and more at your nearest
                  showroom.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-x-5 gap-y-5">
                {/* card 1 */}

                <div className="relative h-72 border theme-border-white hover:shadow-sm hover:shadow-white md:h-96 p-4  flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('https://luxuryride.in/img/get-your-car.png')]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
                  <div className="relative z-10">
                    <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                      Ceramic car coating
                    </h1>
                    <p className="p font-extrabold text-theme-500">
                      Ceramic car coating, a covert shield for your vehicle,
                      remains veiled in a nanotechnology mystique. It provides
                      an enigmatic armor against an array of environmental
                      threats, preserving the allure of your car's aesthetics.
                    </p>

                    <div className="flex gap-x-3 mt-5">
                      <Link to={"/coating"}>
                        <button className="theme-border-white hover:bg-white text-white hover:text-gray-900 px-8 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                          Know more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* card 2 */}

                <div className="relative h-96 border theme-border-white hover:shadow-sm hover:shadow-white p-4  flex flex-col gap-y-2 items-start justify-end rounded-2xl bg-cover text-white text-theme-500 bg-[url('https://img.freepik.com/free-photo/auto-service-salon-doign-car-wrapping_23-2149593858.jpg?w=900&t=st=1713888269~exp=1713888869~hmac=8a67ccdb73ef9cb28c446d21f5cba31c74bae651812c2e56eb9d5bfe32e94c62')]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
                  <div className="relative z-10">
                    <h1 className="text-4xl font-semibold text-theme-bold tracking-wide md:text-nowrap">
                      PPF(Paint Protection Film)
                    </h1>
                    <p className="p font-extrabold text-theme-500">
                      Paint Protection Film, often referred to as a clear bra,
                      is a transparent layer that is applied to a vehicle's
                      exterior to shield it from potential damage caused by road
                      debris, UV rays, bird droppings, scratches, and more.
                    </p>

                    <div className="flex gap-x-3 mt-5">
                      <Link to={"/ppf"}>
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

          {/* Save BIG With Urban Garage */}
          <section className="section  text-white">
            <div className="container">
              <h2 className="h2  mb-5 md:mb-10 text-center section-title text-theme-semibold">
                Save BIG With Urban Garage
              </h2>

              <div className="grid sm:grid-cols-2 items-center justify-center md:grid-cols-4 gap-5">
                {/* card 1 */}
                <div className="h-full border theme-border-white hover:shadow-sm hover:shadow-white rounded-xl overflow-hidden">
                  <div className="h-48">
                    <Image
                      src="https://luxuryride.in/img/Free-Pick-drop.png"
                      alt="Urban Garage"
                      onError="assets/loading.jpeg"
                    />
                  </div>
                  <div className="p-4">
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
                <div className="h-full border theme-border-white hover:shadow-sm hover:shadow-white rounded-xl overflow-hidden">
                  <div className="h-48">
                    <Image
                      src="https://luxuryride.in/img/oem-parts.png"
                      alt="Urban Garage Genuine OEM parts"
                      onError="assets/loading.jpeg"
                    />
                  </div>
                  <div className="p-4">
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
                <div className="h-full border theme-border-white hover:shadow-sm hover:shadow-white rounded-xl overflow-hidden">
                  <div className="h-48">
                    <Image
                      src="https://luxuryride.in/img/30-days-warranty.png"
                      alt="Urban Garage Service Works"
                      onError="assets/loading.jpeg"
                    />
                  </div>
                  <div className="p-4">
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
                <div className="h-full border theme-border-white hover:shadow-sm hover:shadow-white rounded-xl overflow-hidden">
                  <div className="h-48">
                    <Image
                      src="https://luxuryride.in/img/transparent-billing.png"
                      alt="Urban Garage Service Works"
                      onError="assets/loading.jpeg"
                    />
                  </div>
                  <div className="p-4">
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
          <section className="section" id="">
            <div className="container ">
              <div className="h-full grid grid-cols-1 md:grid-cols-2  rounded-2xl overflow-hidden theme-border-white">
                {/* left container  */}
                <div className="md:flex items-end justify-center">
                  <div className="md:h-96 w-full">
                    <Image
                      src="assets/banners/banner10.jpg"
                      alt="Urban Garage"
                      onError="assets/loading.jpeg"
                    />
                  </div>
                </div>
                {/* right container  */}
                <div className="bg-gray-200 md:p-5 opacity-80 flex flex-col gap-5">
                  <div className="mb-2">
                    <h2 className="text-theme-bold font-bold text-3xl text-black">
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
                <div className="h-full md:h-28 md:w-36 m-auto bg-gray-100 border theme-border-white hover:shadow-sm hover:shadow-white rounded-xl transition-transform duration-300 transform hover:scale-105">
                  <img
                    loading="lazy"
                    className=" h-full w-full object-cover object-center"
                    src="https://turtlewax.in/cdn/shop/files/TW_Icon_Wordmark_RGB.png?v=1696332285"
                    alt="Urban Garage Partner "
                  />
                </div>
                {/* card 2 */}
                <div className="h-full md:h-28 md:w-36 m-auto bg-gray-100 border theme-border-white hover:shadow-sm hover:shadow-white rounded-xl transition-transform duration-300 transform hover:scale-105">
                  <img
                    loading="lazy"
                    className=" h-full w-full object-cover object-center"
                    src="https://luxuryride.in/img/spare-parts1.png"
                    alt="Urban Garage Partner "
                  />
                </div>
                {/* card 3 */}
                <div className="h-full md:h-28 md:w-36 m-auto bg-gray-100 border theme-border-white hover:shadow-sm hover:shadow-white rounded-xl transition-transform duration-300 transform hover:scale-105">
                  <img
                    loaging="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://luxuryride.in/img/spare-parts2.png"
                    alt="Urban Garage Partner"
                  />
                </div>
                {/* card 4 */}
                <div className="h-full md:h-28 md:w-36 m-auto bg-gray-100 border theme-border-white hover:shadow-sm hover:shadow-white rounded-xl transition-transform duration-300 transform hover:scale-105">
                  <img
                    loaging="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://luxuryride.in/img/spare-parts3.png"
                    alt="Urban Garage Partner"
                  />
                </div>
                {/* card 5 */}
                <div className="h-full md:h-28 md:w-36 m-auto bg-gray-100 border theme-border-white hover:shadow-sm hover:shadow-white rounded-xl transition-transform duration-300 transform hover:scale-105">
                  <img
                    loaging="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://luxuryride.in/img/spare-parts4.png"
                    alt="Urban Garage Partner"
                  />
                </div>
                {/* card 6*/}
                <div className="h-full md:h-28 md:w-36 m-auto bg-gray-100 border theme-border-white hover:shadow-sm hover:shadow-white rounded-xl transition-transform duration-300 transform hover:scale-105">
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
              <div className=" md:h-80 flex flex-col p-4 gap-y-2 items-center justify-center theme-border-white rounded-2xl text-white bg-[url(https://luxuryride.in/img/incredible-bg.png);] text-theme-500">
                <h1 className="text-5xl font-semibold text-theme-bold tracking-wide text-nowrap">
                  Stats Don’t Lie!
                </h1>
                <p className="p font-bold tracking-wider text-theme-bold">
                  Impressive Customer Statistics That Showcase Our Success
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 md:gap-x-12 bg-white bg-opacity-50 border border-gray-200 shadow-lg p-6 rounded-lg">
                  {/* ccard 1 */}
                  <div className="flex flex-col items-center text-theme-500 gap-3 text-theme-500">
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

          {/* testinomials  */}
          <Testinomial />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default ServicePage;
