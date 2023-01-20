import React from "react";
import image from "../../../assets/person.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Review = () => {
  return (
    <div>
      <h1 className="text-center text-black text-4xl my-4">Customer Review</h1>
      <div className="card lg:card-side bg-base-100 shadow-xl flex items-center mx-1 lg:mx-40 my-4">
        <div className="avatar w-full lg:w-1/3 p-5 lg:p-20">
          <div className="w-full rounded-full ">
            <img alt="" src={image} />
          </div>
        </div>
        <div className="card-body wfull lg:w-2/3">
          <div className="rating rating-md">
            <input type="radio" name="rating-5" className="mask mask-star-2" />
            <input type="radio" name="rating-5" className="mask mask-star-2" />
            <input type="radio" name="rating-5" className="mask mask-star-2" />
            <input type="radio" name="rating-5" className="mask mask-star-2" />
            <input type="radio" name="rating-5" className="mask mask-star-2" />
          </div>
          <p>5/5</p>
          <p>
            At first, I had my doubts about online counselling, but I gave it a
            shot and was pleasantly surprised to learn how much it can actually
            aid you. Dr. Sayesta created a wonderfully peaceful, healing
            environment where I felt free to share details with her that I would
            normally feel embarrassed to do so. She offers much-appreciated
            compassion instead of any judgement, followed by advice. She can
            pinpoint the source of my problems and the exercises I can do to
            solve them. I occasionally feel depressed again, but he constantly
            inspires me to get back on the right track. A truly helpful person
            is someone who won't judge you.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="btn-group grid grid-cols-2 gap-4 w-60 place-content-center mx-auto">
        <button className="btn btn-sm text-2xl">
          <FaAngleLeft />
        </button>
        <button className="btn btn-sm text-2xl">
          <FaAngleRight />
        </button>
      </div>
      <div className="text-center">
        <h2
          style={{
            color: "#6D2E46",
          }}
          className="text-2xl my-10"
        >
          Start Online Psychologist Consultation With Three Easy Steps
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-1 lg:mx-5">
          <div className="card w-full bg-base-100 shadow-xl">
            <div
              className="radial-progress mx-auto mt-5"
              style={{ "--value": 30, color: "#6D2E46", background: "#D9D9D9" }}
            >
              1
            </div>
            <div className="card-body items-center text-center">
              <h2
                style={{
                  color: "#6D2E46",
                }}
                className="card-title"
              >
                Choose A Package
              </h2>
              <p>
                Choose between two types of packages, Depending upon on your
                requirement and need.
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <div
              className="radial-progress mx-auto mt-5"
              style={{ "--value": 70, color: "#6D2E46", background: "#D9D9D9" }}
            >
              2
            </div>
            <div className="card-body items-center text-center">
              <h2
                style={{
                  color: "#6D2E46",
                }}
                className="card-title"
              >
                Connect With Your Therapist
              </h2>
              <p>
                Fill out our form and complete the payment process I Will
                shortly be in touch with you
              </p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <div
              className="radial-progress mx-auto mt-5"
              style={{
                "--value": 100,
                color: "#6D2E46",
                background: "#D9D9D9",
              }}
            >
              3
            </div>
            <div className="card-body items-center text-center">
              <h2
                style={{
                  color: "#6D2E46",
                }}
                className="card-title"
              >
                Begin Your Healing Journey
              </h2>
              <p>Start your session with Me, a step towards healing.</p>
            </div>
          </div>
        </div>
        <button
          style={{
            backgroundColor: "#6D2E46",
            width: "200px",
          }}
          className="btn my-6"
        >
          Book Session
        </button>
      </div>
    </div>
  );
};

export default Review;
