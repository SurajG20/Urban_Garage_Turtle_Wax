import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import data from "../server.json";
import { Link } from "react-router-dom";
import Image from "../utils/Image";
import errImg from "../../public/assets/loading.jpeg";
import { useCarContext } from "../CarsContent";

// Ebook Content
import axios from "axios";
import { useMutation } from "react-query";
import Modal from "./EbookNow";
import Preloader from "../components/Preloader";
// icons
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

// import { FaBlenderPhone } from "react-icons/fa";
// import { FaCar } from "react-icons/fa";
// import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

function CarDetail() {
  const { cars } = useCarContext();
  const { id } = useParams();
  const [tab, setTab] = useState(0);
  const [carDetail, setCarDetail] = useState({});

  // E-book button
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //  Model content

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    carBrand: "",
    modelYear: "",
    fuelType: "",
    budget: "",
  });

  // Setup mutation using React Query and Axios
  const formMutation = useMutation((data) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/buyCar-users`, data);
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formMutation.mutate(formData, {
      onSuccess: (response) => {
        console.log("Success:", response);
        setFormData({
          fullName: "",
          mobileNumber: "",
          carBrand: "",
          modelYear: "",
          fuelType: "",
          budget: "",
        });
      },
      onError: (error) => {
        console.error("Error:", error);
        // Handle errors, e.g., show error notifications
      },
    });
  };

  if (!cars.length) {
    return (
      <>
        <Preloader message="please wait ...." />
      </>
    );
  }

  useEffect(() => {
    // To debug and see your cars data
    const carId = parseInt(id, 10);

    const foundCar = cars.find((car) => car._id == id); //

    if (foundCar) {
      console.log("Found car:", foundCar);
      setCarDetail(foundCar);
    }
  }, [id, cars]); // Include 'id' and 'cars' in the dependency array

  if (!carDetail) {
    return (
      <>
        <Preloader message="please wait ...." />
      </>
    );
  }

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
                  <div className="uppercase tracking-wider text-theme-red text-theme-bold md:h2 h3 text-center md:text-start">
                    {carDetail?.name}
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-5 text-center gap-5 md:gap-3">
                    <div>
                      <div className="text-theme-500 text-gray-400">
                        Reg.Year
                      </div>
                      <div className="text-theme-semibold">
                        {carDetail?.modelyear}
                      </div>
                    </div>
                    <div>
                      <div className="text-theme-500 text-gray-400">
                        Req.State
                      </div>
                      <div className="text-theme-semiboldn uppercase">
                        {carDetail?.reg}
                      </div>
                    </div>
                    <div>
                      <div className="text-theme-500 text-gray-400">
                        KMs Driven
                      </div>
                      <div className="text-theme-semibold">
                        {carDetail?.kms}
                      </div>
                    </div>
                    <div>
                      <div className="text-theme-500 text-gray-400">
                        Ownership
                      </div>
                      <div className="text-theme-semibold">
                        {carDetail?.owner}
                      </div>
                    </div>
                    <div>
                      <div className="text-theme-500 text-gray-400">
                        Fuel Type
                      </div>
                      <div className="text-theme-semibold">
                        {carDetail?.fuel}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-5 items-start">
                  {/* card 1 */}
                  <div className="flex flex-col items-center md:items-start justify-between gap-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-theme-500 text-gray-400 whitespace-nowrap">
                        ₹ IND
                      </span>
                      <span className="h3 text-them-semibold text-theme-bold text-theme-red">
                        {carDetail?.price}
                      </span>
                      <span>/-</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <span className="text-theme-500 text-gray-400">
                        <IoShieldCheckmark className="text-theme-red" />
                      </span>
                      <span className="text-md text-them-semibold text-theme-semibold ">
                        Inclusions & Benefits
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <span className="text-theme-500 text-gray-400">
                        <IoLocation className="text-theme-red" />
                      </span>
                      <span className="text-md text-them-semibold text-theme-semibold uppercase">
                        Uttar Pradesh
                      </span>
                    </div>
                  </div>
                  {/* card 2 */}
                  <div className="md:col-span-2 grid grid-cols-2 gap-2 gap-y-5 justify-center items-center">
                    <div className="col-span-2 grid grid-cols-2 gap-2 items-center justify-center w-full">
                      <button className="px-5 w-full py-2 text-theme-semibold  bg-theme-red rounded-md">
                        Book Test Drive
                      </button>
                      <button
                        onClick={openModal}
                        className="py-2 w-full px-5 bg-theme-white text-theme-semibold text-black rounded-md"
                      >
                        E-Book Now
                      </button>
                    </div>
                    <div className="col-span-2 grid grid-cols-4 gap-2 ">
                      <Link
                        target="_blank"
                        to={""}
                        className="w-full h-full flex justify-center items-center px-3 py-2 bg-blue-600"
                      >
                        <FaFacebookF className="text-lg" />
                      </Link>
                      <Link
                        target="_blank"
                        to={""}
                        className="w-full h-full flex justify-center items-center bg-white text-pink-600"
                      >
                        <FaInstagram className="text-lg" />
                      </Link>
                      <Link
                        target="_blank"
                        to={""}
                        className="w-full h-full flex justify-center items-center bg-green-600"
                      >
                        <FaWhatsapp className="text-lg" />
                      </Link>
                      <Link
                        target="_blank"
                        to={""}
                        className="w-full h-full flex justify-center items-center bg-blue-700"
                      >
                        <IoMdCall className="text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* main  Page content */}
              <div className="md:h-[75vh] md:grid md:grid-cols-8 gap-5 mr-5">
                {/* images grid  */}
                <div className="h-full w-full mr-5 md:col-span-2 p-2 flex md:flex-col gap-5 overflow-x-auto md:overflow-y-auto">
                  {carDetail?.img?.map((url, index) => (
                    <div
                      onClick={() => setTab(index)}
                      key={index}
                      className="flex-shrink-0 md:h-36 w-48 md:w-full border-theme-white hover:cursor-pointer rounded-md overflow-hidden mr-2 hover:shadow-md"
                    >
                      <img
                        src={url}
                        alt={`Urban Garage Car ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>

                {/* image container  */}
                <div className="col-span-6 h-64 md:h-[75vh]">
                  <img
                    className="h-full w-full object-cover object-center"
                    src={
                      carDetail && carDetail.img && carDetail.img.length > 0
                        ? carDetail.img[tab]
                        : errImg
                    }
                    alt={`Urban Garage ${carDetail ? carDetail.name : "Car"}`}
                  />
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <div className="h-full bg-white flex flex-col justify-between p-5 rounded-xl">
          {/* first container  */}
          <div>
            <h3
              className="h2 text-theme-semibold md:flex  gapx-2 py-2 h-12
           items-center "
            >
              <span className="text-black">Please Enter Your </span>
              <span className="text-theme-red font-semibold hover:underline mx-2">
                Car Details
              </span>{" "}
            </h3>
            <p className="text-theme-500 text-theme-red">
              Fields marked with an * are required
            </p>
          </div>
          {/* second container  */}
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5 md:gap-10"
          >
            <div>
              <label
                htmlFor="full-name"
                className="text-theme-500 flex items-center"
              >
                Full Name<span className="text-red-600">*</span>
              </label>
              <input
                required
                name="fullName"
                value={formData.fullName}
                className="px-2 py-2 h-12
               bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="text-theme-500 flex items-center"
              >
                Mobile <span className="text-red-600">*</span>
              </label>
              <input
                required
                name="mobileNumber"
                value={formData.mobileNumber}
                className="px-2 py-2 h-12
               bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
                type="number"
                placeholder="Enter Mobile Number"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="modelYear"
                className="text-theme-500 flex items-center"
              >
                Model Year<span className="text-red-600">*</span>
              </label>
              <input
                disabled
                id="modelYear"
                required
                name="modelYear"
                value={carDetail.modelyear}
                className="px-2 py-2 h-12
               bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
                type="number"
                placeholder="Enter Model Year"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="carBrand"
                className="text-theme-500 flex items-center"
              >
                Car Brand/Car Model<span className="text-red-600">*</span>
              </label>
              <input
                name="carBrand"
                disabled
                value={carDetail.name}
                id="carBrand"
                className="px-2 py-2 h-12
               bg-gray-200 w-full text-lg text-theme-500 border-theme-gray outline-none rounded-md"
                onChange={handleChange}
                placeholder="Enter Car Brand/Car Model"
              />
            </div>

            <div>
              <label
                htmlFor="owner-type"
                className="text-theme-500 flex items-center"
              >
                Fuel Type<span className="text-red-600">*</span>
              </label>
              <input
                required
                name="fuelType"
                value={carDetail.fuel}
                id="fuel-type"
                className="px-2 py-2 h-12
               bg-gray-200 w-full text-lg text-theme-500 border-theme-gray outline-none rounded-md"
                onChange={handleChange}
                placeholder="Enter Fuel Type"
              />
            </div>

            <div>
              <label
                htmlFor="budget"
                className="text-theme-500 flex items-center"
              >
                Budget<span className="text-red-600">*</span>
              </label>
              <input
                id="budget"
                disabled
                required
                name="budget"
                value={carDetail.price}
                className="px-2 py-2 h-12
               bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
                type="text"
                placeholder="Enter Your Budget"
                onChange={handleChange}
              />
            </div>

            <div className="mt-5 ">
              <button
                type="submit"
                className="w-full m-auto px-5 py-2 rounded-lg bg-theme-red text-white text-theme-semibold"
              >
                Submit
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-theme-semibold p-0">URBAN GARAGE !</h3>
              <h2 className="h2  text-theme-bold text-theme-red">Contant Us</h2>
            </div>
          </form>
          {/* third container  */}
        </div>
      </Modal>
    </>
  );
}

export default CarDetail;
