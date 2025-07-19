import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Globe, User } from "lucide-react";
import HeroSectionAbout from "@/components/HeroSectionAbout";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import WhatsAppButton from "@/components/WhatsAppButton";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const {toast} = useToast();
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

       const message = `Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Company: ${formData.company}
        Subject: ${formData.subject}
        Message: ${formData.message}`;
    
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "919557074015"; // Replace with actual number
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
         // Open new WhatsApp chat window
         window.open(whatsappLink, "_blank");

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    title: "Our Address",
    details: ["C-2, Industrial Estate, Partapur", "Meerut, Uttar Pradesh 250103", "India"]
  }, {
    icon: <Phone className="w-6 h-6 text-blue-600" />,
    title: "Phone Numbers",
    details: ["+91-121-2440676", "+91-121-2440677"]
  }, 
  {
    icon: <WhatsAppButton/>,
    title: "Whatsapp",
    details: ["Link to Whatsapp Chat"]
  }, 
  {
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    title: "Email Address",
    details: ["info@meerutptfe.com", "sales@meerutptfe.com"]
  }, {
    icon: <User className="w-6 h-6 text-blue-600" />,
    title: "Contact Person",
    details: ["Mr. Mukesh Kumar", "Director"]
  }, {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: "Business Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"]
  }, {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "Export Markets",
    details: ["Dubai, UAE", "United Kingdom", "Global Shipping Available"]
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      {/* <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
            Contact Us
          </h1>
          <p className="text-xl max-w-4xl mx-auto opacity-90 mb-8 md:text-xl font-semibold">
            Ready to discuss your PTFE solution needs? Get in touch with our expert team today.
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-80 text-white">
            We're here to help you find the perfect PTFE products for your applications. 
            Contact us for quotes, technical specifications, or custom solutions.
          </p>
        </div>
      </section> */}
      <HeroSectionAbout title="Contact Us" subtitle="Ready to discuss your PTFE solution needs? Get in touch with our expert team today." description="We're here to help you find the perfect PTFE products for your applications. Contact us for quotes, technical specifications, or custom solutions." backgroundImage="/lovable-uploads/img/contactUs.png" />
      

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold font-montserrat mb-6 text-gradient">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          Full Name *
                        </label>
                        <Input name="name" value={formData.name} onChange={handleChange} required className="border-silver-300 focus:border-blue-500" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          Email Address *
                        </label>
                        <Input name="email" type="email" value={formData.email} onChange={handleChange} required className="border-silver-300 focus:border-blue-500" placeholder="your.email@company.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          Phone Number
                        </label>
                        <Input name="phone" value={formData.phone} onChange={handleChange} className="border-silver-300 focus:border-blue-500" placeholder="+91-XXX-XXXXXXX" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          Company Name
                        </label>
                        <Input name="company" value={formData.company} onChange={handleChange} className="border-silver-300 focus:border-blue-500" placeholder="Your Company Name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Subject *
                      </label>
                      <Input name="subject" value={formData.subject} onChange={handleChange} required className="border-silver-300 focus:border-blue-500" placeholder="Inquiry about PTFE products" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Message *
                      </label>
                      <Textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="border-silver-300 focus:border-blue-500" placeholder="Please describe your requirements, quantities, specifications, or any questions you may have..." />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Google Map */}
              <GoogleMapEmbed />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold font-montserrat mb-6 text-silver-900">
                Get in Touch
              </h2>
              <p className="text-lg mb-8 font-open-sans text-black">
                We're always ready to help you with your PTFE product needs. 
                Reach out to us through any of the following channels.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => <Card key={index} className="hover-lift border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold font-montserrat mb-2 text-silver-900">
                            {info.title}
                          </h3>
                          {(info.title=="Whatsapp" ? <a href="https://wa.me/919557074015" target="_blank" className="underline text-blue-800">Link to Chat</a> :  info.details.map((detail, idx) => <p key={idx} className="font-open-sans text-black">
                              {detail}
                            </p>)
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-silver-50">
        
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you need standard products or custom solutions, our team is ready to help. 
              Contact us today for competitive quotes and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-silver-100">
                <a href="tel:+911212440676">Call Now</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-blue-900 hover:text-blue-900">
                <a href="mailto:info@meerutptfe.com">Send Email</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;