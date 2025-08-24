import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Tu empresa en{" "}
              <span className="bg-gradient-to-r from-[#414f2f] to-[#d0966e] bg-clip-text text-transparent">Costa Rica</span>{" "}
              desde cero
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Te acompañamos en cada etapa de tu negocio, desde el registro hasta la estrategia de crecimiento. 
              Nos encargamos de todo para que tú puedas enfocarte en lo que realmente sabes hacer.
            </p>

            {/* Service highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground">Gestión contable y fiscal integral</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground">Planeación financiera y cumplimiento regulatorio</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground">Constitución y formalización de empresas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground">Estrategias de gestión y expansión empresarial</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about">
                <Button className="bg-primary hover:bg-[#d0966e] text-primary-foreground px-8 py-3 text-lg transition-colors duration-300 w-full sm:w-auto">
                  Empezar Ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-8 pt-6">
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">Atención personalizada</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">Disponibilidad 24/7</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">Soluciones completas</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/53a5eff4-f294-47be-9ca5-417836b29ace.png"
              alt="Equipo de consultores profesionales trabajando en reunión colaborativa"
              className="w-full h-auto rounded-2xl"
            />
            
            {/* Legal badge overlay */}
            <div className="absolute bottom-6 left-6 bg-accent/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <div className="font-semibold">100% Legal</div>
                <div className="text-sm opacity-90">Cumplimiento garantizado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;