import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import React, { useEffect } from 'react';

const ShopifyProductSlider = () => {
  useEffect(() => {
    // Charger le script Shopify Buy Button
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
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = initializeShopifyButtons;
    };

    const initializeShopifyButtons = () => {
      const client = window.ShopifyBuy.buildClient({
        domain: '5dyjd7-jq.myshopify.com',
        storefrontAccessToken: 'a7b5093153209e81b078be37a6f3054f',
      });

      const buttonConfig = {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "20px"
              }
            },
            "title": {
              "color": "#f2f2f2"
            },
            "button": {
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px",
              ":hover": {
                "background-color": "#499587"
              },
              "background-color": "#51a696",
              ":focus": {
                "background-color": "#499587"
              },
              "border-radius": "27px",
              "padding-left": "37px",
              "padding-right": "37px"
            },
            "quantityInput": {
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px"
            }
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "0px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px",
              ":hover": {
                "background-color": "#499587"
              },
              "background-color": "#51a696",
              ":focus": {
                "background-color": "#499587"
              },
              "border-radius": "27px",
              "padding-left": "37px",
              "padding-right": "37px"
            },
            "quantityInput": {
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px"
            },
            "title": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "bold",
              "font-size": "26px",
              "color": "#f2f2f2"
            },
            "price": {
              "color": "#4e4e4e"
            },
            "compareAt": {
              "color": "#4e4e4e"
            },
            "unitPrice": {
              "color": "#4e4e4e"
            },
            "description": {
              "color": "#535353"
            }
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "modal": {
          "styles": {
            "modal": {
              "background-color": "#f1f1f1"
            }
          }
        },
        "option": {},
        "cart": {
          "styles": {
            "button": {
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px",
              ":hover": {
                "background-color": "#499587"
              },
              "background-color": "#51a696",
              ":focus": {
                "background-color": "#499587"
              },
              "border-radius": "27px"
            },
            "title": {
              "color": "#f9f9f9"
            },
            "header": {
              "color": "#f9f9f9"
            },
            "lineItems": {
              "color": "#f9f9f9"
            },
            "subtotalText": {
              "color": "#f9f9f9"
            },
            "subtotal": {
              "color": "#f9f9f9"
            },
            "notice": {
              "color": "#f9f9f9"
            },
            "currency": {
              "color": "#f9f9f9"
            },
            "close": {
              "color": "#f9f9f9",
              ":hover": {
                "color": "#f9f9f9"
              }
            },
            "empty": {
              "color": "#f9f9f9"
            },
            "noteDescription": {
              "color": "#f9f9f9"
            },
            "discountText": {
              "color": "#f9f9f9"
            },
            "discountIcon": {
              "fill": "#f9f9f9"
            },
            "discountAmount": {
              "color": "#f9f9f9"
            },
            "cart": {
              "background-color": "#007862"
            },
            "footer": {
              "background-color": "#007862"
            }
          },
          "text": {
            "total": "Subtotal",
            "button": "Checkout"
          },
          "contents": {
            "note": true
          }
        },
        "toggle": {
          "styles": {
            "toggle": {
              "background-color": "#51a696",
              ":hover": {
                "background-color": "#499587"
              },
              ":focus": {
                "background-color": "#499587"
              }
            },
            "count": {
              "font-size": "13px"
            }
          }
        },
        "lineItem": {
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

      // Initialiser les 3 produits
      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        // Produit 1
        if (document.getElementById('product-component-1')) {
          ui.createComponent('product', {
            id: '7554988933197',
            node: document.getElementById('product-component-1'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: buttonConfig
          });
        }

        // Produit 2
        if (document.getElementById('product-component-2')) {
          ui.createComponent('product', {
            id: '7555499720781',
            node: document.getElementById('product-component-2'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: buttonConfig
          });
        }

        // Produit 3
        if (document.getElementById('product-component-3')) {
          ui.createComponent('product', {
            id: '7555503947853',
            node: document.getElementById('product-component-3'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: buttonConfig
          });
        }
        // Produit 4
        if (document.getElementById('product-component-4')) {
          ui.createComponent('product', {
            id: '7555496640589',
            node: document.getElementById('product-component-4'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: buttonConfig
          });
        }
        
      });
    };

    // Charger le script Splide CSS
    const splideCSS = document.createElement('link');
    splideCSS.rel = 'stylesheet';
    splideCSS.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
    document.head.appendChild(splideCSS);

    // Charger le script Splide JS
    const splideJS = document.createElement('script');
    splideJS.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
    splideJS.onload = () => {
      // Initialiser Splide après le chargement
      if (window.Splide) {
        const splide = new window.Splide('.splide', { 
          perPage: 2,
          gap: '1.9rem',
          pagination: false,
          arrows: false,
          type: 'loop',
          autoplay: true,
          breakpoints: {
            640: { perPage: 1 },
            768: { perPage: 2 },
            1024: { perPage: 3 },
          },
          trimSpace: 'move',
          padding: '2.4rem',
        });
        splide.mount();
      }
    };
    document.head.appendChild(splideJS);

    
    setTimeout(loadShopifyScript, 1000);

  }, []);

return (
    <div className="w-full max-w-7xl mx-auto py-8">
        <div className="splide" role="group" aria-label="Slider de produits Shopify">
            <div className="splide__track">
                <ul className="splide__list">
                    <li className="splide__slide">
                        <div className="rounded-lg border border-secondary p-6 h-full flex flex-col justify-center items-center">
                            <div  id="product-component-1" className="flex-1"></div>
                        </div>
                    </li>
                    <li className="splide__slide">
                        <div className="rounded-lg border border-secondary p-6 h-full flex flex-col justify-center items-center">
                            <div id="product-component-2" className="flex-1"></div>
                        </div>
                    </li>
                    <li className="splide__slide">
                        <div className="rounded-lg border border-secondary p-6 h-full flex flex-col justify-center items-center">
                            <div id="product-component-3" className="flex-1"></div>
                        </div>
                    </li>
                    <li className="splide__slide">
                        <div className="rounded-lg border border-secondary p-6 h-full flex flex-col justify-center items-center">
                            <div id="product-component-4" className="flex-1"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);
};

export default ShopifyProductSlider;