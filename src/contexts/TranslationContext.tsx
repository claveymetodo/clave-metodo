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
    'hero.title': 'Tu empresa en Costa Rica desde cero',
    'hero.subtitle': 'Te acompañamos en cada etapa de tu negocio, desde el registro hasta la estrategia de crecimiento. Hacemos que lo complejo sea sencillo, para que tú avances sin distracciones.',
    'hero.feature1': 'Gestión contable y fiscal integral',
    'hero.feature2': 'Planeación financiera y cumplimiento regulatorio',
    'hero.feature3': 'Constitución y formalización de empresas',
    'hero.feature4': 'Estrategias de gestión y expansión empresarial',
    'hero.cta': 'Empezar Ahora',
    'hero.personal': 'Atención personalizada',
    'hero.availability': 'Disponibilidad 24/7',
    'hero.solutions': 'Soluciones completas',
    'hero.legal': '100% Legal',
    'hero.compliance': 'Cumplimiento garantizado',
    
    // Services
    'services.title': 'De la idea al éxito',
    'services.subtitle': 'Nuestras soluciones te ofrecen todo lo que necesitas para crear y hacer crecer tu empresa en Costa Rica. Nosotros nos encargamos de los trámites y gestiones, mientras tú te enfocas en hacer que tu negocio prospere.',
    'services.more': 'Saber Más',
    
    // About
    'about.title': '¿Listo para Comenzar a Construir?',
    'about.subtitle': 'Hablemos de tu Proyecto',
    'about.description': 'Estamos listos para ayudarte a crear tu empresa.',
    'about.consultation': 'Consulta Gratuita',
    'about.consultation-desc': 'Agenda una consulta sin costo y descubre cómo podemos ayudarte a crear tu empresa exitosa.',
    'about.schedule': 'Agendar Consulta',
    'about.form-title': 'Envíanos un Mensaje',
    'about.form-desc': 'Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.',
    'about.name': 'Nombre',
    'about.lastname': 'Apellidos',
    'about.email': 'Email',
    'about.phone': 'Teléfono',
    'about.company-type': 'Tipo de Empresa',
    'about.company-placeholder': 'Ej: Restaurante, Nuevo Negocio Tech, Consultorio...',
    'about.message': 'Mensaje',
    'about.message-placeholder': 'Cuéntanos sobre tu proyecto empresarial...',
    'about.send': 'Enviar Mensaje ✉️',
    'about.required': '* Campos obligatorios. Tu información está protegida y nunca será compartida.',
    
    // Footer
    'footer.brand-desc': 'Tu aliado estratégico para crear y hacer crecer empresas exitosas en Costa Rica.',
    'footer.made-love': 'Hecho con amor en Costa Rica',
    'footer.services': 'Servicios',
    'footer.quick-links': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.terms': 'Términos y Condiciones',
    'footer.privacy': 'Política de Privacidad',
    'footer.location': 'Cubrimos todo Costa Rica – Llegamos hasta ti',
    
    // Nuestra Historia Page
    'historia.back': 'Volver al inicio',
    'historia.title': 'Nuestra Historia',
    'historia.subtitle': 'Te la contamos:',
    'historia.p1': 'Nos conocimos en 2020 trabajando juntas: Jennifer como Analista Contable y Paola como Encargada de Bodas y Grupos. Desde el primer día hicimos un excelente equipo, y de ahí nació una linda amistad.',
    'historia.p2': 'Con el paso de los años, Jennifer fue escalando posiciones hasta convertirse en Contadora, mientras que Paola continuó desarrollando su carrera profesional en el área de Turismo.',
    'historia.p3': 'A inicios de 2025, decidimos unir nuestra magia y crear nuestra primera empresa desde cero. Nos encargamos de todo el proceso: inscripción, licencias y contabilidad, ayudando a un empresario con una idea espectacular que necesitaba apoyo para desarrollarla.',
    'historia.p4': 'Durante este proceso nos dimos cuenta de que nos apasiona formar parte de nuevas proyecciones, aperturas y hacer realidad los sueños de otros, y así nació Clave & Método.',
    'historia.p5': 'La clave del negocio representa la "C" de Codero, el apellido de Jennifer, quien es la raíz financiera del negocio, liderando todo lo relacionado con finanzas y asegurando que cada proyecto cumpla con los requisitos necesarios para prosperar.',
     'historia.p6': 'El método representa la "M" de Marín, el apellido de Paola, quien es la raíz estratégica del negocio; enfocándose en los detalles de apertura, gestión y crecimiento empresarial, así como en la planificación de estrategias de venta para impulsar el éxito de cada proyecto.',
     'historia.p7': 'Estamos listas para acompañarte en cada paso hacia tu éxito...',
     'historia.signature': 'Jennifer & Paola',
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
    'historia.jennifer.p1': 'Soy Contadora Privada Incorporada y actualmente curso el Bachillerato en Contaduría. Comencé mi carrera profesional como Auxiliar Contable y Encargada de Servicio al Cliente, desarrollando experiencia en procesos administrativos, facturación y atención al cliente en el sector de la construcción, con un enfoque en importación y distribución de productos cerámicos.',
     'historia.jennifer.p2': 'Durante esta etapa, tuve la oportunidad de gestionar procesos de importación, cálculos de planilla, facturación electrónica y diversos procesos administrativos, fortaleciendo mi capacidad de organización y precisión. Más adelante, me incorporé al sector hotelero, iniciando como Auxiliar Contable, consolidándome actualmente como Contadora General.',
     'historia.jennifer.p3': 'Esta experiencia me permitió profundizar en la gestión financiera de empresas de servicios y ampliar mi conocimiento en el área administrativa-contable.',
     'historia.jennifer.p4': 'Hoy, toda esta trayectoria me motiva a emprender mi propio proyecto profesional, con el compromiso de contribuir al crecimiento y desarrollo de las empresas, ofreciendo un servicio contable cercano, eficiente y confiable.',
     'historia.jennifer.experience': '8 años',
     'historia.jennifer.experience-label': 'Experiencia',
     'historia.jennifer.clients': 'Optimización Eficiente',
     'historia.jennifer.clients-label': 'Especialidad',
     'historia.jennifer.expert': '100%',
     'historia.jennifer.expert-label': 'Pensamiento analítico',
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
    'hero.subtitle': 'We accompany you at every stage of your business, from registration to growth strategy. We make the complex simple, so you can move forward without distractions.',
    'hero.feature1': 'Comprehensive accounting and tax management',
    'hero.feature2': 'Financial planning and regulatory compliance',
    'hero.feature3': 'Company incorporation and formalization',
    'hero.feature4': 'Management and business expansion strategies',
    'hero.cta': 'Get Started Now',
    'hero.personal': 'Personalized attention',
    'hero.availability': '24/7 Availability',
    'hero.solutions': 'Complete solutions',
    'hero.legal': '100% Legal',
    'hero.compliance': 'Guaranteed compliance',
    
    // Services
    'services.title': 'From idea to success',
    'services.subtitle': 'Our solutions offer you everything you need to create and grow your company in Costa Rica. We take care of the procedures and management, while you focus on making your business prosper.',
    'services.more': 'Learn More',
    
    // About
    'about.title': 'Ready to Start Building?',
    'about.subtitle': 'Let\'s Talk About Your Project',
    'about.description': 'We are ready to help you create your company. Schedule a free consultation and discover how we can make your business project a reality.',
    'about.consultation': 'Free Consultation',
    'about.consultation-desc': 'Schedule a free consultation and discover how we can help you create your successful company.',
    'about.schedule': 'Schedule Consultation',
    'about.form-title': 'Send Us a Message',
    'about.form-desc': 'Fill out the form and we will contact you within 24 hours.',
    'about.name': 'Name',
    'about.lastname': 'Last Name',
    'about.email': 'Email',
    'about.phone': 'Phone',
    'about.company-type': 'Company Type',
    'about.company-placeholder': 'Ex: Restaurant, New Tech Business, Clinic...',
    'about.message': 'Message',
    'about.message-placeholder': 'Tell us about your business project...',
    'about.send': 'Send Message ✉️',
    'about.required': '* Required fields. Your information is protected and will never be shared.',
    
    // Footer
    'footer.brand-desc': 'Your strategic ally to create and grow successful companies in Costa Rica.',
    'footer.made-love': 'Made with love in Costa Rica',
    'footer.services': 'Services',
    'footer.quick-links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.terms': 'Terms and Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.location': 'We cover all of Costa Rica – We come to you',
    
    // Our Story Page
    'historia.back': 'Back to home',
    'historia.title': 'Our Story',
    'historia.subtitle': 'Let us tell you:',
    'historia.p1': 'We met in 2020 working together: Jennifer as an Accounting Analyst and Paola as a Wedding and Groups Manager. From day one we made an excellent team, and that\'s where a beautiful friendship was born.',
    'historia.p2': 'Over the years, Jennifer climbed positions until becoming an Accountant, while Paola continued developing her professional career in the Tourism area.',
    'historia.p3': 'At the beginning of 2025, we decided to combine our magic and create our first company from scratch. We took care of the entire process: registration, licenses and accounting, helping an entrepreneur with a spectacular idea who needed support to develop it.',
    'historia.p4': 'During this process we realized that we are passionate about being part of new projections, openings and making others\' dreams come true, and that\'s how Clave & Método was born.',
    'historia.p5': 'The key of the business represents the "C" of Cordero, Jennifer\'s surname, who is the financial root of the business, leading everything related to finances and ensuring that each project meets the necessary requirements to prosper.',
     'historia.p6': 'The method represents the "M" of Marín, Paola\'s surname, who is the strategic root of the business; focusing on the details of opening, management and business growth, as well as planning sales strategies to drive the success of each project.',
     'historia.p7': 'We are ready to accompany you in every step towards your success...',
     'historia.signature': 'Jennifer & Paola',
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
    'historia.jennifer.p1': 'I am a Certified Public Accountant and currently pursuing a Bachelor\'s degree in Accounting. I began my professional career as an Accounting Assistant and Customer Service Manager, developing experience in administrative processes, billing, and customer service in the construction sector, with a focus on import and distribution of ceramic products.',
     'historia.jennifer.p2': 'During this stage, I had the opportunity to manage import processes, payroll calculations, electronic billing, and various administrative processes, strengthening my organizational capacity and precision. Later, I joined the hotel sector, starting as an Accounting Assistant, currently consolidating as a General Accountant.',
     'historia.jennifer.p3': 'This experience allowed me to deepen my knowledge in financial management of service companies and expand my knowledge in the administrative-accounting area.',
     'historia.jennifer.p4': 'Today, all this trajectory motivates me to start my own professional project, with the commitment to contribute to the growth and development of companies, offering a close, efficient and reliable accounting service.',
     'historia.jennifer.experience': '8 years',
     'historia.jennifer.experience-label': 'Experience',
     'historia.jennifer.clients': 'Efficient Optimization',
     'historia.jennifer.clients-label': 'Specialty',
     'historia.jennifer.expert': '100%',
     'historia.jennifer.expert-label': 'Analytical thinking',
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