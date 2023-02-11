import React from "react";

const LatestNews = () => {
  return (
    <div
    style={{ background: "#256bb0", height: "auto", overflow: "hidden" }}
    className="p-2 in-block d-flex latest-news-container"
  >
    <div
      className="btn btn fw-bolder fs-5 mx-3"
      style={{
        background: "#f6921e",
        color: "#ffff",
        zIndex: "100",
        minWidth: "112px",
      }}
    >
      اخر الاخبار
    </div>
    <marquee className="latest-news">
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
        quaerat.
      </span>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cumque
        hic dolores ducimus distinctio! Delectus!
      </span>
      <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint sequi
        eaque quisquam inventore!
      </span>
    </marquee>
  </div>
  );
};

export default LatestNews;
