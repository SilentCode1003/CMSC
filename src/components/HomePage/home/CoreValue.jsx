import React from "react";
import CoreCard from "./CoreCard";
import proactive from "../../../assets/proactive.png";
import integrity from "../../../assets/agree.png";
import efficient from "../../../assets/time-management.png";
import teamwork from "../../../assets/united.png";
import excellence from "../../../assets/excellence.png";
import hero from "../../../assets/5L/hero.jpg";

const CoreValue = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.8), rgba(10, 0, 0, 1)),url(${hero})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    innerWidth: "100%",
  };

  return (
    <div className="flex flex-col justify-evenly pb-28" style={styles}>
      <div>
        <h1 className="text-white">Core Value</h1>
      </div>
      <CoreCard
        image={proactive}
        bgColor="#7a1818"
        ttlColor="white"
        txtColor="white"
        title="Core Value"
      />
      <CoreCard
        image={integrity}
        bgColor="rgb(214 211 209)"
        title="Core Value"
      />
      <CoreCard
        image={efficient}
        bgColor="#7a1818"
        ttlColor="white"
        txtColor="white"
        title="Core Value"
      />
      <CoreCard
        image={teamwork}
        bgColor="rgb(214 211 209)"
        title="Core Value"
      />
      <CoreCard
        image={excellence}
        bgColor="#7a1818"
        ttlColor="white"
        txtColor="white"
        title="Core Value"
      />
    </div>
  );
};

export default CoreValue;
