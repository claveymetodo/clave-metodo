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
            Hablemos de tu <span className="bg-gradient-to-r from-[#414f2f] to-[#d0966e] bg-clip-text text-transparent">Proyecto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para ayudarte a crear tu empresa. Agenda una consulta gratuita y 
            descubre cómo podemos hacer realidad tu proyecto empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Card and Image */}
          <div className="space-y-6">
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

            {/* Contact Information Cards */}
            <Card className="p-4 bg-card">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#414f2f] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Teléfono</div>
                  <div className="text-sm text-muted-foreground">+ 506 2222-3333</div>
                  <div className="text-xs text-muted-foreground">Lunes a Viernes 8:00 AM - 6:00 PM</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#414f2f] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">✉️</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Email</div>
                  <div className="text-sm text-muted-foreground">info@claveymetodo.com</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="p-12">
            <h3 className="text-3xl font-bold mb-3">Envíanos un Mensaje</h3>
            <p className="text-base text-muted-foreground mb-8">
              Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
            </p>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nombre *</label>
                  <Input placeholder="Nombre" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Apellidos *</label>
                  <Input placeholder="Apellidos" className="h-12" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input type="email" placeholder="tu-email@ejemplo.com" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Teléfono</label>
                  <Input placeholder="+506 0000 0000" className="h-12" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Mensaje *</label>
                <Textarea 
                  placeholder="Cuéntanos sobre tu proyecto empresarial..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full h-12 text-lg bg-[#414f2f] hover:bg-[#414f2f]/90 text-white">
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