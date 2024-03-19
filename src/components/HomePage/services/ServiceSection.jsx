import React from "react";
import { Link } from "react-router-dom";

const ServiceSection = ({
  img1,
  img2,
  img3,
  img4,
  s1,
  s2,
  s3,
  s4,
  s5,
  title1,
  title2,
  button,
}) => {
  const red = {
    background: "#FF0000",
  };

  return (
    <section className="w-full max-h-full grid place-items-center" style={red}>
      <div className="section-container w-11/12 h-full max-w-7xl grid grid-cols-2 items-center gap-32 py-14 px-0">
        {/* div left */}
        <div className="contentLeft w-full">
          <div className="section-row w-full grid grid-cols-4 gap-3">
            {/* service 1 */}
            <div className="sectionImgWrapper w-full h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img
                src={img1}
                alt=""
                className="w-full h-full object-cover select-none border-[2px] border-solid rounded-xl border-stone-200"
                data-aos="fade"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-delay="100"
              />
            </div>

            {/* service 2 */}
            <div className="sectionImgWrapper w-full h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img
                src={img2}
                alt=""
                className="w-full h-full object-cover select-none border-[2px] border-solid rounded-xl border-stone-200"
                data-aos="fade"
                data-aos-duration="500"
                data-aos-easing="ease-in"
                data-aos-once="true"
                data-aos-delay="200"
              />
            </div>

            {/* service 3 */}
            <div className="sectionImgWrapper w-full h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img
                src={img3}
                alt=""
                className="w-full h-full object-cover select-none border-[2px] border-solid rounded-xl border-stone-200"
                data-aos="fade"
                data-aos-duration="500"
                data-aos-easing="ease-in"
                data-aos-once="true"
                data-aos-delay="300"
              />
            </div>

            {/* service 4 */}
            <div className="sectionImgWrapper w-full h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img
                src={img4}
                alt=""
                className="w-full h-full object-cover select-none border-[2px] border-solid rounded-xl border-stone-200"
                data-aos="fade"
                data-aos-duration="500"
                data-aos-easing="ease-in"
                data-aos-once="true"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>

        {/* div right */}
        <div className="contentRight w-full">
          <div
            className="section-content flex flex-col items-start gap-10"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-delay="100"
          >
            <h2 className="text-3xl text-black font-semibold">
              <span className="text-white">{title1}</span> {title2}
            </h2>

            <ul className="list-disc p-4 text-lg text-black leading-7 pb-3">
              <li className="text-white font-bold">{s1}</li>
              <li className="text-white font-bold py-3 px-0">{s2}</li>
              <li className="text-white font-bold">{s3}</li>
              <li className="text-white font-bold py-3 px-0">{s4}</li>
              <li className="text-white font-bold">{s5}</li>
            </ul>

            {/* button */}

            <Link
              to="/services"
              className="button text-base font-bold inline-block no-underline tracking-normal py-3 px-8 text-black rounded-lg select-none bg-slate-200"
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
