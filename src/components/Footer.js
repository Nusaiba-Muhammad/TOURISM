import React from "react";
import { Row, Col } from "reactstrap";
export default function Footer() {
  return (
    <div>
      <div className="foot_main">
        <Row className="foot">
          <Col md={2}></Col>
          <Col md={8}>
            <Row>
              <Col md={4}>
                <h5>Company</h5>
                <p className="footer-p">
                  <a>
                    <i className="fa-solid fa-chevron-right"></i> About us
                  </a>
                </p>
                <p className="footer-p">
                  <a>
                    <i className="fa-solid fa-chevron-right"></i> Contact us
                  </a>
                </p>
                <p className="footer-p">
                  <a>
                    <i className="fa-solid fa-chevron-right"></i> Privacy Policy
                  </a>
                </p>
                <p className="footer-p">
                  <a>
                    <i className="fa-solid fa-chevron-right"></i> Terms &
                    Conditions
                  </a>
                </p>
                <p className="footer-p">
                  <a>
                    <i className="fa-solid fa-chevron-right"></i> FAQs & Help
                  </a>
                </p>
              </Col>

              <Col md={4}>
                <h5> Contact</h5>
                <p className="footer-p">
                  <i className="fa-solid fa-location-dot"></i> No 1 Sani Abacha
                  Way Kano, Nigeria
                </p>
                <p className="footer-p">
                  <i className="fa-solid fa-phone"></i> +234 809 928 4720
                </p>
                <p className="footer-p">
                  <i className="fa-solid fa-envelope"></i> tournaija@gmail.com
                </p>
                <div className="icon-circle">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="icon-circle">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="icon-circle">
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div className="icon-circle">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </Col>


              <Col md={4}>
                <h5>Newsletter</h5>
                <div className="newsletter-form">
                  <input type="email" placeholder="Your email" />
                  <button className="signup-button">Sign up</button>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={2}></Col>
        </Row>
        <hr />
        <div className="col-md-1"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-links">
                <a className="footer-link" href="#">
                  Home
                </a>
                <a className="footer-link" href="#">
                  Cookies
                </a>
                <a className="footer-link" href="#">
                  Help
                </a>
                <a className="footer-link" href="#">
                  FAQ
                </a>
              </div>
            </div>
            <div className="site-name">
              <i className="fa-solid fa-copyright"></i>
            </div>
            <div className="site-text">
              <p>Your Site Name. Alright Reserved. Designed By HTML</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
