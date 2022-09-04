import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FootWrapper from "./style";
import google from "../../assets/google_play_badge.svg";
import apple from "../../assets/app_store_badge.svg";

function index() {
  const newYear = new Date().getFullYear();
  return (
    <>
      <FootWrapper>
        <div className="footercase">
          <div className="detail">
            <h4>Company</h4>
            <div>
              <Link to="/about" className="link">
                About
              </Link>
            </div>
            <div>
              <Link to="/press" className="link">
                Press
              </Link>
            </div>
            <div>
              <Link to="/contact" className="link">
                Contact Info
              </Link>
            </div>
            <div>
              <Link to="/question" className="link">
                FAQ
              </Link>
            </div>
          </div>
          <div className="detail">
            <h4>Pages</h4>
            <div>
              <Link to="/birth" className="link">
                Birth
              </Link>
            </div>
            <div>
              <Link to="/dead_bodies" className="link">
                Dead Bodies
              </Link>
            </div>
            <div>
              <Link to="/missing_person" className="link">
                Missing Person
              </Link>
            </div>
            <div>
              <Link to="/identified_person" className="link">
                Identified Person
              </Link>
            </div>
          </div>
          <div className="detail">
            <h4>Resources</h4>
            <div>
              <Link to="/stat" className="link">
                Statistic
              </Link>
            </div>
          </div>
          <div className="detail">
            <div className="marbox">
              <h4>Mobile Download</h4>
              <div className="google">
                <a
                  href="https://play.google.com/store/games"
                  rel="noopener noreferrer"
                >
                  <img src={google} alt="google-playstore" />
                </a>
              </div>
              <div className="apple">
                <a
                  href="https://play.google.com/store/games"
                  rel="noopener noreferrer"
                >
                  <img src={apple} alt="google-playstore" />
                </a>
              </div>
            </div>
          </div>
          <div className="detail">
            <div className="curvedetails">
              <p className="me">+234813759225</p>
              <p className="me">people@people.com</p>
              <p className="me">
                9c, Environmental Crescent, Unilag Estate, Magodo, Ojudu-berger,
                Lagos-State
              </p>
            </div>
            <p className="linklogo">
              <span>
                <FaFacebookSquare />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaWhatsappSquare />
              </span>
              <span>
                <FaTwitterSquare />
              </span>
            </p>
          </div>
        </div>
        <div className="foottext">
          <h4>Legal Terms and Policies</h4>
          <div className="copyright">
            <p>Copyright © People {newYear}. All rights reserved</p>
            <h4>People</h4>
          </div>
        </div>
      </FootWrapper>
    </>
  );
}

export default index;
