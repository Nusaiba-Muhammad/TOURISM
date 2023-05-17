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
        <Col md={2}></Col>
        <Col md={8}>
          <div class="container" data-aos="fade-up" data-aos-offset="200">
            <div class="img-container-grid">
              <div class="smallsquare">
                <img
                  src={des2}
                  class="img-grid-c"
                  alt="grid"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                />
              </div>
              <div class="smallsquare">
                <img
                  src="https://media.istockphoto.com/photos/view-of-sydney-harbour-australia-picture-id535455441?k=6&m=535455441&s=612x612&w=0&h=jVkW0bOqvffn2SzvUdncgkwHGScJRzak0oaQGij__h8="
                  class="img-grid-c"
                  alt="grid"
                  data-aos="zoom-in-right"
                  data-aos-offset="200"
                />
              </div>
              <div class="h_rectangle">
                <img
                  src={pic}
                  alt="grid"
                  className="img-grid-c"
                  data-aos="zoom-in-right"
                  data-aos-offset="200"
                />
              </div>

              <div class="bigsquare">
                <img
                  src={photo}
                  class="img-grid-c"
                  alt="grid"
                  data-aos="zoom-in-up"
                  data-aos-offset="200"
                />
              </div>
              <div class="bigsquare_blank">
                <div class="inner_square">
                  <img
                    src={des3}
                    class="img-grid-c"
                    alt="grid"
                    data-aos="zoom-in-down"
                    data-aos-offset="200"
                  />
                </div>
                <div class="inner_square">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-oo8-jn28YVesncpNZ4cBHocvHtKLwzmpVDbq1k7KNa5jEiL"
                    class="img-grid-c"
                    alt="grid"
                  />
                </div>
                <div class="inner_square">
                  <img
                    src="https://media.cntraveller.in/wp-content/uploads/2018/10/GettyImages-990972132-866x487.jpg"
                    class="img-grid-c"
                    alt="grid"
                    data-aos="zoom-in-down"
                  />
                </div>
                <div class="inner_square">
                  <img
                    src="https://www.w3schools.com/howto/img_snow.jpg"
                    class="img-grid-c"
                    alt="grid"
                    data-aos="zoom-in-up"
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
}
