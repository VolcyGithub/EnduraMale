"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsImage } from "react-icons/bs";

const [selectedColor, setSelectedColor] = useState("Turquoise");
const [activeTab, setActiveTab] = useState("Description");
const [quantity, setQuantity] = useState(1);

const colors = ["Turquoise", "Gold", "Silver", "Rose Gold"];

const relatedProducts = [
  {
    id: 1,
    name: '"Beast" Unisex Tank',
    price: "$20",
    colors: "3 COLORS",
    image: null,
  },
  {
    id: 2,
    name: "Best Friend Bracelet",
    price: "$20",
    colors: null,
    image: null,
  },
  {
    id: 3,
    name: "Heart Shaped Pendant Necklace",
    price: "$25",
    colors: null,
    image: null,
  },
  { id: 4, name: "Bangles", price: "$95+", colors: "3 COLORS", image: null },
  {
    id: 5,
    name: '"Beast" Unisex Tank',
    price: "$79+",
    colors: null,
    image: null,
  },
];

const RelatedProducts = () => {
  return (
    <div className="mt-16 md:hidden">
      <h3 className="text-2xl font-light text-gray-800 mb-8">
        You may also like
      </h3>

      <div className="relative">
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {relatedProducts.map((product) => (
            <div key={product.id} className="flex-none w-64">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square bg-gray-300 flex items-center justify-center">
                  <BsImage size={40} className="text-gray-500" />
                </div>

                <div className="p-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    {product.name}
                  </h4>
                  <p className="text-lg font-light text-gray-800 mb-2">
                    {product.price}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={
                            star <= 4 ? "text-yellow-400" : "text-gray-300"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    {product.colors && (
                      <span className="text-xs text-gray-600">
                        {product.colors}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
