import { useState } from "react";
import "./contact.css";
import "./../../assets/css/animate.min.css";
import axios from "axios";
const Contact = () => {
  let [data, setData] = useState({});
  const addData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const send = () => {
    axios
      .post("https://elassema.herokuapp.com/sendNewContact", data)
      .then((res) => console.log(res));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-dark fs-1 animate__animated animate__lightSpeedInRight">contact us</h1>
        </div>
        <div className="row">
          <h4 class="text-dark" style={{ textAlign: "center" }}>We'd love to hear from you!</h4>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" style={{ backgroundColor: '#2d2d2d', padding: '30px', width:'100%' }} required name="Name" onChange={addData} />
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" style={{ backgroundColor: '#2d2d2d', padding: '30px', width:'100%' }} required name="Email" onChange={addData} />
              <label>Email</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: "right" }}>
              <input type="text" style={{ backgroundColor: '#2d2d2d', padding: '30px', width:'100%' }} required name="Phone" onChange={addData} />
              <label>Phone Number</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
            <textarea
              required
              defaultValue={""}
              name="Massage"
              onChange={addData}
            />
            <label>Message</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="btn-lrg submit-btn" onClick={send}>
            Send Message
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
// const send = () => {
// fetch('https://elassema.herokuapp.com/sendNewContact',{
//     method:'POST',
//     const body = {Email:'teast@gmail.com',Massage:'hello world',Name:'Ahmed',Phone:'01028887119'};
//     const Mybody = JSON.stringify(obj);
//    /*  */
// }).then((res)=>{return res.json()}).then((data)=>{
//     // if success
//     console.log(data)
// })
// };
export default Contact;
