import React from "react";
import Banner from "../Banner/Banner";
import Beginning from "../Beginning/Beginning";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#CEBEBE",
      }}
    >
      <Banner></Banner>
      <Beginning></Beginning>
      <Review></Review>
    </div>
  );
};

export default Home;
