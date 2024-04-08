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
import { FaHeadset } from "react-icons/fa6";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

function SellPage() {
  const [cars, setCars] = useState([]);
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      to top, 
      rgba(0, 0, 0, 0.8), 
      rgba(0, 0, 0, 0)
    ),
    url('assets/banners/car16.jpeg')`,
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
              className="abosolute mt-20 m-1 -z-50  overflow-hidden top-0 md:h-screen h-[65vh] flex items-center justify-center rounded-2xl  md:rounded-none"
              style={backgroundImg}
            >
              <div className="absolute -z-10 bg-black opacity-20 rounded-2xl md:rounded-none h-56vh md:h-screen w-full"></div>
              <div className="max-w-6xl m-auto px-10 py-5">
                {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
                <div className="flex flex-col gap-y-5">
                  <div>
                    <h1 className="h1 text-center text-white font-bold tracking-wide text-theme-semibold">
                      Sell Your Car At Highest Price in{" "}
                      <span className="font-extrabold text-5xl md:text-8xl">
                        59 Minutes
                      </span>
                    </h1>
                  </div>

                  <div className="hidden md:block">
                    {/* <div className="bg-white rounded-2xl">
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
                    </div> */}
                    <div className="flex justify-start items-center mt-5">
                      <div className="hidden  max-w-4xl m-auto md:grid grid-cols-4 md:grid-cols-8 gap-y-2 gap-x-3 mt-5">
                        <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand1.png"
                            alt="Urban Gradge BMW"
                          />
                        </div>
                        <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand2.png"
                            alt="Urban Gradge Mercedes"
                          />
                        </div>
                        <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand3.png"
                            alt="Urban Gradge Chevrolet"
                          />
                        </div>
                        <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand4.png"
                            alt="Urban Gradge Ferrari"
                          />
                        </div>
                        <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand5.png"
                            alt="Urban Gradge Ford"
                          />
                        </div>
                        <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand6.png"
                            alt="Urban Gradge Porsche"
                          />
                        </div>
                        <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand7.png"
                            alt="Urban Gradge Toyota"
                          />
                        </div>
                        <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand8.png"
                            alt="Urban Gradge Volkswagen"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex justify-start items-center mt-5">
                      <div className="hidden  max-w-4xl m-auto md:grid grid-cols-4 md:grid-cols-8 gap-y-2 gap-x-3 mt-5">
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand1.png"
                            alt="Urban Gradge BMW"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand2.png"
                            alt="Urban Gradge Mercedes"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand3.png"
                            alt="Urban Gradge Chevrolet"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand4.png"
                            alt="Urban Gradge Ferrari"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand5.png"
                            alt="Urban Gradge Ford"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand6.png"
                            alt="Urban Gradge Porsche"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand7.png"
                            alt="Urban Gradge Toyota"
                          />
                        </div>
                        <div className="h-16 bg-black opacity-40 p-2 rounded-2xl theme-border-white hover:cursor-pointer">
                          <img
                            loading="lazy"
                            className="h-full w-full object-contain object-center"
                            src="assets/brands/brand8.png"
                            alt="Urban Gradge Volkswagen"
                          />
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Selling Your Car Made Easy */}
          <section className="section get-start text-white">
            <div className="container">
              <div className=" grid md:grid-cols-2 gap-5">
                {/* left container  */}
                <div className="relative h-80 rounded-2xl flex justify-center items-center">
                  <div className="absolute z-50 bottom-[-35px] theme-border-white flex justify-center bg-white rounded-md px-10 py-2">
                    <div className="text-theme-500 max-w-min">
                      <p className="text-black text-center whitespace-nowrap">
                        Recommended by
                      </p>
                      <p className="text-theme-semibold text-green-600 text-xl whitespace-nowrap">
                        5000+ Customers
                      </p>
                      <p className="text-black text-center">Across India!</p>
                    </div>
                  </div>
                  <Image
                    loading="lazy"
                    src="https://luxuryride.in/img/selling-car-made-simple.png"
                    alt="Urban Garage"
                    onError={(e) => (e.target.src = "assets/loading.jpeg")} // Updated for React
                  />
                </div>

                {/* right container  */}
                <div className="flex flex-col justify-between gapy-3 ">
                  <div>
                    <h2 className="h2 mb-5 text-theme-semibold">
                      Selling Your Car Made Easy
                    </h2>
                  </div>
                  <div className="mb-3">
                    <p className="text-theme-500 text-md">
                      Book your car inspection from our trained evaluators at
                      your doorstep & convenience. Get the most lucrative price
                      in market and experience a completely safe and quick
                      payment process to make your selling journey easy with
                      Urban Garage.
                    </p>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-y-2">
                      <li className="flex items-center gap-x-2">
                        <span>
                          <TiTick className="text-red-600" />
                        </span>
                        <span className="text-white">
                          Fill In Your Car Details & Get An Instant Call Back
                        </span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span>
                          <TiTick className="text-red-600" />
                        </span>
                        <span className="text-white">
                          Free Doorstep Evaluation
                        </span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span>
                          <TiTick className="text-red-600" />
                        </span>
                        <span className="text-white">Instant Payment</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span>
                          <TiTick className="text-red-600" />
                        </span>
                        <span className="text-white">
                          Complete Peace of Mind
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section text-white" id="hero-banner">
            <div className="relative h-screen">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
                {/* Overlay div */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
                <div className="absolute -z-20 h-full w-full">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-left"
                    src="https://luxuryride.in/img/bookcar-mobile.png"
                    alt="Urban Garage"
                  />
                </div>
                {/* left container  */}

                {/* right container  */}
                <div className="p-4 opacity-80">
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
                  <div className="grid md:grid-cols-2 gap-x-5 mb-10">
                    <div>
                      <ul className="text-theme-500 text-xl  flex flex-col gap-y-5">
                        <li className="flex gap-2 text-white items-center text-theme-500">
                          <TiTick className="text-red-600 text-xl" />
                          <span>Safety assurance</span>
                        </li>
                        <li className="flex gap-2 text-white items-center text-theme-500">
                          {" "}
                          <TiTick className="text-red-600 text-xl" />
                          <span>Schedule FREE evaluation</span>
                        </li>
                        <li className="flex gap-2 text-white  items-center text-theme-500">
                          {" "}
                          <TiTick className="text-red-600 text-xl" />
                          <span>Get the highest quote upon inspection</span>
                        </li>
                        <li className="flex gap-2 text-white  items-center text-theme-500">
                          {" "}
                          <TiTick className="text-red-600 text-xl" />
                          <span>Ensure complete peace of mind</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <button className="theme-border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                      Book Appointment Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Sell To Urban Garage?  */}
          <section className="section get-start text-white">
            <div className="container">
              <div className="mb-5 md:mb-10">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Why Sell To Urban Garage?
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  Sell your luxury car to luxury car experts for hassle free
                  process and best market price.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-x-5 gap-y-5">
                {/* card 1 */}

                <div className="md:h-72 p-10 flex flex-col theme-border-white gap-y-3 items-center justify-center rounded-2xl ">
                  <div className="bg-slate-200 p-5 rounded-full">
                    <img
                      className="h-full w-full object-contain object-center"
                      loading="lazy"
                      src="	https://luxuryride.in/img/sell-direct-us.svg"
                      alt="Urban Garadge"
                    />
                  </div>
                  <h1 className="h3 text-center font-semibold text-theme-bold tracking-wide text-nowrap">
                    Sell Directly To Us
                  </h1>
                  <p className="p font-extrabold text-center text-theme-500">
                    No listing required, we will buy your car
                  </p>
                </div>

                {/* card 2 */}

                <div className="md:h-72 p-10 flex flex-col theme-border-white gap-y-3 items-center justify-center rounded-2xl ">
                  <div className="bg-slate-200 p-5 rounded-full">
                    <img
                      className="h-full w-full object-contain object-center"
                      loading="lazy"
                      src="https://luxuryride.in/img/no-hidden-fee.svg"
                      alt="Urban Garadge"
                    />
                  </div>
                  <h1 className="h3 text-center font-semibold text-theme-bold tracking-wide text-nowrap">
                    No Hidden Fee
                  </h1>
                  <p className="p font-extrabold text-center text-theme-500">
                    You get the full price we promise you without any deductions
                    or fees
                  </p>
                </div>

                {/* card 3 */}
                <div className="md:h-72 p-10 flex flex-col theme-border-white gap-y-3 items-center justify-center rounded-2xl ">
                  <div className="bg-slate-200 p-5 rounded-full">
                    <img
                      className="h-full w-full object-contain object-center"
                      loading="lazy"
                      src="https://luxuryride.in/img/quick-and-transparent-process.svg"
                      alt="Urban Garadge"
                    />
                  </div>
                  <h1 className="h3 text-center font-semibold text-theme-bold tracking-wide text-nowrap">
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

                <div className="relative h-72 md:h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('public/assets/garage/garage-two.jpeg')]">
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

                <div className="relative h-72 md:h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500 bg-[url('assets/garage/garage-four.jpeg')]">
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

          {/* Faqs  banner end  */}
          <section className="section get-start text-white">
            <div className="container">
              <div className="mb-5 md:mb-10">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Frequently Asked Questions On Sell
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  Have questions? We’re here to help.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Accordion
                  className="theme-border-white  p-3 rounded-xl"
                  open={open === 1}
                >
                  <AccordionHeader
                    className="relative"
                    onClick={() => handleOpen(1)}
                  >
                    <p className="text-start  text-theme-semibold">
                      How Long Does It Take To Sell My Car?
                    </p>
                    <p className=" absolute right-0">
                      {open === 1 ? <FaCircleMinus /> : <FaCirclePlus />}
                    </p>
                  </AccordionHeader>
                  <AccordionBody className="text-theme-500">
                    Typically, the process of selling a car with Urban Garage
                    can be as quick as less than an hour. After the free
                    inspection you will get your quote under 59 minutes and if
                    you finalise it, we will close the deal and the car will be
                    picked up immediately and the amount will be transferred to
                    you. We strive to make the process as efficient and
                    streamlined as possible to ensure a quick and hassle-free
                    experience for our customers.
                  </AccordionBody>
                </Accordion>

                <Accordion
                  className="theme-border-white  p-3 rounded-xl"
                  open={open === 2}
                >
                  <AccordionHeader
                    className="relative"
                    onClick={() => handleOpen(2)}
                  >
                    <p className="text-start text-theme-semibold">
                      Does My Car Stay With Me?
                    </p>

                    <p className=" absolute right-0">
                      {open === 2 ? <FaCircleMinus /> : <FaCirclePlus />}
                    </p>
                  </AccordionHeader>
                  <AccordionBody className="text-theme-500">
                    Yes, at Urban Garage, we understand that your car is an
                    important asset and we respect your ownership. When you sell
                    your car to Urban Garage, you have the option to keep
                    driving it until the completion of the purchase process.
                    Once an agreement is reached, we will handle the necessary
                    paperwork and payment process while you continue to enjoy
                    the use of your car. This allows you to have a seamless
                    transition and ensures that you can still rely on your car
                    until the purchase is finalised. We aim to provide a
                    convenient and flexible experience, giving you the freedom
                    to choose when you part ways with your vehicle.
                  </AccordionBody>
                </Accordion>

                <Accordion
                  className="theme-border-white  p-3 rounded-xl"
                  open={open === 3}
                >
                  <AccordionHeader
                    className="relative"
                    onClick={() => handleOpen(3)}
                  >
                    <p className="text-start text-theme-semibold">
                      Do I Have To Pay Anything Upfront?
                    </p>
                    <p className="absolute right-0">
                      {open === 3 ? <FaCircleMinus /> : <FaCirclePlus />}
                    </p>
                  </AccordionHeader>
                  <AccordionBody className="text-theme-500">
                    No, you do not have to pay anything upfront when selling a
                    car with Urban Garage. While selling your car, you do not
                    pay anything but only receive with us. We believe in
                    providing a transparent and fair process for our
                    customers.There are no upfront fees or charges involved. You
                    can confidently engage in the car selling process without
                    any financial obligations until the final agreement is
                    reached. At Urban Garage, we strive to make the transaction
                    as convenient and transparent as possible, ensuring that you
                    have a hassle-free experience from start to finish.
                  </AccordionBody>
                </Accordion>

                <Accordion
                  className="theme-border-white  p-3 rounded-xl"
                  open={open === 4}
                >
                  <AccordionHeader
                    className="relative"
                    onClick={() => handleOpen(4)}
                  >
                    <p className="text-start text-theme-semibold">
                      Do You Provide Home Inspection?
                    </p>
                    <p className="absolute right-0">
                      {open === 4 ? <FaCircleMinus /> : <FaCirclePlus />}
                    </p>
                  </AccordionHeader>
                  <AccordionBody className="text-theme-500">
                    Yes, Urban Garage provides free home inspection services for
                    your convenience. Our expert evaluators can visit your home
                    at a scheduled time to conduct a thorough inspection of your
                    car. This allows you to have the inspection done in the
                    comfort of your own surroundings, saving you time and
                    effort. Our goal is to make the car inspection process as
                    convenient and hassle-free as possible for our customers.
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </section>

          <section className="section text-white">
            <div className="container theme-border-white  p-4 rounded-xl">
              <div className="flex flex-col md:flex-row  items-center w-full gap-5">
                <div className="flex items-center ">
                  <div>
                    <FaHeadset className="text-5xl text-red-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="h3 text-theme-semibold text-center md:text-start">
                    Still have questions?
                  </div>
                  <div className="">
                    <p className="text-theme-500 text-center md:text-start">
                      Can’t find the answer you’re looking for? Please chat to
                      our friendly team.
                    </p>
                  </div>
                </div>
                <div>
                  <button className="py-2 px-8 text-theme-semibold text-white bg-theme-red rounded-lg">
                    Get In Touch
                  </button>
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
