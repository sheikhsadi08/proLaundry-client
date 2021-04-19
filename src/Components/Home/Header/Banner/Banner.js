import React from "react";
import './Banner.css';
import BannerImage from "../../../../Images/banner.jpeg";

const Banner = () => {
  return (
    <div className="banner-container d-flex align-items-center">
      <div className="col-md-6">
        <h1>Laundry Service & Dry Cleaning</h1>
        <p>We Care for the Clothes You Wear.</p>
        <p>Cleaning Excellence Guaranteed!</p>
        <button className="button-primary">Order Now</button>
      </div>

      <div className="image-container col-md-6">
          <img src={BannerImage} alt=""/>
      </div>
    </div>
  );
};

export default Banner;
