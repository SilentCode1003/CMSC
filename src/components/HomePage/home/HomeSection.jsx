import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSection = ({ title, title1, title2, subtitle, subtitle1 }) => {
  const red = {
    background: "#FF0000",
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="hero_section" className="px-4 md:px-8 lg:px-16 xl:px-20">
      {/* hero title */}
      <div className="align_center flex-col justify-center ">
        <h1
          id="hero_title"
          className="text-4xl md:text-5xl md:font-medium mt-56 lg:text-6xl lg:font-medium xl:text-7xl xl:font-medium text-white text-center font-bold tracking-wide"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
        >
          <span className="text-yellow-600 uppercase"> {title} </span>
          {title1}
          <br />
          {title2}
        </h1>
        <p
          id="hero_subtitle"
          className="mx-auto text-xs md:text-sm lg:text-base xl:text-base my-2 leading-6 text-white text-center tracking-widest"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="600"
        >
          {subtitle}
          <br /> {subtitle1}
        </p>

        {/* button */}
        <Link to="/contacts">
          <button
            type="button"
            className="text-white w-32 md:w-40 py-2 md:py-3 px-2 md:px-4 text-center my-6 mx-auto md:mx-2.5 rounded-md font-bold uppercase bg-red-700"
            style={red}
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="700"
          >
            join us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeSection;
