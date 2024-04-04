import React, { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

function Banner() {
  const [tab, setTab] = useState(true);
  return (
    <>
      <div className="hidden fixed bottom-10 right-10 md:flex items-center gap-2">
        <div className="bg-white p-3 rounded-lg hover:cursor-pointer">
          <FaWhatsapp className="text-3xl text-gray-800" />
        </div>
        <div className="bg-white p-3 rounded-lg hover:cursor-pointer">
          <IoCall className="text-3xl text-gray-800" />
        </div>
        <div className="absolute top-0" onClick={() => setTab(false)}>
          <RxCross2 />
        </div>
      </div>
      <div className="fixed md:hidden z-50 bottom-2 w-full px-2">
        <button className="px-8 py-3 w-full bg-blue-800 text-white">Book Now</button>
      </div>
    </>
  );
}

export default Banner;
