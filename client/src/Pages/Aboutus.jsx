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
                    About{" "}
                    <span className="text-theme-red hover:undeline"></span>{" "}
                    Urban Garage !
                  </h2>
                  <div className="mb-5">
                    <p className="text-theme-500">
                      Urban Garage is the ultimate destination you have been
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
                    backgroundImage: `url(/assets/garage/garage-four.jpeg)`,
                  }}
                >
                  <div className="relative z-10"></div>
                </div>
              </div>
            </div>
          </section>

          {/*Meets The Minds*/}
          <section className="section get-start text-white">
            <div className="container">
              <div className="mb-5 md:mb-10">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Meets The Minds
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  At Luxury Ride, our leadership team embodies a perfect blend
                  of expertise, vision, and unwavering commitment, guiding our
                  organization towards unparalleled success and innovation.
                </p>
              </div>

              <div className="grid sm:grid-cols-2  md:grid-cols-3 justify-items-center gap-x-5 gap-y-5">
                {/* card 1 */}
                <div>
                  <div className="mb-3 theme-border-white max-w-72 max-h-42 rounded-xl overflow-hidden">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="/assets/loading.jpeg"
                      alt="Urban Garage About Us"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="h4">Urban Garage</h4>
                    <p className="p text-theme-500">Co-Founder & CEO</p>
                  </div>
                </div>
                {/* card 1 */}
                <div>
                  <div className="mb-3 theme-border-white max-w-72 max-h-42 rounded-xl overflow-hidden">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="/assets/loading.jpeg"
                      alt="Urban Garage About Us"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="h4">Urban Garage</h4>
                    <p className="p text-theme-500">Co-Founder & CEO</p>
                  </div>
                </div>
                {/* card 1 */}
                <div>
                  <div className="mb-3 theme-border-white max-w-72 max-h-42 rounded-xl overflow-hidden">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="/assets/loading.jpeg"
                      alt="Urban Garage About Us"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="h4">Urban Garage</h4>
                    <p className="p text-theme-500">Co-Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="grid md:grid-cols-3 gap-5">
                {/* left content  */}
                <div className="flex flex-col gap-5">
                  <div className="w-56 h-42  rounded-xl overflow-hidden">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="/assets/loading.jpeg"
                      alt="Urban Garage about us"
                    />
                  </div>
                  <div className="h-72 w-48 ml-auto rounded-xl overflow-hidden">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="/assets/loading.jpeg"
                      alt="Urban Garage about us"
                    />
                  </div>
                </div>
                {/* content */}
                <div>
                  <p className="mb-2 text-theme-bold text-theme-semibold hover:text-theme-red hover:underline">
                    Turn Your Big Ideas Into Reality!
                  </p>
                  <p className=" mb-3 p text-theme-500">
                    We know that success means different things to different
                    people and you may be driven to climb the leadership ladder,
                    make a positive impact on the world around you, continually
                    expand your skill set, pursue the perfect work-life balance,
                    or all of the above. When you go beyond with Luxury Ride,
                    you can be whatever you want to be. Just be the best you are
                  </p>
                  <div>
                    <button className="px-5 bg-theme-red rounded-lg text-white py-2 theme-border-red text-theme-semibold">
                      view Opportunities
                    </button>
                  </div>
                </div>
                {/* right content  */}
                <div className="flex flex-col gap-5">
                  <div className="w-56 h-42 rounded-xl overflow-hidden">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="/assets/loading.jpeg"
                      alt="Urban Garage about us"
                    />
                  </div>
                  <div className="h-72 w-48 ml-auto rounded-xl overflow-hidden">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="/assets/loading.jpeg"
                      alt="Urban Garage about us"
                    />
                  </div>
                </div>
              </div>
            </div>
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
