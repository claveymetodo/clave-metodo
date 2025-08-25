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
    
    // Nuestra Historia Page
    'historia.back': 'Volver al inicio',
    'historia.title': 'Nuestra Historia',
    'historia.subtitle': 'Te la contamos:',
    'historia.p1': 'Nos conocimos en 2020 trabajando juntas: Jennifer como Analista Contable y Paola como Encargada de Bodas y Grupos. Desde el primer día hicimos un excelente equipo, y de ahí nació una linda amistad.',
    'historia.p2': 'Con el paso de los años, Jennifer fue escalando posiciones hasta convertirse en Contadora, mientras que Paola continuó desarrollando su carrera profesional en el área de Turismo.',
    'historia.p3': 'A inicios de 2025, decidimos unir nuestra experiencia y crear nuestra primera empresa desde cero. Nos encargamos de todo el proceso: inscripción, licencias y contabilidad, ayudando a un empresario con una idea espectacular que necesitaba apoyo para desarrollarla.',
    'historia.p4': 'Durante este proceso nos dimos cuenta de que nos apasiona formar parte de nuevas proyecciones, aperturas y hacer realidad los sueños de otros, y así nació Clave & Método.',
    'historia.p5': 'La clave del negocio representa la "C" de Codero, el apellido de Jennifer, quien es la raíz financiera del negocio, liderando todo lo relacionado con finanzas y asegurando que cada proyecto cumpla con los requisitos necesarios para prosperar.',
    'historia.p6': 'El método representa la "M" de Marín, el apellido de Paola, quien es la raíz estratégica del negocio; enfocándose en los detalles de apertura, gestión y crecimiento empresarial, así como en la planificación de estrategias de venta para impulsar el éxito de cada proyecto.',
    'historia.paola.name': 'Paola Marín Trejos',
    'historia.paola.title': 'Raíz Estratégica del Negocio | Co-fundadora',
    'historia.paola.p1': 'Graduada de Bachillerato en Turismo y actualmente cursando la Licenciatura con énfasis en Hoteles & Restaurantes, comencé mi carrera en el área de Recepción y Reservas, y luego avancé al área Comercial como Gerente de Ventas.',
    'historia.paola.p2': 'Acepté el reto de ser Coordinadora de Bodas y Grupos, sumando un valor extra a mi trayectoria al crear eventos y retiros inolvidables desde cero, lo que se ha convertido en una de mis experiencias favoritas.',
    'historia.paola.p3': 'También tuve la oportunidad de formarme en Gestión de Talento Humano bajo la mentoría de una excelente profesional, aprendiendo todo sobre recursos humanos, la creación de procesos, la gestión y motivación del talento.',
    'historia.paola.p4': 'Actualmente lidero la apertura y operación estratégica de una empresa emergente en el área de Turismo, un proyecto que me apasiona y que me permite ser parte de todo el proceso de crecimiento de un negocio.',
    'historia.paola.p5': 'La experiencia de aprender constantemente y ver cómo un proyecto se materializa y funciona es invaluable.',
    'historia.paola.experience': '13 Años',
    'historia.paola.experience-label': 'Experiencia',
    'historia.paola.specialty': 'Revenue & Hospitality',
    'historia.paola.specialty-label': 'Especialidad',
    'historia.paola.creativity': '100%',
    'historia.paola.creativity-label': 'Creatividad',
    'historia.jennifer.name': 'Jennifer Cordero Obregón',
    'historia.jennifer.title': 'Raíz Financiera del Negocio | Co-fundadora',
    'historia.jennifer.p1': 'Aquí va la introducción de tu socio, su experiencia profesional, especialidades y qué aporta al equipo de Clave y Método. Destaca su experiencia complementaria y su rol en la empresa.',
    'historia.jennifer.p2': 'Incluye su formación, certificaciones relevantes, y las áreas específicas en las que se especializa dentro de los servicios empresariales.',
    'historia.jennifer.experience': 'X+ Años',
    'historia.jennifer.experience-label': 'Experiencia',
    'historia.jennifer.clients': 'X+ Clientes',
    'historia.jennifer.clients-label': 'Satisfechos',
    'historia.jennifer.expert': 'Expert',
    'historia.jennifer.expert-label': 'Certificado',
    'historia.linkedin': 'Ver perfil de LinkedIn',
    'historia.together.title': 'Juntas Hacemos la Diferencia',
    'historia.together.p1': 'Nuestra unión nació de una visión compartida: simplificar el proceso de creación y crecimiento empresarial en Costa Rica. Combinamos nuestras diferentes especialidades y experiencias para ofrecer un servicio integral que realmente marque la diferencia.',
    'historia.together.p2': 'Creemos firmemente que cada empresario merece tener acceso a asesoría profesional de calidad, sin obstáculos. Por eso, nos dedicamos a ser el puente entre tu visión empresarial y su realización exitosa.',
    'historia.together.focus': '100%',
    'historia.together.focus-label': 'Enfoque Personalizado',
    'historia.together.passion': 'Pasión',
    'historia.together.passion-label': 'por lo que hacemos',
    'historia.together.drive': 'Impulso',
    'historia.together.drive-label': 'estratégico',
    'historia.together.cta': 'Hablemos de tu Proyecto',
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
    
    // Our Story Page
    'historia.back': 'Back to home',
    'historia.title': 'Our Story',
    'historia.subtitle': 'Let us tell you:',
    'historia.p1': 'We met in 2020 working together: Jennifer as an Accounting Analyst and Paola as a Wedding and Groups Manager. From day one we made an excellent team, and that\'s where a beautiful friendship was born.',
    'historia.p2': 'Over the years, Jennifer climbed positions until becoming an Accountant, while Paola continued developing her professional career in the Tourism area.',
    'historia.p3': 'At the beginning of 2025, we decided to combine our experience and create our first company from scratch. We took care of the entire process: registration, licenses and accounting, helping an entrepreneur with a spectacular idea who needed support to develop it.',
    'historia.p4': 'During this process we realized that we are passionate about being part of new projections, openings and making others\' dreams come true, and that\'s how Clave & Método was born.',
    'historia.p5': 'The key of the business represents the "C" of Cordero, Jennifer\'s surname, who is the financial root of the business, leading everything related to finances and ensuring that each project meets the necessary requirements to prosper.',
    'historia.p6': 'The method represents the "M" of Marín, Paola\'s surname, who is the strategic root of the business; focusing on the details of opening, management and business growth, as well as planning sales strategies to drive the success of each project.',
    'historia.paola.name': 'Paola Marín Trejos',
    'historia.paola.title': 'Strategic Business Root | Co-founder',
    'historia.paola.p1': 'Graduate of Bachelor\'s in Tourism and currently pursuing a Bachelor\'s degree with emphasis in Hotels & Restaurants, I began my career in the Reception and Reservations area, and then advanced to the Commercial area as Sales Manager.',
    'historia.paola.p2': 'I accepted the challenge of being Wedding and Groups Coordinator, adding extra value to my career by creating unforgettable events and retreats from scratch, which has become one of my favorite experiences.',
    'historia.paola.p3': 'I also had the opportunity to train in Human Talent Management under the mentorship of an excellent professional, learning everything about human resources, process creation, talent management and motivation.',
    'historia.paola.p4': 'I currently lead the opening and strategic operation of an emerging company in the Tourism area, a project that I\'m passionate about and that allows me to be part of the entire growth process of a business.',
    'historia.paola.p5': 'The experience of constantly learning and seeing how a project materializes and works is invaluable.',
    'historia.paola.experience': '13 Years',
    'historia.paola.experience-label': 'Experience',
    'historia.paola.specialty': 'Revenue & Hospitality',
    'historia.paola.specialty-label': 'Specialty',
    'historia.paola.creativity': '100%',
    'historia.paola.creativity-label': 'Creativity',
    'historia.jennifer.name': 'Jennifer Cordero Obregón',
    'historia.jennifer.title': 'Financial Business Root | Co-founder',
    'historia.jennifer.p1': 'Here goes your partner\'s introduction, their professional experience, specialties and what they bring to the Clave y Método team. Highlight their complementary experience and their role in the company.',
    'historia.jennifer.p2': 'Include their training, relevant certifications, and the specific areas they specialize in within business services.',
    'historia.jennifer.experience': 'X+ Years',
    'historia.jennifer.experience-label': 'Experience',
    'historia.jennifer.clients': 'X+ Clients',
    'historia.jennifer.clients-label': 'Satisfied',
    'historia.jennifer.expert': 'Expert',
    'historia.jennifer.expert-label': 'Certified',
    'historia.linkedin': 'View LinkedIn profile',
    'historia.together.title': 'Together We Make the Difference',
    'historia.together.p1': 'Our union was born from a shared vision: to simplify the process of business creation and growth in Costa Rica. We combine our different specialties and experiences to offer a comprehensive service that really makes a difference.',
    'historia.together.p2': 'We firmly believe that every entrepreneur deserves access to quality professional advice, without obstacles. That\'s why we dedicate ourselves to being the bridge between your business vision and its successful realization.',
    'historia.together.focus': '100%',
    'historia.together.focus-label': 'Personalized Approach',
    'historia.together.passion': 'Passion',
    'historia.together.passion-label': 'for what we do',
    'historia.together.drive': 'Strategic',
    'historia.together.drive-label': 'Drive',
    'historia.together.cta': 'Let\'s Talk About Your Project',
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