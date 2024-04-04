import React, { useState } from "react";
import { Link } from "react-router-dom";

// Correctly import icons
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; // Assuming this is the close icon you intended

function Banner() {
  const [tab, setTab] = useState(true);

  return (
    <>
      {tab && (
        <div className="hidden fixed bottom-10 right-10 md:flex flex-row items-center gap-2">
          <a href="https://wa.me/917744900001">
            <div className="bg-white p-3 rounded-lg hover:cursor-pointer">
              <FaWhatsapp className="text-3xl text-gray-800" />
            </div>
          </a>
          <a href="tel:917744900001">
            <div className="bg-white p-3 rounded-lg hover:cursor-pointer">
              <IoCall className="text-3xl text-gray-800" />
            </div>
          </a>
          <div
            className="absolute -top-5 bg-white -right-5 rounded-lg hover:cursor-pointer"
            onClick={() => setTab(false)}
          >
            <AiOutlineClose className="text-gray-800 text-xl" />
          </div>
        </div>
      )}

      <div className="fixed md:hidden z-50 bottom-2 w-full px-2">
        <Link to="/contact-us">
          <button className="px-8 py-3 w-full bg-red-800 text-white">
            Book Now
          </button>
        </Link>
      </div>
    </>
  );
}

export default Banner;
