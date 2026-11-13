import { localizePath, type Locale } from '../i18n';

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

const SHARED_CONTACT = {
  canonicalUrl: 'https://unity-developer-portfolio-58d.pages.dev',
  email: 'igor.coseanic@icloud.com',
  phone: '+37362033736',
  yearsOfExperience: '6+',
};

const SITE_META_BY_LOCALE: Record<Locale, SiteMeta> = {
  en: {
    title: 'Igor Coseanic | Senior / Lead Unity Developer',
    developerName: 'Igor Coseanic',
    role: 'Senior / Lead Unity Developer & Systems Architect',
    yearsOfExperience: SHARED_CONTACT.yearsOfExperience,
    description:
      'Portfolio of Igor Coseanic, Senior / Lead Unity Developer with 6+ years of commercial mobile, Web, and PC game experience, decoupled software architecture, backend & analytics integration, and AI-assisted engineering workflows.',
    canonicalUrl: SHARED_CONTACT.canonicalUrl,
    email: SHARED_CONTACT.email,
    phone: SHARED_CONTACT.phone,
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
  },
  ru: {
    title: 'Игорь Косяник | Senior / Lead Unity Developer',
    developerName: 'Игорь Косяник',
    role: 'Senior / Lead Unity Developer и системный архитектор',
    yearsOfExperience: SHARED_CONTACT.yearsOfExperience,
    description:
      'Портфолио Игоря Косяника, Senior / Lead Unity Developer с 6+ годами коммерческого опыта на Mobile, Web и PC: модульная архитектура, интеграция бэкенда и аналитики, а также AI-ассистированные рабочие процессы.',
    canonicalUrl: SHARED_CONTACT.canonicalUrl,
    email: SHARED_CONTACT.email,
    phone: SHARED_CONTACT.phone,
    location: 'Кишинёв, MD-2000 Молдова',
    status: {
      available: true,
      label: 'Открыт к Senior / Lead ролям',
      sublabel: 'Удалённо / Релокация',
    },
    nav: [
      { label: 'Проекты', href: localizePath('/projects', 'ru') },
      { label: 'Опыт', href: localizePath('/experience', 'ru') },
      { label: 'Резюме', href: localizePath('/cv', 'ru') },
    ],
    socials: [
      {
        platform: 'GitHub',
        label: 'Профиль GitHub',
        url: 'https://github.com/igorko8f',
        icon: 'github',
      },
      {
        platform: 'LinkedIn',
        label: 'Профиль LinkedIn',
        url: 'https://www.linkedin.com/in/igor-coseanic-unity',
        icon: 'linkedin',
      },
      {
        platform: 'Email',
        label: 'Прямой Email',
        url: 'mailto:igor.coseanic@icloud.com',
        icon: 'mail',
      },
    ],
  },
};

export function getSiteMeta(locale: Locale = 'en'): SiteMeta {
  return SITE_META_BY_LOCALE[locale];
}

export const SITE_META: SiteMeta = SITE_META_BY_LOCALE.en;
