export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  highlight?: boolean;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  shortDescription: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'unity-csharp',
    title: 'Unity Engine & C# Core',
    shortDescription:
      'Deep runtime mechanics, profiling, memory management, and language internals.',
    skills: [
      {
        name: 'C# (Modern Language Features, .NET / Mono)',
        level: 'Expert',
        highlight: true,
      },
      {
        name: 'Unity Engine (Unity 6, Mobile 2D/3D Lifecycle, URP)',
        level: 'Expert',
        highlight: true,
      },
      {
        name: 'Memory & Profiler (GC Allocations, Memory Leaks, Frame Spikes)',
        level: 'Expert',
        highlight: true,
      },
      {
        name: 'Addressables & Asset Management',
        level: 'Advanced',
      },
      {
        name: 'Unity UI (uGUI, UI Toolkit, Responsive Canvas)',
        level: 'Expert',
      },
      {
        name: 'Animation Systems (DOTween, Unity Animation, Spine Runtime)',
        level: 'Advanced',
      },
    ],
  },
  {
    id: 'backend-analytics',
    title: 'Backend Integration & Analytics Infrastructure',
    shortDescription:
      'Connecting client games to server services, databases, and telemetry data pipelines.',
    skills: [
      {
        name: 'REST API Client Integration (HTTP/JSON, Auth Tokens, Error Handling)',
        level: 'Advanced',
        highlight: true,
      },
      {
        name: 'Firebase (Authentication, Realtime Database, Cloud Firestore)',
        level: 'Advanced',
        highlight: true,
      },
      {
        name: 'Analytics Telemetry & Custom Events (Firebase Analytics, AppsFlyer)',
        level: 'Expert',
        highlight: true,
      },
      {
        name: 'LookerStudio & Google Cloud (BigQuery, Telemetry Data Analysis)',
        level: 'Advanced',
        highlight: true,
      },
      {
        name: 'A/B Testing & Remote Configuration (RemoteConfig, Dynamic Difficulty)',
        level: 'Advanced',
        highlight: true,
      },
      {
        name: 'Offline Data Caching & Network Synchronization',
        level: 'Advanced',
        highlight: true,
      },
      {
        name: 'Monetization & Mediation (Unity IAP, Google Mobile Ads)',
        level: 'Advanced',
      },
    ],
  },
  {
    id: 'architecture',
    title: 'Software Architecture & Modular Design',
    shortDescription: 'Decoupled, maintainable architectures that scale across multi-year LiveOps.',
    skills: [
      {
        name: 'SOLID & Component-Based Design',
        level: 'Expert',
        highlight: true,
      },
      {
        name: 'Architectural Patterns (MVX, HMVC, State Machines)',
        level: 'Expert',
        highlight: true,
      },
      {
        name: 'ECS & Entitas Framework',
        level: 'Advanced',
      },
      {
        name: 'ScriptableObject-Driven Systems & Custom Tooling',
        level: 'Expert',
        highlight: true,
      },
      {
        name: 'Reactive Programming (R3, UniRx)',
        level: 'Advanced',
        highlight: true,
      },
      {
        name: 'Dependency Injection (Zenject / Extenject, VContainer)',
        level: 'Advanced',
        highlight: true,
      },
      {
        name: 'Asynchronous Workflows (UniTask, async/await)',
        level: 'Advanced',
        highlight: true,
      },
      {
        name: 'Finite State Machines & Game Loop Separation',
        level: 'Expert',
      },
    ],
  },
  {
    id: 'quality-devops',
    title: 'Engineering Quality, Tooling & DevOps',
    shortDescription: 'Ensuring code reliability, automated testing, and reproducible builds.',
    skills: [
      {
        name: 'Git & Branching Workflows (GitFlow, Trunk, Code Review)',
        level: 'Expert',
        highlight: true,
      },
      {
        name: 'Automated Testing (AltTester, PlayMode, Unit Tests)',
        level: 'Advanced',
        highlight: true,
      },
      {
        name: 'Code Review Leadership & Technical Mentorship',
        level: 'Expert',
        highlight: true,
      },
      {
        name: 'CI/CD Pipelines (GitHub Actions, Automated Build Scripts)',
        level: 'Advanced',
      },
      {
        name: 'Crash Triage & Diagnostics (Firebase Crashlytics, Smartlook)',
        level: 'Advanced',
      },
    ],
  },
  {
    id: 'specialized-ai',
    title: 'Specialized Technologies & AI Workflows',
    shortDescription: 'Augmented reality, external hardware, and disciplined agentic tooling.',
    skills: [
      {
        name: 'Augmented Reality (Vuforia, AR Foundation)',
        level: 'Advanced',
      },
      {
        name: 'Hardware & External Integration (NFC, Web3 APIs)',
        level: 'Proficient',
      },
      {
        name: 'Agentic Engineering (Antigravity, Claude Code, AGENTS.md)',
        level: 'Advanced',
        highlight: true,
      },
      {
        name: 'Task Decomposition & Context Engineering',
        level: 'Advanced',
        highlight: true,
      },
      {
        name: 'Human-in-the-Loop Quality Verification',
        level: 'Expert',
        highlight: true,
      },
    ],
  },
];
