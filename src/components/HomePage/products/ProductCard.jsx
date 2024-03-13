import React from "react";

const ProductCard = ({ image }) => {
  return (
    <div className="text-center w-72 overflow-hidden mt-4 border-4 border-solid border-red-600 rounded-2xl shadow-neutral-950">
      <div className="product_image w-60 my-5 mx-auto">
        <img
          src={image}
          alt="product image"
          className="w-full transition duration-500 hover:transform scale-100"
        />
        <h4 className="py-0 px-6 mb-3 text-lg">Lorem ipsum dolor sit amet.</h4>
      </div>
    </div>
  );
};

export default ProductCard;
