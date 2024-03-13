import React from "react";
import ceo from "../../assets/5L/CEO.png";

const About = () => {
  return (
    <div className="about w-full h-screen flex justify-center items-center relative bg-slate-100">
      <div className="content w-[1280px] max-w-[95%] my-0 mx-auto flex flex-wrap items-center justify-around relative">
        <div className="text max-w-full w-[550px] py-0 px-2">
          <h5 className=" text-3xl uppercase tracking-wider mb-5 font-bold">
            5l solutions supply & <br />
            allied service corp.
          </h5>
          <p className="leading-7 text-justify text-sm tracking-wide mb-5">
            The Company was formed as a Corporation in September 29, 2015.
            Although still a young company at the present time, it has serviced
            a sizeable number of residences and stores during the first year of
            operations, with a workforce of twenty (20) skilled and professional
            personnel over 200 stores initially, located in the Luzon and
            Visayas Region of the Philippines. Now, our company has increased to
            more than 100 employees and over 2000 stores and companies
            nationwide. providing technical equipment and services in the field
            of Information Technology in offices, residences, companies and
            manufacturing organization across various industries. Subsequent to
            service engagement, the Company has the capability to design,
            install and repair electronic and electrical powered devices or
            equipment such as CCTV, cable, air conditioning, system, security
            system customized to Customer requirement.
          </p>
          <p className="leading-7 tracking-wide pt-5 mb-2">
            Gil A. Bagapuro - <strong>CEO</strong>
          </p>
        </div>
        <img
          src={ceo}
          alt="mr. bagapuro"
          className="max-w-full h-[600px] w-[550px] rounded-2xl border-8 border-red-600"
        />
      </div>
    </div>
  );
};

export default About;
