export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: string;
}

export interface SiteMeta {
  title: string;
  developerName: string;
  role: string;
  yearsOfExperience: string;
  description: string;
  canonicalUrl: string;
  email: string;
  phone?: string;
  location?: string;
  status: {
    available: boolean;
    label: string;
    sublabel: string;
  };
  nav: NavItem[];
  socials: SocialLink[];
}

export const SITE_META: SiteMeta = {
  title: 'Igor Coseanic | Senior / Lead Unity Developer',
  developerName: 'Igor Coseanic',
  role: 'Senior / Lead Unity Developer & Systems Architect',
  yearsOfExperience: '6+',
  description:
    'Portfolio of Igor Coseanic, Senior / Lead Unity Developer with 6+ years of commercial mobile, Web, and PC game experience, decoupled software architecture, backend & analytics integration, and AI-assisted engineering workflows.',
  canonicalUrl: 'https://unity-developer-portfolio-58d.pages.dev',
  email: 'igor.coseanic@icloud.com',
  phone: '+37362033736',
  location: 'Chisinau, MD-2000 Moldova',
  status: {
    available: true,
    label: 'Available for Senior / Lead Roles',
    sublabel: 'Remote / Relocation',
  },
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'CV', href: '/cv' },
  ],
  socials: [
    {
      platform: 'GitHub',
      label: 'GitHub Profile',
      url: 'https://github.com/igorko8f',
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      label: 'LinkedIn Profile',
      url: 'https://www.linkedin.com/in/igor-coseanic-unity',
      icon: 'linkedin',
    },
    {
      platform: 'Email',
      label: 'Direct Email',
      url: 'mailto:igor.coseanic@icloud.com',
      icon: 'mail',
    },
  ],
};
