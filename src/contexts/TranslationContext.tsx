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
    'about.consultation-desc': 'Solicita tu consulta sin costo y da el primer paso para convertir tu idea en un proyecto empresarial próspero.',
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
    
    // Services Details
    'services.establishment.title': 'Constitución de Empresas',
    'services.establishment.desc': 'Incorporación legal completa, registro mercantil, cédula jurídica y todos los trámites necesarios.',
    'services.establishment.incorporation': 'Constitución de empresas',
    'services.establishment.registry': 'Registro mercantil',
    'services.establishment.corporate-id': 'Cédula jurídica',
    'services.establishment.legal-books': 'Libros legales',
    
    // Accounting Service
    'services.accounting.title': 'Contabilidad',
    'services.accounting.desc': 'Llevamos la contabilidad completa de tu empresa con reportes mensuales y declaraciones.',
    'services.accounting.monthly': 'Contabilidad mensual',
    'services.accounting.tax-declarations': 'Declaraciones fiscales',
    'services.accounting.financial-statements': 'Estados financieros',
    'services.accounting.management-reports': 'Reportes gerenciales',
    
    // Talent Management Service  
    'services.talent.title': 'Gestión del Talento',
    'services.talent.desc': 'Gestión completa de personal, planillas y cumplimiento laboral.',
    'services.talent.recruitment': 'Reclutamiento y Selección de Personal',
    'services.talent.payroll': 'Administración de planilla',
    'services.talent.labor-management': 'Gestión Laboral',
    
    // Business Strategy Service
    'services.strategy.title': 'Estrategia Empresarial',
    'services.strategy.desc': 'Desarrollamos planes de negocio personalizados y estrategias de crecimiento para tu empresa.',
    'services.strategy.business-plan': 'Plan de negocio',
    'services.strategy.market-analysis': 'Análisis de mercado',
    'services.strategy.marketing-strategy': 'Estrategia de marketing',
    'services.strategy.financial-projections': 'Proyecciones financieras',
    
    // Administrative Management Service
    'services.admin.title': 'Gestión Integral Administrativa',
    'services.admin.desc': 'Mantenemos tus finanzas organizadas y bajo control, asegurando que todas tus facturas y cuentas estén al día.',
    'services.admin.electronic-billing': 'Facturación electrónica',
    'services.admin.accounts': 'Cuentas por pagar y cobrar',
    'services.admin.payment-tracking': 'Seguimiento a pagos',
    'services.admin.audit': 'Auditoría',
    
    // Personalized Support Service
    'services.support.title': 'Acompañamiento Personalizado',
    'services.support.desc': 'Impulso al crecimiento y desarrollo de tu negocio.',
    'services.support.digital-systems': 'Implementación de sistemas contables digitales',
    'services.support.system-migration': 'Migración a Sistemas especializados',
    'services.support.continuous': 'Soporte continuo',
    
    // Popup Content - Accounting
    'popup.accounting.title': 'Nuestras Soluciones Contables',
    'popup.accounting.desc': 'Mantén tus finanzas en orden y cumple con tus obligaciones tributarias sin preocupaciones. Te ofrecemos información clara y confiable para que tomes decisiones estratégicas y tu negocio siga creciendo sin contratiempos.',
    'popup.accounting.vat-title': 'Elaboración y Presentación de Declaraciones de IVA',
    'popup.accounting.vat-desc': 'Registro y verificación de facturas emitidas y recibidas, cálculo del IVA a pagar o crédito fiscal, presentación en ATV o TRIBU-CR.',
    'popup.accounting.income-title': 'Declaración de Impuesto sobre la Renta',
    'popup.accounting.income-desc': 'Cálculo de renta líquida gravable; preparación y presentación en la plataforma tributaria correspondiente.',
    'popup.accounting.monthly-title': 'Contabilidad Mensual Completa',
    'popup.accounting.monthly-desc': 'Registro de ingresos, gastos, activos y pasivos y conciliaciones bancarias.',
    'popup.accounting.statements-title': 'Preparación de Estados Financieros',
    'popup.accounting.statements-desc': 'Estado de resultados, balance general y flujo de efectivo, con interpretación clara de los resultados para una mejor toma de decisiones.',
    
    // Popup Content - Talent Management
    'popup.talent.title': 'Nuestra Gestión de Talento Humano',
    'popup.talent.desc': 'Mantén tu equipo organizado y gestiona tus recursos humanos sin preocupaciones. Nos encargamos del cumplimiento laboral ofreciéndote información clara y confiable para que tu negocio crezca con un equipo motivado y bien gestionado.',
    'popup.talent.recruitment-title': 'Proceso de reclutamiento completo',
    'popup.talent.recruitment-desc': 'Publicación de vacantes, entrevistas, evaluación de candidatos y reportes de terna.',
    'popup.talent.contracts-title': 'Gestión de ofertas y contratos laborales',
    'popup.talent.contracts-desc1': 'Elaboración y revisión de contratos según la Legislación Costarricense.',
    'popup.talent.contracts-desc2': 'Manejos de permisos, licencias, reporte de vacaciones.',
    'popup.talent.contracts-desc3': 'Expedientes digitales y documentos legales del personal.',
    'popup.talent.payroll-title': 'Administración de planillas y plataformas de patrono',
    'popup.talent.payroll-desc1': 'Cálculo de salarios, deducciones y prestaciones.',
    'popup.talent.payroll-desc2': 'Declaración salarial para CCSS e INS.',
    'popup.talent.payroll-desc3': 'Desarrollo de Actuariales empresariales.',
    
    // Popup Content - Business Strategy  
    'popup.strategy.title': 'Nuestra Dirección de Crecimiento Empresarial',
    'popup.strategy.desc': 'Desarrollamos un plan integral para guiar el crecimiento de tu empresa. Desde el análisis del mercado hasta la planificación financiera, te ayudamos a definir objetivos claros, tomar decisiones estratégicas y maximizar tus oportunidades de éxito.',
    'popup.strategy.structural-title': 'Primeros pasos de crecimiento estructural',
    'popup.strategy.structural-desc': 'Creación de guía estratégica con la visión general del negocio, servicios, propuesta de valor, ventaja competitiva y estructura organizacional que darán claridad y dirección a tu nuevo negocio.',
    'popup.strategy.environment-title': 'Entender tu entorno de operación',
    'popup.strategy.environment-desc': 'Segmentación de mercados y clientes potenciales, competencia, tendencias, demanda y oportunidades para anticipar retos.',
    'popup.strategy.customers-title': 'Plan personalizado para atraer y fidelizar clientes',
    'popup.strategy.customers-desc': 'Público objetivo, canales de promoción, precios y distribución así como la medición de resultados que nos permitirá ajustar el enfoque del negocio.',
    'popup.strategy.budgets-title': 'Elaboración de presupuestos como herramienta clave en la planificación estratégica',
    'popup.strategy.budgets-desc': 'Proyección de ingresos y gastos identificando la rentabilidad y capacidad de crecimiento continuo dando énfasis en donde debemos colocar nuestros esfuerzos, inversiones y recursos para lograr los objetivos.',
    'popup.strategy.adjustments-title': 'Ajustes planificados según la adaptabilidad de los cambios',
    'popup.strategy.adjustments-desc': 'Permite al negocio ser flexible y resiliente, maximizando oportunidades y minimizando riesgos financieros.',
    'popup.strategy.support-title': 'Acompañamiento estratégico y desarrollo de nuevos proyectos',
    'popup.strategy.support-desc1': 'Nuestra asesoría continua para mantener el control operativo, optimizar procesos y desarrollar nuevos proyectos estratégicos.',
    'popup.strategy.support-desc2': 'Tu negocio seguirá creciendo de manera sostenible y adaptándose a nuevas oportunidades del mercado.',
    
    // Popup Content - Administrative Management
    'popup.admin.title': 'Nuestra Gestión Administrativa',
    'popup.admin.desc': 'Ofrecemos la configuración de tu sistema de facturación electrónica, emisión y control de facturas, complementado con reportes periódicos para mantener tus finanzas claras y organizadas.',
    'popup.admin.billing-title': 'Generación de facturas que cumplan con los requisitos fiscales',
    'popup.admin.billing-desc': 'Asegurar que cada factura tenga toda la información legal necesaria: datos de la empresa, cliente, monto, impuestos, productos o servicios para evitar errores que puedan causar sanciones o problemas contables.',
    'popup.admin.monitoring-title': 'Generar y monitorear todas las facturas emitidas',
    'popup.admin.monitoring-desc': 'Evitar duplicados y controlar que cada factura esté contabilizada para la contabilidad y reportes fiscales.',
    'popup.admin.accounts-title': 'Control de Cuentas por Pagar y por Cobrar',
    'popup.admin.accounts-desc': 'Seguimiento a proveedores y servicios, asegurando un flujo de operaciones planificado y constante.',
    'popup.admin.payments-title': 'Seguimiento de pagos recibidos, pendientes y atrasados',
    
    // Popup Content - Personalized Support
    'popup.support.title': 'Nuestro Acompañamiento Adaptado',
    'popup.support.software-title': 'Configuración inicial del software contable según las necesidades de la empresa',
    'popup.support.software-desc': 'Capacitación, ajustes y personalización del equipo para el uso correcto de plataformas.',
    'popup.support.systems-title': 'Asesoría en la incorporación de nuevos sistemas o plataformas digitales',
    'popup.support.systems-desc': 'Planificación y ejecución de migración de datos y verificación del funcionamiento correcto.',
    'popup.support.daily-title': 'Acompañamiento durante el uso diario de los sistemas y ayuda en la resolución de problemas.',
    
    // Popup Advisory
    'popup.advisory.title': 'Nuestra Asesoría Inicial',
    'popup.advisory.desc': 'Lanza tu negocio en Costa Rica de manera rápida y segura. Simplificamos todo el proceso para que tu emprendimiento pueda comenzar a crecer desde el primer día.',
    'popup.advisory.portfolio': 'Nuestro Portafolio de Servicios:',
    
     // Service Portfolio
     'portfolio.legal-structure.title': '1. Estructura Legal y Asesoría Tributaria',
     'portfolio.legal-structure.desc': 'Orientación sobre la estructura legal más conveniente, tipo de entidad y análisis tributario para tu negocio.',
     'portfolio.incorporation.desc': 'Constitución completa de empresas, inscripción en el Registro Mercantil y emisión de cédula jurídica.',
     'portfolio.tax-registration.desc': 'Proceso de inscripción ante la Administración Tributaria, junto con los permisos y licencias requeridas.',
     'portfolio.banking.title': '2. Operaciones Bancarias y Financieras',
     'portfolio.banking.desc': 'Apoyo con la apertura de cuentas bancarias corporativas y configuración de métodos de pago, combinado con la implementación de tu sistema contable inicial.',
  },
  en: {
    // Header
    'header.inicio': 'Home',
    'header.servicios': 'Services',
    'header.nuestra-historia': 'Our Story',
    'header.hablemos': 'Let\'s Talk',
    'header.agenda': 'Schedule a Video Call',
    
    // Hero
    'hero.title': 'Your company in Costa Rica from the Ground Up',
    'hero.subtitle': 'We accompany you at every stage of your business, from registration to growth strategy. We make the complex simple, so you can move forward without distractions.',
    'hero.feature1': 'Comprehensive accounting and tax management',
    'hero.feature2': 'Financial planning and regulatory compliance',
    'hero.feature3': 'Company incorporation and formalization',
    'hero.feature4': 'Business Development and Growth Strategies',
    'hero.cta': 'Get Started Now',
    'hero.personal': 'Personalized attention',
    'hero.availability': '24/7 Availability',
    'hero.solutions': 'Complete solutions',
    'hero.legal': '100% Legal',
    'hero.compliance': 'Guaranteed Adherence',
    
    // Services
    'services.title': 'From Idea to Reality',
    'services.subtitle': 'Our solutions offer you everything you need to create and grow your company in Costa Rica. We take care of the procedures and management, while you focus on making your business prosper.',
    'services.more': 'Learn More',
    
    // About
    'about.title': 'Ready to Build Your Future?',
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
    
    // Services Details
    'services.establishment.title': 'Business Establishment',
    'services.establishment.desc': 'Full legal incorporation, commercial registry, corporate ID, and all necessary procedures.',
    'services.establishment.incorporation': 'Company incorporation',
    'services.establishment.registry': 'Commercial registry',
    'services.establishment.corporate-id': 'Corporate ID',
    'services.establishment.legal-books': 'Legal books',
    
    // Accounting Service
    'services.accounting.title': 'Accounting',
    'services.accounting.desc': 'We handle your company\'s complete accounting with monthly reports and declarations.',
    'services.accounting.monthly': 'Monthly accounting',
    'services.accounting.tax-declarations': 'Tax declarations',
    'services.accounting.financial-statements': 'Financial statements',
    'services.accounting.management-reports': 'Management reports',
    
    // Talent Management Service  
    'services.talent.title': 'Human Capital Solutions',
    'services.talent.desc': 'Complete personnel management, payroll and labor compliance.',
    'services.talent.recruitment': 'Personnel Recruitment and Selection',
    'services.talent.payroll': 'Payroll administration',
    'services.talent.labor-management': 'Labor Management',
    
    // Business Strategy Service
    'services.strategy.title': 'Growth & Strategy Roadmap',
    'services.strategy.desc': 'We develop personalized business plans and growth strategies for your company.',
    'services.strategy.business-plan': 'Business plan',
    'services.strategy.market-analysis': 'Market analysis',
    'services.strategy.marketing-strategy': 'Marketing strategy',
    'services.strategy.financial-projections': 'Financial projections',
    
    // Administrative Management Service
    'services.admin.title': 'All-in-One Administration',
    'services.admin.desc': 'We keep your finances organized and under control, ensuring all your invoices and accounts are up to date.',
    'services.admin.electronic-billing': 'Electronic billing',
    'services.admin.accounts': 'Accounts payable and receivable',
    'services.admin.payment-tracking': 'Payment tracking',
    'services.admin.audit': 'Audit',
    
    // Personalized Support Service
    'services.support.title': 'Personalized Support',
    'services.support.desc': 'Boost the growth and development of your business.',
    'services.support.digital-systems': 'Implementation of digital accounting systems',
    'services.support.system-migration': 'Migration to specialized systems',
    'services.support.continuous': 'Continuous support',
    
    // Popup Content - Accounting
    'popup.accounting.title': 'Our Accounting Solutions',
    'popup.accounting.desc': 'Keep your finances in order and comply with your tax obligations without worries. We offer you clear and reliable information so you can make strategic decisions and your business continues to grow without setbacks.',
    'popup.accounting.vat-title': 'VAT Declaration Preparation and Submission',
    'popup.accounting.vat-desc': 'Registration and verification of issued and received invoices, calculation of VAT to be paid or tax credit, submission in ATV or TRIBU-CR.',
    'popup.accounting.income-title': 'Income Tax Declaration',
    'popup.accounting.income-desc': 'Calculation of taxable net income; preparation and submission on the corresponding tax platform.',
    'popup.accounting.monthly-title': 'Complete Monthly Accounting',
    'popup.accounting.monthly-desc': 'Registration of income, expenses, assets and liabilities and bank reconciliations.',
    'popup.accounting.statements-title': 'Financial Statement Preparation',
    'popup.accounting.statements-desc': 'Income statement, balance sheet and cash flow, with clear interpretation of results for better decision making.',
    
    // Popup Content - Talent Management
    'popup.talent.title': 'Our Human Talent Management',
    'popup.talent.desc': 'Keep your team organized and manage your human resources without worries. We take care of labor compliance by offering you clear and reliable information so your business grows with a motivated and well-managed team.',
    'popup.talent.recruitment-title': 'Complete recruitment process',
    'popup.talent.recruitment-desc': 'Job posting, interviews, candidate evaluation and shortlist reports.',
    'popup.talent.contracts-title': 'Management of offers and employment contracts',
    'popup.talent.contracts-desc1': 'Preparation and review of contracts according to Costa Rican Legislation.',
    'popup.talent.contracts-desc2': 'Management of permits, licenses, vacation reporting.',
    'popup.talent.contracts-desc3': 'Digital files and legal documents of personnel.',
    'popup.talent.payroll-title': 'Payroll administration and employer platforms',
    'popup.talent.payroll-desc1': 'Calculation of salaries, deductions and benefits.',
    'popup.talent.payroll-desc2': 'Salary declaration for CCSS and INS.',
    'popup.talent.payroll-desc3': 'Development of business actuarial reports.',
    
    // Popup Content - Business Strategy  
    'popup.strategy.title': 'Our Business Growth Direction',
    'popup.strategy.desc': 'We develop a comprehensive plan to guide your company growth. From market analysis to financial planning, we help you define clear objectives, make strategic decisions and maximize your success opportunities.',
    'popup.strategy.structural-title': 'First steps of structural growth',
    'popup.strategy.structural-desc': 'Creation of strategic guide with business overview, services, value proposition, competitive advantage and organizational structure that will give clarity and direction to your new business.',
    'popup.strategy.environment-title': 'Understanding your operating environment',
    'popup.strategy.environment-desc': 'Market segmentation and potential customers, competition, trends, demand and opportunities to anticipate challenges.',
    'popup.strategy.customers-title': 'Personalized plan to attract and retain customers',
    'popup.strategy.customers-desc': 'Target audience, promotion channels, prices and distribution as well as results measurement that will allow us to adjust the business approach.',
    'popup.strategy.budgets-title': 'Budget development as a key tool in strategic planning',
    'popup.strategy.budgets-desc': 'Income and expense projection identifying profitability and continuous growth capacity emphasizing where we should place our efforts, investments and resources to achieve objectives.',
    'popup.strategy.adjustments-title': 'Planned adjustments according to adaptability to changes',
    'popup.strategy.adjustments-desc': 'Allows the business to be flexible and resilient, maximizing opportunities and minimizing financial risks.',
    'popup.strategy.support-title': 'Strategic support and development of new projects',
    'popup.strategy.support-desc1': 'Our continuous advisory to maintain operational control, optimize processes and develop new strategic projects.',
    'popup.strategy.support-desc2': 'Your business will continue growing sustainably and adapting to new market opportunities.',
    
    // Popup Content - Administrative Management
    'popup.admin.title': 'Our Administrative Management',
    'popup.admin.desc': 'We offer the configuration of your electronic billing system, issuance and control of invoices, complemented with periodic reports to keep your finances clear and organized.',
    'popup.admin.billing-title': 'Generation of invoices that comply with tax requirements',
    'popup.admin.billing-desc': 'Ensure that each invoice has all the necessary legal information: company data, client, amount, taxes, products or services to avoid errors that may cause sanctions or accounting problems.',
    'popup.admin.monitoring-title': 'Generate and monitor all issued invoices',
    'popup.admin.monitoring-desc': 'Avoid duplicates and control that each invoice is accounted for accounting and tax reports.',
    'popup.admin.accounts-title': 'Control of Accounts Payable and Receivable',
    'popup.admin.accounts-desc': 'Follow-up with suppliers and services, ensuring a planned and constant flow of operations.',
    'popup.admin.payments-title': 'Tracking of received, pending and overdue payments',
    
    // Popup Content - Personalized Support
    'popup.support.title': 'Our Adapted Support',
    'popup.support.software-title': 'Initial configuration of accounting software according to company needs',
    'popup.support.software-desc': 'Training, adjustments and team customization for correct use of platforms.',
    'popup.support.systems-title': 'Advisory on the incorporation of new systems or digital platforms',
    'popup.support.systems-desc': 'Planning and execution of data migration and verification of correct operation.',
    'popup.support.daily-title': 'Support during daily use of systems and help in problem solving.',
    
    // Popup Advisory
    'popup.advisory.title': 'Our Initial Advisory',
    'popup.advisory.desc': 'Launch your business in Costa Rica quickly and securely. We simplify the entire process so your venture can start growing from day one.',
    'popup.advisory.portfolio': 'Our Service Portfolio:',
    
    // Service Portfolio
    'portfolio.legal-structure.title': '1. Legal Structure & Tax Advisory',
    'portfolio.legal-structure.desc': 'Guidance on the most suitable legal structure, type of entity, and tax analysis for your business.',
    'portfolio.incorporation.desc': 'Full company incorporation, registration with the Commercial Registry, and issuance of the corporate ID.',
    'portfolio.tax-registration.desc': 'Registration process with the Tax Administration, along with the required permits and licenses.',
    'portfolio.banking.title': '2. Banking & Financial Operations',
    'portfolio.banking.desc': 'Support with opening corporate bank accounts and setting up payment methods, combined with the implementation of your initial accounting system.',
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