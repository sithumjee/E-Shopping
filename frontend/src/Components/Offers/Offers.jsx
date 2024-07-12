import React from "react";
import "./Offers.css";
import exclusive from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <section className="offers-section">
      <div className="offers">
        <div className="offers-left">
          <h1>Limited Time Deals</h1>
          <p>Don't miss out on our exclusive offers!</p>
          <button className="offers-btn">Shop Now</button>
        </div>

        <div className="offers-right">
          <img src={exclusive} alt="Exclusive Offer" />
        </div>
      </div>
    </section>
  );
};

export default Offers;
