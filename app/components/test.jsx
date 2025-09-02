// "use client";
// import Image from "next/image";
// import {
//   FaCheckCircle,
//   FaArrowCircleRight,
//   FaStar,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { useRef } from "react";
// import Marquee from "react-fast-marquee";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import FAQ from "./components/Faqs";
// import Testimonial from "./components/Testimonial";
// export default function Home() {
//   return (
//     <div>
//       <HeroSection />
//       <AboutSection />
//       <WhyChooseUsSection />
//       <ProductsSection />
//       <TestimonialsSection />
//       <FaqSection />
//     </div>
//   );
// }



// function HeroSection() {
//   return (
//     <div className="h-screen bg-primary overflow-hidden relative">
//       <div className="overlay z-[2]">
//         <div className="grid md:grid-cols-2 items-center h-screen py-20 xl:py-4 xl:px-10">
//           <div className="px-4">
//             <p className="text-4xl lg:text-7xl text-white font-bold">
//               NATURAL <span className="text-secondary">SUPPLEMENT</span>
//             </p>
//             <div className="pt-4 space-y-3">
//               <p className="text-white text-lg flex items-center gap-2">
//                 <FaCheckCircle className="text-secondary" /> Natural
//                 supplements crafted to help you thrive.
//               </p>
//               <p className="text-white text-lg flex items-center gap-2">
//                 <FaCheckCircle className="text-secondary" /> Natural
//                 supplements crafted to help you thrive.
//               </p>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="custom-radius w-[300px] z-[1]"></div>
//             <img
//               src="/featured.png"
//               className="w-[400px] lg:w-[600px] relative z-[2]  object-cover"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//       <Marquee
//         speed={50}
//         className="absolute h-[60px] bg-secondary text-white uppercase z-[2] top-[92%] text-1xl md:text-2xl font-bold"
//       >
//         <span>
//           Free Delivery * 100% Secure Payment * Easy Refound *&nbsp;{" "}
//         </span>
//         <span>
//           Free Delivery * 100% Secure Payment * Easy Refound *&nbsp;{" "}
//         </span>
//         <span>
//           Free Delivery * 100% Secure Payment * Easy Refound *&nbsp;{" "}
//         </span>
//       </Marquee>
//     </div>
//   );
// }

