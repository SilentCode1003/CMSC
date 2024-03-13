import React from "react";
import ContactSection from "../HomePage/contact/ContactSection";
import hero from "../../assets/5L/hero.jpg";
import ServiceContent from "./ServiceContent";

const Services = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.8), rgba(10, 0, 0, 1)),url(${hero})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  const bg = {
    background: "#E7E5E4",
  };
  return (
    <section>
      <div
        className="header w-full px-4 md:px-8 lg:px-16 xl:px-20 pt-48 pb-16"
        style={styles}
      >
        <h1 className="text-stone-200 text-7xl font-bold capitalize">
          Our Services
        </h1>
      </div>
      <ServiceContent />
      <ContactSection />
    </section>
  );
};

export default Services;
