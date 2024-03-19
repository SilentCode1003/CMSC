import React from "react";
import it from "../../../assets/services/ITSupport.png";
import phone from "../../../assets/services/Phone.png";
import cable from "../../../assets/services/Cabling.png";
import electric from "../../../assets/services/Electrical.png";
import ServiceSection from "./ServiceSection";

const Service = () => {
  return (
    <div>
      <ServiceSection
        img1={it}
        img2={phone}
        img3={cable}
        img4={electric}
        title1="Providing"
        title2="High-Quality Services"
        s1="Electrical Design and Installation"
        s2="Installation and Repair of Surveillance Systems/CCTV"
        s3="Structured Cabling Design and Installation"
        s4="RFID System Design and Installation"
        s5="PABX Design and Installation"
        button="Find out more about our services"
      />
    </div>
  );
};

export default Service;
