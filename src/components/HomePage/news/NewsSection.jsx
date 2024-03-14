import React from "react";
import { FaReadme } from "react-icons/fa";
import { Link } from "react-router-dom";
import meet from "../../../assets/News/news-one.jpg";
import team from "../../../assets/News/news-two.jpg";
import strat from "../../../assets/News/news-three.jpg";
import plan from "../../../assets/News/news-four.jpg";

const NewsPage = () => {
  const red = {
    color: "#FF0000",
  };

  return (
    <section className="news-container w-auto my-2 mx-20">
      {/* header */}
      <div
        className="news-title text-center my-12 mx-0"
        data-aos="zoom-in"
        data-aos-duration="300"
        data-aos-easing="ease-in"
        data-aos-once="true"
        data-aos-delay="300"
      >
        <h3 className="uppercase font-semibold text-2xl" style={red}>
          Our News & Articles
        </h3>
        <h1 className="text-4xl font-bold uppercase">Latest Blog Posts</h1>
      </div>

      <div className="column-card flex flex-wrap justify-between">
        {/* news 1 */}
        <div className="news-card w-72 transition duration-300 hover:scale-105">
          <div
            className="panel p-3 rounded-xl shadow-xl"
            data-aos="zoom-in-up"
            data-aos-duration="400"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <img src={team} alt="" className="w-full p-2" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aperiam rerum vero, tempore fugiat perferendis sapiente cum fuga
              aliquid asperiores.
            </p>
            <span className="breaker inline-block h-1 bg-red-600 w-24 relative rounded"></span>
            <h3 className="text-lg font-bold">Article Title</h3>
            <a href="#">
              <FaReadme size={25} className="text-red-600" />
            </a>
          </div>
        </div>

        {/* news 2 */}
        <div className="news-card w-72 transition duration-300 hover:scale-105">
          <div
            className="panel p-3 rounded-xl shadow-xl"
            data-aos="zoom-in-up"
            data-aos-duration="400"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <img src={meet} alt="" className="w-full p-2" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aperiam rerum vero, tempore fugiat perferendis sapiente cum fuga
              aliquid asperiores.
            </p>
            <span className="breaker inline-block h-1 bg-red-600 w-24 relative rounded"></span>
            <h3 className="text-lg font-bold">Article Title</h3>
            <a href="#">
              <FaReadme size={25} className="text-red-600" />
            </a>
          </div>
        </div>

        {/* news 3 */}
        <div className="news-card w-72 transition duration-300 hover:scale-105">
          <div
            className="panel p-3 rounded-xl shadow-xl"
            data-aos="zoom-in-up"
            data-aos-duration="400"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <img src={strat} alt="" className="w-full p-2" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aperiam rerum vero, tempore fugiat perferendis sapiente cum fuga
              aliquid asperiores.
            </p>
            <span className="breaker inline-block h-1 bg-red-600 w-24 relative rounded"></span>
            <h3 className="text-lg font-bold">Article Title</h3>
            <a href="#">
              <FaReadme size={25} className="text-red-600" />
            </a>
          </div>
        </div>

        {/* news 4 */}
        <div className="news-card w-72 transition duration-300 hover:scale-105">
          <div
            className="panel p-3 rounded-xl shadow-xl"
            data-aos="zoom-in-up"
            data-aos-duration="400"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <img src={plan} alt="" className="w-full p-2" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aperiam rerum vero, tempore fugiat perferendis sapiente cum fuga
              aliquid asperiores.
            </p>
            <span className="breaker inline-block h-1 bg-red-600 w-24 relative rounded"></span>
            <h3 className="text-lg font-bold">Article Title</h3>
            <a href="#">
              <FaReadme size={25} className="text-red-600" />
            </a>
          </div>
        </div>
      </div>

      {/* button */}
      <Link to="/news">
        <a
          href="#"
          className="allbtn block w-2/12 my-10 mx-auto bg-black text-center text-white p-3 no-underline rounded-lg font-bold"
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-easing="ease-in"
          data-aos-once="true"
          data-aos-delay="300"
        >
          Read more
        </a>
      </Link>
    </section>
  );
};

export default NewsPage;
