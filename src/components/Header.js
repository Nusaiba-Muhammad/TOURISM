/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="one">
        <div className="one-on-one">
          <div className="top">
            <div className="topleft">
              <a href="">
                <i class="fa-sharp fa-solid fa-location-dot foot_icon"></i>
                123 Street, New York, USA
              </a>
              <a href="">
                <i class="fa-solid fa-phone foot_icon"></i>
                +0123456789
              </a>
              <a href="">
                <i class="fa-sharp fa-regular fa-envelope-open foot_icon"></i>
                mail@domain.com
              </a>
            </div>
            <div className="topright">
              <a href="">
                <i className="fa-brands fa-twitter iii"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-instagram iii"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-youtube iii"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin-in iii"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook-f iii"></i>
              </a>
            </div>
          </div>
          <div className="fpage">
            <div className="nav">
              <div className="lnav">
                <i class="fa-sharp fa-solid fa-location-dot nav_icon"></i>
                <span className="nav_span">TourAfrica</span>
              </div>
              <div className="rnav">
                <ul>
                  <li>
                    <a href="./pp.html" className="focus">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="./pp_about.html">About</a>
                  </li>
                  <li>
                    <a href="./pp_services.html">Services</a>
                  </li>
                  <li>
                    <a href="./pp_packages.html">Packages</a>
                  </li>
                  <li>
                    <a href="./pp_page.html">Page</a>
                  </li>
                  <li>
                    <a href="./pp_contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="pp_register.html" className="active">
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ftext">
              <h1>Enjoy Your Vacation With Us</h1>
              <p>
                giving u verieties of option that suit your vacation with loved
                once
              </p>
              <div className="mainbutton">
                <input placeholder="Eg.Thailand" id="inputation"></input>
                <button id="searchbar">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
