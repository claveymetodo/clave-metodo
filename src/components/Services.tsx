import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useTranslation } from "@/contexts/TranslationContext";
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

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
  {
    icon: Building2,
    title: t('services.establishment.title'),
    description: t('services.establishment.desc'),
    features: [
      t('services.establishment.incorporation'), 
      t('services.establishment.registry'), 
      t('services.establishment.corporate-id'), 
      t('services.establishment.legal-books')
    ]
  },
  {
    icon: Calculator,
    title: t('services.accounting.title'),
    description: t('services.accounting.desc'),
    features: [
      t('services.accounting.monthly'), 
      t('services.accounting.tax-declarations'), 
      t('services.accounting.financial-statements'), 
      t('services.accounting.management-reports')
    ]
  },
  {
    icon: Users,
    title: t('services.talent.title'),
    description: t('services.talent.desc'),
    features: [
      t('services.talent.recruitment'), 
      t('services.talent.payroll'), 
      t('services.talent.labor-management')
    ]
  },
  {
    icon: Target,
    title: t('services.strategy.title'),
    description: t('services.strategy.desc'),
    features: [
      t('services.strategy.business-plan'), 
      t('services.strategy.market-analysis'), 
      t('services.strategy.marketing-strategy'), 
      t('services.strategy.financial-projections')
    ]
  },
  {
    icon: FileText,
    title: t('services.admin.title'),
    description: t('services.admin.desc'),
    features: [
      t('services.admin.electronic-billing'), 
      t('services.admin.accounts'), 
      t('services.admin.payment-tracking'), 
      t('services.admin.audit')
    ]
  },
  {
    icon: TrendingUp,
    title: t('services.support.title'),
    description: t('services.support.desc'),
    features: [
      t('services.support.digital-systems'), 
      t('services.support.system-migration'), 
      t('services.support.continuous')
    ]
  }
];

  const [openDialog, setOpenDialog] = useState<number | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    
    if (serviceParam) {
      const serviceMap: { [key: string]: number } = {
        'creacion': 0,
        'contabilidad': 1,
        'talento': 2,
        'estrategia': 3,
        'gestion': 4,
        'acompanamiento': 5
      };
      
      const serviceIndex = serviceMap[serviceParam];
      if (serviceIndex !== undefined) {
        setTimeout(() => {
          setOpenDialog(serviceIndex);
        }, 500);
      }
    }
  }, []);
  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
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
                <Dialog open={openDialog === 0} onOpenChange={(open) => setOpenDialog(open ? 0 : null)}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full group">
                      {t('services.more')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{t('popup.advisory.title')}</h3>
                        <p className="text-muted-foreground mb-6">
                          {t('popup.advisory.desc')}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-4">{t('popup.advisory.portfolio')}</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium mb-2">{t('portfolio.legal-structure.title')}</h5>
                            <div className="space-y-2">
                              <p className="text-sm text-muted-foreground">
                                {t('portfolio.legal-structure.desc')}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {t('portfolio.incorporation.desc')}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {t('portfolio.tax-registration.desc')}
                              </p>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">{t('portfolio.banking.title')}</h5>
                            <div className="space-y-2">
                              <p className="text-sm text-muted-foreground">
                                {t('portfolio.banking.desc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : index === 1 ? (
                <Dialog open={openDialog === 1} onOpenChange={(open) => setOpenDialog(open ? 1 : null)}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full group">
                      {t('services.more')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{t('popup.accounting.title')}</h3>
                        <p className="text-muted-foreground mb-6">
                          {t('popup.accounting.desc')}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-4">{t('popup.advisory.portfolio')}</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium mb-2">1. {t('popup.accounting.vat-title')}</h5>
                            <p className="text-sm text-muted-foreground">
                              {t('popup.accounting.vat-desc')}
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">2. {t('popup.accounting.income-title')}</h5>
                            <p className="text-sm text-muted-foreground">
                              {t('popup.accounting.income-desc')}
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">3. {t('popup.accounting.monthly-title')}</h5>
                            <p className="text-sm text-muted-foreground">
                              {t('popup.accounting.monthly-desc')}
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">4. {t('popup.accounting.statements-title')}</h5>
                            <p className="text-sm text-muted-foreground">
                              {t('popup.accounting.statements-desc')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : index === 2 ? (
                <Dialog open={openDialog === 2} onOpenChange={(open) => setOpenDialog(open ? 2 : null)}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full group">
                      {t('services.more')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{t('popup.talent.title')}</h3>
                        <p className="text-muted-foreground mb-6">
                          {t('popup.talent.desc')}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-4">{t('popup.advisory.portfolio')}</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium mb-2">1. {t('popup.talent.recruitment-title')}</h5>
                            <p className="text-sm text-muted-foreground">
                              {t('popup.talent.recruitment-desc')}
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">2. {t('popup.talent.contracts-title')}</h5>
                            <div className="space-y-2">
                              <p className="text-sm text-muted-foreground">
                                {t('popup.talent.contracts-desc1')}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {t('popup.talent.contracts-desc2')}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {t('popup.talent.contracts-desc3')}
                              </p>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">3. {t('popup.talent.payroll-title')}</h5>
                            <div className="space-y-2">
                              <p className="text-sm text-muted-foreground">
                                {t('popup.talent.payroll-desc1')}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {t('popup.talent.payroll-desc2')}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {t('popup.talent.payroll-desc3')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : index === 3 ? (
                <Dialog open={openDialog === 3} onOpenChange={(open) => setOpenDialog(open ? 3 : null)}>
                  <DialogTrigger asChild>
                     <Button variant="ghost" className="w-full group">
                       {t('services.more')}
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
                <Dialog open={openDialog === 4} onOpenChange={(open) => setOpenDialog(open ? 4 : null)}>
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
                            <h5 className="font-medium mb-2">1. Generación de facturas que cumplan con los requisitos fiscales</h5>
                            <p className="text-sm text-muted-foreground">
                              Asegurar que cada factura tenga toda la información legal necesaria: datos de la empresa, cliente, monto, impuestos, productos o servicios para evitar errores que puedan causar sanciones o problemas contables.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">2. Generar y monitorear todas las facturas emitidas</h5>
                            <p className="text-sm text-muted-foreground">
                              Evitar duplicados y controlar que cada factura esté contabilizada para la contabilidad y reportes fiscales.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">3. Control de Cuentas por Pagar y por Cobrar</h5>
                            <p className="text-sm text-muted-foreground">
                              Seguimiento a proveedores y servicios, asegurando un flujo de operaciones planificado y constante.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">4. Seguimiento de pagos recibidos, pendientes y atrasados</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : index === 5 ? (
                <Dialog open={openDialog === 5} onOpenChange={(open) => setOpenDialog(open ? 5 : null)}>
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