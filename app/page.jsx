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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
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
import { Zoom } from "react-awesome-reveal";
import ShopifyProductSlider from "./components/SplideSlider";

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
              <Link href="/product">
                <button className="main-btn ">
                  View All Products <FaArrowCircleRight />
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div className="relative">
          <ShopifyProductSlider />
        </div>
      </div>

      {/* Emphazis Section */}
      <ContentSection/>

      {/*  */}
      <div className="bg-secondary px-10 md:px-40 py-20">
        <p className="text-lg font-bold text-third uppercase pb-4">
          | Real Results, Real Men
        </p>
        <div className="grid md:grid-cols-2 pb-10 ">
          <TitleText
            firstText="Trusted by thousands,"
            highlightedText="transforming lives!"
            variant={1}
          />
          <div className="flex justify-end">
            <p>
              <button className="secondary-btn ">
                Read All Reviews <FaArrowCircleRight />
              </button>
            </p>
          </div>
        </div>
        {/* Testimonials */}
        <div className="relative">
          <Swiper
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              600: { slidesPerView: 1 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            loop={true}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/*  FAQ's*/}
      <div className="bg-third px-10 md:px-40 py-10">
        <p className="text-lg font-bold text-secondary uppercase pb-4">
          | Frequently Asked Questions
        </p>
        <div className="grid md:grid-cols-2 pb-10 ">
          <TitleText
            firstText="Your questions about"
            highlightedText="male enhancement answered!"
          />
          <div className="flex justify-end py-2">
            <p>
              <button className="main-btn ">
                View All FAQs <FaArrowCircleRight />
              </button>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <FAQ />
          <img
            src="/horny-goat.png"
            alt="Horny Goat Weed Supplement"
            className="mx-auto w-[250px]"
          />
        </div>
      </div>
      {/*  */}
    </div>
  );
}
