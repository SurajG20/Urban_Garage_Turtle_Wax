import React from "react";
import Dropdown from "../utils/Dropdown";
import { Link } from "react-router-dom";
function HeroSection({ imgURL, title }) {
  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      to top, 
      rgba(0, 0, 0, 2), 
      rgba(0, 0, 0, 0)
    ),
    url(${imgURL})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };
  return (
    <>
      <section className="">
        <div
          className="abosolute mt-20 m-1 -z-50 overflow-hidden top-0 h-[65vh] md:h-screen flex items-center justify-center rounded-2xl  md:rounded-none"
          style={backgroundImg}
        >
          <div className="absolute -z-10 bg-black opacity-20 rounded-2xl md:rounded-none h-56vh md:h-screen w-full"></div>
          <div className="h-full max-w-6xl m-auto px-10 py-5">
            {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
            <div className="h-full flex flex-col justify-around md:justify-center gap-y-5">
              <div>
                <h1 className="h1 text-center text-white font-bold tracking-wide text-theme-bold">
                  {title}
                </h1>
              </div>

              {/* beands  */}
              <div className="hidden md:block">
                <div className="flex justify-start items-center mt-5">
                  <div className="hidden  max-w-4xl m-auto md:grid grid-cols-4 md:grid-cols-8 gap-y-2 gap-x-10 mt-5">
                    <div className="h-16 w-24 border border-gray-600 bg-white opacity-40 p-2 rounded-xl  hover:cursor-pointer">
                      <img
                        loading="lazy"
                        className="h-full w-full object-contain object-center"
                        src="assets/icons/icon1.png"
                        alt="Urban Gradge Service"
                      />
                    </div>
                    <div className="h-16  w-24 bg-white  opacity-40 p-2 rounded-xl border hover:cursor-pointer">
                      <img
                        loading="lazy"
                        className="h-full w-full object-contain object-center"
                        src="assets/icons/icon2.png"
                        alt="Urban Gradge Service"
                      />
                    </div>
                    <div className="h-16  w-24 bg-white  opacity-40 p-2 rounded-xl border hover:cursor-pointer">
                      <img
                        loading="lazy"
                        className="h-full w-full object-contain object-center"
                        src="assets/icons/icon3.png"
                        alt="Urban Gradge Service"
                      />
                    </div>
                    <div className="h-16  w-24 bg-white  opacity-40 p-2 rounded-xl border hover:cursor-pointer">
                      <img
                        loading="lazy"
                        className="h-full w-full object-contain object-center"
                        src="assets/icons/icon4.png"
                        alt="Urban Gradge Service"
                      />
                    </div>
                    <div className="h-16  w-24 bg-white  opacity-40 p-2 rounded-xl border hover:cursor-pointer">
                      <img
                        loading="lazy"
                        className="h-full w-full object-contain object-center"
                        src="assets/icons/icon5.png"
                        alt="Urban Gradge Service"
                      />
                    </div>
                    <div className="h-16  w-24 bg-white  opacity-40 p-2 rounded-xl border hover:cursor-pointer">
                      <img
                        loading="lazy"
                        className="h-full w-full object-contain object-center"
                        src="assets/icons/icon6.png"
                        alt="Urban Gradge Service"
                      />
                    </div>
                    <div className="h-16  w-24 bg-white  opacity-40 p- rounded-xl border hover:cursor-pointer">
                      <img
                        loading="lazy"
                        className="h-full w-full object-contain object-center"
                        src="assets/icons/icon7.png"
                        alt="Urban Gradge Service"
                      />
                    </div>
                    <div className="h-16  w-24 bg-white  opacity-40 p-2 rounded-xl border hover:cursor-pointer">
                      <img
                        loading="lazy"
                        className="h-full w-full object-contain object-center"
                        src="assets/icons/icon9.png"
                        alt="Urban Gradge Service"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* button  */}
              <Link to={"/buy"} className="w-full block md:hidden">
                <button className="py-2 px-8 w-full text-theme-semibold tracking-wide bg-red-900 text-white">
                  View Cars
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
