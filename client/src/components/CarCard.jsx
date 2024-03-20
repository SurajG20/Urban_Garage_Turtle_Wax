import React from 'react'
import { Link } from 'react-router-dom';
function CarCard() {
  return (
    <div className="featured-car-card">
      <figure className="card-banner">
        <img
          src="./assets/images/car-1.jpg"
          alt="Toyota RAV4 2022"
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

            <span className="card-item-text">6.1km / 1-litro</span>
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

          <button className="btn fav-btn" aria-label="Add to favourite list">
            <ion-icon name="heart-outline"></ion-icon>
          </button>

          <button className="btn">Alugue agora</button>
        </div>
      </div>
    </div>
  );
}

export default CarCard