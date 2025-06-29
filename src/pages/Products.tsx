import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/ProductsHero";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProductList from "@/components/ProductList";
import DetailedProductSections from "@/components/DetailedProductSections";
import ManufacturingCapabilities from "@/components/ManufacturingCapabilities";
import ProductsFAQ from "@/components/ProductsFAQ";
import ProductsFinalCTA from "@/components/ProductsFinalCTA";
const Products = () => {
  // Animation on scroll functionality
  useEffect(() => {
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
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  console.log("Products page loaded");
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <ProductsHero />

      {/* Why Choose Our PTFE Wires */}
      <WhyChooseSection />

      {/* Product Overview */}
      <section id="products" className="py-20 bg-gray-50">
        
      </section>

      {/* Detailed Product Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">Our Product Range</h2>
            <p className="max-w-3xl mx-auto font-open-sans text-lg text-black">In-depth technical information, features, applications and specifications 
for each PTFE product category</p>
          </div>
          <DetailedProductSections />
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <ManufacturingCapabilities />

      {/* Client Testimonial */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed font-poppins">
            "We use Meerut PTFE's high-voltage wires in our aerospace control systems. 
            Excellent performance under stress conditions."
          </blockquote>
          <div className="text-lg text-blue-600 font-semibold font-open-sans">
            — Senior Engineer, ISRO Vendor Division
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ProductsFAQ />

      {/* Final CTA */}
      <ProductsFinalCTA />

      <Footer />
    </div>;
};
export default Products;