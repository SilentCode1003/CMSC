import React from "react";
import ref from "../../assets/Products/ref.png";
import dvd from "../../assets/Products/dvd.png";
import radio from "../../assets/Products/radio.webp";
import small from "../../assets/Products/small.png";
import ups from "../../assets/Products/UPS.png";
import ups2 from "../../assets/Products/UPS2.png";
import yellow from "../../assets/Products/yellow.png";

const ProductsContent = () => {
  return (
    <div className="service-container min-h-screen w-full bg-slate-100">
      <div className="service-wrapper py-[5%] px-[8%]">
        <div className="service flex flex-col items-center">
          <div className="service-cards grid grid-cols-4 gap-24 mt-16">
            <div
              className="card h-[480px] -mt-12 w-72 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl transition duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={ref}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                CyberPower OLS
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                Power continuity can be achieved with generators during a power
                outage. When UPS is running on generator’s power, it can
                stabilize unstable voltages from the generator while providing
                reliable power.
              </p>
            </div>

            <div
              className="card h-[480px] -mt-12 w-72 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl transition duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={dvd}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                CyberPower DVD
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                The product can monitor the health status of each connected
                battery, identifying the battery failure in advance and
                eliminating the risk of downtime.
              </p>
            </div>

            <div
              className="card h-[480px] -mt-12 w-72 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl transition duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={radio}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                CyberPower PDU
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                The overload protection can automatically cut off devices’ power
                when the loading exceeds the product’s limit. Therefore, this
                design prevents and minimizes the damages caused by overcurrent.
              </p>
            </div>

            <div
              className="card h-[480px] -mt-12 w-72 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl transition duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={small}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                CyberPower RMCARD
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                Users can perform scheduled shutdowns, startups, and reboots of
                the UPS. With the product, users are able to conveniently
                perform remote control of the UPS to achieve optimal system
                management.
              </p>
            </div>

            <div
              className="card h-[480px] -mt-12 w-72 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl transition duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={ups}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                CyberPower UT
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                The UPS has built-in Automatic Voltage Regulation (AVR) function
                to regulate low voltages and over voltages when incoming utility
                power has fluctuations, thus providing consistent and reliable
                power to connected devices.
              </p>
            </div>

            <div
              className="card h-[480px] -mt-12 w-72 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl transition duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={ups2}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                CyberPower VALUE
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                The UPS adopts CyberPower’s patented GreenPower UPS™ technology
                to enhance UPS operating efficiency, reduce heat generation,
                consume less power and save more energy costs than conventional
                UPS models.
              </p>
            </div>

            <div
              className="card h-[480px] -mt-12 w-72 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl transition duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={yellow}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                CyberPower CPS
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                The product provides Pure Sine Wave output, which is suitable
                for equipment requiring active PFC power supply, motor-based
                devices and sensitive electronics. It guarantees electronic
                equipment to run more efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContent;
