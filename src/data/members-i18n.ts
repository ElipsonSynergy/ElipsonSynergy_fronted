// members-i18n.ts - Multilingual member data

export interface MemberI18n {
  id: string;
  name: string; // Names typically don't change across languages
  role: {
    es: string;
    en: string;
    por: string;
  };
  roleDetailed: {
    es: string;
    en: string;
    por: string;
  };
  description: {
    es: string;
    en: string;
    por: string;
  };
  readMore: {
    es: string;
    en: string;
    por: string;
  };
  readLess: {
    es: string;
    en: string;
    por: string;
  };
  image: string;
  whatsAppLink: string;
  instagramLink: string;
  facebookLink: string;
  linkedInLink: string;
}

export const membersI18n: MemberI18n[] = [
  {
    id: "mateo_chilito",
    name: "Mateo Chilito",
    role: {
      es: "CEO",
      en: "CEO",
      por: "CEO",
    },
    roleDetailed: {
      es: "Chief Executive Officer",
      en: "Chief Executive Officer",
      por: "Chief Executive Officer",
    },
    description: {
      es: "Lidera la visión global de Elipson Synergy, asegurando el crecimiento sostenible de la empresa y la alineación estratégica de todas las áreas. Su enfoque está centrado en el impacto tecnológico positivo en Latinoamérica y en consolidar un equipo de alto rendimiento.",
      en: "Leads the global vision of Elipson Synergy, ensuring sustainable company growth and strategic alignment across all areas. His focus is centered on positive technological impact in Latin America and building a high-performance team.",
      por: "Lidera a visão global da Elipson Synergy, garantindo o crescimento sustentável da empresa e o alinhamento estratégico de todas as áreas. Seu foco está centrado no impacto tecnológico positivo na América Latina e na consolidação de uma equipe de alto desempenho.",
    },
    readMore: {
      es: "Leer más",
      en: "Read more",
      por: "Ler mais",
    },
    readLess: {
      es: "Leer menos",
      en: "Read less",
      por: "Ler menos",
    },
    image: "/images/mateo.webp",
    whatsAppLink: "https://wa.me/573053456789",
    instagramLink: "https://instagram.com/pruebaTestElipsonSinergy",
    facebookLink: "https://facebook.com/pruebaTestElipsonSinergy",
    linkedInLink: "https://linkedin.com/in/pruebaTestElipsonSinergy",
  },
  {
    id: "laura_hurtado",
    name: "Laura Hurtado",
    role: {
      es: "CMO",
      en: "CMO",
      por: "CMO",
    },
    roleDetailed: {
      es: "Chief Marketing Officer",
      en: "Chief Marketing Officer",
      por: "Chief Marketing Officer",
    },
    description: {
      es: "Encargada de construir la identidad de marca de Elipson Synergy y liderar las estrategias de comunicación y expansión en el mercado latinoamericano. Impulsa campañas centradas en la conexión emocional con los usuarios y la promoción de soluciones transformadoras.",
      en: "Responsible for building Elipson Synergy's brand identity and leading communication and expansion strategies in the Latin American market. She drives campaigns focused on emotional connection with users and promoting transformative solutions.",
      por: "Encarregada de construir a identidade da marca Elipson Synergy e liderar as estratégias de comunicação e expansão no mercado latino-americano. Impulsiona campanhas focadas na conexão emocional com os usuários e na promoção de soluções transformadoras.",
    },
    readMore: {
      es: "Leer más",
      en: "Read more",
      por: "Ler mais",
    },
    readLess: {
      es: "Leer menos",
      en: "Read less",
      por: "Ler menos",
    },
    image: "/images/laura.webp",
    whatsAppLink: "https://wa.me/573053456789",
    instagramLink: "https://instagram.com/pruebaTestElipsonSinergy",
    facebookLink: "https://facebook.com/pruebaTestElipsonSinergy",
    linkedInLink: "https://linkedin.com/in/pruebaTestElipsonSinergy",
  },
  {
    id: "camilo_herrera",
    name: "Camilo Herrera",
    role: {
      es: "CTO",
      en: "CTO",
      por: "CTO",
    },
    roleDetailed: {
      es: "Chief Technology Officer",
      en: "Chief Technology Officer",
      por: "Chief Technology Officer",
    },
    description: {
      es: "Responsable de la arquitectura tecnológica de Elipson Synergy, lidera el desarrollo de soluciones digitales innovadoras con un enfoque en escalabilidad, seguridad y eficiencia. Supervisa los equipos de ingeniería para garantizar productos sólidos y alineados al futuro.",
      en: "Responsible for Elipson Synergy's technological architecture, leads the development of innovative digital solutions with a focus on scalability, security and efficiency. Supervises engineering teams to ensure solid and future-aligned products.",
      por: "Responsável pela arquitetura tecnológica da Elipson Synergy, lidera o desenvolvimento de soluções digitais inovadoras com foco em escalabilidade, segurança e eficiência. Supervisiona as equipes de engenharia para garantir produtos sólidos e alinhados ao futuro.",
    },
    readMore: {
      es: "Leer más",
      en: "Read more",
      por: "Ler mais",
    },
    readLess: {
      es: "Leer menos",
      en: "Read less",
      por: "Ler menos",
    },
    image: "/images/brayan.webp",
    whatsAppLink: "https://wa.me/573053456789",
    instagramLink: "https://instagram.com/pruebaTestElipsonSinergy",
    facebookLink: "https://facebook.com/pruebaTestElipsonSinergy",
    linkedInLink: "https://linkedin.com/in/pruebaTestElipsonSinergy",
  },
  {
    id: "franklin_romero",
    name: "Franklin Romero",
    role: {
      es: "CFO",
      en: "CFO",
      por: "CFO",
    },
    roleDetailed: {
      es: "Chief Financial Officer",
      en: "Chief Financial Officer",
      por: "Chief Financial Officer",
    },
    description: {
      es: "Gestiona la salud financiera de la organización con visión estratégica. Supervisa presupuestos, inversiones y proyecciones de crecimiento económico, asegurando el equilibrio entre innovación y sostenibilidad financiera.",
      en: "Manages the organization's financial health with strategic vision. Oversees budgets, investments and economic growth projections, ensuring the balance between innovation and financial sustainability.",
      por: "Gerencia a saúde financeira da organização com visão estratégica. Supervisiona orçamentos, investimentos e projeções de crescimento econômico, garantindo o equilíbrio entre inovação e sustentabilidade financeira.",
    },
    readMore: {
      es: "Leer más",
      en: "Read more",
      por: "Ler mais",
    },
    readLess: {
      es: "Leer menos",
      en: "Read less",
      por: "Ler menos",
    },
    image: "/images/frank.webp",
    whatsAppLink: "https://wa.me/573053456789",
    instagramLink: "https://instagram.com/pruebaTestElipsonSinergy",
    facebookLink: "https://facebook.com/pruebaTestElipsonSinergy",
    linkedInLink: "https://linkedin.com/in/pruebaTestElipsonSinergy",
  },
];

// Helper function to get localized members
export const getLocalizedMembers = (lang: "es" | "en" | "por") => {
  return membersI18n.map((member) => ({
    id: member.id,
    name: member.name,
    role: member.role[lang],
    roleDetailed: member.roleDetailed[lang],
    description: member.description[lang],
    image: member.image,
    whatsAppLink: member.whatsAppLink,
    facebookLink: member.facebookLink,
    instagramLink: member.instagramLink,
    linkedInLink: member.linkedInLink,
    readMore: member.readMore[lang],
    readLess: member.readLess[lang],
  }));
};

// Helper function to get a specific localized member
export const getLocalizedMember = (
  memberId: string,
  lang: "es" | "en" | "por"
) => {
  const member = membersI18n.find((m) => m.id === memberId);
  if (!member) return null;

  return {
    id: member.id,
    name: member.name,
    role: member.role[lang],
    roleDetailed: member.roleDetailed[lang],
    description: member.description[lang],
    image: member.image,
    whatsAppLink: member.whatsAppLink,
    facebookLink: member.facebookLink,
    instagramLink: member.instagramLink,
    linkedInLink: member.linkedInLink,
    readMore: member.readMore[lang],
    readLess: member.readLess[lang],
  };
};
