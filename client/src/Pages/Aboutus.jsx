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
import garage4 from "../../public/assets/garage/garage-four.jpeg";

function AboutUs() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(data.cars);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <article>
          {/* Our Experience Centres */}
          <section className="section mt-20 md:mt-16 get-start text-white">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-x-5 gap-y-5">
                {/* card 1 */}

                <div>
                  <h2 className="h1  font-bold text-theme-bold">
                    About Luxury Ride
                  </h2>
                  <div className="mb-5">
                    <p className="text-theme-500">
                      Luxury Ride is the ultimate destination you have been
                      seeking, offering a mesmerizing range of pre-owned luxury
                      cars coupled with exceptional car service. With a
                      successful presence in the Indian market since 2022, we
                      have been catering to the discerning needs of our
                      clientele.
                    </p>
                  </div>
                  <div>
                    <p className="text-theme-500">
                      We offer a complete ecosystem for all your service and
                      car-related needs. With a strong presence in the northern
                      belt of India across multiple locations in Delhi, Gurugram
                      and Karnal we are your one-stop car destination. Our
                      state-of-the-art showroom boasts a premium collection of
                      thoroughly inspected and well-maintained luxury cars,
                      handpicked by our experienced team. Additionally, our
                      service centres are equipped with cutting-edge technology
                      to provide top-notch services to our valued customers.
                    </p>
                  </div>
                </div>

                {/* card 2 */}

                <div
                  className="relative h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500"
                  style={{
                    backgroundImage: `url(assets/garage/garage-four.jpeg)`,
                  }}
                >
                  <div className="relative z-10"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Experience Centres */}
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
                  className="relative h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500"
                  style={{
                    backgroundImage: `url(assets/garage/garage-one.jpeg)`,
                  }}
                >
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
                      <button className="theme-border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                        Book a visit
                      </button>
                      <button className="bg-white hover:bg-gray-300 text-gray-800 px-6 text-theme-semibold py-2 rounded-lg ">
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>

                {/* card 2 */}

                <div
                  className="relative h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl text-white text-theme-500"
                  style={{
                    backgroundImage: `url(assets/garage/garage-four.jpeg)`,
                  }}
                >
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
                      <button className="theme-border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                        Book a visit
                      </button>
                      <button className="bg-white hover:bg-gray-300 text-gray-800 px-6 text-theme-semibold py-2 rounded-lg ">
                        Get a Direction
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OUR SERVICES Banner*/}
          <section className="section text-white" id="hero-banner">
            <div className="relative h-screen">
              {/* <!-- Adjusted overlay with modified opacity for better content visibility --> */}
              <div className="absolute z-10 h-full w-full bg-gradient-to-r from-black to-transparent opacity-80"></div>
              <div className="h-full grid grid-cols-1 md:grid-cols-2">
                <div className="absolute -z-0 h-full w-full">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-left"
                    src="https://api.luxuryride.in/public/cms-page/our_service_centers-1689576363766-569547964-service-centre-desktop-.png"
                    alt="Urban Garage"
                  />
                </div>
                {/* <!-- Right container --> */}
                <div className="opacity-90 p-4 md:p-10 z-20 relative">
                  <div className="mb-2">
                    <h2 className="h1 text-white text-theme-bold font-bold text-2xl shadow-md">
                      Our Services
                    </h2>
                  </div>
                  <div className="mb-2">
                    <p className="text-theme-500 text-white shadow-md">
                      We provide complete professional services in our state of
                      the art service centres designed to keep your ride running
                      smoothly and impressively.
                    </p>
                  </div>
                  {/* <!-- Adjustments to text shadow for better visibility --> */}
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

          {/* testinomials  */}

          <section className="section">
            <Testinomial />
          </section>

          <section className="section">
            <Banner />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
