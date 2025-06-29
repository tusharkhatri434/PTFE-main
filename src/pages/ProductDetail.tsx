
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft, Download, Phone, Mail } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams();

  const productData: Record<string, any> = {
    "ptfe-hookup-wires": {
      name: "PTFE Hookup Wires",
      subtitle: "Superior Single Core Equipment Hookup Wires",
      description: "Meerut PTFE Products Pvt. Ltd. offers superior PTFE Single Core Equipment Hookup Wires made with premium copper and advanced PTFE insulation. These wires are flameproof, lightweight, flexible, and resistant to chemicals, UV, and fungus.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&h=600&auto=format&fit=crop",
      features: [
        "Unmatched Flexibility and Durability",
        "Excellent Mechanical Strength",
        "Wide Temperature Range (-65°C to +200°C)",
        "Fire and Chemical Resistant",
        "UV and Fungus Resistant",
        "Lightweight Design",
        "Superior Electrical Properties"
      ],
      specifications: [
        { property: "Temperature Range", value: "-65°C to +200°C" },
        { property: "Voltage Rating", value: "Up to 1000V" },
        { property: "Conductor", value: "Premium Copper" },
        { property: "Insulation", value: "PTFE Teflon" },
        { property: "Colors Available", value: "Multiple Colors" },
        { property: "Standards", value: "International Standards" }
      ],
      applications: [
        "High-performance electrical equipment",
        "Electronic equipment connections",
        "Industrial automation systems",
        "Aerospace applications",
        "Medical equipment",
        "Scientific instruments"
      ],
      advantages: [
        "Outstanding flexibility for easy installation",
        "Excellent resistance to harsh chemicals",
        "Superior performance in extreme temperatures",
        "Fire retardant properties for safety",
        "Long service life reduces maintenance costs",
        "Consistent quality and reliability"
      ]
    },
    // Add other products with similar structure...
    "ptfe-high-voltage-corona-cables": {
      name: "PTFE High Voltage Corona Cables",
      subtitle: "Advanced High Voltage Solutions",
      description: "High-performance cables specifically designed for critical high-voltage applications with superior corona resistance and exceptional insulation properties for power transmission and distribution systems.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&h=600&auto=format&fit=crop",
      features: [
        "Corona Resistant Design",
        "High Voltage Capability",
        "Superior Insulation Properties",
        "Long Service Life",
        "Excellent Dielectric Strength",
        "Weather Resistant",
        "Low Maintenance Requirements"
      ],
      specifications: [
        { property: "Voltage Rating", value: "Up to 35kV" },
        { property: "Temperature Range", value: "-40°C to +180°C" },
        { property: "Dielectric Strength", value: "High" },
        { property: "Corona Resistance", value: "Excellent" },
        { property: "Insulation", value: "PTFE Teflon" },
        { property: "Standards", value: "IEC/IS Standards" }
      ],
      applications: [
        "Power transmission systems",
        "High voltage equipment",
        "Electrical substations",
        "Industrial power distribution",
        "Renewable energy systems",
        "Grid infrastructure"
      ],
      advantages: [
        "Superior corona resistance for long-term reliability",
        "Excellent performance in high voltage applications",
        "Weather and UV resistant for outdoor use",
        "Reduced maintenance and replacement costs",
        "Enhanced safety in critical applications",
        "Consistent performance over extended periods"
      ]
    }
  };

  const product = productData[productId || ""] || productData["ptfe-hookup-wires"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-8 bg-silver-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-silver-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <span>/</span>
            <span className="text-silver-900">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Premium PTFE Product</Badge>
              <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-silver-900">
                {product.name}
              </h1>
              <p className="text-xl text-blue-600 mb-6 font-medium">
                {product.subtitle}
              </p>
              <p className="text-lg text-silver-600 mb-8 font-open-sans leading-relaxed">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote Now
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Datasheet
                </Button>
              </div>
            </div>
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-silver-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Features */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-montserrat mb-6 text-gradient">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-silver-700 font-open-sans">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-montserrat mb-6 text-gradient">
                  Technical Specifications
                </h3>
                <div className="space-y-4">
                  {product.specifications.map((spec: any, index: number) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-silver-200 last:border-b-0">
                      <span className="font-medium text-silver-700">{spec.property}</span>
                      <span className="text-silver-900 font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-montserrat mb-6 text-gradient">
                  Applications
                </h3>
                <ul className="space-y-3">
                  {product.applications.map((application: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-silver-700 font-open-sans">{application}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-6 text-silver-900">
              Product Advantages
            </h2>
            <p className="text-xl text-silver-600 max-w-3xl mx-auto">
              Discover why our {product.name.toLowerCase()} are the preferred choice for demanding applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.advantages.map((advantage: string, index: number) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-silver-700 font-open-sans">{advantage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              Interested in {product.name}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get detailed specifications, pricing, and availability information. 
              Our technical team is ready to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-silver-100">
                <Link to="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Request Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <a href="tel:+911212440676">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-12 bg-silver-50">
        <div className="container mx-auto px-4 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Products
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
