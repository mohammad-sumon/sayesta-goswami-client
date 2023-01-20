import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div
      style={{
        color: "#6D2E46",
      }}
      className="navbar bg-base-100"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="text-base">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-base">
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-base">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-2xl text-center">
          Sayesta Goswami, PhD <br />
          <span className="text-xs">CLINICAL PSYCHOLOGIST</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-base">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-base">
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to="contact" className="text-base">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
