import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            ¿Listo para Comenzar a Construir?
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Hablemos de tu <span className="bg-gradient-to-r from-[#414f2f] to-[#d0966e] bg-clip-text text-transparent">Proyecto</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Consultation Card */}
          <div className="lg:w-1/3">
            <Card className="p-8 bg-gradient-to-r from-[#414f2f] to-[#d0966e] text-white rounded-r-none lg:rounded-r-none rounded-l-lg">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">💡</span> Consulta Gratuita
                </h3>
                <p className="mb-6 text-sm text-white/90 leading-relaxed">
                  Agenda una consulta sin costo y descubre cómo podemos ayudarte a crear tu empresa exitosa.
                </p>
                <Button 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-6 py-2"
                >
                  Agendar Consulta
                </Button>
              </div>
            </Card>
            
            {/* Team Image */}
            <div className="mt-8">
              <img 
                src="/lovable-uploads/f62a7155-c2f1-4741-80cd-21f5930b82e9.png" 
                alt="Equipo trabajando en proyectos empresariales"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
        </div>
      </div>
    </section>
  );
};

export default About;