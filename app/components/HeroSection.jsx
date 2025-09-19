import Image from "next/image";
const FeatureItem = ({ text }) => {
return (
    <div className="text-gray-500 flex gap-x-3">
        <span className="w-7 h-7 max-h-7 min-w-[1.75rem] bg-emerald-100 dark:bg-gray-900 dark:text-gray-300 text-emerald-600 rounded-md flex items-center justify-center">
            ✓
        </span>
        {text}
    </div>
)
}
const features = [
{
    id: 1,
    text: "Boost endurance & stamina"
},
{
    id: 2,
    text: "Enhance libido"
},
{
    id: 3,
    text: "Support prostate health"
},
{
    id: 4,
    text: "Naturally elevate testosterone"
},
]
 

const HeroSection = () => {
  return (
    <section className="bg-secondary/20 py-8 mt-20">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-stretch gap-x-6">
        <div className="lg:w-[47%] py-4 lg:py-8 xl:py-12 space-y-7">
          <h1 className="text-gray-900  font-bold text-5xl sm:text-5xl md:text-5xl xl:text-6xl">
            Let your <span className="text-secondary">confidence</span> come to
            you
          </h1>
          <p className="text-gray-500">
            Discover the power of Enduramale, the ultimate supplement designed to help you unlock your full masculine potential. 
            {/* Boost your endurance, enhance your libido, and support your overall */}
          </p>
          
          <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4">
            {features.map((feature) => (
              <FeatureItem key={feature.id} {...feature} />
            ))}
          </div>
        </div>
        <div className="flex flex-1 relative lg:h-auto">
          <div className="relative h-max lg:absolute left-0 top-0 flex lg:h-full  lg:w-auto w-11/12">
            <span className="absolute top-0 left-32 w-3/5 aspect-square rounded-md -rotate-[30deg] translate-y-20 origin-center border border-emerald-200 dark:border-gray-800" />
            <span className="absolute top-1/2 right-16 w-2/5 aspect-square rounded-md rotate-12 -translate-y-1/2 origin-center border border-emerald-200 dark:border-gray-800" />
            <Image
              src="/trilogie-products.png"
              width={600}
              height={600}
              alt="Enduramale Product Range"
              className=" lg:w-auto lg:h-full relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
