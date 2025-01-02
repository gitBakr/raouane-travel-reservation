import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8">
        <BookingForm />
      </main>
    </div>
  );
};

export default Index;