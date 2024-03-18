import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.cjs";
import hero from "../../assets/5L/hero.jpg";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGlobeAsia,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCopyright,
} from "react-icons/fa";

const Contacts = () => {
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
      {/* header */}
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
          get in touch
        </h1>
      </div>

      {/* Contact Box */}
      <div
        className="contactUs relative w-full py-10 px-24"
        style={bg}
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-delay="200"
      >
        <div className="contact-box relative grid gap-5 my-10 mx-0">
          <div className="contact form p-10 bg-stone-100 shadow-xl border-[3px] border-solid border-black">
            <h3 className="font-bold text-xl">Send a Message</h3>

            <form action="" className="">
              <div className="formBox relative w-full">
                <div className="row50 flex gap-5">
                  <div className="inputBox flex flex-col mb-3 w-1/2">
                    <span className="mt-3 mb-1 font-medium">First name</span>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="First Name"
                      className="p-3 text-sm outline-none rounded-tl border border-gray-900 placeholder:text-gray-300"
                    />
                  </div>

                  <div className="inputBox flex flex-col mb-3 w-1/2">
                    <span className="mt-3 mb-1 font-medium">Last name</span>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Last Name"
                      className="p-3 text-sm outline-none rounded-tl border border-gray-900 placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="row50 flex gap-5">
                  <div className="inputBox flex flex-col mb-3 w-1/2">
                    <span className="mt-3 mb-1 font-medium">Email</span>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="sampleEmail@email.com"
                      className="p-3 text-sm outline-none rounded-tl border border-gray-900 placeholder:text-gray-300"
                    />
                  </div>

                  <div className="inputBox flex flex-col mb-3 w-1/2">
                    <span className="mt-3 mb-1 font-medium">Mobile</span>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="123-123-1234"
                      className="p-3 text-sm outline-none rounded-tl border border-gray-900 placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox mt-6">
                    <span>Message</span>
                    <textarea
                      placeholder="Write your message here..."
                      className="p-3  w-full text-sm outline-none border border-solid border-gray-900 resize-none min-h-56 mb-3 placeholder:text-gray-300"
                    ></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <input
                      type="submit"
                      value="Send"
                      className="bg-black text-white border-none text-sm max-w-32 font-medium cursor-pointer py-3 px-4 rounded-md w-72 mt-5"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact info bg-stone-100 p-10 shadow-xl border-[3px] border-solid border-black">
            <h3 className="font-bold text-xl">Contact Info</h3>
            <div className="infoBox">
              <div className="flex items-center mb-3">
                <span className="text-black min-w-10 h-10 flex justify-center items-center text-2xl mr-4 rounded-full">
                  <FaMapMarkerAlt />
                </span>
                <p className="text-base">
                  Lorem ipsum dolor, sit amet <br />
                  PH
                </p>
              </div>

              <div className="flex items-center mb-3">
                <span className="text-black min-w-10 h-10 flex justify-center items-center text-2xl mr-4 rounded-full">
                  <FaEnvelope />
                </span>
                <a href="#" className="no-underline text-base">
                  sampleEmail@gmail.com
                </a>
              </div>

              <div className="flex items-center mb-3">
                <span className="text-black min-w-10 h-10 flex justify-center items-center text-2xl mr-4 rounded-full">
                  <FaPhoneAlt />
                </span>
                <a href="#" className="no-underline text-base">
                  123-123-1234
                </a>
              </div>

              <ul className="sci mt-10 flex">
                <li className="mr-4 list-none">
                  <a
                    href="#"
                    className="text-black text-2xl hover:text-red-600"
                  >
                    <FaFacebookSquare size={35} />
                  </a>
                </li>
                <li className="mr-4 list-none">
                  <a
                    href="#"
                    className="text-black text-2xl hover:text-red-600"
                  >
                    <FaTwitterSquare size={35} />
                  </a>
                </li>
                <li className="mr-4 list-none">
                  <a
                    href="#"
                    className="text-black text-2xl hover:text-red-600"
                  >
                    <FaInstagramSquare size={35} />
                  </a>
                </li>
                <li className="mr-4 list-none">
                  <a
                    href="#"
                    className="text-black text-2xl hover:text-red-600"
                  >
                    <FaGlobeAsia size={35} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* map */}
          <div className="contact map p-0 bg-white shadow-xl border-[3px] border-solid border-black">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d662.143061630113!2d121.06078397321383!3d14.338243843836217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d713f7b6e5ad%3A0xeafcedaf1c936365!2s5L%20Solutions%20Main%20Office!5e0!3m2!1sen!2sph!4v1710119281740!5m2!1sen!2sph"
              className="a border-none w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bottom">
        <center className="bg-stone-900 p-2 text-sm whitespace-nowrap">
          <span className="credit text-stone-500 inline-block">
            Created By{" "}
            <a href="#" className="text-red-700 no-underline hover:underline">
              RaymondJAT
            </a>{" "}
            |{" "}
          </span>{" "}
          <span className="fa copyright inline-block text-white">
            <FaCopyright />
          </span>
          <span className="text-white inline-block">
            2024 All rights reserved.
          </span>
        </center>
      </div>
    </section>
  );
};

export default Contacts;
