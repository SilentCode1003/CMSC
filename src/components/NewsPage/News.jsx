import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.cjs";
import ContactPage from "../HomePage/contact/ContactSection";
import hero from "../../assets/5L/hero.jpg";
import news from "../../assets/News/news-one.jpg";
import news2 from "../../assets/News/news-two.jpg";
import news3 from "../../assets/News/news-three.jpg";
import news4 from "../../assets/News/news-four.jpg";

const News = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.8), rgba(10, 0, 0, 1)),url(${hero})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <section className="w-full min-h-screen grid place-items-center bg-slate-100">
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
          News & Articles
        </h1>
      </div>

      {/* news 1 */}
      <div
        className="news-row m-8 w-4/5 max-w-[1170px] grid border-[3px] border-solid border-black grid-cols-2 gap-12 overflow-x-hidden p-8"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-delay="200"
      >
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

      {/* news 2 */}
      <div
        className="news-row m-8 w-4/5 max-w-[1170px] grid border-[3px] border-solid border-black grid-cols-2 gap-12 overflow-x-hidden p-8"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-delay="200"
      >
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

      {/* news 3 */}
      <div
        className="news-row m-8 w-4/5 max-w-[1170px] grid border-[3px] border-solid border-black grid-cols-2 gap-12 overflow-x-hidden p-8"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-delay="200"
      >
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

      {/* news 4 */}
      <div
        className="news-row m-8 w-4/5 max-w-[1170px] grid border-[3px] border-solid border-black grid-cols-2 gap-12 overflow-x-hidden p-8"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-delay="200"
      >
        <div className="news-imgWrapper overflow-hidden">
          <img
            src={news4}
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

      {/* footer */}
      <ContactPage />
    </section>
  );
};

export default News;
