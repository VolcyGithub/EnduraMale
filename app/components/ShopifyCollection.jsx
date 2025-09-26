import { useEffect, useRef } from "react";

const ShopifyCollection = ({
  domain = "5dyjd7-jq.myshopify.com",
  storefrontAccessToken = "a7b5093153209e81b078be37a6f3054f",
  collectionId = "292745117773",
  componentId = "collection-component",
}) => {
  const containerRef = useRef(null);
  const componentIdRef = useRef(`${componentId}-${Date.now()}`);

  useEffect(() => {
    const loadShopifyBuyButton = () => {
      const scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

      const initializeShopify = () => {
        if (window.ShopifyBuy && window.ShopifyBuy.UI) {
          const client = window.ShopifyBuy.buildClient({
            domain: domain,
            storefrontAccessToken: storefrontAccessToken,
          });

          window.ShopifyBuy.UI.onReady(client).then((ui) => {
            const container = document.getElementById(componentIdRef.current);
            if (container) {
              ui.createComponent("collection", {
                id: collectionId,
                node: container,
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                  product: {
                    styles: {
                      product: {
                        "@media (min-width: 601px)": {
                          "max-width": "calc(25% - 20px)",
                          "margin-left": "20px",
                          "margin-bottom": "50px",
                          width: "calc(25% - 20px)",
                        },
                        img: {
                          height: "calc(100% - 15px)",
                          position: "absolute",
                          left: "0",
                          right: "0",
                          top: "0",
                        },
                        imgWrapper: {
                          "padding-top": "calc(75% + 15px)",
                          position: "relative",
                          height: "0",
                        },
                      },
                      title: {
                        "font-size": "17px",
                        color: "#1e1e1e",
                      },
                      button: {
                        "font-size": "13px",
                        "padding-top": "14.5px",
                        "padding-bottom": "14.5px",
                        ":hover": {
                          "background-color": "#499587",
                        },
                        "background-color": "#51a696",
                        ":focus": {
                          "background-color": "#499587",
                        },
                        "border-radius": "27px",
                      },
                      quantityInput: {
                        "font-size": "13px",
                        "padding-top": "14.5px",
                        "padding-bottom": "14.5px",
                      },
                    },
                    buttonDestination: "modal",
                    contents: {
                      options: false,
                    },
                    text: {
                      button: "View product",
                    },
                  },
                  productSet: {
                    styles: {
                      products: {
                        "@media (min-width: 601px)": {
                          "margin-left": "-20px",
                        },
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
                        "@media (min-width: 601px)": {
                          "max-width": "100%",
                          "margin-left": "0px",
                          "margin-bottom": "0px",
                        },
                      },
                      button: {
                        "font-size": "13px",
                        "padding-top": "14.5px",
                        "padding-bottom": "14.5px",
                        ":hover": {
                          "background-color": "#499587",
                        },
                        "background-color": "#51a696",
                        ":focus": {
                          "background-color": "#499587",
                        },
                        "border-radius": "27px",
                      },
                      quantityInput: {
                        "font-size": "13px",
                        "padding-top": "14.5px",
                        "padding-bottom": "14.5px",
                      },
                      title: {
                        "font-family": "Helvetica Neue, sans-serif",
                        "font-weight": "bold",
                        "font-size": "26px",
                        color: "#1e1e1e",
                      },
                      price: {
                        color: "#4e4e4e",
                      },
                      compareAt: {
                        color: "#4e4e4e",
                      },
                      unitPrice: {
                        color: "#4e4e4e",
                      },
                      description: {
                        color: "#535353",
                      },
                    },
                    text: {
                      button: "Add to cart",
                    },
                  },
                  modal: {
                    styles: {
                      modal: {
                        "background-color": "#f1f1f1",
                      },
                    },
                  },
                  option: {},
                  cart: {
                    styles: {
                      button: {
                        "font-size": "13px",
                        "padding-top": "14.5px",
                        "padding-bottom": "14.5px",
                        ":hover": {
                          "background-color": "#499587",
                        },
                        "background-color": "#51a696",
                        ":focus": {
                          "background-color": "#499587",
                        },
                        "border-radius": "27px",
                      },
                      title: {
                        color: "#f9f9f9",
                      },
                      header: {
                        color: "#f9f9f9",
                      },
                      lineItems: {
                        color: "#f9f9f9",
                      },
                      subtotalText: {
                        color: "#f9f9f9",
                      },
                      subtotal: {
                        color: "#f9f9f9",
                      },
                      notice: {
                        color: "#f9f9f9",
                      },
                      currency: {
                        color: "#f9f9f9",
                      },
                      close: {
                        color: "#f9f9f9",
                        ":hover": {
                          color: "#f9f9f9",
                        },
                      },
                      empty: {
                        color: "#f9f9f9",
                      },
                      noteDescription: {
                        color: "#f9f9f9",
                      },
                      discountText: {
                        color: "#f9f9f9",
                      },
                      discountIcon: {
                        fill: "#f9f9f9",
                      },
                      discountAmount: {
                        color: "#f9f9f9",
                      },
                      cart: {
                        "background-color": "#007862",
                      },
                      footer: {
                        "background-color": "#007862",
                      },
                    },
                    text: {
                      total: "Subtotal",
                      button: "Checkout",
                    },
                    contents: {
                      note: true,
                    },
                  },
                  toggle: {
                    styles: {
                      toggle: {
                        "background-color": "#51a696",
                        ":hover": {
                          "background-color": "#499587",
                        },
                        ":focus": {
                          "background-color": "#499587",
                        },
                      },
                      count: {
                        "font-size": "13px",
                      },
                    },
                  },
                  lineItem: {
                    styles: {
                      variantTitle: {
                        color: "#f9f9f9",
                      },
                      title: {
                        color: "#f9f9f9",
                      },
                      price: {
                        color: "#f9f9f9",
                      },
                      fullPrice: {
                        color: "#f9f9f9",
                      },
                      discount: {
                        color: "#f9f9f9",
                      },
                      discountIcon: {
                        fill: "#f9f9f9",
                      },
                      quantity: {
                        color: "#f9f9f9",
                      },
                      quantityIncrement: {
                        color: "#f9f9f9",
                        "border-color": "#f9f9f9",
                      },
                      quantityDecrement: {
                        color: "#f9f9f9",
                        "border-color": "#f9f9f9",
                      },
                      quantityInput: {
                        color: "#f9f9f9",
                        "border-color": "#f9f9f9",
                      },
                    },
                  },
                },
              });
            }
          });
        }
      };

      // Check if ShopifyBuy is already loaded
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          initializeShopify();
        } else {
          // Wait for UI to be ready
          const checkUI = setInterval(() => {
            if (window.ShopifyBuy.UI) {
              clearInterval(checkUI);
              initializeShopify();
            }
          }, 100);
        }
      } else {
        // Load the script
        const script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        script.onload = initializeShopify;
        document.head.appendChild(script);
      }
    };

    loadShopifyBuyButton();

    // Cleanup function
    return () => {
      // Clean up the container content when component unmounts
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [domain, storefrontAccessToken, collectionId]);

  return <div ref={containerRef} id={componentIdRef.current}></div>;
};

export default ShopifyCollection;
