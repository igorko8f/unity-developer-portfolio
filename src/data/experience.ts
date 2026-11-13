import type { Locale } from '../i18n';

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  employmentType: 'Full-time' | 'Contract' | 'Part-time';
  period: {
    start: string;
    end: string | 'Present';
  };
  location: string;
  remote: boolean;
  shortSummary: string;
  responsibilities: string[];
  leadershipAndMentoring: string[];
  technologiesUsed: string[];
  projectsLinked?: string[];
}

const WORK_EXPERIENCE_EN: WorkExperience[] = [
  {
    id: 'mobile-game-studio-nda',
    company: 'Mobile Game Studio (NDA)',
    role: 'Senior / Lead Unity Developer',
    employmentType: 'Full-time',
    period: {
      start: '05/2023',
      end: '06/2026',
    },
    location: 'Chisinau, Moldova',
    remote: false,
    shortSummary:
      'Engineered and supported live commercial mobile products on iOS & Android—led by a flagship Match-3 title (100k+ downloads)—with deep Firebase integration, custom analytics pipelines, and team technical coordination.',
    responsibilities: [
      'Developed and maintained Unity mobile applications and live products for iOS and Android.',
      'Designed and implemented gameplay systems, responsive UI, and new features with a focus on performance and scalability.',
      'Integrated and maintained Firebase (RTDB, Firestore, Auth, Analytics), monetization, attribution, and other third-party SDKs.',
      'Profiled and optimized CPU, memory usage, and loading times across mobile devices, reducing per-frame GC allocations in critical gameplay paths.',
      'Participated in technical architecture, milestone planning, sprint planning, and task estimation.',
    ],
    leadershipAndMentoring: [
      'Led code reviews, mentored developers, and coordinated technical implementation across multidisciplinary teams of up to 12 specialists (including 4 developers).',
      'Collaborated closely with designers, backend engineers, analysts, and QA to deliver high-quality live products.',
    ],
    technologiesUsed: [
      'Unity',
      'C#',
      'Firebase',
      'REST APIs',
      'LookerStudio',
      'Google Cloud',
      'UniTask',
      'UniRx',
      'Zenject',
      'AltTester',
      'iOS & Android',
    ],
    projectsLinked: ['commercial-match-3'],
  },
  {
    id: 'dragons-lake',
    company: "Dragon's Lake LTD",
    role: 'Senior Unity Developer',
    employmentType: 'Full-time',
    period: {
      start: '08/2022',
      end: '04/2023',
    },
    location: 'Chisinau, Moldova',
    remote: true,
    shortSummary:
      'Developed and maintained a cross-platform card game for Web and PC using Unity, implementing core gameplay mechanics, UI features, and performance optimization.',
    responsibilities: [
      'Developed and maintained a cross-platform card game for Web and PC using Unity.',
      'Implemented gameplay systems, UI features, and core mechanics for collectible card game systems.',
      'Optimized project performance and improved application stability across desktop and web environments.',
      'Contributed to technical architecture and feature planning.',
    ],
    leadershipAndMentoring: [
      'Collaborated with designers, backend developers, artists, and QA teams throughout the entire production cycle.',
      'Established decoupled architectural patterns and clear code review practices.',
    ],
    technologiesUsed: [
      'Unity',
      'C#',
      'Web & PC',
      'Software Architecture',
      'GitFlow',
      'SOLID',
      'OOP',
      'DOTween',
      'DI',
    ],
    projectsLinked: ['blue-light-epic'],
  },
  {
    id: 'wab-studio-fastfoodgames',
    company: 'WAB Studio & FastFoodGames',
    role: 'Middle Unity Developer',
    employmentType: 'Full-time',
    period: {
      start: '01/2021',
      end: '06/2022',
    },
    location: 'Chisinau, Moldova',
    remote: true,
    shortSummary:
      'Engineered mobile applications and interactive game prototypes using Unity, focusing on UX, gameplay loops, and monetization SDKs.',
    responsibilities: [
      'Developed mobile applications and game prototypes using Unity.',
      'Implemented gameplay and UI systems focused on user experience and player engagement.',
      'Integrated third-party SDKs for analytics and monetization.',
    ],
    leadershipAndMentoring: [
      'Collaborated with designers and artists to create polished interactive content and rapid proof-of-concept prototypes.',
    ],
    technologiesUsed: [
      'Unity',
      'C#',
      'Mobile (iOS & Android)',
      'UI Systems',
      'Analytics & Monetization SDKs',
      'Git',
    ],
  },
  {
    id: 'ourview-games',
    company: 'OurView Games',
    role: 'Unity Game Developer',
    employmentType: 'Full-time',
    period: {
      start: '04/2020',
      end: '01/2021',
    },
    location: 'Chisinau, Moldova',
    remote: false,
    shortSummary:
      'Developed mobile applications and gameplay systems, UI logic, and mobile prototypes with analytics and ad network integrations.',
    responsibilities: [
      'Developed mobile applications and gameplay systems using Unity.',
      'Created UI logic and gameplay prototypes for mobile projects.',
      'Integrated analytics and monetization SDKs.',
    ],
    leadershipAndMentoring: [
      'Collaborated with multidisciplinary teams during iterative development, testing, and store submission.',
    ],
    technologiesUsed: [
      'Unity',
      'C#',
      'Mobile Game Development',
      'UI Logic',
      'Monetization SDKs',
      'Git',
    ],
  },
];

