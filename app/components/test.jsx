<div className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto rounded-4xl bg-white shadow-sm border border-gray-200 p-6 sm:p-10 lg:p-12 flex flex-col">
  <div className="flex items-center gap-4 mb-6">
    <img
      src={testimonial.avatar}
      alt={`${testimonial.name}'s avatar`}
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-300 shadow-sm"
    />
    <div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-800">
        {testimonial.name}
      </h3>
      <p className="text-sm text-gray-500">{testimonial.title}</p>
    </div>
  </div>

  <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow mb-6">
    “{testimonial.review}”
  </p>

  <div className="mt-auto flex justify-between items-center text-secondary">
    <div className="flex gap-1">
      {Array(testimonial.rating)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.91c.969 0 1.371 1.24.588 1.81l-3.973 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.973-2.888a1 1 0 00-1.176 0l-3.973 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.083 10.1c-.783-.57-.38-1.81.588-1.81h4.91a1 1 0 00.95-.69l1.518-4.674z" />
          </svg>
        ))}
    </div>
    <FaQuoteRight className="text-xl sm:text-2xl" />
  </div>
</div>;
