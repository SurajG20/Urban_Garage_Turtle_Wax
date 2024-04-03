import React from "react";
import { Link } from "react-router-dom";
function CarCard({ item }) {
  return (
    <div className="featured-car-card border-2 shadow-lg border-gray-900 hover:shadow-xl hover:border-gray-200">
      <figure className="card-banner">
        <img
          src={`${item.img ? item.img[0] : "assets/loading.jpeg"}`}
          alt="Urban Garage Car"
          loading="lazy"
          width="440"
          height="300"
          className="w-100"
        />
      </figure>

      <div className="card-content">
        <div className="card-title-wrapper">
          <h3 className="text-lg card-title text-theme-bold">
            <Link to={`/car-detail/${item._id}`}>
              {item.name ? item.name : "---"}
            </Link>
          </h3>

          {/* <data className="year" value="2022">
            2022
          </data> */}
        </div>

        <ul className="card-list">
          <li className="card-list-item flex flex-col">
            <span className="card-item-text text-theme-500 text-xs">
              Reg.year
            </span>
            <span className="text-black text-theme-500">
              {item.modelyear ? item.modelyear : "---"}
            </span>
          </li>

          <li className="card-list-item flex flex-col">
            <span className="card-item-text text-theme-500 text-xs">
              Kms Driven
            </span>
            <span className="text-black text-theme-500">
              {item.kms ? item.kms : "---"}
            </span>
          </li>

          <li className="card-list-item flex flex-col">
            <span className="card-item-text text-theme-500 text-xs">Fuel</span>
            <span className="text-black text-theme-500">
              {item.fuel ? item.fuel : "---"}
            </span>
          </li>
        </ul>

        <div className="card-price-wrapper">
          <div>
            <p className="text-sm ">INR</p>
            <p className="card-price text-sm flex gap-x-1 font-bold text-theme-blue">
              <span>{item.price ? item.price : "---"}</span>
              <span>/-</span>
            </p>
          </div>

          <div>
            <p className="text-sm flex gap-x-1">
              <span className="text-sm">EMI starting from </span>
              <span className="text-sm text-theme-blue">INR</span>
            </p>
            <p className="card-price text-sm flex gap-x-1  text-theme-blue">
              <span>{item.emi ? item.emi : "---"}</span>
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

export default CarCard;
