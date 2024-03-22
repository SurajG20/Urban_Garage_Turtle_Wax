import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CarCard from "../components/CarCard";

import data from "../server.json";
import { Link } from "react-router-dom";

// icons
import { TiTick } from "react-icons/ti";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(data.cars);
  }, []);

  //  useEffect(() => {
  //    const fetchData = async () => {
  //     fetch("your-api-endpoint")
  //       .then((response) => response.json())
  //       .then((data) => setCars(data.cars));
  //      setCars(data.cars);
  //    };
  //    fetchData();
  //  }, []);

  return (
    <>
      <Navbar />
      <main>
        <article>
          {/* <!-- 
        - #HERO
      --> */}

          <HeroSection />

          {/* <!-- 
        - #FEATURED CAR
      --> */}

          <section className="section featured-car" id="featured-car">
            <div className="container">
              <div className="title-wrapper">
                <h2 className="h2 text-theme-semibold section-title m-auto">
                  Take A Glimpse Of Our Collection
                </h2>
                {/* 
                <Link to="#" className="featured-car-link">
                  <span>Veja mais</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link> */}
              </div>

              <ul className="featured-car-list">
                {cars &&
                  cars.map((item) => (
                    <li key={item._id}>
                      <CarCard item={item} />
                    </li>
                  ))}
              </ul>
            </div>
          </section>

          {/* <!-- 
        - #GET START
      --> */}

          {/* hero Banner section Start  */}

          <section className="section" id="hero-banner">
            <div className="relative h-96">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
                {/* Overlay div */}
                <div className="absolute h-full w-full bg-black opacity-50 -z-10"></div>
                <div className="absolute -z-20 h-full w-full">
                  <img
                    className="h-full w-full object-cover object-left"
                    src="https://www.motoroids.com/wp-content/uploads/2020/09/auto-terrence-web-banner-home.jpg"
                    alt=""
                  />
                </div>
                {/* left container  */}
                <div className="hidden md:flex items-end justify-center">
                  <div className="h-[22rem]">
                    <img
                      className="h-full w-full object-cover object-left"
                      src="https://luxuryride.in/_next/image?url=%2Fimg%2FManmohan-banner.png&w=3840&q=75"
                      alt=""
                    />
                  </div>
                </div>
                {/* right container  */}
                <div className="bg-white p-5 opacity-80">
                  <div className="mb-2">
                    <h3 className="text-theme-semibold font-semibold text-xl">
                      Why Choose
                    </h3>
                    <h2 className="text-theme-bold font-bold text-2xl">
                      URBAN GARADGE!
                    </h2>
                  </div>
                  <div className="mb-2">
                    <p className="text-theme-500">
                      Urban Garadge is a one stop destination for the Foremost,
                      Exclusive and Extravagant Pre-Owned luxury cars. We are
                      here to serve efficiently all across the country with our
                      wide array of products and services equipped by our
                      State-of-the-Art showrooms and Workshops to make your
                      journey easy and lucrative.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-5">
                    <div>
                      <ul className="text-theme-500">
                        <li className="flex items-center">
                          <TiTick className="text-red-500 text-xl" />
                          Urban Garadge
                        </li>
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> PAN India
                          Delivery
                        </li>
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> In House
                          Service Available
                        </li>
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> 350+ Check
                          Evaluations
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-theme-500">
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> 15 Day
                          Money Back Guarantee
                        </li>
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> 30 Day or
                          1000 KMs Consumables Warranty
                        </li>
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> 1/2/3 Year
                          Buy Back Facility
                        </li>
                        <li className="flex items-center">
                          {" "}
                          <TiTick className="text-red-500 text-xl" /> 100%
                          Certified Cars
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* hero Banner section End  */}

          {/* An Exciting Lineup Of Top Brands In Our Showrooms! Start */}
          <section className="section brand" id="brand">
            <div className="container">
              <h2 className="h2 section-title text-center text-theme-semibold">
                An Exciting Lineup Of Top Brands In Our Showrooms!
              </h2>

              <ul className="brand-list has-scrollbar">
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-cover object-center"
                      src="assets/brands/brand1.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand2.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand3.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand4.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand5.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand6.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand7.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full object-contain object-center"
                      src="assets/brands/brand8.png"
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* An Exciting Lineup Of Top Brands In Our Showrooms! End */}

          {/* services  */}
          <section className="section get-start">
            <div className="container">
              <div className="mb-5">
                <h2 className="h2 section-title text-center text-theme-semibold ">
                  Team Urban Garadge Is Dedicated To Delivering Excellence
                </h2>
                <p className="p max-w-3xl m-auto text-center text-theme-500">
                  Our team of highly skilled technicians is specially trained to
                  provide your car with personalized care and luxurious
                  services.
                </p>
              </div>
              <ul className="get-start-list">
                <li>
                  <div className="get-start-card">
                    <div className="card-icon icon-1">
                      <ion-icon name="person-add-outline"></ion-icon>
                    </div>

                    <h3 className="card-title">Crie um perfil</h3>

                    <p className="card-text">
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure.
                    </p>

                    <Link to="#" className="card-link">
                      Iniciar
                    </Link>
                  </div>
                </li>

                <li>
                  <div className="get-start-card">
                    <div className="card-icon icon-2">
                      <ion-icon name="car-outline"></ion-icon>
                    </div>

                    <h3 className="card-title">
                      Diga-nos qual carro você quer
                    </h3>

                    <p className="card-text">
                      Várias versões evoluíram ao longo dos anos, às vezes por
                      acidente, às vezes propositalmente
                    </p>
                  </div>
                </li>

                <li>
                  <div className="get-start-card">
                    <div className="card-icon icon-3">
                      <ion-icon name="person-outline"></ion-icon>
                    </div>

                    <h3 className="card-title">Combine com o vendedor</h3>

                    <p className="card-text">
                      Para fazer um tipo de livro de espécimes. Sobreviveu não
                      apenas cinco séculos, mas também o salto para eletrônico
                    </p>
                  </div>
                </li>

                <li>
                  <div className="get-start-card">
                    <div className="card-icon icon-4">
                      <ion-icon name="card-outline"></ion-icon>
                    </div>

                    <h3 className="card-title">Fazer um acordo</h3>

                    <p className="card-text">
                      Existem muitas variações de passagens de Lorem
                      disponíveis, mas a maioria sofreu alterações
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="get-start-list">
                <li>
                  <div className="get-start-card">
                    <div className="card-icon icon-1">
                      <ion-icon name="person-add-outline"></ion-icon>
                    </div>

                    <h3 className="card-title">Crie um perfil</h3>

                    <p className="card-text">
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure.
                    </p>

                    <Link to="#" className="card-link">
                      Iniciar
                    </Link>
                  </div>
                </li>

                <li>
                  <div className="get-start-card">
                    <div className="card-icon icon-2">
                      <ion-icon name="car-outline"></ion-icon>
                    </div>

                    <h3 className="card-title">
                      Diga-nos qual carro você quer
                    </h3>

                    <p className="card-text">
                      Várias versões evoluíram ao longo dos anos, às vezes por
                      acidente, às vezes propositalmente
                    </p>
                  </div>
                </li>

                <li>
                  <div className="get-start-card">
                    <div className="card-icon icon-3">
                      <ion-icon name="person-outline"></ion-icon>
                    </div>

                    <h3 className="card-title">Combine com o vendedor</h3>

                    <p className="card-text">
                      Para fazer um tipo de livro de espécimes. Sobreviveu não
                      apenas cinco séculos, mas também o salto para eletrônico
                    </p>
                  </div>
                </li>

                <li>
                  <div className="get-start-card">
                    <div className="card-icon icon-4">
                      <ion-icon name="card-outline"></ion-icon>
                    </div>

                    <h3 className="card-title">Fazer um acordo</h3>

                    <p className="card-text">
                      Existem muitas variações de passagens de Lorem
                      disponíveis, mas a maioria sofreu alterações
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="section get-start">
            <div className="container">
              <h2 className="h2 section-title text-center text-theme-semibold">
                Customers Reviews
              </h2>

              <ul className="get-start-list">
                <li>
                  <div className="get-start-card">
                    <div className="card-icon icon-1">
                      <ion-icon name="person-add-outline"></ion-icon>
                    </div>

                    <h3 className="card-title">Crie um perfil</h3>

                    <p className="card-text">
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure.
                    </p>

                    <Link to="#" className="card-link">
                      Iniciar
                    </Link>
                  </div>
                </li>

                <li>
                  <div className="get-start-card">
                    <div className="card-icon icon-2">
                      <ion-icon name="car-outline"></ion-icon>
                    </div>

                    <h3 className="card-title">
                      Diga-nos qual carro você quer
                    </h3>

                    <p className="card-text">
                      Várias versões evoluíram ao longo dos anos, às vezes por
                      acidente, às vezes propositalmente
                    </p>
                  </div>
                </li>

                <li>
                  <div className="get-start-card">
                    <div className="card-icon icon-3">
                      <ion-icon name="person-outline"></ion-icon>
                    </div>

                    <h3 className="card-title">Combine com o vendedor</h3>

                    <p className="card-text">
                      Para fazer um tipo de livro de espécimes. Sobreviveu não
                      apenas cinco séculos, mas também o salto para eletrônico
                    </p>
                  </div>
                </li>

                <li>
                  <div className="get-start-card">
                    <div className="card-icon icon-4">
                      <ion-icon name="card-outline"></ion-icon>
                    </div>

                    <h3 className="card-title">Fazer um acordo</h3>

                    <p className="card-text">
                      Existem muitas variações de passagens de Lorem
                      disponíveis, mas a maioria sofreu alterações
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* <!-- 
        - #BLOG
      --> */}

          <section className="section blog" id="blog">
            <div className="container">
              <h2 className="h2 section-title">Nosso blog</h2>

              <ul className="blog-list has-scrollbar">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="assets/images/blog-1.jpg"
                          alt="Abertura de novos escritórios da empresa"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link to="#" className="btn card-badge">
                        Empresa
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        <Link to="#">
                          Abertura de novos escritórios da empresa
                        </Link>
                      </h3>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">
                            14 de janeiro de 2022
                          </time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="./assets/images/blog-2.jpg"
                          alt="Quais carros são mais vulneráveis"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link to="#" className="btn card-badge">
                        Reparar
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        <Link to="#">Quais carros são mais vulneráveis</Link>
                      </h3>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">Janeiro 14, 2022</time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="./assets/images/blog-3.jpg"
                          alt="As estatísticas mostraram qual idade média"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link to="#" className="btn card-badge">
                        Carros
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        <Link to="#">
                          As estatísticas mostraram qual idade média
                        </Link>
                      </h3>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">Janeiro 14, 2022</time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="./assets/images/blog-4.jpg"
                          alt="O que é necessário ao alugar um carro?"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link to="#" className="btn card-badge">
                        Carros
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        <Link to="#">
                          O que é necessário ao alugar um carro?
                        </Link>
                      </h3>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">Janeiro 14, 2022</time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="#">
                        <img
                          src="./assets/images/blog-5.jpg"
                          alt="Novas regras para lidar com nossos carros"
                          loading="lazy"
                          className="w-100"
                        />
                      </Link>

                      <Link to="#" className="btn card-badge">
                        Empresa
                      </Link>
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        <Link to="#">
                          Novas regras para lidar com nossos carros
                        </Link>
                      </h3>

                      <div className="card-meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline"></ion-icon>

                          <time dateTime="2022-01-14">Janeiro 14, 2022</time>
                        </div>

                        <div className="comments">
                          <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                          <data value="114">114</data>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Home;
