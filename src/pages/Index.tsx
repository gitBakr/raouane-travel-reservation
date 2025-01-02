import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import OffresSection from "@/components/OffresSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div 
        className="flex-grow bg-cover bg-center py-12"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&q=80")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-white/95 rounded-lg shadow-xl p-8 backdrop-blur-sm">
            <BookingForm />
          </div>
        </div>
      </div>
      <OffresSection />
      <Footer />
    </div>
  );
};

export default Index;