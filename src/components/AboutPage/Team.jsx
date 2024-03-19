import React from "react";
import profile from "../../assets/profile1.svg";

const Team = () => {
  return (
    <div className="team-container bg-slate-100 text-center">
      <div
        className="team-header pt-8 text-4xl m-auto leading-10"
        data-aos="fade"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-delay="400"
      >
        <h1 className="font-bold uppercase">Meet our Core Team</h1>
      </div>

      <div className="sub-container max-w-7xl m-auto py-10 px-0 flex flex-wrap justify-center">
        <div className="teams shadow-xl my-14 mx-5 p-6 max-w-[30%] cursor-pointer border-[3px] border-solid border-black rounded-xl transition duration-300 box-border hover:scale-110 hover:rounded-xl">
          <img src={profile} alt="" className=" w-36 h-36" />
          <div className="name p-3 font-bold text-base uppercase">
            name here
          </div>
          <div className="desig my-2 mx-0">position</div>
        </div>

        <div className="teams shadow-xl my-10 mx-5 p-6 max-w-[30%] cursor-pointer border-[3px] border-solid border-black rounded-xl transition duration-300 box-border hover:scale-110 hover:rounded-xl">
          <img src={profile} alt="" className=" w-40 h-40" />
          <div className="name p-3 font-bold text-base uppercase">
            name here
          </div>
          <div className="desig my-2 mx-0">position</div>
        </div>

        <div className="teams shadow-xl my-4 mx-5 p-6 max-w-[30%] cursor-pointer border-[3px] border-solid border-black rounded-xl transition duration-300 box-border hover:scale-110 hover:rounded-xl">
          <img src={profile} alt="" className=" w-44 h-44" />
          <div className="name p-3 font-bold text-base uppercase">
            name here
          </div>
          <div className="desig my-2 mx-0">position</div>
        </div>

        <div className="teams shadow-xl my-10 mx-5 p-6 max-w-[30%] cursor-pointer border-[3px] border-solid border-black rounded-xl transition duration-300 box-border hover:scale-110 hover:rounded-xl">
          <img src={profile} alt="" className=" w-40 h-40" />
          <div className="name p-3 font-bold text-base uppercase">
            name here
          </div>
          <div className="desig my-2 mx-0">position</div>
        </div>

        <div className="teams shadow-xl my-14 mx-5 p-6 max-w-[30%] cursor-pointer border-[3px] border-solid border-black rounded-xl transition duration-300 box-border hover:scale-110 hover:rounded-xl">
          <img src={profile} alt="" className=" w-36 h-36" />
          <div className="name p-3 font-bold text-base uppercase">
            name here
          </div>
          <div className="desig my-2 mx-0">position</div>
        </div>
      </div>

      <div className="contact map p-5 bg-slate-100 shadow-neutral-950">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d662.143061630113!2d121.06078397321383!3d14.338243843836217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d713f7b6e5ad%3A0xeafcedaf1c936365!2s5L%20Solutions%20Main%20Office!5e0!3m2!1sen!2sph!4v1710119281740!5m2!1sen!2sph"
          className="a border-none w-full h-96"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Team;
