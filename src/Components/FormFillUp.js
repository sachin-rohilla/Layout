import React from "react";
import "./FormFillUp.css";
const FormFillUp = () => {
  return (
    <>
      <div className="form-flex">
        <div className="main">
          <div>
            <input type="text" placeholder="Your Name" className="input1" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="input2"
            />
          </div>
          <div>
            <select name="name" id="" className="input3">
              <option value="Select Services"> Select Services</option>
              <option value="Select Services"> Aid</option>
            </select>
          </div>
          <div>
            <button className="form-btn1">Enquiry</button>
          </div>
          <div>
            <button className="form-btn2">Book an appoinment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormFillUp;
