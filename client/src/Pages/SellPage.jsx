import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/Herohome";
import CarCard from "../components/CarCard";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import data from "../server.json";
import { Link } from "react-router-dom";
import Dropdown from "../utils/Dropdown";
import { IoCall } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import Image from "../utils/Image";
// icons
import { TiTick } from "react-icons/ti";

function SellPage() {
  const [cars, setCars] = useState([]);

  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ),
    url('assets/cars/car16.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    <div className="relative">
      <Navbar />
      <main>
        <article>
          {/* <!-- 
        - #HERO
      --> */}

          <section className="">
            <div
              className="abosolute -z-50  overflow-hidden top-0 h-screen flex items-center justify-center rounded-2xl  md:rounded-none"
              style={backgroundImg}
            >
              <div className="absolute -z-10 bg-black opacity-20 rounded-2xl md:rounded-none h-56vh md:h-screen w-full"></div>
              <div className="max-w-6xl m-auto px-10 py-5">
                {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
                <div className="flex flex-col gap-y-5">
                  <div>
                    <h1 className="md:h1 h2 text-center text-white font-bold tracking-wide text-theme-semibold">
                      Sell Your Car At Highest Price in 59 Minutes
                    </h1>
                  </div>

                  <div className="hidden md:block">
                    <div className="bg-white rounded-2xl">
                      <form
                        action=""
                        class="w-full relative grid grid-cols-4 gap-4"
                      >
                        <div class="flex justify-center">
                          <Dropdown title={"Car, model or brand"} />
                        </div>

                        <div class="flex justify-center">
                          <Dropdown title={"Max monthly payment"} />
                        </div>

                        <div class="flex justify-center">
                          <Dropdown title={"Make the Year"} />
                        </div>

                        <div class="flex justify-center">
                          <Dropdown title={"KMs Driven"} />
                        </div>
                      </form>
                    </div>
                    <div className="m-auto max-w-2xl grid grid-cols-5 gap-5 justify-center text-white mt-5">
                      <div className="flex  gap-x-2 items-center">
                        <span>
                          <IoCall className="text-2xl" />
                        </span>
                        <span className="h3 whitespace-nowrap text-theme-500 ">
                          Instant Call Back
                        </span>
                      </div>
                      <div></div>

                      <div className="flex  gap-x-2 items-center">
                        <span>
                          <FaCar className="text-2xl" />
                        </span>
                        <span className="h3 whitespace-nowrap text-theme-500">
                          Doorstep Evaluation
                        </span>
                      </div>
                      <div></div>

                      <div className="flex gap-x-2 items-center">
                        <span>
                          <MdOutlinePayments className="text-2xl" />
                        </span>
                        <span className="h3 whitespace-nowrap text-theme-500">
                          {" "}
                          Instant Payment
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-start items-center mt-5">
                      <div className="hidden  max-w-4xl m-auto md:grid grid-cols-4 md:grid-cols-8 gap-y-2 gap-x-3 mt-5">
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand1.png"
                            alt="Urban Gradge BMW"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand2.png"
                            alt="Urban Gradge Mercedes"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand3.png"
                            alt="Urban Gradge Chevrolet"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand4.png"
                            alt="Urban Gradge Ferrari"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand5.png"
                            alt="Urban Gradge Ford"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand6.png"
                            alt="Urban Gradge Porsche"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand7.png"
                            alt="Urban Gradge Toyota"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand8.png"
                            alt="Urban Gradge Volkswagen"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Selling Your Car Made Easy */}
          <section className="section get-start">
            <div className="container">
              <div className=" grid md:grid-cols-2 gap-5">
                {/* left container  */}
                <div className="relative h-80 rounded-2xl ">
                  <div className="absolute z-50 bottom-[-35px] right-10 bg-white rounded-2xl px-10 py-5">
                    <ul className="text-theme-500">
                      <li>Recommended by</li>
                      <li className="text-theme-semibold text-green-600 text-xl">
                        5000+ Customers
                      </li>
                      <li>Across India!</li>
                    </ul>
                  </div>
                  <Image
                    src="https://luxuryride.in/img/selling-car-made-simple.png"
                    alt="Urban Garage"
                    onError="assets/loading.jpeg"
                  />
                </div>
                {/* right container  */}
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <h2 className="h2 text-theme-semibold">
                      Selling Your Car Made Easy
                    </h2>
                  </div>
                  <div>
                    <p className="text-theme-500 text-md">
                      Book your car inspection from our trained evaluators at
                      your doorstep & convenience. Get the most lucrative price
                      in market and experience a completely safe and quick
                      payment process to make your selling journey easy with
                      Luxury Ride.
                    </p>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-y-2">
                      <li className="flex items-center gap-x-2">
                        <span>
                          <TiTick />
                        </span>
                        <span>
                          Fill In Your Car Details & Get An Instant Call Back
                        </span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span>
                          <TiTick />
                        </span>
                        <span>Free Doorstep Evaluation</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span>
                          <TiTick />
                        </span>
                        <span>Instant Payment</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span>
                          <TiTick />
                        </span>
                        <span>Complete Peace of Mind</span>
                      </li>
                    </ul>
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
                    src="https://luxuryride.in/img/bookcar-mobile.png"
                    alt=""
                  />
                </div>
                {/* left container  */}

                {/* right container  */}
                <div className="p-6 opacity-80">
                  <div className="mb-2">
                    {/* <h3 className="text-theme-semibold font-semibold text-xl">
                      Why Choose
                    </h3> */}
                    <h2 className="h1 text-white text-theme-bold font-bold text-2xl">
                      Book Your Car Inspection At Your Doorstep
                    </h2>
                  </div>
                  <div className="mb-2">
                    <p className="text-theme-500 text-white text-lg">
                      Urban Garadge is not owned but experienced and we let you
                      experience it from the comfort of your home. Or just
                      simply visit our experience centre near you.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-5 mb-10">
                    <div>
                      <ul className="text-theme-500 text-xl  flex flex-col gap-y-5">
                        <li className="flex text-white items-center text-theme-500">
                          <TiTick className="text-white text-xl" />
                          <span>Safety assurance</span>
                        </li>
                        <li className="flex text-white items-center text-theme-500">
                          {" "}
                          <TiTick className="text-white text-xl" />
                          <span>Schedule FREE evaluation</span>
                        </li>
                        <li className="flex text-white  items-center text-theme-500">
                          {" "}
                          <TiTick className="text-white text-xl" />
                          <span>Get the highest quote upon inspection</span>
                        </li>
                        <li className="flex text-white  items-center text-theme-500">
                          {" "}
                          <TiTick className="text-white text-xl" />
                          <span>Ensure complete peace of mind</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <button className="outline hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                      Book Appointment Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Sell To Luxury Ride?  */}
          <section className="section get-start">
            <div className="container">
              <div className="mb-5">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Why Sell To Luxury Ride?
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  Sell your luxury car to luxury car experts for hassle free
                  process and best market price.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-x-5 gap-y-5">
                {/* card 1 */}

                <div className="h-72 p-10 flex flex-col border gap-y-3 items-center justify-center rounded-2xl ">
                  <div className="bg-slate-200 p-5 rounded-full">
                    <img
                      src="	https://luxuryride.in/img/sell-direct-us.svg"
                      alt="Urban Garadge"
                    />
                  </div>
                  <h1 className="text-lg text-center font-semibold text-theme-bold tracking-wide text-nowrap">
                    Sell Directly To Us
                  </h1>
                  <p className="p font-extrabold text-center text-theme-500">
                    No listing required, we will buy your car
                  </p>
                </div>

                {/* card 2 */}

                <div className="h-72 p-10 flex flex-col border gap-y-3 items-center justify-center rounded-2xl ">
                  <div className="bg-slate-200 p-5 rounded-full">
                    <img
                      src="https://luxuryride.in/img/no-hidden-fee.svg"
                      alt="Urban Garadge"
                    />
                  </div>
                  <h1 className="text-lg text-center font-semibold text-theme-bold tracking-wide text-nowrap">
                    No Hidden Fee
                  </h1>
                  <p className="p font-extrabold text-center text-theme-500">
                    You get the full price we promise you without any deductions
                    or fees
                  </p>
                </div>

                {/* card 3 */}
                <div className="h-72 p-10 flex flex-col border gap-y-3 items-center justify-center rounded-2xl ">
                  <div className="bg-slate-200 p-5 rounded-full">
                    <img
                      src="https://luxuryride.in/img/quick-and-transparent-process.svg"
                      alt="Urban Garadge"
                    />
                  </div>
                  <h1 className="text-lg text-center font-semibold text-theme-bold tracking-wide text-nowrap">
                    Quick & Hassle-Free Process
                  </h1>
                  <p className="p font-extrabold text-center text-theme-500">
                    Get a detailed evaluation report for your car based on our
                    inspection
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* service location banners */}
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

                <div className="relative h-96 p-10 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('assets/garadge/garadge2.jpeg')]">
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

                <div className="relative h-96 p-10 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('assets/garadge/garadge4.jpeg')]">
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

          {/* Faqs  banner end  */}
          <section className="section get-start">
            <div className="container">
              <div className="mb-5">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Frequently Asked Questions On Sell
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  Have questions? We’re here to help.
                </p>
              </div>

              <div className="">
                <div class="relative mb-3">
                  <h6 class="mb-0">
                    <button
                      class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                      data-collapse-target="collapse-1"
                    >
                      <span>What is Material Tailwind?</span>
                      <i class="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
                      <i class="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
                    </button>
                  </h6>
                  <div
                    data-collapse="collapse-1"
                    class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
                      We're not always in the position that we want to be at.
                      We're constantly growing. We're constantly making
                      mistakes. We're constantly trying to express ourselves and
                      actualize our dreams.
                    </div>
                  </div>
                </div>
                <div class="relative mb-3">
                  <h6 class="mb-0">
                    <button
                      class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                      data-collapse-target="collapse-2"
                    >
                      <span>How to use Material Tailwind?</span>
                      <i class="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
                      <i class="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
                    </button>
                  </h6>
                  <div
                    data-collapse="collapse-2"
                    class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
                      We're not always in the position that we want to be at.
                      We're constantly growing. We're constantly making
                      mistakes. We're constantly trying to express ourselves and
                      actualize our dreams.
                    </div>
                  </div>
                </div>
                <div class="relative mb-3">
                  <h6 class="mb-0">
                    <button
                      class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                      data-collapse-target="collapse-3"
                    >
                      <span>What can I do with Material Tailwind?</span>
                      <i class="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
                      <i class="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
                    </button>
                  </h6>
                  <div
                    data-collapse="collapse-3"
                    class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
                      We're not always in the position that we want to be at.
                      We're constantly growing. We're constantly making
                      mistakes. We're constantly trying to express ourselves and
                      actualize our dreams.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- 
        - #BLOG
      --> */}
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default SellPage;
