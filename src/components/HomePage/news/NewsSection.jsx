import React from "react";
import { FaLongArrowAltRight, FaReadme } from "react-icons/fa";
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
      <div className="news-title text-center my-12 mx-0">
        <h3 className="uppercase font-semibold text-2xl" style={red}>
          Our News & Articles
        </h3>
        <h1 className="text-4xl font-bold uppercase">Latest Blog Posts</h1>
      </div>

      <div className="column-card flex flex-wrap justify-between">
        <div className="news-card w-72">
          <img src={team} alt="" className="w-full" />
          <div className="panel p-3 rounded-xl shadow-xl">
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

        <div className="news-card w-72">
          <img src={meet} alt="" className="w-full" />
          <div className="panel p-3 rounded-xl shadow-xl">
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

        <div className="news-card w-72">
          <img src={strat} alt="" className="w-full" />
          <div className="panel p-3 rounded-xl shadow-xl">
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

        <div className="news-card w-72">
          <img src={plan} alt="" className="w-full" />
          <div className="panel p-3 rounded-xl shadow-xl">
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
      <a
        href="#"
        className="allbtn block w-2/12 my-10 mx-auto bg-red-600 text-center text-white p-3 no-underline rounded-lg font-bold"
      >
        Read more
      </a>
    </section>
  );
};

export default NewsPage;
