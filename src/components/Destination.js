import React from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import photo from "../img/destination-4.jpg";
import pic from "../img/destination-1.jpg";
import des2 from "../img/destination-2.jpg";
import des3 from "../img/destination-3.jpg";
import { Row, Col } from "reactstrap";

export default function Destination() {
  AOS.init();
  return (
    <div>
      <div className="destination_header">
        <span>destination</span>
        <h1>Our Destination</h1>
      </div>
      <Row className="center">
        <Col md={1}></Col>
        <Col md={10}>
          <div className="container" data-aos="fade-up" data-aos-offset="200">
            <div className="img-container-grid">
              <div className="smallsquare">
                <img
                  src={des2}
                  className="img-grid-c"
                  alt="grid"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                />
              </div>
              <div className="smallsquare">
                <img
                  src="https://media.istockphoto.com/photos/view-of-sydney-harbour-australia-picture-id535455441?k=6&m=535455441&s=612x612&w=0&h=jVkW0bOqvffn2SzvUdncgkwHGScJRzak0oaQGij__h8="
                  className="img-grid-c"
                  alt="grid"
                  data-aos="zoom-in-right"
                  data-aos-offset="200"
                />
              </div>
              <div className="h_rectangle">
                <img
                  src={pic}
                  alt="grid"
                  className="img-grid-c"
                  data-aos="zoom-in-right"
                  data-aos-offset="200"
                />
              </div>

              <div className="bigsquare">
                <img
                  src={photo}
                  className="img-grid-c"
                  alt="grid"
                  data-aos="zoom-in-up"
                  data-aos-offset="200"
                />
              </div>
              <div className="bigsquare_blank">
                <div className="inner_square">
                  <img
                    src={des3}
                    className="img-grid-c"
                    alt="grid"
                    data-aos="zoom-in-down"
                    data-aos-offset="200"
                  />
                </div>
                <div className="inner_square">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-oo8-jn28YVesncpNZ4cBHocvHtKLwzmpVDbq1k7KNa5jEiL"
                    className="img-grid-c"
                    alt="grid"
                  />
                </div>
                <div className="inner_square">
                  <img
                    src="https://media.cntraveller.in/wp-content/uploads/2018/10/GettyImages-990972132-866x487.jpg"
                    className="img-grid-c"
                    alt="grid"
                    data-aos="zoom-in-down"
                  />
                </div>
                <div className="inner_square">
                  <img
                    src="https://www.w3schools.com/howto/img_snow.jpg"
                    className="img-grid-c"
                    alt="grid"
                    data-aos="zoom-in-up"
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
}
