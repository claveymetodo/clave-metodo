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
        <div className="text-center mb-20">
          {/* Content removed - moved to About section */}
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
                <Input placeholder="Nombre de tu nuevo negocio" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Tipo de Proyecto</label>
                <select className="w-full h-11 px-3 rounded-lg border border-input bg-background">
                  <option>Nuevo Negocio</option>
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

        </div>
      </div>
    </section>
  );
};

export default Contact;