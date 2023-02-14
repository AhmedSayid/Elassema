import React, { useState } from "react";
import "./news.css";

const News = () => {
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
    <section className="news">
      <h2>أضافه خبر</h2>
      <form className="form">
        <h3 dir="rtl">الصوره</h3>
        <input type="file" accept="image/*" onChange={uploadToClient} />
        <h3 dir="rtl">العنوان</h3>
        <input type="text" name="name" placeholder="العنوان" />
        <h3 dir="rtl">الوصف</h3>
        <input type="text" name="name" placeholder="الوصف" />
        <button type="submit" className="btn btn-primary">
          أضافه
        </button>
      </form>
      <h2>تعديل خبر</h2>
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
        <h3 dir="rtl">الوصف</h3>
        <input
          type="text"
          name="name"
          placeholder="الوصف"
          defaultValue="HHHHH"
        />
        <button type="submit" className="btn btn-primary">
          تعديل
        </button>
      </form>
      <h2>حذف خبر</h2>
      <div className="deleteWork">
        <h3 dir="rtl">العنوان</h3>
        <span>حذف</span>
      </div>
    </section>
  );
};

export default News;
