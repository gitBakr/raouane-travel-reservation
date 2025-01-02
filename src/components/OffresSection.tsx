import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const OffresSection = () => {
  const offres = [
    {
      title: "Omra Économique",
      description: "Forfait essentiel pour accomplir votre Omra",
      price: "À partir de 1200€",
      features: ["Vol inclus", "Hôtel 3*", "Transferts", "Guide francophone"],
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80"
    },
    {
      title: "Omra Confort",
      description: "Un séjour confortable pour votre pèlerinage",
      price: "À partir de 1800€",
      features: ["Vol direct", "Hôtel 4*", "Transferts VIP", "Guide expert"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
    },
    {
      title: "Hajj Premium",
      description: "Une expérience premium pour votre Hajj",
      price: "À partir de 4500€",
      features: ["Vol première classe", "Hôtel 5*", "Service personnalisé", "Guide privé"],
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">Nos Offres</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offres.map((offre, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={offre.image} 
                  alt={offre.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{offre.title}</CardTitle>
                <CardDescription>{offre.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-blue-600 mb-4">{offre.price}</p>
                <ul className="space-y-2">
                  {offre.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffresSection;