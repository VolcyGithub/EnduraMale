'use client'
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-secondary text-third">
      {/* Main Footer Content */}
      <div className="max-w-7xl bg-gradient-to-b from-transparent to-black px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex flex-col lg:items-center lg:items-start">
              <div className="rounded-xl lg:p-3 relative lg:right-5 mb-6 flex items-center text-lg font-bold gap-2">
                <img
                  src="/ENDURAMALE-WHITE.png"
                  className="w-16 h-16 object-contain"
                  alt="Enduramale Logo"
                />
                ENDURAMALE.
              </div>
              <p className="text-third/80 md:text-center lg:text-left leading-relaxed mb-6">
                We are committed to helping you achieve optimal health and wellness through premium supplements and expert guidance.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm text-third/70">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-third" />
                  <span>1-800-ENDURA-1</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-third" />
                  <span>support@enduramale.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-third" />
                  <span>Boston, MA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-third relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-third rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Shop', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-third/80 hover:text-third transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-third transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-third relative">
              Products
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-third rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {['Supplements', 'Vitamins', 'Energy Boosters', 'Protein Powders', 'Accessories'].map((product) => (
                <li key={product}>
                  <a 
                    href="#" 
                    className="text-third/80 hover:text-third transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-third transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-third relative">
              Support
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-third rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {['FAQs', 'Shipping & Returns', 'Track Your Order', 'Privacy Policy', 'Terms & Conditions'].map((support) => (
                <li key={support}>
                  <a 
                    href="#" 
                    className="text-third/80 hover:text-third transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-third transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {support}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-third/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-third mb-2">Stay Updated</h3>
              <p className="text-third/80">Get the latest health tips, product updates, and exclusive offers.</p>
            </div>
            
            <div className="flex-shrink-0 w-full lg:w-auto">
              {isSubscribed ? (
                <div className="bg-green-500 text-white px-6 py-3 rounded-lg text-center animate-pulse">
                  ✓ Successfully subscribed!
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-96">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg bg-primary border border-primary text-third placeholder-third/60 focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent transition-all duration-300"
                  />
                  <button 
                    onClick={handleNewsletterSubmit}
                    className="bg-primary hover:bg-primary/80 text-third px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-third/20"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary border-t border-gray-200/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-third/80 text-sm">
              © {new Date().getFullYear()} Enduramale. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              {[
                { icon: FaFacebook, label: "Facebook", color: "hover:text-third" },
                { icon: FaInstagram, label: "Instagram", color: "hover:text-third" },
                { icon: FaTwitter, label: "Twitter", color: "hover:text-third" }
              ].map(({ icon: Icon, label, color }) => (
                <a 
                  key={label}
                  href="#" 
                  className={`text-third/60 ${color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}