import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Discover the Latest Trends</h2>
        <div>
          <div className="hand-hand-icon">
            <p>Trending</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Fashion</p>
          <p>Accessories</p>
        </div>

        <div className="hero-latest-btn">
          <div>Shop Now</div>
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
