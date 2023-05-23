import React from "react";
import { Row, Col } from "reactstrap";
import "../Packages.css";
import package1 from "../img/package-1.jpg";
import package2 from "../img/package-2.jpg";
import package3 from "../img/package-3.jpg";

export default function Packages() {
  return (
    <div>
      <Row>
        <div className="destination_header">
          <span>packages</span>
          <h1>Our Packages</h1>
        </div>
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
                  <div className="hotel-location">San Miguel, Ibiza (ES)</div>
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
                  <div className="hotel-location">San Miguel, Ibiza (ES)</div>
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
                  <div className="hotel-location">San Miguel, Ibiza (ES)</div>
                </div>
                <div className="col-md-5 center-vertically">
                  <button className="book-button">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
