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
      document.body.appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: "5dyjd7-jq.myshopify.com",
        storefrontAccessToken: "a7b5093153209e81b078be37a6f3054f",
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent("collection", {
          id: "292745117773",
          node: document.getElementById("collection-component-1757353302289"),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                title: { "font-size": "17px", color: "#1e1e1e" },
                button: {
                  "font-size": "13px",
                  "background-color": "#51a696",
                  ":hover": { "background-color": "#499587" },
                  "border-radius": "7px",
                },
              },
              buttonDestination: "modal",
              text: { button: "View product" },
            },
            cart: {
              text: { button: "Checkout" },
              styles: {
                cart: { "background-color": "#007862" },
                footer: { "background-color": "#007862" },
              },
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
    <main className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div
        id="collection-component-1757353302289"
        className="container mx-auto p-6"
      />
    </main>
  );
}
