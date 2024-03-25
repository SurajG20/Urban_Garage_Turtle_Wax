import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import CarCard from "../components/CarCard";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import data from "../server.json";
import { Link } from "react-router-dom";

// icons
import { TiTick } from "react-icons/ti";



function BuyPage() {
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

          <Herosection />

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

          {/* hero Banner section Start  */}

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
                <div className="bg-white p-5 opacity-80">
                  <div className="mb-2">
                    <h3 className="text-theme-semibold font-semibold text-xl">
                      Why Choose
                    </h3>
                    <h2 className="text-theme-bold font-bold text-2xl">
                      URBAN GARADGE!
                    </h2>
                  </div>
                  <div className="mb-2">
                    <p className="text-theme-500">
                      Urban Garadge is a one stop destination for the Foremost,
                      Exclusive and Extravagant Pre-Owned luxury cars. We are
                      here to serve efficiently all across the country with our
                      wide array of products and services equipped by our
                      State-of-the-Art showrooms and Workshops to make your
                      journey easy and lucrative.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-5">
                    <div>
                      <ul className="text-theme-500">
                        <li className="flex items-center">
                          <TiTick className="text-red-500 text-xl" />
                          Urban Garadge
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
                      <ul className="text-theme-500">
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
          <section className="section brand" id="brand">
            <div className="container">
              <h2 className="h2 section-title text-center text-theme-semibold">
                An Exciting Lineup Of Top Brands In Our Showrooms!
              </h2>

              <ul className="brand-list has-scrollbar">
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-cover object-center"
                      src="assets/brands/brand1.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand2.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand3.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand4.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand5.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand6.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand7.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand8.png"
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* An Exciting Lineup Of Top Brands In Our Showrooms! End */}

          {/* services  */}
          <section className="section get-start">
            <div className="container">
              <div className="mb-5">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Team Urban Garadge Is Dedicated To Delivering Excellence
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
                    className="relative flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1559167628-4be72e2c264f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-blue-500 opacity-20"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="h3 text-white font-bold text-theme-bold">
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
                    className="relative flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://wallpapers.com/images/high/car-pictures-nd7l8nd4skb9wuah.webp')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-blue-500 opacity-20"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="h3 text-white font-bold text-theme-bold">
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
                    className="relative flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://wallpapers.com/images/high/car-repair-2560-x-1709-wallpaper-636vaflv6nxnjh7x.webp')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-blue-500 opacity-20"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="h3 text-white font-bold text-theme-bold">
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
                    className="relative flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://www.5kcarcare.com/branch-assets/assets/img/about.jpg')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-blue-500 opacity-20"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="h3 text-white font-bold text-theme-bold">
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
                    className="relative flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://m.media-amazon.com/images/I/51gnPqGh0oL._SL500_.jpg')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-blue-500 opacity-20"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="h3 text-white font-bold text-theme-bold">
                        Products
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="relative flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://www.turtlewax.com/cdn/shop/files/PDP2000x2000_300dpi_600x600.jpg?v=1707815615')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-blue-500 opacity-20"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="h3 text-white font-bold text-theme-bold">
                        Turtle wax Products
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="relative flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1559167628-4be72e2c264f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-blue-500 opacity-20"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="h3 text-white font-bold text-theme-bold">
                        Buy
                      </h3>
                      <p className="hidden text-white mt-2">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="relative flex items-end rounded-2xl h-60 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1559167628-4be72e2c264f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                  >
                    {/* Overlay Element */}
                    <div className="absolute inset-0 bg-blue-500 opacity-20"></div>

                    {/* Content */}
                    <div className="z-10 relative p-4">
                      <h3 className="h3 text-white font-bold text-theme-bold">
                        Buy
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

                <div className="h-96 p-10 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white bg-[url(https://api.luxuryride.in/public/cms-page/selling_your_car-1689576424628-941539955-sell-your-car-desktop.png);] text-theme-500">
                  <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                    CHANDIGARH
                  </h1>
                  <p className="p font-extrabold text-theme-500">
                    Standing at the heart of the Millennium city, our team of
                    seasoned experts offers an array luxury car services and
                    tailored solutions to cater to your every automotive
                    requirement.
                  </p>

                  <div className="flex gap-x-3">
                    <button className="outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                      Book a vist
                    </button>
                    <button className="bg-white text-gray-700 px-6 text-theme-semibold py-2 rounded-lg ">
                      Get a Directions
                    </button>
                  </div>
                </div>

                {/* card 2 */}

                <div className="h-96 p-10 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white bg-[url(https://api.luxuryride.in/public/cms-page/selling_your_car-1689576424628-941539955-sell-your-car-desktop.png);] text-theme-500">
                  <h1 className="text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                    Karnal
                  </h1>
                  <p className="p font-extrabold text-theme-500">
                    Witness the grandeur of India's largest pre-owned car
                    experience centre, where our highly skilled team of experts
                    bring you a wide array of comprehensive car-related
                    services.
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

export default BuyPage;
