/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";

import "../App.css";
// import "../style.css";

export default function Services() {
  return (
    // <div>
    //   <div className="service_header">
    //     <span className="m-0 p-0">services</span>
    //     <h1>Our Services</h1>
    //   </div>
    //   <Row className="mt-3 p-t-3">
    //     <Col md={2}></Col>

    //     <Col md={2}>
    //       <Card
    //         className="card shadow m-0 p-3"
    //         style={{
    //           height: "26rem",
    //         }}
    //       >
    //         <div className="mb-4 icons">
    //           <FaGlobe size={45} style={{ marginBottom: 10 }} />
    //           <CardTitle className="h5">
    //             Advocacy on tourism promotion
    //           </CardTitle>
    //           <CardText className="text">
    //             To be the leader with world-className service quality standards,
    //             efficient management, employing modern technologies and
    //             experienced personnel.
    //           </CardText>
    //         </div>
    //       </Card>
    //     </Col>
    //     <Col md={2}>
    //       <Card
    //         className="card shadow m-0 p-3"
    //         style={{
    //           // width: "25rem",
    //           height: "26rem",
    //         }}
    //       >
    //         <div className="mb-4 icons">
    //           <FaHotel size={45} style={{ marginBottom: 10 }} />
    //           <CardTitle className="h5">
    //             Environmental Planning and conservation
    //           </CardTitle>
    //           <CardText className="text">
    //             From a humble beginning of local services, our transport system
    //             encompasses all reachable areas of Nigeria and also beyond the
    //             border, extending our reach to other West African countries.
    //           </CardText>
    //         </div>
    //       </Card>
    //     </Col>
    //     <Col md={2}>
    //       <Card
    //         className="card shadow m-0 p-3"
    //         style={{
    //           // width: "25rem",
    //           height: "26rem",
    //         }}
    //       >
    //         <div className="mb-4 icons">
    //           <IoPerson size={45} style={{ marginBottom: 10 }} />
    //           <CardTitle className="h5">
    //             Real Estate Development and Management
    //           </CardTitle>
    //           <CardText className="text">
    //             For us, the most important thing is to provide and ensure client
    //             with good treatment, professionalism and promptness.
    //           </CardText>
    //         </div>
    //       </Card>
    //     </Col>
    //     <Col md={2}>
    //       <Card
    //         className=" card shadow m-0 p-3"
    //         style={{
    //           // width: "25rem",
    //           height: "26rem",
    //         }}
    //       >
    //         {" "}
    //         <div className="mb-4 icons">
    //           <IoSettingsSharp size={45} className="mb-4" />
    //           <CardTitle className="h5">
    //             Training, human and institutional Capacity development{" "}
    //           </CardTitle>
    //           <CardText className="text">
    //             the progress of our company is based on our acquaintance of
    //             Nigeria and Africa, and what it has to offer. Our motto is
    //             personal service with a smile and not a single unhappy
    //           </CardText>
    //         </div>
    //       </Card>
    //     </Col>
    //     <Col md={2}></Col>
    //   </Row>
    //   <Row className="mt-3 pt-3">
    //     <Col md={2}></Col>
    //     <Col md={2}>
    //       <Card
    //         className=" card shadow m-0 p-3"
    //         style={{
    //           // width: "25rem",
    //           height: "26rem",
    //         }}
    //       >
    //         <div className="mb-4 icons">
    //           <FaGlobe size={45} className="mb-4" />
    //           <div>
    //             <CardTitle className="h5">
    //               Tourism Geographic Information System
    //             </CardTitle>
    //             <CardText className="text">
    //               our transport and travel agency would provide complete travel
    //               solutions for clients, and an agency which would do more than
    //               just take clients from Point-A to Point-B and which will
    //               provide luxury whilst still being competitively priced
    //             </CardText>
    //           </div>
    //         </div>
    //       </Card>
    //     </Col>
    //     <Col md={2}>
    //       <Card
    //         className=" card shadow m-0 p-3"
    //         style={{
    //           // width: "25rem",
    //           height: "26rem",
    //         }}
    //       >
    //         <div className="mb-4 icons">
    //           <FaHotel size={45} className="mb-4" />
    //           <CardTitle className="h5">
    //             Facility Management and Services
    //           </CardTitle>
    //           <CardText className="text">
    //             We worked hard and honest; we put our vision forward and
    //             explored ways and means to continuously improve clients comfort
    //             and satisfactions, and as a result, we are to introducing
    //             innovations in our services.
    //           </CardText>
    //         </div>
    //       </Card>
    //     </Col>
    //     <Col md={2}>
    //       <Card
    //         className="card shadow m-0 p-3"
    //         body
    //         style={{
    //           // width: "25rem",
    //           height: "26rem",
    //         }}
    //       >
    //         <div className="mb-4 icons">
    //           <IoPerson size={45} className="mb-4" />
    //           <CardTitle className="h5">
    //             Livelihood and Economic Development
    //           </CardTitle>
    //           <CardText className="text">
    //             our vision is to be the leader with world-className service quality
    //             standards, efficient management, employing modern technologies
    //             and experienced personnel.
    //           </CardText>
    //         </div>
    //       </Card>
    //     </Col>
    //     <Col md={2}>
    //       <Card
    //         className="card shadow m-0 p-3"
    //         body
    //         style={{
    //           // width: "25rem",
    //           height: "26rem",
    //         }}
    //       >
    //         <div className="mb-4 icons">
    //           <IoSettingsSharp size={45} className="mb-4" />
    //           <CardTitle className="h5">
    //             Project planning and Development
    //           </CardTitle>
    //           <CardText className="text">
    //             Our values are commitment to providing Clients with excellent,
    //             cost effective and enduring solutions and continuous Improvement
    //             of services and relationship
    //           </CardText>
    //         </div>
    //       </Card>
    //     </Col>
    //     <Col md={2}></Col>
    //   </Row>
    // </div>
    <div className="section">
      <div id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h4>
                  <a href="">Advocacy on tourism promotion</a>
                </h4>
                <p>
                  To be the leader with world-className service quality
                  standards,efficient management, employing modern technologies
                  and experienced personnel.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon">
                  <i class="fa-solid fa-gear"></i>
                </div>
                <h4>
                  <a href="">Environmental Planning and conservation</a>
                </h4>
                <p>
                  From a humble beginning of local services, our transport
                  system encompasses all reachable areas of Nigeria and also
                  beyond the border, extending our reach to other West African
                  countries.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <i class="fa-solid fa-hotel"></i>
                </div>
                <h4>
                  <a href="">Training</a>
                </h4>
                <p>
                  the progress of our company is based on our acquaintance of
                  Nigeria and Africa, and what it has to offer. Our motto is
                  personal service with a smile and not a single unhappy
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon">
                  <i class="fa-solid fa-user"></i>
                </div>
                <h4>
                  <a href="">Facilty Management and Services</a>
                </h4>
                <p>
                  We worked hard and honest; we put our vision forward and
                  explored ways and means to continuously improve clients
                  comfort and satisfactions, and as a result, we are to
                  introducing innovations in our services.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon">
                  <i class="fa-solid fa-gear"></i>
                </div>
                <h4>
                  <a href=""> Livelihood and Economic Development</a>
                </h4>
                <p>
                  our vision is to be the leader with world-className service
                  quality standards, efficient management, employing modern
                  technologiesand experienced personnel.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon">
                  <i class="fa-solid fa-hotel"></i>
                </div>
                <h4>
                  <a href="">Tourism Geographic Information System</a>
                </h4>
                <p>
                  our transport and travel agency would provide complete travel
                  solutions for clients, and an agency which would do more than
                  just take clients from Point-A to Point-B and which will
                  provide luxury whilst still being competitively priced
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
