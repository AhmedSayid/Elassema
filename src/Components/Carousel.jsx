import React from "react";
import Img from "../assets/img/شعار_العاصمة_لوغو (2).png";

const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Img} className="d-block w-100 h-25" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Img} className="d-block w-100 h-25" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Img} className="d-block w-100 h-25" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
