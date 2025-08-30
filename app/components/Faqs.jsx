"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be in their original condition and packaging.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. Shipping costs and delivery times vary depending on your location.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive an email with a tracking link to monitor your package.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be modified or canceled within 24 hours of purchase. Please contact our support team immediately.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-2xl mx-auto py-10">
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white border border-gray-200 transition hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800 text-lg focus:outline-none"
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-secondary" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100 px-5 pb-4 text-gray-600"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
