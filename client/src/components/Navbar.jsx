import React from "react";
import { Link } from "react-router-dom";

// icons
import { MdPerson } from "react-icons/md";

function Navbar() {
  return (
    <>
      <header className="header bg-theme-black4" data-header>
        <div className="container">
          <div className="overlay" data-overlay></div>

          <Link to="/" className="logo">
            <div className="h-12">
              <img
                className="h-full"
                src={"assets/logo/light-logo.png"}
                alt="URBAN Garage"
              />
            </div>
          </Link>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li>
                <Link
                  to="/buy"
                  className="navbar-link text-theme-500"
                  data-nav-link
                >
                  Buy
                </Link>
              </li>

              <li>
                <Link
                  to="/sell"
                  className="navbar-link text-theme-500"
                  data-nav-link
                >
                  Sell
                </Link>
              </li>

              <li>
                <Link
                  to="/service"
                  className="navbar-link text-theme-500"
                  data-nav-link
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                  to="/coating"
                  className="navbar-link text-theme-500"
                  data-nav-link
                >
                  Coating
                </Link>
              </li>
              <li>
                <Link
                  to="/ppf"
                  className="navbar-link text-theme-500"
                  data-nav-link
                >
                  PPF
                </Link>
              </li>
              <li>
                <Link
                  to="/turtle-wax-products"
                  className="navbar-link text-theme-500"
                  data-nav-link
                >
                  Turtle Wax Products
                </Link>
              </li>
              <li>
                <Link
                  to="/recent-work"
                  className="navbar-link text-theme-500"
                  data-nav-link
                >
                  Recent Work
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="header-contact">
              <Link
                to="tel:+917909200001"
                target="_blank"
                className="contact-link text-theme-500"
              >
                +91 7744900001
              </Link>

              <span className="contact-time text-theme-500">
                Mon - Sat: 9:00 am - 6:00 pm
              </span>
            </div>

            <Link
              to="/contact-us"
              className="btn user-btn hidden"
              aria-label="Profile"
            >
              <MdPerson className="text-2xl" />
            </Link>

            <button
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
    </>
  );
}

export default Navbar;
