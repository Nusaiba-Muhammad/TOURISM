/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col, CardBody, CardFooter, Card } from "reactstrap";

export default function TourGuide() {
  return (
    // <div className="p-5 text-center mt-5">
    //   <div className="destination_header">
    //     <span>guide</span>
    //     <h1>Tour Guide</h1>
    //   </div>
    //   <div>
    //     <Row>
    //       <Col md={1}></Col>
    //       <Col md={10}>
    //         <Row>
    //           <Col md={3}>
    //             <Card className="guide">
    //               <CardBody className="m-0 p-0">
    //                 <img src={require({../guide1} alt="guild" cl)}assName="img-fluid" />
    //               </CardBody>
    //               <CardFooter className="bg-white">
    //                 <div>
    //                   <div
    //                     className="d-flex justify-content-center"
    //                     style={{ marginTop: -40 }}
    //                   >
    //                     <i className="fa fa-twitter ii bg-white"></i>
    //                     <i className="fa fa-facebook ii bg-white"></i>
    //                     <i className="fa fa-instagram ii bg-white"></i>
    //                     <i className="fa fa-youtube ii bg-white"></i>
    //                   </div>
    //                   <p className="" style={{ fontSize: "18px" }}>
    //                     {" "}
    //                     FRONTEND DEVELOPER
    //                   </p>
    //                   <h4 className=" mt-2"> frontend</h4>
    //                   <h6 className=" mt-2"> designer</h6>
    //                 </div>
    //               </CardFooter>
    //             </Card>
    //           </Col>
    //           <Col md={3}>
    //             <Card className="guide">
    //               <CardBody className="m-0 p-0">
    //                 <img src={guide2} alt="guild" className="img-fluid" />
    //               </CardBody>
    //               <CardFooter className="bg-white">
    //                 <div>
    //                   <div
    //                     className="d-flex justify-content-center"
    //                     style={{ marginTop: -40 }}
    //                   >
    //                     <i className="fa fa-twitter ii bg-white"></i>
    //                     <i className="fa fa-facebook ii bg-white"></i>
    //                     <i className="fa fa-instagram ii bg-white"></i>
    //                     <i className="fa fa-youtube ii bg-white"></i>
    //                   </div>
    //                   <p className="" style={{ fontSize: "18px" }}>
    //                     {" "}
    //                     FRONTEND DEVELOPER
    //                   </p>
    //                   <h4 className=" mt-2"> frontend</h4>
    //                   <h6 className=" mt-2"> designer</h6>
    //                 </div>
    //               </CardFooter>
    //             </Card>
    //           </Col>
    //           <Col md={3}>
    //             <Card className="guide">
    //               <CardBody className="m-0 p-0">
    //                 <img src={guide3} alt="guild" className="img-fluid" />
    //               </CardBody>
    //               <CardFooter className="bg-white">
    //                 <div>
    //                   <div
    //                     className="d-flex justify-content-center"
    //                     style={{ marginTop: -40 }}
    //                   >
    //                     <i className="fa fa-twitter ii bg-white"></i>
    //                     <i className="fa fa-facebook ii bg-white"></i>
    //                     <i className="fa fa-instagram ii bg-white"></i>
    //                     <i className="fa fa-youtube ii bg-white"></i>
    //                   </div>
    //                   <p className="" style={{ fontSize: "18px" }}>
    //                     {" "}
    //                     FRONTEND DEVELOPER
    //                   </p>
    //                   <h4 className=" mt-2"> frontend</h4>
    //                   <h6 className=" mt-2"> designer</h6>
    //                 </div>
    //               </CardFooter>
    //             </Card>
    //           </Col>
    //           <Col md={3}>
    //             <Card className="guide p-0">
    //               <CardBody className="m-0 p-0">
    //                 <img
    //                   src={guide4}
    //                   alt="guild"
    //                   className="img-fluid img-new"
    //                 />
    //               </CardBody>
    //               <CardFooter className="bg-white">
    //                 <div>
    //                   <div
    //                     className="d-flex justify-content-center"
    //                     style={{ marginTop: -40 }}
    //                   >
    //                     <i className="fa fa-twitter ii bg-white"></i>
    //                     <i className="fa fa-facebook ii bg-white"></i>
    //                     <i className="fa fa-instagram ii bg-white"></i>
    //                     <i className="fa fa-youtube ii bg-white"></i>
    //                   </div>
    //                   <p className="" style={{ fontSize: "18px" }}>
    //                     {" "}
    //                     FRONTEND DEVELOPER
    //                   </p>
    //                   <h4 className=" mt-2"> frontend</h4>
    //                   <h6 className=" mt-2"> designer</h6>
    //                 </div>
    //               </CardFooter>
    //             </Card>
    //           </Col>
    //         </Row>
    //       </Col>
    //       <Col mmd={1}></Col>
    //     </Row>
    //   </div>
    // </div>

    <div>
      <section id="team">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>Team</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="member" data-aos="fade-up" data-aos-delay="100">
                <img
                  src={require("../assets/img/ah.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Ahmad Kabir</h4>
                    <span>Chief Executive Officer</span>
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="member" data-aos="fade-up" data-aos-delay="200">
                <img
                  src={require("../assets/img/dg1.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Idris AbdulQadir</h4>
                    <span>Product Manager</span>
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="member" data-aos="fade-up" data-aos-delay="300">
                <img
                  src={require("../assets/img/ah.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Ahmad Kabir</h4>
                    <span>CTO</span>
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="member" data-aos="fade-up" data-aos-delay="400">
                <img
                  src={require("../assets/img/dg1.jpg")}
                  class="img-fluid"
                  alt=""
                />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Idris AbdulQadir</h4>
                    <span>Accountant</span>
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
