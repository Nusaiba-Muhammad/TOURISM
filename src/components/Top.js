import React from "react";

export default function Top() {
  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container">
    //       <a className="navbar-brand" href="#">
    //         TourNiger
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>

    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               Home
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               Home
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               Home
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>

    //   <div
    //     id="carouselExampleIndicators"
    //     className="carousel slide"
    //     data-ride="carousel"
    //   >
    //     <ol className="carousel-indicators">
    //       <li
    //         data-target="#carouselExampleIndicators"
    //         data-slide-to="0"
    //         className="active"
    //       ></li>
    //       <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //       <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //     </ol>
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img className="d-block w-100" src={require('../assets/img/men.jpg')} alt="First slide" />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h5 className='bounceInLeft d-none d-md-block'>Heloo there</h5>
    //           <p>WASDXFCJUVGHLKNMJB VCXDSEAWTDEUGJYFNBDS</p>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img className="d-block w-100" src={require('../assets/img/maldives.jpg')} alt="Second slide" />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h5>Heloo there</h5>
    //           <p>WASDXFCJUVGHLKNMJB VCXDSEAWTDEUGJYFNBDS</p>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img className="d-block w-100" src="..." alt="Third slide" />
    //       </div>
    //     </div>
    //     <a
    //       className="carousel-control-prev"
    //       href="#carouselExampleIndicators"
    //       role="button"
    //       data-slide="prev"
    //     >
    //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Previous</span>
    //     </a>
    //     <a
    //       className="carousel-control-next"
    //       href="#carouselExampleIndicators"
    //       role="button"
    //       data-slide="next"
    //     >
    //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Next</span>
    //     </a>
    //   </div>
    // </div>
    <div>
      <div
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container-fluid">
          <div
            className="row justify-content-center align-items-center"
            id="hero"
          >
            <div className="col-xl-11 d-flex align-items-center justify-content-between ">
              <h1 className="logo">
                <a href="index.html" className="tour">TourAfrica</a>
              </h1>

              <a href="index.html" className="logo">
                <img src="assets/img/logo.png" alt="" className="img-fluid" />
              </a>

              <nav id="navbar" className="navbar">
                <ul>
                  <li>
                    <a className="nav-link scrollto active" href="#hero">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto " href="#portfolio">
                      Packages
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="nav-link  " href="blog.html">
                      Booking
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
