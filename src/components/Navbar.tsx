import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#1A1F2C] to-[#2C3E50] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-white">RAOUANE VOYAGE</span>
          </div>
          
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-4">
                <a href="#" className="text-lg hover:text-blue-500 transition-colors">Accueil</a>
                <a href="#" className="text-lg hover:text-blue-500 transition-colors">À propos</a>
                <a href="#" className="text-lg hover:text-blue-500 transition-colors">Contact</a>
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-200 hover:text-white transition-colors">Accueil</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors">À propos</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;