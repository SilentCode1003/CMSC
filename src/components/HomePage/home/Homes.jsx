import React from "react";
import HomeSection from "./HomeSection";
import AboutSection from "../about/AboutSection";
import ServiceSection from "../services/ServiceSection";
import ProductSection from "../products/ProductSection";
import NewsPage from "./../news/NewsSection";
import ContactPage from "../contact/ContactSection";
import hero from "../../../assets/5L/hero.jpg";
import PartnerCard from "../products/PartnerCard";

const HomePage = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.7), rgba(10, 0, 0, 0.9)),url(${hero})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    innerWidth: "100%",
  };

  return (
    <section>
      <div className="w-full min-h-screen pb-16" style={styles}>
        <HomeSection
          title="unlocking solutions"
          title1="at its best"
          subtitle="Embark on a journey of limitless innovation and excellence with us."
          subtitle1="Explore our offerings and transform your experience."
          link="/"
        />
      </div>
      <AboutSection />
      <ServiceSection />
      <ProductSection />
      <NewsPage />
      <PartnerCard />
      <ContactPage />
    </section>
  );
};

export default HomePage;
