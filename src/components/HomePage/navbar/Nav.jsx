import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../../assets/5L/5L_logo-Red.png";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNavToggle = () => {
    setNav(!nav);
  };

  const closeNavMenu = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && nav) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [nav]);

  const header = {
    background: `rgba(0, 0, 0, 0.9)`,
  };

  return (
    <div
      className="absolute flex justify-between items-center h-24 w-full mx-auto z-50 px-4 text-white"
      style={header}
    >
      <h1 className="mx-7 cursor-pointer ">
        <img
          src={logo}
          alt="company logo"
          className="h-12 flex flex-col justify-between items-center max-w-[1240px]"
        />
      </h1>
      <ul className="hidden md:flex cursor-pointer mx-5 uppercase text-sm">
        <li className="p-7 hover:text-red-500 ease-in duration-300">
          <Link to="/" onClick={closeNavMenu}>
            Home
          </Link>
        </li>
        <li className="p-7 hover:text-red-500 ease-in duration-300">
          <Link to="/about" onClick={closeNavMenu}>
            About
          </Link>
        </li>
        <li className="p-7 hover:text-red-500 ease-in duration-300">
          <Link to="/services" onClick={closeNavMenu}>
            Services
          </Link>
        </li>
        <li className="p-7 hover:text-red-500 ease-in duration-300">
          <Link to="/products" onClick={closeNavMenu}>
            Products
          </Link>
        </li>
        <li className="p-7 hover:text-red-500 ease-in duration-300">
          <Link to="/news" onClick={closeNavMenu}>
            News
          </Link>
        </li>
        <li className="p-7 hover:text-red-500 ease-in duration-300">
          <Link to="/contacts" onClick={closeNavMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <div
        onClick={handleNavToggle}
        className="block md:hidden h-20 pt-7 mx-5 cursor-pointer"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* linking responsive */}
      <ul
        className={`absolute top-24 left-0 w-full bg-black bg-opacity-90 transition-max-height duration-300 ${
          nav ? "max-h-screen" : "max-h-0"
        } uppercase cursor-pointer text-sm py-5 text-center overflow-hidden`}
        style={{ display: nav || nav === undefined ? "block" : "none" }}
      >
        <li className="p-4 hover:text-red-500 ease-in duration-300">
          <Link to="/" onClick={closeNavMenu}>
            Home
          </Link>
        </li>
        <li className="p-4 hover:text-red-500 ease-in duration-300">
          <Link to="/about" onClick={closeNavMenu}>
            About
          </Link>
        </li>
        <li className="p-4 hover:text-red-500 ease-in duration-300">
          <Link to="/services" onClick={closeNavMenu}>
            Services
          </Link>
        </li>
        <li className="p-4 hover:text-red-500 ease-in duration-300">
          <Link to="/products" onClick={closeNavMenu}>
            Products
          </Link>
        </li>
        <li className="p-4 hover:text-red-500 ease-in duration-300">
          <Link to="/news" onClick={closeNavMenu}>
            News
          </Link>
        </li>
        <li className="p-4 hover:text-red-500 ease-in duration-300">
          <Link to="/contacts" onClick={closeNavMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
