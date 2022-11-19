import React from "react";
import bannerImg from '../../../assets/images/logo/bg.png'
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="banner-text text-white text-center">
              <h1>Explore the world together</h1>
              <h3>Find awesome flights, hotel, tour, car and packages</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
