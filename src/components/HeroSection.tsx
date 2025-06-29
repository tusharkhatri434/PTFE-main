import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Award, Globe, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    title: "Delivering Excellence in PTFE Wires & Cables",
    subtitle: "Premium Quality | Global Standards | Trusted by Industry Leaders",
    description: "Over three decades of innovation and quality in PTFE Teflon Insulated Wires and Cables",
    image: "/lovable-uploads/322f1e0a-167c-4cd3-af61-29d76fea302f.png",
    cta: "Explore Our Products"
  }, {
    title: "ISO 9001:2008 Certified Excellence",
    subtitle: "Trusted by BHEL, BEL, ISRO, DRDO & More",
    description: "Advanced manufacturing capabilities serving aerospace, defense, and industrial sectors",
    image: "/lovable-uploads/2ec8608e-0182-4ad2-acea-e8a954790711.png",
    cta: "View Our Clients"
  }, {
    title: "Global Reach, Local Excellence",
    subtitle: "Exporting to Dubai, UK & Beyond",
    description: "State-of-the-art 7,000 sq. ft. facility with cutting-edge R&D capabilities",
    image: "/lovable-uploads/a9c75f1b-9016-43e0-be35-86e8ac862dd2.png",
    cta: "Our Infrastructure"
  }, {
    title: "Aerospace & Defense Grade Solutions",
    subtitle: "Mission-Critical PTFE Solutions | Defense Approved",
    description: "Engineered for the most demanding aerospace and defense applications with uncompromising quality standards",
    image: "/lovable-uploads/50a8b71b-bfc6-4a84-ad9b-236703895566.png",
    cta: "Defense Solutions"
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  return <section className="relative h-[80vh] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 z-10 bg-black/20" />
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
        </div>)}

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl mb-3 opacity-90 font-semibold">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-base md:text-lg mb-6 opacity-80 font-open-sans font-semibold">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
                <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-6 py-3 text-base">
                  <Link to="/products">{slides[currentSlide].cta}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-black px-6 py-3 text-base">
                  <Link to="/contact" className="text-black \n">Get Quote</Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <Award className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-lg font-bold">35+</div>
                  <div className="text-xs opacity-80">Years Experience</div>
                </div>
                <div className="text-center">
                  <Globe className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-lg font-bold">Global</div>
                  <div className="text-xs opacity-80">Export Reach</div>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-lg font-bold">99.8%</div>
                  <div className="text-xs opacity-80">Happy Clients</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-lg font-bold">ISO</div>
                  <div className="text-xs opacity-80">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-3 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all">
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-3 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all">
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/40"}`} />)}
      </div>
    </section>;
};

export default HeroSection;
