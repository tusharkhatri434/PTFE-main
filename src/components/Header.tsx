import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const products = [
    { name: "PTFE Hookup Wires", slug: "ptfe-hookup-wires" },
    { name: "PTFE High Voltage Corona Cables", slug: "ptfe-high-voltage-corona-cables" },
    { name: "PTFE Multicore Twisted Cables", slug: "ptfe-multicore-twisted-cables" },
    { name: "PTFE RF Coaxial Cables", slug: "ptfe-rf-coaxial-cables" },
    { name: "PTFE Thermocouple Cables", slug: "ptfe-thermocouple-cables" },
    { name: "PTFE Insulated Sleeves", slug: "ptfe-insulated-sleeves" },
    { name: "Cured PTFE Tapes & Sheets", slug: "cured-ptfe-tapes-sheets" }
  ];

  const aboutSections = [
    { name: "Company Profile", anchor: "/about" },
    { name: "Our Certifications", anchor: "/quality-assurance" },
    { name: "Our Infrastructure", anchor: "/infrastructure" }
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", hasDropdown: true },
    { name: "Our Products", path: "/products", hasDropdown: true },
    { name: "Our Clients", path: "/clients" },
    { name: "Contact Us", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(scrollToTop, 50);
    } else {
      scrollToTop();
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (link: any) => {
    if (link.path && location.pathname === link.path) return true;
    if (link.name === "Our Products" && location.pathname.startsWith("/products")) return true;
    if (link.name === "About Us" && ["/about", "/quality-assurance", "/infrastructure"].includes(location.pathname)) return true;
    return false;
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-700" : "bg-gray-900 border-b border-gray-800"}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => handleNavigation('/')} className="flex items-center group hover:scale-105 transition-transform duration-200">
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg group-hover:shadow-xl border border-gray-600">
                <img src="/lovable-uploads/f80ae63e-f645-4c57-8a31-79ddd29d8eda.png" alt="Logo" className="h-10 w-auto object-contain brightness-110 transition-transform group-hover:scale-105" />
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-10 ml-auto">
              {navLinks.map(link => (
                <div key={link.name} className="relative group">
                  {link.hasDropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          className={`flex items-center space-x-1 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                            isActive(link)
                              ? "bg-blue-600 text-white border border-blue-500"
                              : "text-white border border-transparent hover:text-blue-400 hover:bg-gray-700"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-60 bg-gray-800 border border-gray-600 shadow-xl rounded-xl p-2 mt-2 z-50">
                        {link.name === "Our Products" ? (
                          <>
                            <DropdownMenuItem asChild>
                              <button onClick={() => handleNavigation("/products")} className="w-full px-4 py-3 text-sm text-left font-medium text-gray-200 hover:bg-gray-700 hover:text-blue-400 rounded-lg border-b border-gray-600 mb-2">
                                All Products
                              </button>
                            </DropdownMenuItem>
                            {products.map(product => (
                              <DropdownMenuItem key={product.slug} asChild>
                                <button onClick={() => handleNavigation(`/products#${product.slug}`)} className="w-full px-4 py-2 text-sm text-left text-gray-300 hover:bg-gray-700 hover:text-blue-400 rounded-lg">
                                  {product.name}
                                </button>
                              </DropdownMenuItem>
                            ))}
                          </>
                        ) : (
                          <>
                            {aboutSections.map(section => (
                              <DropdownMenuItem key={section.anchor} asChild>
                                <button onClick={() => handleNavigation(section.anchor)} className="w-full px-4 py-2 text-sm text-left text-gray-300 hover:bg-gray-700 hover:text-blue-400 rounded-lg">
                                  {section.name}
                                </button>
                              </DropdownMenuItem>
                            ))}
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className={`py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                        (isActive(link) || (link.path=="/contact"))
                          ? "bg-blue-600 text-white border border-blue-500"
                          : "text-white hover:text-blue-400 hover:bg-gray-700 border border-transparent"
                      }`}
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-700 text-gray-300 border border-gray-600"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 rotate-90 transition-transform" /> : <Menu className="w-5 h-5 transition-transform" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-gray-800 border-t border-gray-600 py-4 mt-3 rounded-b-xl shadow-lg">
              {navLinks.map(link => (
                <div key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.path || "/")}
                    className={`w-full text-left py-3 px-4 text-sm font-medium rounded-lg mb-2 mx-2 text-white transition duration-200 ${
                      isActive(link) ? "bg-blue-600 text-white" : "hover:bg-gray-700 hover:text-blue-400"
                    }`}
                  >
                    {link.name}
                  </button>
                  {link.hasDropdown && link.name === "Our Products" && (
                    <div className="pl-6 space-y-1 mb-3">
                      <button onClick={() => handleNavigation("/products")} className="w-full text-left py-2 px-3 text-sm text-gray-300 hover:text-blue-400 font-medium">
                        All Products
                      </button>
                      {products.map(product => (
                        <button key={product.slug} onClick={() => handleNavigation(`/products#${product.slug}`)} className="w-full text-left py-2 px-3 text-xs text-gray-400 hover:text-blue-400">
                          {product.name}
                        </button>
                      ))}
                    </div>
                  )}
                  {link.hasDropdown && link.name === "About Us" && (
                    <div className="pl-6 space-y-1 mb-3">
                      {aboutSections.map(section => (
                        <button
                          key={section.anchor}
                          onClick={() => {
                            handleNavigation(section.anchor);
                          }}
                          className="w-full text-left py-2 px-3 text-xs text-gray-400 hover:text-blue-400"
                        >
                          {section.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}
    </>
  );
};

export default Header;
