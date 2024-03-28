import React from "react";
import Dropdown from "../utils/Dropdown";

function HeroSection({ imgURL, title }) {
  const backgroundImg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgURL})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };
  return (
    <>
      <section className="">
        <div
          className="abosolute -z-50 overflow-hidden top-0 h-screen flex items-center justify-center rounded-2xl  md:rounded-none"
          style={backgroundImg}
        >
          <div className="absolute -z-10 bg-black opacity-20 rounded-2xl md:rounded-none h-56vh md:h-screen w-full"></div>
          <div className="max-w-6xl m-auto px-10 py-5">
            {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
            <div className="flex flex-col gap-y-5">
              <div>
                <h1 className="md:h1 h2 text-center text-white font-bold tracking-wide text-theme-semibold">
                  {title}
                </h1>
              </div>

              <div className="hidden md:block">
                <div className="bg-white rounded-2xl">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
