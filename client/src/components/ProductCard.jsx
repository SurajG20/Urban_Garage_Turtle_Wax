import React from "react";
import { Link } from "react-router-dom";
function ProductCard({ item }) {
  return (
    <div className="featured-car-card  border-2 shadow-lg border-gray-900 hover:shadow-xl hover:border-gray-200 ">
      <figure className="card-banner">
        <div className="">
          <img
            src={`${item.imgURL ? item.imgURL : "assets/loading.jpeg"}`}
            alt="Urban Garage Car"
            loading="lazy"
            className="h-full w-full  object-cover object-center"
          />
        </div>
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
              Reg. Year
            </span>
            <span className="text-black text-theme-500">
              {item.reg_year ? item.reg_year : "---"}
            </span>
          </li>
        </ul>

        <div className="card-price-wrapper">
          <div>
            <p className="text-sm ">INR</p>
            <p className="card-price text-sm flex gap-x-1 font-bold text-theme-red">
              <span>{item.price ? item.price : "---"}</span>
              <span>/-</span>
            </p>
          </div>

          <button className="btn fav-btn" aria-label="Add to favourite list">
            Buy Now
          </button>

          {/* <button className="btn">Alugue agora</button> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
