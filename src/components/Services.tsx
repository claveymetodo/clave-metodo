import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Building2, 
  Target, 
  Users, 
  TrendingUp, 
  Code, 
  DollarSign,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Creación de Empresa",
    description: "Constitución legal completa, registro mercantil, cédula jurídica y todos los trámites necesarios.",
    features: ["Constitución de sociedad", "Registro mercantil", "Cédula jurídica", "Libros legales"]
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
            De la idea al éxito
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestras soluciones te ofrecen todo lo que necesitas para crear y hacer crecer tu empresa en Costa Rica. 
            Nosotros nos encargamos de los trámites y gestiones, mientras tú te enfocas en hacer que tu negocio prospere.
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

              {index === 0 ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full group">
                      Saber Más
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Nuestra Asesoría Inicial</h3>
                        <p className="text-muted-foreground mb-6">
                          Lanza tu empresa en Costa Rica de manera rápida y segura.
                          Simplificamos todo el proceso para que tu emprendimiento comience a crecer desde el primer día.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Nuestro portafolio de Servicios:</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium mb-2">1. Definición de estructura legal, tipo de sociedad y análisis tributario según tu negocio</h5>
                            <p className="text-sm text-muted-foreground">
                              Constitución legal, inscripción en el Registro Mercantil y obtención de cédula jurídica. 
                              Proceso de registro ante la Dirección General de Tributación, permisos y licencias necesarias.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">2. Apertura de Cuentas Bancarias y Operaciones Financieras</h5>
                            <p className="text-sm text-muted-foreground">
                              Apoyo en la apertura de cuentas corporativas y configuración de métodos de pago de la mano 
                              con la implementación del sistema de contabilidad inicial.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <Button variant="ghost" className="w-full group">
                  Saber Más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;