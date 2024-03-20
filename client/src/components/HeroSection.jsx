import React from "react";

function HeroSection() {
  return (
    <section className="section hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h2 className="h1 hero-title">THE EASY WAY TO ACQUIRE A LEASE</h2>

          <p className="hero-text">
            More in India, Chandighard and Connecticut!
          </p>
        </div>

        <div className="hero-banner">
          <img
            loading="lazy"
            className="h-full w-full object-cover object-center"
            src="src/assets/banners/hero-banner.jpg"
            alt="Urban-Gradge Banner-Img"
          />
        </div>

        <form action="" className="hero-form">
          <div className="input-wrapper">
            <label for="input-1" className="input-label">
              Car, model or brand
            </label>

            <input
              type="text"
              name="car-model"
              id="input-1"
              className="input-field"
              placeholder="What car do"
            />
          </div>

          <div className="input-wrapper">
            <label for="input-2" className="input-label">
              Max monthly payment
            </label>

            <input
              type="text"
              name="monthly-pay"
              id="input-2"
              className="input-field"
              placeholder="Add The Value"
            />
          </div>

          <div className="input-wrapper">
            <label for="input-3" className="input-label">
              Make the Year
            </label>

            <input
              type="text"
              name="year"
              id="input-3"
              className="input-field"
              placeholder="Add The Year"
            />
          </div>

          <button type="submit" className="btn">
            TO SEARCH FOR
          </button>
        </form>
      </div>
    </section>
  );
}

export default HeroSection;
