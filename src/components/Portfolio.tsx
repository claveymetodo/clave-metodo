import { Card } from "@/components/ui/card";
import { Heart, Shield, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Calidez Personal",
    description: "Tratamos a cada cliente como familia, brindando atención personalizada y un ambiente cálido."
  },
  {
    icon: Shield,
    title: "Ética y Transparencia", 
    description: "Actuamos con claridad y honestidad tomando decisiones justas"
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Ofrecemos ideas creativas y adaptadas a cada cliente"
  }
];

const stats = [
  { number: "100%", label: "Enfoque Personalizado" },
  { number: "Pasión", label: "por lo que hacemos" },
  { number: "Impulso", label: "estratégico" }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Por qué elegir Clave y Método
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Somos más que asesores, somos tus aliados estratégicos. 
              Combinamos la calidez costarricense con la excelencia profesional para 
              hacer realidad tus sueños empresariales.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Nuestra Promesa</h3>
              <p className="text-muted-foreground">
                Te acompañamos desde la idea hasta el éxito. No solo creamos tu empresa, construimos 
                relaciones duraderas basadas en confianza, transparencia y resultados excepcionales.
              </p>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card/50 rounded-lg border border-border/50">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Compromiso con Costa Rica</h4>
                <p className="text-muted-foreground text-sm">
                  Conocemos a fondo el ecosistema empresarial costarricense. Nuestro objetivo es fortalecer la economía local apoyando a emprendedores, tanto nacionales como extranjeros, a materializar sus proyectos y hacer crecer sus negocios en el país.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Nuestros Valores</h3>
            
            <div className="space-y-6 mb-12">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#414f2f] mb-1">
                  {stat.number}
                </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;