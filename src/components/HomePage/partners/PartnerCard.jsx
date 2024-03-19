import React from "react";
import ref from "../../../assets/Partner/Dunkin.jpg";
import wats from "../../../assets/Partner/watsons.jpg";
import seveleven from "../../../assets/Partner/seveneleven.png";
import bg from "../../../assets/banner-bg.jpg";

const PartnerCard = () => {
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
      <div className="product-header pt-9 text-4xl m-auto leading-10">
        <h1
          className="font-bold uppercase text-white"
          data-aos="fade"
          data-aos-duration="300"
          data-aos-easing="ease-in"
          data-aos-once="true"
          data-aos-delay="500"
        >
          Our Partners
        </h1>
      </div>
      <div className="subproduct-container max-w-[90%] m-auto pb-5 px-0 flex flex-wrap justify-center">
        {/* partner div */}
        <div className="service-cards grid grid-cols-3 gap-24 my-10 mx-24">
          {/* partner 1 */}
          <div
            className="card h-auto w-[auto] py-[3%] px-[3%] flex items-center flex-col relative overflow-hidden border-[3px] border-red-600 rounded-xl"
            data-aos="flip-right"
            data-aos-duration="300"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <img
              src={ref}
              alt=""
              className="h-52 w-full rounded-xl border border-solid border-red-600"
            />
          </div>

          {/* partner 2 */}
          <div
            className="card h-auto w-auto py-[3%] px-[3%] flex items-center flex-col relative overflow-hidden border-[3px] border-red-600 rounded-xl"
            data-aos="flip-right"
            data-aos-duration="300"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <img
              src={wats}
              alt=""
              className="h-52 w-full rounded-xl border border-solid border-red-600"
            />
          </div>

          {/* partner 3 */}
          <div
            className="card h-auto w-auto py-[3%] px-[3%] flex items-center flex-col relative overflow-hidden border-[3px] border-red-600 rounded-xl"
            data-aos="flip-right"
            data-aos-duration="300"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <img
              src={seveleven}
              alt=""
              className="h-52 w-full rounded-xl border border-solid border-red-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
