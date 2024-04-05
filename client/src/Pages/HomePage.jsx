import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Herohome from "../components/Herohome";
import CarCard from "../components/CarCard";
import Testinomial from "../components/Testinomial";
import Banner from "../components/Banner";
import data from "../server.json";
import { Link } from "react-router-dom";
import Image from "../utils/Image";
// icons
import { TiTick } from "react-icons/ti";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";

function Home() {
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
          <Herohome />
          {/* <!-- 
        - #FEATURED CAR
      --> */}
          <section className="section featured-car" id="featured-car">
            <div className="container">
              <div className="title-wrapper">
                <h2 className="h2 text-theme-semibold section-title m-auto">
                  Take A Glimpse Of Our Collection
                </h2>
                {/* 
                <Link to="#" className="featured-car-link">
                  <span>Veja mais</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link> */}
              </div>

              <ul className="featured-car-list">
                {cars &&
                  cars.map((item) => (
                    <li key={item._id}>
                      <CarCard item={item} />
                    </li>
                  ))}
              </ul>
            </div>
          </section>
          {/* <!-- 
        - #GET START
      --> */}
          {/* why choose us Banner section Start  */}
          <section className="section" id="hero-banner">
            <div className="relative md:h-96">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
                {/* Overlay div */}
                <div className="absolute h-full w-full bg-black opacity-50 -z-10"></div>
                <div className="absolute -z-20 h-full w-full">
                  <img
                    className="h-full w-full object-cover object-left"
                    src="https://www.motoroids.com/wp-content/uploads/2020/09/auto-terrence-web-banner-home.jpg"
                    alt=""
                  />
                </div>
                {/* left container  */}
                <div className="hidden md:flex items-end justify-center">
                  <div className="h-[22rem]">
                    <img
                      className="h-full w-full object-cover object-left"
                      src="https://luxuryride.in/_next/image?url=%2Fimg%2FManmohan-banner.png&w=3840&q=75"
                      alt=""
                    />
                  </div>
                </div>
                {/* right container  */}
                <div className="bg-white p-4 md:p-5 opacity-80">
                  <div className="mb-2">
                    <h3 className="text-theme-semibold font-semibold text-xl">
                      Why Choose
                    </h3>
                    <h2 className="text-theme-bold font-bold text-2xl">
                      URBAN GARAGE!
                    </h2>
                  </div>
                  <div className="mb-2">
                    <p className="text-theme-500">
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

          {/* An Exciting Lineup Of Top Brands In Our Showrooms! Start */}
          <section className="section " id="brand">
            <div className="container">
              <h2 className="h2 section-title text-center text-theme-semibold">
                An Exciting Lineup Of Top Brands In Our Showrooms!
              </h2>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-5 gap-y-10 has-scrollbar">
                <div className="h-16 w-16 m-auto">
                  <Image
                    src="assets/brands/brand1.png"
                    alt="Urban Garage Brand"
                    onError="assets/icons/loading.png"
                  />
                </div>
                <div className="h-16 w-auto m-auto">
                  <Image
                    src="assets/brands/brand2.png"
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
                    src="assets/brands/brand4.png"
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

          {/* Team Urban Garage Is Dedicated To Delivering Excellence */}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-3xl text-theme-bold font-bold">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-3xl text-theme-bold font-bold">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-theme-bold text-3xl font-bold">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-3xl text-theme-bold font-bold">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-90"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-theme-bold text-3xl font-bold">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-theme-bold text-3xl font-bold">
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
                      backgroundImage: "url('assets/garage/garage4.jpeg')",
                    }}
                  >
                    {/* Gradient Overlay for the Lower Part with Blue Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-white text-theme-bold text-3xl font-bold">
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
                      backgroundImage: "url('assets/garage/garage1.jpeg')",
                    }}
                  >
                    {/* Gradient Overlay for the Lower Part with Blue Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-60"></div>

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

          {/* banner  */}
          <section className="section get-start">
            <div className="container">
              <div className="h-96 md:h-80 flex flex-col gap-y-2 items-center justify-center rounded-2xl text-white bg-[url(https://api.luxuryride.in/public/cms-page/selling_your_car-1689576424628-941539955-sell-your-car-desktop.png);] text-theme-500">
                <h1 className="text-2xl md:text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                  Sell Your Car At Highest Price In{" "}
                </h1>
                <p className="h1 font-extrabold text-theme-bold">59 Minutes</p>
                <div className="flex flex-col md:flex-row gap-x-5">
                  <p className="flex  items-center gap-3 text-theme-500">
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
                  <div className="relative z-10">
                    <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap mb-3">
                      CHANDIGARH
                    </h1>
                    <p className="p font-extrabold text-theme-500 mb-2">
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
                  <div className="relative z-10">
                    <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap mb-3">
                      Karnal
                    </h1>
                    <p className="p font-extrabold text-theme-500 mb-2">
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

          {/* OUR SERVICES Banner*/}
          <section className="section" id="hero-banner">
            <div className="relative h-screen">
              {/* Overlay div with gradient from black to transparent */}
              <div className="absolute -z-10 h-full w-full bg-gradient-to-r from-black to-transparent opacity-60"></div>
              <div className="h-full grid grid-cols-1 md:grid-cols-2">
                <div className="absolute -z-20 h-full w-full">
                  <img
                    className="h-full w-full object-cover object-left"
                    src="https://api.luxuryride.in/public/cms-page/our_service_centers-1689576363766-569547964-service-centre-desktop-.png"
                    alt=""
                  />
                </div>
                {/* Left container remains unchanged */}

                {/* Right container */}
                <div className="opacity-80 p-4 md:p-10">
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

          <section className="section">
            <Banner />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
