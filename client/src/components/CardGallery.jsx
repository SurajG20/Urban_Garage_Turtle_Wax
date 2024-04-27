import React from "react";
import { Link } from "react-router-dom";
import "./gallery.css";
function CardGallery() {
  return (
    <>
      <section className="section get-start text-white">
        <div className="container">
          <div className="mb-5 md:mb-10">
            <h2 className="h2 section-title text-center text-theme-semibold flex flex-col  md:flex-row gap-x-2 justify-center">
              Customize Your Ride with <span className="text-theme-red">URBAN GARAGE !</span>
            </h2>
            <p className="p max-w-3xl m-auto text-center text-theme-500">
              Transform Your Car to Match Your Style
            </p>
          </div>

          <div className="gallery grid md:grid-cols-2 gap-x-5 gap-y-5">
            {/* card 1 */}
            <div className="card">
              <div className="wrapper rounded-2xl theme-border-white shadow shadow-white overflow-hidden hover:cursor-pointer">
                <img
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  src="/assets/cars/AUDI-A6-35TDI-S-LINE.jpeg"
                  alt="Urban Garage"
                  // className="cover-image"
                />
              </div>
              <div>
                <h2 className="title h1 text-theme-red text-theme-bold">
                  Urban Garage
                </h2>
              </div>
              <img
                loading="lazy"
                src="/assets/cars/AUDI-A6-35TDI-S-LINE.png"
                className="character "
              />
            </div>
            {/* card 2 */}
            <div className="card">
              <div className="wrapper theme-border-white shadow shadow-white rounded-2xl overflow-hidden hover:cursor-pointer">
                <img
                  className="h-full w-full object-cover object-right bg-gray-900"
                  loading="lazy"
                  src="/assets/banners/car6.png"
                  alt="Urban Garage"
                  // className="cover-image"
                />
              </div>
              <div>
                <h2 className="title h1 text-theme-red text-theme-bold">
                  Urban Garage
                </h2>
              </div>
              <div className="rounded-2xl character overflow-hidden hover:cursor-pointer">
                <img
                  loading="lazy"
                  src="/assets/banners/car15.jpeg"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardGallery;
