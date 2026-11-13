export type SkillTier = 'production' | 'additional' | 'exploring';

export interface Skill {
  name: string;
  tier: SkillTier;
  highlight?: boolean;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  shortDescription: string;
  skills: Skill[];
}

export const SKILL_TIER_META: Record<
  SkillTier,
  { label: string; description: string; badgeClasses: string }
> = {
  production: {
    label: 'Production Experience',
    description: 'Used in shipped commercial mobile, PC, and WebGL products.',
    badgeClasses: 'border-emerald-500/30 bg-emerald-950/40 text-emerald-300',
  },
  additional: {
    label: 'Additional Experience',
    description: 'Applied in independent projects, technical studies, and prototyping.',
    badgeClasses: 'border-cyan-500/30 bg-cyan-950/40 text-cyan-300',
  },
  exploring: {
    label: 'Familiarity / Exploring',
    description: 'Exposure through R&D, architecture evaluation, or targeted integration.',
    badgeClasses: 'border-slate-700 bg-slate-900 text-slate-300',
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'unity-csharp',
    title: 'Unity Engine & C# Core',
    shortDescription:
      'Runtime mechanics, profiling, memory management, and cross-platform delivery.',
    skills: [
      {
        name: 'C# (.NET / Mono, Modern Language Features)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Unity Engine (Mobile 2D/3D, PC, WebGL, URP)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Memory & CPU Profiling (Allocation Tracking, Frame Pacing)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Unity UI (uGUI, Responsive Canvas, Multi-Resolution Layouts)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Animation Systems (DOTween, Unity Animation, Spine Runtime)',
        tier: 'production',
      },
      {
        name: 'Unity 6 (6000.x)',
        tier: 'production',
      },
      {
        name: 'Addressables & Asset Management',
        tier: 'production',
      },
      {
        name: 'UI Toolkit',
        tier: 'exploring',
      },
    ],
  },
  {
    id: 'backend-analytics',
    title: 'Backend Integration & Analytics Infrastructure',
    shortDescription:
      'Connecting game clients to server services, databases, and telemetry pipelines.',
    skills: [
      {
        name: 'REST API Client Integration (HTTP/JSON, JWT Auth, Error Handling)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Firebase (Auth, Realtime Database, Cloud Firestore, Crashlytics)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Analytics Telemetry & Custom Events (Firebase Analytics, AppsFlyer)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'LookerStudio & Google Cloud (BigQuery, Telemetry Analysis)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'A/B Testing & Remote Configuration (Remote Config, Dynamic Difficulty)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Offline Event Caching & Network Synchronization',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Monetization & Mediation (Unity IAP, Google Mobile Ads)',
        tier: 'production',
      },
    ],
  },
  {
    id: 'architecture',
    title: 'Software Architecture & Modular Design',
    shortDescription:
      'Decoupled, maintainable architectures for multi-year LiveOps and modular systems.',
    skills: [
      {
        name: 'SOLID & Component-Based Design',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Architectural Patterns (MVX, HMVC, Finite State Machines)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Dependency Injection (Zenject / Extenject)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Asynchronous Workflows (UniTask, async/await)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Reactive Programming (UniRx)',
        tier: 'production',
      },
      {
        name: 'ScriptableObject-Driven Systems & Custom Inspector Tooling',
        tier: 'additional',
        highlight: true,
      },
      {
        name: 'Reactive Streams (R3)',
        tier: 'additional',
      },
      {
        name: 'ECS & Entitas Framework',
        tier: 'exploring',
      },
      {
        name: 'VContainer DI',
        tier: 'exploring',
      },
    ],
  },
  {
    id: 'quality-devops',
    title: 'Engineering Quality, Tooling & AI Workflows',
    shortDescription:
      'Code reliability, automated testing, reproducible builds, and AI-assisted workflows.',
    skills: [
      {
        name: 'Git & Branching Workflows (GitFlow, Submodules, Code Review)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Automated Testing (AltTester, PlayMode, Unit Tests)',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'Code Review Leadership & Technical Mentorship',
        tier: 'production',
        highlight: true,
      },
      {
        name: 'CI/CD Pipelines (GitHub Actions, Automated Build Scripts)',
        tier: 'production',
      },
      {
        name: 'Crash Triage & Diagnostics (Firebase Crashlytics, Smartlook)',
        tier: 'production',
      },
      {
        name: 'AI-Assisted Workflows (Claude Code, GitHub Copilot, AGENTS.md)',
        tier: 'additional',
      },
    ],
  },
  {
    id: 'specialized',
    title: 'Specialized Domains & Hardware',
    shortDescription: 'Augmented reality and external hardware/platform integrations.',
    skills: [
      {
        name: 'Augmented Reality (Vuforia Engine Marker Tracking)',
        tier: 'additional',
      },
      {
        name: 'Hardware & External Integration (NFC, Web3 APIs)',
        tier: 'exploring',
      },
      {
        name: 'AR Foundation',
        tier: 'exploring',
      },
    ],
  },
];
