import React, { useState } from "react";
import "./Broadcast.css";

const Broadcast = () => {
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
    <section className="broadcast">
      <h2>أضافه مقطع البث</h2>
      <form className="form">
        <input type="file" accept="video/*" onChange={uploadToClient} />
        <button type="submit" className="btn btn-primary">
          أضافه
        </button>
      </form>
      <h2>تغيير المقطع</h2>
      <form className="form">
        <input type="file" accept="video/*" onChange={uploadToClient} />
        <button type="submit" className="btn btn-primary">
          تغيير
        </button>
      </form>
    </section>
  );
};

export default Broadcast;
