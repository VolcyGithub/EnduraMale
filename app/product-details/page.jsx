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

const ProductPage = () => {
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

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F2F2F2" }}>
      {/* Navigation */}
      <nav className="px-6 py-8">
        <div className="text-sm text-gray-600">
          <span className="hover:underline cursor-pointer">HOME</span>
          <span className="mx-2">/</span>
          <span className="hover:underline cursor-pointer">SHOP</span>
          <span className="mx-2">/</span>
          <span>HORNY GOAT DIETARY SUPPLEMENT</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
              <BsImage size={80} className="text-gray-500" />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
                >
                  <BsImage size={24} className="text-gray-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">SUPPLEMENT</p>
              <h1 className="text-3xl font-light text-gray-800 mb-4">
                Horny Goat
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
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
                <span className="ml-2 text-sm text-gray-600">5 reviews</span>
              </div>

              <p
                className="text-4xl font-light mb-8"
                style={{ color: "#262526" }}
              >
                $25
              </p>
            </div>

            {/* Product Options */}
            <div className="space-y-6">
              {/* Product Details Tabs */}
              <div className="mt-4">
                <div className="border-b border-gray-300">
                  <div className="flex space-x-8">
                    {["Description", "Reviews (5)"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                          activeTab === tab
                            ? "border-gray-800 text-gray-800"
                            : "border-transparent text-gray-600 hover:text-gray-800"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="py-8">
                  {activeTab === "Description" && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <p className="text-gray-700 mb-6">
                          Support AMA Animal Rescue by showing how much you love
                          your pet with "I Love My Pet" charm bracelet. And
                          remember, every purchase made off of the AMA SHOP goes
                          directly to the medical expenses of our fur children.
                        </p>

                        <div>
                          <h4 className="font-medium text-gray-800 mb-4">
                            Products details:
                          </h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Exclusively handmade</li>
                            <li>Antique gold charms</li>
                            <li>Semi precious round smooth gemstones</li>
                            <li>8mm beads</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "Reviews (5)" && (
                    <div className="text-gray-700">
                      <p>Reviews content would go here...</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Availability and SKU */}
              <div className="flex justify-between text-sm">
                <div>
                  <span className="text-gray-600">Availability: </span>
                  <span className="text-green-600">10 in stock</span>
                </div>
                <div>
                  <span className="text-gray-600">SKU: </span>
                  <span>ILMPT-C</span>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-l border-r border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  className="flex-1 px-6 py-3 text-white rounded hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#262526" }}
                >
                  Add to cart
                </button>
              </div>

              {/* Social Share */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">SHARE ON:</span>
                <div className="flex space-x-3">
                  <FaFacebookF className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                  <FaTwitter className="text-gray-600 hover:text-blue-400 cursor-pointer" />
                  <FaInstagram className="text-gray-600 hover:text-pink-600 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:hidden border-t border-b border-gray-300 py-8">
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
      </div>
    </div>
  );
};

export default ProductPage;
