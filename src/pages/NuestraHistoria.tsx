import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Users, Target, TrendingUp, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const NuestraHistoria = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('historia.back')}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent">
              {t('historia.title')}
            </h1>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t('historia.subtitle')}
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  {t('historia.p1')}
                </p>
                
                <p className="text-lg">
                  {t('historia.p2')}
                </p>
                
                <p className="text-lg">
                  {t('historia.p3')}
                </p>
                
                <p className="text-lg">
                  {t('historia.p4')}
                </p>
                
                <p className="text-lg">
                  {t('historia.p5')}
                </p>
                
                <p className="text-lg">
                  {t('historia.p6')}
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
                <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/a1146fe9-f133-46a6-a363-a06d449a51d8.png" 
                      alt="Paola Marín Trejos - Co-fundadora de Clave & Método"
                      className="w-52 h-52 rounded-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">{t('historia.paola.name')}</h3>
                <p className="text-lg text-primary mb-6">{t('historia.paola.title')}</p>
                
                <div className="text-left space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    {t('historia.paola.p1')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('historia.paola.p2')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('historia.paola.p3')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('historia.paola.p4')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('historia.paola.p5')}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">{t('historia.paola.experience')}</div>
                    <div className="text-xs text-muted-foreground">{t('historia.paola.experience-label')}</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">{t('historia.paola.specialty')}</div>
                    <div className="text-xs text-muted-foreground">{t('historia.paola.specialty-label')}</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">{t('historia.paola.creativity')}</div>
                    <div className="text-xs text-muted-foreground">{t('historia.paola.creativity-label')}</div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="https://www.linkedin.com/in/paola-mar%C3%ADn-trejos-493086156/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#0077B5] hover:bg-[#005885] text-white rounded-lg transition-colors duration-300"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    {t('historia.linkedin')}
                  </a>
                </div>
              </div>
            </Card>

            {/* Partner 2 */}
            <Card className="p-8 glow-card hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/be22eb56-335d-46dd-ad1c-1c7033c85e5e.png" 
                      alt="Jennifer Cordero Obregón - Co-fundadora de Clave & Método"
                      className="w-44 h-44 rounded-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">{t('historia.jennifer.name')}</h3>
                <p className="text-lg text-primary mb-6">{t('historia.jennifer.title')}</p>
                
                <div className="text-left space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    {t('historia.jennifer.p1')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('historia.jennifer.p2')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('historia.jennifer.p3')}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">{t('historia.jennifer.experience')}</div>
                    <div className="text-xs text-muted-foreground">{t('historia.jennifer.experience-label')}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">{t('historia.jennifer.clients')}</div>
                    <div className="text-xs text-muted-foreground">{t('historia.jennifer.clients-label')}</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">{t('historia.jennifer.expert')}</div>
                    <div className="text-xs text-muted-foreground">{t('historia.jennifer.expert-label')}</div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="https://www.linkedin.com/in/jennifer-corderoo/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#0077B5] hover:bg-[#005885] text-white rounded-lg transition-colors duration-300"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    {t('historia.linkedin')}
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Together Section */}
          <Card className="p-12 glow-card hover:shadow-glow transition-all duration-300 bg-gradient-to-r from-[#414f2f]/10 to-[#d0966e]/10 backdrop-blur-sm border-border/50">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                {t('historia.together.title')}
              </h2>
              
              <div className="max-w-md mx-auto mb-8">
                <div className="w-full h-64 rounded-lg overflow-hidden bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/866a21e8-1502-4934-b70e-965ea1ca5312.png" 
                      alt="Jennifer y Paola - Fundadoras de Clave & Método trabajando juntas"
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg text-muted-foreground">
                  {t('historia.together.p1')}
                </p>
                
                <p className="text-lg text-muted-foreground">
                  {t('historia.together.p2')}
                </p>

                <div className="grid md:grid-cols-3 gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{t('historia.together.focus')}</div>
                    <div className="text-sm text-muted-foreground">{t('historia.together.focus-label')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{t('historia.together.passion')}</div>
                    <div className="text-sm text-muted-foreground">{t('historia.together.passion-label')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{t('historia.together.drive')}</div>
                    <div className="text-sm text-muted-foreground">{t('historia.together.drive-label')}</div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link to="/#about">
                  <Button className="bg-primary hover:bg-[#d0966e] text-primary-foreground px-8 py-3 text-lg transition-colors duration-300">
                    {t('historia.together.cta')}
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