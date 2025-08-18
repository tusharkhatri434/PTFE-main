import { Badge } from "@/components/ui/badge";
import { CheckCircle, Cable, Zap, Settings, Cpu, Thermometer, Shield, Target, Award, Star, ArrowRight, Download, Info, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductList = () => {
  console.log("ProductList component rendering...");
  
  const products = [{
    id: 1,
    name: "PTFE (Teflon) Insulated Equipment Hookup Wires & Cables",
    subtitle: "Premium Single Core Insulated Hookup Wires & Cables",
    image: "/lovable-uploads/c4401f13-0b5e-4dbe-95da-f8ae4ebba747.png",
    category: "Hookup Wires",
    overview: "These single-core, PTFE-insulated hookup wires are engineered for internal wiring in equipment requiring exceptional electrical and thermal properties. Our advanced manufacturing process ensures consistent quality and performance across all temperature ranges.",
    detailedDescription: "Manufactured using virgin PTFE resin with advanced extrusion techniques, these wires feature exceptional dielectric properties and chemical resistance. The conductor is made from high-purity annealed copper, providing excellent conductivity and flexibility. Each wire undergoes rigorous quality testing including high-voltage breakdown tests, thermal cycling, and chemical compatibility assessments.",
    keyFeatures: ["Operating Temperature: -65°C to +260°C", "Voltage Rating: 300V, 600V, and 1000V", "Dielectric Breakdown: >7.5 KV/mm", "Zero smoke emission and non-toxic", "Chemical resistance to acids, bases, and solvents", "Excellent flexibility and bend radius", "UV and ozone resistant", "Flame retardant properties"],
    applications: ["MIL-grade connectors and test benches", "Clean room electronic circuits", "High-end medical equipment", "Precision laboratory equipment", "Aerospace wiring harnesses", "Defense communication systems", "Industrial control panels", "Scientific instrumentation"],
    specifications: {
      conductor: "Annealed copper (99.9% purity)",
      insulation: "Virgin PTFE (Teflon)",
      thickness: "0.1mm to 2.5mm wall thickness",
      sizes: "AWG 30 to AWG 8",
      colors: "Multiple colors available",
      packaging: "Spools of 100m, 500m, 1000m"
    },
    standards: ["MIL-W-16878", "IS 8130", "UL 1213", "RoHS Compliant", "REACH Compliant"],
    icon: <Cable className="w-8 h-8" />
  }, {
    id: 2,
    name: "PTFE High Voltage Corona Resistant Cables",
    subtitle: "Advanced High Voltage Solutions (Up to 50 KV)",
    image: "/lovable-uploads/dbf4af32-1272-4e5d-8351-63ea0a4bb757.png",
    category: "High Voltage",
    overview: "Specifically designed for use in high-voltage applications prone to electrical discharge, these corona-resistant cables incorporate nano-additives and advanced PTFE formulations to prevent corona degradation and extend service life.",
    detailedDescription: "These cables feature a unique multi-layer insulation system with corona-resistant PTFE compound enhanced with nano-fillers. The conductor design includes stress-relief geometry to minimize electric field concentration. Advanced manufacturing techniques ensure void-free insulation and consistent wall thickness throughout the cable length.",
    keyFeatures: ["Voltage Rating: Up to 50 kV AC (70 kV custom)", "Corona Inception Level: >22 kV RMS", "Extended service life: 15+ years", "EMI suppression with conductive shielding", "Partial discharge resistant", "High temperature stability", "Moisture and chemical resistant", "Low dielectric loss factor"],
    applications: ["Defense radar systems", "Pulse power delivery in accelerators", "MRI/X-ray high-voltage circuits", "High-voltage industrial equipment", "Power transmission systems", "Electrostatic precipitators", "High-energy physics equipment", "Plasma generation systems"],
    specifications: {
      conductor: "Silver-plated copper or copper alloy",
      insulation: "Corona-resistant PTFE compound",
      shielding: "Copper braid or tape (optional)",
      jacket: "PTFE or FEP outer jacket",
      bendRadius: "Minimum 10 times cable diameter",
      testVoltage: "Up to 150 kV DC"
    },
    standards: ["MIL-C-27500", "ASTM-D3159", "IEC 60287", "Satellite-grade", "IEEE Standards"],
    icon: <Zap className="w-8 h-8" />
  }, {
    id: 3,
    name: "Single / Multicore Twisted, Shielded & Sheathed Cables",
    subtitle: "Advanced Signal Transmission Solutions",
    image: "/lovable-uploads/42451d99-5f2b-4b15-8edc-019ddcf11a8a.png",
    category: "Multicore Cables",
    overview: "A comprehensive solution for signal and power applications, these cables come with customizable core counts, insulation layers, and shield types. Designed for applications requiring superior signal integrity and electromagnetic interference protection.",
    detailedDescription: "Engineered with precision-twisted pairs to minimize crosstalk and maintain consistent impedance. The shielding system can be customized with aluminum foil, copper braid, or combination shields. Each core is individually insulated with high-quality PTFE, and the overall assembly is protected by a robust outer jacket.",
    keyFeatures: ["Core Count: 2 to 48 cores (0.25 to 1.5 mm²)", "Shield Coverage: Up to 97%", "Temperature Range: -65°C to +200°C", "Low crosstalk and impedance mismatch", "Flexible and durable construction", "Custom color coding available", "Excellent mechanical properties", "Fire-resistant options available"],
    applications: ["CNC control boxes and PLC IO systems", "Robotic arm cable harnesses", "Automation control systems", "Industrial robotics applications", "Data acquisition systems", "Process control equipment", "Motor control applications", "Sensor and actuator connections"],
    specifications: {
      conductor: "Stranded copper (Class 5 or 6)",
      insulation: "PTFE (individual cores)",
      shielding: "Aluminum foil, copper braid, or both",
      jacket: "PTFE, PFA, or modified PTFE",
      impedance: "50Ω, 75Ω, 100Ω, or custom",
      capacitance: "Low capacitance design available"
    },
    standards: ["CE Marking", "RoHS and REACH Compliant", "Custom UL File", "IEC Standards"],
    icon: <Settings className="w-8 h-8" />
  }, {
    id: 4,
    name: "PTFE RF Coaxial Cables",
    subtitle: "Precision RF Communication Solutions (RG Types)",
    image: "/lovable-uploads/a765da98-9d8a-4d2d-af71-2eca83e5412b.png",
    category: "RF Coaxial",
    overview: "Built to meet demanding RF applications, these coaxial cables deliver superior signal propagation with low attenuation and consistent impedance.",
    keyFeatures: ["Impedance: 50Ω, 75Ω, 93Ω options", "Frequency Range: DC to 18 GHz", "Shield Coverage: 85–100%", "Temperature Rating: –55°C to +200°C"],
    applications: ["Antenna feeders and spectrum analyzer probes", "Medical imaging electronics", "Satellite and defense communications", "RF test and measurement systems"],
    standards: ["MIL-C-17 (RG types)", "RoHS and ITAR-compliant"],
    icon: <Cpu className="w-8 h-8" />
  }, 
  // {
  //   id: 5,
  //   name: "PTFE Thermocouple Compensating Cables",
  //   subtitle: "Precision Temperature Measurement Solutions",
  //   image: "/lovable-uploads/9b0ead4d-effa-43e8-9059-02cc56c811bb.png",
  //   category: "Thermocouple",
  //   overview: "Thermocouple extension cables made with PTFE insulation to preserve signal accuracy across long distances and extreme environments.",
  //   keyFeatures: ["Types: KX, JX, TX, EX, NCX, SCX, etc.", "Accuracy: ±1°C deviation across 100 m", "Max Temperature: Up to 1650°C", "Color Coding: ANSI/MIL/IEC standards"],
  //   applications: ["Glass industry kilns and cryogenic labs", "Reactor temperature monitors", "Industrial temperature sensors", "Furnaces and high-temperature processes"],
  //   standards: ["ASTM E230/E230M", "DIN 43713", "IS 8784"],
  //   icon: <Thermometer className="w-8 h-8" />
  // }, 
  {
    id: 6,
    name: "PTFE Insulated Sleeves",
    subtitle: "Superior Electrical Protection Solutions",
    image: "/lovable-uploads/a765da98-9d8a-4d2d-af71-2eca83e5412b.png",
    category: "Insulation",
    overview: "Highly robust, thin-wall sleeving designed for protecting conductors and splices in aerospace, locomotive, and energy equipment.",
    keyFeatures: ["Dielectric Strength: Up to 20 KV/mm", "Inside Diameter: 0.3 mm to 25 mm", "Wall Thickness: 0.1 mm to 0.5 mm", "Temperature Range: –65°C to +260°C"],
    applications: ["Generator leads and busbar insulation", "Automotive fuse protection", "Wire harnesses and transformer windings", "Aerospace cable harnesses"],
    standards: ["IS 9537 (Part 5)", "MIL-I-22129C", "UL 224 VW-1"],
    icon: <Shield className="w-8 h-8" />
  }, {
    id: 7,
    name: "Cured PTFE Tapes & Sheets",
    subtitle: "Versatile Industrial Solutions",
    image: "/lovable-uploads/a765da98-9d8a-4d2d-af71-2eca83e5412b.png",
    category: "Tapes & Sheets",
    overview: "These industrial-grade PTFE films are calendared, sintered, and surface-treated for use in high-temperature, chemical, and electrical insulation roles.",
    keyFeatures: ["Thickness Range: 0.1 mm to 6 mm", "Widths Available: 10 mm to 1200 mm", "Tensile Strength: ≥ 20 MPa", "Temperature Range: -200°C to +300°C"],
    applications: ["Flange gaskets and motor insulation wraps", "Wrapping for heaters and terminals", "Electrical insulation and chemical sealing", "Reusable insulation applications"],
    standards: ["ASTM D3308, D3294", "ISO 12086", "FDA-grade available"],
    icon: <Target className="w-8 h-8" />
  }];

  console.log("Products array length:", products.length);

  if (!products || products.length === 0) {
    console.log("No products found!");
    return (
      <div className="w-full py-8 text-center">
        <p className="text-gray-500 font-inter">No products available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-12">
      {products.map((product, index) => {
        console.log(`Rendering product ${index + 1}:`, product.name);
        return (
          <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-blue-200 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              {/* Product Header */}
              <CardHeader className="p-8 pb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors">
                        {product.icon}
                      </div>
                      <Badge className="bg-blue-600 text-white font-medium text-base px-4 py-2">
                        {product.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-3 leading-tight font-poppins group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </CardTitle>
                    <p className="text-lg font-semibold text-blue-600 font-inter mb-4">
                      {product.subtitle}
                    </p>
                  </div>
                </div>

                {/* Large Square Product Image */}
                <div className="mb-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex items-center justify-center">
                  <div className="w-80 h-80 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300 rounded-xl shadow-lg"
                      onError={(e) => {
                        console.log("Image failed to load:", product.image);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </CardHeader>

              {/* Detailed Content with Tabs */}
              <div className="px-8 pb-8">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-100 p-1 rounded-xl">
                    <TabsTrigger value="overview" className="text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white">Overview</TabsTrigger>
                    <TabsTrigger value="features" className="text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white">Features</TabsTrigger>
                    <TabsTrigger value="applications" className="text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white">Applications</TabsTrigger>
                    <TabsTrigger value="specifications" className="text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white">Specifications</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 font-poppins flex items-center gap-2">
                        <Info className="w-5 h-5 text-blue-600" />
                        Product Overview
                      </h4>
                      <p className="text-gray-700 leading-relaxed font-inter text-base mb-4">
                        {product.overview}
                      </p>
                      <p className="text-gray-600 leading-relaxed font-inter">
                        {product.detailedDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <Award className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                        <div className="text-lg font-bold text-gray-900">Premium Quality</div>
                        <div className="text-sm text-gray-600">ISO 9001:2015 Certified</div>
                      </div>
                      <div className="text-center">
                        <Shield className="w-8 h-8 mx-auto mb-3 text-blue-600 " />
                        <div className="text-lg font-bold text-gray-900">Reliable Performance</div>
                        <div className="text-sm text-gray-600">Tested & Proven</div>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="w-8 h-8 mx-auto mb-3 text-blue-600 " />
                        <div className="text-lg font-bold text-gray-900">Industry Leading</div>
                        <div className="text-sm text-gray-600">Advanced Technology</div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 font-poppins">
                      Key Features & Benefits
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-inter font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="applications" className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 font-poppins">
                      Applications & Use Cases
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.applications.map((application, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700 font-inter font-medium">{application}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="specifications" className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 font-poppins">
                      Technical Specifications
                    </h4>
                    {product.specifications && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm font-semibold text-gray-900 capitalize mb-2">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="text-sm text-gray-700 font-inter">{value}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-6 border-t border-gray-200">
                      <h5 className="text-lg font-semibold text-gray-900 mb-4 font-poppins">
                        Standards & Certifications
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {product.standards.map((standard, idx) => (
                          <Badge key={idx} variant="outline" className="bg-green-50 text-green-700 border-green-200 px-3 py-2 text-sm font-medium">
                            {standard}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold rounded-xl transition-all duration-200 flex-1 text-base">
                    Request Quote <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 font-semibold rounded-xl flex-1 text-base">
                    <Download className="w-5 h-5 mr-2" />
                    Download Datasheet
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductList;
