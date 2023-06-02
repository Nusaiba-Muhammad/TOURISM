/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col } from "reactstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="foot_main">
        <Row className="foot">
          <Col md={2}></Col>
          <Col md={8} className="p-5">
            <Row>
              <Col md={4}>
                <h5 className="h5">Company</h5>
                <p className="footer-p">
                  <a>
                    <i className="fa-solid fa-chevron-right foot_icon"></i>{" "}
                    About us
                  </a>
                </p>
                <p className="footer-p">
                  <a>
                    <i className="fa-solid fa-chevron-right foot_icon"></i>{" "}
                    Contact us
                  </a>
                </p>
                <p className="footer-p">
                  <a>
                    <i className="fa-solid fa-chevron-right foot_icon"></i>{" "}
                    Privacy Policy
                  </a>
                </p>
                <p className="footer-p">
                  <a>
                    <i className="fa-solid fa-chevron-right foot_icon"></i>{" "}
                    Terms & Conditions
                  </a>
                </p>
                <p className="footer-p">
                  <a>
                    <i className="fa-solid fa-chevron-right foot_icon"></i> FAQs
                    & Help
                  </a>
                </p>
              </Col>

              <Col md={4}>
                <h5 className="h5"> Contact</h5>
                <p className="footer-p">
                  <i className="fa-solid fa-location-dot foot_icon"></i> No 1
                  Sani Abacha Way Kano, Nigeria
                </p>
                <p className="footer-p">
                  <i className="fa-solid fa-phone foot_icon"></i> +234 809 928
                  4720
                </p>
                <p className="footer-p">
                  <i className="fa-solid fa-envelope foot_icon"></i>{" "}
                  tournaija@gmail.com
                </p>
                {/* <div className="footer_icon"> */}

                <a href="https://twitter.com/tournaijatn">
                  {" "}
                  <i className="fa-brands fa-twitter iii"></i>
                </a>

                <a href="https://web.facebook.com/tournaijatn">
                  {" "}
                  <i className="fa-brands fa-facebook-f iii"></i>
                </a>

                <i className="fa-brands fa-youtube iii"></i>

                <a href="https://www.instagram.com/tournaijatn/">
                  <i className="fa-brands fa-instagram iii"></i>
                </a>

                <i className="fa-brands fa-linkedin-in iii"></i>

                {/* </div> */}
              </Col>

              <Col md={4}>
                <h5 className="h5">Newsletter</h5>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="foot_input"
                  />
                  <button className="signup-button foot_button">Sign up</button>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={2}></Col>
        </Row>
        <hr />

        <Row>
          <Col></Col>
          <Col md={8} className="d-flex justify-content-between">
            <div className="site">
              <i className="fa-solid fa-copyright mx-2 mt-1 foot_icon"></i>

              <p>Your Site Name. Alright Reserved. Designed By HTML</p>
            </div>
            <div className="footer-links">
              <a className="footer-link" href="#">
                Home
              </a>
              <div className="line"></div>
              <a className="footer-link" href="#">
                Cookies
              </a>
              <div className="line"></div>
              <a className="footer-link" href="#">
                Help
              </a>
              <div className="line"></div>
              <a className="footer-link" href="#">
                FAQ
              </a>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
}
