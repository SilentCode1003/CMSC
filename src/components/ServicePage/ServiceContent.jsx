import React from "react";
import ref from "../../assets/ITSupport.jpg";

const ServiceContent = () => {
  return (
    <div className="service-container min-h-screen w-full bg-slate-100">
      <div className="service-wrapper py-[5%] px-[8%]">
        <div className="service flex flex-col items-center">
          {/* service card */}
          <div className="service-cards grid grid-cols-3 gap-24 mt-12">
            {/* service 1 */}
            <div
              className="card h-[480px] -mt-12 w-80 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={ref}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl transition duration-300 hover:scale-105"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                IT Support
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                We offer comprehensive IT support services to help you
                troubleshoot any issues you may encounter with your hardware,
                software, or network.
              </p>
            </div>

            {/* service 2 */}
            <div
              className="card h-[480px] -mt-12 w-80 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={ref}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl transition duration-300 hover:scale-105"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                Installation and Repair of Surveillance Systems/CCTV
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                Our team of experts can help you install and repair CCTV systems
                to ensure the safety and security of your property.
              </p>
            </div>

            {/* service 3 */}
            <div
              className="card h-[480px] -mt-12 w-80 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={ref}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl transition duration-300 hover:scale-105"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                Electrical Design and Installation
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                We specialize in providing comprehensive electrical design and
                installation services for residential and commercial properties.
              </p>
            </div>

            {/* service 4 */}
            <div
              className="card -mt-12 h-[480px] w-80 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={ref}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl transition duration-300 hover:scale-105"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                Solar Panel Design and Installation
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                Our team can help you design and install solar panels to help
                you save money on energy costs and reduce your carbon footprint.
              </p>
            </div>

            {/* service 5 */}
            <div
              className="card -mt-12 h-[480px] w-80 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={ref}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl transition duration-300 hover:scale-105"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                PABX Design and Installation
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                We offer professional PABX design and installation services to
                help you streamline your communication systems.
              </p>
            </div>

            {/* service 6 */}
            <div
              className="card -mt-12 h-[480px] w-80 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={ref}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl  transition duration-300 hover:scale-105"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                RFID System Design and Installation
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                Our team can help you design and install RFID systems to help
                you track inventory, assets, and personnel.
              </p>
            </div>

            {/* service 7 */}
            <div
              className="card -mt-12 h-[480px] w-80 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={ref}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl  transition duration-300 hover:scale-105"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                Structured Cabling Design and Installation
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                We provide professional structured cabling design and
                installation services to ensure that your network infrastructure
                is reliable and efficient.
              </p>
            </div>

            {/* service 8 */}
            <div
              className="card -mt-12 h-[480px] w-80 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={ref}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl  transition duration-300 hover:scale-105"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                Civil Works / Landscaping / Door Access
              </h2>
              <p className="text-center w-full my-3 mx-0 text-sm">
                We offer a range of civil works and landscaping services,
                including door access installation, to help you enhance the
                appearance and functionality of your property.
              </p>
            </div>

            {/* service 9 */}
            <div
              className="card -mt-12 h-[480px] w-80 py-[3%] px-[8%] flex items-center flex-col relative overflow-hidden border-4 border-red-600 rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <img
                src={ref}
                alt=""
                className="mt-8 mb-5 h-52 w-full rounded-xl  transition duration-300 hover:scale-105"
              />
              <h2 className="a text-xl font-semibold tracking-wide">
                Industrial Board Repair
              </h2>
              <p className="text-center w-full my-3 mx-0">
                Our team of experts can help you repair and maintain industrial
                boards to ensure that your equipment operates smoothly and
                efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
