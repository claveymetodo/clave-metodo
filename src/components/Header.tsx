import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import logo from "@/assets/logo.svg";

const Header = () => {
  const { language, setLanguage, t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img src={logo} alt="Clave & Método" className="h-16 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#hero" className="text-foreground hover:text-primary transition-colors">
            {t('header.inicio')}
          </a>
          <a href="/#services" className="text-foreground hover:text-primary transition-colors">
            {t('header.servicios')}
          </a>
          <Link to="/nuestra-historia" className="text-foreground hover:text-primary transition-colors">
            {t('header.nuestra-historia')}
          </Link>
          <a href="/#about" className="text-foreground hover:text-primary transition-colors">
            {t('header.hablemos')}
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm">{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
            {t('header.agenda')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;