import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import data from "../server.json";
import Testinomial from "../components/Testinomial";
import { Link } from "react-router-dom";
import Image from "../utils/Image";

// icons
import { TiTick } from "react-icons/ti";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";

function BuyPage() {
  const [cars, setCars] = useState([]);

  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      to left, /* This changes the direction */
      rgba(0, 0, 3, 5), 
      rgba(0, 0, 0, 0.0) /* End of the gradient is now fully transparent */
    ),
    url('assets/banners/car11.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };

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
    <div>
      <Navbar />
      <main>
        <article>
          {/* <!-- 
        - #HERO
      --> */}

          <section className="relative text-white">
            <div
              className="container abosolute m-1 mt-20 -z-50 overflow-hidden top-0 h-[65vh] flex items-center justify-center rounded-2xl  "
              style={backgroundImg}
            >
              {/* <div className="absolute -z-10 h-full w-full bg-gradient-to-r from-black to-transparent opacity-60"></div> */}
              <div className="absolute -z-10 bg-gradient-to-l from-black to-transparent  opacity-20 rounded-2xl md:rounded-none h-56vh md:h-screen w-full"></div>
              <div className="h-full w-full flex items-center justify-end py-10 px-5">
                <div className="min-w-3xl">
                  <div className="mb-10">
                    <h2 className="h2 text-theme-semibold text-white">
                      High Quality, More Comfort
                    </h2>
                  </div>
                  <div className="mt-5">
                    <ul className="text-theme-semibold text-white flex flex-col gap-y-5">
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
                      <li className="flex justify-start items-center gap-x-5">
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
              </div>
            </div>
          </section>

          {/* <!-- 
        - #FEATURED CAR
      --> */}

          <section
            className="section featured-car text-white"
            id="featured-car"
          >
            <div className="container">
              <div className="title-wrapper">
                <h2 className="h2 mb-5 text-theme-semibold section-title m-auto">
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

          {/* hero Banner section Start  */}

          <section className="section" id="hero-banner">
            <div className="relative md:h-96">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
                {/* Overlay div */}
                <div className="absolute h-full w-full bg-black opacity-50 -z-10"></div>
                <div className="absolute -z-20 h-full w-full">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-left"
                    src="https://www.motoroids.com/wp-content/uploads/2020/09/auto-terrence-web-banner-home.jpg"
                    alt="Urban Garage Service Centers"
                  />
                </div>
                {/* left container  */}
                <div className="hidden md:flex items-end justify-center">
                  <div className="h-[22rem]">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-left"
                      src="https://luxuryride.in/_next/image?url=%2Fimg%2FManmohan-banner.png&w=3840&q=75"
                      alt="Urban Garage Service Centers"
                    />
                  </div>
                </div>
                {/* right container  */}
                <div className="bg-white p-5 opacity-80">
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
                  <div className="grid md:grid-cols-2  gap-5">
                    <div>
                      <ul className="text-theme-500 flex flex-col gap-y-2">
                        <li className="flex gap-2 items-state">
                          <TiTick className="text-red-600 text-xl" />
                          Urban Garage
                        </li>
                        <li className="flex gap-2  items-state">
                          {" "}
                          <TiTick className="text-red-600 text-xl" /> PAN India
                          Delivery
                        </li>
                        <li className="flex gap-2  items-state">
                          {" "}
                          <TiTick className="text-red-600 text-xl" /> In House
                          Service Available
                        </li>
                        <li className="flex gap-2 items-state">
                          {" "}
                          <TiTick className="text-red-600 text-xl" /> 350+ Check
                          Evaluations
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex flex-col gap-y-2 text-theme-500">
                        <li className="flex gap-2  items-center">
                          {" "}
                          <TiTick className="text-red-600 text-xl" /> 15 Day
                          Money Back Guarantee
                        </li>
                        <li className="flex gap-2 items-state">
                          {" "}
                          <TiTick className="text-red-600 text-xl" /> 30 Day or
                          1000 KMs Consumables Warranty
                        </li>
                        <li className="flex gap-2  items-state">
                          {" "}
                          <TiTick className="text-red-600 text-xl" /> 1/2/3 Year
                          Buy Back Facility
                        </li>
                        <li className="flex gap-2  items-state">
                          {" "}
                          <TiTick className="text-red-600 text-xl" /> 100%
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
          <section className="section get-start text-white">
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
                  <div
                    className="relative theme-border-white flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1559167628-4be72e2c264f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-3xl text-white font-bold text-theme-boldtext-white  text-theme-bold">
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
                    className="relative theme-border-white flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://wallpapers.com/images/high/car-pictures-nd7l8nd4skb9wuah.webp')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-3xl text-white font-bold text-theme-bold">
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
                    className="relative theme-border-white flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://wallpapers.com/images/high/car-repair-2560-x-1709-wallpaper-636vaflv6nxnjh7x.webp')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-3xl text-white font-bold text-theme-bold">
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
                    className="relative theme-border-white theme-border-white flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://www.5kcarcare.com/branch-assets/assets/img/about.jpg')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-3xl text-white font-bold text-theme-bold">
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
                    className="relative theme-border-white flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://m.media-amazon.com/images/I/51gnPqGh0oL._SL500_.jpg')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-3xl text-white font-bold text-theme-bold">
                        Products
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Turtle wax Products */}
                <li>
                  <div
                    className="relative theme-border-white flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://www.turtlewax.com/cdn/shop/files/PDP2000x2000_300dpi_600x600.jpg?v=1707815615')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-3xl text-white font-bold text-theme-bold">
                        Turtle wax Products
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
                    className="relative theme-border-white flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage: "url('assets/garage/garage-four.jpeg')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-3xl text-white font-bold text-theme-bold">
                        Recent work
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>

                {/* About Us */}
                <li>
                  <div
                    className="relative theme-border-white flex items-end rounded-3xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage: "url('assets/garage/garage-one.jpeg')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                    {/* content */}
                    <div className="z-10 relative p-4">
                      <h3 className="text-3xl text-white font-bold text-theme-bold">
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
            <div className="container ">
              <div className="h-80 flex flex-col gap-y-2 items-center justify-center rounded-2xl theme-border-white text-white bg-[url(https://api.luxuryride.in/public/cms-page/selling_your_car-1689576424628-941539955-sell-your-car-desktop.png);] text-theme-500">
                <h1 className="md:text-4xl h3 font-semibold text-theme-bold tracking-wide text-nowrap">
                  Sell Your Car At Highest Price In{" "}
                </h1>
                <p className="h1 font-extrabold text-theme-bold">59 Minutes</p>
                <div className="flex flex-col md:flex-row gap-x-5">
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
                    backgroundImage:
                      "url('public/assets/garage/garage-two.jpeg')",
                  }}
                  className="relative h-80 md:h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500"
                >
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
                      <button className="theme-border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                        Know more
                      </button>
                    </div>
                  </div>
                </div>

                {/* card 2 */}

                <div
                  style={{
                    backgroundImage:
                      "url('public/assets/garage/garage-four.jpeg')",
                  }}
                  className="relative h-80 md:h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500"
                >
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
                      <button className="theme-border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                        Know more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="hero-banner">
            <div className="relative md:h-[85vh]">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
                {/* Overlay div */}
                <div className="absolute -z-10 h-full w-full bg-black opacity-60 "></div>
                <div className="absolute -z-20 h-full w-full">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-left"
                    src="https://api.luxuryride.in/public/cms-page/our_service_centers-1689576363766-569547964-service-centre-desktop-.png"
                    alt="Urban Garage Service Centers"
                  />
                </div>
                {/* left container  */}

                {/* right container  */}
                <div className=" p-5 opacity-80">
                  <div className="mb-5 md:mb-10">
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
