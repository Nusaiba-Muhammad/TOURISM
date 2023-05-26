import React from "react";
import { Row, Col, Card } from "reactstrap";

export default function Process() {
  return (
    <div className="let-be-alone">
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
                    Aim for efficient services through constant development
                    towards world-class standards. The priorities are safety,
                    convenience, cleanliness, modernity and punctuality on each
                    and every client service.
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
                    Implement a system of management that is both efficient
                    and streamlined. Capitalize on the potential of employees,
                    by building teamwork. Reduce waste and non-productivity, in
                    the interest of quality management and to compete with the
                    private sector.
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
                    Create customer satisfaction and meet client’s needs. The
                    service network must allow for ease of connections and
                    uninterrupted services delivery.
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
