import { FaAward, FaUsers, FaFlask, FaStar, FaHeart, FaShieldAlt, FaLeaf, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { number: "50K+", label: "Happy Customers", icon: FaUsers },
    { number: "15+", label: "Years Experience", icon: FaAward },
    { number: "100+", label: "Products Tested", icon: FaFlask },
    { number: "98%", label: "Customer Satisfaction", icon: FaStar },
  ];

  const values = [
    {
      icon: FaHeart,
      title: "Health First",
      description:
        "We prioritize your health and wellness above all else, ensuring every product meets the highest quality standards.",
    },
    {
      icon: FaShieldAlt,
      title: "Safety & Purity",
      description:
        "All our supplements are rigorously tested for purity, potency, and safety by third-party laboratories.",
    },
    {
      icon: FaLeaf,
      title: "Natural Ingredients",
      description:
        "We source premium, natural ingredients from trusted suppliers around the world to create effective formulations.",
    },
    {
      icon: FaCheckCircle,
      title: "Proven Results",
      description:
        "Our products are backed by scientific research and thousands of positive customer testimonials.",
    },
  ];

  return (
    <div className="bg-third text-primary">
      {/* Hero Section */}
      <section className="bg-secondary text-third py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-third/90">Enduramale</span>
          </h1>
          <p className="text-xl md:text-2xl text-third/90 max-w-3xl mx-auto leading-relaxed">
            Dedicated to empowering your health journey with premium supplements and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Our Story
              <div className="w-16 h-1 bg-secondary mt-4"></div>
            </h2>
            <div className="space-y-6 text-lg text-primary/80 leading-relaxed">
              <p>
                Founded in 2025, Enduramale began with a simple mission: to provide men with the highest quality supplements to support their health, vitality, and performance goals.
              </p>
              <p>
                Our journey started when our founder, Fritzner Registre, struggled to find reliable, effective supplements during his athletic career. Frustrated by inconsistent quality and misleading claims, he set out to create a company that would prioritize transparency, science, and results.
              </p>
              <p>
                Today, we continue to innovate and improve, always putting our customers' health and satisfaction first.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-secondary rounded-2xl p-8 shadow-2xl">
              <img
                src="/ENDURAMALE-BLACK.png"
                alt="Our facility"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-third p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">2025</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ number, label, icon: Icon }, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-third" />
              </div>
              <div className="text-4xl font-bold text-third mb-2">{number}</div>
              <div className="text-third/80 text-lg">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Our Values
            <div className="w-16 h-1 bg-secondary mx-auto mt-4"></div>
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto mb-16">
            These core principles guide everything we do, from product development to customer service.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="bg-third rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-third" />
                </div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="text-primary/80 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary text-third text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">
            Our Mission
            <div className="w-16 h-1 bg-third mx-auto mt-4"></div>
          </h2>
          <p className="text-2xl text-third/90 max-w-4xl mx-auto leading-relaxed">
            To empower men worldwide with scientifically-backed supplements that enhance health, boost performance, and improve quality of life, while maintaining the highest standards of quality, transparency, and customer care.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-8">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-primary/80 mb-10">
            Join thousands of satisfied customers who trust Enduramale for their wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/product">
              <button className="bg-secondary hover:bg-secondary/90 text-third px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Products
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-primary hover:bg-primary/80 text-third px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border border-secondary">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
