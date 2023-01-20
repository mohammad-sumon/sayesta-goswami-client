import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaComment } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "#E7E6E4",
          color: "#6D2E46",
        }}
        className="footer p-10 text-neutral-content"
      >
        <div>
          <span className="footer-title text-2xl text-center">
            Sayesta Goswami, PhD <br />
            <span className="text-xs">CLINICAL PSYCHOLOGIST</span>
          </span>
          <span>
            <FaMapMarkerAlt />
            <p>
              Anchal Tower, Sixmile, Guwahati,
              <br /> Assam 781022, India
            </p>
          </span>
          <FaPhoneAlt />
          <p>+918333552221</p>
          <FaComment />
          <p>sayestagoswami.pt@gmail.com</p>
        </div>
        <div>
          <span className="footer-title text-2xl">Quick Links</span>
          <p>Book Session</p>
          <p>About Me</p>
          <p>Contact Us</p>
        </div>
        <div>
          <span className="footer-title text-2xl">Legal Stuff</span>
          <Link>Disclaimer</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms of Services</Link>
        </div>
      </footer>
      <div
        style={{
          backgroundColor: "#E7E6E4",
          color: "#6D2E46",
        }}
        className="text-center pb-5"
      >
        <p>All Rights Reserved by Mohammad Sumon</p>
      </div>
    </div>
  );
};

export default Footer;
