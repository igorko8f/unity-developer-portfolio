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

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'avantaj-prim',
    company: 'Avantaj Prim S.R.L',
    role: 'Senior Unity Developer',
    employmentType: 'Full-time',
    period: {
      start: '05/2023',
      end: 'Present',
    },
    location: 'Chisinau, Moldova',
    remote: false,
    shortSummary:
      'Engineered and supported live mobile products on iOS & Android reaching 1M+ downloads (Jolly Match 3, Jolly Battle, Jigsaw Puzzle) with deep Firebase integration, custom analytics pipelines, and team technical coordination.',
    responsibilities: [
      'Developed and maintained Unity mobile applications and live products for iOS and Android.',
      'Designed and implemented gameplay systems, responsive UI, and new features with a focus on performance and scalability.',
      'Integrated and maintained Firebase (RTDB, Firestore, Auth, Analytics), monetization, attribution, and other third-party SDKs.',
      'Optimized CPU, memory usage, and loading times across a wide range of mobile devices, eliminating GC allocations and targeting 60 FPS.',
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
      'UniRx / R3',
      'Zenject',
      'AltTester',
      'iOS & Android',
    ],
    projectsLinked: ['jolly-match-3'],
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

export const EDUCATION: Education = {
  institution: 'Technical University Of Moldova, Chisinau',
  degree: 'Bachelor of Science',
  field: 'Software And Applications Development And Analysis',
  graduationDate: '05/2019',
  location: 'Chisinau, Moldova',
};

export const LANGUAGES: Language[] = [
  { language: 'Russian', proficiency: 'Native language' },
  { language: 'Romanian', proficiency: 'B2' },
  { language: 'English', proficiency: 'B1' },
];
