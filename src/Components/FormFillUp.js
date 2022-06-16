import React from "react";
import "./FormFillUp.css";
const FormFillUp = () => {
  return (
    <>
      <div className="main">
        <div className="phone">
        <p className="para1">+91-7015920486</p>
        <p className="para2"> or fill Out below from to enquire</p>
        <p className="para3">Lorem ipsum dolor sit amet consectetur a cumque.</p>
        </div>
        <input type="text" placeholder="Your Name" className="input1" />
        <input type="text" placeholder="Your Phone Number" className="input2" />

        <select name="name" id="" className="input3">
          <option value="Select Services"> Select Services</option>
          <option value="Select Services"> Aid</option>
        </select>

        <button className="form-btn1">Enquiry</button>
        <button className="form-btn2">Book an appoinment</button>
      </div>
    </>
  );
};

export default FormFillUp;
