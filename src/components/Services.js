import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import { FaHotel, FaGlobe } from "react-icons/fa";
import { IoPerson, IoSettingsSharp } from "react-icons/io5";
import "../App.css";

export default function Services() {
  return (
    <div>
      <div className="service_header">
        <span className="m-0 p-0">services</span>
        <h1>Our Services</h1>
      </div>
      <Row className="mt-3 p-t-3">
        <Col md={2}></Col>

        <Col md={2} className="m-0 p-0">
          <Card
            className="card shadow m-0 p-3 wow lightSpeedIn"
            style={{
              width: "20rem",
            }}
            data-wow-offset="200"
          >
            <div className="mb-4 icons">
              <FaGlobe size={45} style={{ marginBottom: 10 }} />
              <CardTitle className="h5">Special Title Treatment</CardTitle>
              <CardText className="text">
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content With supporting text below as a natural
                lead-in to additional content
              </CardText>
            </div>
          </Card>
        </Col>
        <Col md={2} className="m-0 p-0">
          <Card
            className="card shadow m-0 p-3"
            style={{
              width: "20rem",
            }}
          >
            <div className="mb-4 icons">
              <FaHotel size={45} style={{ marginBottom: 10 }} />
              <CardTitle className="h5">Special Title Treatment</CardTitle>
              <CardText className="text">
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content With supporting text below as a natural
                lead-in to additional content
              </CardText>
            </div>
          </Card>
        </Col>
        <Col md={2}>
          <Card
            className="card shadow m-0 p-3"
            style={{
              width: "20rem",
            }}
          >
            <div className="mb-4 icons">
              <IoPerson size={45} style={{ marginBottom: 10 }} />
              <CardTitle className="h5">Special Title Treatment</CardTitle>
              <CardText className="text">
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content With supporting text below as a natural
                lead-in to additional content
              </CardText>
            </div>
          </Card>
        </Col>
        <Col md={2}>
          <Card
            className=" card shadow m-0 p-3"
            style={{
              width: "20rem",
            }}
          >
            {" "}
            <div className="mb-4 icons">
              <IoSettingsSharp size={45} className="mb-4" />
              <CardTitle className="h5">Special Title Treatment</CardTitle>
              <CardText className="text">
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content With supporting text below as a natural
                lead-in to additional content
              </CardText>
            </div>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row className="mt-3 pt-3">
        <Col md={2}></Col>
        <Col md={2}>
          <Card
            className=" card shadow m-0 p-3"
            style={{
              width: "20rem",
            }}
          >
            <div className="mb-4 icons">
              <FaGlobe size={45} className="mb-4" />
              <div>
                <CardTitle className="h5">Special Title Treatment</CardTitle>
                <CardText className="text">
                  With supporting text below as a natural lead-in to additional
                  content. With supporting text below as a natural lead-in to
                  additional content With supporting text below as a natural
                  lead-in to additional content
                </CardText>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={2}>
          <Card
            className=" card shadow m-0 p-3"
            style={{
              width: "20rem",
            }}
          >
            <div className="mb-4 icons">
              <FaHotel size={45} className="mb-4" />
              <CardTitle className="h5">Special Title Treatment</CardTitle>
              <CardText className="text">
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content With supporting text below as a natural
                lead-in to additional content
              </CardText>
            </div>
          </Card>
        </Col>
        <Col md={2}>
          <Card
            className="card shadow m-0 p-3"
            body
            style={{
              width: "20rem",
              //   height: "16rem",
            }}
          >
            <div className="mb-4 icons">
              <IoPerson size={45} className="mb-4" />
              <CardTitle className="h5">Special Title Treatment</CardTitle>
              <CardText className="text">
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content With supporting text below as a natural
                lead-in to additional content
              </CardText>
            </div>
          </Card>
        </Col>
        <Col md={2}>
          <Card
            className="card shadow m-0 p-3"
            body
            style={{
              width: "20rem",
            }}
          >
            <div className="mb-4 icons">
              <IoSettingsSharp size={45} className="mb-4" />
              <CardTitle className="h5">Special Title Treatment</CardTitle>
              <CardText className="text">
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content With supporting text below as a natural
                lead-in to additional content
              </CardText>
            </div>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
}
