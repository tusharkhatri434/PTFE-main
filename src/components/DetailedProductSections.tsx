import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Download, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
const DetailedProductSections = () => {
 
  const navigate  = useNavigate();

  function handleClick(){
    navigate("/contact");
  }
  
  const products = [{
    id: "ptfe-hookup-wires",
    title: "PTFE (Teflon) Insulated Equipment Hookup Wires & Cables",
    image: "/lovable-uploads/newProducts/PTFE_Insulated_Equipment_Hookup_Wires&Cables.png",
    overview: "These PTFE-insulated hookup wires are specially designed for internal equipment wiring in high-performance electronic systems. Withstanding extreme temperatures and harsh environments, they ensure stable operation in aerospace, military, and industrial control systems. Their consistent dielectric properties across a wide frequency range make them ideal for sensitive applications.",
    features: ["Withstands temperatures from -65°C to +260°C", "Uniform insulation thickness", "Excellent resistance to flame, chemicals, and abrasion", "High frequency and low noise transmission", "Available in a wide range of gauge sizes and color codes"],
    applications: ["Aerospace and military avionics", "High-end audio equipment", "Nuclear power instrumentation", "Medical imaging machines", "Laboratory-grade analytical instruments"],
    specifications: [{
      property: "Conductor Material",
      value: "High-purity Annealed Copper"
    }, {
      property: "Insulation Material",
      value: "Virgin PTFE"
    }, {
      property: "Voltage Rating",
      value: "600 V AC"
    }, {
      property: "Temperature Range",
      value: "-65°C to +260°C"
    }, {
      property: "Flame Retardancy",
      value: "UL VW-1, IEC 60332-1"
    }, {
      property: "Conductor Sizes Available",
      value: "30 AWG to 10 AWG"
    }, {
      property: "Insulation Thickness",
      value: "0.2 mm to 1.0 mm"
    }, {
      property: "Tensile Strength",
      value: ">1500 psi"
    }, {
      property: "Dielectric Strength",
      value: ">500 V/mil"
    }]
  }, {
    id: "ptfe-high-voltage-corona-cables",
    title: "PTFE High Voltage Corona Resistant Cables",
    image: "/lovable-uploads/newProducts/PTFE_High_Voltage_Corona_Resistant_Cables.png",
    overview: "PTFE High Voltage Corona Resistant Cables are optimized for continuous operation under high electric stress. Their advanced construction resists partial discharges and corona inception that typically degrade cable life. These are perfect for use in pulse applications and environments requiring exceptional dielectric endurance.",
    features: ["Multi-layered PTFE insulation with nano-enhanced compounds", "Voids and crack-free extruded walls", "Corona-resistant life >10,000 hrs at rated voltage", "Capable of high pulse repetition rate (PRR)", "Low partial discharge (<5 pC at 20 kV)"],
    applications: ["MRI and diagnostic equipment", "Pulse-forming networks in radar", "Ionizers and ozone generators", "Plasma research instruments", "High-energy lab circuits"],
    specifications: [{
      property: "Voltage Range",
      value: "Up to 50 KV AC"
    }, {
      property: "Insulation",
      value: "Corona-resistant PTFE with nano-fillers"
    }, {
      property: "Conductor Type",
      value: "Silver/Tinned Copper"
    }, {
      property: "Temperature Resistance",
      value: "Up to +260°C"
    }, {
      property: "Corona Inception Voltage",
      value: ">10 kV/mm"
    }, {
      property: "Dielectric Strength",
      value: ">600 V/mil"
    }, {
      property: "Outer Jacket",
      value: "Optional: ETFE, PFA"
    }, {
      property: "Bending Radius",
      value: "10x outer diameter"
    }]
  }, {
    id: "ptfe-multicore-twisted-cables",
    title: "Single / Multicore Twisted, Shielded & Sheathed Cables",
    image: "/lovable-uploads/newProducts/Single_Multicore_Twisted_ShieldedSheathedCables.png",
    overview: "These cables are engineered for applications requiring noise immunity and minimal signal loss. Their twisted pair arrangement and shielding combinations reduce EMI and crosstalk, making them suitable for industrial networking, defense communication, and control systems. They are often used in low-voltage analog and digital signal transmission.",
    features: ["Custom-configurable core layouts", "Multiple shielding: braid, foil, combination", "High resistance to fire, oil, UV, solvents", "Excellent flexibility for dynamic movement", "Long operational life in hostile environments"],
    applications: ["RS-232, RS-485, CAN-Bus communications", "Factory automation and robotics", "Missile system interconnects", "Shipboard wiring systems", "Data acquisition systems"],
    specifications: [{
      property: "No. of Conductors",
      value: "2–48"
    }, {
      property: "Insulation",
      value: "PTFE"
    }, {
      property: "Shield Type",
      value: "Aluminum Foil / Copper Braid / Hybrid"
    }, {
      property: "Overall Jacket",
      value: "PTFE / ETFE / FEP"
    }, {
      property: "Voltage Rating",
      value: "300–600 V AC"
    }, {
      property: "Impedance Options",
      value: "50Ω, 75Ω, 100Ω"
    }, {
      property: "Operating Temp Range",
      value: "-60°C to +200°C"
    }, {
      property: "Capacitance",
      value: "≤50 pF/m"
    }]
  }, {
    id: "ptfe-rf-coaxial-cables",
    title: "PTFE RF Coaxial Cables",
    image: "/lovable-uploads/newProducts/PTFE_RF_Coaxial_Cables.png",
    overview: "These coaxial cables are designed to maintain low signal attenuation over long distances. They offer high shielding effectiveness and are highly stable across wide frequency bands, ideal for critical communication systems and RF testing environments.",
    features: ["High impedance consistency", "Very low dielectric constant", "Expanded PTFE dielectric for stable propagation", "Resistance to RF radiation leakage"],
    applications: ["Satellite uplink and telemetry", "Military-grade radar systems", "RF test and measurement systems", "EMI-sensitive communication setups"],
    specifications: [{
      property: "Impedance",
      value: "50Ω / 75Ω"
    }, {
      property: "Dielectric",
      value: "PTFE (solid or expanded)"
    }, {
      property: "Conductor",
      value: "Silver-plated Copper"
    }, {
      property: "Shielding",
      value: "Double Braid or Foil + Braid"
    }, {
      property: "Frequency Range",
      value: "DC to 18 GHz"
    }, {
      property: "Attenuation",
      value: "≤0.5 dB/m at 1 GHz"
    }, {
      property: "Jacket Material",
      value: "FEP/PTFE"
    }]
  },
  //  {
  //   id: "ptfe-thermocouple-cables",
  //   title: "PTFE Thermocouple Compensating Cables",
  //   image: "/lovable-uploads/products/PTFE_Thermocouple_Compensating_Cables.png",
  //   overview: "Designed for extending thermocouple signals with minimal signal distortion and high chemical resistance, these cables ensure accuracy and durability even in corrosive industrial environments.",
  //   features: ["ANSI and IEC color-coded insulation", "Excellent resistance to acids and solvents", "Twisted pair construction for noise immunity", "Stable EMF over temperature variations"],
  //   applications: ["Cement kilns and furnaces", "Petrochemical and metallurgical labs", "Steam turbine monitoring", "Cryogenic testing chambers"],
  //   specifications: [{
  //     property: "Compatible Types",
  //     value: "K, J, T, E, N, R, S, B"
  //   }, {
  //     property: "Conductor",
  //     value: "Thermocouple Alloy (Matched)"
  //   }, {
  //     property: "Jacket",
  //     value: "PTFE / FEP / PFA"
  //   }, {
  //     property: "Temp Range",
  //     value: "-70°C to +250°C"
  //   }, {
  //     property: "Max Pair Count",
  //     value: "Up to 24 Pairs"
  //   }, {
  //     property: "Color Code Standard",
  //     value: "ANSI/IEC"
  //   }]
  // },
   {
    id: "ptfe-insulated-sleeves",
    title: "PTFE Insulated Sleeves",
    image: "/lovable-uploads/newProducts/PTFE_Insulated_Sleeves.png",
    overview: "These are thin-wall, flexible sleeves manufactured with high-grade PTFE to insulate splices and components from abrasion and electrical discharge. Their heat and chemical resistance makes them indispensable in aerospace and nuclear plants.",
    features: ["Continuous operation at 260°C", "Smooth inner and outer surfaces", "Non-flammable and halogen-free", "Available in rolls and cut lengths"],
    applications: ["Terminal lead insulation", "Harness bundling", "Motor and transformer lead protection", "Circuit board terminal shielding"],
    specifications: [{
      property: "Wall Thickness",
      value: "0.1 mm – 0.5 mm"
    }, {
      property: "Size Range",
      value: "0.5 mm to 25 mm ID"
    }, {
      property: "Tensile Strength",
      value: ">25 MPa"
    }, {
      property: "Dielectric Strength",
      value: "500–700 V/mil"
    }, {
      property: "Operating Temperature",
      value: "-65°C to +260°C"
    }, {
      property: "Elongation",
      value: ">200%"
    }]
  }, 
  // {
  //   id: "cured-ptfe-tapes-sheets",
  //   title: "Cured PTFE Tapes & Sheets",
  //   image: "/lovable-uploads/a765da98-9d8a-4d2d-af71-2eca83e5412b.png",
  //   overview: "These cured films are specially processed to offer reliable sealing, wrapping, and barrier protection in a broad spectrum of industries. Their thermal, mechanical, and anti-stick properties make them irreplaceable in harsh applications.",
  //   features: ["Available in skived and molded formats", "Resistant to almost all industrial chemicals", "Non-stick surface for anti-adhesion purposes", "Sintered at high temperature for enhanced integrity"],
  //   applications: ["Expansion joint wrapping", "High-temperature gasketing", "Lining in chemical tanks", "Laminate barrier systems"],
  //   specifications: [{
  //     property: "Thickness",
  //     value: "0.05 mm – 5 mm"
  //   }, {
  //     property: "Width Range",
  //     value: "Up to 1200 mm"
  //   }, {
  //     property: "Tensile Strength",
  //     value: ">20 MPa"
  //   }, {
  //     property: "Elongation",
  //     value: ">250%"
  //   }, {
  //     property: "Surface Options",
  //     value: "Smooth / Etched / Textured"
  //   }, {
  //     property: "Operating Temp",
  //     value: "-180°C to +260°C"
  //   }]
  // }
];
  return <div className="space-y-16">
      {products.map((product, index) => <div id={product.id.toString()} key={product.id} className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
          {/* Product Header Section - Two Column Layout */}
          <div className="p-8">
            
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 items-center">
  {/* Left Column - Image */}
<div className="flex justify-center">
  <div className="h-full sm:h-96 rounded-3xl overflow-hidden flex items-center justify-center bg-white">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-full object-contain"
    />
  </div>
</div>





  {/* Right Column - Product Overview */}
  <div className="flex flex-col justify-center text-center lg:text-left">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight font-poppins">
      {product.title}
    </h2>
    <p className="text-base leading-relaxed font-inter text-black">
      {product.overview}
    </p>
  </div>
</div>

          </div>

          {/* Features Card */}
          <div className="px-8 pb-8">
            <Card className="bg-white shadow-md rounded-2xl mb-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 font-poppins">Features</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => <div key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700 font-inter font-medium">{feature}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            {/* Applications Card */}
            <Card className="bg-white shadow-md rounded-2xl mb-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 font-poppins">Applications</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.applications.map((application, idx) => <div key={idx} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base text-gray-700 font-inter font-medium">{application}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            {/* Specifications Card */}
            <Card className="bg-gray-50 shadow-md rounded-2xl mb-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 font-poppins">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="overflow-x-auto">
                  <Table className="w-full">
                    <TableHeader>
                      <TableRow className="bg-white">
                        <TableHead className="font-semibold text-gray-900 font-poppins">Property</TableHead>
                        <TableHead className="font-semibold text-gray-900 font-poppins">Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {product.specifications.map((spec, idx) => <TableRow key={idx} className="hover:bg-white">
                          <TableCell className="font-medium text-base text-gray-800 font-inter">{spec.property}</TableCell>
                          <TableCell className="text-gray-700 text-base font-inter">{spec.value}</TableCell>
                        </TableRow>)}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button onClick={handleClick} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold rounded-xl transition-all duration-200 flex-1 text-base shadow-md hover:shadow-lg text-white">
                Request Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              {/* <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 font-semibold rounded-xl flex-1 text-base shadow-md hover:shadow-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Datasheet
              </Button> */}
            </div>
          </div>
        </div>)}
    </div>;
};
export default DetailedProductSections;