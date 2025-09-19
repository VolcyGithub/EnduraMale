"use client";

import { FaQuoteRight } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Testimonial() {
  const testimonials = [
    {
      name: "John D.",
      title: "Fitness Enthusiast",
      avatar: "https://randomuser.me/api/portraits/men/80.jpg",
      review:
        "I've been taking Enduramale for a few months now, and the difference in my energy levels and stamina during workouts is night and day. Highly recommend for anyone looking to push their limits.",
      rating: 5,
    },
    {
      name: "Mike S.",
      title: "Busy Professional",
      avatar: "https://randomuser.me/api/portraits/men/30.jpg",
      review:
        "As someone with a demanding job, I was often drained by the end of the day. Enduramale has given me that extra boost I needed to stay focused at work and still have energy for my family.",
      rating: 5,
    },
    {
      name: "Alex R.",
      title: "Athlete",
      avatar: "https://randomuser.me/api/portraits/men/82.jpg",
      review:
        "Performance is everything in my field. Since I started using Enduramale, I've noticed significant improvements in my recovery time and overall athletic performance. It's a game-changer.",
      rating: 5,
    },
  ];

  const splideOptions = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "2rem",
    pagination: false,
    arrows: false,
    breakpoints: {
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
    },
  };

  return (
    <Splide options={splideOptions} aria-label="Testimonials">
      {testimonials.map((testimonial, index) => (
        <SplideSlide key={index}>
          <div className="h-full max-w-md mx-auto rounded-4xl bg-white shadow-sm border border-gray-200 p-10 py-15 flex flex-col">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name}'s avatar`}
                className="w-12 h-12 rounded-full border border-gray-300 shadow-sm"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed py-5 flex-grow">
              “{testimonial.review}”
            </p>
            <div className="mt-4 flex justify-between items-center text-secondary">
              <p className="flex">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.91c.969 0 1.371 1.24.588 1.81l-3.973 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.973-2.888a1 1 0 00-1.176 0l-3.973 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.083 10.1c-.783-.57-.38-1.81.588-1.81h4.91a1 1 0 00.95-.69l1.518-4.674z" />
                    </svg>
                  ))}
              </p>
              <FaQuoteRight />
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
