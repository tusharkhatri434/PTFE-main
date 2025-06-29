import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mail, Phone, FileText } from "lucide-react";
const ProductsFinalCTA = () => {
  return <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Power Your Next Project with Reliable PTFE Cabling
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Ready to experience the difference that premium PTFE wires can make? 
            Our expert team is here to help you find the perfect solution for your specific requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Get a Quote</h3>
              <p className="text-blue-200 text-sm mb-4">
                Pricing for your specific requirements
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <CardContent className="p-6 text-center">
              <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Request a Sample</h3>
              <p className="text-blue-200 text-sm mb-4">
                Test our quality before placing your order
              </p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/contact">Get Sample</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <CardContent className="p-6 text-center">
              <Phone className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Technical Consultation</h3>
              <p className="text-blue-200 text-sm mb-4">
                Speak with our engineering experts
              </p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/contact">Contact Engineers</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-blue-900 font-semibold px-8 py-4 text-lg">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-blue-900 hover:bg-white px-8 py-4 text-lg font-semibold">
              <Link to="/infrastructure" className="text-black ">View Our Facility</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductsFinalCTA;