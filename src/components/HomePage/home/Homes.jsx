import React from "react";
import HomeSection from "./HomeSection";
import AboutSection from "../about/AboutSection";
import NewsPage from "./../news/NewsSection";
import ContactPage from "../contact/ContactSection";
import hero from "../../../assets/5L/hero.jpg";
import PartnerCard from "./../partners/PartnerCard";
import Service from "../services/Service";
import ProductCard from "../products/ProductCard";

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
          title="unlocking"
          title1="SOLUTIONS"
          title2="AT ITs BEST"
          subtitle="Embark on a journey of limitless innovation and excellence with us."
          subtitle1="Explore our offerings and transform your experience."
          link="/"
        />
      </div>
      <AboutSection />
      <Service />
      <ProductCard />
      <NewsPage />
      <PartnerCard />

      {/* footer */}
      <ContactPage />
    </section>
  );
};

export default HomePage;
