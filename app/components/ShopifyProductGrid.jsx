import React, { useEffect } from 'react';

const ShopifyProductGrid = () => {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    const loadShopifyScript = () => {
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          initializeShopifyButtons();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
    };

    const loadScript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.head || document.body).appendChild(script);
      script.onload = initializeShopifyButtons;
    };

    const initializeShopifyButtons = () => {
      const client = window.ShopifyBuy.buildClient({
        domain: '5dyjd7-jq.myshopify.com',
        storefrontAccessToken: 'a7b5093153209e81b078be37a6f3054f',
      });

      const buttonConfig = {
        product: {
          styles: {
            product: { "max-width": "100%", "margin": "0 auto 20px auto" },
            title: { color: "#f2f2f2" },
            price: { color: "#e2e2e2c4", "font-size": "15px", "font-weight": "bold" },
            button: {
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px",
              ":hover": { "background-color": "#499587" },
              "background-color": "#51a696",
              ":focus": { "background-color": "#499587" },
              "border-radius": "27px",
              "padding-left": "37px",
              "padding-right": "37px"
            }
          },
          text: { button: "Add to cart" }
        },
        cart: { 
          styles: { 
            cart: { "background-color": "#2a7568ff"},
            title: { color: "#f9f9f9" },
            lineItems: { color: "#f9f9f9" },
            footer: { color: "#f9f9f9", "background-color": "#225c52ff" },
            footerSubtotal: { color: "#f9f9f9" },
            footerSubtotalTitle: { color: "#f9f9f9" },
            button: { "background-color": "#51a696", ":hover": { "background-color": "#499587" }, ":focus": { "background-color": "#499587" } }
           },
          text: { button: "Checkout" }

        }, "lineItem": {
                    "styles": {
                      "variantTitle": {
                        "color": "#f9f9f9"
                      },
                      "title": {
                        "color": "#f9f9f9"
                      },
                      "price": {
                        "color": "#f9f9f9"
                      },
                      "fullPrice": {
                        "color": "#f9f9f9"
                      },
                      "discount": {
                        "color": "#f9f9f9"
                      },
                      "discountIcon": {
                        "fill": "#f9f9f9"
                      },
                      "quantity": {
                        "color": "#f9f9f9"
                      },
                      "quantityIncrement": {
                        "color": "#f9f9f9",
                        "border-color": "#f9f9f9"
                      },
                      "quantityDecrement": {
                        "color": "#f9f9f9",
                        "border-color": "#f9f9f9"
                      },
                      "quantityInput": {
                        "color": "#f9f9f9",
                        "border-color": "#f9f9f9"
                      }
                    }
                  }
      };

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        const products = [
          { id: '7554988933197', nodeId: 'product-component-1' },
          { id: '7555499720781', nodeId: 'product-component-2' },
          { id: '7555503947853', nodeId: 'product-component-3' },
          { id: '7555496640589', nodeId: 'product-component-4' },
        ];

        products.forEach(({ id, nodeId }) => {
          const node = document.getElementById(nodeId);
          if (node) {
            ui.createComponent('product', {
              id,
              node,
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: buttonConfig,
            });
          }
        });
      });
    };

    setTimeout(loadShopifyScript, 1000);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="rounded-lg border border-secondary p-6 flex flex-col items-center">
          <div id="product-component-1" className="w-full"></div>
        </div>
        <div className="rounded-lg border border-secondary p-6 flex flex-col items-center">
          <div id="product-component-2" className="w-full"></div>
        </div>
        <div className="rounded-lg border border-secondary p-6 flex flex-col items-center">
          <div id="product-component-3" className="w-full"></div>
        </div>
        <div className="rounded-lg border border-secondary p-6 flex flex-col items-center">
          <div id="product-component-4" className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ShopifyProductGrid;
