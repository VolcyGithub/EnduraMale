"use client";
import { useEffect } from "react";

export default function ShopPage() {
  useEffect(() => {
    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    function loadScript() {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      script.onload = ShopifyBuyInit;
      (document.head || document.body).appendChild(script);
    }

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: "5dyjd7-jq.myshopify.com",
        storefrontAccessToken: "a7b5093153209e81b078be37a6f3054f",
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent("collection", {
          id: "292745117773",
          node: document.getElementById(
            "collection-component-1757452565923"
          ),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "text-align": "center",
                  border: "1px solid #e5e7eb",
                  "border-radius": "1rem",
                  padding: "1.5rem",
                  "background-color": "#fff",
                  transition: "all 0.3s ease",
                  ":hover": {
                    transform: "translateY(-4px)",
                    "box-shadow": "0 8px 24px rgba(0,0,0,0.06)",
                  },
                },
                img: {
                  "border-radius": "0.75rem",
                  "margin-bottom": "1rem",
                  transition: "transform 0.3s ease",
                },
                title: {
                  "font-size": "1.1rem",
                  "font-weight": "600",
                  color: "#1f2937",
                  "margin-bottom": "0.5rem",
                },
                price: {
                  "font-size": "1rem",
                  color: "#499587",
                  "font-weight": "600",
                },
                button: {
                  "margin-top": "1rem",
                  "font-size": "0.9rem",
                  "padding-top": "12px",
                  "padding-bottom": "12px",
                  "padding-left": "20px",
                  "padding-right": "20px",
                  "border-radius": "9999px",
                  "background-color": "#499587",
                  color: "#fff",
                  "font-weight": "600",
                  transition: "all 0.3s ease",
                  ":hover": { "background-color": "#499587" },
                  ":focus": { "background-color": "#499587" },
                },
              },
              buttonDestination: "modal",
              contents: { options: false },
              text: { button: "View Product" },
            },
            productSet: {
              styles: {
                products: {
                  display: "grid",
                  "grid-template-columns": "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "2rem",
                  "margin-top": "2rem",
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "max-width": "100%",
                  padding: "2rem",
                  "text-align": "left",
                  "background-color": "#fff",
                  "border-radius": "1rem",
                },
                title: {
                  "font-size": "1.75rem",
                  "font-weight": "700",
                  color: "#111827",
                },
                description: {
                  "font-size": "1rem",
                  color: "#374151",
                  "margin-top": "1rem",
                  "line-height": "1.6",
                },
                price: {
                  color: "#499587",
                  "font-size": "1.25rem",
                  "font-weight": "600",
                  "margin-top": "0.75rem",
                },
                button: {
                  "margin-top": "1.5rem",
                  "border-radius": "9999px",
                  "padding": "14px 28px",
                  "background-color": "#499587",
                  color: "#fff",
                  "font-weight": "600",
                  "font-size": "1rem",
                  transition: "all 0.3s ease",
                  ":hover": { "background-color": "#499587" },
                },
              },
              text: { button: "Add to Cart" },
            },
            cart: {
              styles: {
                cart: { "background-color": "#111827" },
                footer: { "background-color": "#111827" },
                title: { color: "#f9fafb" },
                lineItems: { color: "#f9fafb" },
                subtotalText: { color: "#f9fafb" },
                subtotal: { color: "#f9fafb" },
                button: {
                  "background-color": "#499587",
                  ":hover": { "background-color": "#499587" },
                  "border-radius": "9999px",
                },
              },
              text: { total: "Subtotal", button: "Checkout" },
            },
          },
        });
      });
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-teal-500 text-white py-18">
        <div className="max-w-3xl mx-auto text-center px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-lg opacity-90">
            Explore our catalog of premium supplements designed to help you
            unlock your full masculine potential.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div
          id="collection-component-1757452565923"
          className="w-full"
        />
      </section>
    </main>
  );
}
