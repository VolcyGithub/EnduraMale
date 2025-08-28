import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";
export default function Home() {
  return (
    <div>
      <div className="banner h-screen bg-primary">
        <div className="overlay z-[2]">
          <div className="grid md:grid-cols-2 items-center h-full py-40 px-10 xl:px-40">
            <div>
              {" "}
              <p className="text-white text-3xl py-5">Welcome</p>
              <p className="text-7xl xl:text-8xl text-white font-bold">
                NATURAL <span className="text-secondary">SUPPLEMENT</span>
              </p>
              <div className="pt-4 space-y-3">
                <p className="text-white text-lg flex items-center gap-2">
                  <FaCheckCircle className="text-secondary" /> Natural
                  supplements crafted to help you thrive.
                </p>
                <p className="text-white text-lg flex items-center gap-2">
                  <FaCheckCircle className="text-secondary" /> Natural
                  supplements crafted to help you thrive.
                </p>
              </div>
            </div>
            <img
              src="/file.png"
              className="sm:w-[450px] sm:h-[450px] xl:w-[600px] xl:h-[600px] object-cover"
              alt=""
            />
          </div>
          
        </div>
        <Marquee speed={150} className="absolute h-[90px] bg-secondary text-white uppercase z-[2] top-[90.5%] text-4xl font-bold">
          <span>Free Delivery * 100% Secure Payment * 30 Days free Returns *&nbsp; </span>
          <span>Free Delivery * 100% Secure Payment * 30 Days free Returns *&nbsp;  </span>
          <span>Free Delivery * 100% Secure Payment * 30 Days free Returns *&nbsp; </span>
        </Marquee>
      </div>
      {/* ABOUT SECTION */}

      <div className="bg-third h-[500px]"></div>
    </div>
  );
}
