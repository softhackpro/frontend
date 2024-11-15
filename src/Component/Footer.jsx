import React from "react";
import { TfiEmail } from "react-icons/tfi";
import {
  FaFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { TbChartCircles } from "react-icons/tb";
import { Link } from "react-router-dom";
const Footer = ({ info }) => {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Pages</h5>
            <ul className="nav flex-column">
              {info.map((item) => (
                <li key={item._id} className="nav-item mb-2">
                  <Link
                    to={"/Page/" + item._id}
                    className="nav-link p-0 text-muted"
                  >
                    {item.Title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Redirect</h5>
            <ul className="nav flex-column">
              <Link to="/FAQ" className="text-decoration">
                <li className="nav-item mb-2">FAQ</li>
              </Link>
              <Link to="/Events" className="text-decoration">
                <li className="nav-item mb-2">Events</li>
              </Link>
              <Link to="/Gallery" className="text-decoration">
                <li className="nav-item mb-2">Gallery</li>
              </Link>
              <Link to="/Members" className="text-decoration">
                <li className="nav-item mb-2">Members</li>
              </Link>
              <Link to="/Donation" className="text-decoration">
                <li className="nav-item mb-2">Donation</li>
              </Link>
              <Link to="/LoginPage" className="text-decoration">
                <li className="nav-item mb-2">Login</li>
              </Link>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Social Media</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://www.facebook.com/people/All-India-Dusadh-Parivar/61560436426347/" className="nav-link p-0 text-muted">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  <FaSquareInstagram />
                  Instagram
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  <FaSquareXTwitter />X
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://www.youtube.com/@allindiadusadhpariwar7267" className="nav-link p-0 text-muted">
                  <FaYoutube />
                  YouTube
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  <TbChartCircles />
                  Flyube
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3 ">
            <img style={{maxWidth:'100%', maxHeight:'120px'}} src="/logo.jpg" alt="logo" />
            &nbsp;
            <span>All India dusadh Pariwar</span>
            <p>AIDP: All India dusadh Pariwar - You can contact us via mail, soical media, phone no. for more details</p>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Developed By Roshan Paswan</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="mailto:sr.roshan.0502@gmail.com">
                <TfiEmail />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="https://www.instagram.com/mrrossan">
                <FaSquareInstagram />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
