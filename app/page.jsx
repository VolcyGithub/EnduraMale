"use client";
import Image from "next/image";
import {
  FaCheckCircle,
  FaArrowCircleRight,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaAward,
  FaUsers,
  FaFlask,
  FaHeart,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FAQ from "./components/Faqs";
import Testimonial from "./components/Testimonial";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import TitleText from "./components/TitleText";
import { DarkTitle } from "./components/TitleText";
import ShopifyProductGrid from "./components/ShopifyProductGrid";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-third">
      <HeroSection />

      <div className="bg-gray-950 h-[min-content] custom-break:h-[1100px] w-full px-10 custom-break:px-40 py-20">
        <p className="text-lg font-bold text-gray-400 uppercase pb-4">
          | Our Premium Range
        </p>
        <div className="grid md:grid-cols-2 pb-10">
          <DarkTitle
            firstText="Targeted solutions for"
            highlightedText="peak male performance!"
          />
          <div className="flex justify-end pt-8">
            <p>
              <Link href="/catalog/">
                <button className="main-btn ">
                  Visit our catalog <FaArrowCircleRight />
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div className="relative">
          <ShopifyProductGrid />
        </div>
      </div>

      {/* Emphazis Section */}
      <ContentSection/>

      {/*  */}
      <div className="bg-secondary px-10 md:px-40 py-20">
        <p className="text-lg font-bold text-third uppercase pb-4">
          | Real Results, Real Men
        </p>
        <div className=" pb-10 ">
          <TitleText
            firstText="Trusted by thousands,"
            highlightedText="transforming lives!"
            variant={1}
          />
         
        </div>
        {/* Testimonials */}
        <div className="relative">
          <Testimonial />
        </div>
      </div>
      {/*  FAQ's*/}
      <div className="bg-third px-10 md:px-40 py-10" id="faqs">
        <p className="text-lg font-bold text-secondary uppercase pb-4">
          | Frequently Asked Questions
        </p>
        <div className=" pb-18 ">
          <TitleText
            firstText="Your questions about"
            highlightedText="male enhancement answered!"
          />
         
        </div>

        <div className="grid md:grid-cols-2 items-center gap-10">
          <FAQ />
          <Image
                      src="/photo-output_0.webp"
                      alt="Ultra Testosterone Supplement"
                      width={1200}
                      height={400}
                      className="w-full object-cover rounded-lg"
                    />
        </div>
      </div>
      {/*  */}
    </div>
  );
}
