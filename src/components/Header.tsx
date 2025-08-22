import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-black text-2xl">
          <span className="hero-title text-2xl">Clave & Método</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Servicios
          </a>
          <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
            Portafolio
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            Nosotros
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </nav>

        <Button variant="hero" size="default">
          Comenzar
        </Button>
      </div>
    </header>
  );
};

export default Header;