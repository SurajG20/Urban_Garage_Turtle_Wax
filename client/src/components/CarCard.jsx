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
          <h3 className="text-lg card-title text-theme-bold">
            <Link to="#">Toyota RAV4</Link>
          </h3>

          {/* <data className="year" value="2022">
            2022
          </data> */}
        </div>

        <ul className="card-list">
          <li className="card-list-item flex flex-col">
            <span className="card-item-text text-theme-500 text-xs">
              Reg. Year
            </span>
            <span className="text-black text-theme-500">2022</span>
          </li>

          <li className="card-list-item flex flex-col">
            <span className="card-item-text text-theme-500 text-xs">
              Kms Driven
            </span>
            <span className="text-black text-theme-500">46,979</span>
          </li>

          <li className="card-list-item flex flex-col">
            <span className="card-item-text text-theme-500 text-xs">Fuel</span>
            <span className="text-black text-theme-500">2022</span>
          </li>
        </ul>

        <div className="card-price-wrapper">
          <div>
            <p className="text-sm ">INR</p>
            <p className="card-price text-sm flex gap-x-1 font-bold text-theme-blue">
              <span>11400000</span>
              <span>/-</span>
            </p>
          </div>

          <div>
            <p className="text-sm flex gap-x-1">
              <span className="text-sm">EMI starting from </span>
              <span className="text-sm text-theme-blue">INR</span>
            </p>
            <p className="card-price text-sm flex gap-x-1  text-theme-blue">
              <span>2,46,913</span>
              <span>/-</span>
            </p>
          </div>

          {/* <button className="btn fav-btn" aria-label="Add to favourite list">
            <ion-icon name="heart-outline"></ion-icon>
          </button> */}

          {/* <button className="btn">Alugue agora</button> */}
        </div>
      </div>
    </div>
  );
}

export default CarCard