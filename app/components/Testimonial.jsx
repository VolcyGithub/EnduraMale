"use client";

import { FaQuoteRight } from "react-icons/fa";

export default function Testimonial() {
  return (
    <div className="max-w-md mx-auto rounded-4xl bg-white shadow-sm border border-gray-200 p-10 py-15">
      <div className="flex items-center mb-4">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="User avatar"
          className="w-12 h-12 rounded-full border border-gray-300 shadow-sm"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">Jane Doe</h3>
          <p className="text-sm text-gray-500">Product Designer</p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed py-5">
        “This platform completely changed how I approach my work. The UI is
        clean, the experience feels smooth, and the results have been amazing.
        Highly recommend it!”
      </p>
      <div className="mt-4 flex justify-between items-center text-secondary">
        <p className="flex ">
          {Array(5)
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
  );
}
