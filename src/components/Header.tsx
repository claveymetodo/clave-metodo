import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-bold text-2xl text-foreground">
          Clave y Método
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span className="text-sm">EN</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
            Consulta Gratis
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;