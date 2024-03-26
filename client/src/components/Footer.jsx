import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-theme-white">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
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
              Urban Garadge is the destination that you’ve been looking for all
              this time. Comprising of the most enthralling lineup of pre-owned
              luxury cars, We offer a car ecosystem to cater all your automotive
              needs, ensuring complete satisfaction and fulfillment.
            </p>
          </div>

          <ul className="footer-list">
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
          </ul>

          <ul className="footer-list flex flex-col">
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
          </ul>
        </div>

        <div className="footer-bottom">
          <ul className="social-list">
            <li>
              <Link to="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="#" className="social-link">
                <ion-icon name="logo-skype"></ion-icon>
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
              Urban Garadge
            </Link>
            . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
