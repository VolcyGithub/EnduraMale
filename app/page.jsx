import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#2a2a2a] w-full overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30"></div>
      
      <div className="relative z-10 px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center gap-8 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Left Content Section */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#319eb9] via-[#40b5d0] to-[#5cc9e0] leading-none">
                Boost Your Energy
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#319eb9] to-[#40b5d0] mx-auto lg:mx-0 rounded-full"></div>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[#f2f2f2] max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Unleash your potential with our premium energy formula. 
              <span className="text-[#319eb9] font-semibold"> Natural. Powerful. Sustained.</span>
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <span className="px-4 py-2 bg-[#319eb9]/20 text-[#f2f2f2] rounded-full border border-[#319eb9]/30 backdrop-blur-sm">
                ⚡ Zero Crash
              </span>
              <span className="px-4 py-2 bg-[#319eb9]/20 text-[#f2f2f2] rounded-full border border-[#319eb9]/30 backdrop-blur-sm">
                🌿 Natural Ingredients
              </span>
              <span className="px-4 py-2 bg-[#319eb9]/20 text-[#f2f2f2] rounded-full border border-[#319eb9]/30 backdrop-blur-sm">
                🚀 8hr Energy
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#319eb9] to-[#40b5d0] text-[#f2f2f2] font-bold rounded-xl text-lg transition-all duration-300 hover:from-[#40b5d0] hover:to-[#319eb9] hover:scale-105 hover:shadow-2xl hover:shadow-[#319eb9]/25">
                <span className="relative z-10">Get Energized Now</span>
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 border-2 border-[#319eb9] text-[#319eb9] font-semibold rounded-xl text-lg transition-all duration-300 hover:bg-[#319eb9] hover:text-[#f2f2f2] hover:scale-105">
                Learn More
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-[#f2f2f2]">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#319eb9]">50K+</div>
                <div className="text-xs">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-[#319eb9]/50"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#319eb9]">4.9★</div>
                <div className="text-xs">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-[#319eb9]/50"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#319eb9]">100%</div>
                <div className="text-xs">Natural Formula</div>
              </div>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="flex items-center justify-center relative order-1 lg:order-2">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#319eb9]/20 via-[#40b5d0]/20 to-[#5cc9e0]/20 rounded-full blur-3xl scale-75 animate-pulse"></div>
            
            {/* Product image container */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#319eb9] via-[#40b5d0] to-[#5cc9e0] rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative transform group-hover:scale-105 transition-transform duration-500 ease-out">
                <Image 
                  src="/product.png" 
                  width={600} 
                  height={600}
                  alt="Premium energy boost supplement bottle with natural ingredients"
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#319eb9]/20 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-[#319eb9]/30 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -left-12 w-8 h-8 bg-[#319eb9]/20 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-[#319eb9] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#319eb9]/70 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-[#319eb9]/50 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}