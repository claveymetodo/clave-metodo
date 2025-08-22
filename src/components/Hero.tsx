import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Geometric floating elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="hero-title mb-6">
            Tu empresa en Costa Rica
            <br />
            <span className="text-accent">desde cero</span>
          </h1>
          
          <p className="hero-subtitle mx-auto mb-12">
            Te acompañamos en cada paso para crear y hacer crecer tu negocio. Desde el registro hasta la estrategia, 
            nosotros nos encargamos de todo para que tú te enfoques en lo que mejor sabes hacer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient" size="hero">
              <CheckCircle className="mr-2" />
              Empezar Ahora
              <ArrowRight className="ml-2" />
            </Button>
            
            <Button variant="outline" size="hero">
              Conocer Servicios
            </Button>
          </div>

          {/* Trust badge */}
          <div className="mt-16 mb-12">
            <p className="text-muted-foreground text-lg">Confiado por más de 500 empresas</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Empresas creadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">95%</div>
              <div className="text-muted-foreground">Éxito garantizado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Soporte disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;