import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/contexts/TranslationContext";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight px-4">
          {"\u200A"}{t('about.title')}
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
            {t('about.subtitle')}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Consultation Card */}
          <div className="lg:w-1/3">
            <Card className="p-8 bg-gradient-to-r from-[#414f2f] to-[#d0966e] text-white rounded-r-none lg:rounded-r-none rounded-l-lg">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">💡</span> {t('about.consultation')}
                </h3>
                <p className="mb-6 text-sm text-white/90 leading-relaxed">
                  {t('about.consultation-desc')}
                </p>
                <Button 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-6 py-2"
                >
                  {t('about.schedule')}
                </Button>
              </div>
            </Card>
            
            {/* Team Image */}
            <div className="mt-8">
              <img 
                src="/lovable-uploads/f62a7155-c2f1-4741-80cd-21f5930b82e9.png" 
                alt="Equipo trabajando en proyectos empresariales"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          {/* Right Side - Contact Form */}
          <div className="lg:w-2/3">
            <Card className="p-12 rounded-l-none lg:rounded-l-none rounded-r-lg">
              <h3 className="text-3xl font-bold mb-3">{t('about.form-title')}</h3>
              <p className="text-base text-muted-foreground mb-8">
                {t('about.form-desc')}
              </p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t('about.name')} *</label>
                    <Input placeholder={t('about.name')} className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t('about.lastname')} *</label>
                    <Input placeholder={t('about.lastname')} className="h-12" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t('about.email')} *</label>
                    <Input type="email" placeholder="tu@email.com" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t('about.phone')}</label>
                    <Input placeholder="+506 0000-0000" className="h-12" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">{t('about.company-type')}</label>
                  <Input placeholder={t('about.company-placeholder')} className="h-12" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">{t('about.message')} *</label>
                  <Textarea 
                    placeholder={t('about.message-placeholder')}
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full h-12 text-lg bg-[#414f2f] hover:bg-[#414f2f]/90 text-white">
                  {t('about.send')}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {t('about.required')}
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
