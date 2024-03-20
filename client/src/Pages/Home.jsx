import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";

function Home() {
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
                <li>
                  <CarCard />
                </li>

                <li>
                  <div className="featured-car-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/car-2.jpg"
                        alt="BMW 3 Series 2019"
                        loading="lazy"
                        width="440"
                        height="300"
                        className="w-100"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-title-wrapper">
                        <h3 className="h3 card-title">
                          <Link to="#">Toyota RAV4</Link>
                        </h3>

                        <data className="year" value="2022">
                          2022
                        </data>
                      </div>

                      <ul className="card-list">
                        <li className="card-list-item">
                          <ion-icon name="people-outline"></ion-icon>

                          <span className="card-item-text">4 Pessoas</span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="flash-outline"></ion-icon>

                          <span className="card-item-text">Híbrido</span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="speedometer-outline"></ion-icon>

                          <span className="card-item-text">
                            6.1km / 1-litro
                          </span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="hardware-chip-outline"></ion-icon>

                          <span className="card-item-text">Automático</span>
                        </li>
                      </ul>

                      <div className="card-price-wrapper">
                        <p className="card-price">
                          <strong>R$440</strong> / mês
                        </p>

                        <button
                          className="btn fav-btn"
                          aria-label="Add to favourite list"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn">Alugue agora</button>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="featured-car-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/car-3.jpg"
                        alt="Volkswagen T-Cross 2020"
                        loading="lazy"
                        width="440"
                        height="300"
                        className="w-100"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-title-wrapper">
                        <h3 className="h3 card-title">
                          <Link to="#">Toyota RAV4</Link>
                        </h3>

                        <data className="year" value="2022">
                          2022
                        </data>
                      </div>

                      <ul className="card-list">
                        <li className="card-list-item">
                          <ion-icon name="people-outline"></ion-icon>

                          <span className="card-item-text">4 Pessoas</span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="flash-outline"></ion-icon>

                          <span className="card-item-text">Híbrido</span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="speedometer-outline"></ion-icon>

                          <span className="card-item-text">
                            6.1km / 1-litro
                          </span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="hardware-chip-outline"></ion-icon>

                          <span className="card-item-text">Automático</span>
                        </li>
                      </ul>

                      <div className="card-price-wrapper">
                        <p className="card-price">
                          <strong>R$440</strong> / mês
                        </p>

                        <button
                          className="btn fav-btn"
                          aria-label="Add to favourite list"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn">Alugue agora</button>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="featured-car-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/car-4.jpg"
                        alt="Cadillac Escalade 2020"
                        loading="lazy"
                        width="440"
                        height="300"
                        className="w-100"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-title-wrapper">
                        <h3 className="h3 card-title">
                          <Link to="#">Toyota RAV4</Link>
                        </h3>

                        <data className="year" value="2022">
                          2022
                        </data>
                      </div>

                      <ul className="card-list">
                        <li className="card-list-item">
                          <ion-icon name="people-outline"></ion-icon>

                          <span className="card-item-text">4 Pessoas</span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="flash-outline"></ion-icon>

                          <span className="card-item-text">Híbrido</span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="speedometer-outline"></ion-icon>

                          <span className="card-item-text">
                            6.1km / 1-litro
                          </span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="hardware-chip-outline"></ion-icon>

                          <span className="card-item-text">Automático</span>
                        </li>
                      </ul>

                      <div className="card-price-wrapper">
                        <p className="card-price">
                          <strong>R$440</strong> / mês
                        </p>

                        <button
                          className="btn fav-btn"
                          aria-label="Add to favourite list"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn">Alugue agora</button>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="featured-car-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/car-5.jpg"
                        alt="BMW 4 Series GTI 2022"
                        loading="lazy"
                        width="440"
                        height="300"
                        className="w-100"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-title-wrapper">
                        <h3 className="h3 card-title">
                          <Link to="#">Toyota RAV4</Link>
                        </h3>

                        <data className="year" value="2022">
                          2022
                        </data>
                      </div>

                      <ul className="card-list">
                        <li className="card-list-item">
                          <ion-icon name="people-outline"></ion-icon>

                          <span className="card-item-text">4 Pessoas</span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="flash-outline"></ion-icon>

                          <span className="card-item-text">Híbrido</span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="speedometer-outline"></ion-icon>

                          <span className="card-item-text">
                            6.1km / 1-litro
                          </span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="hardware-chip-outline"></ion-icon>

                          <span className="card-item-text">Automático</span>
                        </li>
                      </ul>

                      <div className="card-price-wrapper">
                        <p className="card-price">
                          <strong>R$440</strong> / mês
                        </p>

                        <button
                          className="btn fav-btn"
                          aria-label="Add to favourite list"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn">Alugue agora</button>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="featured-car-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/car-6.jpg"
                        alt="BMW 4 Series 2019"
                        loading="lazy"
                        width="440"
                        height="300"
                        className="w-100"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-title-wrapper">
                        <h3 className="h3 card-title">
                          <Link to="#">Toyota RAV4</Link>
                        </h3>

                        <data className="year" value="2022">
                          2022
                        </data>
                      </div>

                      <ul className="card-list">
                        <li className="card-list-item">
                          <ion-icon name="people-outline"></ion-icon>

                          <span className="card-item-text">4 Pessoas</span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="flash-outline"></ion-icon>

                          <span className="card-item-text">Híbrido</span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="speedometer-outline"></ion-icon>

                          <span className="card-item-text">
                            6.1km / 1-litro
                          </span>
                        </li>

                        <li className="card-list-item">
                          <ion-icon name="hardware-chip-outline"></ion-icon>

                          <span className="card-item-text">Automático</span>
                        </li>
                      </ul>

                      <div className="card-price-wrapper">
                        <p className="card-price">
                          <strong>R$440</strong> / mês
                        </p>

                        <button
                          className="btn fav-btn"
                          aria-label="Add to favourite list"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button className="btn">Alugue agora</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* <!-- 
        - #GET START
      --> */}

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
                          src="./assets/images/blog-1.jpg"
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

                          <time datetime="2022-01-14">
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

                          <time datetime="2022-01-14">Janeiro 14, 2022</time>
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

                          <time datetime="2022-01-14">Janeiro 14, 2022</time>
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

                          <time datetime="2022-01-14">Janeiro 14, 2022</time>
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

                          <time datetime="2022-01-14">Janeiro 14, 2022</time>
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
