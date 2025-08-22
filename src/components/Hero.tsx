import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="hero-title mb-6">
            Construimos El Futuro
            <br />
            <span className="text-accent">Juntos</span>
          </h1>
          
          <p className="hero-subtitle mx-auto mb-12">
            TICO Startup Studio transforma ideas innovadoras en empresas líderes del mercado. 
            Proporcionamos capital, experiencia y recursos para construir la próxima generación de startups.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient" size="hero">
              <Rocket className="mr-2" />
              Lanza Tu Startup
              <ArrowRight className="ml-2" />
            </Button>
            
            <Button variant="outline" size="hero">
              <Zap className="mr-2" />
              Explorar Portafolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Startups Lanzadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">$100M+</div>
              <div className="text-muted-foreground">Capital Desplegado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Tasa de Éxito</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;