
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Cpu, Shield, Target } from "lucide-react";

const ManufacturingCapabilities = () => {
  const capabilities = [
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "CNC-Controlled Extrusion Lines",
      description: "Precision manufacturing with computer-controlled processes for consistent quality and dimensional accuracy"
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-600" />,
      title: "Automated PTFE Insulation Machinery",
      description: "State-of-the-art equipment ensuring uniform insulation thickness and superior electrical properties"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Stringent Quality Control Labs",
      description: "In-house testing facilities with advanced instruments for compliance with international standards"
    },
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: "Custom Cable Configurations",
      description: "Tailored solutions designed to meet specific customer requirements and applications"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center lg:text-left mb-12">
            <h2 className="text-4xl text-center md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                In-House Precision Manufacturing in Meerut
              </h2>
              <p className="text-xl text-center text-gray-600 leading-relaxed font-open-sans">
                Our state-of-the-art 7,000 sq. ft. facility combines advanced technology with skilled craftsmanship to deliver superior PTFE products that meet the highest industry standards.
              </p>
            </div>
      
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-200 hover:border-blue-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {capability.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 font-poppins">
                          {capability.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed font-open-sans">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/img/In-HousePrecisionManufacturinginMeerut.jpeg" 
                alt="Manufacturing Facility" 
                className="w-full h-96 sm:h-[34rem] object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2 font-poppins">Advanced Manufacturing</h4>
                <p className="text-sm opacity-90 font-open-sans">ISO 9001:2008 Certified Facility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingCapabilities;
