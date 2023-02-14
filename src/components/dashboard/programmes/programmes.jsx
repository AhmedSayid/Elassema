import React, { useState } from "react";
import "./programmes.css";

const Programmes = () => {
  return (
    <section className="programmes">
      <h2>أضافه برنامج</h2>
      <form className="form">
        <h3 dir="rtl">اسم البرنامج</h3>
        <input type="text" name="name" placeholder="اسم" />
        <h3 dir="rtl">اسم الذيع</h3>
        <input type="text" name="name" placeholder="المذيع" />
        <h3 dir="rtl">وقت البرنامج</h3>
        <input type="text" name="name" placeholder="الوقت" />
        <button type="submit" className="btn btn-primary">
          أضافه
        </button>
      </form>
      <h2>تعديل علي برنامج</h2>
      <form className="form">
        <h3 dir="rtl">اسم البرنامج</h3>
        <input type="text" name="name" placeholder="اسم" defaultValue="HHHH" />
        <h3 dir="rtl">اسم الذيع</h3>
        <input
          type="text"
          name="name"
          placeholder="المذيع"
          defaultValue="HHHH"
        />
        <h3 dir="rtl">وقت البرنامج</h3>
        <input
          type="text"
          name="name"
          placeholder="الوقت"
          defaultValue="HHHH"
        />
        <button type="submit" className="btn btn-primary">
          تعديل
        </button>
      </form>
      <h2>حذف برنامج</h2>
      <div className="deleteWork">
        <h3 dir="rtl">اسم البرنامج</h3>
        <span>حذف</span>
      </div>
    </section>
  );
};

export default Programmes;
