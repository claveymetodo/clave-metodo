import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users2, 
  Globe, 
  Target,
  ArrowRight
} from "lucide-react";

const stats = [
  { icon: Award, value: "15 Años", label: "Experiencia en la Industria" },
  { icon: Users2, value: "200+", label: "Miembros del Equipo" },
  { icon: Globe, value: "25+", label: "Países Atendidos" },
  { icon: Target, value: "50+", label: "Salidas Exitosas" }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Formando los Líderes del Mañana
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              TICO Startup Studio es más que una incubadora – somos tu socio co-fundador. 
              Con más de 15 años de experiencia construyendo y escalando empresas, proporcionamos la 
              orientación estratégica, recursos y red necesarios para transformar ideas revolucionarias 
              en negocios líderes del mercado.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Modelo de Co-creación</h4>
                  <p className="text-muted-foreground">No solo invertimos – construimos junto a ti como verdaderos socios.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Metodología Probada</h4>
                  <p className="text-muted-foreground">Nuestro enfoque sistemático ha creado miles de millones en valor para accionistas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Red Global</h4>
                  <p className="text-muted-foreground">Accede a nuestra extensa red de inversores, mentores y expertos de la industria.</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Asociarse Con Nosotros
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 text-center glow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Nuestra Misión</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Democratizar el emprendimiento proporcionando recursos, experiencia y capital de clase mundial 
              a fundadores visionarios que construyen el futuro. Creemos que las grandes ideas pueden venir de 
              cualquier lugar, y nuestro trabajo es ayudarlas a alcanzar su máximo potencial."
            </p>
            <div className="mt-6 text-primary font-semibold">
              — El Equipo TICO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;