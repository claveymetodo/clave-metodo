import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl text-foreground hover:text-primary transition-colors">
          Clave y Método
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#inicio" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="/#services" className="text-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <Link to="/nuestra-historia" className="text-foreground hover:text-primary transition-colors">
            Nuestra Historia
          </Link>
          <a href="/#about" className="text-foreground hover:text-primary transition-colors">
            Hablemos
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span className="text-sm">EN</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
            Agenda una Videollamada
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;