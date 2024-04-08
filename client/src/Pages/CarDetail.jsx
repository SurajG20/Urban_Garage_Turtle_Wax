import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import data from "../server.json";
import { Link } from "react-router-dom";
import Image from "../utils/Image";
import errImg from "../../public/assets/loading.jpeg";
console.log(errImg);
// icons
// import { TiTick } from "react-icons/ti";
// import { FaBlenderPhone } from "react-icons/fa";
// import { FaCar } from "react-icons/fa";
// import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

function CarDetail() {
  const { id } = useParams();
  const [carDetail, setCarDetail] = useState({});
  useEffect(() => {
    // Assuming id needs to be converted to the same type as your car ids
    const carId = parseInt(id, 10); // Convert to integer if your ids are integers
    // Or const carId = id; if your ids are already strings

    // Find the car with the matching id
    const foundCar = data.cars.find((car) => car._id == carId);

    // Set the found car to state
    if (foundCar) {
      setCarDetail(foundCar);
    }
  }, [id]);

  return (
    <>
      {/* <Navbar /> */}
      <nav className="container p-4 text-white  bg-theme-black4">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="">
            <Link
              to={"/buy"}
              className="flex gap-2 items-center hover:underline"
            >
              <span>
                <FaArrowLeftLong />
              </span>

              <span className="text-theme-semibold">Back to all cars</span>
            </Link>
          </div>
          <div className="text-center">
            <span className="text-theme-red h3 text-theme-bold">
              URBAN GARAGE
            </span>
          </div>
          <div></div>
        </div>
      </nav>
      <main>
        <article>
          <section className="section">
            <div className="container">
              <div className="mb-10 grid md:grid-cols-2 gap-x-10 text-white">
                <div className="mb-5 flex flex-col gap-y-3">
                  <div className="text-theme-red md:h2 h3 text-center md:text-start">
                    {carDetail.name}
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-5 text-center gap-5 md:gap-3">
                    <div>
                      <div className="text-theme-500 text-gray-400">
                        Regd.Year
                      </div>
                      <div className="text-theme-semibold">
                        {carDetail.modelyear}
                      </div>
                    </div>
                    <div>
                      <div className="text-theme-500 text-gray-400">
                        Req.State
                      </div>
                      <div className="text-theme-semibold">{carDetail.reg}</div>
                    </div>
                    <div>
                      <div className="text-theme-500 text-gray-400">
                        KMs Driven
                      </div>
                      <div className="text-theme-semibold">{carDetail.kms}</div>
                    </div>
                    <div>
                      <div className="text-theme-500 text-gray-400">
                        Ownership
                      </div>
                      <div className="text-theme-semibold">
                        {carDetail.owner}
                      </div>
                    </div>
                    <div>
                      <div className="text-theme-500 text-gray-400">
                        Fuel Type
                      </div>
                      <div className="text-theme-semibold">
                        {carDetail.fuel}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-5 items-start">
                  {/* card 1 */}
                  <div className="flex flex-col items-center md:items-start justify-between gap-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-theme-500 text-gray-400">IND</span>
                      <span className="h3 text-them-semibold text-theme-bold text-theme-red">
                        91,90,000
                      </span>
                      <span>/-</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <span className="text-theme-500 text-gray-400">
                        <IoShieldCheckmark />
                      </span>
                      <span className="text-md text-them-semibold text-theme-semibold ">
                        Inclusions & Benefits
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <span className="text-theme-500 text-gray-400">
                        <IoLocation />
                      </span>
                      <span className="text-md text-them-semibold text-theme-semibold ">
                        Uttar Pradesh
                      </span>
                    </div>
                  </div>
                  {/* card 2 */}
                  <div className="md:col-span-2 flex flex-col md:flex-row gap-2 justify-center items-center">
                    <button className="px-5 w-full py-2 text-theme-semibold bg-theme-red rounded-md">
                      Book Test Drive
                    </button>
                    <button className="py-2 w-full px-5 bg-theme-white text-theme-semibold text-black rounded-md">
                      E-Book Now
                    </button>
                  </div>
                </div>
              </div>
              {/* main  Page content */}
              <div className="md:h-[75vh] md:grid md:grid-cols-8 gap-5">
                {/* images grid  */}
                <div className="h-full w-full md:col-span-2 flex md:flex-col gap-2 overflow-x-auto md md:overflow-y-auto">
                  <div className="flex-shrink-0 md:h-36 w-48 md:w-full">
                    <Image
                      src="https://content.helloviewer.io/1920/64a024fb8d6ab54f4d2e0bfe/bb274b7d-c277-49e0-a6a3-b5296f65e5e0/slot/3.jpg"
                      alt="Urban Garage Car"
                      onError={errImg}
                    />
                  </div>
                  <div className="flex-shrink-0 md:h-36 w-48 md:w-full">
                    <Image
                      src="https://content.helloviewer.io/1920/64a024fb8d6ab54f4d2e0bfe/bb274b7d-c277-49e0-a6a3-b5296f65e5e0/slot/3.jpg"
                      alt="Urban Garage Car"
                      onError={errImg}
                    />
                  </div>
                  <div className="flex-shrink-0 md:h-36 w-48 md:w-full">
                    <Image
                      src="https://content.helloviewer.io/1920/64a024fb8d6ab54f4d2e0bfe/bb274b7d-c277-49e0-a6a3-b5296f65e5e0/slot/3.jpg"
                      alt="Urban Garage Car"
                      onError={errImg}
                    />
                  </div>
                </div>

                {/* image container  */}
                <div className="col-span-6 h-64 md:h-[75vh]">
                  <img
                    className="h-full w-full object-cover object-center"
                    src={
                      carDetail.img && carDetail.img.length > 0
                        ? carDetail.img[0]
                        : errImg
                    }
                    alt={`Urban Garage ${carDetail.name}`}
                    // Ensure image scales correctly
                  />
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default CarDetail;
