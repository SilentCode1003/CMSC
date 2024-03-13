import React from "react";
import ContactPage from "../HomePage/contact/ContactSection";
import hero from "../../assets/5L/hero.jpg";
import news from "../../assets/News/news-one.jpg";
import news2 from "../../assets/News/news-two.jpg";
import news3 from "../../assets/News/news-three.jpg";

const News = () => {
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

  return (
    <section className="w-full min-h-screen grid place-items-center" style={bg}>
      <div
        className="header w-full px-4 md:px-8 lg:px-16 xl:px-20 pt-48 pb-16"
        style={styles}
      >
        <h1 className="text-stone-200 text-7xl font-bold capitalize">
          News & Articles
        </h1>
      </div>

      <div className="news-row m-8 w-4/5 max-w-[1170px] grid border-[2px] border-solid border-black grid-cols-2 gap-12 overflow-x-hidden p-8">
        <div className="news-imgWrapper overflow-hidden">
          <img
            src={news}
            alt=""
            className="w-full h-full object-cover transition duration-300 hover:scale-110"
          />
        </div>

        <div className="newsContentWrapper w-full flex justify-center items-center pl-8">
          <div className="news-content">
            <span className="newsTextWrapper text-xl capitalize flex justify-start items-center gap-4 mb-5">
              <span className="inline-block bg-red-600 w-20 h-1"></span>News
              Collection
            </span>
            <h2 className="text-4xl font-bold text-red-600 pb-5">
              Lorem ipsum dolor
            </h2>
            <p className="text-base leading-6 pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              animi autem! Sapiente corporis a architecto magni quidem quis
              asperiores ab vel dignissimos deleniti libero quo nesciunt iure
              quibusdam beatae, repudiandae, iste numquam nam nihil eum fuga
              repellendus nisi culpa non! Quibusdam voluptates aspernatur
              placeat neque nihil officia nisi tempore corrupti.
            </p>
          </div>
        </div>
      </div>

      <div className="news-row m-8 w-4/5 max-w-[1170px] grid border-[2px] border-solid border-black grid-cols-2 gap-12 overflow-x-hidden p-8">
        <div className="news-imgWrapper overflow-hidden">
          <img
            src={news2}
            alt=""
            className="w-full h-full object-cover transition duration-300 hover:scale-110"
          />
        </div>

        <div className="newsContentWrapper w-full flex justify-center items-center pl-8">
          <div className="news-content">
            <span className="newsTextWrapper text-xl capitalize flex justify-start items-center gap-4 mb-5">
              <span className="inline-block bg-red-600 w-20 h-1"></span>News
              Collection
            </span>
            <h2 className="text-4xl font-bold text-red-600 pb-5">
              Lorem ipsum dolor
            </h2>
            <p className="text-base leading-6 pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              animi autem! Sapiente corporis a architecto magni quidem quis
              asperiores ab vel dignissimos deleniti libero quo nesciunt iure
              quibusdam beatae, repudiandae, iste numquam nam nihil eum fuga
              repellendus nisi culpa non! Quibusdam voluptates aspernatur
              placeat neque nihil officia nisi tempore corrupti.
            </p>
          </div>
        </div>
      </div>

      <div className="news-row m-8 w-4/5 max-w-[1170px] grid border-[2px] border-solid border-black grid-cols-2 gap-12 overflow-x-hidden p-8">
        <div className="news-imgWrapper overflow-hidden">
          <img
            src={news3}
            alt=""
            className="w-full h-full object-cover transition duration-300 hover:scale-110"
          />
        </div>

        <div className="newsContentWrapper w-full flex justify-center items-center pl-8">
          <div className="news-content">
            <span className="newsTextWrapper text-xl capitalize flex justify-start items-center gap-4 mb-5">
              <span className="inline-block bg-red-600 w-20 h-1"></span>News
              Collection
            </span>
            <h2 className="text-4xl font-bold text-red-600 pb-5">
              Lorem ipsum dolor
            </h2>
            <p className="text-base leading-6 pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              animi autem! Sapiente corporis a architecto magni quidem quis
              asperiores ab vel dignissimos deleniti libero quo nesciunt iure
              quibusdam beatae, repudiandae, iste numquam nam nihil eum fuga
              repellendus nisi culpa non! Quibusdam voluptates aspernatur
              placeat neque nihil officia nisi tempore corrupti.
            </p>
          </div>
        </div>
      </div>

      <ContactPage />
    </section>
  );
};

export default News;
