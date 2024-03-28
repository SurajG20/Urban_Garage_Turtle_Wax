import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
  FaSquareXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer bg-theme-white">
      <div className="container">
        <div className="grid grid-cols-5  gap-x-10 mb-10">
          <div className="col-span-2">
            <Link to="/" className="logo">
              <div className="h-20 w-20">
                <img
                  className="h-full w-full object-cover"
                  src="assets/logo/light-logo-2.jpeg"
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

          <div className="flex flex-col gap-2">
            <li>
              <p className="footer-list-title">Quick Links</p>
            </li>

            <li>
              <Link to="#" className="footer-link">
                About Us
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                Blog
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                LR Assurance
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                LR Buy Back
              </Link>
            </li>
          </div>

          <div className=" flex flex-col gap-2">
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
          <div className=" flex flex-col gap-2">
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

        <div className="footer-bottom">
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
