import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Zap, Thermometer } from "lucide-react";

const ProductsHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/f249dff7-15e2-4374-8c93-965ddca903af.png"
          alt="PTFE Manufacturing Facility"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Certification Badge */}
            <div className="mb-6 flex ml-5 mt-10">
              <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 text-sm font-semibold">
                <Award className="w-4 h-4 mr-2" />
                ISO 9001:2008 Certified | Defence-Grade Quality
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              High-Performance
              <span className="text-blue-400"> PTFE Wires</span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200 mb-4 font-semibold">
              Trusted by India's Top Defence & Aerospace Leaders
            </h2>

            <p className="text-md sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Meerut-based manufacturer of PTFE insulated wires & cables, delivering unmatched safety, 
              durability, and precision for critical applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3">
                <Link to="#products">View Product Range</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-black hover:bg-white hover:text-blue-900 text-lg font-semibold px-6 py-3"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Key Features Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Thermometer className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white">260°C</div>
                <div className="text-sm text-gray-300">High Temperature</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white">22 KV</div>
                <div className="text-sm text-gray-300">High Voltage</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white">Flame</div>
                <div className="text-sm text-gray-300">Retardant</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Award className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <div className="text-xl font-bold text-white">35+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
