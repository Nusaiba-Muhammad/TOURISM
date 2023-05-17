import React from "react";
import { Row, Col, Button } from "reactstrap";
import image from "./img/about.jpg";

export default function Card() {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <Row>
        <Col md={2}></Col>
        <Col md={4}>
          <img src={image} alt="img" id="lll" />
        </Col>
        <Col md={4} className="section">
          <h6>ABOUT US</h6>
          <h1>
            Welcome to <span className="tourist">Tourist</span>
          </h1>
          <p className="paragraph mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit. Tempor erat
            elitr rebum at clita. Diam dolor diam ipsum sit.
          </p>
          <p className="paragraph mb-4">
            {" "}
            Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
            stet lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="row  mb-4">
            <div className="d-flex justify-content-between ">
              <IconWithText
                icon={<i className="fa-solid fa-arrow-right fa-lg"></i>}
                text=" First class Flights"
              />
              <IconWithText
                icon={<i className="fa-solid fa-arrow-right fa-lg"></i>}
                text=" First class Flights"
              />
            </div>
            <div className="d-flex justify-content-between">
              <IconWithText
                icon={<i className="fa-solid fa-arrow-right fa-lg"></i>}
                text=" First class Flights"
              />
              <IconWithText
                icon={<i className="fa-solid fa-arrow-right fa-lg"></i>}
                text=" First class Flights"
              />
            </div>
            <div className="d-flex justify-content-between ">
              <IconWithText
                icon={<i className="fa-solid fa-arrow-right fa-lg"></i>}
                text=" First class Flights"
              />
              <IconWithText
                icon={<i className="fa-solid fa-arrow-right fa-lg"></i>}
                text=" First class Flights"
              />
            </div>
          </div>
          <button className="about_button">Read More</button>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
}

export function IconWithText({ icon, text }) {
  return (
    <div className="d-flex">
      <div className="mr-4" style={{ color: "#98c33a", marginRight: 20 }}>
        {icon}
      </div>
      <div>{text}</div>
    </div>
  );
}
