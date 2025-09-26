"use client";

import { FaQuoteRight } from "react-icons/fa";

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
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      review:
        "Performance is everything in my field. Since I started using Enduramale, I've noticed significant improvements in my recovery time and overall athletic performance. It's a game-changer.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative h-full rounded-3xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md shadow-xl border border-gray-200 p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Quote icon */}
            <FaQuoteRight className="absolute top-6 right-6 text-gray-300 text-3xl opacity-30" />

            {/* Avatar + infos */}
            <div className="flex items-center mb-6">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name}'s avatar`}
                className="w-14 h-14 rounded-full border-2 border-secondary shadow-md"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>

            {/* Review */}
            <p className="text-gray-700 leading-relaxed text-base flex-grow italic">
              “{testimonial.review}”
            </p>

            {/* Rating */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex text-yellow-500">
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
              </div>
              <span className="text-xs text-gray-500">Verified</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
