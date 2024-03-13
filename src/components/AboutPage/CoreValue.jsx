import React from "react";
import background from "../../assets/hero-banner.jpg";
import proactive from "../../assets/cores/proactive.png";
import integrity from "../../assets/cores/Integrity.png";
import excellence from "../../assets/cores/Excellence.png";
import teamwork from "../../assets/cores/Teamwork.png";
import efficiency from "../../assets/cores/Efficiency.png";

const CoreValue = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.7), rgba(10, 0, 0, 0.9)),url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    innerWidth: "100%",
  };
  return (
    <section className=" py-10" style={styles}>
      <div className="timeline relative max-w-[1250px] my-0 mx-auto ">
        <h1 className="text-4xl text-white font-bold text-center justify-center pb-8">
          Our Core Value
        </h1>

        {/* excellence */}
        <div className="core-container left-container left-0">
          <img
            src={integrity}
            alt="core value"
            className="absolute w-56 -right-96 -top-1 z-10"
          />
          <div className="text-box py-5 px-8 bg-white relative rounded-md text-base border-4 border-red-600">
            <h2 className="font-semibold text-2xl">Integrity</h2>
            <p>
              Commitment to fairness and equity, and a willingness to treat all
              team members with respect and dignity. This includes respecting
              the ideas and perspectives of all team members, and ensuring that
              everyone has an equal opportunity to contribute to the team’s
              work.
            </p>
            <span className="left-container-arrow h-0 w-0 absolute top-7 z-10 -right-4"></span>
          </div>
        </div>

        {/* integrity */}
        <div className="core-container right-container left-1/2">
          <img
            src={excellence}
            alt="core value"
            className="absolute w-56 -right-5 top-1 z-10 -left-96"
          />
          <div className="text-box py-5 px-8 bg-white relative rounded-md text-base border-4 border-red-600">
            <h2 className="font-semibold text-2xl">Excellence</h2>
            <p>
              Each member brings their unique strengths and expertise to the
              table, and is able to work effectively with other members to
              create a high-performing unit. The team is characterized by a
              shared sense of purpose and a commitment to working together
              towards a common goal.
            </p>
            <span className="right-container-arrow h-0 w-0 absolute top-7 z-10 -left-4"></span>
          </div>
        </div>

        {/* efficiency */}
        <div className="core-container left-container left-0">
          <img
            src={efficiency}
            alt="core value"
            className="absolute w-56 -right-96 top-1 z-10"
          />
          <div className="text-box py-5 px-8 bg-white relative rounded-md text-base border-4 border-red-600">
            <h2 className="font-semibold text-2xl">Efficiency</h2>
            <p>
              Effective time management, streamlined workflows, and a focus on
              eliminating unnecessary steps and processes. It also involves a
              commitment to training and development, so that team members have
              the skills and knowledge they need to work together effectively.
            </p>
            <span className="left-container-arrow h-0 w-0 absolute top-7 z-10 -right-4"></span>
          </div>
        </div>

        {/* teamwork */}
        <div className="core-container right-container left-1/2">
          <img
            src={teamwork}
            alt="core value"
            className="absolute w-56 -right-5 top-1 z-10 -left-96"
          />
          <div className="text-box py-5 px-8 bg-white relative rounded-md text-base border-4 border-red-600">
            <h2 className="font-semibold text-2xl">Teamwork</h2>
            <p>
              Clear and open communication among team members, a willingness to
              give and receive feedback, and a focus on continuous improvement.
              It also involves a commitment to diversity and inclusion, as well
              as a willingness to embrace new ideas and approaches.
            </p>
            <span className="right-container-arrow h-0 w-0 absolute top-7 z-10 -left-4"></span>
          </div>
        </div>

        {/* proactive */}
        <div className="core-container left-container left-0">
          <img
            src={proactive}
            alt="core value"
            className="absolute w-56 -right-96 top-1 z-10"
          />
          <div className="text-box py-5 px-8 bg-white relative rounded-md text-base border-4 border-red-600">
            <h2 className="font-semibold text-2xl">Proactive</h2>
            <p>
              Working together to identify potential problems and opportunities,
              and take action to address them before they become major issues.
              Members taking the initiative to identify and address problems,
              rather than simply reacting to them after they have occurred.
            </p>
            <span className="left-container-arrow h-0 w-0 absolute top-7 z-10 -right-4"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
