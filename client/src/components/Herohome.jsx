import React from "react";
import Dropdown from "../utils/Dropdown";
import { Link } from "react-router-dom";

function Herohome() {
  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      to top, 
      rgba(0, 0, 0, 1), 
      rgba(0, 0, 0, 0)
    ),
    url('/assets/banners/car6.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };

  return (
    <section className="">
      <div
        className="abosolute  mt-20 md:mt-16  -z-50 overflow-hidden top-0 h-[65vh] md:h-screen m-1 flex items-center justify-center rounded-2xl  md:rounded-none"
        style={backgroundImg}
      >
        <div className="absolute -z-10 bg-black opacity-20 rounded-2xl md:rounded-none h-56vh md:h-screen w-full"></div>
        <div className="h-full max-w-6xl m-auto px-10 py-5">
          {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
          <div className="h-full flex flex-col justify-around md:justify-center  gap-y-5">
            {/* heading  */}
            <div>
              <h1 className="h1 text-center text-white font-bold tracking-wide text-theme-bold">
                Search Your Dream Car Now <br />
                <span className="font-extrabold md:text-8xl">URBAN GARAGE</span>
              </h1>
            </div>
            {/* brands  */}
            <div className="hidden md:block">
              {/* <div className="bg-white rounded-2xl">
                <form
                  action=""
                  className="w-full relative grid grid-cols-4 gap-4"
                >
                  <div className="flex justify-center">
                    <Dropdown title={"Car, model or brand"} />
                  </div>

                  <div className="flex justify-center">
                    <Dropdown title={"Max monthly payment"} />
                  </div>

                  <div className="flex justify-center">
                    <Dropdown title={"Make the Year"} />
                  </div>

                  <div className="flex justify-center">
                    <Dropdown title={"KMs Driven"} />
                  </div>
                </form>
              </div> */}
              <div className="flex justify-start items-center mt-5">
                <div className="hidden  max-w-4xl m-auto md:grid grid-cols-4 md:grid-cols-8 gap-y-2 gap-x-3 mt-5">
                  {/* brand 1  */}
                  <div className="h-16  bg-gray-200 opacity-40 p-2 rounded-xl theme-border-white hover:cursor-pointer">
                    <img
                      loading="lazy"
                      className="h-full w-full object-contain object-center"
                      src="/assets/brands/brand1.png"
                      alt="Urban Gradge BMW"
                    />
                  </div>
                  {/* brand 2 */}
                  <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl  theme-border-white hover:cursor-pointer">
                    <img
                      loading="lazy"
                      className="h-full w-full object-contain object-center"
                      src="/assets/brands/brand12.png"
                      alt="Urban Gradge Mercedes"
                    />
                  </div>
                  {/* brand 3  */}
                  <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl border hover:cursor-pointer">
                    <img
                      loading="lazy"
                      className="h-full w-full object-contain object-center"
                      src="/assets/brands/brand3.png"
                      alt="Urban Gradge Chevrolet"
                    />
                  </div>
                  {/* brand 4 */}
                  <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl border hover:cursor-pointer">
                    <img
                      loading="lazy"
                      className="h-full w-full object-contain object-center"
                      src="/assets/brands/brand9.png"
                      alt="Urban Gradge Ferrari"
                    />
                  </div>
                  {/* brand 5  */}
                  <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl border hover:cursor-pointer">
                    <img
                      loading="lazy"
                      className="h-full w-full object-contain object-center"
                      src="/assets/brands/brand5.png"
                      alt="Urban Gradge Ford"
                    />
                  </div>
                  {/* brand 6  */}
                  <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl border hover:cursor-pointer">
                    <img
                      loading="lazy"
                      className="h-full w-full object-contain object-center"
                      src="/assets/brands/brand6.png"
                      alt="Urban Gradge Porsche"
                    />
                  </div>
                  {/* brand 7 */}
                  <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl border hover:cursor-pointer">
                    <img
                      loading="lazy"
                      className="h-full w-full object-contain object-center"
                      src="/assets/brands/brand7.png"
                      alt="Urban Gradge Toyota"
                    />
                  </div>
                  {/* brand 8  */}
                  <div className="h-16 bg-gray-200 opacity-40 p-2 rounded-xl border hover:cursor-pointer">
                    <img
                      loading="lazy"
                      className="h-full w-full object-contain object-center"
                      src="/assets/brands/brand8.png"
                      alt="Urban Gradge Volkswagen"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* button  */}
            <Link to={"/buy"} className="w-full block md:hidden">
              <button className="py-2 px-8 w-full text-theme-semibold tracking-wide bg-theme-red text-white">
                View Cars
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herohome;
