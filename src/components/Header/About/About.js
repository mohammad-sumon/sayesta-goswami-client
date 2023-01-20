import React from "react";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "#CEBEBE",
        color: "#6D2E46",
      }}
    >
      <h2 className="text-3xl pt-3 lg: py-5 text-center">About me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-center">
        <img
          className="w-full p-4"
          src="https://images.unsplash.com/photo-1551601651-09492b5468b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=913&q=80"
          alt=""
        />
        <p className="w-full p-4">
          Hello, I have completed an undergraduate degree in psychology at Delhi
          University, subsequently pursued graduate training in counseling
          psychology at the AIIMS Delhi, and completed a doctorate in clinical
          psychology at the Adler School of Professional Psychology. I have
          clinical interests and worked with children, teens, adults, diagnostic
          assessment and addictions. I use a broad range of cognitive behavioral
          and insight oriented techniques in the psychotherapy and counseling
          process. <br /> I have also taught a broad variety of graduate
          psychology and counseling courses at the Delhi University and Jamia
          Milia Islamia. I have lectured and presented training seminars and
          workshops nationally and internationally in Europe and East Asia. My
          research and publication interests have included addictions,
          psychometrics, clinical training and supervision, and the integration
          of spiritual values in psychotherapy and supervision.
        </p>
        <button
          style={{
            backgroundColor: "#6D2E46",
            width: "200px",
          }}
          className="btn mx-auto mb-10"
        >
          Contact Dr. Goswami
        </button>
      </div>
    </div>
  );
};

export default About;
