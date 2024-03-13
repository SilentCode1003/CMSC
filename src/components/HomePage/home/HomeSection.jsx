import React from "react";

const HomeSection = ({ title, title1, subtitle, subtitle1, link }) => {
  const red = {
    background: "#FF0000",
  };

  return (
    <section id="hero_section" className="px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="align_center flex-col justify-center ">
        <h1
          id="hero_title"
          className="text-4xl md:text-5xl md:font-medium mt-56 lg:text-6xl lg:font-medium xl:text-7xl xl:font-medium text-white text-center font-bold uppercase tracking-wide"
        >
          {title}
          <br />
          {title1}
        </h1>
        <p
          id="hero_subtitle"
          className="mx-auto text-xs md:text-sm lg:text-base xl:text-base my-2 leading-6 text-white text-center tracking-widest"
        >
          {subtitle}
          <br /> {subtitle1}
        </p>

        <button
          type="button"
          className="text-white w-32 md:w-40 py-2 md:py-3 px-2 md:px-4 text-center my-6 mx-auto md:mx-2.5 rounded-md font-bold uppercase bg-red-700"
          style={red}
        >
          <a href={link}>join us</a>
        </button>
      </div>
    </section>
  );
};

export default HomeSection;
