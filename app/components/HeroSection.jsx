import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const HeroSection = () => {
  return (
    <div className="h-[750px] lg:h-[600px] bg-primary overflow-hidden relative">
      <div className="overlay z-[2]">
        <div className="grid md:grid-cols-2 items-center pt-18 xl:py-4 xl:px-10">
          <div className="px-4">
            <p className="text-4xl lg:text-7xl text-white font-bold">
              NATURAL <span className="text-secondary">SUPPLEMENT</span>
            </p>
            <div className="pt-4 space-y-3">
              <p className="text-white text-lg flex items-center gap-2">
                <FaCheckCircle className="text-secondary" /> Natural supplements
                crafted to help you thrive.
              </p>
              <p className="text-white text-lg flex items-center gap-2">
                <FaCheckCircle className="text-secondary" /> Natural supplements
                crafted to help you thrive.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 md:relative flex justify-center md:justify-end w-full px-4 md:px-10 lg:px-20">
            <div className="custom-radius w-[300px] lg:w-[200px] z-[1]"></div>
            <img
              src="/featured.png"
              className="w-[400px] lg:w-[1000px] relative z-[2]  object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <Marquee
        speed={50}
        className="absolute h-[60px] bg-secondary text-white uppercase z-[2] top-[93%] text-1xl md:text-2xl font-bold"
      >
        <span>Free Delivery * 100% Secure Payment * Easy Refound *&nbsp; </span>
        <span>Free Delivery * 100% Secure Payment * Easy Refound *&nbsp; </span>
        <span>Free Delivery * 100% Secure Payment * Easy Refound *&nbsp; </span>
      </Marquee>
    </div>
  );
};

export default HeroSection;
