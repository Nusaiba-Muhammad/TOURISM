/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


export default function Card() {
  return (
    // <div className="mt-5 pt-5">
    //   <Row>
    //     <Col md={2}></Col>
    //     <Col md={4}>
    //       <img src={image} alt="img" id="lll" />
    //     </Col>
    //     <Col md={4} className="section">
    //       <h6>ABOUT US</h6>
    //       <h1>
    //         Welcome to <span className="tourist">Tourist</span>
    //       </h1>
    //       <p className="paragraph mb-4">
    //         TOURNIJA CONCEPT LTD was founded in 2023 as a company with
    //         interest in Transport, Tourism and Hospitality, Trading, Catering
    //         services, Real estate development and Oil and Gas. Over the months
    //         we have divested into different sectors: Transport, Travel & Tourism
    //         (Mass Transit) Laundry and Dry cleaning services, Travel agency,
    //         Hotels, Computer Centre/ ICT.
    //       </p>

    //       <p className="paragraph mb-4">
    //         We are one of the emerging leading companies in Nigeria. In the
    //         beginning we wanted to create a service concept different from
    //         others, our transport and travel agency would provide complete
    //         travel solutions for clients, and an agency which would do more than
    //         just take clients from Point-A to Point-B and which will provide
    //         luxury whilst still being competitively priced. For us, the most
    //         important thing is to provide and ensure client with good treatment,
    //         professionalism and promptness.
    //       </p>
    //       <div className="row  mb-4">
    //         <div className="d-flex justify-content-between ">
    //           <IconWithText
    //             icon={<i className="fa-solid fa-arrow-right fa-lg"></i>}
    //             text=" First className Flights"
    //           />
    //           <IconWithText
    //             icon={<i className="fa-solid fa-arrow-right fa-lg"></i>}
    //             text=" First className Flights"
    //           />
    //         </div>
    //         <div className="d-flex justify-content-between">
    //           <IconWithText
    //             icon={<i className="fa-solid fa-arrow-right fa-lg"></i>}
    //             text=" First className Flights"
    //           />
    //           <IconWithText
    //             icon={<i className="fa-solid fa-arrow-right fa-lg"></i>}
    //             text=" First className Flights"
    //           />
    //         </div>
    //         <div className="d-flex justify-content-between ">
    //           <IconWithText
    //             icon={<i className="fa-solid fa-arrow-right fa-lg"></i>}
    //             text=" First className Flights"
    //           />
    //           <IconWithText
    //             icon={<i className="fa-solid fa-arrow-right fa-lg"></i>}
    //             text=" First className Flights"
    //           />
    //         </div>
    //       </div>
    //       <button className="about_button">Read More</button>
    //     </Col>
    //     <Col md={2}></Col>
    //   </Row>
    // </div>
    <div>
      <div className="section">
        <div id="alt-services" className="alt-services">
          <div className="container" data-aos="fade-up">
            {" "}
          </div>
          <div className="row justify-content-around gy-4">
            <div
              className="col-lg-6 img-bg alt_service"
              data-aos="zoom-in"
              data-aos-delay="100"
            ></div>

            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Our Aim</h3>
              <p>
                Esse voluptas cumque vel exercitationem. Reiciendis est hic
                accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
                voluptate sed facere corporis dolores excepturi
              </p>

              <div
                className="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <i className="bi bi-easel flex-shrink-0"></i>

                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      World-class serivce quality standard
                    </a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>

              <div
                className="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-patch-check flex-shrink-0"></i>
                {/* <i class="fa-regular fa-brightness flex-shrink-0"></i> */}
                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      Efficent Management
                    </a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>

              <div
                className="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                {/* <i class="fa-regular fa-brightness flex-shrink-0"></i> */}
                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      Employing experienced Personnel
                    </a>
                  </h4>
                  <p>
                    Explicabo est voluptatum asperiores consequatur magnam. Et
                    veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                  </p>
                </div>
              </div>

              <div
                className="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      Meeting up to date with modern technology
                    </a>
                  </h4>
                  <p>
                    Est voluptatem labore deleniti quis a delectus et. Saepe
                    dolorem libero sit non aspernatur odit amet. Et eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IconWithText({ icon, text }) {
  return (
    <div className="d-flex">
      <div className="mr-4" style={{ color: "#98c33a", marginRight: 20 }}>
        {icon}
      </div>
      <div>{text}</div>
    </div>
  );
}
