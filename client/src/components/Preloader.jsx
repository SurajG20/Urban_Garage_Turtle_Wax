import React from "react";

function Preloader({message="Loading..."}) {
  return (
    <div className="h-screen flex justify-center items-center bg-theme-black text-white">
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <div className="h-24">
          <img
            className="h-full w-full object-cover object-center"
            src="assets/logo/light-logo.png"
            alt="Urban Garage"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center text-theme-semibold">
            URBAN GARAGE
          </h1>
          <h2 className="text-sm font-bold text-center">{message}</h2>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
