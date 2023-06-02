import React, { useState } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import flagData from "./flagData";
import CustomModals from "./CustomModals";

export default function Destination() {
  const [open, setModal] = useState(false);
  const toggle = () => setModal(!open);
  const [select, setSelect] = useState({});

  AOS.init();
  return (
    // <div>
    //   <div className="destination_header">
    //     <span>destination</span>
    //     <h1>Our Destination</h1>
    //   </div>
    //   <Row className="center">
    //     <Col md={1}></Col>
    //     <Col md={10}>
    //       <div className="container" data-aos="fade-up" data-aos-offset="200">
    //         <div className="img-container-grid">
    //           <div className="smallsquare">
    //             <img
    //               src={des2}
    //               className="img-grid-c"
    //               alt="grid"
    //               data-aos="zoom-in"
    //               data-aos-offset="200"
    //             />
    //           </div>
    //           <div className="smallsquare">
    //             <img
    //               src="https://media.istockphoto.com/photos/view-of-sydney-harbour-australia-picture-id535455441?k=6&m=535455441&s=612x612&w=0&h=jVkW0bOqvffn2SzvUdncgkwHGScJRzak0oaQGij__h8="
    //               className="img-grid-c"
    //               alt="grid"
    //               data-aos="zoom-in-right"
    //               data-aos-offset="200"
    //             />
    //           </div>
    //           <div className="h_rectangle">
    //             <img
    //               src={pic}
    //               alt="grid"
    //               className="img-grid-c"
    //               data-aos="zoom-in-right"
    //               data-aos-offset="200"
    //             />
    //           </div>

    //           <div className="bigsquare">
    //             <img
    //               src={photo}
    //               className="img-grid-c"
    //               alt="grid"
    //               data-aos="zoom-in-up"
    //               data-aos-offset="200"
    //             />
    //           </div>
    //           <div className="bigsquare_blank">
    //             <div className="inner_square">
    //               <img
    //                 src={des3}
    //                 className="img-grid-c"
    //                 alt="grid"
    //                 data-aos="zoom-in-down"
    //                 data-aos-offset="200"
    //               />
    //             </div>
    //             <div className="inner_square">
    //               <img
    //                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-oo8-jn28YVesncpNZ4cBHocvHtKLwzmpVDbq1k7KNa5jEiL"
    //                 className="img-grid-c"
    //                 alt="grid"
    //               />
    //             </div>
    //             <div className="inner_square">
    //               <img
    //                 src="https://media.cntraveller.in/wp-content/uploads/2018/10/GettyImages-990972132-866x487.jpg"
    //                 className="img-grid-c"
    //                 alt="grid"
    //                 data-aos="zoom-in-down"
    //               />
    //             </div>
    //             <div className="inner_square">
    //               <img
    //                 src="https://www.w3schools.com/howto/img_snow.jpg"
    //                 className="img-grid-c"
    //                 alt="grid"
    //                 data-aos="zoom-in-up"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Col>
    //     <Col md={1}></Col>
    //   </Row>
    // </div>
    <div className="section">
      <CustomModals toggle={toggle} open={open} title={select.head}>
        {/* {JSON.stringify(select)} */}

        <div>
          {select?.images?.map((item) => (
            <img src={item} alt="images" width={300} className="center" />
          ))}
          <p className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            fermentum orci non justo aliquet, non convallis enim pulvinar.
            Vestibulum imperdiet imperdiet eros et vestibulum. Pellentesque sit
            amet leo ut lacus fringilla placerat. Maecenas imperdiet eros sed
            dui scelerisque venenatis. Pellentesque ac nibh at dolor ultricies
            bibendum a at veli
          </p>
        </div>
      </CustomModals>
      <div id="projects" className="projects">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Destination</h2>
            <p>
              Consequatur libero assumenda est voluptatem est quidem illum et
              officia imilique qui vel architecto accusamus fugit aut qui
              distinctio
            </p>
          </div>

          <div
            className="portfolio-isotope"
            // data-portfolio-filter="*"
            // data-portfolio-layout="masonry"
            // data-portfolio-sort="original-order"
          >
            {/* <ul
              className="portfolio-flters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-remodeling">Remodeling</li>
              <li data-filter=".filter-construction">Construction</li>
              <li data-filter=".filter-repairs">Repairs</li>
              <li data-filter=".filter-design">Design</li>
            </ul> */}
            <div>
              <div
                className="row gy-2 portfolio-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {flagData.map((value) => (
                  <div className="col-lg-1 col-md-6 portfolio-item filter-remodeling">
                    <div
                      className="portfolio-content h-100"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        toggle();
                        setSelect(value);
                      }}
                    >
                      <img
                        src={value.photo}
                        className="img-fluid"
                        alt=" "
                        width={150}
                      />
                      <div className="portfolio-info">
                        {/*  <h4>{value.head}</h4> */}
                        {/* <a
                          href={value.link}
                          title="Remodeling 1"
                          data-gallery="portfolio-gallery-remodeling"
                          className="glightbox preview-link"
                        >
                          <i className="bi bi-zoom-in"></i>
                        </a>
                        <a
                          href="project-details.html"
                          title="More Details"
                          className="details-link"
                        >
                          <i className="bi bi-link-45deg"></i>
                        </a> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
