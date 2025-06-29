import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, Award, Users, Clock } from "lucide-react";
const Footer = () => {
  return <footer className="bg-silver-900 text-white relative" style={{
    backgroundImage: `url('/lovable-uploads/80b09b92-7b05-4d97-a0e7-c4c4a5eb6afc.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-silver-900/85"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img alt="Meerut PTFE Products" src="/lovable-uploads/5f7ae142-065e-4ace-85eb-c0114887bf76.png" className="w-90 h-15 object-fill" />
              <div></div>
            </div>
            <p className="text-silver-300 mb-4 font-open-sans text-sm">
              Leading manufacturer and exporter of premium PTFE Teflon Insulated Wires and Cables since 1986.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-sm">ISO 9001:2008</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Est. 1986</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="px-[10px]">
            <h4 className="text-lg font-semibold font-montserrat mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="text-sm "><Link to="/" className="text-silver-300 hover:text-white transition-colors">Home</Link></li>
              <li className="text-sm "><Link to="/about" className="text-silver-300 hover:text-white transition-colors">About Us</Link></li>
              <li className="text-sm "><Link to="/products" className="text-silver-300 hover:text-white transition-colors">Products</Link></li>
              <li className="text-sm "><Link to="/quality-assurance" className="text-silver-300 hover:text-white transition-colors">Quality Assurance</Link></li>
              <li className="text-sm "><Link to="/clients" className="text-silver-300 hover:text-white transition-colors">Clients</Link></li>
              <li className="text-sm "><Link to="/infrastructure" className="text-silver-300 hover:text-white transition-colors">Infrastructure</Link></li>
              <li className="text-sm "><Link to="/contact" className="text-silver-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/ptfe-hookup-wires" className="text-silver-300 hover:text-white transition-colors">PTFE Hookup Wires</Link></li>
              <li><Link to="/products/ptfe-high-voltage-corona-cables" className="text-silver-300 hover:text-white transition-colors">High Voltage Corona Cables</Link></li>
              <li><Link to="/products/ptfe-multicore-twisted-cables" className="text-silver-300 hover:text-white transition-colors">Multicore Twisted Cables</Link></li>
              <li><Link to="/products/ptfe-rf-coaxial-cables" className="text-silver-300 hover:text-white transition-colors">RF Coaxial Cables</Link></li>
              <li><Link to="/products/ptfe-thermocouple-cables" className="text-silver-300 hover:text-white transition-colors">Thermocouple Cables</Link></li>
              <li><Link to="/products/ptfe-insulated-sleeves" className="text-silver-300 hover:text-white transition-colors">Insulated Sleeves</Link></li>
              <li><Link to="/products/cured-ptfe-tapes-sheets" className="text-silver-300 hover:text-white transition-colors">PTFE Tapes & Sheets</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-silver-300 text-sm">
                    C-2, Industrial Estate, Partapur<br />
                    Meerut, Uttar Pradesh 250103<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-silver-300 text-sm">+91-121-2440676</p>
                  <p className="text-silver-300 text-sm">+91-121-2440677</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-silver-300 text-sm">info@meerutptfe.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <p className="text-silver-300 text-sm">Exporting to Dubai, UK & More</p>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-blue-400" />
                <p className="text-silver-300 text-sm">Director: Mr. Mukesh Kumar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-silver-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-silver-400 text-sm">
            © 2024 Meerut PTFE Products Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="text-silver-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-silver-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-silver-400 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;