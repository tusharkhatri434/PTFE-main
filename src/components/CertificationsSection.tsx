import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Shield, Globe, FileCheck, Star } from "lucide-react";
const CertificationsSection = () => {
  const certifications = [{
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description: "Internationally recognized quality management standard ensuring consistent product quality and customer satisfaction.",
    icon: <Award className="w-8 h-8 text-blue-600" />,
    benefits: ["Consistent quality processes", "Customer satisfaction focus", "Continuous improvement", "Risk-based thinking"]
  }, {
    title: "MIL-STD Compliance",
    subtitle: "Military Standard Certification",
    description: "Products meet stringent military and aerospace specifications for reliability and performance in critical applications.",
    icon: <Shield className="w-8 h-8 text-green-600" />,
    benefits: ["Defense-grade reliability", "Extreme environment testing", "Aerospace qualification", "Mission-critical performance"]
  }, {
    title: "RoHS Compliant",
    subtitle: "Environmental Compliance",
    description: "All products comply with Restriction of Hazardous Substances directive, ensuring environmental responsibility.",
    icon: <Globe className="w-8 h-8 text-emerald-600" />,
    benefits: ["Lead-free manufacturing", "Environmental protection", "Global market access", "Sustainable practices"]
  }, {
    title: "UL Listed",
    subtitle: "Safety Certification",
    description: "Underwriters Laboratories certification ensures products meet rigorous safety standards for electrical applications.",
    icon: <FileCheck className="w-8 h-8 text-orange-600" />,
    benefits: ["Electrical safety assured", "Fire resistance tested", "North American compliance", "Insurance approved"]
  }];
  return <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">Our Quality Standards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
            Committed to excellence through internationally recognized quality standards and certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-blue-200 rounded-2xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                    {cert.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors font-poppins">
                      {cert.title}
                    </CardTitle>
                    <p className="text-sm font-semibold text-blue-600 font-inter">
                      {cert.subtitle}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-700 mb-6 leading-relaxed font-open-sans">
                  {cert.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 font-poppins">Key Benefits:</h4>
                  <div className="space-y-2">
                    {cert.benefits.map((benefit, idx) => <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-inter">{benefit}</span>
                      </div>)}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Additional Quality Metrics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 font-poppins">
            Quality Metrics & Performance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-sm text-gray-600 font-inter">Quality Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">35+</div>
              <div className="text-sm text-gray-600 font-inter">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-sm text-gray-600 font-inter">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-inter">Quality Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CertificationsSection;