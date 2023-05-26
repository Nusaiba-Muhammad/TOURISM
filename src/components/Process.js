import React from "react";
import { Row, Col, Card } from "reactstrap";

export default function Process() {
  return (
    <div>
      <div className="destination_header">
        <span>process</span>
        <h1>3 Easy Steps</h1>
      </div>

      <div>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <Row>
              <Col md={4}>
                <Card
                  className=" process m-5 w-100"
                  style={{
                    width: "22rem",
                    height: "20rem",
                  }}
                >
                  <div className="icon-container">
                    <i className="fa fa-globe icon "></i>
                  </div>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit. Tempor erat elitr rebum at clita.{" "}
                  </p>
                </Card>
              </Col>
              <Col md={4}>
                <Card
                  className=" process m-5 w-100"
                  style={{
                    width: "22rem",
                    height: "20rem",
                  }}
                >
                  <div className="icon-container">
                    <i class="fa-sharp fa-solid fa-dollar-sign icon"></i>
                  </div>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit. Tempor erat elitr rebum at clita.
                  </p>
                </Card>
              </Col>
              <Col md={4}>
                <Card
                  className=" process m-5 w-100"
                  style={{
                    width: "22rem",
                    height: "20rem",
                  }}
                >
                  <div className="icon-container">
                    <i className="fa fa-plane icon"></i>
                  </div>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit. Tempor erat elitr rebum at clita.{" "}
                  </p>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
    </div>
  );
}
