import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Settings, Users, TrendingUp, Shield, Award } from "lucide-react";
import HeroSectionAbout from "@/components/HeroSectionAbout";
import { useEffect } from "react";
const Infrastructure = () => {
  
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
      const elements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-zoom');
      elements.forEach(el => observer.observe(el));
      return () => observer.disconnect();
    }, []);
  

  const facilities = [{
    title: "Manufacturing Unit",
    description: "State-of-the-art production facility with modern machinery and automated processes for consistent quality output.",
    size: "5,000 sq. ft.",
    features: ["Automated Production Lines", "Climate Controlled Environment", "ISO Standard Compliance"],
    icon: <Factory className="w-8 h-8 text-blue-600" />
  }, {
    title: "Research & Development Lab",
    description: "Dedicated R&D facility for product innovation, testing, and development of advanced PTFE solutions.",
    size: "800 sq. ft.",
    features: ["Advanced Testing Equipment", "Material Analysis Lab", "Product Development Center"],
    icon: <Settings className="w-8 h-8 text-blue-600" />
  }, {
    title: "Quality Testing Laboratory",
    description: "Comprehensive testing facility equipped with latest instruments for quality assurance and control.",
    size: "600 sq. ft.",
    features: ["High Voltage Testing", "Mechanical Testing", "Chemical Analysis"],
    icon: <Shield className="w-8 h-8 text-blue-600" />
  }, {
    title: "Warehouse & Storage",
    description: "Modern warehousing facility with proper storage conditions for raw materials and finished products.",
    size: "600 sq. ft.",
    features: ["Climate Controlled Storage", "Inventory Management", "Quick Dispatch System"],
    icon: <Award className="w-8 h-8 text-blue-600" />
  }];
  const capabilities = [{
    category: "Production Capacity",
    details: ["High-volume manufacturing capability", "Multiple product lines simultaneously", "Flexible production scheduling", "Quick turnaround times"]
  }, {
    category: "Technology & Equipment",
    details: ["Advanced extrusion machinery", "Precision testing instruments", "Automated quality control systems", "Computer-aided design tools"]
  }, {
    category: "Quality Infrastructure",
    details: ["In-house testing laboratories", "Quality control checkpoints", "Calibrated measuring equipment", "Documentation systems"]
  }, {
    category: "Environmental Standards",
    details: ["Eco-friendly manufacturing processes", "Waste management systems", "Energy-efficient operations", "Safety compliance protocols"]
  }];
  const stats = [{
    label: "Total Facility Area",
    value: "7,000",
    unit: "sq. ft."
  }, {
    label: "Production Lines",
    value: "4",
    unit: "active"
  }, {
    label: "Daily Capacity",
    value: "500+",
    unit: "units"
  }, {
    label: "Team Members",
    value: "50+",
    unit: "skilled"
  }];
  const equipment = [{
    name: "PTFE Extrusion Lines",
    count: "3 Units",
    purpose: "Wire & Cable Production"
  }, {
    name: "High Voltage Test Equipment",
    count: "2 Sets",
    purpose: "Electrical Testing"
  }, {
    name: "Mechanical Testing Machines",
    count: "4 Units",
    purpose: "Strength & Flexibility Testing"
  }, {
    name: "Chemical Analysis Equipment",
    count: "Multiple",
    purpose: "Material Composition Analysis"
  }, {
    name: "Environmental Test Chambers",
    count: "2 Units",
    purpose: "Temperature & Humidity Testing"
  }, {
    name: "Precision Measuring Tools",
    count: "Various",
    purpose: "Dimensional Accuracy"
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      {/* <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
            Our Infrastructure
          </h1>
          <p className="text-xl max-w-4xl mx-auto opacity-90 mb-8 md:text-xl font-semibold">
            State-of-the-Art 7,000 Sq. Ft. Facility Equipped with Advanced Technology
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-80 text-white font-medium">
            Our modern infrastructure combines advanced manufacturing capabilities with comprehensive 
            quality control systems to deliver superior PTFE products consistently.
          </p>
        </div>
      </section> */}
      <HeroSectionAbout title="Our Infrastructure" subtitle="State-of-the-Art 7,000 Sq. Ft. Facility Equipped with Advanced Technology" description="Our modern infrastructure combines advanced manufacturing capabilities with comprehensive quality control systems to deliver superior PTFE products consistently." backgroundImage="/lovable-uploads/img/pugu-road-dar-es-salaam.jpg" />

      {/* Infrastructure Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-gradient">
              Infrastructure at a Glance
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-black">
              Key metrics that demonstrate our manufacturing capabilities and scale
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <Card key={index} className="hover-lift border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-silver-500 mb-2">
                    {stat.unit}
                  </div>
                  <div className="text-black font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Facility Details */}
      <section className="py-20 bg-silver-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-silver-900">
              Our Facilities
            </h2>
            <p className="text-black max-w-3xl mx-auto text-lg">
              Specialized areas designed for optimal manufacturing, testing, and quality control
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      {facility.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold font-montserrat text-silver-900">
                          {facility.title}
                        </h3>
                        <Badge className="bg-blue-100 text-blue-800">
                          {facility.size}
                        </Badge>
                      </div>
                      <p className="mb-4 font-open-sans text-black">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-silver-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {facility.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="font-open-sans text-sm text-black">{feature}</span>
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-gradient">
              Manufacturing Capabilities
            </h2>
            <p className="max-w-3xl mx-auto text-black text-lg font-bold">
              Comprehensive capabilities covering all aspects of PTFE product manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold font-montserrat mb-6 text-silver-900">
                    {capability.category}
                  </h3>
                  <ul className="space-y-3">
                    {capability.details.map((detail, idx) => <li key={idx} className="flex items-start space-x-3">
                        <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="font-open-sans text-black">{detail}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Equipment & Machinery */}
      <section className="py-20 bg-silver-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-montserrat mb-6 text-silver-900">
                Advanced Equipment & Machinery
              </h2>
              <p className="text-lg mb-8 font-open-sans leading-relaxed text-black">
                Our facility is equipped with state-of-the-art machinery and testing equipment 
                to ensure precise manufacturing and comprehensive quality control. Regular 
                maintenance and calibration ensure optimal performance and accuracy.
              </p>
              
              <div className="space-y-4">
                {equipment.map((item, index) => <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div>
                          <h4 className="font-semibold text-silver-900 text-sm">
                            {item.name}
                          </h4>
                        </div>
                        <div className="text-center">
                          <Badge variant="outline" className="text-xs">
                            {item.count}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-xs text-black">
                            {item.purpose}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
            
            <div>
              <img alt="Manufacturing Facility" className="rounded-lg shadow-2xl mx-auto h-[30rem] md:h-[40rem]" src="/lovable-uploads/newProducts/In_house_precision_manufacturing_meerut_image.png" />
              {/* <img alt="Quality Testing Lab" className="rounded-lg shadow-2xl" src="/lovable-uploads/8509ae45-aebc-47fe-8d2c-0ff3df1e8cf4.jpg" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental & Safety */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-6 text-gradient">
              Environmental & Safety Standards
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-black">
              Committed to sustainable and safe manufacturing practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold font-montserrat mb-4 text-silver-900">
                  Safety Compliance
                </h3>
                <ul className="text-silver-600 space-y-2 text-sm">
                  <li className="text-black ">Fire safety systems</li>
                  <li className="text-black ">Emergency protocols</li>
                  <li className="text-black ">Worker safety training</li>
                  <li className="text-black ">Safety equipment provision</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Factory className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold font-montserrat mb-4 text-silver-900">
                  Environmental Care
                </h3>
                <ul className="text-silver-600 space-y-2 text-sm">
                  <li className="text-black ">Waste reduction programs</li>
                  <li className="text-black ">Energy-efficient operations</li>
                  <li className="text-black ">Eco-friendly processes</li>
                  <li className="text-black ">Sustainable practices</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold font-montserrat mb-4 text-silver-900">
                  Quality Systems
                </h3>
                <ul className="text-silver-600 space-y-2 text-sm">
                  <li className="text-black ">ISO 9001:2008 compliance</li>
                  <li className="text-black ">Continuous improvement</li>
                  <li className="text-black ">Regular audits</li>
                  <li className="text-black ">Documentation control</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Expansion */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              Future Expansion Plans
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We are continuously investing in infrastructure upgrades and expansion to meet 
              growing demand and serve our clients better. Our future plans include facility 
              expansion, technology upgrades, and capacity enhancement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2025</div>
                <div className="opacity-80">Facility Expansion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50%</div>
                <div className="opacity-80">Capacity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">New</div>
                <div className="opacity-80">Product Lines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Infrastructure;