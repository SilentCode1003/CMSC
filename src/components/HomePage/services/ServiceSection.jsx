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
      <div className="section-container w-11/12 h-full max-w-7xl grid grid-cols-2 items-center gap-32 py-14 px-0">
        <div className="contentLeft w-full">
          <div className="section-row w-full grid grid-cols-4 gap-3">
            <div className="sectionImgWrapper w-full h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img
                src={it}
                alt=""
                className="w-full h-full object-cover select-none transition duration-300 hover:scale-105 border-[2px] border-solid rounded-xl border-stone-200"
                data-aos="fade"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-delay="100"
              />
            </div>

            <div className="sectionImgWrapper w-full h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img
                src={phone}
                alt=""
                className="w-full h-full object-cover select-none transition duration-300 hover:scale-105 border-[2px] border-solid rounded-xl border-stone-200"
                data-aos="fade"
                data-aos-duration="500"
                data-aos-easing="ease-in"
                data-aos-once="true"
                data-aos-delay="200"
              />
            </div>

            <div className="sectionImgWrapper w-full h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img
                src={cable}
                alt=""
                className="w-full h-full object-cover select-none transition duration-300 hover:scale-105 border-[2px] border-solid rounded-xl border-stone-200"
                data-aos="fade"
                data-aos-duration="500"
                data-aos-easing="ease-in"
                data-aos-once="true"
                data-aos-delay="300"
              />
            </div>

            <div className="sectionImgWrapper w-full h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img
                src={electric}
                alt=""
                className="w-full h-full object-cover select-none transition duration-300 hover:scale-105 border-[2px] border-solid rounded-xl border-stone-200"
                data-aos="fade"
                data-aos-duration="500"
                data-aos-easing="ease-in"
                data-aos-once="true"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>

        <div className="contentRigh w-full">
          <div
            className="section-content flex flex-col items-start gap-10"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-delay="100"
          >
            <h2 className="text-3xl text-black font-semibold">
              <span className="text-white">Providing</span> High-Quality
              Services
            </h2>
            <p className="text-black text-base leading-7 pb-3">
              <ul className="list-disc p-4 text-lg">
                <li className="text-white font-bold">
                  Electrical Design and Installation
                </li>
                <li className="text-white font-bold py-3 px-0">
                  Installation and Repair of Surveillance Systems/CCTV
                </li>
                <li className="text-white font-bold">
                  Structured Cabling Design and Installation
                </li>
                <li className="text-white font-bold py-3 px-0">
                  RFID System Design and Installation
                </li>
                <li className="text-white font-bold">
                  PABX Design and Installation
                </li>
              </ul>
            </p>
            <a
              href="#"
              className="text-base font-bold inline-block no-underline tracking-normal py-3 px-8 text-black rounded-lg select-none bg-slate-200"
            >
              Find more about our services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
