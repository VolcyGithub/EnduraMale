import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Configuration Shopify
const SHOPIFY_CONFIG = {
  domain: '5dyjd7-jq.myshopify.com',
  storefrontAccessToken: 'a7b5093153209e81b078be37a6f3054f'
};

// Catégories maintenues
const categories = [
  "All Products",
  "Testosterone Boosters", 
  "Pre-Workout",
  "Protein Supplements",
  "Fat Burners",
  "Multivitamins",
  "Recovery & Sleep",
  "Muscle Builders",
];

// Composant Buy Button Shopify en React
const ShopifyBuyButton = ({ 
  productId, 
  buttonText = "Add to Cart",
  variant = "primary",
  size = "medium",
  className = ""
}) => {
  const buttonRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shopifyUI, setShopifyUI] = useState(null);

  useEffect(() => {
    const loadShopifyScript = () => {
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        initializeShopifyBuy();
        return;
      }

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      script.onload = initializeShopifyBuy;
      document.head.appendChild(script);
    };

    const initializeShopifyBuy = () => {
      const client = window.ShopifyBuy.buildClient({
        domain: SHOPIFY_CONFIG.domain,
        storefrontAccessToken: SHOPIFY_CONFIG.storefrontAccessToken,
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        setShopifyUI(ui);
        createBuyButton(ui);
      });
    };

    const createBuyButton = (ui) => {
      if (buttonRef.current && !buttonRef.current.hasChildNodes()) {
        const containerId = `shopify-buy-${productId}-${Date.now()}`;
        buttonRef.current.id = containerId;

        ui.createComponent('product', {
          id: productId,
          node: buttonRef.current,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                button: {
                  "font-size": size === "small" ? "12px" : size === "large" ? "16px" : "14px",
                  "padding-top": size === "small" ? "8px" : size === "large" ? "16px" : "12px",
                  "padding-bottom": size === "small" ? "8px" : size === "large" ? "16px" : "12px",
                  "padding-left": size === "small" ? "16px" : size === "large" ? "32px" : "24px",
                  "padding-right": size === "small" ? "16px" : size === "large" ? "32px" : "24px",
                  "background-color": variant === "secondary" ? "#6b7280" : "#51a696",
                  ":hover": {
                    "background-color": variant === "secondary" ? "#4b5563" : "#499587"
                  },
                  ":focus": {
                    "background-color": variant === "secondary" ? "#4b5563" : "#499587"
                  },
                  "border-radius": "8px",
                  "font-weight": "600",
                  "transition": "all 0.3s ease"
                }
              },
              buttonDestination: "modal",
              contents: {
                button: false,
                options: false,
                img: false,
                title: false,
                price: false
              },
              isButton: true,
              text: {
                button: buttonText
              }
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
                title: true,
                price: true,
                description: true
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                button: {
                  "font-size": "14px",
                  "padding-top": "14px",
                  "padding-bottom": "14px",
                  "background-color": "#51a696",
                  ":hover": {
                    "background-color": "#499587"
                  },
                  ":focus": {
                    "background-color": "#499587"
                  },
                  "border-radius": "8px",
                  "font-weight": "600"
                },
                title: {
                  "font-family": "system-ui, -apple-system, sans-serif",
                  "font-weight": "bold",
                  "font-size": "24px",
                  "color": "#1f2937"
                },
                price: {
                  "font-size": "20px",
                  "color": "#059669",
                  "font-weight": "bold"
                },
                compareAt: {
                  "color": "#6b7280",
                  "text-decoration": "line-through"
                },
                description: {
                  "color": "#4b5563",
                  "line-height": "1.6"
                }
              },
              text: {
                button: "Add to cart"
              }
            },
            cart: {
              styles: {
                button: {
                  "font-size": "14px",
                  "padding-top": "12px",
                  "padding-bottom": "12px",
                  "background-color": "#51a696",
                  ":hover": {
                    "background-color": "#499587"
                  },
                  "border-radius": "8px",
                  "font-weight": "600"
                },
                cart: {
                  "background-color": "#1f2937"
                },
                header: {
                  "background-color": "#1f2937"
                },
                footer: {
                  "background-color": "#1f2937"
                },
                title: {
                  "color": "#f9fafb"
                },
                lineItems: {
                  "color": "#f9fafb"
                },
                subtotalText: {
                  "color": "#f9fafb"
                },
                subtotal: {
                  "color": "#f9fafb"
                }
              },
              text: {
                total: "Subtotal",
                button: "Checkout"
              }
            }
          }
        });
      }
    };

    loadShopifyScript();
  }, [productId, buttonText, variant, size]);

  const baseClasses = `
    inline-block
    transition-all
    duration-300
    ${className}
  `;

  return (
    <div className={baseClasses}>
      <div ref={buttonRef} className="w-full"></div>
    </div>
  );
};

// Composant Product Card
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
      

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Contenu */}
      <div className="p-6 flex flex-col h-auto">
        {/* Titre */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Catégorie */}
        <p className="text-sm text-green-600 font-medium mb-2">
          {product.category}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        {/* <div className="flex items-center mb-4">
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, starIndex) => (
                <FaStar 
                  key={starIndex} 
                  className={`w-4 h-4 ${
                    starIndex < Math.round(product.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`} 
                />
              ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div> */}

        {/* Prix */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-600">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          )}
        </div>

        {/* Stock Status */}
        {/* <div className="mb-4">
          <span className={`text-sm font-medium ${
            product.inStock ? 'text-green-600' : 'text-red-600'
          }`}>
            {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
          </span>
        </div> */}

        {/* Bouton d'achat Shopify */}
        <div className="mt-auto">
          <ShopifyBuyButton 
            productId={product.id}
            buttonText="Add to Cart"
            variant="primary"
            size="medium"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

// Hook pour récupérer les produits
const useShopifyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Données avec vos vrais IDs Shopify
        const shopifyProducts = [
          {
            id: '7554988933197',
            name: 'Premium Testosterone Booster',
            category: 'Testosterone Boosters',
            price: 69.99,
            originalPrice: 89.99,
            rating: 4.8,
            reviews: 324,
            badge: 'Best Seller',
            description: 'Natural testosterone enhancement formula with proven ingredients',
            inStock: true,
            image: '/api/placeholder/300/300'
          }
        ];

        setProducts(shopifyProducts);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

// Composant principal du slider
const ShopifyProductSlider = () => {
  const { products, loading } = useShopifyProducts();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  // Filtrer les produits par catégorie
  const filteredProducts = selectedCategory === 'All Products' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= filteredProducts.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev <= 0 ? Math.max(0, filteredProducts.length - 3) : prev - 1
    );
  };

  // Auto-play
  useEffect(() => {
    if (filteredProducts.length > 3) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [filteredProducts.length]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
        {/* <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our range of high-quality supplements designed to help you achieve your fitness goals
        </p> */}
      </div>

      {/* Filtres de catégories */}
      {/* <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentSlide(0);
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div> */}

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ 
            transform: `translateX(-${currentSlide * (100 / 3)}%)`,
            width: `${(filteredProducts.length * 100) / 3}%`
          }}
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Boutons de navigation */}
        {filteredProducts.length > 3 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all duration-300 hover:shadow-xl"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all duration-300 hover:shadow-xl"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Indicateurs */}
      {filteredProducts.length > 3 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array(Math.max(0, filteredProducts.length - 2)).fill(0).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-green-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopifyProductSlider;