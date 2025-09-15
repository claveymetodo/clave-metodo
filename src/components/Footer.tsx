import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const Footer = () => {
  const { t } = useTranslation();
  
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
              {t('footer.brand-desc')}
            </p>
            <div className="flex items-center space-x-2 text-green-100">
              <Heart className="h-4 w-4 text-[#d0966e]" />
              <span className="text-sm">{t('footer.made-love')}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">{t('footer.services')}</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li><a href="/#services" className="hover:text-white transition-colors">{t('services.establishment.title')}</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">{t('services.accounting.title')}</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">{t('services.talent.title')}</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">{t('services.strategy.title')}</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">{t('services.admin.title')}</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">{t('services.support.title')}</a></li>
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-bold mb-4 text-white">{t('footer.quick-links')}</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li><a href="/#hero" className="hover:text-white transition-colors">{t('header.inicio')}</a></li>
              <li><Link to="/nuestra-historia" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t('header.nuestra-historia')}</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">{t('footer.contact')}</h4>
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
                  <div>{t('footer.location')}</div>
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