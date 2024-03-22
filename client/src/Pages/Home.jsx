import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CarCard from "../components/CarCard";

import data from "../server.json";
import { Link } from "react-router-dom";

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

          <section className="section" id="hero-banber">
            <div className="container">
              <div className="relative grid grid-cols-1 md:grid-cols-2">
                <div className="absolute h-full w-full">
                  <img
                    className="h-full w-full object-cover object-left"
                    src="https://www.motoroids.com/wp-content/uploads/2020/09/auto-terrence-web-banner-home.jpg"
                    alt=""
                  />
                </div>
                <div></div>
                <div>
                  <div className="mb-2">
                    <h3 className="text-theme-semibold font-semibold text-xl">
                      Why Choose
                    </h3>
                    <h2 className="text-theme-bold font-bold text-2xl">
                      Luxury Ride!
                    </h2>
                  </div>
                  <div className="mb-2">
                    <p className="text-theme-500">
                      Luxury Ride is a one stop destination for the Foremost,
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
                        <li>Unparalleled Variety Of Pre-Owned Luxury Cars</li>
                        <li>PAN India Delivery</li>
                        <li>In House Service Available</li>
                        <li>350+ Check Evaluations</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-theme-500">
                        <li>15 Day Money Back Guarantee</li>
                        <li>30 Day or 1000 KMs Consumables Warranty</li>
                        <li>1/2/3 Year Buy Back Facility</li>
                        <li>100% Certified Cars</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* hero Banner section End  */}

          <section className="section get-start">
            <div className="container">
              <h2 className="h2 section-title">Comece com 4 passos simples</h2>

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
