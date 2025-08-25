import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'header.inicio': 'Inicio',
    'header.servicios': 'Servicios',
    'header.nuestra-historia': 'Nuestra Historia',
    'header.hablemos': 'Hablemos',
    'header.agenda': 'Agenda una Videollamada',
    
    // Hero
    'hero.title': 'Tu empresa en Costa Rica desde Cero',
    'hero.subtitle': 'Te ayudamos a establecer tu empresa en Costa Rica de manera legal y eficiente. Desde la constitución hasta el cumplimiento fiscal.',
    'hero.cta': 'Comienza Ahora',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones integrales para el establecimiento y operación de tu empresa en Costa Rica',
    
    // About
    'about.title': 'Hablemos',
    'about.subtitle': '¿Listo para establecer tu empresa en Costa Rica?',
    'about.description': 'Contáctanos hoy y te guiaremos paso a paso en todo el proceso de constitución y operación de tu empresa.',
    'about.phone': '+506 6015 3410',
    'about.email': 'info@claveymetodo.com',
    'about.cta': 'Agenda una Videollamada',
    
    // Footer
    'footer.services': 'Servicios',
    'footer.quick-links': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Header
    'header.inicio': 'Home',
    'header.servicios': 'Services',
    'header.nuestra-historia': 'Our Story',
    'header.hablemos': 'Let\'s Talk',
    'header.agenda': 'Schedule a Video Call',
    
    // Hero
    'hero.title': 'Your company in Costa Rica from Zero',
    'hero.subtitle': 'We help you establish your company in Costa Rica legally and efficiently. From incorporation to tax compliance.',
    'hero.cta': 'Get Started Now',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive solutions for establishing and operating your company in Costa Rica',
    
    // About
    'about.title': 'Let\'s Talk',
    'about.subtitle': 'Ready to establish your company in Costa Rica?',
    'about.description': 'Contact us today and we will guide you step by step through the entire process of incorporation and operation of your company.',
    'about.phone': '+506 6015 3410',
    'about.email': 'info@claveymetodo.com',
    'about.cta': 'Schedule a Video Call',
    
    // Footer
    'footer.services': 'Services',
    'footer.quick-links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  }
};

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};