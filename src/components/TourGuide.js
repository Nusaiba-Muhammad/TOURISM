import React from "react";
import { Row, Col, CardBody, CardFooter, Card } from "reactstrap";
import guide1 from "../img/team-1.jpg";
import guide2 from "../img/team-2.jpg";
import guide3 from "../img/team-3.jpg";
import guide4 from "../img/team-4.jpg";

export default function TourGuide() {
  return (
    <div className="p-5 text-center mt-5">
      <div className="destination_header">
        <span>guide</span>
        <h1>Tour Guide</h1>
      </div>
      <div>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row>
              <Col md={3}>
                <Card className="guide">
                  <CardBody className="m-0 p-0">
                    <img src={guide1} alt="guild" className="img-fluid" />
                  </CardBody>
                  <CardFooter className="bg-white">
                    <div>
                      <div
                        className="d-flex justify-content-center"
                        style={{ marginTop: -40 }}
                      >
                        <i className="fa fa-twitter ii bg-white"></i>
                        <i className="fa fa-facebook ii bg-white"></i>
                        <i className="fa fa-instagram ii bg-white"></i>
                        <i className="fa fa-youtube ii bg-white"></i>
                      </div>
                      <p className="" style={{ fontSize: "18px" }}>
                        {" "}
                        FRONTEND DEVELOPER
                      </p>
                      <h4 className=" mt-2"> frontend</h4>
                      <h6 className=" mt-2"> designer</h6>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="guide">
                  <CardBody className="m-0 p-0">
                    <img src={guide2} alt="guild" className="img-fluid" />
                  </CardBody>
                  <CardFooter className="bg-white">
                    <div>
                      <div
                        className="d-flex justify-content-center"
                        style={{ marginTop: -40 }}
                      >
                        <i className="fa fa-twitter ii bg-white"></i>
                        <i className="fa fa-facebook ii bg-white"></i>
                        <i className="fa fa-instagram ii bg-white"></i>
                        <i className="fa fa-youtube ii bg-white"></i>
                      </div>
                      <p className="" style={{ fontSize: "18px" }}>
                        {" "}
                        FRONTEND DEVELOPER
                      </p>
                      <h4 className=" mt-2"> frontend</h4>
                      <h6 className=" mt-2"> designer</h6>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="guide">
                  <CardBody className="m-0 p-0">
                    <img src={guide3} alt="guild" className="img-fluid" />
                  </CardBody>
                  <CardFooter className="bg-white">
                    <div>
                      <div
                        className="d-flex justify-content-center"
                        style={{ marginTop: -40 }}
                      >
                        <i className="fa fa-twitter ii bg-white"></i>
                        <i className="fa fa-facebook ii bg-white"></i>
                        <i className="fa fa-instagram ii bg-white"></i>
                        <i className="fa fa-youtube ii bg-white"></i>
                      </div>
                      <p className="" style={{ fontSize: "18px" }}>
                        {" "}
                        FRONTEND DEVELOPER
                      </p>
                      <h4 className=" mt-2"> frontend</h4>
                      <h6 className=" mt-2"> designer</h6>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="guide p-0">
                  <CardBody className="m-0 p-0">
                    <img
                      src={guide4}
                      alt="guild"
                      className="img-fluid img-new"
                    />
                  </CardBody>
                  <CardFooter className="bg-white">
                    <div>
                      <div
                        className="d-flex justify-content-center"
                        style={{ marginTop: -40 }}
                      >
                        <i className="fa fa-twitter ii bg-white"></i>
                        <i className="fa fa-facebook ii bg-white"></i>
                        <i className="fa fa-instagram ii bg-white"></i>
                        <i className="fa fa-youtube ii bg-white"></i>
                      </div>
                      <p className="" style={{ fontSize: "18px" }}>
                        {" "}
                        FRONTEND DEVELOPER
                      </p>
                      <h4 className=" mt-2"> frontend</h4>
                      <h6 className=" mt-2"> designer</h6>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col mmd={1}></Col>
        </Row>
      </div>
    </div>
  );
}
