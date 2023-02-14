import React, { useState } from "react";
import "./recordings.css";

const Recordings = () => {
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
    <section className="recordings">
      <h2>أضافه تسجيل</h2>
      <form className="form">
        <h3 dir="rtl">صوره التسجيل</h3>
        <input type="file" accept="image/*" onChange={uploadToClient} />
        <h3 dir="rtl">اسم التسجيل</h3>
        <input type="text" name="name" placeholder="اسم" />
        <button type="submit" className="btn btn-primary">
          أضافه
        </button>
      </form>
      <h2>تعديل علي برنامج</h2>
      <form className="form">
        <h3 dir="rtl">صوره السجيل</h3>
        <input type="file" accept="image/*" onChange={uploadToClient} />
        <h3 dir="rtl">اسم التسجيل</h3>
        <input
          type="text"
          name="name"
          placeholder="اسم"
          defaultValue="hgfjgjgj"
        />
        <button type="submit" className="btn btn-primary">
          تعديل
        </button>
      </form>
      <h2>حذف تسجيل</h2>
      <div className="deleteWork">
        <h3 dir="rtl">اسم التسجيل</h3>
        <span>حذف</span>
      </div>
    </section>
  );
};

export default Recordings;
