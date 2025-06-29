import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp, Factory, Lightbulb, Shield, Star } from "lucide-react";
import { useEffect } from "react";
const About = () => {
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
  const milestones = [{
    year: "1986",
    event: "Company Established",
    description: "Founded with a vision to deliver premium PTFE solutions"
  }, {
    year: "1995",
    event: "ISO Certification",
    description: "Achieved ISO 9001:2008 certification for quality management"
  }, {
    year: "2000",
    event: "Global Expansion",
    description: "Started exporting to Dubai and international markets"
  }, {
    year: "2010",
    event: "Infrastructure Upgrade",
    description: "Expanded to 7,000 sq. ft. state-of-the-art facility"
  }, {
    year: "2015",
    event: "R&D Excellence",
    description: "Established dedicated research and development unit"
  }, {
    year: "2020",
    event: "Digital Transformation",
    description: "Modernized operations with advanced technology"
  }];
  const values = [{
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: "Quality Excellence",
    description: "Unwavering commitment to delivering products that exceed international standards and customer expectations."
  }, {
    icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    title: "Innovation",
    description: "Continuous investment in R&D to develop cutting-edge PTFE solutions for evolving industry needs."
  }, {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Trust & Reliability",
    description: "Building long-term partnerships through consistent quality, on-time delivery, and exceptional service."
  }, {
    icon: <Star className="w-6 h-6 text-blue-600" />,
    title: "Customer Focus",
    description: "Understanding unique requirements and providing customized solutions for diverse industry applications."
  }];
  const leadership = [{
    name: "Mr. Mukesh Kumar",
    position: "Director",
    description: "Leading the company with over 30 years of industry experience and visionary leadership.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop"
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="section-spacing hero-gradient text-white">
        <div className="content-container text-center">
          <div className="animate-on-scroll">
            <h1 className="responsive-heading font-bold font-poppins mb-4">
              About Meerut PTFE Products
            </h1>
            <p className="responsive-subheading max-w-4xl mx-auto opacity-90 font-semibold text-lg">
              Three decades of innovation, quality, and excellence in PTFE Teflon Insulated Wires and Cables
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section id="journey" className="section-spacing bg-white">
        <div className="content-container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-on-scroll-left">
                <h2 className="responsive-heading font-bold font-poppins mb-4 text-gradient">
                  Our Journey Since 1986
                </h2>
                <p className="responsive-text mb-4 font-open-sans leading-relaxed text-black">
                  Established in 1986, Meerut PTFE Products Pvt. Ltd. has been at the forefront of innovation 
                  and quality in PTFE Teflon Insulated Wires and Cables. What started as a vision to provide 
                  superior PTFE solutions has evolved into a globally recognized brand trusted by industry leaders.
                </p>
                <p className="responsive-text mb-4 font-open-sans leading-relaxed text-black">
                  Our dedication to exceptional manufacturing standards and customer satisfaction has made us 
                  a preferred partner for prestigious organizations including BHEL, BEL, ISRO, DRDO, and many more. 
                  We proudly hold ISO 9001:2008 certification and are driven by our commitment to deliver 
                  precision-engineered solutions that meet international standards.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center animate-on-scroll-zoom stagger-1">
                    <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">35+</div>
                    <div className="text-black bg-transparent">Years of Excellence</div>
                  </div>
                  <div className="text-center animate-on-scroll-zoom stagger-2">
                    <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">99.8%</div>
                    <div className="text-xs text-black ">Satisfied Clients</div>
                  </div>
                </div>
              </div>
              <div className="animate-on-scroll-right">
                <img alt="PTFE Manufacturing Excellence" className="rounded-lg shadow-2xl w-full h-auto" src="/lovable-uploads/91a95d6b-e69c-41a4-b0c6-b2cae92a060a.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section id="values" className="section-spacing bg-silver-50">
        <div className="content-container">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-4 text-silver-900">
              Our Core Values
            </h2>
            <p className="responsive-subheading max-w-3xl mx-auto text-base text-black font-semibold">
              The principles that guide our operations and define our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => <Card key={index} className={`card-hover border-0 shadow-lg animate-on-scroll stagger-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-poppins mb-2 text-silver-900">
                        {value.title}
                      </h3>
                      <p className="responsive-text font-open-sans text-black">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="section-spacing bg-white">
        <div className="content-container">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-4 text-gradient">
              Our Journey Through Time
            </h2>
            <p className="text-black max-w-3xl mx-auto">
              Key milestones that shaped our growth and success over the decades
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {milestones.map((milestone, index) => <div key={index} className={`relative flex items-center mb-8 last:mb-0 animate-on-scroll stagger-${index + 1}`}>
                  <div className="absolute left-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16 mx-[6px]">
                    <Card className="card-hover border-0 shadow-lg">
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-lg font-semibold font-poppins text-silver-900">
                            {milestone.event}
                          </h3>
                          <span className="text-blue-600 font-bold text-base">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="responsive-text text-black">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="section-spacing bg-silver-50">
        <div className="content-container">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-4 text-silver-900">
              Leadership Team
            </h2>
            <p className="responsive-subheading max-w-3xl mx-auto text-black">
              Visionary leaders driving our mission of excellence and innovation
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {leadership.map((leader, index) => <Card key={index} className="card-hover border-0 shadow-lg animate-on-scroll-zoom">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold font-poppins text-silver-900 mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">
                        {leader.position}
                      </p>
                      <p className="responsive-text font-open-sans text-black">
                        {leader.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section id="achievements" className="section-spacing hero-gradient text-white">
        <div className="content-container">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="responsive-heading font-bold font-poppins mb-4">
              Our Achievements in Numbers
            </h2>
            <p className="responsive-subheading opacity-90">
              Quantifying our commitment to excellence and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center animate-on-scroll-zoom stagger-1">
              <Factory className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl lg:text-3xl font-bold mb-1">7,000</div>
              <div className="text-xs opacity-80">Sq. Ft. Facility</div>
            </div>
            <div className="text-center animate-on-scroll-zoom stagger-2">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl lg:text-3xl font-bold mb-1">500+</div>
              <div className="text-xs opacity-80">Happy Clients</div>
            </div>
            <div className="text-center animate-on-scroll-zoom stagger-3">
              <Globe className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl lg:text-3xl font-bold mb-1">Global</div>
              <div className="text-xs opacity-80">Export Reach</div>
            </div>
            <div className="text-center animate-on-scroll-zoom stagger-4">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl lg:text-3xl font-bold mb-1">ISO</div>
              <div className="text-xs opacity-80">Certified</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;