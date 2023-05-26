import React from "react";
import { Row, Col } from "reactstrap";
import "../Packages.css";
import package1 from "../img/package-1.jpg";
import package2 from "../img/package-2.jpg";
import package3 from "../img/package-3.jpg";

export default function Packages() {
  return (
    <div>
      <div className="destination_header">
        <span>packages</span>
        <h1>Our Packages</h1>
      </div>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Row>
            <Col md={4}>
              <div className="widget-container center">
                <div className="card">
                  <div className="card-top">
                    <img className="main-image" src={package1} alt="crd" />
                    <span className="likes">
                      <i className="fas fa-heart"></i> 189
                    </span>
                    <div className="card-sidenav">
                      <div className="btn-next center">
                        <i className="fas fa-chevron-right"></i>
                      </div>
                      <div className="btn-previous center">
                        <i className="fas fa-chevron-left"></i>
                      </div>
                      <div className="score center">9.2</div>
                    </div>
                  </div>
                  <div className="card-description row">
                    <div className="col-md-7">
                      <div className="hotel-name">
                        Hacienda Xamena
                        <span className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </span>
                      </div>
                      <div className="hotel-location">
                        San Miguel, Ibiza (ES)
                      </div>
                    </div>
                    <div className="col-md-5 center-vertically">
                      <button className="book-button">BOOK NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="widget-container center">
                <div className="card">
                  <div className="card-top">
                    <img
                      className="main-image"
                      //   src="https://www.pro-voyages.com/storage/app/uploads/public/5b4/dd8/036/5b4dd80365bad827588706.jpg"
                      src={package2}
                      alt="crd"
                    />
                    <span className="likes">
                      <i className="fas fa-heart"></i> 189
                    </span>
                    <div className="card-sidenav">
                      <div className="btn-next center">
                        <i className="fas fa-chevron-right"></i>
                      </div>
                      <div className="btn-previous center">
                        <i className="fas fa-chevron-left"></i>
                      </div>
                      <div className="score center">9.2</div>
                    </div>
                  </div>
                  <div className="card-description row">
                    <div className="col-md-7">
                      <div className="hotel-name">
                        Hacienda Xamena
                        <span className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </span>
                      </div>
                      <div className="hotel-location">
                        San Miguel, Ibiza (ES)
                      </div>
                    </div>
                    <div className="col-md-5 center-vertically">
                      <button className="book-button">BOOK NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="widget-container center ">
                <div className="card inner">
                  <div className="card-top">
                    <img
                      className="main-image"
                      //   src="https://www.pro-voyages.com/storage/app/uploads/public/5b4/dd8/036/5b4dd80365bad827588706.jpg"
                      src={package3}
                      alt="crd"
                    />
                    <span className="likes">
                      <i className="fas fa-heart"></i> 189
                    </span>
                    <div className="card-sidenav">
                      <div className="btn-next center">
                        <i className="fas fa-chevron-right"></i>
                      </div>
                      <div className="btn-previous center">
                        <i className="fas fa-chevron-left"></i>
                      </div>
                      <div className="score center">9.2</div>
                    </div>
                  </div>
                  <div className="card-description row">
                    <div className="col-md-7">
                      <div className="hotel-name">
                        Hacienda Xamena
                        <span className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </span>
                      </div>
                      <div className="hotel-location">
                        San Miguel, Ibiza (ES)
                      </div>
                    </div>
                    <div className="col-md-5 center-vertically">
                      <button className="book-button">BOOK NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col md={1}></Col>
      </Row>
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
