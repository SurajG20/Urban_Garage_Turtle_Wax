import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="#" className="logo">
              <div className="h-20 w-20">
                <img
                  className="h-full w-full"
                  src="src/assets/logo/light-logo.jpeg"
                  alt="Ridex logo"
                />
              </div>
            </Link>

            <p className="footer-text">
              Luxury Ride is the destination that you’ve been looking for all
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
              <Link to="#" className="footer-link">
                +91 8410084100
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                info@luxuryride.in
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
            &copy; 2023 <Link to="#">iChumbo</Link>. Todos os direitos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
