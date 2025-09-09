"use client";
import React, { useState } from "react";
import { FaTrash, FaChevronLeft } from "react-icons/fa";
import { BsImage } from "react-icons/bs";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Horny Goat Dietary Supplement",
      price: 25,
      quantity: 2,
      image: null,
      sku: "ILMPT-C",
      category: "SUPPLEMENT"
    },
    {
      id: 2,
      name: '"Beast" Unisex Tank',
      price: 20,
      quantity: 1,
      image: null,
      sku: "BEAST-T",
      category: "APPAREL"
    },
    {
      id: 3,
      name: "Heart Shaped Pendant Necklace",
      price: 25,
      quantity: 1,
      image: null,
      sku: "HEART-N",
      category: "JEWELRY"
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setAppliedPromo({ code: "SAVE10", discount: 10 });
    } else if (promoCode.toLowerCase() === "welcome20") {
      setAppliedPromo({ code: "WELCOME20", discount: 20 });
    } else {
      alert("Invalid promo code");
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
    setPromoCode("");
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo ? (subtotal * appliedPromo.discount) / 100 : 0;
  const shipping = subtotal > 50 ? 0 : 8.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F2F2F2" }}>
      {/* Navigation */}
      <nav className="px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="hover:underline cursor-pointer">HOME</span>
            <span className="mx-2">/</span>
            <span className="hover:underline cursor-pointer">SHOP</span>
            <span className="mx-2">/</span>
            <span>CART</span>
          </div>
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
            <FaChevronLeft className="mr-2" size={12} />
            Continue Shopping
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-light text-gray-800 mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-8">Your cart is empty</p>
            <button 
              className="px-8 py-3 text-white rounded hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#262526" }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-full md:w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain rounded-lg" />
                      ) : (
                        <BsImage size={32} className="text-gray-400" />
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <p className="text-xs text-gray-600 uppercase tracking-wide">{item.category}</p>
                        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="px-4 py-2 border-l border-r border-gray-300">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 p-2"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-light" style={{ color: "#262526" }}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-sm text-gray-600">
                              ${item.price} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-6">
                <h2 className="text-xl font-light text-gray-800 mb-6">Order Summary</h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Promo Code
                  </label>
                  {appliedPromo ? (
                    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded p-3">
                      <span className="text-sm text-green-700 font-medium">
                        {appliedPromo.code} (-{appliedPromo.discount}%)
                      </span>
                      <button
                        onClick={removePromo}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                      />
                      <button
                        onClick={applyPromoCode}
                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 text-sm"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </div>

                {/* Summary Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {appliedPromo && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount ({appliedPromo.code})</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  {shipping === 0 && (
                    <p className="text-xs text-green-600">✓ Free shipping on orders over $50</p>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span style={{ color: "#262526" }}>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  className="w-full px-6 py-3 text-white rounded hover:opacity-90 transition-opacity mb-4"
                  style={{ backgroundColor: "#262526" }}
                >
                  Proceed to Checkout
                </button>

                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">Secure checkout powered by SSL</p>
                  <div className="flex justify-center space-x-4 text-xs text-gray-400">
                    <span>VISA</span>
                    <span>MASTERCARD</span>
                    <span>PAYPAL</span>
                    <span>APPLE PAY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;    