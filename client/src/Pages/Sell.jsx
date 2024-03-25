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
    url('https://luxuryride.in/img/sell-banner-new.png')`,
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
              className="abosolute -z-50 m-1 overflow-hidden top-0 h-screen flex items-center justify-center rounded-2xl  md:rounded-none"
              style={backgroundImg}
            >
              <div className="absolute m-1 -z-10 bg-black opacity-20 rounded-2xl md:rounded-none h-56vh md:h-screen w-full"></div>
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
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://luxuryride.in/img/selling-car-made-simple.png"
                    alt=""
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

export default SellPage;
