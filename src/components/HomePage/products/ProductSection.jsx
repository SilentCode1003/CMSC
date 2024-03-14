import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/partner-bg.jpg";

const ProductSection = ({ img1, img2, img3, img4, header, link }) => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.7), rgba(10, 0, 0, 0.7)),url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="product-container text-center" style={styles}>
      {/* header */}
      <div className="product-header pt-14 text-4xl m-auto leading-10">
        <h1
          className="font-bold uppercase text-white"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-once="true"
          data-aos-delay="200"
        >
          {header}
        </h1>
      </div>

      {/* productSection div */}
      <div className="subproduct-container max-w-7xl m-auto pb-5 px-0 flex flex-wrap justify-center">
        {/* product 1 */}
        <div
          className="product-teams my-14 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-white rounded-xl transition duration-500 box-border hover:bg-slate-100 hover:rounded-xl hover:text-black"
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-easing="ease-in"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <p className="name font-bold text-base capitalize text-white transition duration-300 hover:text-black">
            <img
              src={img1}
              alt=""
              className="w-56 h-full py-3 my-2 mx-0 transition duration-300 hover:scale-110"
            />
            Cyber<span className="text-red-600">Power</span> CPS
          </p>
        </div>

        {/* product 2 */}
        <div
          className="product-teams my-14 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-white rounded-xl transition duration-500 box-border hover:bg-slate-100 hover:rounded-xl"
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-easing="ease-in"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <p className="name font-bold text-base capitalize text-white transition duration-300 hover:text-black">
            <img
              src={img2}
              alt=""
              className="w-56 h-full py-3 my-2 mx-0 transition duration-300 hover:scale-110"
            />
            Cyber<span className="text-red-600">Power</span> UT
          </p>
        </div>

        {/* product 3 */}
        <div
          className="product-teams my-14 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-white rounded-xl transition duration-500 box-border hover:bg-slate-100 hover:rounded-xl"
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-easing="ease-in"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <p className="name font-bold text-base capitalize text-white transition duration-300 hover:text-black">
            <img
              src={img3}
              alt=""
              className="w-56 h-full py-3 my-2 mx-0 transition duration-300 hover:scale-110"
            />
            Cyber<span className="text-red-600">Power</span> VALUE
          </p>
        </div>

        {/* product 4 */}
        <div
          className="product-teams my-14 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-white rounded-xl transition duration-500 box-border hover:bg-slate-100 hover:rounded-xl"
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-easing="ease-in"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <p className="name font-bold text-base capitalize text-white transition duration-300 hover:text-black">
            <img
              src={img4}
              alt=""
              className="w-56 h-full py-3 my-2 mx-0 transition duration-300 hover:scale-110"
            />
            Cyber<span className="text-red-600">Power</span> OLS
          </p>
        </div>

        {/* button */}
        <Link to="/products">
          <button
            type="button"
            className="justify-center text-white items-center block mb-3 mx-auto py-3 px-8 text-base font-bold no-underline rounded-lg bg-red-600"
            data-aos="fade"
            data-aos-duration="300"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-delay="100"
          >
            {link}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;
