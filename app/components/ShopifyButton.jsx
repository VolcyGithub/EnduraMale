import ShopifyBuyButton from '../components/ShopifyBuyButton';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Featured Product
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Check out this amazing product from our Shopify store
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ShopifyBuyButton 
              productId="7554988933197"
              domain="5dyjd7-jq.myshopify.com"
              storefrontAccessToken="a7b5093153209e81b078be37a6f3054f"
            />
          </div>
        </div>

        {/* Additional Tailwind-styled content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Free Shipping
            </h3>
            <p className="text-gray-600">
              Free shipping on all orders over $50
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Easy Returns
            </h3>
            <p className="text-gray-600">
              30-day hassle-free return policy
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Secure Checkout
            </h3>
            <p className="text-gray-600">
              SSL encrypted secure payment processing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}