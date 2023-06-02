import React from "react";

export default function MV() {
  return (
    <div className="section">
      <div id="about" className="about">
        <div className="container-fluid">
          <div className="section-header">
            <h2>About Us</h2>
            <p>
              Consequatur libero assumenda est voluptatem est quidem illum et
              officia imilique qui vel architecto accusamus fugit aut qui
              distinctio
            </p>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
              <a
                href="https://www.youtube.com/watch?v=c1eWgR5V83k"
                className="glightbox play-btn mb-4"
              ></a>
            </div>

            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3>Who we are</h3>
              <p>
                TOURNIJA CONCEPT LTD was founded in 2023 as a company with
                interest in Transport, Tourism and Hospitality, Trading,
                Catering services, Real estate development and Oil and Gas. Over
                the months we have divested into different sectors: Transport,
                Travel & Tourism (Mass Transit) Laundry and Dry cleaning
                services, Travel agency, Hotels, Computer Centre/ ICT.
              </p>

              <div className="icon-box">
                <div className="icon">
                  {/* <i className="bx bx-fingerprint"></i> */}
                  <i class="fa-solid fa-fingerprint"></i>
                </div>
                <h4 className="title">
                  <a href="">
                    {" "}
                    Create Customer Satisfaction and meet client need
                  </a>
                </h4>
                <p className="description">
                  . The service network must allow for ease of connections and
                  uninterrupted services delivery.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i class="fa-solid fa-heart"></i>
                </div>
                <h4 className="title">
                  <a href="">Efficient implementation of system management</a>
                </h4>
                <p className="description">
                  Capitalize on the potential of employees, by building
                  teamwork. Reduce waste and non-productivity, in the interest
                  of quality management and to compete with the private sector.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i class="fa-solid fa-heart"></i>
                </div>
                <h4 className="title">
                  <a href="">Innovations</a>
                </h4>
                <p className="description">
                  The priorities are safety, convenience, cleanliness, modernity
                  and punctuality on each and every client service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
