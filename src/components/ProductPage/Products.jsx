import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.cjs";
import hero from "../../assets/5L/hero.jpg";
import ContactPage from "../HomePage/contact/ContactSection";
import ProductsContent from "./ProductsContent";

const Products = () => {
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

  useEffect(() => {
    AOS.init();
  });

  return (
    <section className="" style={bg}>
      <div
        className="header w-full px-4 md:px-8 lg:px-16 xl:px-20 pt-48 pb-16"
        style={styles}
      >
        <h1
          className="text-stone-200 text-5xl font-bold uppercase"
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          products
        </h1>
      </div>
      <ProductsContent />

      {/* footer */}
      <ContactPage />
    </section>
  );
};

export default Products;
