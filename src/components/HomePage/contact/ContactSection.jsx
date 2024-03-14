import React from "react";
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
const ContactPage = () => {
  const color = {
    color: "white",
  };

  return (
    <footer className="w-full bottom-0 bg-stone-950" style={color}>
      {/* left box */}
      <div className="main-content flex">
        <div className="left box basis-1/2 py-3 px-5">
          <h2 className="text-base font-semibold uppercase">About Us</h2>
          <div className="content mt-5 relative before:absolute before:-top-3 before:h-1 before:w-full before:bg-stone-950 after:absolute after:-top-3 after:h-1 after:w-1/6 after:bg-red-600">
            <p className="text-sm">
              5L SOLUTIONS SUPPLY AND ALLIED SERVICES is company who provides
              technical equipment and services in the field of information
              Technology in offices, residences, companies and manufacturing
              organization across various industries.
            </p>
            <div className="social mt-5 flex">
              <a href="#" className="py-0 px-2">
                <FaFacebookSquare
                  size={28}
                  className=" bg-stone-950 leading-10 text-center text-lg rounded-md transition duration-300 hover:bg-red-600"
                />
              </a>
              <a href="#" className="py-0 px-2">
                <FaTwitterSquare
                  size={28}
                  className=" bg-stone-950 leading-10 text-center text-lg rounded-md transition duration-300 hover:bg-red-600"
                />
              </a>
              <a href="#" className="py-0 px-2">
                <FaInstagramSquare
                  size={28}
                  className=" bg-stone-950 leading-10 text-center text-lg rounded-md transition duration-300 hover:bg-red-600"
                />
              </a>
              <a href="#" className="py-0 px-2">
                <FaGlobeAsia
                  size={28}
                  className=" bg-stone-950 leading-10 text-center text-lg rounded-md transition duration-300 hover:bg-red-600"
                />
              </a>
            </div>
          </div>
        </div>
        {/* center box */}
        <div className="center box basis-1/2 py-3 px-5">
          <h2 className="text-base font-semibold uppercase">Company Address</h2>
          <div className="content mt-5 relative flex flex-col before:absolute before:-top-3 before:h-1 before:w-full before:bg-stone-950 after:absolute after:-top-3 after:h-1 after:w-1/6 after:bg-red-600">
            <div className="place flex items-center">
              <FaMapMarkerAlt
                size={28}
                className="bg-stone-950 leading-10 text-center rounded-md transition duration-300 cursor-pointer hover:bg-red-600"
              />
              <span className="text text-sm pl-3 font-medium">
                Put your Address, here
              </span>
            </div>

            <div className="phone my-9 mx-0 flex items-center">
              <FaPhoneAlt
                size={28}
                className="bg-stone-950 leading-10 text-center rounded-md transition duration-300 cursor-pointer hover:bg-red-600"
              />
              <span className="text text-sm pl-3 font-medium">
                123-123-1234
              </span>
            </div>

            <div className="email flex items-center">
              <FaEnvelope
                size={28}
                className="bg-stone-950 leading-10 text-center rounded-md transition duration-300 cursor-pointer hover:bg-red-600"
              />
              <span className="text text-sm pl-3 font-medium">
                sampleEmail@email.com
              </span>
            </div>
          </div>
        </div>
        {/* right box */}
        <div className="right box basis-1/2 py-3 px-5">
          <h2 className="text-base font-semibold uppercase">Contact Us</h2>
          <div className="content mt-5 relative before:absolute before:-top-3 before:h-1 before:w-full before:bg-stone-950 after:absolute after:-top-3 after:h-1 after:w-1/6 after:bg-red-600">
            <form action="#">
              <div className="email">
                <div className="text text-sm mb-2">Email</div>
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-full text-base bg-stone-900 pl-3 border border-solid border-stone-700 focus:outline-red-600 h-8"
                  required
                />
              </div>
              <div className="msg mt-3">
                <div className="text text-sm mb-2">Message</div>
                <textarea
                  name=""
                  id=""
                  cols="25"
                  rows="2"
                  className="w-full text-base bg-stone-900 pl-3 border border-solid border-stone-700 focus:outline-red-600"
                ></textarea>
              </div>
              <div className="btn mt-3">
                <button
                  type="submit"
                  className="w-full h-8 outline-none border-none bg-red-600 text-sm font-medium cursor-pointer transition duration-300 text-white hover:bg-white hover:text-black"
                >
                  Send
                </button>
              </div>
            </form>
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
          <span className="fa copyright inline-block">
            <FaCopyright />
          </span>
          <span className="inline-block">2024 All rights reserved.</span>
        </center>
      </div>
    </footer>
  );
};

export default ContactPage;
