import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/assets/logo/light-logo.png"
// icons

import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

function Footer() {
  return (
    <footer className="footer bg-theme-black4 pt-5">
      <div className="container">
        <div className="grid md:grid-cols-5  gap-x-10 gap-y-5 mb-10">
          <div className="col-span-2 ">
            <Link to="/" className="logo mb-2">
              <div className="h-16 w-16 md:h-20 md:w-20">
                <img
                  loading="lazy"
                  className="h-full w-full object-cover"
                  src={logo}
                  alt="Ridex logo"
                />
              </div>
            </Link>

            <p className="footer-text">
              Urban Garage is the destination that you’ve been looking for all
              this time. Comprising of the most enthralling lineup of pre-owned
              luxury cars, We offer a car ecosystem to cater all your automotive
              needs, ensuring complete satisfaction and fulfillment.
            </p>
          </div>
          {/* quick link  */}
          <div className="flex flex-col ">
            <li>
              <p className="footer-list-title">Quick Links</p>
            </li>

            <li>
              <Link
                to="/turtle-wax-products"
                className="footer-link flex items-center gap-x-1"
              >
                <span>Turtle Wax Products</span>
                <span>
                  <HiOutlineExternalLink />
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/recent-work"
                className="footer-link flex items-center gap-x-1"
              >
                <span>Recent Work</span>
                <span>
                  <HiOutlineExternalLink />
                </span>
              </Link>
            </li>

            <li>
              <Link
                to={"/ppf"}
                className="footer-link flex items-center gap-x-1"
              >
                <span>PPF</span>
                <span>
                  <HiOutlineExternalLink />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/coating"}
                className="footer-link flex items-center gap-x-1"
              >
                <span>Coating</span>
                <span>
                  <HiOutlineExternalLink />
                </span>
              </Link>
            </li>
          </div>
          {/* Service  */}
          <div className=" flex flex-col ">
            <li>
              <p className="footer-list-title">Services</p>
            </li>

            <li>
              <Link to="/buy" className="footer-link flex items-center gap-x-1">
                <span>Buy</span>
                <span>
                  <HiOutlineExternalLink />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/sell"
                className="footer-link flex items-center gap-x-1"
              >
                <span>Sell</span>
                <span>
                  <HiOutlineExternalLink />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="footer-link flex items-center gap-x-1"
              >
                <span>Services</span>
                <span>
                  <HiOutlineExternalLink />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="footer-link flex items-center gap-x-1"
              >
                <span>About Us</span>
                <span>
                  <HiOutlineExternalLink />
                </span>
              </Link>
            </li>
          </div>
          {/* For Assistance */}
          <div className=" flex flex-col ">
            <li>
              <p className="footer-list-title">For Assistance</p>
            </li>

            <li>
              <Link to="tel:+917744900001" className="footer-link">
                +91 7744900001
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                support@dcbi.in
              </Link>
            </li>
          </div>
        </div>

        <div className="footer-bottom  bg-theme-black3">
          <ul className="social-list">
            <li>
              <Link
                to="https://www.facebook.com/UrbanGarageIndia"
                target="_blank"
                className="social-link"
              >
                <FaFacebook />
              </Link>
            </li>

            <li>
              <Link
                to="https://www.instagram.com/urbangarageindia"
                target="_blank"
                className="social-link"
              >
                <FaInstagram />
              </Link>
            </li>

            <li>
              <Link to="#" target="_blank" className="social-link">
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link to="#" target="_blank" className="social-link">
                <FaYoutube />
              </Link>
            </li>

            <li>
              <Link to="#" target="_blank" className="social-link">
                <FaSquareXTwitter />
              </Link>
            </li>

            <li>
              <Link to="#" className="social-link">
                <ion-icon name="mail-outline"></ion-icon>
              </Link>
            </li>
          </ul>

          <p className="copyright">
            &copy; 2023{" "}
            <Link
              className="hover:text-red-600 text-theme-semibold navbar-link"
              to="/"
            >
              Urban Garage
            </Link>
            . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
