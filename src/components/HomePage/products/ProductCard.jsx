import React from "react";
import ups from "../../../assets/Products/UPS.png";
import ups2 from "../../../assets/Products/UPS2.png";
import yellow from "../../../assets/Products/yellow.png";
import ref from "../../../assets/Products/ref.png";
import ProductSection from "./ProductSection";

const ProductCard = () => {
  return (
    <ProductSection
      header="Our Products"
      img1={yellow}
      img2={ups}
      img3={ups2}
      img4={ref}
      link="Learn more about our products"
    />
  );
};

export default ProductCard;
