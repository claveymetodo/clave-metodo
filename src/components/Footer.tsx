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
        <div className="flex flex-wrap items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center space-x-8">
            <div>
              <span className="font-black text-xl text-white">Clave y Método</span>
              <p className="text-green-100 text-sm">Tu aliado estratégico para crear y hacer crecer empresas exitosas en Costa Rica.</p>
            </div>
            <div className="flex items-center space-x-2 text-green-100">
              <Heart className="h-4 w-4 text-[#d0966e]" />
              <span className="text-sm">Hecho con amor en Costa Rica</span>
            </div>
          </div>

          {/* Services */}
          <div className="flex items-center space-x-6 text-sm">
            <div>
              <span className="font-semibold text-white">Servicios:</span>
              <span className="text-green-100 ml-2">Registro de Empresas • Estrategia Empresarial • Contabilidad • Recursos Humanos • Cumplimiento Legal • Consultoría Integral</span>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="flex items-center space-x-6 text-sm">
            <div>
              <span className="font-semibold text-white">Enlaces Rápidos:</span>
              <span className="text-green-100 ml-2">Inicio • Nosotros • Contacto • Términos y Condiciones • Política de Privacidad</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span className="text-green-100">+506 2222-3333</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span className="text-green-100">hola@claveymetodo.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span className="text-green-100">San José, Costa Rica</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4 pt-4 border-t border-green-600">
          <span className="text-green-100 text-xs">© 2024 Clave y Método. Todos los derechos reservados. • Cubrimos todo Costa Rica – Llegamos hasta ti</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;