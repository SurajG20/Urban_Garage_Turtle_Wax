import React from "react";

function HeroSection() {
  return (
    <section className="section hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h2 className="h1 hero-title text-theme-white text-theme-font-semibold">
            Search Your Dream Car Now
          </h2>
        </div>

        <div className="hero-banner">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <img
            loading="lazy"
            className="h-full w-full object-cover object-center"
            src="src/assets/banners/hero-banner.jpg"
            alt="Urban Gradge"
          />
        </div>

        <form action="" className="hero-form bg-theme-white flex ">
          <div className="input-wrapper">
            <label for="input-1" className="input-label">
              Car, model or brand
            </label>
          </div>

          <div className="input-wrapper">
            <label for="input-2" className="input-label">
              Max monthly payment
            </label>
          </div>

          <div className="input-wrapper">
            <label for="input-3" className="input-label">
              Make the Year
            </label>
          </div>
          <div className="input-wrapper">
            <label for="input-3" className="input-label">
              KMs Driven
            </label>
          </div>

          {/* <button type="submit" className="btn">
            TO SEARCH FOR
          </button> */}
        </form>

        <div className="max-w-4xl m-auto grid grid-cols-8 gap-x-3 mt-5">
          <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
            <img
              loading="lazy"
              className="h-full w-full object-contain object-center"
              src="src/assets/brands/BMW_logo.png"
              alt="Urban Gradge BMW"
            />
          </div>
          <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
            <img
              loading="lazy"
              className="h-full w-full object-contain object-center"
              src="src/assets/brands/Mercedes_logo.png"
              alt="Urban Gradge Mercedes"
            />
          </div>
          <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
            <img
              loading="lazy"
              className="h-full w-full object-contain object-center"
              src="src/assets/brands/Chevrolet_logo.png"
              alt="Urban Gradge Chevrolet"
            />
          </div>
          <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
            <img
              loading="lazy"
              className="h-full w-full object-contain object-center"
              src="src/assets/brands/Ferrari_logo.png"
              alt="Urban Gradge Ferrari"
            />
          </div>
          <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
            <img
              loading="lazy"
              className="h-full w-full object-contain object-center"
              src="src/assets/brands/Ford_logo.png"
              alt="Urban Gradge Ford"
            />
          </div>
          <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
            <img
              loading="lazy"
              className="h-full w-full object-contain object-center"
              src="src/assets/brands/porsche-logo.png"
              alt="Urban Gradge Porsche"
            />
          </div>
          <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
            <img
              loading="lazy"
              className="h-full w-full object-contain object-center"
              src="src/assets/brands/Toyota_logo.png"
              alt="Urban Gradge Toyota"
            />
          </div>
          <div className="h-16 bg-black opacity-40 p-2 rounded-2xl border hover:cursor-pointer">
            <img
              loading="lazy"
              className="h-full w-full object-contain object-center"
              src="src/assets/brands/Volkswagen_logo.png"
              alt="Urban Gradge Volkswagen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