const WORK_EXPERIENCE_RU: WorkExperience[] = [
  {
    id: 'mobile-game-studio-nda',
    company: 'Мобильная игровая студия (NDA)',
    role: 'Senior / Lead Unity Developer',
    employmentType: 'Full-time',
    period: {
      start: '05/2023',
      end: '06/2026',
    },
    location: 'Кишинёв, Молдова',
    remote: false,
    shortSummary:
      'Разрабатывал и поддерживал коммерческие live-продукты для iOS и Android — во главе с флагманской Match-3 игрой (100k+ установок) — с глубокой интеграцией Firebase, кастомными конвейерами аналитики и технической координацией команды.',
    responsibilities: [
      'Разрабатывал и поддерживал мобильные Unity-приложения и live-продукты для iOS и Android.',
      'Проектировал и реализовывал геймплейные системы, адаптивный UI и новые фичи с фокусом на производительность и масштабируемость.',
      'Интегрировал и поддерживал Firebase (RTDB, Firestore, Auth, Analytics), SDK монетизации, атрибуции и другие сторонние сервисы.',
      'Профилировал и оптимизировал CPU, потребление памяти и время загрузки на мобильных устройствах, снижая покадровые GC-аллокации на критических путях.',
      'Участвовал в проектировании технической архитектуры, планировании майлстоунов, спринтов и оценке задач.',
    ],
    leadershipAndMentoring: [
      'Проводил код-ревью, менторил разработчиков и координировал техническую реализацию в кросс-функциональной команде до 12 специалистов (включая 4 разработчиков).',
      'Тесно взаимодействовал с геймдизайнерами, бэкенд-инженерами, аналитиками и QA для выпуска стабильных live-обновлений.',
    ],
    technologiesUsed: [
      'Unity',
      'C#',
      'Firebase',
      'REST APIs',
      'LookerStudio',
      'Google Cloud',
      'UniTask',
      'UniRx',
      'Zenject',
      'AltTester',
      'iOS и Android',
    ],
    projectsLinked: ['commercial-match-3'],
  },
  {
    id: 'dragons-lake',
    company: "Dragon's Lake LTD",
    role: 'Senior Unity Developer',
    employmentType: 'Full-time',
    period: {
      start: '08/2022',
      end: '04/2023',
    },
    location: 'Кишинёв, Молдова',
    remote: true,
    shortSummary:
      'Разрабатывал и поддерживал кроссплатформенную карточную игру для Web и PC на Unity: основные геймплейные механики, UI-функциональность и оптимизация производительности.',
    responsibilities: [
      'Разрабатывал и поддерживал кроссплатформенную карточную игру для Web и PC на движке Unity.',
      'Реализовывал геймплейные системы, UI-компоненты и базовые механики коллекционной карточной игры.',
      'Оптимизировал производительность проекта и повышал стабильность работы на десктопе и в браузере.',
      'Участвовал в проектировании архитектуры и планировании функциональности.',
    ],
    leadershipAndMentoring: [
      'Взаимодействовал с дизайнерами, бэкенд-разработчиками, художниками и QA на протяжении всего цикла разработки.',
      'Внедрял слабосвязанные архитектурные паттерны и понятные практики код-ревью.',
    ],
    technologiesUsed: [
      'Unity',
      'C#',
      'Web и PC',
      'Архитектура ПО',
      'GitFlow',
      'SOLID',
      'OOP',
      'DOTween',
      'DI',
    ],
    projectsLinked: ['blue-light-epic'],
  },
  {
    id: 'wab-studio-fastfoodgames',
    company: 'WAB Studio & FastFoodGames',
    role: 'Middle Unity Developer',
    employmentType: 'Full-time',
    period: {
      start: '01/2021',
      end: '06/2022',
    },
    location: 'Кишинёв, Молдова',
    remote: true,
    shortSummary:
      'Создавал мобильные приложения и интерактивные игровые прототипы на Unity с упором на UX, кор-геймплей и интеграцию SDK монетизации.',
    responsibilities: [
      'Разрабатывал мобильные приложения и игровые прототипы на Unity.',
      'Реализовывал геймплейные и UI-системы, ориентированные на пользовательский опыт и вовлечённость.',
      'Интегрировал сторонние SDK для аналитики и монетизации.',
    ],
    leadershipAndMentoring: [
      'Совместно с дизайнерами и художниками создавал отполированный интерактивный контент и быстрые proof-of-concept прототипы.',
    ],
    technologiesUsed: [
      'Unity',
      'C#',
      'Mobile (iOS и Android)',
      'UI-системы',
      'SDK аналитики и монетизации',
      'Git',
    ],
  },
  {
    id: 'ourview-games',
    company: 'OurView Games',
    role: 'Unity Game Developer',
    employmentType: 'Full-time',
    period: {
      start: '04/2020',
      end: '01/2021',
    },
    location: 'Кишинёв, Молдова',
    remote: false,
    shortSummary:
      'Разрабатывал мобильные приложения, геймплейные системы, логику UI и прототипы с интеграцией аналитики и рекламных сетей.',
    responsibilities: [
      'Разрабатывал мобильные приложения и геймплейные системы на Unity.',
      'Создавал UI-логику и игровые прототипы для мобильных проектов.',
      'Интегрировал SDK аналитики и рекламной монетизации.',
    ],
    leadershipAndMentoring: [
      'Работал в мультидисциплинарной команде на этапах итеративной разработки, тестирования и публикации в сторах.',
    ],
    technologiesUsed: [
      'Unity',
      'C#',
      'Мобильная разработка игр',
      'UI-логика',
      'SDK монетизации',
      'Git',
    ],
  },
];

