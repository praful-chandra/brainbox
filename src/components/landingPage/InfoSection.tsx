import React from "react";
import LocalIcon from "../common/LocalIcon";

const InfoSection = () => {
  return (
    <section className="w-full min-h-[100vh] bg-brand-secondary-500 rounded-tl-section rounded-tr-section">
      <div
        className="container flex items-center justify-center min-h-[100vh] text-brand-secondary-100
       typo-desktop-h5 sm:typo-desktop-h4 lg:typo-large px-20
      "
      >
        <div className="">
          <span>
            Somewhere along the line, Productivity tools became overly complex{" "}
          </span>
          <LocalIcon
            path="category"
            className="inline-block m-4  pb-3 w-[3rem] sm:w-[4rem]"
            width={35}
          />
          <span>Instead of simplifying tasks</span>
          <LocalIcon
            path="filledEdit"
            className="inline-block m-4 pb-3 w-[3rem] sm:w-[4rem]"
            width={40}
          />
          <span>they ended up making things more complex</span>
          <LocalIcon
            path="rocket2"
            className="inline-block m-4  pb-3 w-[3rem] sm:w-[4rem]"
            width={35}
          />
          <span>
            So, we decided to strip away the clutter and organise everything
            around the most fundamental concept: time
          </span>
          <LocalIcon
            path="clock"
            className="inline-block m-4  pb-3"
            width={35}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
