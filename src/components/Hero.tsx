import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, Clock, Zap } from "lucide-react";

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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">Atención personalizada</div>
              </div>
              <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">Disponibilidad 24/7</div>
              </div>
              <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">Soluciones completas</div>
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