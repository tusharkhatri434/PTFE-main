
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, CheckCircle, Settings, Users, TrendingUp, Globe, FileCheck, Star } from "lucide-react";
import { useEffect } from "react";
import HeroSectionAbout from "@/components/HeroSectionAbout";

const QualityAssurance = () => {
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

  const certifications = [
    {
      name: "ISO 9001:2008",
      description: "Quality Management System certification ensuring consistent product excellence",
      icon: <Award className="w-10 h-10 text-blue-600" />,
      status: "Certified"
    },
    {
      name: "L.C.S.O.",
      description: "Licensed Controller of Stores Organization approval",
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      status: "Approved"
    },
    {
      name: "C-DOT",
      description: "Centre for Development of Telematics certification",
      icon: <Settings className="w-10 h-10 text-blue-600" />,
      status: "Certified"
    },
    {
      name: "CACT",
      description: "Computer Aided Circuit Testing certification",
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
      status: "Certified"
    }
  ];

  const qualityProcesses = [
    {
      title: "Raw Material Testing",
      description: "Rigorous incoming inspection of all raw materials including copper, PTFE, and additives to ensure they meet our stringent quality standards.",
      icon: <Settings className="w-8 h-8 text-blue-600" />
    },
    {
      title: "In-Process Quality Control",
      description: "Continuous monitoring during manufacturing with multiple quality checkpoints to maintain consistency and prevent defects.",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Final Product Testing",
      description: "Comprehensive testing of finished products including electrical, mechanical, and thermal properties verification.",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Documentation & Traceability",
      description: "Complete documentation and traceability of all products from raw material to finished goods delivery.",
      icon: <Shield className="w-8 h-8 text-blue-600" />
    }
  ];

  const testingFacilities = [
    "High Voltage Testing Laboratory",
    "Mechanical Properties Testing",
    "Thermal Analysis Equipment",
    "Chemical Resistance Testing",
    "Electrical Properties Measurement",
    "Dimensional Accuracy Verification",
    "Environmental Stress Testing",
    "Corona Resistance Testing"
  ];

  const qualityCommitments = [
    {
      title: "Zero Defect Manufacturing",
      description: "Our goal is to achieve zero defects through robust quality control processes and continuous improvement initiatives.",
      percentage: "99.8%"
    },
    {
      title: "On-Time Delivery",
      description: "Commitment to deliver products on schedule while maintaining the highest quality standards.",
      percentage: "98.5%"
    },
    {
      title: "Customer Satisfaction",
      description: "Consistently exceeding customer expectations through quality products and exceptional service.",
      percentage: "99.2%"
    }
  ];

  // Quality Standards data - matching certifications style
  const qualityStandards = [
    {
      name: "ISO 9001:2015",
      description: "Internationally recognized quality management standard ensuring consistent product quality and customer satisfaction.",
      icon: <Award className="w-10 h-10 text-blue-600" />,
      status: "Certified"
    },
    {
      name: "MIL-STD Compliance",
      description: "Products meet stringent military and aerospace specifications for reliability and performance in critical applications.",
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      status: "Qualified"
    },
    {
      name: "RoHS Compliant",
      description: "All products comply with Restriction of Hazardous Substances directive, ensuring environmental responsibility.",
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      status: "Compliant"
    },
    {
      name: "UL Listed",
      description: "Underwriters Laboratories certification ensures products meet rigorous safety standards for electrical applications.",
      icon: <FileCheck className="w-10 h-10 text-blue-600" />,
      status: "Listed"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      {/* <section className="section-spacing hero-gradient text-white">
        <div className="content-container text-center">
          <div className="animate-on-scroll">
            <h1 className="responsive-heading font-bold font-poppins mb-6">
              Quality Assurance
            </h1>
            <p className="responsive-subheading max-w-4xl mx-auto opacity-90 mb-8 text-xl font-semibold">
              Delivering Excellence Through Rigorous Quality Control and International Standards
            </p>
            <p className="responsive-text max-w-3xl mx-auto opacity-80">
              Our commitment to quality is unwavering. Every product undergoes stringent testing and 
              quality control processes to ensure superior performance and reliability.
            </p>
          </div>
        </div>
      </section> */}

      <HeroSectionAbout title="Quality Assurance" subtitle="Delivering Excellence Through Rigorous Quality Control and International Standards" description="Our commitment to quality is unwavering. Every product undergoes stringent testing quality control processes to ensure superior performance and reliability." backgroundImage="/lovable-uploads/img/OurCertifications.jpg" />

      {/* Quality Philosophy */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-8 text-gradient">
              Our Quality Philosophy
            </h2>
            <p className="responsive-subheading mb-8 font-open-sans leading-relaxed text-black text-lg font-semibold text-justify">
              We are committed to delivering products of exceptional quality that meet stringent global standards. Our in-house testing facilities rigorously assess both raw materials and finished products to ensure outstanding performance, safety, and durability. Our dedicated Quality Control team ensures only the best products reach our customers, maintaining the trust and confidence that industry leaders like BHEL, BEL, ISRO, and DRDO place in us.
            </p>
          </div>
        </div>
      </section>

      {/* Our Quality Standards - Updated to match certifications style */}
      <section className="section-spacing bg-silver-50">
        <div className="content-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-6 text-silver-900">
              Our Quality Standards
            </h2>
            <p className="responsive-subheading max-w-3xl mx-auto text-black text-base lg:text-nowrap">
              Committed to excellence through internationally recognized quality standards and certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className={`card-hover border-0 shadow-lg text-center animate-on-scroll-zoom stagger-${index + 1}`}>
                <CardContent className="p-8 bg-transparent">
                  <div className="mb-6 flex justify-center">
                    {standard.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-poppins mb-4 text-silver-900">
                    {standard.name}
                  </h3>
                  <p className="responsive-text mb-6 font-open-sans text-black">
                    {standard.description}
                  </p>
                  <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                    {standard.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-spacing bg-silver-50">
        <div className="content-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-6 text-silver-900">
              Our Certifications
            </h2>
            <p className="responsive-subheading max-w-3xl mx-auto text-black text-base">
              Industry-recognized certifications that validate our commitment to quality and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className={`card-hover border-0 shadow-lg text-center animate-on-scroll-zoom stagger-${index + 1}`}>
                <CardContent className="p-8 bg-transparent">
                  <div className="mb-6 flex justify-center">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-poppins mb-4 text-silver-900">
                    {cert.name}
                  </h3>
                  <p className="responsive-text mb-6 font-open-sans text-black">
                    {cert.description}
                  </p>
                  <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                    {cert.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Processes */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-6 text-gradient">
              Quality Control Processes
            </h2>
            <p className="responsive-subheading max-w-3xl mx-auto text-black">
              Comprehensive quality control at every stage of manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityProcesses.map((process, index) => (
              <Card key={index} className={`card-hover border-0 shadow-lg animate-on-scroll stagger-${index + 1}`}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      {process.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-poppins mb-4 text-silver-900">
                        {process.title}
                      </h3>
                      <p className="responsive-text font-open-sans text-black">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Facilities */}
      <section className="section-spacing bg-silver-50">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll-left">
              <h2 className="responsive-heading font-bold font-poppins mb-6 text-silver-900">
                State-of-the-Art Testing Facilities
              </h2>
              <p className="responsive-text mb-8 font-open-sans leading-relaxed text-black">
                Our advanced testing laboratory is equipped with the latest instruments and equipment 
                to perform comprehensive testing of all products. We maintain strict testing protocols 
                to ensure every product meets or exceeds specification requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testingFacilities.map((facility, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="responsive-text font-open-sans text-black text-base">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll-right">
              <img
                alt="Quality Testing Laboratory"
                className="rounded-lg shadow-2xl w-full h-auto object-scale-down"
                src="/lovable-uploads/6d541bee-c2b3-4e91-b60c-af7a9917a52a.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Performance Metrics */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-6 text-gradient">
              Quality Performance Metrics
            </h2>
            <p className="responsive-subheading max-w-3xl mx-auto text-black">
              Measurable results that demonstrate our commitment to quality excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityCommitments.map((commitment, index) => (
              <Card key={index} className={`card-hover border-0 shadow-lg text-center animate-on-scroll-zoom stagger-${index + 1}`}>
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-blue-600 mb-6">
                    {commitment.percentage}
                  </div>
                  <h3 className="text-xl font-semibold font-poppins mb-4 text-silver-900">
                    {commitment.title}
                  </h3>
                  <p className="responsive-text font-open-sans text-black">
                    {commitment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Team */}
      <section className="section-spacing bg-blue-50">
        <div className="content-container text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <Users className="w-20 h-20 text-blue-600 mx-auto mb-8" />
            <h2 className="responsive-heading font-bold font-poppins mb-6 text-silver-900">
              Dedicated Quality Team
            </h2>
            <p className="responsive-subheading mb-8 font-open-sans leading-relaxed text-black">
              Our experienced quality control team brings decades of expertise in PTFE product testing and quality assurance, they work tirelessly to maintain our high standards and continuously improve our processes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center animate-on-scroll-zoom stagger-1">
                <div className="text-4xl font-bold text-blue-600 mb-3">35+</div>
                <div className="responsive-text text-black">Years Average Experience</div>
              </div>
              <div className="text-center animate-on-scroll-zoom stagger-2">
                <div className="text-4xl font-bold text-blue-600 mb-3">24/7</div>
                <div className="responsive-text text-black bg-transparent">Quality Monitoring</div>
              </div>
              <div className="text-center animate-on-scroll-zoom stagger-3">
                <div className="text-4xl font-bold text-blue-600 mb-3">100%</div>
                <div className="responsive-text text-black">Product Testing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityAssurance;
