import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: "#CEBEBE",
        color: "#6D2E46",
      }}
      className="py-8"
    >
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt="pic"
            src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
            className="rounded-lg shadow-2xl w-full lg:w-1/2"
          />
          <div className="w-full lg:w-1/2 text-center">
            <h1 className="text-3xl">Growth, healing and hope</h1>
            <p className="py-2">From the comfort of your own space</p>
            <p className="py-2">Individual therapy for adults</p>
            <button
              style={{
                backgroundColor: "#6D2E46",
                width: "200px",
              }}
              className="btn"
            >
              Book Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
