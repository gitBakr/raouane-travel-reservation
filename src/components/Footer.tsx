const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RAOUANE VOYAGE</h3>
            <p className="text-gray-300">
              Votre partenaire de confiance pour le Hajj et la Omra
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Email: contact@raouane-voyage.com</p>
            <p className="text-gray-300">Tél: +212 123 456 789</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horaires</h3>
            <p className="text-gray-300">Lun - Ven: 9h00 - 18h00</p>
            <p className="text-gray-300">Sam: 9h00 - 13h00</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300">© 2024 RAOUANE VOYAGE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;