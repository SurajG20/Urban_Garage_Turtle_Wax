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

// icons
import { TiTick } from "react-icons/ti";
import HeroSection from "../components/HeroSection";

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
            imgURL={"assets/banners/hero-banner1.jpeg"}
            title={"Find The Best Pocket Friendly Car Service For You!"}
          />
          {/* Life Is Too Short To Spend At A Repair Shop */}
          <section className="section " id="">
            <div className="container">
              <h2 className="h2 section-title text-center text-theme-semibold">
                Life Is Too Short To Spend At A Repair Shop
              </h2>
              <p className="p max-w-3xl m-auto text-center text-theme-500">
                Experience the epitome of automotive excellence as we offer
                comprehensive professional car services, ensuring your wheels
                are primed for all journeys.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 has-scrollbar mt-10">
                {/* card 1 */}
                <div className="h-42 col-span-2 flex flex-col justify-between bg-gradient-to-r from-red-500 to-red-900 rounded-2xl px-4 py-4">
                  <div className="">
                    <h2 className="h3 text-theme-bold text-white">
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
                        src="https://luxuryride.in/img/periodic-maintenance.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="h-42  flex flex-col justify-between  rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <img
                        src="https://luxuryride.in/img/ac-service-and-repair.svg"
                        alt="Urban Garage AC Service & Repair"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">
                      AC Service & Repair
                    </h3>
                  </div>
                </div>

                {/* card 3*/}
                <div className="h-42  flex flex-col justify-between  rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <img
                        src="https://luxuryride.in/img/battery.svg"
                        alt="Urban Garage AC Service & Repair"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">Battery</h3>
                  </div>
                </div>
                {/* card 4*/}
                <div className="h-42  flex flex-col justify-between  rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <img
                        src="https://luxuryride.in/img/denting-and-painting.svg"
                        alt="Urban Garage Denting Painting"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">
                      AC Service & Repair
                    </h3>
                  </div>
                </div>
                {/* card 5*/}
                <div className="h-42  flex flex-col justify-between  rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <img
                        src="https://luxuryride.in/img/windshield-and-glasses.svg"
                        alt="Urban Garage windshield-and-glasses"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">
                      Windshield & Glasses
                    </h3>
                  </div>
                </div>
                {/* card 6*/}
                <div className="h-42  flex flex-col justify-between  rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <img
                        src="https://luxuryride.in/img/suspension-fitments.svg"
                        alt="Urban Garage suspension-fitments"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">
                      Suspension & Fitments
                    </h3>
                  </div>
                </div>
                {/* card 7*/}
                <div className="h-42  flex flex-col justify-between  rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <img
                        src="https://luxuryride.in/img/tyres-and-wheel-care.svg"
                        alt="Urban Garage Tyres & Wheel Care"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">
                      Tyres & Wheel Care
                    </h3>
                  </div>
                </div>
                {/* card 8*/}
                <div className="h-42  flex flex-col justify-between  rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <img
                        src="https://luxuryride.in/img/inspection-checkups.svg"
                        alt="Urban Garage AC Service & Repair"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">
                      AC Service & Repair
                    </h3>
                  </div>
                </div>
                {/* card 9*/}
                <div className="h-42  flex flex-col justify-between  rounded-2xl px-4 py-4">
                  <div className="flex">
                    <div className="bg-gray-200 min-w-min p-2 rounded-md ">
                      <img
                        src="https://luxuryride.in/img/insurance-claims.svg"
                        alt="Urban Garage Insurance Claims"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="h3 text-theme-semibold">Insurance Claims</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Service Packages */}
          <section className="section get-start">
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

                <div className="relative h-96 p-10 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('https://luxuryride.in/img/get-your-car.png')]">
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

                <div className="relative h-96 p-10 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('https://luxuryride.in/img/Extended-Warranty.png')]">
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
          {/* why choose us Banner section End  */}
          {/* An Exciting Lineup Of Top Brands In Our Showrooms! Start */}
          <section className="section brand" id="brand">
            <div className="container">
              <h2 className="h2 section-title text-center text-theme-semibold">
                An Exciting Lineup Of Top Brands In Our Showrooms!
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 has-scrollbar">
                <div className="h-16 w-16 m-auto">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="assets/brands/brand1.png"
                    alt=""
                  />
                </div>
                <div className="h-16 w-auto m-auto">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="assets/brands/brand2.png"
                    alt=""
                  />
                </div>
                <div className="h-16 w-auto m-auto">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="assets/brands/brand3.png"
                    alt=""
                  />
                </div>
                <div className="h-16 w-auto m-auto">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="assets/brands/brand4.png"
                    alt=""
                  />
                </div>
                <div className="h-16 w-auto m-auto">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="assets/brands/brand5.png"
                    alt=""
                  />
                </div>
                <div className="h-16  w-auto m-auto">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="assets/brands/brand6.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          {/* An Exciting Lineup Of Top Brands In Our Showrooms! End */}
          {/* services  */}
          <section className="section get-start">
            <div className="container">
              <div className="mb-5">
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
                  <div
                    className="relative flex items-end rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1559167628-4be72e2c264f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                  >
                    {/* Gradient Overlay for the Lower Part with Blue Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-2xl text-theme-bold font-bold">
                        Buy
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Sell  */}
                <li>
                  <div
                    className="relative flex items-end rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://wallpapers.com/images/high/car-pictures-nd7l8nd4skb9wuah.webp')",
                    }}
                  >
                    {/* Gradient Overlay for the Lower Part with Red Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-2xl text-theme-bold font-bold">
                        Sell
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Service */}
                <li>
                  <div
                    className="relative flex items-end rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://wallpapers.com/images/high/car-repair-2560-x-1709-wallpaper-636vaflv6nxnjh7x.webp')",
                    }}
                  >
                    {/* Gradient Overlay for the Lower Part with Blue Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-theme-bold text-2xl font-bold">
                        Service
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Car care  */}
                <li>
                  <div
                    className="relative flex items-end rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://www.5kcarcare.com/branch-assets/assets/img/about.jpg')",
                    }}
                  >
                    {/* Gradient Overlay for the Lower Part with Blue Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-2xl text-theme-bold font-bold">
                        Car care
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Products  */}
                <li>
                  <div
                    className="relative flex items-end rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://m.media-amazon.com/images/I/51gnPqGh0oL._SL500_.jpg')",
                    }}
                  >
                    {/* Gradient Overlay for the Lower Part with Blue Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-90"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-theme-bold text-2xl font-bold">
                        Products
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>

                {/* turtle wax produdcts  */}
                <li>
                  <div
                    className="relative flex items-end rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://www.turtlewax.com/cdn/shop/files/PDP2000x2000_300dpi_600x600.jpg?v=1707815615')",
                    }}
                  >
                    {/* Gradient Overlay for the Lower Part with Blue Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-theme-bold text-2xl font-bold">
                        Turtle Wax Products
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Recent work */}
                <li>
                  <div
                    className="relative flex items-end rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage: "url('assets/garadge/garadge4.jpeg')",
                    }}
                  >
                    {/* Gradient Overlay for the Lower Part with Blue Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-theme-bold text-2xl font-bold">
                        Recent Work
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>

                {/* About us  */}
                <li>
                  <div
                    className="relative flex items-end rounded-2xl h-60 hover:cursor-pointer bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage: "url('assets/garadge/garadge1.jpeg')",
                    }}
                  >
                    {/* Gradient Overlay for the Lower Part with Blue Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-theme-bold text-2xl font-bold">
                        About Us
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* sell banner start */}
          <section className="section get-start">
            <div className="container">
              <div className=" h-80 flex flex-col gap-y-2 items-center justify-center rounded-2xl text-white bg-[url(https://api.luxuryride.in/public/cms-page/selling_your_car-1689576424628-941539955-sell-your-car-desktop.png);] text-theme-500">
                <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                  Sell Your Car At Highest Price In{" "}
                </h1>
                <p className="h1 font-extrabold text-theme-bold">59 Minutes</p>
                <div className="flex gap-x-5">
                  <p className="flex items-center gap-3 text-theme-500">
                    <FaBlenderPhone className="text-lg" />
                    Instant Call Back
                  </p>
                  <p className="flex items-center gap-3 text-theme-500">
                    <FaCar className="text-lg" />
                    Doorstep Evalution
                  </p>
                  <p className="flex items-center gap-3 text-theme-500">
                    <FaMoneyCheckAlt className="text-lg" />
                    Instants Payment
                  </p>
                </div>
                <div>
                  <button className="bg-white text-gray-700 px-6 text-theme-semibold py-2 rounded-lg ">
                    Sell Your Car
                  </button>
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

export default ServicePage;
