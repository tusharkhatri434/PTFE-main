
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProductsFAQ = () => {
  const faqs = [
    {
      question: "Are these wires suitable for export?",
      answer: "Yes, our PTFE wires meet international standards and are exported to Dubai, UK, and other countries. We ensure full compliance with export regulations and provide necessary documentation."
    },
    {
      question: "Can you provide custom cable sizes?",
      answer: "Absolutely! We specialize in custom cable configurations. Our engineering team can design cables to meet your specific requirements including conductor size, insulation thickness, and jacket materials."
    },
    {
      question: "What's the delivery timeline for bulk orders?",
      answer: "Delivery timelines vary based on order quantity and specifications. Standard products typically ship within 2-3 weeks, while custom configurations may take 4-6 weeks. Contact us for specific timeline estimates."
    },
    {
      question: "Do you provide technical support and consultation?",
      answer: "Yes, our experienced technical team provides comprehensive support including application guidance, specification review, and ongoing technical assistance throughout your project lifecycle."
    },
    {
      question: "What quality assurance measures do you follow?",
      answer: "We follow ISO 9001:2008 standards with rigorous in-house testing including electrical, mechanical, and environmental tests. Every batch undergoes quality inspection before dispatch."
    },
    {
      question: "Can you supply cables for aerospace applications?",
      answer: "Yes, our PTFE cables are widely used in aerospace applications. We meet stringent aerospace standards and supply to ISRO and other aerospace organizations."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our PTFE products and services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-md border border-gray-200"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ProductsFAQ;
