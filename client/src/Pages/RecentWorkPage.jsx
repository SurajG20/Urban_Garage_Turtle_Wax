import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testinomial from "../components/Testinomial";
import { Link } from "react-router-dom";

// icons
import { TiTick } from "react-icons/ti";
import { GrCertificate } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";
import { FaBlenderPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

function RecentWork() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <article>
          {/* <HeroSection /> */}

          <section className="section" id="hero-banner">
            <div className="relative md:h-96">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
                {/* Overlay div */}
                <div className="absolute h-full w-full bg-black opacity-50 -z-10"></div>
                <div className="absolute -z-20 h-full w-full">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-left"
                    src="https://img.freepik.com/premium-photo/closeup-photo-car-mechanic-working-car-engine-mechanics-repair-service-garage-uniformed-mechanic-is-working-car-service-work-garage-repair-maintenance-services_826551-1057.jpg"
                    alt="Urban Garage Recent Work"
                  />
                </div>
                {/* left container  */}
                <div className="hidden md:flex items-center justify-center mx-auto px-16">
                  <div className="">
                    <h1 className="h1 text-white text-theme-bold  font-bold text-nowrap">
                      Why Choose Urban Garage?
                    </h1>
                    <h2 className="h2 text-theme-semibold text-white text-3xl font-bold">
                      Serving Our Community Since 2024
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* hero Banner section Start  */}

          <section className="section text-white" id="hero-banner">
            <div className="relative md:h-96">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 px-16">
                {/* left container  */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="p-5">
                    <h1 className="h1 text-theme-bold mb-6  font-bold">
                      The Dealer You Can
                      <br /> Count On
                    </h1>
                    <p className="o text-lg text-theme-500">
                      Every Easterns vehicle has passed a rigorous multi-point
                      certification check so you can buy with confidence. Search
                      our vast inventory of over 1000 cars where your experience
                      is completely customizable. 100 % Online, in-person or a
                      mix of both. Our friendly customer care staff handles any
                      pre or post-sale questions you may have, and that is why
                      Easterns has over a 97% customer approval rating. We
                      invite you to come into an Easterns store, call, or chat
                      online today and experience firsthand what we mean by the
                      Easterns difference!
                    </p>
                  </div>
                </div>
                {/* right container  */}
                <div className="bg-white order-1 rounded-md overflow-hidden theme-border-white">
                  <iframe
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* Shop With Confidence */}
          <section className="section text-white" id="hero-banner">
            <div className="relative mx-auto flex gap-20 flex-col items-center justify-center ">
              <div className="h-full px-16">
                <h1 className="h1 text-theme-bold relative inline-block  text-center">
                  Shop With Confidence
                  <span className="absolute bottom-[-12] left-1/2 transform -translate-x-1/2">
                    <span className="block h-0.5 w-56 bg-white"></span>
                  </span>
                </h1>
              </div>
              <div className="flex gap-12 px-16">
                <div className="flex flex-col gap-y-5 items-center justify-center ">
                  <div className="flex justify-center">
                    <p className="inline-flex text-theme-semibold items-center gap-2 font-semibold text-2xl">
                      <IoDiamondOutline className="text-3xl text-theme-red" />
                      Quality
                    </p>
                  </div>
                  <p className="text-base text-theme-500">
                    Multi Point Quality Certification
                  </p>
                </div>
                <div className="flex flex-col gap-y-5 items-center justify-center ">
                  <div className="flex justify-center">
                    <p className="inline-flex text-theme-semibold  items-center gap-2 font-semibold text-2xl">
                      <GrCertificate className="text-3xl text-theme-red" />
                      Service
                    </p>
                  </div>
                  <p className="text-base text-theme-500">
                    7 Days Return Policy.
                  </p>
                </div>
                <div className="flex flex-col gap-y-5 items-center justify-center ">
                  <div className="flex justify-center">
                    <p className="inline-flex text-theme-semibold  items-center gap-2 font-semibold text-2xl">
                      <GiReceiveMoney className="text-3xl text-theme-red" />
                      Experience
                    </p>
                  </div>

                  <p className="text-base text-theme-500">
                    #1 in Credit Assitance.
                  </p>
                </div>
                <div className="flex flex-col gap-y-5 items-center justify-center ">
                  <div className="flex justify-center">
                    <p className="inline-flex text-theme-semibold   items-center gap-2 font-semibold text-2xl">
                      <IoCarSportOutline className="text-3xl text-theme-red" />
                      Choice
                    </p>
                  </div>
                  <p className="text-base text-theme-500">
                    Over 1000 Vehicles in Stock
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* sell banner start */}
          <section className="section get-start text-white">
            <div className="container">
              <div className="md:h-80 flex flex-col gap-y-2 items-center justify-center theme-border-white rounded-2xl text-white bg-[url(https://api.luxuryride.in/public/cms-page/selling_your_car-1689576424628-941539955-sell-your-car-desktop.png);] text-theme-500">
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
                  <button className="bg-white text-gray-700 px-6 text-theme-semibold py-2 rounded-lg theme-border-white">
                    <Link to={"/sell"}>Sell Your Car</Link>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* sell banner end  */}

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
                    backgroundImage: "url('assets/garage/garage-one.jpeg')",
                  }}
                  className="relative h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl overflow-hidden text-white text-theme-500"
                >
                  {/* <!-- Black blur effect overlay --> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>

                  {/* <!-- Content --> */}
                  <h1 className="relative z-10 text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                    CHANDIGARH
                  </h1>
                  <p className="relative z-10 font-extrabold text-theme-500">
                    Standing at the heart of the Millennium city, our team of
                    seasoned experts offers an array luxury car services and
                    tailored solutions to cater to your every automotive
                    requirement.
                  </p>

                  <div className="relative z-10 flex gap-x-3">
                    <button className="theme-border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
                      Book a visit
                    </button>
                    <button className="bg-white text-gray-700 px-6 text-theme-semibold py-2 rounded-lg ">
                      Get Directions
                    </button>
                  </div>
                </div>

                {/* card 2 */}

                <div
                  style={{
                    backgroundImage: "url('assets/garage/garage-two.jpeg')",
                  }}
                  className="relative h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl overflow-hidden text-white text-theme-500"
                >
                  {/* <!-- Black gradient drop effect overlay --> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>

                  {/* <!-- Content --> */}
                  <h1 className="relative z-10 text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                    Karnal
                  </h1>
                  <p className="relative z-10 font-extrabold text-theme-500">
                    Witness the grandeur of India's largest pre-owned car
                    experience centre, where our highly skilled team of experts
                    bring you a wide array of comprehensive car-related
                    services.
                  </p>

                  <div className="relative z-10 flex gap-x-3">
                    <button className="theme-border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg bg-transparent hover:text-theme-semibold transition-colors">
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

          {/* banner section start */}
          <section className="section" id="hero-banner">
            <div className="relative h-screen">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
                {/* Overlay div */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
                <div className="absolute -z-20 h-full w-full">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-left"
                    src="https://api.luxuryride.in/public/cms-page/our_service_centers-1689576363766-569547964-service-centre-desktop-.png"
                    alt="Urban Garage Recent Work"
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
                  <div className="grid grid-cols-2 gap-5 max-w-1xl">
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

          <section>
            <Testinomial />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default RecentWork;
