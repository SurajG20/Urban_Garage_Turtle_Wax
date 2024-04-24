import React, { useState } from "react";

// icons
import { MdPerson } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Header() {
  const [mobiNavbar, setmobiNavbar] = useState(false);
  return (
    <header className="header bg-theme-black4" data-header>
      <div className="container">
        <div className="overlay" data-overlay></div>

        <Link to="/" className="logo flex items-center gap-x-2">
          <div className="h-12">
            <img
              className="h-full"
              src={"assets/logo/light-logo.png"}
              alt="URBAN Garage"
            />
          </div>
          <div className="text-theme-red text-theme-bold text-2xl">
            URBAN GARAGE
          </div>
        </Link>

        <nav className="navbar " data-navbar>
          <ul className="navbar-list flex gap-8">
            <li>
              <Link
                to="/admin/cars"
                className="navbar-link text-theme-500"
                data-nav-link
              >
                All Cars
              </Link>
            </li>
            <li>
              <Link
                to="/buyCar-users"
                className="navbar-link text-theme-500"
                data-nav-link
              >
                Buy
              </Link>
            </li>
            <li>
              <Link
                to="/sellCar-users"
                className="navbar-link text-theme-500"
                data-nav-link
              >
                Sell
              </Link>
            </li>
            <li>
              <Link
                to="/service-users"
                className="navbar-link text-theme-500"
                data-nav-link
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/contact-users"
                className="navbar-link text-theme-500"
                data-nav-link
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* mobile navbar */}
        <div className={`mobile-nav p-4 ${mobiNavbar ? "show" : ""}`}>
          <div className="flex justify-between items-center mb-10">
            <Link to="/" className="logo">
              <div className="h-12">
                <img
                  className="h-full"
                  src={"assets/logo/light-logo.png"}
                  alt="URBAN Garage"
                />
              </div>
            </Link>
            <RxCross1
              onClick={() => setmobiNavbar(false)}
              className="text-2xl text-white"
            />
          </div>

          <ul className="mobile-nav-list mb-2 flex flex-col gap-3 text-white">
            <li>
              <Link
                to="/buy"
                className="mobile-nav-link text-theme-500"
                data-nav-link
              >
                Buy
              </Link>
            </li>

            <li>
              <Link
                to="/sell"
                className="mobile-nav-link text-theme-500"
                data-nav-link
              >
                Sell
              </Link>
            </li>

            <li>
              <Link
                to="/service"
                className="mobile-nav-link text-theme-500"
                data-nav-link
              >
                Service
              </Link>
            </li>

            <li>
              <Link
                to="/coating"
                className="mobile-nav-link text-theme-500"
                data-nav-link
              >
                Coating
              </Link>
            </li>
            <li>
              <Link
                to="/ppf"
                className="mobile-nav-link text-theme-500"
                data-nav-link
              >
                PPF
              </Link>
            </li>
            <li>
              <Link
                to="/turtle-wax-products"
                className="mobile-nav-link text-theme-500"
                data-nav-link
              >
                Turtle Wax Products
              </Link>
            </li>
            <li>
              <Link
                to="/recent-work"
                className="mobile-nav-link text-theme-500"
                data-nav-link
              >
                Recent Work
              </Link>
            </li>
          </ul>
          <div>
            <Link to={"/contact-us"}>
              <button className="py-2 px-5 w-full bg-white font-semibold">
                Contact us
              </button>
            </Link>
          </div>
        </div>

        <div className="header-actions">
          <div className="header-contact">
            {" "}
            <Link to={"/add-product"}>
              <div className="text-theme-red hover:text-white text-theme-semibold text-xl">
                + Add Product
              </div>
            </Link>
            {/* <Link
              to="tel:+917909200001"
              target="_blank"
              className="contact-link text-theme-500"
            >
              +91 7744900001
            </Link> */}
            {/* <span className="contact-time text-theme-500">
              Mon - Sat: 9:00 am - 6:00 pm
            </span> */}
          </div>

          <Link
            to="/contact-us"
            className="btn user-btn hidden"
            aria-label="Profile"
          >
            <MdPerson className="text-2xl" />
          </Link>

          <button
            onClick={() => setmobiNavbar(!mobiNavbar)}
            className="nav-toggle-btn"
            data-nav-toggle-btn
            aria-label="Toggle Menu"
          >
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
