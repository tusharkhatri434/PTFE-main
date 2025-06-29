import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const products = [{
    name: "PTFE Hookup Wires",
    slug: "ptfe-hookup-wires"
  }, {
    name: "PTFE High Voltage Corona Cables",
    slug: "ptfe-high-voltage-corona-cables"
  }, {
    name: "PTFE Multicore Twisted Cables",
    slug: "ptfe-multicore-twisted-cables"
  }, {
    name: "PTFE RF Coaxial Cables",
    slug: "ptfe-rf-coaxial-cables"
  }, {
    name: "PTFE Thermocouple Cables",
    slug: "ptfe-thermocouple-cables"
  }, {
    name: "PTFE Insulated Sleeves",
    slug: "ptfe-insulated-sleeves"
  }, {
    name: "Cured PTFE Tapes & Sheets",
    slug: "cured-ptfe-tapes-sheets"
  }];
  const aboutSections = [{
    name: "Company Profile",
    anchor: "/about"
  }, {
    name: "Our Certifications",
    anchor: "/quality-assurance"
  }, {
    name: "Our Infrastructure",
    anchor: "/infrastructure"
  }];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (anchor: string) => {
    if (location.pathname !== '/about') {
      navigate('/about');
      setTimeout(() => {
        scrollToTop();
        setTimeout(() => {
          const element = document.querySelector(anchor);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 300);
      }, 100);
    } else {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigation = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        scrollToTop();
      }, 50);
    } else {
      scrollToTop();
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "About Us",
    // path: "/about",
    hasDropdown: true
  }, {
    name: "Our Products",
    path: "/products",
    hasDropdown: true
  }, 
 {
    name: "Our Clients",
    path: "/clients"
  },
   {
    name: "Contact",
    path: "/contact"
  }];
  return <>
      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-700" : "bg-gray-900 border-b border-gray-800"}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => handleNavigation('/')} className="flex items-center group transition-transform duration-200 hover:scale-105">
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-600">
                <img alt="Meerut PTFE Products" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-110" src="/lovable-uploads/f80ae63e-f645-4c57-8a31-79ddd29d8eda.png" />
              </div>
            </button>

            {/* Desktop Navigation - Aligned to Right */}
            <nav className="hidden lg:flex items-center space-x-4 ml-auto">
              {navLinks.map(link => <div key={link.name} className="relative group">
                  {link.hasDropdown ? <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className={`flex items-center justify-center space-x-1 py-2 px-4 font-inter font-medium text-sm transition-all duration-200 rounded-lg hover:text-blue-400 hover:bg-gray-700 ${location.pathname === link.path || link.name === "Our Products" && location.pathname.startsWith('/products') || link.name === "About Us" && location.pathname.startsWith('/about') ? "bg-blue-600 text-white border border-blue-500" : "border border-transparent text-white"}`}>
                          <span className="text-white">{link.name}</span>
                          <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 text-white" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-60 bg-gray-800 shadow-xl rounded-xl border border-gray-600 p-2 z-50 mt-2">
                        {link.name === "Our Products" ? <>
                            <DropdownMenuItem asChild>
                              <button onClick={() => handleNavigation("/products")} className="w-full text-left block px-4 py-3 text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-blue-400 transition-all duration-200 rounded-lg cursor-pointer border-b border-gray-600 mb-2">
                                All Products
                              </button>
                            </DropdownMenuItem>
                            {products.map(product => <DropdownMenuItem key={product.slug} asChild>
                                <button onClick={() => handleNavigation(`/products#${product.slug}`)} className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition-all duration-200 rounded-lg cursor-pointer">
                                  {product.name}
                                </button>
                              </DropdownMenuItem>)}
                          </> : <>
                            <DropdownMenuItem asChild>
                              {/* <button onClick={() => handleNavigation("/about")} className="w-full text-left block px-4 py-3 text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-blue-400 transition-all duration-200 rounded-lg cursor-pointer border-b border-gray-600 mb-2">
                                Overview
                              </button> */}
                            </DropdownMenuItem>
                            {aboutSections.map(section => <DropdownMenuItem key={section.anchor} asChild>
                                <button onClick={() => navigate(section.anchor)} className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition-all duration-200 rounded-lg cursor-pointer">
                                  {section.name}
                                </button>
                              </DropdownMenuItem>)}
                          </>}
                      </DropdownMenuContent>
                    </DropdownMenu> : link.name === "Contact" ? <button onClick={() => handleNavigation(link.path)} className="py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200 text-sm transform hover:scale-105 font-semibold bg-blue-600 text-white hover:bg-blue-700 border border-blue-600">
                      {link.name}
                    </button> : <button onClick={() => handleNavigation(link.path)} className="text-white">
                      {link.name}
                    </button>}
                </div>)}
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 rounded-lg hover:bg-gray-700 transition-all duration-200 text-gray-300 border border-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-5 h-5 transition-transform duration-200 rotate-90" /> : <Menu className="w-5 h-5 transition-transform duration-200" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && <div className="lg:hidden bg-gray-800 border-t border-gray-600 py-4 mt-3 rounded-b-xl shadow-lg animate-slide-in">
              {navLinks.map(link => <div key={link.name}>
                  <button onClick={() => handleNavigation(link.path)} className={`w-full text-left block py-3 px-4 text-sm font-medium transition-all duration-200 rounded-lg mx-2 mb-2 text-white hover:text-blue-400 hover:bg-gray-700 ${link.name === "Contact" ? "bg-blue-600 hover:bg-blue-700" : ""} ${location.pathname === link.path ? "bg-blue-600 text-white" : ""}`}>
                    {link.name}
                  </button>
                  {link.hasDropdown && link.name === "Our Products" && <div className="pl-6 space-y-1 mb-3">
                      <button onClick={() => handleNavigation("/products")} className="w-full text-left block py-2 px-3 text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">
                        All Products
                      </button>
                      {products.map(product => <button key={product.slug} onClick={() => handleNavigation(`/products#${product.slug}`)} className="w-full text-left block py-2 px-3 text-xs text-gray-400 hover:text-blue-400 transition-colors duration-200">
                          {product.name}
                        </button>)}
                    </div>}
                  {link.hasDropdown && link.name === "About Us" && <div className="pl-6 space-y-1 mb-3">
                      {/* <button onClick={() => handleNavigation("/about")} className="w-full text-left block py-2 px-3 text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">
                        Overview
                      </button> */}
                      {aboutSections.map(section => <button key={section.anchor} onClick={() => {
                navigate(section.anchor);
                setIsMobileMenuOpen(false);
              }} className="w-full text-left block py-2 px-3 text-xs text-gray-400 hover:text-blue-400 transition-colors duration-200">
                          {section.name}
                        </button>)}
                    </div>}
                </div>)}
            </div>}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}
    </>;
};
export default Header;