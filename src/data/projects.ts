// projects.ts - Mock project data for all categories

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'agro' | 'jovenes' | 'store' | 'makers' | 'software';
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  // Agro Projects
  {
    id: 'agro-smart-irrigation',
    title: 'Sistema de Riego Inteligente AgroTech',
    description: 'Plataforma IoT que optimiza el riego agrícola mediante sensores de humedad y análisis predictivo, reduciendo el consumo de agua hasta un 40% y mejorando el rendimiento de los cultivos.',
    image: 'placeholder-agro-1',
    category: 'agro',
    tags: ['IoT', 'Agricultura', 'Sostenibilidad', 'Sensores'],
    featured: true
  },
  {
    id: 'agro-crop-monitoring',
    title: 'MonitorCultivos 360°',
    description: 'Aplicación móvil que utiliza drones e inteligencia artificial para monitorear la salud de los cultivos, detectar plagas y optimizar la aplicación de fertilizantes.',
    image: 'placeholder-agro-2',
    category: 'agro',
    tags: ['IA', 'Drones', 'Agricultura', 'Mobile App']
  },
  

  // Jóvenes por Colombia Projects
  {
    id: 'jovenes-education-platform',
    title: 'EduConecta - Plataforma Educativa',
    description: 'Plataforma educativa que democratiza el acceso a educación de calidad para jóvenes en zonas rurales, con contenido offline y seguimiento personalizado.',
    image: 'placeholder-jovenes-1',
    category: 'jovenes',
    tags: ['Educación', 'Inclusión Digital', 'Progressive Web App', 'Offline'],
    featured: true
  },
  {
    id: 'jovenes-employment-platform',
    title: 'TalentoColombia Jobs',
    description: 'Aplicación que conecta jóvenes talentos colombianos con oportunidades laborales, incluyendo capacitación gratuita y certificaciones reconocidas por la industria.',
    image: 'placeholder-jovenes-2',
    category: 'jovenes',
    tags: ['Empleo', 'Capacitación', 'React Native', 'Machine Learning']
  },
 

  // Store Projects
  {
    id: 'store-omnichannel',
    title: 'RetailPro Omnichannel',
    description: 'Solución integral de comercio electrónico que integra tienda física y digital, con inventario en tiempo real, pagos móviles y experiencia de usuario unificada.',
    image: 'placeholder-store-1',
    category: 'store',
    tags: ['E-commerce', 'Omnichannel', 'POS', 'Next.js'],
    featured: true
  },
  {
    id: 'store-inventory-ai',
    title: 'StockSmart AI',
    description: 'Sistema de gestión de inventario potenciado por IA que predice demanda, optimiza stock y automatiza reordenamientos, reduciendo costos operativos.',
    image: 'placeholder-store-2',
    category: 'store',
    tags: ['IA', 'Inventario', 'Predicción', 'Django']
  },
 

  // For Makers Projects
  {
    id: 'makers-3d-platform',
    title: 'MakerSpace 3D Community',
    description: 'Plataforma colaborativa para makers que facilita el diseño, prototipado y manufactura de productos usando impresión 3D y herramientas digitales.',
    image: 'placeholder-makers-1',
    category: 'makers',
    tags: ['3D Printing', 'CAD', 'Community', 'WebGL']
  },
  {
    id: 'makers-iot-toolkit',
    title: 'IoT Maker Toolkit',
    description: 'Kit de desarrollo que simplifica la creación de dispositivos IoT para makers, con componentes modulares y programación visual drag-and-drop.',
    image: 'placeholder-makers-2',
    category: 'makers',
    tags: ['IoT', 'Hardware', 'Visual Programming', 'Arduino'],
    featured: true
  },
  

  // Software & Hardware Projects
  {
    id: 'software-cybersecurity-suite',
    title: 'CyberShield Enterprise Suite',
    description: 'Suite integral de ciberseguridad que combina IA para detección de amenazas, análisis forense automatizado y respuesta a incidentes en tiempo real.',
    image: 'placeholder-software-1',
    category: 'software',
    tags: ['Ciberseguridad', 'IA', 'Enterprise', 'Microservices'],
    featured: true
  },
  
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
}; 