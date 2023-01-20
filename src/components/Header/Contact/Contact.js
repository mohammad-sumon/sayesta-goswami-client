import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaComment } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      style={{
        backgroundColor: "#CEBEBE",
        color: "#6D2E46",
      }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-center px-1 lg:px-10 py-10"
    >
      <div className="mx-auto">
        <h1 className="text-3xl">Contact Us</h1>
        <FaMapMarkerAlt />
        <p>
          Anchal Tower, Sixmile, <br /> Guwahati, Assam 781022, India
        </p>
        <FaPhoneAlt />
        <p>+918333552221</p>
        <FaComment />
        <p>sayestagoswami.pt@gmail.com</p>
      </div>
      <div className="mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <label className="input-group">
            <span>Name</span>
            <input
              type="text"
              placeholder=""
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <span>Email</span>
            <input
              type="text"
              placeholder=""
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <label className="input-group">
            <span>Message</span>
            <input
              type="text"
              placeholder=""
              className="input input-bordered"
            />
          </label>
        </div>
        <button
          style={{
            backgroundColor: "#6D2E46",
            width: "200px",
          }}
          className="btn mt-4"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