export interface Education {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
  location: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

const EDUCATION_BY_LOCALE: Record<Locale, Education> = {
  en: {
    institution: 'Technical University Of Moldova, Chisinau',
    degree: 'Bachelor of Science',
    field: 'Software And Applications Development And Analysis',
    graduationDate: '05/2019',
    location: 'Chisinau, Moldova',
  },
  ru: {
    institution: 'Технический университет Молдовы (ТУМ), Кишинёв',
    degree: 'Бакалавр наук',
    field: 'Разработка и анализ программного обеспечения и приложений',
    graduationDate: '05/2019',
    location: 'Кишинёв, Молдова',
  },
};

const LANGUAGES_BY_LOCALE: Record<Locale, Language[]> = {
  en: [
    { language: 'Russian', proficiency: 'Native language' },
    { language: 'Romanian', proficiency: 'B2' },
    { language: 'English', proficiency: 'B2' },
  ],
  ru: [
    { language: 'Русский', proficiency: 'Родной' },
    { language: 'Румынский', proficiency: 'B2' },
    { language: 'Английский', proficiency: 'B2' },
  ],
};

export function getWorkExperience(locale: Locale = 'en'): WorkExperience[] {
  return locale === 'ru' ? WORK_EXPERIENCE_RU : WORK_EXPERIENCE_EN;
}

export function getEducation(locale: Locale = 'en'): Education {
  return EDUCATION_BY_LOCALE[locale];
}

export function getLanguages(locale: Locale = 'en'): Language[] {
  return LANGUAGES_BY_LOCALE[locale];
}

export const WORK_EXPERIENCE: WorkExperience[] = WORK_EXPERIENCE_EN;
export const EDUCATION: Education = EDUCATION_BY_LOCALE.en;
export const LANGUAGES: Language[] = LANGUAGES_BY_LOCALE.en;
