import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users, Award, TrendingUp, CheckCircle, Star, Rocket, Shield, Zap, Plane, Factory, Globe, Target, Microscope, Wrench, Settings, Syringe } from "lucide-react";
const Clients = () => {
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
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-zoom');
    animatedElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const defenseAerospaceClients = [{
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    name: "Indian Army (Army Air Defence & Army Ordnance Corps)",
    description: "Instrumentation Limited is proud to support the Indian Army with reliable, high-performance equipment and instrumentation that contribute to national defense and operational readiness."
  }, {
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    name: "HAL (Hindustan Aeronautics Limited)",
    description: "As India's aerospace leader, HAL relies on precision and innovation. Our solutions support their vital work in aircraft manufacturing and space exploration."
  }, {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    name: "ISRO (Indian Space Research Organisation)",
    description: "Supporting India's space missions is a responsibility we proudly uphold. Our precision instruments contribute to ISRO's groundbreaking achievements."
  }, {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    name: "DRDL (Defence Research and Development Laboratory)",
    description: "We partner with DRDL to deliver advanced, high-accuracy solutions that support missile and defense technology developments."
  }, {
    icon: <Microscope className="w-8 h-8 text-blue-600" />,
    name: "IRDE (Instruments Research & Development Establishment)",
    description: "We provide IRDE with cutting-edge, customized instrumentation that supports their electro-optical and advanced research projects."
  }, {
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    name: "ADA (Aeronautical Development Agency)",
    description: "ADA, known for the Light Combat Aircraft (LCA) program, trusts our instrumentation in their indigenous fighter jet development projects."
  }];
  const powerEngineeringClients = [{
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    name: "BHEL (Bharat Heavy Electricals Limited)",
    description: "India's largest engineering and manufacturing company, BHEL trusts our instrumentation for their high-stakes energy and industrial projects."
  }, {
    icon: <Factory className="w-8 h-8 text-blue-600" />,
    name: "L&T (Larsen & Toubro)",
    description: "Instrumentation Limited supports L&T's wide-ranging infrastructure and engineering initiatives with high-performance products built for industrial excellence."
  }, {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    name: "Kirloskar Group",
    description: "A respected name in industrial machinery and power solutions, the Kirloskar Group benefits from our reliable and flexible instrumentation systems."
  }];
  const researchElectronicsClients = [{
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    name: "BEL (Bharat Electronics Limited)",
    description: "BEL, a pioneer in defense and aerospace electronics, counts on us for mission-critical, precision-driven instrumentation solutions."
  }, {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    name: "ECIL (Electronics Corporation of India Limited)",
    description: "ECIL focuses on electronics for defense, atomic energy, and information technology. Our collaboration ensures delivery of dependable instrumentation for complex electronic systems."
  }, {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    name: "GTRE (Gas Turbine Research Establishment)",
    description: "We support GTRE in their advanced gas turbine engine research with robust and precise instrumentation essential for their prototypes and testing processes."
  }];
  const additionalClients = [{
    icon: <Syringe className="w-8 h-8 text-blue-600" />,
    name: "DEBEL (Defence Bioengineering & Electromedical Laboratory)",
    description: "Partnering with DEBEL, we contribute to their life-support and defense bioengineering projects with custom instrumentation."
  }, {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    name: "DITI (Directorate of Indigenisation, Indian Army)",
    description: "We proudly support the Indian Army's efforts towards indigenous development and self-reliance in defense manufacturing."
  }];
  const trustFactors = [{
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: "Decades of Experience",
    description: "serving India's most critical sectors."
  }, {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: "High-Precision Products",
    description: "trusted for defense, space, and industrial applications."
  }, {
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    title: "Commitment to Quality",
    description: "aligned with ISO 9001:2000 standards."
  }, {
    icon: <Settings className="w-8 h-8 text-blue-600" />,
    title: "Tailored Solutions",
    description: "that meet specific client needs and project requirements."
  }, {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: "Proven Reliability",
    description: "with long-standing partnerships across sectors."
  }];
  const achievements = [{
    number: "500+",
    title: "Satisfied Clients",
    description: "Across various industries"
  }, {
    number: "35+",
    title: "Years of Excellence",
    description: "Since 1986"
  }, {
    number: "50+",
    title: "Countries Served",
    description: "Global reach"
  }, {
    number: "99.8%",
    title: "Client Retention",
    description: "Customer satisfaction"
  }];
  const testimonials = [{
    name: "Dr. Rajesh Kumar",
    position: "Chief Engineer, TechCorp Industries",
    content: "Meerut PTFE Products has been our trusted partner for over 8 years. Their quality and reliability are unmatched in the industry.",
    rating: 5
  }, {
    name: "Sarah Johnson",
    position: "Procurement Manager, Global Manufacturing",
    content: "The consistent quality and timely delivery of PTFE products have made them our preferred supplier for critical applications.",
    rating: 5
  }, {
    name: "Amit Sharma",
    position: "Quality Director, Precision Electronics",
    content: "Their technical expertise and custom solutions have helped us achieve new levels of performance in our products.",
    rating: 5
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="section-spacing hero-gradient text-white">
        <div className="content-container text-center">
          <div className="animate-on-scroll">
            <h1 className="responsive-heading font-poppins mb-6 font-bold text-5xl">
              Our Esteemed Clients
            </h1>
            <p className="responsive-subheading max-w-4xl mx-auto opacity-90 mb-8">
              Proudly partnering with India's top organizations in defense, aerospace, power, and research to deliver precision and reliability.
            </p>
            <p className="responsive-text max-w-3xl mx-auto opacity-80">
              At Instrumentation Limited, Kota, we take great pride in being the trusted partner of India's most respected organizations across defense, aerospace, research, energy, and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Proudly serving India's leading organizations in defence, aerospace, power distribution, and research
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-16">
            {[{
            name: "BHEL",
            logo: "/lovable-uploads/f3345a4e-fd66-4774-a1fa-04e8a4471f9c.png"
          }, {
            name: "BEL",
            logo: "/lovable-uploads/96bd1556-fdcd-451f-923d-c02eebf38b42.png"
          }, {
            name: "DRDO",
            logo: "/lovable-uploads/bee7d479-798c-49ce-8190-5957298c7400.png"
          }, {
            name: "IRDE",
            logo: "/lovable-uploads/58493c19-7195-408c-a8ab-69825efdb0b3.png"
          }, {
            name: "L&T",
            logo: "/lovable-uploads/6b6e7f22-24b1-49d6-b320-2e819ddd25bb.png"
          }, {
            name: "Kirloskar",
            logo: "/lovable-uploads/de0feada-ba56-471b-aafa-226e8cf76fa1.png"
          }, {
            name: "ISRO",
            logo: "/lovable-uploads/ef9308cf-8407-4566-aa98-c5b8c2aa960e.png"
          }, {
            name: "GTRE",
            logo: "/lovable-uploads/6777752e-5d14-40e1-804f-d31d11ef1b99.png"
          }, {
            name: "ADA",
            logo: "/lovable-uploads/b71ae20c-3823-41bb-8562-37b39d0391f3.png"
          }, {
            name: "HAL",
            logo: "/lovable-uploads/7d262721-1e8c-43bc-9ee2-b6a1106cc8af.png"
          }, {
            name: "Indian Defence",
            logo: "/lovable-uploads/5d769def-42c8-48aa-8f05-8a5eb1e23efe.png"
          }].map((client, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                  <img src={client.logo} alt={client.name} className="max-h-16 max-w-full object-contain group-hover:scale-110 transition-transform duration-300" onError={e => {
                e.currentTarget.style.display = 'none';
              }} />
                  <p className="text-sm font-semibold text-gray-700 mt-2 text-center font-open-sans">
                    {client.name}
                  </p>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center">
            <p className="text-lg font-open-sans text-black">
              <span className="font-semibold text-black">Trusted by 500+ clients</span> across India and internationally
            </p>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders Section */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-6 text-gradient">
              Trusted by Industry Leaders
            </h2>
            <p className="responsive-subheading max-w-3xl mx-auto text-black text-base">We are proud to have served and continue to collaborate with the following key organizations</p>
          </div>

          {/* Defense & Aerospace Section */}
          <div className="mb-16 animate-on-scroll">
            <h3 className="text-3xl font-bold font-poppins mb-8 text-gray-900 border-l-4 border-blue-600 pl-4">
              Defense & Aerospace
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {defenseAerospaceClients.map((client, index) => <Card key={index} className="hover-lift border-0 shadow-lg animate-on-scroll-zoom" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {client.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-poppins mb-2 text-gray-900">
                          {client.name}
                        </h4>
                        <p className="text-sm font-open-sans text-gray-700 leading-relaxed">
                          {client.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Power, Engineering & Infrastructure Section */}
          <div className="mb-16 animate-on-scroll">
            <h3 className="text-3xl font-bold font-poppins mb-8 text-gray-900 border-l-4 border-blue-600 pl-4">
              Power, Engineering & Infrastructure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {powerEngineeringClients.map((client, index) => <Card key={index} className="hover-lift border-0 shadow-lg animate-on-scroll-zoom" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {client.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-poppins mb-2 text-gray-900">
                          {client.name}
                        </h4>
                        <p className="text-sm font-open-sans text-gray-700 leading-relaxed">
                          {client.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Advanced Research & Electronics Section */}
          <div className="mb-16 animate-on-scroll">
            <h3 className="text-3xl font-bold font-poppins mb-8 text-gray-900 border-l-4 border-blue-600 pl-4">
              Advanced Research & Electronics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchElectronicsClients.map((client, index) => <Card key={index} className="hover-lift border-0 shadow-lg animate-on-scroll-zoom" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {client.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-poppins mb-2 text-gray-900">
                          {client.name}
                        </h4>
                        <p className="text-sm font-open-sans text-gray-700 leading-relaxed">
                          {client.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Additional Esteemed Clients Section */}
          <div className="mb-16 animate-on-scroll">
            <h3 className="text-3xl font-bold font-poppins mb-8 text-gray-900 border-l-4 border-blue-600 pl-4">
              Additional Esteemed Clients
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalClients.map((client, index) => <Card key={index} className="hover-lift border-0 shadow-lg animate-on-scroll-zoom" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {client.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-poppins mb-2 text-gray-900">
                          {client.name}
                        </h4>
                        <p className="text-sm font-open-sans text-gray-700 leading-relaxed">
                          {client.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Why Leaders Trust Us */}
      <section className="section-spacing bg-gray-50">
        <div className="content-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-6 text-gray-900">
              Why Leaders Trust Instrumentation Limited
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFactors.map((factor, index) => <Card key={index} className="text-center border-0 shadow-lg hover-lift animate-on-scroll-zoom bg-white" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    {factor.icon}
                  </div>
                  <h3 className="text-lg font-bold font-poppins mb-4 text-gray-900">
                    {factor.title}
                  </h3>
                  <p className="text-sm font-open-sans text-gray-600">
                    {factor.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-spacing bg-silver-50">
        <div className="content-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-6 text-silver-900">
              Our Track Record
            </h2>
            <p className="responsive-subheading max-w-3xl mx-auto text-black">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => <Card key={index} className={`text-center border-0 shadow-lg hover-lift animate-on-scroll-zoom`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2 font-poppins">
                    {achievement.number}
                  </div>
                  <h3 className="text-xl font-semibold font-poppins mb-2 text-silver-900">
                    {achievement.title}
                  </h3>
                  <p className="font-open-sans text-black">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-6 text-gradient">
              What Our Clients Say
            </h2>
            <p className="responsive-subheading max-w-3xl mx-auto text-black">
              Real feedback from satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className={`border-0 shadow-lg hover-lift animate-on-scroll-zoom`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-black mb-6 font-open-sans ">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-silver-900 font-poppins">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm font-open-sans text-black">
                      {testimonial.position}
                    </p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing hero-gradient text-white">
        <div className="content-container text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-6">
              Ready to Join Our Success Story?
            </h2>
            <p className="responsive-subheading mb-8 opacity-90">
              Join hundreds of satisfied clients who trust us for their precision instrumentation needs. 
              Let's discuss how we can serve your requirements with the same excellence that has made us India's trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="white" className="text-blue-900 hover:text-blue-900">
                <Link to="/contact" className="bg-white text-black">Start Partnership</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-blue-900 hover:bg-white hover:text-blue-900">
                <Link to="/products" className="text-black hover:text-blue-900">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Clients;