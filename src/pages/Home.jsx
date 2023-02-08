/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CarouselImg from "../assets/img/شعار_العاصمة_لوغو (2).png";
import Img1 from "../assets/img/3288_1672577065.png";
import Small from "../assets/img/small.jpg";
import "../Components/Home/Home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
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
          <span>احمد بقي مدير شركة مونوسبيس للبرمجيات</span>
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
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={CarouselImg} className="d-block w-100 h-25" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={CarouselImg} className="d-block w-100 h-25" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={CarouselImg} className="d-block w-100 h-25" alt="..." />
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="row row-fluid clearfix mbf">
          <div className="col-sm-12 col-md-6">
            <div className="def-block text-light" style={{ marginTop: "20px" }}>
              <h4>بث مباشر من داخل استوديوهات راديو العاصمة</h4>
              <span className="liner"></span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  className="bg-light rounded mb-3"
                  style={{ width: "400px", height: "200px" }}
                ></div>
              </div>
            </div>
            {/* <!--==================================
                    هيكون فوق هنا ف فيديو عادي مكان الديف اللى لونه ابيض
                ===================================--> */}
            <div className="def-block" style={{ marginTop: "20px" }}>
              <a>
                <h4>أخبار راديو العاصمة</h4>
              </a>
              <span className="liner"></span>
              <Fade left cascade>
                <div
                  className="news row-fluid  animate__animated animate__fadeInUp"
                  data-gen="fadeUp"
                >
                  <div className="span7">
                    <h3 className="news-title">
                      {" "}
                      <a href="ndetails.php?p=6403">
                        افصل واسمع.. أماكن الزحام والطرق البديلة{" "}
                      </a>{" "}
                    </h3>

                    <div style={{ clear: "both" }}></div>
                    <p>
                      شهدت معدلات حركة سير السيارات خلال فترة الذروة المسائية
                      بعض الكثافات ...
                    </p>
                  </div>
                  <a>
                    <div className="span5">
                      <img
                        style={{
                          height: "100px",
                          width: "90%",
                          marginLeft: "10px",
                        }}
                        className="rounded-3"
                        src={Img1}
                        alt="افصل واسمع.. أماكن الزحام والطرق البديلة "
                      />
                    </div>
                  </a>
                </div>
                {/*
                <!--==================================
                    الخبر الاول 
                ===================================-->
                <!-----------> 
              */}
                <div
                  className="news row-fluid animate__animated"
                  data-gen="fadeUp"
                >
                  <div className="span7">
                    <h3 className="news-title">
                      {" "}
                      <a href="ndetails.php?p=6403">
                        افصل واسمع.. أماكن الزحام والطرق البديلة{" "}
                      </a>{" "}
                    </h3>

                    <div style={{ clear: "both" }}></div>
                    <p>
                      شهدت معدلات حركة سير السيارات خلال فترة الذروة المسائية
                      بعض الكثافات ...
                    </p>
                  </div>
                  <a>
                    <div className="span5">
                      <img
                        style={{
                          height: "100px",
                          width: "90%",
                          marginLeft: "10px",
                        }}
                        className="rounded-3"
                        src={Img1}
                        alt="افصل واسمع.. أماكن الزحام والطرق البديلة "
                      />
                    </div>
                  </a>
                </div>
                {/* <!--==================================
                            الخبر التاني 
                        ===================================-->
                    <!-----------> */}
                <div
                  className="news row-fluid animate__animated "
                  data-gen="fadeUp"
                >
                  <div className="span7">
                    <h3 className="news-title">
                      {" "}
                      <a href="ndetails.php?p=6403">
                        افصل واسمع.. أماكن الزحام والطرق البديلة{" "}
                      </a>{" "}
                    </h3>

                    <div style={{ clear: "both" }}></div>
                    <p>
                      شهدت معدلات حركة سير السيارات خلال فترة الذروة المسائية
                      بعض الكثافات ...
                    </p>
                  </div>
                  <a>
                    <div className="span5">
                      <img
                        style={{
                          height: "100px",
                          width: "90%",
                          marginLeft: "10px",
                        }}
                        className="rounded-3"
                        src={Img1}
                        alt="افصل واسمع.. أماكن الزحام والطرق البديلة "
                      />
                    </div>
                  </a>
                </div>
                {/* <!----------->
                    <!--==================================
                            الخبر التالت 
                        ===================================--> */}
              </Fade>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="def-block" style={{ marginTop: "20px" }}>
              <div className="content" id="playing_now">
                <ul className="tab-content-items">
                  <li className="clearfix">
                    <a
                      className="m-thumbnail"
                      style={{ width: "130px", height: "130px" }}
                    >
                      <img width="130" height="130" src="{{}}" alt="" />
                    </a>

                    <h2>
                      <font color="#188aa5">يذاع الآن</font>{" "}
                      <a style={{ float: "left" }}>
                        <h3>
                          <font color="#b77b22"></font>
                        </h3>
                      </a>
                    </h2>
                  </li>
                </ul>
              </div>
            </div>

            <div className="def-block" style={{ marginTop: "20px" }}>
              <div className="widget-content row-fluid">
                <div
                  className="scroll-mp3"
                  tabindex="5000"
                  style={{ overflow: "hidden", outline: "none" }}
                >
                  <div className="content">
                    <ul className="tab-content-items">
                      <li className="clearfix">
                        <div
                          className="news row-fluid animtt fadeUp"
                          data-gen="fadeUp"
                          style={{ padding: "0px", margin: "0px" }}
                        >
                          <div className="span9">
                            <img
                              style={{
                                float: "right",
                                width: "40px",
                                height: "30px",
                                marginLeft: "10px",
                              }}
                              alt="#"
                            />

                            <h3
                              className="news-title"
                              style={{ textAlign: "right" }}
                            >
                              <a>
                                <font color="#b77b22"></font>
                              </a>
                              &nbsp;&nbsp; <a>صباحك ومطرحك</a>
                            </h3>
                          </div>
                          <div className="span2">07:00</div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div
                          className="news row-fluid animtt fadeUp"
                          data-gen="fadeUp"
                          style={{ padding: "0px", margin: "0px" }}
                        >
                          <div className="span9">
                            <img
                              style={{
                                float: "right",
                                width: "40px",
                                height: "30px",
                                marginLeft: "10px",
                              }}
                              alt="#"
                            />

                            <h3
                              className="news-title"
                              style={{ textAlign: "right" }}
                            >
                              <a>
                                <font color="#b77b22"></font>
                              </a>
                              &nbsp;&nbsp; <a href="">لسة الصبح</a>
                            </h3>
                          </div>
                          <div className="span2">09:00</div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div
                          className="news row-fluid animtt fadeUp"
                          data-gen="fadeUp"
                          style={{ padding: "0px", margin: "0px" }}
                        >
                          <div className="span9">
                            <img
                              style={{
                                float: "right",
                                width: "40px",
                                height: "30px",
                                marginLeft: "10px",
                              }}
                              alt="#"
                            />

                            <h3
                              className="news-title"
                              style={{ textAlign: "right" }}
                            >
                              <a href="bdetails.php?p=,176,">
                                <font color="#b77b22"></font>
                              </a>
                              &nbsp;&nbsp; <>اسمع مني</>
                            </h3>
                          </div>
                          <div className="span2">11:15</div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div
                          className="news row-fluid animtt fadeUp"
                          data-gen="fadeUp"
                          style={{ padding: "0px", margin: "0px" }}
                        >
                          <div className="span9">
                            <img
                              style={{
                                float: "right",
                                width: "40px",
                                height: "30px",
                                marginLeft: "10px",
                              }}
                              alt="#"
                            />

                            <h3
                              className="news-title"
                              style={{ textAlign: "right" }}
                            >
                              <a>
                                <font color="#b77b22"></font>
                              </a>
                              &nbsp;&nbsp; <a>المانيفستو</a>
                            </h3>
                          </div>
                          <div className="span2">12:00</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <center>
                  {" "}
                  <br />
                  <h4 className="news-title">
                    {" "}
                    <a>جدول البرامج</a>
                  </h4>
                </center>
              </div>
            </div>

            <div className="def-block" style={{ marginTop: "20px" }}>
              <h4>تسجيلات</h4>
              <span className="liner"></span>

              <div
                className="news row-fluid animtt fadeUp"
                data-gen="fadeUp"
                style={{ padding: "0px" }}
              >
                <div className="span9">
                  <h3 className="news-title">
                    {" "}
                    <a>
                      أول توقيع لمواطن مصرى على الجنيه | اسمع مني مع داليا
                      الخطيب
                    </a>{" "}
                  </h3>
                </div>
                <a
                  style={{
                    float: "right",
                    height: "50px",
                    width: "100px",
                    marginLeft: "10px",
                  }}
                  href="archive.php?f=9889"
                >
                  <div>
                    <img
                      style={{
                        height: "50px",
                        width: "100px",
                      }}
                      src={Small}
                      className="four-radius rounded-3"
                      alt=".."
                    />
                  </div>
                </a>
              </div>
              {/* <!--------> */}

              <div
                className="news row-fluid animtt fadeUp"
                data-gen="fadeUp"
                style={{ padding: "0px" }}
              >
                <div className="span9">
                  <h3 className="news-title">
                    {" "}
                    <a>
                      أول توقيع لمواطن مصرى على الجنيه | اسمع مني مع داليا
                      الخطيب
                    </a>{" "}
                  </h3>
                </div>
                <a
                  style={{
                    float: "right",
                    height: "50px",
                    width: "100px",
                    marginLeft: "10px",
                  }}
                  href="archive.php?f=9889"
                >
                  <div>
                    <img
                      style={{
                        height: "50px",
                        width: "100px",
                      }}
                      src={Small}
                      className="four-radius rounded-3"
                      alt=".."
                    />
                  </div>
                </a>
              </div>
              {/* <!--------> */}

              <div
                className="news row-fluid animtt fadeUp"
                data-gen="fadeUp"
                style={{ padding: "0px" }}
              >
                <div className="span9">
                  <h3 className="news-title">
                    {" "}
                    <a>
                      أول توقيع لمواطن مصرى على الجنيه | اسمع مني مع داليا
                      الخطيب
                    </a>{" "}
                  </h3>
                </div>
                <a
                  style={{
                    float: "right",
                    height: "50px",
                    width: "100px",
                    marginLeft: "10px",
                  }}
                  href="archive.php?f=9889"
                >
                  <div>
                    <img
                      style={{
                        height: "50px",
                        width: "100px",
                      }}
                      src={Small}
                      className="four-radius rounded-3"
                      alt=".."
                    />
                  </div>
                </a>
              </div>
              {/* <!--------> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