// function AboutSection() {
//   return (
//     <div className="bg-third xl:h-[700px] py-10 px-10 min-[1200px]:px-20 xl:px-40 grid md:grid-cols-2 relative z-[2]">
//       <img src="/prostate.png" className="m-auto md:w-[270px]" alt="" />
//       <div className="py-10">
//         <p className="text-lg font-bold py-2 text-secondary uppercase">
//           | About Us
//         </p>
//         <h2 className="text-5xl font-bold text-primary uppercase leading-[1.2em]">
//           Committed to your
//           <span className="text-secondary"> health and wellness!</span>
//         </h2>
//         <p className="py-4 font-medium text-gray-500 text-lg">
//           We are dedicated to preserving the planet's natural beauty while
//           practices ensure a thriving future for generations to come.
//         </p>
//         <div className="grid custom-break:grid-cols-2 py-5 items-center">
//           <div className="space-y-3  font-medium text-lg text-gray-500">
//             <p className="flex items-center gap-2">
//               <FaCheckCircle className="text-secondary" />
//               Pure & Natural Ingredients
//             </p>
//             <p className="flex items-center gap-2">
//               <FaCheckCircle className="text-secondary" />
//               Pure & Natural Ingredients
//             </p>
//           </div>
//           <div className="pt-2">
//             <div className="bg-white p-4 rounded-lg flex text-xl font-bold gap-3 text-secondary pr-40 custom-break:pr-0">
//               <img
//                 src="/icon-about-body.svg"
//                 className="bg-secondary p-4 rounded-[50%] "
//                 alt=""
//               />
//               100% Natural Ingredients
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row custom-break:pt-20 gap-4 custom-break:gap-20">
//           <p>
//             <button className="main-btn ">
//               More About us <FaArrowCircleRight />
//             </button>
//           </p>
//           <p className="flex font-medium gap-2 text-primary">
//             <img
//               src="/icon-phone.svg"
//               alt=""
//               className="bg-secondary p-3 rounded-[50%]"
//             />
//             Support Any Time <br />
//             +01 - 985 852 357
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function WhyChooseUsSection() {
//   return (
//     <div className="bg-secondary/20 h-[min-content] md:h-[1300px] custom-break:h-[1100px] w-full px-10 custom-break:px-40 py-20">
//       <p className="text-lg font-bold text-secondary uppercase pb-4">
//         | Why Choose Us
//       </p>
//       <div className="grid sm:grid-cols-2">
//         <h2 className="text-5xl text-primary font-bold uppercase">
//           Why we're your best
//           <span className="text-secondary"> health choice!</span>
//         </h2>
//         <p className="text-gray-500 text-lg py-2 md:py-0">
//           We prioritize quality, using only natural, science - ingredients to
//           create effective supplements that support your health, energy, and
//           overall well-being.
//         </p>
//       </div>
//       <div className="grid md:grid-cols-7 justify-between pt-20 custom-break:px-20">
//         <div className="col-span-2">
//           <div className="bg-white p-3 mx-auto rounded-[50%] w-[150px] h-[150px] flex items-center justify-center">
//             <img src="/icon-why-choose-1.png" className="w-[100px]" alt="" />
//           </div>
//           <div className="py-4 text-center">
//             <h2 className="text-xl font-semibold text-secondary mb-3">
//               Natural Ingredients
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Our supplements are made with , natural ingredients, carefully
//               for quality, effectiveness.
//             </p>
//           </div>
//         </div>
//         <div className="col-span-3"></div>
//         <div className="col-span-2">
//           <div className="bg-white p-3 mx-auto rounded-[50%] w-[150px] h-[150px] flex items-center justify-center">
//             <img src="/icon-why-choose-1.png" className="w-[100px]" alt="" />
//           </div>
//           <div className="py-4 text-center">
//             <h2 className="text-xl font-semibold text-secondary mb-3">
//               Natural Ingredients
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Our supplements are made with , natural ingredients, carefully
//               for quality, effectiveness.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="relative w-full flex justify-center md:-top-30">
//         <img src="/multivitamin.png" className="w-[250px]" alt="" />
//       </div>
//       <div className="grid md:grid-cols-7 justify-between pt-20 custom-break:px-20 relative md:-top-70">
//         <div className="col-span-2">
//           <div className="bg-white p-3 mx-auto rounded-[50%] w-[150px] h-[150px] flex items-center justify-center">
//             <img src="/icon-why-choose-1.png" className="w-[100px]" alt="" />
//           </div>
//           <div className="py-4 text-center">
//             <h2 className="text-xl font-semibold text-secondary mb-3">
//               Natural Ingredients
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Our supplements are made with , natural ingredients, carefully
//               for quality, effectiveness.
//             </p>
//           </div>
//         </div>
//         <div className="col-span-3"></div>
//         <div className="col-span-2">
//           <div className="bg-white p-3 mx-auto rounded-[50%] w-[150px] h-[150px] flex items-center justify-center">
//             <img src="/icon-why-choose-1.png" className="w-[100px]" alt="" />
//           </div>
//           <div className="py-4 text-center">
//             <h2 className="text-xl font-semibold text-secondary mb-3">
//               Natural Ingredients
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Our supplements are made with , natural ingredients, carefully
//               for quality, effectiveness.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProductsSection() {
//   return (
//     <div className="bg-third h-[min-content] py-10 px-10  md:px-40">
//       <p className="text-lg font-bold text-secondary uppercase pb-4">
//         | Our Products
//       </p>
//       <div className="grid md:grid-cols-2 pb-10">
//         <h2 className="text-5xl text-primary font-bold uppercase">
//           Powerful supplements
//           <span className="text-secondary"> for a healthier you!</span>
//         </h2>
//         <div className="flex justify-end py-2">
//           <p>
//             <button className="main-btn ">
//               More Products <FaArrowCircleRight />
//             </button>
//           </p>
//         </div>
//       </div>
//       <div className="relative">
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           autoplay={{ delay: 5000 }}
//           spaceBetween={20}
//           loop={true}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             768: { slidesPerView: 2, spaceBetween: 30 },
//             1024: { slidesPerView: 3, spaceBetween: 40 },
//           }}
//           className="mySwiper p-3"
//         >
//           {Array(5)
//             .fill(0)
//             .map((_, i) => (
//               <SwiperSlide key={i}>
//                 <div className="product-card">
//                   <img
//                     src="/multivitamin.png"
//                     className="rounded-xl w-[250px]"
//                     alt="Vital Boost"
//                   />
//                   <p className="text-secondary capitalize py-2 font-medium"></p>
//                     Vital Boost
//                   </p>
//                   <div className="flex justify-between w-full">
//                     <span className="flex items-center gap-1"></span>
//                       {Array(5)
//                         .fill(0)
//                         .map((_, index) => (
//                           <FaStar key={index} className="text-secondary" />
//                         ))}
//                     </span>
//                     <span className="text-primary text-lg">$80</span>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//         </Swiper>
//         <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-r-lg z-10">
//           <FaChevronLeft />
//         </button>
//         <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-l-lg z-10">
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// }

// function TestimonialsSection() {
//   return (
//     <div className="bg-secondary px-10 md:px-40 py-20">
//       <p className="text-lg font-bold text-third uppercase pb-4"></p>
//         | Testimonials
//       </p>
//       <div className="grid md:grid-cols-2 pb-10 ">
//         <h2 className="text-5xl text-primary font-bold uppercase">
//           Trusted by thousands, <br />
//           <span className="text-third">loved by many!</span>
//         </h2>
//         <div className="flex justify-end">
//           <p>
//             <button className="secondary-btn ">
//               See all FAQS <FaArrowCircleRight />
//             </button>
//           </p>
//         </div>
//       </div>
//       <div className="relative">
//         <Swiper
//           autoplay={{
//             delay: 2000,
//           }}
//           breakpoints={{
//             600: { slidesPerView: 1 },
//             768: { slidesPerView: 2, spaceBetween: 30 },
//             1024: { slidesPerView: 3, spaceBetween: 40 },
//           }}
//           loop={true}
//           modules={[Autoplay]}
//         >
//           <SwiperSlide>
//             <Testimonial />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Testimonial />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Testimonial />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Testimonial />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// function FaqSection() {
//   return (
//     <div className="bg-third px-10 md:px-40 py-10">
//       <p className="text-lg font-bold text-secondary uppercase pb-4"></p>
//         | Faqs
//       </p>
//       <div className="grid md:grid-cols-2 pb-10 ">
//         <h2 className="text-5xl text-primary font-bold uppercase">
//           Health supplement <br />
//           <span className="text-secondary"></span>
//             questions answered! view all FAQ's
//           </span>
//         </h2>
//         <div className="flex justify-end py-2">
//           <p>
//             <button className="main-btn ">
//               See all FAQS <FaArrowCircleRight />
//             </button>
//           </p>
//         </div>
//       </div>
//       <div className="grid md:grid-cols-2">
//         <FAQ />
//         <img src="/horny-goat.png" alt="" className="mx-auto w-[250px]" />
//       </div>
//     </div>
//   );
// }</div></button></div>
// }
