import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Target, 
  Users, 
  TrendingUp, 
  Code, 
  DollarSign,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Validación de Ideas",
    description: "Transforma tu concepto en un modelo de negocio viable con nuestro marco de validación probado.",
    features: ["Investigación de Mercado", "Análisis de Competencia", "Estrategia de MVP"]
  },
  {
    icon: Code,
    title: "Desarrollo de Producto",
    description: "Construye productos de vanguardia con nuestros equipos de ingeniería y diseño de clase mundial.",
    features: ["Arquitectura Técnica", "Diseño UI/UX", "Aseguramiento de Calidad"]
  },
  {
    icon: DollarSign,
    title: "Financiamiento e Inversión",
    description: "Accede a capital y redes de inversores para impulsar el crecimiento de tu startup.",
    features: ["Financiamiento Semilla", "Series A-C", "Conexiones con Inversores"]
  },
  {
    icon: Users,
    title: "Construcción de Equipos",
    description: "Recluta talento de primer nivel y construye equipos de alto rendimiento que escalen con tu visión.",
    features: ["Búsqueda Ejecutiva", "Contratación Técnica", "Construcción de Cultura"]
  },
  {
    icon: Target,
    title: "Lanzamiento al Mercado",
    description: "Lanza exitosamente con estrategias de marketing y ventas basadas en datos.",
    features: ["Estrategia de Mercado", "Desarrollo de Marca", "Optimización de Ventas"]
  },
  {
    icon: TrendingUp,
    title: "Aceleración de Crecimiento",
    description: "Escala rápidamente con nuestra experiencia en growth hacking y alianzas estratégicas.",
    features: ["Análisis de Crecimiento", "Desarrollo de Alianzas", "Expansión Internacional"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Servicios Integrales para Startups
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde el concepto inicial hasta el liderazgo del mercado, proporcionamos soporte integral 
            en cada etapa del viaje de tu startup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 glow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="w-full group">
                Saber Más
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;