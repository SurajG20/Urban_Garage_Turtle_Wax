import React from "react";
import { Link } from "react-router-dom";

// icons
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

function Banner() {
  return (
    <div className="fixed bottom-10 right-10 flex items-center gap-2">
      <div className="bg-green-700 p-3 rounded-lg hover:cursor-pointer">
        <FaWhatsapp className="text-4xl text-white" />
      </div>
      <div className="bg-blue-600 p-4 rounded-lg hover:cursor-pointer">
        <IoCall className="text-3xl text-white" />
      </div>
    </div>
  );
}

export default Banner;
