import React from "react";
import "./LatestNews.css";

const LatestNews = () => {
  return (
    <section className="latestnews">
      <h2>أضف خبر</h2>
      <form className="form">
        <input type="text" name="name" placeholder="Add news" />
        <button type="submit" className="btn btn-primary">
          اضف
        </button>
      </form>
      <h2>عدل علي خبر</h2>
      <form className="form">
        <input
          type="text"
          name="name"
          placeholder="Update news"
          defaultValue="Hello World"
        />
        <button type="submit" className="btn btn-primary">
          عدل
        </button>
      </form>
      <form className="form">
        <input
          type="text"
          name="name"
          placeholder="Update news"
          defaultValue="Hello World"
        />
        <button type="submit" className="btn btn-primary">
          عدل
        </button>
      </form>
      <h2>أخذف خبر</h2>
      <div className="deleteNews">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cum
          ipsa distinctio voluptatibus! Possimus similique recusandae sed
          eveniet optio accusantium temporibus est officiis, alias cumque earum
          vero id quasi ullam?
        </p>
        <span>أحذف</span>
      </div>
      <div className="deleteNews">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cum
          ipsa distinctio voluptatibus! Possimus similique recusandae sed
          eveniet optio accusantium temporibus est officiis, alias cumque earum
          vero id quasi ullam?
        </p>
        <span>أحذف</span>
      </div>
    </section>
  );
};

export default LatestNews;
