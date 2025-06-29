import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, Zap, Shield, Award } from "lucide-react";
const WhyChooseSection = () => {
  const features = [{
    icon: <Thermometer className="w-12 h-12 text-red-500" />,
    title: "High Temperature Resistance",
    description: "Up to 260°C",
    details: "Superior thermal stability for extreme operating conditions in aerospace and industrial applications"
  }, {
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    title: "High Voltage Endurance",
    description: "Up to 22 KV AC",
    details: "Exceptional dielectric strength for high-voltage applications with enhanced corona resistance"
  }, {
    icon: <Shield className="w-12 h-12 text-green-500" />,
    title: "Flame Retardant & Chemically Inert",
    description: "Superior Safety",
    details: "Non-toxic, flame-proof construction with resistance to harsh chemicals and environmental conditions"
  }, {
    icon: <Award className="w-12 h-12 text-blue-500" />,
    title: "ISO 9001:2008 Certified",
    description: "Defence-Grade Quality",
    details: "Trusted by DRDO, ISRO, BHEL, and other leading organizations for mission-critical applications"
  }];
  return <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Why Choose Our PTFE Wires?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans leading-relaxed">
            Industry-leading performance specifications that exceed expectations in the most demanding applications across aerospace, defense, and industrial sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-200 hover:border-blue-300">
              <CardContent className="p-8 text-center py-[10px] px-[15px]">
                <div className="mb-6 flex justify-center px-0">
                  
                </div>
                <h3 className="font-bold text-gray-900 mb-3 font-poppins text-xl">
                  {feature.title}
                </h3>
                <div className="text-xs font-bold text-black mb-3 font-poppins rounded-xl rounded-xl ">
                  {feature.description}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-open-sans">
                  {feature.details}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default WhyChooseSection;