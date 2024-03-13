import React from "react";
import it from "../../../assets/services/ITSupport.png";
import phone from "../../../assets/services/Phone.png";
import cable from "../../../assets/services/Cabling.png";
import electric from "../../../assets/services/Electrical.png";

const ServiceSection = () => {
  const red = {
    background: "#FF0000",
  };

  return (
    <section
      className="w-full max-h-screen grid place-items-center"
      style={red}
    >
      <div className="section-container w-11/12 h-full max-w-6xl grid grid-cols-2 items-center gap-16 py-9 px-0">
        <div className="contentLeft w-full">
          <div className="section-row w-full grid grid-cols-4 gap-3">
            <div className="sectionImgWrapper w-full h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img
                src={it}
                alt=""
                className="w-full h-full object-cover select-none transition duration-300 hover:scale-105"
              />
            </div>

            <div className="sectionImgWrapper w-full h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img
                src={phone}
                alt=""
                className="w-full h-full object-cover select-none transition duration-300 hover:scale-105"
              />
            </div>

            <div className="sectionImgWrapper w-full h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img
                src={cable}
                alt=""
                className="w-full h-full object-cover select-none transition duration-300 hover:scale-105"
              />
            </div>

            <div className="sectionImgWrapper w-full h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img
                src={electric}
                alt=""
                className="w-full h-full object-cover select-none transition duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="contentRight w-full">
          <div className="section-content flex flex-col items-start gap-4">
            <h4 className="text-base font-semibold text-white">Lorem ipsum</h4>
            <h2 className="text-4xl text-black font-semibold">
              Lorem ipsum dolor
            </h2>
            <p className="text-black text-base leading-7 pb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              accusamus dolorum laudantium cumque architecto, aut obcaecati
              minima rem quod illum vel ratione! Maxime possimus aut et ducimus
              placeat, aliquid porro.
            </p>
            <a
              href="#"
              className="text-base inline-block no-underline tracking-normal py-3 px-8 text-black rounded-lg select-none bg-slate-100"
            >
              Click Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
