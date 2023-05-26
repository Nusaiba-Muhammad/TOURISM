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

        <Col md={2}>
          <Card
            className="card shadow m-0 p-3"
            style={{
              height: "26rem",

            }}
      
          >
            <div className="mb-4 icons">
              <FaGlobe size={45} style={{ marginBottom: 10 }} />
              <CardTitle className="h5">
                Advocacy on tourism promotion
              </CardTitle>
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
              // width: "25rem",
              height: "26rem",
            }}
          >
            <div className="mb-4 icons">
              <FaHotel size={45} style={{ marginBottom: 10 }} />
              <CardTitle className="h5">
                Environmental Planning and conservation
              </CardTitle>
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
              // width: "25rem",
              height: "26rem",
            }}
          >
            <div className="mb-4 icons">
              <IoPerson size={45} style={{ marginBottom: 10 }} />
              <CardTitle className="h5">
                Real Estate Development and Management
              </CardTitle>
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
              // width: "25rem",
              height: "26rem",
            }}
          >
            {" "}
            <div className="mb-4 icons">
              <IoSettingsSharp size={45} className="mb-4" />
              <CardTitle className="h5">
                Training, human and institutional Capacity development{" "}
              </CardTitle>
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
              // width: "25rem",
              height: "26rem",
            }}
          >
            <div className="mb-4 icons">
              <FaGlobe size={45} className="mb-4" />
              <div>
                <CardTitle className="h5">
                  Tourism Geographic Information System
                </CardTitle>
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
              // width: "25rem",
              height: "26rem",
            }}
          >
            <div className="mb-4 icons">
              <FaHotel size={45} className="mb-4" />
              <CardTitle className="h5">
                Facility Management and Services
              </CardTitle>
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
              // width: "25rem",
              height: "26rem",
            }}
          >
            <div className="mb-4 icons">
              <IoPerson size={45} className="mb-4" />
              <CardTitle className="h5">
                Livelihood and Economic Development
              </CardTitle>
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
              // width: "25rem",
              height: "26rem",
            }}
          >
            <div className="mb-4 icons">
              <IoSettingsSharp size={45} className="mb-4" />
              <CardTitle className="h5">
                Project planning and Development
              </CardTitle>
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
