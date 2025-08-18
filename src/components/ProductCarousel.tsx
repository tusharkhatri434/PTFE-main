
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Eye, EyeOff, Zap, Shield, Settings, Award, Target, Thermometer, Cable, Cpu } from "lucide-react";

const ProductCarousel = () => {
  const [expandedProducts, setExpandedProducts] = useState<Set<number>>(new Set());

  const toggleProductDetails = (productIndex: number) => {
    const newExpanded = new Set(expandedProducts);
    if (newExpanded.has(productIndex)) {
      newExpanded.delete(productIndex);
    } else {
      newExpanded.add(productIndex);
    }
    setExpandedProducts(newExpanded);
  };

  const products = [
    {
      id: 1,
      name: "PTFE (Teflon) Insulated Equipment Hookup Wires & Cables",
      subtitle: "Premium Single Core Insulated Hookup Wires & Cables",
      image: "/lovable-uploads/8f510aa1-1e45-4627-8182-0972cf4ef238.png",
      category: "Hookup Wires",
      description: "Meerut PTFE Products Pvt. Ltd. is a leading manufacturer and supplier of PTFE Single Core Insulated Hookup Wires & Cables. These wires are designed for extreme conditions and are renowned for their high durability, flexibility, and resistance to chemicals, fungus, and high temperatures. Manufactured using premium-grade copper and PTFE insulation, these wires offer excellent mechanical strength and environmental resistance.",
      extendedDescription: "Available in single and multi-strand configurations, as well as bi-colour and tri-colour options, these cables are ideal for electrical equipment, control panels, and aerospace applications. Our manufacturing process ensures consistent quality and performance standards that meet international specifications.",
      keyFeatures: [
        "Suitable for very wide frequency ranges (DC to above 10000 MHz)",
        "Fire and flame-proof construction",
        "Chemically inert even at elevated temperatures",
        "Lightweight, flexible, and space-saving design",
        "Excellent outdoor performance with no degradation"
      ],
      advantages: [
        "Highly resistant to UV rays and weathering",
        "Resistance to fungus and mould growth",
        "Superior mechanical strength and durability",
        "Non-toxic and bio-compatible materials",
        "Available in various colours and custom sizes"
      ],
      specifications: [
        { property: "32/7/40", strands: "7/0.08", diameter: "0.24", section: "0.034", resistance: "570.9" },
        { property: "30/1", strands: "1/0.25", diameter: "0.25", section: "0.0507", resistance: "356.4" },
        { property: "30/7/38", strands: "7/0.10", diameter: "0.30", section: "0.0568", resistance: "332.3" },
        { property: "28/1", strands: "1/0.32", diameter: "0.32", section: "0.0806", resistance: "224.4" }
      ],
      specHeaders: ["Size (AWG)", "Strands/Diameter (mm)", "Conductor Diameter (mm)", "Cross Section (mm²)", "Resistance (Ohm/km)"],
      applications: [
        "Electrical equipment connections",
        "Control panels and instrumentation",
        "Aerospace and aviation systems",
        "High-performance electrical equipment",
        "Industrial automation systems"
      ],
      technicalData: [
        { property: "Temperature Range", value: "-65°C to +200°C" },
        { property: "Voltage Rating", value: "Up to 1000V" },
        { property: "Conductor Material", value: "Premium Copper" },
        { property: "Insulation Material", value: "PTFE Teflon" },
        { property: "Flame Rating", value: "VW-1, FT1, FT2" }
      ],
      icon: <Cable className="w-6 h-6" />
    },
    {
      id: 2,
      name: "PTFE (Teflon) Insulated High Voltage Corona Resistant Cables",
      subtitle: "Advanced High Voltage Solutions up to 50 KV",
      image: "/lovable-uploads/4628cf7a-7715-4d06-bb3c-086118cb0ade.png",
      category: "High Voltage",
      description: "We specialize in manufacturing PTFE High Voltage Corona Resistant Cables designed to withstand up to 22 KV AC RMS and 50 KV DC working voltages. These cables offer enhanced life expectancy in high-voltage applications by utilizing silicon-based additives that fill PTFE insulation cavities, effectively increasing corona resistance and thermal stability.",
      extendedDescription: "Perfect for aerospace, defense, and high-voltage industrial equipment. Our proprietary corona-resistant technology ensures reliable performance in the most demanding high-voltage environments, making these cables the preferred choice for mission-critical applications.",
      keyFeatures: [
        "Exceptional resistance to corona discharge",
        "Long operational life in high-voltage environments",
        "Excellent thermal stability up to 180°C",
        "PTFE insulation with enhanced corona additive",
        "Superior dielectric strength"
      ],
      advantages: [
        "Silicon-based additives for cavity filling",
        "Enhanced life expectancy in harsh conditions",
        "Perfect for aerospace applications",
        "Ideal for defense equipment",
        "Reduced maintenance requirements"
      ],
      specifications: [
        { property: "Material", value: "PTFE with Corona Additives" },
        { property: "Temperature Range", value: "-30°C to +180°C" },
        { property: "Working Voltage AC", value: "Up to 22 KV RMS" },
        { property: "Working Voltage DC", value: "Up to 50 KV" },
        { property: "Corona Resistance", value: "Enhanced" }
      ],
      specHeaders: ["Property", "Value"],
      applications: [
        "High-voltage power transmission",
        "Aerospace electrical systems",
        "Defense and military equipment",
        "Industrial high-voltage machinery",
        "Research and testing equipment"
      ],
      technicalData: [
        { property: "Dielectric Strength", value: "> 1000 V/mil" },
        { property: "Insulation Resistance", value: "> 10^14 Ohm-cm" },
        { property: "Corona Inception Voltage", value: "Enhanced by 40%" },
        { property: "Partial Discharge", value: "< 5 pC at test voltage" }
      ],
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Single / Multicore Twisted, Shielded & Sheathed Cables",
      subtitle: "Advanced Signal Transmission Solutions",
      image: "/lovable-uploads/11025bc4-db90-4cea-bf02-bfe377bd9c27.png",
      category: "Multicore Cables",
      description: "Our PTFE Multicore Twisted, Shielded & Sheathed Cables are designed for demanding applications requiring robust insulation, fire resistance, and long-term performance. We offer both single and planetary twisted pairs, with or without shielding, and optional PTFE or PVC sheathing.",
      extendedDescription: "Fully customizable to client requirements, these cables feature advanced twisted pair technology for superior signal integrity and EMI protection. Available with various shielding options including SPC and ATC braiding for maximum protection against electromagnetic interference.",
      keyFeatures: [
        "Fire and moisture resistant construction",
        "Available with SPC / ATC shielding options",
        "Excellent mechanical strength and flexibility",
        "Customizable core & jacket colors",
        "Superior signal integrity"
      ],
      advantages: [
        "Single and planetary twisted pairs available",
        "Optional PTFE or PVC sheathing",
        "Fully customizable to specifications",
        "Superior insulation properties",
        "Excellent EMI protection"
      ],
      specifications: [
        { property: "Conductor", value: "ABC/SPC/NPC" },
        { property: "Insulation", value: "PTFE Wrap Insulation" },
        { property: "Shield Type", value: "SPC / ATC Braid" },
        { property: "Voltage Grade", value: "250 V / 600 V / 1000 V" },
        { property: "Jacket Material", value: "PTFE or FRLS PVC" },
        { property: "Temperature Range", value: "-65°C to +200°C" },
        { property: "Standards", value: "JSS-51038 & MIL 16878 D" }
      ],
      specHeaders: ["Property", "Value"],
      applications: [
        "Data communication systems",
        "Control and instrumentation",
        "Audio/video signal transmission",
        "Industrial networking",
        "Automation and robotics"
      ],
      technicalData: [
        { property: "Capacitance", value: "30-150 pF/m (typical)" },
        { property: "Impedance", value: "75Ω / 100Ω / 120Ω" },
        { property: "Crosstalk", value: "< -40 dB at 1 MHz" },
        { property: "Shield Coverage", value: "> 95%" }
      ],
      icon: <Settings className="w-6 h-6" />
    },
    {
      id: 4,
      name: "PTFE RF Coaxial Cables",
      subtitle: "Precision RF Communication Solutions",
      image: "/lovable-uploads/9a420e3c-a24c-4f4d-9c56-d0faf7d20cca.png",
      category: "RF Coaxial",
      description: "Meerut PTFE Products Pvt. Ltd. produces PTFE RF Coaxial Cables known for superior mechanical strength, long life, and excellent electrical performance. Widely used in RF, defense, and telecommunication sectors, these cables offer precision signal transmission and high-temperature resistance.",
      extendedDescription: "Featuring silver-plated copper conductors and precision PTFE dielectric, our RF coaxial cables deliver exceptional performance across a wide frequency range. Multi-layer construction ensures consistent impedance and minimal signal loss, making them ideal for critical RF applications.",
      keyFeatures: [
        "PTFE insulation with silver-plated copper conductors",
        "High mechanical and dielectric strength",
        "Multi-layer precision construction",
        "Customizable designs and configurations",
        "Superior signal transmission characteristics"
      ],
      advantages: [
        "Excellent high-frequency performance",
        "Low signal loss and attenuation",
        "High-temperature resistance",
        "Long operational life",
        "Precision impedance control"
      ],
      specifications: [
        { nomenclature: "RG 196 A/U", strands: "7/0.10", insulation: "PTFE", od: "2.00", jacket: "PTFE", impedance: "50", capacitance: "95.00", voltage: "1000" },
        { nomenclature: "RG 195 A/U", strands: "7/0.10", insulation: "PTFE", od: "3.80", jacket: "PTFE", impedance: "95", capacitance: "52.50", voltage: "1500" },
        { nomenclature: "RG 188 A/U", strands: "7/0.17", insulation: "PTFE", od: "2.75", jacket: "PTFE", impedance: "50", capacitance: "95.00", voltage: "1200" },
        { nomenclature: "RG 187 A/U", strands: "7/0.10", insulation: "PTFE", od: "2.75", jacket: "PTFE", impedance: "75", capacitance: "65.60", voltage: "1200" },
        { nomenclature: "RG 115 A/U", strands: "7/0.70", insulation: "PTFE", od: "10.00", jacket: "Fibreglass", impedance: "50", capacitance: "95.00", voltage: "5000" }
      ],
      specHeaders: ["Nomenclature", "Strands/Dia (mm)", "Insulation", "OD (mm)", "Jacket Material", "Impedance (Ohms)", "Capacitance (PF/Mtr)", "Operating Voltage (V RMS)"],
      applications: [
        "RF communication systems",
        "Microwave applications",
        "Defense and military systems",
        "Telecommunication infrastructure",
        "Test and measurement equipment"
      ],
      technicalData: [
        { property: "Frequency Range", value: "DC to 18 GHz" },
        { property: "VSWR", value: "< 1.15:1 (typical)" },
        { property: "Velocity of Propagation", value: "69% (typical)" },
        { property: "Operating Temperature", value: "-65°C to +200°C" }
      ],
      icon: <Cpu className="w-6 h-6" />
    },
    // {
    //   id: 5,
    //   name: "PTFE Thermocouple Compensating Cables",
    //   subtitle: "Precision Temperature Measurement Solutions",
    //   image: "/lovable-uploads/7678728b-ba4e-47bd-831d-68e8b419d1a6.png",
    //   category: "Thermocouple",
    //   description: "Our PTFE Thermocouple Compensating Cables provide high accuracy and reliability in temperature measurement and control systems. These cables are known for their heat resistance, waterproofing, and chemical resistance, making them suitable for harsh environments.",
    //   extendedDescription: "Designed for precision temperature measurement applications, these cables maintain signal integrity across extreme temperature ranges. The PTFE insulation ensures minimal drift and maximum accuracy in critical temperature monitoring systems.",
    //   keyFeatures: [
    //     "Suitable for transmitting thermocouple signals",
    //     "Outstanding mechanical and electrical properties",
    //     "Resistant to harsh chemicals and moisture",
    //     "High accuracy signal transmission",
    //     "Extended temperature range capability"
    //   ],
    //   advantages: [
    //     "High accuracy and reliability",
    //     "Excellent heat resistance and waterproofing",
    //     "Suitable for harsh industrial environments",
    //     "Long-term stability and consistency",
    //     "Multiple thermocouple type compatibility"
    //   ],
    //   specifications: [
    //     { property: "Conductor", value: "NiCr-NiAI / Iron-Con / Cu-Con" },
    //     { property: "Temperature Range", value: "-65°C to +200°C" },
    //     { property: "Measurement Temperature", value: "Up to 1650°C" },
    //     { property: "Voltage Rating", value: "300 / 500 V" },
    //     { property: "Tensile Strength", value: "12.50 N/mm" },
    //     { property: "Standards", value: "DIN 43722 / ANSI MC 96.1 / IS 8784-1987" }
    //   ],
    //   specHeaders: ["Property", "Value"],
    //   applications: [
    //     "Industrial temperature measurement",
    //     "Process control systems",
    //     "HVAC and building automation",
    //     "Laboratory and research",
    //     "Power generation monitoring"
    //   ],
    //   technicalData: [
    //     { property: "Accuracy Class", value: "±0.75°C or ±0.004|t|" },
    //     { property: "Insulation Resistance", value: "> 100 MΩ at 500V DC" },
    //     { property: "Thermocouple Types", value: "J, K, T, E, R, S, B" },
    //     { property: "Response Time", value: "< 0.5 seconds" }
    //   ],
    //   icon: <Thermometer className="w-6 h-6" />
    // },
    {
      id: 6,
      name: "PTFE Insulated Sleeves",
      subtitle: "Superior Electrical Protection Solutions",
      image: "/lovable-uploads/9a420e3c-a24c-4f4d-9c56-d0faf7d20cca.png",
      category: "Insulation",
      description: "Meerut PTFE Products Pvt. Ltd. offers PTFE Insulated Sleeves ideal for electrical insulation and protective sheathing. These sleeves offer high dielectric strength, chemical resistance, and are suitable for both underground and open-air applications.",
      extendedDescription: "Available in a comprehensive range of sizes and colors, these sleeves provide exceptional protection for electrical components and wiring systems. The high-grade PTFE construction ensures long-lasting performance in demanding environments.",
      keyFeatures: [
        "High thermal, chemical, and moisture resistance",
        "Available in multiple sizes and colors",
        "Excellent insulation properties",
        "High dielectric strength",
        "Flexible and easy to install"
      ],
      advantages: [
        "Suitable for underground and open-air applications",
        "Excellent chemical resistance",
        "High breakdown voltage ratings",
        "UV resistant for outdoor use",
        "Wide temperature operating range"
      ],
      specifications: [
        { bore: "0.50", thickness: "0.25", voltage: "11.5" },
        { bore: "0.75", thickness: "0.25", voltage: "11.5" },
        { bore: "1.00", thickness: "0.30", voltage: "14.6" },
        { bore: "1.50", thickness: "0.40", voltage: "16.3" },
        { bore: "2.00", thickness: "0.40", voltage: "16.3" },
        { bore: "3.00", thickness: "0.40", voltage: "16.3" },
        { bore: "5.00", thickness: "0.50", voltage: "17.0" },
        { bore: "10.00", thickness: "0.50", voltage: "17.0" },
        { bore: "14.00", thickness: "0.50", voltage: "17.0" }
      ],
      specHeaders: ["Bore (mm)", "Wall Thickness (mm)", "Break Down Voltage (KV AC)"],
      applications: [
        "Electrical insulation systems",
        "Wire and cable protection",
        "Underground cable installations",
        "High-voltage equipment insulation",
        "Marine and offshore applications"
      ],
      technicalData: [
        { property: "Dielectric Strength", value: "> 500V/mil" },
        { property: "Operating Temperature", value: "-65°C to +260°C" },
        { property: "Flexibility", value: "Excellent at all temperatures" },
        { property: "Chemical Resistance", value: "Inert to most chemicals" }
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 7,
      name: "Cured PTFE Tapes & Sheets",
      subtitle: "Versatile Industrial Solutions",
      image: "/lovable-uploads/4628cf7a-7715-4d06-bb3c-086118cb0ade.png",
      category: "Tapes & Sheets",
      description: "We offer Cured PTFE Tapes and Sheets that provide excellent electrical insulation, heat resistance, and mechanical strength. These non-stick tapes are repositionable without residue and are perfect for high-temperature applications.",
      extendedDescription: "Our cured PTFE tapes and sheets combine the exceptional properties of PTFE with enhanced mechanical characteristics. The curing process creates a more robust material while maintaining all the benefits of PTFE, including chemical inertness and non-stick properties.",
      keyFeatures: [
        "Non-stick and repositionable properties",
        "Excellent heat, chemical, and moisture resistance",
        "Anti-static with low friction coefficient",
        "High mechanical strength",
        "Dimensional stability"
      ],
      advantages: [
        "No residue when repositioned",
        "Excellent electrical insulation properties",
        "High mechanical strength and durability",
        "Perfect for high-temperature applications",
        "Chemical resistance to most solvents"
      ],
      specifications: [
        { property: "Density", value: "0.15 - 2.0 g/cm³" },
        { property: "Width", value: "3 - 100 mm" },
        { property: "Length", value: "5 - 50 mm" },
        { property: "Thickness", value: "0.075 - 0.2 mm" },
        { property: "Temperature Range", value: "Up to 300°C" }
      ],
      specHeaders: ["Property", "Value"],
      applications: [
        "High-temperature sealing applications",
        "Electrical insulation systems",
        "Non-stick surface applications",
        "Chemical processing equipment",
        "Food processing industry"
      ],
      technicalData: [
        { property: "Tensile Strength", value: "15-25 MPa" },
        { property: "Elongation", value: "200-400%" },
        { property: "Dielectric Constant", value: "2.1 at 1 MHz" },
        { property: "Coefficient of Friction", value: "0.05-0.20" }
      ],
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="pb-4">
                    <div className="relative overflow-hidden rounded-xl mb-4 group">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-blue-600 text-white font-semibold">
                          {product.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                        {product.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-blue-900 leading-tight mb-2">
                      {product.name}
                    </CardTitle>
                    <p className="text-sm font-medium text-blue-600 mb-3">
                      {product.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <Button
                      onClick={() => toggleProductDetails(index)}
                      variant="outline"
                      className="w-full mb-4 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                    >
                      {expandedProducts.has(index) ? (
                        <>
                          <EyeOff className="w-4 h-4 mr-2" />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          View Complete Details
                        </>
                      )}
                    </Button>

                    {expandedProducts.has(index) && (
                      <div className="space-y-6 animate-in slide-in-from-top duration-500">
                        {/* Extended Description */}
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="text-md font-semibold text-gray-900 mb-2">Product Overview</h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {product.extendedDescription}
                          </p>
                        </div>

                        {/* Tabbed Content */}
                        <Tabs defaultValue="features" className="w-full">
                          <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="features" className="text-xs">Features</TabsTrigger>
                            <TabsTrigger value="specs" className="text-xs">Specs</TabsTrigger>
                            <TabsTrigger value="apps" className="text-xs">Applications</TabsTrigger>
                            <TabsTrigger value="tech" className="text-xs">Technical</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="features" className="mt-4">
                            <div className="grid grid-cols-1 gap-4">
                              <div>
                                <h5 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                  Key Features
                                </h5>
                                <ul className="space-y-2">
                                  {product.keyFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-start space-x-2">
                                      <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                      <span className="text-xs text-gray-700">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h5 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                                  <Award className="w-4 h-4 text-blue-500 mr-2" />
                                  Advantages
                                </h5>
                                <ul className="space-y-2">
                                  {product.advantages.map((advantage, idx) => (
                                    <li key={idx} className="flex items-start space-x-2">
                                      <CheckCircle className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                                      <span className="text-xs text-gray-700">{advantage}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="specs" className="mt-4">
                            <div>
                              <h5 className="text-sm font-semibold text-gray-900 mb-3">Technical Specifications</h5>
                              <div className="overflow-x-auto bg-white rounded-lg border">
                                <Table className="w-full">
                                  <TableHeader>
                                    <TableRow className="bg-gray-50">
                                      {product.specHeaders.map((header, idx) => (
                                        <TableHead key={idx} className="text-xs font-semibold text-gray-800 p-3">
                                          {header}
                                        </TableHead>
                                      ))}
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    {product.specifications.map((spec, idx) => (
                                      <TableRow key={idx} className="hover:bg-gray-50">
                                        {Object.values(spec).map((value, valueIdx) => (
                                          <TableCell key={valueIdx} className="text-xs text-gray-600 p-3">
                                            {String(value)}
                                          </TableCell>
                                        ))}
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="apps" className="mt-4">
                            <div>
                              <h5 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                                <Target className="w-4 h-4 text-purple-500 mr-2" />
                                Applications & Industries
                              </h5>
                              <div className="grid grid-cols-1 gap-2">
                                {product.applications.map((app, idx) => (
                                  <div key={idx} className="flex items-center space-x-2 p-2 bg-purple-50 rounded-md">
                                    <Target className="w-3 h-3 text-purple-500 flex-shrink-0" />
                                    <span className="text-xs text-gray-700 font-medium">{app}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="tech" className="mt-4">
                            <div>
                              <h5 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                                <Settings className="w-4 h-4 text-orange-500 mr-2" />
                                Technical Data
                              </h5>
                              <div className="space-y-2">
                                {product.technicalData.map((data, idx) => (
                                  <div key={idx} className="flex justify-between items-center p-2 bg-orange-50 rounded-md">
                                    <span className="text-xs font-medium text-gray-800">{data.property}:</span>
                                    <span className="text-xs text-gray-600 font-semibold">{data.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>

                        {/* Call to Action */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-lg text-white text-center">
                          <h5 className="text-sm font-semibold mb-2">Interested in this product?</h5>
                          <p className="text-xs mb-3 opacity-90">Contact our technical team for custom specifications and quotations</p>
                          <div className="flex gap-2 justify-center">
                            <Button size="sm" variant="secondary" className="text-xs">
                              Request Quote
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs bg-white/10 border-white/20 text-white hover:bg-white/20">
                              Technical Support
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
