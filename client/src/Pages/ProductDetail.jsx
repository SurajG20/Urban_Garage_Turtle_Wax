import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import data from "../server.json";
import { Link } from "react-router-dom";
import Image from "../utils/Image";
import errImg from "../../public/assets/loading.jpeg";
import { useProductContext } from "../ProductContext";

// Ebook Content
import axios from "axios";
import { useMutation } from "react-query";
import Modal from "./EbookNow";
import Preloader from "../components/Preloader";
// icons
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { SuccessAlert, ErrorAlert, LoadingAlert } from "../components/Alerts";
import { FaArrowLeftLong } from "react-icons/fa6";


function ProductDetail() {
  const { products, isLoading, isError, error } = useProductContext();
  const { id } = useParams();
  const [tab, setTab] = useState(0);
  const [productDetail, setProductDetail] = useState({});

  // E-book button
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //  Model content

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    name: "",
    modelNumber: "",
    price: "",
  });

  // Setup mutation using React Query and Axios
  const formMutation = useMutation((data) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/product-customer`, data);
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
        setFormData({
          fullName: "",
          mobileNumber: "",
          name: "",
          modelNumber: "",
          price: "",
        });
        closeModal();
      },
      onError: (error) => {
        console.error("Error:", error);
        // Handle errors, e.g., show error notifications
      },
    });
  };

  if (!products.length) {
    return (
      <>
        <Preloader message="Loading ...." />
      </>
    );
  }

  useEffect(() => {
    // const carId = parseInt(id, 10);
    const foundProduct = products.find((product) => product._id == id); //
   
    if (foundProduct) {
      setProductDetail(foundProduct);
      setFormData({
        fullName: "",
        mobileNumber: "",
        name: foundProduct.name,
        modelNumber: foundProduct.modelNumber,
        price: foundProduct.price,
      });
    } else {
      setFormData({
        fullName: "",
        mobileNumber: "",
        name: "",
        modelNumber: "",
        price: "",
      });
    }
  }, [id, products]);

  if (!productDetail) {
    return (
      <>
        <Preloader message="please wait ...." />
      </>
    );
  }

  return (
    <>
      <>
        {formMutation.isLoading && (
          <LoadingAlert msg="Loading... Please wait" />
        )}
        {formMutation.isSuccess && (
          <SuccessAlert msg="Form submission successful!" />
        )}
        {formMutation.isError && <ErrorAlert msg="Failed! Try again..." />}
      </>
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
              <div className="mb-10 grid md:grid-cols-3 gap-x-10 gap-y-2 text-white">
                {/* card 1 */}
                <div className="mb-5 flex flex-col gap-y-5">
                  <div className="uppercase tracking-wider text-theme-red text-theme-bold md:h2 h3 text-center md:text-start">
                    {productDetail?.name}
                  </div>

                  <div className="text-start md:gap-3 flex gap-5 items-center">
                    <span className="text-3xl">₹</span>
                    <span className=" text-3xl">{productDetail?.price}</span>
                    <span className=" text-3xl">/-</span>
                  </div>
                </div>
                <div className="flex gap-2 justify-start">
                  <span className="text-theme-semibold text-lg">
                    Product Model Number :
                  </span>
                  <span>{productDetail?.modelNumber}</span>
                </div>
                {/* card 2 */}
                <div className="flex md:justify-end gap-5 items-center ">
                  {/* card 2 */}
                  <div className="md:col-span-2 grid grid-cols-2 gap-2 gap-y-5 justify-center items-center">
                    <div className="col-span-2 grid grid-cols-2 gap-2 items-center justify-center w-full">
                      <Link to={"/contact-us"}>
                        <button className="px-5 w-full py-2 text-theme-semibold  bg-theme-red rounded-md">
                          Connect with us
                        </button>
                      </Link>
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
                        to={"https://www.facebook.com/UrbanGarageIndia"}
                        className="w-full h-full flex justify-center items-center px-3 py-2 bg-blue-600"
                      >
                        <FaFacebookF className="text-lg" />
                      </Link>
                      <Link
                        target="_blank"
                        to={"https://www.instagram.com/urbangarageindia/"}
                        className="w-full h-full flex justify-center items-center bg-white text-pink-600"
                      >
                        <FaInstagram className="text-lg" />
                      </Link>
                      <Link
                        to="https://wa.me/917744900001"
                        target="_blank"
                        className="w-full h-full flex justify-center items-center bg-green-600"
                      >
                        <FaWhatsapp className="text-lg" />
                      </Link>
                      <Link
                        target="_blank"
                        to="tel:+917744900001"
                        className="w-full h-full flex justify-center items-center bg-blue-700"
                      >
                        <IoMdCall className="text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* main  Page content */}
              <div className="md:h-[75vh] mb-10 md:grid md:grid-cols-12 gap-2 gap-y-5 ">
                {/* images grid  */}
                <div className="h-full mb-5 w-full md:col-span-3 flex md:flex-col gap-2 p-1 overflow-x-auto md:overflow-y-auto">
                  {productDetail?.img?.map((url, index) => (
                    <div
                      onClick={() => setTab(index)}
                      key={index}
                      className="flex-shrink-0 theme-border-white h-36 md:h-40 w-42 md:w-full border-theme-white hover:cursor-pointer rounded-md overflow-hidden relative group"
                    >
                      <img
                        loading="lazy"
                        src={url}
                        alt={`Urban Garage Car ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Animated red overlay */}

                      {/* <div className="absolute inset-0 bg-white transform translate-y-full opacity-10 group-hover:translate-y-0 transition-transform duration-300 ease-out"></div> */}
                    </div>
                  ))}
                </div>

                {/* image container  */}
                <div className="col-span-9 h-72 md:h-[75vh] theme-border-white rounded-md overflow-hidden">
                  <img
                    loading="laxy"
                    className="h-full w-full object-cover object-center"
                    src={
                      productDetail &&
                      productDetail.img &&
                      productDetail.img.length > 0
                        ? productDetail.img[tab]
                        : errImg
                    }
                    alt={`Urban Garage ${
                      productDetail ? productDetail.name : "Car"
                    }`}
                  />
                </div>
              </div>
              <div>
                <p>
                  <span className="text-theme-bold">Description:</span>{" "}
                  <ul>
                    <li>{productDetail?.description}</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <div className="h-full mt-28 md:mt-0 bg-white flex flex-col justify-between md:p-4 rounded-2xl">
          {/* first container  */}
          <div className="">
            <h3
              className="h2 mb-8 md:mb-4 text-theme-semibold  md:flex flex-col md:flex-row gap-x-2 py-1 h-12
           items-center "
            >
              <span className="text-black">Please Enter Your </span>
              <span className="text-theme-red font-semibold hover:underline mx-2">
                Product Details
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
            {/* name */}
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
            {/* contact number  */}
            <div>
              <label
                htmlFor="mobileNumber"
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
            {/* product name  */}
            <div>
              <label
                htmlFor="name"
                className="text-theme-500 flex items-center"
              >
                Product Name<span className="text-red-600">*</span>
              </label>
              <input
                disabled
                id="name"
                required
                name="name"
                defaultValue={productDetail.name}
                className="px-2 py-2 h-12
               bg-gray-200 text-lg text-theme-500 border-theme-gray outline-none rounded-md"
                type="string"
                placeholder="Enter Product Name"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="carBrand"
                className="text-theme-500 flex items-center"
              >
                Price <span className="text-red-600">*</span>
              </label>
              <input
                name="price"
                disabled
                value={productDetail.price}
                id="carBrand"
                className="px-2 py-2 h-12
               bg-gray-200 w-full text-lg text-theme-500 border-theme-gray outline-none rounded-md"
                onChange={handleChange}
                placeholder="Enter Car Brand/Car Model"
              />
            </div>

            <div className="mt-5 ">
              {formMutation.isLoading ? (
                <button
                  type="button"
                  className="bg-theme-red text-white w-full  md:flex justify-center items-center py-2 px-5 rounded-lg"
                  disabled
                >
                  <svg
                    className="h-6 w-8 animate-spin stroke-white"
                    viewBox="0 0 256 256"
                  >
                    <line
                      x1="128"
                      y1="32"
                      x2="128"
                      y2="64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="195.9"
                      y1="60.1"
                      x2="173.3"
                      y2="82.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="224"
                      y1="128"
                      x2="192"
                      y2="128"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="195.9"
                      y1="195.9"
                      x2="173.3"
                      y2="173.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="128"
                      y1="224"
                      x2="128"
                      y2="192"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="60.1"
                      y1="195.9"
                      x2="82.7"
                      y2="173.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="32"
                      y1="128"
                      x2="64"
                      y2="128"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="60.1"
                      y1="60.1"
                      x2="82.7"
                      y2="82.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                  </svg>
                  Processing...
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-theme-red text-white py-2 px-8 rounded-lg"
                >
                  Submit
                </button>
              )}
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-theme-semibold p-0">URBAN GARAGE !</h3>
              <Link to={"/contact-us"}>
                <h2 className="h2  text-theme-bold text-theme-red">
                  Contact Us
                </h2>
              </Link>
            </div>
          </form>
          {/* third container  */}
        </div>
      </Modal>
    </>
  );
}

export default ProductDetail;
