import React from "react";
import { Row, Col } from "reactstrap";
import "../Packages.css";

export default function Packages() {
  return (
    <div>
     

      <div className="con-body">
        <div className="contact-form row">
          <div className="col-md-6 first-container">
            <div className="info-container">
              <h3 className="info-h3">Booking</h3>
              <h1 className="info-h1">Online Booking</h1>

              <div>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                  Tempor erat elitr rebum at clita.
                </p>
              </div>
              <button className="btn_div">READ MORE</button>
            </div>
          </div>
          <div className="second-container col-md-6">
            <h2>Book A Tour</h2>
            <form>
              <div className="form mb-5">
                {/* <label for="name-input">Tell us your name*</label> */}
                <input
                  id="name-input"
                  type="text"
                  placeholder="First name"
                  required="required"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  required="required"
                />
              </div>
              <div className="form mb-5">
                <input
                  id="email-input"
                  type="text"
                  placeholder="Eg. example@email.com"
                  required="required"
                />
                <input
                  id="phone-input"
                  type="text"
                  placeholder="Eg. +1 800 000000"
                  required="required"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message-textarea"
                  placeholder="Write us a message"
                ></textarea>
              </div>
              <div className="btn form">
                <button placeholder="button" className="btn_div">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
