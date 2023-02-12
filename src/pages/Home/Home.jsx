import React from "react";
import "./home.css";
import CarouselImg from "../../assets/img/شعار_العاصمة_لوغو (2).png";
import Img1 from "../../assets/img/3288_1672577065.png";
import Small from "../../assets/img/Untitled-1.png";
// import LatestNews from "../../Components/LatestNews";
import Carousel from "../../Components/Carousel";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      {/* <LatestNews /> */}
      <Carousel />
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
                  <li style={{listStyle:'none', width:'100%'}} className="clearfix">
                    <a
                      className="m-thumbnail"
                      style={{ width: "230px", height: "130px" }}
                    >
                      <img width="250" className="rounded-3" height="130" src={Small} alt=""  />
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
                                float: "right",width: "60px",height: "30px",marginLeft: "10px",}}
                              alt="#" src={Small} className="rounded-3"
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
                                float: "right",width: "60px",height: "30px",marginLeft: "10px",}}
                              alt="#" src={Small} className="rounded-3"
                            />

                            <h3
                              className="news-title"
                              style={{ textAlign: "right" }}
                            >
                              <a>
                                <font color="#b77b22"></font>
                              </a>
                              &nbsp;&nbsp; <a  className="text-light" href="">لسة الصبح</a>
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
                                float: "right",width: "60px",height: "30px",marginLeft: "10px",}}
                              alt="#" src={Small} className="rounded-3"
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
                                float: "right",width: "60px",height: "30px",marginLeft: "10px",}}
                              alt="#" src={Small} className="rounded-3"
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
