import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#414f2f] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="font-black text-2xl mb-4">
              <span className="text-white">Clave y Método</span>
            </div>
            <p className="text-green-100 mb-6 max-w-md">
              Tu aliado estratégico para crear y hacer crecer empresas exitosas en Costa Rica.
            </p>
            <div className="flex items-center space-x-2 text-green-100">
              <Heart className="h-5 w-5 text-[#d0966e]" />
              <span className="text-sm">Hecho con amor en Costa Rica</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-3 text-green-100">
              <li><a href="#" className="hover:text-white transition-colors">Registro de Empresas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Estrategia Empresarial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contabilidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recursos Humanos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cumplimiento Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultoría Integral</a></li>
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-green-100">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <Separator className="my-8 bg-green-600" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-white">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-green-100">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+506 2222-3333</span>
              </div>
              <div className="flex items-center space-x-2 text-green-100">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hola@claveymetodo.com</span>
              </div>
              <div className="flex items-center space-x-2 text-green-100">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">San José, Costa Rica<br />Zona centro</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <p className="text-green-100 text-sm">
              Cubrimos todo Costa Rica – Llegamos hasta ti
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-green-600" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-green-100 text-sm mb-4 md:mb-0">
            © 2024 Clave y Método. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;