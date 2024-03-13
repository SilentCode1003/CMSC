import React from "react";
import vast from "../../../assets/about/vast.png";
import account from "../../../assets/about/accountable.png";
import team from "../../../assets/about/team.png";
import sustain from "../../../assets/about/sustain.png";

const PartnerSection = () => {
  const styles = {
    background: "#7a1818",
  };

  return (
    <section className="bg-slate-300" style={styles}>
      <div className="h-56 flex px-28">
        <div className="relative bg-transparent w-1/4 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img src={vast} alt="vast exp img" className="w-16 h-16 mr-2" />
          </div>
          <h1 className="text-white text-center pt-6 text-bold text-xl">
            Vast Experience
          </h1>
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>

        <div className="relative bg-transparent w-1/4 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img src={team} alt="prof team img" className="w-16 h-16 mr-2" />
          </div>
          <h1 className="text-white text-center pt-6 text-bold text-xl">
            Professional Team
          </h1>
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>

        <div className="relative bg-transparent w-1/4 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              src={account}
              alt="accountable img"
              className="w-16 h-16 mr-2"
            />
          </div>
          <h1 className="text-white text-center pt-6 text-bold text-xl">
            Accountable
          </h1>
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>

        <div className="relative bg-transparent w-1/4 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              src={sustain}
              alt="sustainable img"
              className="w-16 h-16 mr-2"
            />
          </div>
          <h1 className="text-white text-center pt-6 text-bold text-xl">
            Sustainable
          </h1>
          <div className="absolute top-0 bottom-0 right-0 w-1 bg-white"></div>
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
