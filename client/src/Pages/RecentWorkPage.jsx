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
  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      to top, 
      rgba(0, 0, 0, 0.8), 
      rgba(0, 0, 0, 0)
    ),
    url('https://i.pinimg.com/474x/57/c4/82/57c4822086aae768506f1f18c4c23e74.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };
  return (
    <div className="relative">
      <Navbar />
      <main>
        <article>
          {/* <HeroSection /> */}
          <section className="">
            <div
              className="abosolute mt-20 md:mt-16 m-1 -z-50  overflow-hidden top-0 md:h-screen h-[65vh] flex items-center justify-center rounded-2xl  md:rounded-none"
              style={backgroundImg}
            >
              <div className="absolute -z-10 bg-black opacity-20 rounded-2xl md:rounded-none h-56vh md:h-screen w-full"></div>
              <div className="max-w-6xl  m-auto px-10 py-5">
                {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
                <div className="flex flex-col gap-y-5">
                  <div>
                    <h1 className="h1 md:text-start text-start text-white font-bold tracking-wide text-theme-semibold">
                      Why Choose Urban Garage?
                      <span className="font-extrabold text-h1 md:text-8xl">
                        Serving Our Community Since 2024
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="section" id="hero-banner">
            <div className="relative h-[65vh] md:h-screen">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
              
                <div className="absolute h-full w-full bg-black opacity-50 z-10"></div>
                <div className="absolute  h-full w-full">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-left"
                    src="https://img.freepik.com/premium-photo/closeup-photo-car-mechanic-working-car-engine-mechanics-repair-service-garage-uniformed-mechanic-is-working-car-service-work-garage-repair-maintenance-services_826551-1057.jpg"
                    alt="Urban Garage Recent Work"
                  />
                </div>
          
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
          </section> */}
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
                <div className="bg-white order-1 rounded-xl overflow-hidden theme-border-white">
                  <video
                    width="100%"
                    height="auto"
                    controls
                    preload="auto"
                    playsinline
                    loading="lazy"
                  >
                    <source
                      src="assets/video/urban-garage.MOV"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
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

              <div className="flex flex-col items-center md:flex-row gap-12 px-16">
                {/* card 1 */}
                <div className="bg-white w-full h-36 rounded-lg p-5 flex flex-col gap-y-5 items-center justify-center ">
                  <div className="flex justify-center ">
                    <p className="inline-flex text-theme-semibold items-center gap-2 font-semibold text-2xl text-black">
                      <IoDiamondOutline className="text-3xl text-theme-red" />
                      Quality
                    </p>
                  </div>
                  <p className="text-base text-center text-black text-theme-500">
                    Multi Point Quality Certification
                  </p>
                </div>
                {/* card 2 */}
                <div className="bg-white w-full h-36  rounded-lg p-5 flex flex-col gap-y-5 items-center justify-center ">
                  <div className="flex justify-center">
                    <p className="inline-flex text-theme-semibold items-center gap-2 font-semibold text-2xl text-black">
                      <GrCertificate className="text-3xl text-theme-red" />
                      Service
                    </p>
                  </div>
                  <p className="text-base text-black text-theme-500">
                    7 Days Return Policy.
                  </p>
                </div>

                <div className="bg-white w-full h-36  rounded-lg p-5 flex flex-col gap-y-5 items-center justify-center  ">
                  <div className="flex justify-center">
                    <p className="inline-flex text-theme-semibold items-center gap-2 font-semibold text-2xl text-black">
                      <GiReceiveMoney className="text-3xl text-theme-red" />
                      Experience
                    </p>
                  </div>

                  <p className="text-base text-center text-black text-theme-500">
                    #1 in Credit Assitance.
                  </p>
                </div>
                {/* card 4 */}
                <div className="bg-white w-full h-36  rounded-lg p-5 flex flex-col gap-y-5 items-center justify-center  ">
                  <div className="flex justify-center">
                    <p className="inline-flex text-theme-semibold items-center gap-2 font-semibold text-2xl text-black">
                      <IoCarSportOutline className="text-3xl text-theme-red" />
                      Choice
                    </p>
                  </div>
                  <p className="text-base text-center text-theme-500 text-black">
                    Over 1000 Vehicles in Stock
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* sell banner start */}
          <section className="section get-start text-white">
            <div className="container">
              <div className="h-80 flex flex-col gap-y-2 items-center justify-center theme-border-white rounded-2xl text-white  bg-cover bg-[url(assets/banners/banner12.jpeg);] text-theme-500">
                <h1 className="md:text-4xl text-center h2 font-semibold text-theme-bold tracking-wide md:text-nowrap">
                  Sell Your Car At Highest Price In{" "}
                </h1>
                <p className="h1 font-extrabold text-theme-bold">59 Minutes</p>
                <div className="md:flex gap-x-5">
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
                  <button className="bg-white hover:bg-gray-300 text-gray-800 px-6 text-theme-semibold py-2 rounded-lg theme-border-white">
                    <Link to={"/sell"}>Sell Your Car</Link>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* gallery  */}

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
                    backgroundImage:
                      "url('https://i.pinimg.com/474x/91/02/bc/9102bcfc07d68b0ecab3a4a6ff5a9bad.jpg')",
                  }}
                  className="relative bg-cover h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl overflow-hidden text-white text-theme-500"
                >
                  {/* <!-- Black blur effect overlay --> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>

                  {/* <!-- Content --> */}
                  <h1 className="relative z-10 text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                    Ceramic Coating
                  </h1>
                  <p className="relative z-10 font-extrabold text-theme-500">
                    Witness the grandeur of India's largest pre-owned car
                    experience centre, where our highly skilled team of experts
                    bring you a wide array of comprehensive car-related
                    services.
                  </p>

                  <div className="relative z-10 flex gap-x-3">
                    <Link to={"/coating"}>
                      <button className="text-white theme-border-white hover:bg-gray-300 hover:text-gray-800 px-6 text-theme-semibold py-2 rounded-lg ">
                        Explore more
                      </button>
                    </Link>
                  </div>
                </div>

                {/* card 2 */}

                <div
                  style={{
                    backgroundImage:
                      "url('https://i.pinimg.com/474x/e9/ed/5d/e9ed5de789fb886890f21ae4a42cdf1c.jpg')",
                  }}
                  className="relative bg-cover h-96 p-4 flex flex-col gap-y-2 items-start justify-end rounded-2xl overflow-hidden text-white text-theme-500"
                >
                  {/* <!-- Black gradient drop effect overlay --> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>

                  {/* <!-- Content --> */}
                  <h1 className="relative z-10 text-4xl font-semibold text-theme-bold tracking-wide text-nowrap">
                    PPF( Paint Protection Film)
                  </h1>
                  <p className="relative z-10 font-extrabold text-theme-500">
                    PPf is a transparent film that is applied to the exterior of
                    a vehicle to protect it from scratches, dents, or swirls. It
                    is a great way to protect your car's paint job. It is a
                    great way to protect your car's paint job.
                  </p>

                  <div className="relative z-10 flex gap-x-3">
                    <Link to={"/ppf"}>
                      <button className="text-white theme-border-white hover:bg-gray-300 hover:text-gray-800 px-6 text-theme-semibold py-2 rounded-lg ">
                        Explore more
                      </button>
                    </Link>
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
