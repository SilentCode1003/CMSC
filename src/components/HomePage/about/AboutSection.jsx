import React from "react";
import ceo from "../../../assets/5L/CEO.png";

const AboutSection = () => {
  const bg = {
    background: "#E7E5E4",
  };

  const red = {
    color: "#FF0000",
  };

  return (
    <section>
      <div
        className="about w-full h-screen flex justify-center items-center relative"
        style={bg}
      >
        <div className="content w-[1280px] max-w-[95%] my-0 mx-auto flex flex-wrap items-center justify-around relative">
          <div className="text max-w-full w-[550px] py-0 px-2">
            <h1 className="capitalize font-bold text-2xl mb-1" style={red}>
              Company Profile
            </h1>
            <h5 className=" text-4xl uppercase tracking-wider mb-5 font-bold">
              5l solutions supply & <br />
              allied service corp.
            </h5>
            <p className="leading-7 text-base tracking-wide mb-5">
              5L SOLUTIONS SUPPLY AND ALLIED SERVICES is company who provides
              technical equipment and services in the field of information
              Technology in offices, residences, companies and manufacturing
              organization across various industries. Subsequent to service
              engagement, the Company has the capability to design, install and
              repair electronic and electrical powered devices or equipment such
              as CCTV, cable, air conditioning, system, security system
              customized to Customer requirement.
            </p>
            <p className="text-lg leading-7 tracking-wide mb-9">
              Gil A. Bagapuro - <strong>CEO</strong>
            </p>
            <button
              type="button"
              className="justify-center text-white items-center block my-auto mx-auto py-3 px-8 text-base font-bold no-underline rounded-lg bg-black"
            >
              Learn more about us
            </button>
          </div>
          <img
            src={ceo}
            alt="mr. bagapuro"
            className="max-w-full h-[500px] w-[500px] rounded-2xl border-8 border-red-600"
          />
        </div>
        {/* Skew*/}
        <div
          className="absolute bottom-0 left-0 w-full h-60"
          style={{
            background: "#FF0000",
            clipPath: "polygon(0% 80%, 100% 100%, 0% 100%)",
            marginBottom: "-1px",
          }}
        ></div>
      </div>
    </section>
  );
};

export default AboutSection;
