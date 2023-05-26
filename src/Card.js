import React from "react";
import { Row, Col } from "reactstrap";
import image from "./img/about.jpg";

export default function Card() {
  return (
    <div className="mt-5 pt-5">
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
            TOURNIJA CONCEPT LTD was founded in 2023 as a company with interest
            in Transport, Tourism and Hospitality, Trading, Catering services,
            Real estate development and Oil and Gas. Over the months we have
            divested into different sectors: Transport, Travel & Tourism (Mass
            Transit) Laundry and Dry cleaning services, Travel agency, Hotels,
            Computer Centre/ ICT.
          </p>

          <p className="paragraph mb-4">
            We are one of the emerging leading companies in Nigeria. In the
            beginning we wanted to create a service concept different from
            others, our transport and travel agency would provide complete
            travel solutions for clients, and an agency which would do more than
            just take clients from Point-A to Point-B and which will provide
            luxury whilst still being competitively priced. For us, the most
            important thing is to provide and ensure client with good treatment,
            professionalism and promptness.
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
