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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para ayudarte a crear tu empresa. Agenda una consulta gratuita y 
            descubre cómo podemos hacer realidad tu proyecto empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Card and Image */}
          <div className="space-y-8">
            {/* Consulta Gratuita Card */}
            <Card className="p-6 bg-gradient-to-br from-[#414f2f] via-[#414f2f] to-[#d0966e] text-white">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">💡 Consulta Gratuita</h3>
                <p className="mb-4 text-sm text-green-50">
                  Agenda una consulta sin costo y descubre cómo podemos ayudarte a crear tu empresa exitosa.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  Agendar Consulta
                </Button>
              </div>
            </Card>

            {/* Team Image */}
            <div className="flex justify-center">
              <div className="rounded-lg overflow-hidden max-w-md">
                <img 
                  src="/lovable-uploads/5a0ce76a-4393-4d59-b0f0-91329f21ff0a.png" 
                  alt="Equipo trabajando en proyectos empresariales"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-2">Envíanos un Mensaje</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nombre *</label>
                  <Input placeholder="Nombre" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Apellidos *</label>
                  <Input placeholder="Apellidos" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input type="email" placeholder="tu-email@ejemplo.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Teléfono</label>
                  <Input placeholder="+506 0000 0000" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Tipo de Empresa</label>
                <select className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm">
                  <option>🔺 Restaurante, Tech Startup, Consultorio...</option>
                  <option>Nueva Startup</option>
                  <option>Negocio Existente</option>
                  <option>Consultorio Médico</option>
                  <option>Restaurante</option>
                  <option>Tech Startup</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Mensaje *</label>
                <Textarea 
                  placeholder="Cuéntanos sobre tu proyecto empresarial..."
                  className="min-h-[100px]"
                />
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Enviar Mensaje ✉️
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Campos obligatorios. Tu información está protegida y nunca será compartida.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;