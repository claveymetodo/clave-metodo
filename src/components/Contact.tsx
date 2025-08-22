import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            ¿Listo para Comenzar a Construir?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hablemos sobre tu visión y exploremos cómo TICO puede ayudar a dar vida a tu startup. 
            Ponte en contacto con nuestro equipo hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 glow-card">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nombre</label>
                  <Input placeholder="Juan" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Apellido</label>
                  <Input placeholder="Pérez" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="juan@ejemplo.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Empresa</label>
                <Input placeholder="Nombre de tu startup" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Tipo de Proyecto</label>
                <select className="w-full h-11 px-3 rounded-lg border border-input bg-background">
                  <option>Nueva Startup</option>
                  <option>Negocio Existente</option>
                  <option>Oportunidad de Inversión</option>
                  <option>Asociación</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Mensaje</label>
                <Textarea 
                  placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="gradient" size="lg" className="w-full">
                <Send className="mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Ponte en contacto</h3>
              <p className="text-muted-foreground mb-8">
                ¿Listo para transformar tu idea en la próxima gran cosa? Nuestro equipo está aquí para 
                ayudarte a navegar cada paso del viaje de tu startup.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Escríbenos</div>
                  <div className="text-muted-foreground">hola@ticostudio.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Llámanos</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Visítanos</div>
                  <div className="text-muted-foreground">
                    123 Innovation Drive<br />
                    San Francisco, CA 94105
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <Card className="p-6 bg-gradient-subtle border-border/50">
              <h4 className="font-semibold mb-2">Horarios de Oficina</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>Lunes - Viernes: 9:00 AM - 6:00 PM PST</div>
                <div>Sábado: 10:00 AM - 4:00 PM PST</div>
                <div>Domingo: Cerrado</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;