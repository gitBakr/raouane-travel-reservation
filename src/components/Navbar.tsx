import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600">RAOUANE VOYAGE</span>
          </div>
          
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-4">
                <a href="#" className="text-lg">Accueil</a>
                <a href="#" className="text-lg">À propos</a>
                <a href="#" className="text-lg">Contact</a>
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Accueil</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">À propos</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;