
import { Card, CardContent } from "@/components/ui/card";

const IndustriesServed = () => {
  const clients = [{
    name: "BHEL",
    logo: "/lovable-uploads/38a3df41-91ee-482e-a0cd-67cc9af8d8ec.png"
  }, {
    name: "BEL", 
    logo: "/lovable-uploads/96bd1556-fdcd-451f-923d-c02eebf38b42.png"
  }, {
    name: "DRDO",
    logo: "/lovable-uploads/87699ee9-84c8-4b03-b1a1-52cfdcf84564.png"
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
  }];

  return (
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <p className="text-sm font-semibold text-gray-700 mt-2 text-center font-open-sans">
                  {client.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 font-open-sans">
            <span className="font-semibold">Trusted by 500+ clients</span> across India and internationally
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
