import React, { useState } from "react";
import "./Carousel.css";
import Img from "assets/slider.png";

const Carousel = () => {
  const [image, setImage] = useState();
  const [createObjectURL, setCreateObjectURL] = useState();

  const uploadToClient = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  console.log(image);
  console.log(createObjectURL);
  return (
    <section className="carousel">
      <h2>أضف صوره</h2>
      <form className="form">
        <input type="file" accept="image/*" onChange={uploadToClient} />
        <button type="submit" className="btn btn-primary">
          أضف
        </button>
      </form>
      <h2>أحذف صوره</h2>
      <div className="deleteImg">
        <img src={Img} alt="" />
        <span>أحذف</span>
      </div>
      <div className="deleteImg">
        <img src={Img} alt="" />
        <span>أحذف</span>
      </div>
    </section>
  );
};

export default Carousel;
