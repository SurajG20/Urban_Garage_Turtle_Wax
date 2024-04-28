import { useState } from "react";

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
              src={"/assets/logo/light-logo.png"}
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
                  src={"/assets/logo/light-logo.png"}
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
            <li>
              <Link
                to="/turtle-wax-products"
                className="mobile-nav-link text-theme-500"
                data-nav-link
              >
                Turtle Wax Products
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
          <div className=" flex gap-2 items-center">
            {" "}
            <Link to={"/add-car"}>
              <button
                type="submit"
                className="bg-theme-red text-white hover:bg-white hover:text-theme-red py-2 px-8 rounded-lg"
              >
                Add Car
              </button>
            </Link>
          
            <Link to={"/add-product"}>
              <button
                type="submit"
                className="bg-theme-red text-white hover:bg-white hover:text-theme-red py-2 px-8 rounded-lg"
              >
                Add Products
              </button>
            </Link>
          
          </div>

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
