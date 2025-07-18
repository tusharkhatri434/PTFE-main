import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Award, Globe, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);
    const elements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-zoom');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Enhanced navigation function
  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);
  };

  const features = [{
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: "ISO 9001:2008 Certified",
    description: "Quality management system ensuring consistent product excellence and customer satisfaction."
  }, {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "Global Export Reach",
    description: "Serving international markets including Dubai, UK, and expanding worldwide presence."
  }, {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Trusted by Leaders",
    description: "Serving prestigious clients including BHEL, BEL, ISRO, DRDO, and leading industries."
  }, {
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    title: "30+ Years Experience",
    description: "Three decades of innovation, quality, and excellence in PTFE product manufacturing."
  }];

  // Updated products to match the detailed product page data
  const products = [{
    name: "PTFE Equipment Hookup Wires & Cables",
    description: "Premium single-core PTFE-insulated hookup wires engineered for internal equipment wiring requiring exceptional electrical and thermal properties.",
    image: "/lovable-uploads/products/PTFETeflonInsulatedEquipmentHookupWires&Cables.png",
    features: ["Temperature Range: -65°C to +260°C", "Voltage: 300V/600V/1000V", "Chemical & Fire Resistant"],
    slug: "ptfe-hookup-wires",
    path:"/products#ptfe-hookup-wires"
  }, {
    name: "PTFE High Voltage Corona Resistant Cables",
    description: "Specialized cables for high-voltage applications up to 50 KV with nano-additives to minimize corona discharge and suppress electrical stress.",
    image: "/lovable-uploads/products/PTFE_High_Voltage_Corona_Resistant_Cables.png",
    features: ["Up to 50 KV AC Rating", "Corona Inception >22 KV RMS", "Extended 15+ Year Service Life"],
    slug: "ptfe-high-voltage-corona-cables",
    path:"/products#ptfe-high-voltage-corona-cables"
  }, {
    name: "PTFE RF Coaxial Cables", 
    description: "High-performance RF coaxial cables for superior signal propagation with low attenuation and consistent impedance across DC to 18 GHz.",
    image: "/lovable-uploads/products/PTFE_RF_Coaxial_Cables.png",
    features: ["DC to 18 GHz Frequency Range", "50Ω/75Ω/93Ω Impedance", "MIL-C-17 Compliant"],
    slug: "ptfe-rf-coaxial-cables",
    path:"/products#ptfe-rf-coaxial-cables"
  }, 
  // {
  //   name: "PTFE Thermocouple Compensating Cables",
  //   description: "Thermocouple extension cables with PTFE insulation to preserve signal accuracy across long distances and extreme environments.",
  //   image: "/lovable-uploads/9361e364-96a1-424d-9948-37ee203a01b7.png",
  //   features: ["±1°C Accuracy Across 100m", "ANSI/MIL/IEC Color Coding", "Up to 1650°C Measurement"],
  //   slug: "ptfe-thermocouple-cables"
  // }, {
  //   name: "Single/Multicore Twisted Shielded Cables",
  //   description: "Comprehensive solution for signal and power applications with customizable core counts, insulation layers, and EMI shielding options.",
  //   image: "/lovable-uploads/de762d75-b33f-4438-a3ff-f1f67be5efd3.png",
  //   features: ["2-48 Core Configurations", "97% Shield Coverage", "Low Crosstalk Design"],
  //   slug: "multicore-twisted-cables"
  // }, {
  //   name: "PTFE Insulated Sleeves",
  //   description: "Robust thin-wall sleeving for protecting conductors and splices in aerospace, locomotive, and energy equipment applications.",
  //   image: "/lovable-uploads/ce782253-3fa2-40c8-8a17-54caa6fa0d0b.png",
  //   features: ["Up to 20 KV/mm Dielectric", "0.3-25mm Diameter Range", "Aerospace Grade Protection"],
  //   slug: "ptfe-sleeves"
  // }
     ];

  // Updated clients with larger card design
  const clients = [
    {
      name: "BHEL",
      logo: "/lovable-uploads/f3345a4e-fd66-4774-a1fa-04e8a4471f9c.png"
    },
    {
      name: "BEL",
      logo: "/lovable-uploads/96bd1556-fdcd-451f-923d-c02eebf38b42.png"
    },
    {
      name: "DRDO",
      logo: "/lovable-uploads/bee7d479-798c-49ce-8190-5957298c7400.png"
    },
    {
      name: "ISRO",
      logo: "/lovable-uploads/ef9308cf-8407-4566-aa98-c5b8c2aa960e.png"
    },
    {
      name: "L&T",
      logo: "/lovable-uploads/6b6e7f22-24b1-49d6-b320-2e819ddd25bb.png"
    },
    {
      name: "HAL",
      logo: "/lovable-uploads/7d262721-1e8c-43bc-9ee2-b6a1106cc8af.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />

      {/* About Section */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-4 text-gradient">
              About Meerut PTFE Products
            </h2>
            <p className="responsive-text mb-4 font-open-sans leading-relaxed text-black">
              Established in 1986, Meerut PTFE Products Pvt. Ltd. has been at the forefront of innovation 
              and quality in PTFE Teflon Insulated Wires and Cables. Our dedication to exceptional 
              manufacturing standards and customer satisfaction has made us a preferred partner for 
              industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => handleNavigation('/about')} size="lg" className="bg-blue-600 hover:bg-blue-700 text-xs text-white">Know More About Us</Button>
              <Button onClick={() => handleNavigation('/contact')} variant="outline" size="lg" className="text-xs">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-gray-50">
        <div className="content-container">
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-4 text-gray-900">
              Why Choose Us
            </h2>
            <p className="responsive-text max-w-3xl mx-auto text-black">
              Discover what makes us the preferred choice for premium PTFE solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className={`card-hover border-0 shadow-lg animate-on-scroll stagger-${index + 1} hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-5 text-center">
                  <div className="mb-3 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold font-poppins mb-2 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-open-sans text-black">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section - Enlarged Cards and Logos */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-4 text-gray-900">
              Trusted by Industry Leaders
            </h2>
            <p className="max-w-3xl mx-auto font-semibold text-base text-black">
              Over the years, our dedication to excellence has earned the trust of prestigious clients
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div key={index} className={`text-center animate-on-scroll-zoom stagger-${index + 1}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2 transform">
                  <CardContent className="p-8 flex flex-col items-center justify-center h-32">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-16 max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <p className="text-sm font-semibold text-gray-700 mt-3 text-center font-open-sans">
                      {client.name}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 animate-on-scroll">
            <Button onClick={() => handleNavigation('/clients')} size="lg" className="border-blue-600 text-xs text-white bg-blue-600 hover:bg-blue-700">
              View All Clients
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section - Updated with Product Page Data */}
      <section className="section-spacing bg-gray-50">
        <div className="content-container">
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-4 text-gradient">
              Our Premium Products
            </h2>
            <p className="responsive-text max-w-3xl mx-auto text-black">
              Engineered for performance, built for durability, trusted by industry leaders
            </p>
          </div>
          
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product, index) => (
    <Card
      key={index}
      className={`card-hover border-0 shadow-lg overflow-hidden animate-on-scroll stagger-${index + 1} hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
    >
      <div>
        <div className="w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover sm:object-contain md:object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardContent className="p-5 flex flex-col gap-4">
          <h3 className="text-lg font-semibold font-poppins text-gray-900">
            {product.name}
          </h3>

          <p className="text-sm font-open-sans text-black leading-relaxed">
            {product.description}
          </p>

          <ul className="space-y-2">
            {product.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-black">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>

      <div className="px-5 pb-5 mt-auto">
        <Button
          onClick={() => handleNavigation(`${product.path}`)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-sm text-white"
        >
          Know More <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </Card>
  ))}
</div>

          
          <div className="text-center mt-8 animate-on-scroll">
            <Button onClick={() => handleNavigation('/products')} size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with Logo Shadow */}
      <section className="section-spacing hero-gradient text-white bg-blue-300 relative overflow-hidden">
        {/* Logo Shadow Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 transform rotate-12">
            <img 
              src="/lovable-uploads/f80ae63e-f645-4c57-8a31-79ddd29d8eda.png" 
              alt="" 
              className="w-32 h-32 object-contain opacity-20"
            />
          </div>
          <div className="absolute bottom-10 right-10 transform -rotate-12">
            <img 
              src="/lovable-uploads/f80ae63e-f645-4c57-8a31-79ddd29d8eda.png" 
              alt="" 
              className="w-40 h-40 object-contain opacity-15"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
            <img 
              src="/lovable-uploads/f80ae63e-f645-4c57-8a31-79ddd29d8eda.png" 
              alt="" 
              className="w-64 h-64 object-contain opacity-5"
            />
          </div>
        </div>
        
        <div className="content-container text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-4">
              Ready to Experience Excellence?
            </h2>
            <p className="responsive-text mb-4 opacity-90">
              Join hundreds of satisfied clients who trust us for their PTFE solution needs. 
              Get your custom quote today and discover the Meerut PTFE difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => handleNavigation('/contact')} size="lg" className="bg-white hover:bg-gray-100 text-xs text-black font-semibold">
                Get Your Quote
              </Button>
              <Button onClick={() => handleNavigation('/products')} variant="outline" size="lg" className="border-white hover:bg-white text-xs text-black font-semibold">
                Browse Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
