import React, { useState } from "react";
import "./Now.css";

const Now = () => {
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
    <section className="now">
      <h2>أضافه صوره</h2>
      <form className="form">
        <input type="file" accept="image/*" onChange={uploadToClient} />
        <button type="submit" className="btn btn-primary">
          أضافه
        </button>
      </form>
      <h2>تغيير الصوره</h2>
      <form className="form">
        <input type="file" accept="image/*" onChange={uploadToClient} />
        <button type="submit" className="btn btn-primary">
          تغيير
        </button>
      </form>
    </section>
  );
};

export default Now;
