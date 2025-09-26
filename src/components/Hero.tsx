import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, Clock, Zap } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import logo from "@/assets/logo.svg";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="hero" className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img src={logo} alt="Clave & Método" className="h-20 w-auto" />
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              {t('hero.title').split('Costa Rica').map((part, index, array) => (
                index === array.length - 1 ? part : 
                <>
                  {part}
                  <span className="costa-rica-gradient">Costa Rica</span>
                </>
              ))}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>

            {/* Service highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground">{t('hero.feature1')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground">{t('hero.feature2')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground">{t('hero.feature3')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground">{t('hero.feature4')}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about">
                <Button className="bg-primary hover:bg-[#d0966e] text-primary-foreground px-8 py-3 text-lg transition-colors duration-300 w-full sm:w-auto">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">{t('hero.personal')}</div>
              </div>
              <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">{t('hero.availability')}</div>
              </div>
              <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">{t('hero.solutions')}</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/53a5eff4-f294-47be-9ca5-417836b29ace.png"
              alt="Equipo de consultores profesionales trabajando en reunión colaborativa"
              className="w-full h-auto rounded-2xl"
            />
            
            {/* Legal badge overlay */}
            <div className="absolute bottom-6 left-6 bg-accent/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <div className="font-semibold">{t('hero.legal')}</div>
                <div className="text-sm opacity-90">{t('hero.compliance')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;