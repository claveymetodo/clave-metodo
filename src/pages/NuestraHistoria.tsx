import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Users, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const NuestraHistoria = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent">
              Nuestra Historia
            </h1>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Te la contamos:
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  Nos conocimos en 2020 trabajando juntas: Jennifer como Analista Contable y Paola como Encargada de Bodas y Grupos. Desde el primer día hicimos un excelente equipo, y de ahí nació una linda amistad.
                </p>
                
                <p className="text-lg">
                  Con el paso de los años, Jennifer fue escalando posiciones hasta convertirse en Contadora, mientras que Paola continuó desarrollando su carrera profesional en el área de Turismo.
                </p>
                
                <p className="text-lg">
                  A inicios de 2025, decidimos unir nuestra experiencia y crear nuestra primera empresa desde cero. Nos encargamos de todo el proceso: inscripción, licencias y contabilidad, ayudando a un empresario con una idea espectacular que necesitaba apoyo para desarrollarla.
                </p>
                
                <p className="text-lg">
                  Durante este proceso nos dimos cuenta de que nos apasiona formar parte de nuevas proyecciones, aperturas y hacer realidad los sueños de otros, y así nació Clave & Método.
                </p>
                
                <p className="text-lg">
                  La <strong className="text-primary">clave</strong> del negocio representa la "C" de Codero, el apellido de Jennifer, quien es la raíz financiera del negocio, liderando todo lo relacionado con finanzas y asegurando que cada proyecto cumpla con los requisitos necesarios para prosperar.
                </p>
                
                <p className="text-lg">
                  El <strong className="text-primary">método</strong> representa la "M" de Marín, el apellido de Paola, quien es la raíz estratégica del negocio; enfocándose en los detalles de apertura, gestión y crecimiento empresarial, así como en la planificación de estrategias de venta para impulsar el éxito de cada proyecto.
                </p>
              </div>
            </div>
            
            {/* Partnership Image */}
            <div className="lg:pl-8">
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src="/lovable-uploads/89607c91-dfc8-4045-be20-3419cd80d72e.png" 
                  alt="Sociedad empresarial - Jennifer y Paola trabajando juntas"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            
            {/* Partner 1 */}
            <Card className="p-8 glow-card hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/3f15b28f-149c-4cfb-a052-b8dbcb74cc9c.png" 
                      alt="Paola Marín Trejos - Co-fundadora de Clave & Método"
                      className="w-44 h-44 rounded-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">Paola Marín Trejos</h3>
                <p className="text-lg text-primary mb-6">Raíz Estratégica del Negocio | Co-fundadora</p>
                
                <div className="text-left space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    Graduada de Bachillerato en Turismo y actualmente cursando la Licenciatura con énfasis en Hoteles & Restaurantes, comencé mi carrera en el área de Recepción y Reservas, y luego avancé al área Comercial como Gerente de Ventas.
                  </p>
                  <p className="text-muted-foreground">
                    Acepté el reto de ser Coordinadora de Bodas y Grupos, sumando un valor extra a mi trayectoria al crear eventos y retiros inolvidables desde cero, lo que se ha convertido en una de mis experiencias favoritas.
                  </p>
                  <p className="text-muted-foreground">
                    También tuve la oportunidad de formarme en Gestión de Talento Humano bajo la mentoría de una excelente profesional, aprendiendo todo sobre recursos humanos, la creación de procesos, la gestión y motivación del talento.
                  </p>
                  <p className="text-muted-foreground">
                    Actualmente lidero la apertura y operación estratégica de una empresa emergente en el área de Turismo, un proyecto que me apasiona y que me permite ser parte de todo el proceso de crecimiento de un negocio.
                  </p>
                  <p className="text-muted-foreground">
                    La experiencia de aprender constantemente y ver cómo un proyecto se materializa y funciona es invaluable.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">13 Años</div>
                    <div className="text-xs text-muted-foreground">Experiencia</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">Revenue & Hospitality</div>
                    <div className="text-xs text-muted-foreground">Especialidad</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">100%</div>
                    <div className="text-xs text-muted-foreground">Creatividad</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Partner 2 */}
            <Card className="p-8 glow-card hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/cda22137-d055-4bf6-99b3-abcec91315cf.png" 
                      alt="Jennifer Cordero Obregón - Co-fundadora de Clave & Método"
                      className="w-44 h-44 rounded-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">Jennifer Cordero Obregón</h3>
                <p className="text-lg text-primary mb-6">Raíz Financiera del Negocio | Co-fundadora</p>
                
                <div className="text-left space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    Aquí va la introducción de tu socio, su experiencia profesional, 
                    especialidades y qué aporta al equipo de Clave y Método. 
                    Destaca su experiencia complementaria y su rol en la empresa.
                  </p>
                  <p className="text-muted-foreground">
                    Incluye su formación, certificaciones relevantes, y las áreas 
                    específicas en las que se especializa dentro de los servicios empresariales.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">X+ Años</div>
                    <div className="text-xs text-muted-foreground">Experiencia</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">X+ Clientes</div>
                    <div className="text-xs text-muted-foreground">Satisfechos</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">Expert</div>
                    <div className="text-xs text-muted-foreground">Certificado</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Together Section */}
          <Card className="p-12 glow-card hover:shadow-glow transition-all duration-300 bg-gradient-to-r from-[#414f2f]/10 to-[#d0966e]/10 backdrop-blur-sm border-border/50">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                Juntas Hacemos la Diferencia
              </h2>
              
              <div className="max-w-md mx-auto mb-8">
                <div className="w-full h-64 rounded-lg overflow-hidden bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/0aa75494-7ac1-4e5b-aaf6-549cd602880d.png" 
                      alt="Jennifer y Paola - Fundadoras de Clave & Método trabajando juntas"
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg text-muted-foreground">
                  Nuestra unión nació de una visión compartida: simplificar el proceso de creación y 
                  crecimiento empresarial en Costa Rica. Combinamos nuestras diferentes especialidades y 
                  experiencias para ofrecer un servicio integral que realmente marque la diferencia.
                </p>
                
                <p className="text-lg text-muted-foreground">
                  Creemos firmemente que cada empresario merece tener acceso a asesoría profesional de calidad, 
                  sin obstáculos. Por eso, nos dedicamos a ser el puente entre tu visión 
                  empresarial y su realización exitosa.
                </p>

                <div className="grid md:grid-cols-3 gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Enfoque Personalizado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Pasión</div>
                    <div className="text-sm text-muted-foreground">por lo que hacemos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Impulso</div>
                    <div className="text-sm text-muted-foreground">estratégico</div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link to="/#about">
                  <Button className="bg-primary hover:bg-[#d0966e] text-primary-foreground px-8 py-3 text-lg transition-colors duration-300">
                    Hablemos de tu Proyecto
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default NuestraHistoria;