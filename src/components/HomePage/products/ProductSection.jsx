import React from "react";
import bg from "../../../assets/partner-bg.jpg";
import ups from "../../../assets/Products/UPS.png";
import ups2 from "../../../assets/Products/UPS2.png";
import yellow from "../../../assets/Products/yellow.png";
import ref from "../../../assets/Products/ref.png";

const ProductSection = () => {
  const red = {
    background: "#FF0000",
  };

  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.7), rgba(10, 0, 0, 0.7)),url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="product-container text-center" style={styles}>
      <div className="product-header pt-14 text-4xl m-auto leading-10">
        <h1 className="font-bold uppercase text-white">Our Product</h1>
      </div>

      <div className="subproduct-container max-w-7xl m-auto pb-5 px-0 flex flex-wrap justify-center">
        <div className="product-teams my-14 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-white rounded-xl transition duration-500 box-border hover:bg-slate-100 hover:rounded-xl hover:scale-110 hover:text-black">
          <p className="name font-bold text-base capitalize text-white transition duration-300 hover:text-black">
            <img src={yellow} alt="" className="w-56 h-full py-3 my-2 mx-0" />
            Cyber<span className="text-red-600">Power</span> CPS
          </p>
        </div>

        <div className="product-teams my-14 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-white rounded-xl transition duration-500 box-border hover:bg-slate-100 hover:rounded-xl hover:scale-110">
          <p className="name font-bold text-base capitalize text-white transition duration-300 hover:text-black">
            <img src={ups} alt="" className="w-56 h-full py-3 my-2 mx-0" />
            Cyber<span className="text-red-600">Power</span> UT
          </p>
        </div>

        <div className="product-teams my-14 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-white rounded-xl transition duration-500 box-border hover:bg-slate-100 hover:rounded-xl hover:scale-110">
          <p className="name font-bold text-base capitalize text-white transition duration-300 hover:text-black">
            <img src={ups2} alt="" className="w-56 h-full py-3 my-2 mx-0" />
            Cyber<span className="text-red-600">Power</span> VALUE
          </p>
        </div>

        <div className="product-teams my-14 mx-5 p-6 max-w-[30%] cursor-pointer border border-solid border-white rounded-xl transition duration-500 box-border hover:bg-slate-100 hover:rounded-xl hover:scale-110">
          <p className="name font-bold text-base capitalize text-white transition duration-300 hover:text-black">
            <img src={ref} alt="" className="w-56 h-full py-3 my-2 mx-0" />
            Cyber<span className="text-red-600">Power</span> OLS
          </p>
        </div>

        <button
          type="button"
          className="justify-center text-white items-center block mb-3 mx-auto py-3 px-8 text-base font-bold no-underline rounded-lg bg-red-600"
        >
          Learn more about our products
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
