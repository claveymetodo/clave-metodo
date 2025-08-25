import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#414f2f] text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="font-bold text-xl mb-4">
              <span className="text-white">Clave y Método</span>
            </div>
            <p className="text-green-100 mb-4 text-sm leading-relaxed">
              Tu aliado estratégico para crear y hacer crecer empresas exitosas en Costa Rica.
            </p>
            <div className="flex items-center space-x-2 text-green-100">
              <Heart className="h-4 w-4 text-[#d0966e]" />
              <span className="text-sm">Hecho con amor en Costa Rica</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li><a href="/#services" className="hover:text-white transition-colors">Creación de Empresa</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Contabilidad</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Gestión del Talento</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Estrategia Empresarial</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Gestión Integral Administrativa</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Acompañamiento Personalizado</a></li>
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-bold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contacto</h4>
            <div className="space-y-3 text-green-100 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#d0966e]" />
                <span>+506 2222-3333</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#d0966e]" />
                <span>hola@claveymetodo.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-[#d0966e]" />
                <div>
                  <div>Cubrimos todo Costa Rica – Llegamos hasta ti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;