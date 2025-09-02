import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const HeroSection = () => {
  return (
    <div className="h-screen bg-primary overflow-hidden relative">
      <div className="overlay z-[2]">
        <div className="grid md:grid-cols-2 items-center h-screen py-20 xl:py-4 xl:px-10">
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
          <div className="relative">
            <div className="custom-radius w-[300px] z-[1]"></div>
            <img
              src="/featured.png"
              className="w-[400px] lg:w-[600px] relative z-[2]  object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <Marquee
        speed={50}
        className="absolute h-[60px] bg-secondary text-white uppercase z-[2] top-[92%] text-1xl md:text-2xl font-bold"
      >
        <span>Free Delivery * 100% Secure Payment * Easy Refound *&nbsp; </span>
        <span>Free Delivery * 100% Secure Payment * Easy Refound *&nbsp; </span>
        <span>Free Delivery * 100% Secure Payment * Easy Refound *&nbsp; </span>
      </Marquee>
    </div>
  );
};

export default HeroSection;
