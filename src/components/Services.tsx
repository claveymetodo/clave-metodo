import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Building2, 
  Calculator,
  Target, 
  Users, 
  TrendingUp, 
  Code, 
  DollarSign,
  ArrowRight,
  FileText
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Creación de Empresa",
    description: "Constitución legal completa, registro mercantil, cédula jurídica y todos los trámites necesarios.",
    features: ["Constitución de sociedad", "Registro mercantil", "Cédula jurídica", "Libros legales"]
  },
  {
    icon: Calculator,
    title: "Contabilidad",
    description: "Llevamos la contabilidad completa de tu empresa con reportes mensuales y declaraciones.",
    features: ["Contabilidad mensual", "Declaraciones fiscales", "Estados financieros", "Reportes gerenciales"]
  },
  {
    icon: Users,
    title: "Gestión del Talento",
    description: "Gestión completa de personal, planillas y cumplimiento laboral.",
    features: ["Reclutamiento y Selección de Personal", "Administración de planilla", "Gestión Laboral"]
  },
  {
    icon: Target,
    title: "Estrategia Empresarial",
    description: "Desarrollamos planes de negocio personalizados y estrategias de crecimiento para tu empresa.",
    features: ["Plan de negocio", "Análisis de mercado", "Estrategia de marketing", "Proyecciones financieras"]
  },
  {
    icon: FileText,
    title: "Gestión Integral Administrativa",
    description: "Mantenemos tus finanzas organizadas y bajo control, asegurando que todas tus facturas y cuentas estén al día.",
    features: ["Facturación electrónica", "Cuentas por pagar y cobrar", "Seguimiento a pagos", "Auditoría"]
  },
  {
    icon: TrendingUp,
    title: "Acompañamiento Personalizado",
    description: "Impulso al crecimiento y desarrollo de tu negocio.",
    features: ["Implementación de sistemas contables digitales", "Migración a Sistemas especializados", "Soporte continuo"]
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
                            <div className="space-y-2">
                              <p className="text-sm text-muted-foreground">
                                Constitución legal, inscripción en el Registro Mercantil y obtención de cédula jurídica.
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Proceso de registro ante la Dirección General de Tributación, permisos y licencias necesarias.
                              </p>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">2. Apertura de Cuentas Bancarias y Operaciones Financieras</h5>
                            <div className="space-y-2">
                              <p className="text-sm text-muted-foreground">
                                Apoyo en la apertura de cuentas corporativas y configuración de métodos de pago de la mano con la implementación del sistema de contabilidad inicial.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : index === 1 ? (
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
                        <h3 className="text-2xl font-bold mb-2">Nuestras Soluciones Contables</h3>
                        <p className="text-muted-foreground mb-6">
                          Mantén tus finanzas en orden y cumple con tus obligaciones tributarias sin preocupaciones.
                          Te ofrecemos información clara y confiable para que tomes decisiones estratégicas y tu negocio siga creciendo sin contratiempos.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Nuestro portafolio de Servicios:</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium mb-2">1. Elaboración y Presentación de Declaraciones de IVA</h5>
                            <p className="text-sm text-muted-foreground">
                              Registro y verificación de facturas emitidas y recibidas, cálculo del IVA a pagar o crédito fiscal, presentación en ATV o TRIBU-CR.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">2. Declaración de Impuesto sobre la Renta</h5>
                            <p className="text-sm text-muted-foreground">
                              Cálculo de renta líquida gravable; preparación y presentación en la plataforma tributaria correspondiente.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">3. Contabilidad Mensual Completa</h5>
                            <p className="text-sm text-muted-foreground">
                              Registro de ingresos, gastos, activos y pasivos y conciliaciones bancarias.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">4. Preparación de Estados Financieros</h5>
                            <p className="text-sm text-muted-foreground">
                              Estado de resultados, balance general y flujo de efectivo, con interpretación clara de los resultados para una mejor toma de decisiones.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : index === 2 ? (
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
                        <h3 className="text-2xl font-bold mb-2">Nuestra Gestión de Talento Humano</h3>
                        <p className="text-muted-foreground mb-6">
                          Mantén tu equipo organizado y gestiona tus recursos humanos sin preocupaciones.
                          Nos encargamos del cumplimiento laboral ofreciéndote información clara y confiable para que tu negocio crezca con un equipo motivado y bien gestionado.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Nuestro portafolio de Servicios:</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium mb-2">1. Proceso de reclutamiento completo</h5>
                            <p className="text-sm text-muted-foreground">
                              Publicación de vacantes, entrevistas, evaluación de candidatos y reportes de terna.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">2. Gestión de ofertas y contratos laborales</h5>
                            <div className="space-y-2">
                              <p className="text-sm text-muted-foreground">
                                Elaboración y revisión de contratos según la Legislación Costarricense.
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Manejos de permisos, licencias, reporte de vacaciones.
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Expedientes digitales y documentos legales del personal.
                              </p>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">3. Administración de planillas y plataformas de patrono</h5>
                            <div className="space-y-2">
                              <p className="text-sm text-muted-foreground">
                                Cálculo de salarios, deducciones y prestaciones.
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Declaración salarial para CCSS e INS.
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Desarrollo de Actuariales empresariales.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : index === 3 ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full group">
                      Saber Más
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Nuestra Dirección de Crecimiento Empresarial</h3>
                        <p className="text-muted-foreground mb-6">
                          Desarrollamos un plan integral para guiar el crecimiento de tu empresa. Desde el análisis del mercado hasta la planificación financiera, te ayudamos a definir objetivos claros, tomar decisiones estratégicas y maximizar tus oportunidades de éxito.
                        </p>
                      </div>
                      
                      <div>
                        <div className="space-y-6">
                          <div>
                            <h5 className="font-medium mb-2">1. Primeros pasos de crecimiento estructural</h5>
                            <p className="text-sm text-muted-foreground">
                              Creación de guía estratégica con la visión general del negocio, servicios, propuesta de valor, ventaja competitiva y estructura organizacional que darán claridad y dirección a tu nuevo negocio.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">2. Entender tu entorno de operación</h5>
                            <p className="text-sm text-muted-foreground">
                              Segmentación de mercados y clientes potenciales, competencia, tendencias, demanda y oportunidades para anticipar retos.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">3. Plan personalizado para atraer y fidelizar clientes</h5>
                            <p className="text-sm text-muted-foreground">
                              Público objetivo, canales de promoción, precios y distribución así como la medición de resultados que nos permitirá ajustar el enfoque del negocio.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">4. Elaboración de presupuestos como herramienta clave en la planificación estratégica</h5>
                            <p className="text-sm text-muted-foreground">
                              Proyección de ingresos y gastos identificando la rentabilidad y capacidad de crecimiento continuo dando énfasis en donde debemos colocar nuestros esfuerzos, inversiones y recursos para lograr los objetivos.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">5. Ajustes planificados según la adaptabilidad de los cambios</h5>
                            <p className="text-sm text-muted-foreground">
                              Permite al negocio ser flexible y resiliente, maximizando oportunidades y minimizando riesgos financieros.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">6. Acompañamiento estratégico y desarrollo de nuevos proyectos</h5>
                            <div className="space-y-2">
                              <p className="text-sm text-muted-foreground">
                                Nuestra asesoría continua para mantener el control operativo, optimizar procesos y desarrollar nuevos proyectos estratégicos.
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Tu negocio seguirá creciendo de manera sostenible y adaptándose a nuevas oportunidades del mercado.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : index === 4 ? (
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
                        <h3 className="text-2xl font-bold mb-2">Nuestra Gestión Administrativa</h3>
                        <p className="text-muted-foreground mb-6">
                          Ofrecemos la configuración de tu sistema de facturación electrónica, emisión y control de facturas, complementado con reportes periódicos para mantener tus finanzas claras y organizadas.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Nuestro portafolio de Servicios:</h4>
                        
                        <div className="space-y-6">
                          <div>
                            <h5 className="font-medium mb-2">Generación de facturas que cumplan con los requisitos fiscales</h5>
                            <p className="text-sm text-muted-foreground">
                              Asegurar que cada factura tenga toda la información legal necesaria: datos de la empresa, cliente, monto, impuestos, productos o servicios para evitar errores que puedan causar sanciones o problemas contables.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">Generar y monitorear todas las facturas emitidas</h5>
                            <p className="text-sm text-muted-foreground">
                              Evitar duplicados y controlar que cada factura esté contabilizada para la contabilidad y reportes fiscales.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">Control de Cuentas por Pagar y por Cobrar</h5>
                            <p className="text-sm text-muted-foreground">
                              Seguimiento a proveedores y servicios, asegurando un flujo de operaciones planificado y constante.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">Seguimiento de pagos recibidos, pendientes y atrasados</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : index === 5 ? (
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
                        <h3 className="text-2xl font-bold mb-2">Nuestro Acompañamiento Adaptado</h3>
                      </div>
                      
                      <div>
                        <div className="space-y-6">
                          <div>
                            <h5 className="font-medium mb-2">1. Configuración inicial del software contable según las necesidades de la empresa</h5>
                            <p className="text-sm text-muted-foreground">
                              Capacitación, ajustes y personalización del equipo para el uso correcto de plataformas.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">2. Asesoría en la incorporación de nuevos sistemas o plataformas digitales</h5>
                            <p className="text-sm text-muted-foreground">
                              Planificación y ejecución de migración de datos y verificación del funcionamiento correcto.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">3. Acompañamiento durante el uso diario de los sistemas y ayuda en la resolución de problemas.</h5>
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