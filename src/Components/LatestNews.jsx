import React from "react";

const LatestNews = () => {
  return (
    <div
      style={{ background: "#256bb0", height: "auto", overflow: "hidden" }}
      className=" p-2 in-block d-flex"
    >
      <div
        className="btn btn fw-bolder fs-5 mx-3"
        style={{ background: "#f6921e", color: "#ffff" }}
      >
        اخر الاخبار
      </div>
      <div>
        <p className="text text-light fs-6">
          احمد بقي مدير شركة مونوسبيس للبرمجيات
        </p>
      </div>
    </div>
  );
};

export default LatestNews;
