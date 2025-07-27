// projects-i18n.ts - Multilingual project data

export interface ProjectI18n {
  id: string;
  title: {
    es: string;
    en: string;
    por: string;
  };
  description: {
    es: string;
    en: string;
    por: string;
  };
  image: string;
  category: 'agro' | 'jovenes' | 'store' | 'makers' | 'software';
  tags: {
    es: string[];
    en: string[];
    por: string[];
  };
  featured?: boolean;
}

export const projectsI18n: ProjectI18n[] = [
  // Agro Projects
  {
    id: 'agro-smart-irrigation',
    title: {
      es: 'Sistema de Riego Inteligente AgroTech',
      en: 'AgroTech Smart Irrigation System',
      por: 'Sistema de Irrigação Inteligente AgroTech'
    },
    description: {
      es: 'Plataforma IoT que optimiza el riego agrícola mediante sensores de humedad y análisis predictivo, reduciendo el consumo de agua hasta un 40% y mejorando el rendimiento de los cultivos.',
      en: 'IoT platform that optimizes agricultural irrigation through humidity sensors and predictive analysis, reducing water consumption by up to 40% and improving crop yield.',
      por: 'Plataforma IoT que otimiza a irrigação agrícola através de sensores de umidade e análise preditiva, reduzindo o consumo de água em até 40% e melhorando o rendimento das culturas.'
    },
    image: 'placeholder-agro-1',
    category: 'agro',
    tags: {
      es: ['IoT', 'Agricultura', 'Sostenibilidad', 'Sensores'],
      en: ['IoT', 'Agriculture', 'Sustainability', 'Sensors'],
      por: ['IoT', 'Agricultura', 'Sustentabilidade', 'Sensores']
    },
    featured: true
  },
  {
    id: 'agro-crop-monitoring',
    title: {
      es: 'MonitorCultivos 360°',
      en: 'CropMonitor 360°',
      por: 'MonitorCultivos 360°'
    },
    description: {
      es: 'Aplicación móvil que utiliza drones e inteligencia artificial para monitorear la salud de los cultivos, detectar plagas y optimizar la aplicación de fertilizantes.',
      en: 'Mobile application that uses drones and artificial intelligence to monitor crop health, detect pests and optimize fertilizer application.',
      por: 'Aplicação móvel que utiliza drones e inteligência artificial para monitorar a saúde das culturas, detectar pragas e otimizar a aplicação de fertilizantes.'
    },
    image: 'placeholder-agro-2',
    category: 'agro',
    tags: {
      es: ['IA', 'Drones', 'Agricultura', 'App Móvil'],
      en: ['AI', 'Drones', 'Agriculture', 'Mobile App'],
      por: ['IA', 'Drones', 'Agricultura', 'App Móvel']
    }
  },

  // Jóvenes por Colombia Projects
  {
    id: 'jovenes-education-platform',
    title: {
      es: 'EduConecta - Plataforma Educativa',
      en: 'EduConnect - Educational Platform',
      por: 'EduConecta - Plataforma Educacional'
    },
    description: {
      es: 'Plataforma educativa que democratiza el acceso a educación de calidad para jóvenes en zonas rurales, con contenido offline y seguimiento personalizado.',
      en: 'Educational platform that democratizes access to quality education for youth in rural areas, with offline content and personalized tracking.',
      por: 'Plataforma educacional que democratiza o acesso à educação de qualidade para jovens em áreas rurais, com conteúdo offline e acompanhamento personalizado.'
    },
    image: 'placeholder-jovenes-1',
    category: 'jovenes',
    tags: {
      es: ['Educación', 'Inclusión Digital', 'PWA', 'Offline'],
      en: ['Education', 'Digital Inclusion', 'PWA', 'Offline'],
      por: ['Educação', 'Inclusão Digital', 'PWA', 'Offline']
    },
    featured: true
  },
  {
    id: 'jovenes-employment-platform',
    title: {
      es: 'TalentoColombia Jobs',
      en: 'TalentoColombia Jobs',
      por: 'TalentoColombia Empregos'
    },
    description: {
      es: 'Aplicación que conecta jóvenes talentos colombianos con oportunidades laborales, incluyendo capacitación gratuita y certificaciones reconocidas por la industria.',
      en: 'Application that connects young Colombian talents with job opportunities, including free training and industry-recognized certifications.',
      por: 'Aplicação que conecta jovens talentos colombianos com oportunidades de trabalho, incluindo treinamento gratuito e certificações reconhecidas pela indústria.'
    },
    image: 'placeholder-jovenes-2',
    category: 'jovenes',
    tags: {
      es: ['Empleo', 'Capacitación', 'React Native', 'ML'],
      en: ['Employment', 'Training', 'React Native', 'ML'],
      por: ['Emprego', 'Treinamento', 'React Native', 'ML']
    }
  },

  // Store Projects
  {
    id: 'store-omnichannel',
    title: {
      es: 'RetailPro Omnichannel',
      en: 'RetailPro Omnichannel',
      por: 'RetailPro Omnichannel'
    },
    description: {
      es: 'Solución integral de comercio electrónico que integra tienda física y digital, con inventario en tiempo real, pagos móviles y experiencia de usuario unificada.',
      en: 'Comprehensive e-commerce solution that integrates physical and digital stores, with real-time inventory, mobile payments and unified user experience.',
      por: 'Solução abrangente de comércio eletrônico que integra lojas físicas e digitais, com inventário em tempo real, pagamentos móveis e experiência do usuário unificada.'
    },
    image: 'placeholder-store-1',
    category: 'store',
    tags: {
      es: ['E-commerce', 'Omnichannel', 'POS', 'Next.js'],
      en: ['E-commerce', 'Omnichannel', 'POS', 'Next.js'],
      por: ['E-commerce', 'Omnichannel', 'POS', 'Next.js']
    },
    featured: true
  },
  {
    id: 'store-inventory-ai',
    title: {
      es: 'StockSmart AI',
      en: 'StockSmart AI',
      por: 'StockSmart IA'
    },
    description: {
      es: 'Sistema de gestión de inventario potenciado por IA que predice demanda, optimiza stock y automatiza reordenamientos, reduciendo costos operativos.',
      en: 'AI-powered inventory management system that predicts demand, optimizes stock and automates reorders, reducing operational costs.',
      por: 'Sistema de gestão de inventário alimentado por IA que prevê demanda, otimiza estoque e automatiza reordens, reduzindo custos operacionais.'
    },
    image: 'placeholder-store-2',
    category: 'store',
    tags: {
      es: ['IA', 'Inventario', 'Predicción', 'Django'],
      en: ['AI', 'Inventory', 'Prediction', 'Django'],
      por: ['IA', 'Inventário', 'Previsão', 'Django']
    }
  },

  // For Makers Projects
  {
    id: 'makers-3d-platform',
    title: {
      es: 'MakerSpace 3D Community',
      en: 'MakerSpace 3D Community',
      por: 'MakerSpace 3D Community'
    },
    description: {
      es: 'Plataforma colaborativa para makers que facilita el diseño, prototipado y manufactura de productos usando impresión 3D y herramientas digitales.',
      en: 'Collaborative platform for makers that facilitates product design, prototyping and manufacturing using 3D printing and digital tools.',
      por: 'Plataforma colaborativa para criadores que facilita o design, prototipagem e fabricação de produtos usando impressão 3D e ferramentas digitais.'
    },
    image: 'placeholder-makers-1',
    category: 'makers',
    tags: {
      es: ['Impresión 3D', 'CAD', 'Comunidad', 'WebGL'],
      en: ['3D Printing', 'CAD', 'Community', 'WebGL'],
      por: ['Impressão 3D', 'CAD', 'Comunidade', 'WebGL']
    }
  },
  {
    id: 'makers-iot-toolkit',
    title: {
      es: 'IoT Maker Toolkit',
      en: 'IoT Maker Toolkit',
      por: 'IoT Maker Toolkit'
    },
    description: {
      es: 'Kit de desarrollo que simplifica la creación de dispositivos IoT para makers, con componentes modulares y programación visual drag-and-drop.',
      en: 'Development kit that simplifies IoT device creation for makers, with modular components and drag-and-drop visual programming.',
      por: 'Kit de desenvolvimento que simplifica a criação de dispositivos IoT para criadores, com componentes modulares e programação visual drag-and-drop.'
    },
    image: 'placeholder-makers-2',
    category: 'makers',
    tags: {
      es: ['IoT', 'Hardware', 'Programación Visual', 'Arduino'],
      en: ['IoT', 'Hardware', 'Visual Programming', 'Arduino'],
      por: ['IoT', 'Hardware', 'Programação Visual', 'Arduino']
    },
    featured: true
  },

  // Software & Hardware Projects
  {
    id: 'software-cybersecurity-suite',
    title: {
      es: 'CyberShield Enterprise Suite',
      en: 'CyberShield Enterprise Suite',
      por: 'CyberShield Enterprise Suite'
    },
    description: {
      es: 'Suite integral de ciberseguridad que combina IA para detección de amenazas, análisis forense automatizado y respuesta a incidentes en tiempo real.',
      en: 'Comprehensive cybersecurity suite that combines AI for threat detection, automated forensic analysis and real-time incident response.',
      por: 'Suite abrangente de cibersegurança que combina IA para detecção de ameaças, análise forense automatizada e resposta a incidentes em tempo real.'
    },
    image: 'placeholder-software-1',
    category: 'software',
    tags: {
      es: ['Ciberseguridad', 'IA', 'Enterprise', 'Microservices'],
      en: ['Cybersecurity', 'AI', 'Enterprise', 'Microservices'],
      por: ['Cibersegurança', 'IA', 'Enterprise', 'Microservices']
    },
    featured: true
  }
];

// Helper function to get localized projects
export const getLocalizedProjects = (lang: 'es' | 'en' | 'por') => {
  return projectsI18n.map(project => ({
    id: project.id,
    title: project.title[lang],
    description: project.description[lang],
    image: project.image,
    category: project.category,
    tags: project.tags[lang],
    featured: project.featured
  }));
};

// Helper function to get projects by category (localized)
export const getLocalizedProjectsByCategory = (category: string, lang: 'es' | 'en' | 'por') => {
  const localizedProjects = getLocalizedProjects(lang);
  if (category === 'all') {
    return localizedProjects;
  }
  return localizedProjects.filter(project => project.category === category);
};

// Helper function to get featured projects (localized)
export const getLocalizedFeaturedProjects = (lang: 'es' | 'en' | 'por') => {
  const localizedProjects = getLocalizedProjects(lang);
  return localizedProjects.filter(project => project.featured);
}; 