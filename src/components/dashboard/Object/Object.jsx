import React, { useState } from "react";
import "./Object.css";

const ObjectCom = () => {
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
    <section className="object">
      <h2>أضافه الموضوع</h2>
      <form className="form">
        <h3 dir="rtl">الصوره</h3>
        <input type="file" accept="image/*" onChange={uploadToClient} />
        <h3 dir="rtl">العنوان</h3>
        <input type="text" name="name" placeholder="العنوان" />
        <button type="submit" className="btn btn-primary">
          أضافه
        </button>
      </form>
      <h2>تعديل الموضوع</h2>
      <form className="form">
        <h3 dir="rtl">الصوره</h3>
        <input type="file" accept="image/*" onChange={uploadToClient} />
        <h3 dir="rtl">العنوان</h3>
        <input
          type="text"
          name="name"
          placeholder="العنوان"
          defaultValue="HHHHH"
        />
        <button type="submit" className="btn btn-primary">
          تعديل
        </button>
      </form>
      <h2>حذف موضوع</h2>
      <div className="deleteWork">
        <h3 dir="rtl">العنوان</h3>
        <span>حذف</span>
      </div>
    </section>
  );
};

export default ObjectCom;
