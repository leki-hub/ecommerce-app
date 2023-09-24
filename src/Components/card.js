import React from "react";

import { BsSearchHeart} from "react-icons/bs";


function Card({ img ,title, star,HalfStar,reviews, oldPrice, newPrice })  {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {HalfStar}
            <span className="reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{oldPrice}</del> {newPrice}
            </div>
            <div className="view">
              <BsSearchHeart className="view-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;