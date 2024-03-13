import React from "react";
import Ceo from "./About";
import hero from "../../assets/5L/hero.jpg";
import ContactPage from "../HomePage/contact/ContactSection";
import CoreValue from "./CoreValue";
import Team from "./Team";

const Header = () => {
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
    <section className="" style={bg}>
      {/* about header */}
      <div
        className="header w-full px-4 md:px-8 lg:px-16 xl:px-20 pt-48 pb-16"
        style={styles}
      >
        <h1 className="text-stone-200 text-7xl font-bold capitalize">
          who we are
        </h1>
      </div>
      {/* about content */}
      <Ceo />
      <CoreValue />
      <Team />
      <ContactPage />
    </section>
  );
};

export default Header;

// const About = () => {
//   const styles = {
//     backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.8), rgba(10, 0, 0, 1)),url(${hero})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     backgroundAttachment: "fixed",
//   };

//   const bg = {
//     background: "#E7E5E4",
//   };

//   return (
//     <section className="" style={bg}>
//       {/* about header */}
//       <div
//         className="header w-full px-4 md:px-8 lg:px-16 xl:px-20 pt-48 pb-16"
//         style={styles}
//       >
//         <h1 className="text-stone-200 text-7xl font-bold capitalize">
//           who we are
//         </h1>
//       </div>

//       {/* about content */}

//       <Ceo
//         title="5L SOLUTIONS SUPPLY & ALLIED"
//         title2="SERVICE CORP."
//         content="The Company was formed as a Corporation in September 29, 2015.
//                 Although still a young company at the present time, it has
//                 serviced a sizeable number of residences and stores during the
//                 first year of operations, with a workforce of twenty (20) skilled
//                 and professional personnel over 200 stores initially, located in
//                 the Luzon and Visayas Region of the Philippines. Now, our company
//                 has increased to more than 100 employees and over 2000 stores and
//                 companies nationwide. providing technical equipment and services
//                 in the field of Information Technology in offices, residences,
//                 companies and manufacturing organization across various
//                 industries. Subsequent to service engagement, the Company has the
//                 capability to design, install and repair electronic and electrical
//                 powered devices or equipment such as CCTV, cable, air
//                 conditioning, system, security system customized to Customer
//                 requirement."
//       />
//       <ContactPage />
//     </section>
//   );
// };
