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
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FAQ from "./components/Faqs";
import Testimonial from "./components/Testimonial";
import HeroSection from "./components/HeroSection";
import TitleText from "./components/TitleText";
import { Zoom } from "react-awesome-reveal";
import { products } from "./api/products";
export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-third">
      <HeroSection />

      <div className="mb-8 bg-third xl:h-[700px] py-10 px-10 min-[1200px]:px-20 xl:px-40 grid md:grid-cols-2 relative z-[2]">
        <img
          src="/Enduramale-Black-men.png"
          className="m-auto md:w-[370px]"
          alt="Enduramale Black Men Supplement"
        />

        <div className="py-10">
          <p className="text-lg font-bold py-2 text-secondary uppercase">
            | About Enduramale
          </p>
          <TitleText
            firstText="Unlock your full"
            highlightedText="masculine potential!"
          />

          <p className="py-4 font-medium text-gray-500 text-lg">
            Enduramale is dedicated to empowering men with superior supplements
            designed to enhance endurance, virility, and overall male health.
          </p>
          <div className="grid custom-break:grid-cols-2 py-5 items-center">
            <div className="space-y-3  font-medium text-lg text-gray-500">
              <Zoom>
                <p className="flex items-center gap-2">
                  {" "}
                  <FaCheckCircle className="text-secondary" />
                  Boosts Endurance & Stamina
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <FaCheckCircle className="text-secondary" />
                  Supports Libido & Performance
                </p>{" "}
              </Zoom>
            </div>
            <div className="pt-2">
              <Zoom delay={300}>
                <div className="bg-white p-4 rounded-lg flex text-xl font-bold gap-3 text-secondary custom-break:pr-0">
                  <img
                    src="/icon-about-body.svg"
                    className="bg-secondary p-4 rounded-[50%] "
                    alt="100% Natural Ingredients Icon"
                  />
                  <p className=" lg:px-2">Clinically Tested Ingredients</p>
                </div>
              </Zoom>
            </div>
          </div>

          <div className="flex flex-row custom-break:pt-20 gap-4 custom-break:gap-20">
            <p>
              <button className="main-btn ">
                Discover More <FaArrowCircleRight />
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Emphazis Section */}

      <div className="bg-secondary/20 h-[min-content] custom-break:h-[1100px] w-full px-10 custom-break:px-40 py-20">
        <p className="text-lg font-bold text-secondary uppercase pb-4">
          | Our Premium Range
        </p>
        <div className="grid md:grid-cols-2 pb-10">
          <TitleText
            firstText="Targeted solutions for"
            highlightedText="peak male performance!"
          />
          <div className="flex justify-end py-2">
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
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 5000 }}
            spaceBetween={20}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="mySwiper p-3"
          >
            {products.filter((product) => product.image).length > 0 &&
              products
                .filter((product) => product.image)
                .map((product, i) => (
                  <SwiperSlide key={i}>
                    <Link href="/product">
                      <div className="product-card">
                        <img
                          src={product.image}
                          className="rounded-xl w-[250px]"
                          alt="Enduramale Supplements"
                        />
                        <p className="text-secondary capitalize py-2 font-medium">
                          {product.name}
                        </p>
                        {/* <div className="flex justify-between w-full">
                        <span className="flex items-center gap-1">
                          {Array(Math.round(product.rating))
                            .fill(0)
                            .map((_, index) => (
                              <FaStar key={index} className="text-secondary" />
                            ))}
                        </span>
                        <span className="text-primary text-lg">$80</span>
                      </div> */}
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
          </Swiper>

          {/* Custom Prev Button */}
          {/* <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-r-lg z-10">
            <FaChevronLeft />
          </button> */}

          {/* Custom Next Button */}
          {/* <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-l-lg z-10">
            <FaChevronRight />
          </button> */}
        </div>
      </div>

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
      {/*  */}
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
