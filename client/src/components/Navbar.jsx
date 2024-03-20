import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="header bg-theme-white" data-header>
        <div className="container">
          <div className="overlay" data-overlay></div>

          <Link to="/" className="logo">
            <div className="h-12">
              <img
                className="h-full"
                src={"src/assets/logo/light-logo.png"}
                alt="URBAN GRADGE"
              />
            </div>
          </Link>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li>
                <Link to="/buy" className="navbar-link" data-nav-link>
                  Buy
                </Link>
              </li>

              <li>
                <Link to="/sell" className="navbar-link" data-nav-link>
                  Sell
                </Link>
              </li>

              <li>
                <Link to="/service" className="navbar-link" data-nav-link>
                  Service
                </Link>
              </li>

              <li>
                <Link to="/care-care" className="navbar-link" data-nav-link>
                  Car Care
                </Link>
              </li>
              <li>
                <Link
                  to="/service-packages"
                  className="navbar-link"
                  data-nav-link
                >
                  Service Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/extended-warranty"
                  className="navbar-link"
                  data-nav-link
                >
                  Extended Warranty
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="navbar-link" data-nav-link>
                  Insurance
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="header-contact">
              <Link to="tel:+917909200001" className="contact-link">
                +91 7909200001
              </Link>

              <span className="contact-time">Mon - Sat: 9:00 am - 6:00 pm</span>
            </div>

            <Link
              to="#featured-car"
              className="btn"
              aria-labelledby="aria-label-txt"
            >
              <ion-icon name="car-outline"></ion-icon>

              <span id="aria-label-txt">Explore Cars</span>
            </Link>

            <Link to="#" className="btn user-btn" aria-label="Profile">
              <ion-icon name="person-outline"></ion-icon>
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
