import type { Locale } from './index';

export const UI_TRANSLATIONS = {
  en: {
    skipToContent: 'Skip to main content',
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      cv: 'CV',
      mainAria: 'Main Navigation',
      mobileAria: 'Mobile Navigation',
      homeAria: 'Home page',
      toggleMenuAria: 'Toggle navigation menu',
      getInTouch: 'Get in Touch',
      languageSwitcherAria: 'Switch language',
    },
    header: {
      subtitle: 'Senior Unity Developer',
    },
    footer: {
      bio: 'Senior / Lead Unity Developer specializing in commercial mobile games, decoupled software architecture, Firebase / REST backend integration, and AI-assisted development workflows.',
      directEmail: 'Direct Email:',
      copy: 'Copy',
      copyTitle: 'Copy email to clipboard',
      copyAria: 'Copy email address',
      copied: 'Copied!',
      navigationHeading: 'Navigation',
      profilesHeading: 'Profiles & Links',
      copyrightSuffix: 'Built for high performance.',
      techBadge: 'Static HTML/CSS • Astro 7 & Tailwind 4 • Zero Framework JS Overhead',
    },
    hero: {
      headingPrefix: 'Building scalable',
      headingHighlight: 'Unity game architectures',
      headingSuffix: '& connected live systems.',
      description:
        "Senior / Lead Unity Developer with 6+ years of commercial experience across mobile, PC, and WebGL. I specialize in decoupled gameplay systems, resilient Firebase & REST telemetry pipelines, mobile performance profiling, and technical team leadership—and yes, I'm also a big Naruto fan.",
      exploreProjects: 'Explore Projects',
      viewCv: 'View Resume / CV',
      getInTouch: 'Get in Touch ↓',
      competenciesTitle: 'Core Engineering Competencies',
      competencies: [
        { text: 'Unity • iOS / Android / PC / WebGL', variant: 'default' },
        { text: 'Firebase & REST APIs', variant: 'cyan' },
        { text: 'Custom Telemetry & Caching', variant: 'amber' },
        { text: 'MVX & SOLID Architecture', variant: 'default' },
        { text: 'UniTask & UniRx', variant: 'default' },
        { text: 'Zenject DI', variant: 'default' },
        { text: 'AltTester & CI/CD', variant: 'default' },
      ],
      portraitAlt: 'Igor Coseanic — Senior Unity Developer',
      yearsBadge: '6+ Years Production',
      cardRole: 'Senior / Lead Unity Developer',
      cardMeta: ['6+ Years Exp', 'Mobile, Web & PC', 'Chisinau / Remote'],
    },
    metrics: {
      ariaLabel: 'Key Impact Highlights',
      items: [
        {
          value: '6+ Years',
          label: 'Commercial Unity Experience',
          description: 'Production game development across Mobile (iOS/Android), PC, and WebGL.',
        },
        {
          value: 'Mobile & LiveOps',
          label: 'Performance & Telemetry',
          description:
            'Profiling-driven frame pacing, allocation-conscious hot paths, and Firebase telemetry.',
        },
        {
          value: '5 Platforms',
          label: 'Cross-Platform Delivery',
          description:
            'Unity builds delivered across iOS, Android, PC, WebGL, and Augmented Reality.',
        },
        {
          value: 'Lead & QA',
          label: 'Architecture & Automated Testing',
          description: 'Code review leadership, AltTester regression suites, and CI/CD pipelines.',
        },
      ],
    },
    featuredProjects: {
      eyebrow: '01 / Selected Work',
      heading: 'Featured Engineering Case Studies',
      description:
        'Proven commercial mobile production, decoupled software architecture, and specialized technology integration.',
      viewAll: 'View All 5 Projects',
      flagshipBadge: 'Commercial Mobile Flagship',
      teamLeadBadge: 'Team Lead',
      highlights: [
        {
          title: '⚡ Offline Telemetry Pipeline',
          color: 'amber',
          description:
            'Custom analytics pipeline with cached queue synchronizing batches upon network reconnection.',
        },
        {
          title: '🌐 REST API & Firebase Backend',
          color: 'cyan',
          description:
            'Teams social messaging client, JWT auth, and Firebase RTDB/Firestore live synchronization.',
        },
        {
          title: '🧩 Reusable Core Git Submodule',
          color: 'emerald',
          description:
            'Extracted the Match-3 core into a standalone Git submodule, allowing other company projects to integrate it and customize visuals.',
        },
        {
          title: '🎮 2D-to-3D Gameplay Pipeline',
          color: 'purple',
          description:
            'Converted the core 2D gameplay pipeline to 3D and optimized performance and rendering for mobile devices.',
        },
      ],
      readArchitectureCaseStudy: 'Read Architecture Case Study',
      readTechnicalCaseStudy: 'Read Technical Case Study →',
      downloadsBadge: '100k+ Downloads',
      gameplayVideo: 'Gameplay Video',
      demoVideosSuffix: 'Demo Videos',
      screenshotsSuffix: 'Screenshots',
      visualScreensNda: 'Visual Screens • NDA',
      architectureCaseStudyNda: 'Architecture Case Study • NDA',
      gameplayVideoPlus: 'Gameplay Video +',
      screensLabel: 'Screens',
    },
    pillars: {
      eyebrow: '02 / Engineering Principles',
      heading: 'Core Technical Pillars',
      description:
        'How I approach game development as rigorous software engineering: building scalable client architectures, resilient backend pipelines, and high-performance mobile systems.',
      pillarLabel: 'Pillar',
      items: [
        {
          number: '01',
          title: 'Commercial Gameplay & Mobile Optimization',
          description:
            'Designing robust gameplay systems tuned for smooth frame pacing on resource-constrained mobile hardware.',
          items: [
            'Core puzzle & Match-3 cascading algorithms with deterministic board states',
            'Memory management: profiling and reducing per-frame GC allocations in critical gameplay paths',
            'Mobile GPU optimization: draw call reduction, texture atlas optimization, and frame budgeting',
            'Deep profiling with Unity Profiler, Memory Profiler, and on-device diagnostics',
          ],
        },
        {
          number: '02',
          title: 'Backend Integration & Telemetry Pipelines',
          description:
            'Treating game clients as connected products with resilient server communication and data-driven observability.',
          items: [
            'Client-side REST API integration with token authentication and retry policies',
            'Firebase ecosystem: Realtime Database, Firestore, and Authentication',
            'Custom analytics telemetry pipeline with offline caching queues',
            'A/B testing experimentation hooks and dynamic difficulty tuning via Remote Config',
          ],
        },
        {
          number: '03',
          title: 'Modular Architecture & Clean Design',
          description:
            'Employing software craftsmanship to keep large codebases maintainable and extensible across multi-year live operations.',
          items: [
            'Component-based ability composition driven by ScriptableObjects',
            'Reactive data binding using UniRx and R3 event pipelines',
            'Dependency injection (Zenject / Extenject) for loose coupling and testability',
            'Finite State Machines separating high-level meta game flows from gameplay logic',
          ],
        },
        {
          number: '04',
          title: 'Engineering Quality, Testing & Mentorship',
          description:
            'Establishing engineering standards, automated test coverage, and collaborative mentoring across cross-functional teams.',
          items: [
            'Automated UI and gameplay regression testing using AltTester and PlayMode runners',
            'Continuous Integration pipelines automating multi-platform build artifact generation',
            'Rigorous code reviews emphasizing architectural cleanliness and memory safety',
            'Mentoring junior and mid-level developers on C# idioms and design patterns',
          ],
        },
      ],
    },
    aiSpotlight: {
      eyebrow: '03 / Supporting Workflows',
      heading: 'AI-Assisted Engineering Workflows',
      description:
        'Alongside core Unity architecture, I integrate Claude Code and GitHub Copilot into my development pipeline for test scaffolding, SDK research, and documentation—always under strict human code review and profiling checks.',
      workflows: [
        {
          title: 'AI-Assisted Test Automation',
          description:
            'Scaffolding edge-case unit and state-machine test fixtures for pure C# game logic, then auditing every assertion manually.',
        },
        {
          title: 'Pipeline & Boilerplate Velocity',
          description:
            'Drafting typed C# DTOs, serialization adapters, and repetitive SDK integration wrappers using Claude Code and GitHub Copilot.',
        },
        {
          title: 'Architecture & Context Docs',
          description:
            'Maintaining structured repository rules (AGENTS.md) and architectural notes so AI tooling respects Unity memory and lifecycle constraints.',
        },
        {
          title: 'Human-in-the-Loop Verification',
          description:
            'Treating all generated code as untrusted drafts—verified via compiler checks, Unity Profiler allocation tracking, and code review.',
        },
      ],
    },
    experiencePreview: {
      eyebrow: '04 / Career Progression',
      heading: 'Professional Experience & Leadership',
      description:
        '6+ years building commercial mobile titles, collaborating across teams, and leading technical initiatives.',
      viewTimeline: 'View Full Career Timeline',
    },
    contact: {
      heading: "Let's Build Something Great Together",
      description:
        "Looking for a Unity developer for gameplay systems, client-server integration, or mobile optimization? Feel free to reach out—I'd love to connect.",
      directContact: 'Direct Contact',
      copyEmail: 'Copy Email',
      copiedToClipboard: 'Copied to clipboard!',
      sendEmail: 'Send Email',
      viewFullCv: 'View Full CV',
    },
    projectsPage: {
      metaTitle: 'Projects & Engineering Case Studies | Senior Unity Developer',
      metaDescription:
        'Comprehensive case studies covering commercial mobile production, decoupled software architecture, Firebase/REST integrations, and specialized hardware interactions.',
      eyebrow: 'Portfolio Catalog',
      heading: 'Engineering Projects',
      description:
        'In-depth technical case studies showcasing commercial mobile production, modular component architectures, telemetry pipelines, and external technology integrations.',
      filterAll: 'All Projects',
      filterCommercial: 'Commercial Mobile',
      filterArchitecture: 'Architecture & Systems',
      filterSpecialized: 'Specialized & Hardware',
      sectionCommercial: 'Commercial Production & LiveOps',
      sectionArchitecture: 'Software Architecture & Independent Systems',
      sectionSpecialized: 'Specialized Technologies & External Hardware',
    },
    projectCommon: {
      categories: {
        commercial: 'Commercial Mobile',
        'educational-ar': 'Augmented Reality',
        'hardware-web3': 'Hardware & Web3',
        'architecture-showcase': 'Architecture Showcase',
        'independent-game': 'Gameplay Logic',
        default: 'Project',
      },
      myRole: 'My Role',
      scope: 'Scope:',
      category: 'Category',
      platforms: 'Platforms',
      verified: '(Verified)',
      verifiedTitle: 'Verified production data',
      ownershipHeading: 'Systems & Engineering Ownership Breakdown',
      personallyImplemented: 'Personally Implemented',
      integratedMaintained: 'Integrated & Maintained',
      collaborativeSystems: 'Collaborative Systems',
      telemetryHeading: '📊 Telemetry & Data Infrastructure',
      backendHeading: '🌐 Backend & REST API Communication',
      technologiesHeading: 'Technologies & Libraries',
      engineeringHighlights: 'Engineering Highlights',
      exploreCaseStudy: 'Explore Case Study',
      mediaShowcaseHeading: 'Gameplay Video & Visual Showcase',
      oneVideo: '1 Gameplay Video',
      demoVideos: 'Demo Videos',
      screenshots: 'Screenshots',
      videoFallbackTitle: 'Gameplay Showcase',
      videoUnsupported: 'Your browser does not support HTML5 video playback.',
      mobileScreensHeading: 'Mobile Gameplay & LiveOps Screens',
      clickToEnlarge: 'Click any screen to enlarge',
      keyArtHeading: 'Key Art & Feature Highlights',
      expand: 'Expand ⤢',
      lightboxAria: 'Full size screenshot viewer',
      closeEsc: 'Close [ESC]',
      previousCaseStudy: 'Previous Case Study',
      nextCaseStudy: 'Next Case Study',
      backToAllProjects: 'Back to All Projects',
      allProjects: 'All Projects',
      projectNavAria: 'Project Navigation',
      titleSuffix: 'Technical Case Study | Senior Unity Developer',
      opensInNewTab: '(opens in new tab)',
      viewFullSizePrefix: 'View full size image:',
      viewCaseStudyAriaPrefix: 'View',
      viewCaseStudyAriaSuffix: 'case study and media',
    },
    experienceCard: {
      remote: 'Remote',
      technicalOwnership: 'Technical Ownership & Delivery',
      leadershipMentoring: 'Leadership, Mentoring & Collaboration',
      linkedProjects: 'Linked Projects:',
    },
    experiencePage: {
      metaTitle: 'Experience & Leadership | Senior Unity Developer',
      metaDescription:
        'Career timeline, systems ownership, technical leadership, code review standards, and comprehensive skills matrix of a Senior / Lead Unity Developer.',
      eyebrow: 'Career History',
      heading: 'Professional Experience & Leadership',
      description:
        '6+ years of commercial game engineering experience. Demonstrating end-to-end systems ownership, backend telemetry pipelines, mobile optimization, and engineering team mentorship.',
      viewPrintableCv: 'View Printable CV',
      section01Eyebrow: '01 / Work History',
      section01Heading: 'Career Timeline',
      section02Eyebrow: '02 / Engineering Culture',
      section02Heading: 'Leadership & Mentorship Philosophy',
      section02Description:
        'Technical seniority means multiplying the effectiveness of the entire team through clear architectural guidelines, robust tooling, and constructive mentorship.',
      leadershipPillars: [
        {
          title: 'Code Reviews as Mentorship',
          color: 'cyan',
          description:
            'Reviews are learning opportunities: catching allocation spikes and memory leaks early while coaching mid and junior engineers on C# design patterns.',
        },
        {
          title: 'Client-Server API Contracts',
          color: 'emerald',
          description:
            'Bridging the gap between game clients and server teams by defining clear REST/JSON contracts, JWT authentication flows, and retry safeguards.',
        },
        {
          title: 'Automated Quality & CI/CD',
          color: 'purple',
          description:
            'Shifting QA left by implementing automated regression suites with AltTester and PlayMode tests, integrated into continuous build pipelines.',
        },
        {
          title: 'Context & Documentation',
          color: 'amber',
          description:
            'Maintaining concise technical documentation, architecture RFCs, and agent rulefiles (AGENTS.md) to keep team standards aligned.',
        },
      ],
      section03Eyebrow: '03 / Competency Matrix',
      section03Heading: 'Technical Stack & Proficiency',
      section03Description:
        'Technologies clearly separated between commercial production experience, independent projects, and active exploration.',
      section04Eyebrow: '04 / Background & Education',
      section04Heading: 'Education & Languages',
      formalDegree: 'Formal Academic Degree',
      completedPrefix: 'Completed',
      languageProficiencies: 'Language Proficiencies',
      spokenWritten: 'Spoken & Written Languages',
    },
    cvPage: {
      metaTitleSuffix: 'CV / Resume',
      metaDescription:
        'Printable resume of Igor Coseanic, Senior / Lead Unity Developer with 6+ years of commercial game engineering, backend integration, and architecture experience.',
      printBannerLabel: 'Print-Optimized Resume View',
      printButton: 'Print / Save as PDF',
      backToTimeline: 'Back to Timeline',
      photoAlt: 'Igor Coseanic photo',
      roleHeading: 'Senior / Lead Unity Developer',
      yearsExp: '6+ Years Commercial Experience',
      specializationLine:
        'Specialized in Gameplay Systems, Mobile Performance Optimization, Unity Architecture, SDK Integration & Technical Leadership',
      summaryHeading: 'Professional Summary',
      summaryText:
        'Senior Unity Developer with 6+ years of experience building mobile, PC, and WebGL games. Specialized in gameplay systems, profiling-driven performance optimization, Unity architecture, and SDK integration, with experience leading development teams and driving technical decisions. Proven track record engineering and maintaining live titles (including a commercial Match-3 title with 100k+ downloads), Firebase infrastructure, custom telemetry pipelines, and continuous LiveOps.',
      competenciesHeading: 'Core Technical Competencies & Skills',
      competencyGroups: [
        {
          label: 'Production — Unity & C#:',
          items:
            'Unity (Unity 6, Mobile 2D/3D, PC, WebGL), C#, URP, Addressables, CPU & Memory Profiling, Allocation Optimization, uGUI, DOTween.',
        },
        {
          label: 'Production — Architecture & DI:',
          items:
            'SOLID, OOP, MVX Patterns, HMVC, Zenject / Extenject, UniRx, UniTask, Component-Based Design.',
        },
        {
          label: 'Production — Backend & Analytics:',
          items:
            'Firebase (RTDB, Firestore, Auth, Analytics, Crashlytics), REST APIs, LookerStudio, Google Cloud, AppsFlyer, Unity IAP, A/B Testing, Offline Caching.',
        },
        {
          label: 'Production — Quality & DevOps:',
          items:
            'Git, GitFlow, Git Submodules, CI/CD, AltTester Automated Testing, PlayMode Tests, Code Reviews & Technical Mentorship.',
        },
        {
          label: 'Additional Experience:',
          items:
            'ScriptableObject Frameworks, R3, Vuforia AR, Custom Inspector Tooling, AI-Assisted Workflows (Claude Code, Copilot).',
        },
        {
          label: 'Familiarity / Exploring:',
          items: 'ECS & Entitas, VContainer, UI Toolkit, AR Foundation, NFC & Web3 Client APIs.',
        },
      ],
      workHistoryHeading: 'Professional Work History',
      remoteLabel: 'Remote',
      commercialHighlightHeading: 'Commercial Production Highlight',
      match3Title: 'Commercial Match-3 Mobile Game (NDA)',
      match3Badge: '100k+ Downloads • iOS & Android Production',
      match3Meta: 'iOS & Android • Team of 12 (4 Developers) • Team Lead / Senior Unity Developer',
      match3Description:
        'Led client architecture, reusable Match-3 core Git submodule extraction, 2D-to-3D gameplay migration, Firebase (Auth, RTDB, Firestore) & REST API integration, offline-cached analytics telemetry, monetization & A/B testing, AltTester automation, and code reviews.',
      selectedProjectsHeading: 'Selected Project Case Studies',
      educationHeading: 'Education',
      languagesHeading: 'Languages',
    },
    notFound: {
      metaTitle: 'Page Not Found (404) | Senior Unity Developer',
      metaDescription: 'The requested page could not be found.',
      badge: 'ERROR 404',
      heading: 'Page Not Found',
      description:
        'The coordinate or asset you requested does not exist in this build. Return to the main command deck or explore the projects catalog.',
      returnHome: 'Return to Home',
      exploreProjects: 'Explore Projects',
    },
  },
  ru: {
    skipToContent: 'Перейти к основному содержимому',
    nav: {
      home: 'Главная',
      projects: 'Проекты',
      experience: 'Опыт',
      cv: 'Резюме',
      mainAria: 'Основная навигация',
      mobileAria: 'Мобильная навигация',
      homeAria: 'На главную',
      toggleMenuAria: 'Открыть или закрыть меню навигации',
      getInTouch: 'Связаться',
      languageSwitcherAria: 'Переключить язык',
    },
    header: {
      subtitle: 'Senior Unity Developer',
    },
    footer: {
      bio: 'Senior / Lead Unity Developer со специализацией на коммерческих мобильных играх, модульной архитектуре, интеграции бэкенда (Firebase / REST) и AI-ассистированных рабочих процессах.',
      directEmail: 'Email:',
      copy: 'Копировать',
      copyTitle: 'Скопировать email в буфер обмена',
      copyAria: 'Скопировать адрес электронной почты',
      copied: 'Скопировано!',
      navigationHeading: 'Навигация',
      profilesHeading: 'Профили и ссылки',
      copyrightSuffix: 'Создано с фокусом на производительность.',
      techBadge: 'Статический HTML/CSS • Astro 7 & Tailwind 4 • Без лишнего клиентского JS',
    },
    hero: {
      headingPrefix: 'Проектирую масштабируемую',
      headingHighlight: 'архитектуру игр на Unity',
      headingSuffix: 'и надёжные live-системы.',
      description:
        'Senior / Lead Unity Developer с 6+ годами коммерческого опыта на Mobile, PC и WebGL. Специализируюсь на слабосвязанных геймплейных системах, отказоустойчивой телеметрии на базе Firebase и REST API, профилировании производительности и техническом лидерстве — а ещё я большой фанат Наруто.',
      exploreProjects: 'Смотреть проекты',
      viewCv: 'Открыть резюме / CV',
      getInTouch: 'Связаться ↓',
      competenciesTitle: 'Ключевые инженерные компетенции',
      competencies: [
        { text: 'Unity • iOS / Android / PC / WebGL', variant: 'default' },
        { text: 'Firebase и REST API', variant: 'cyan' },
        { text: 'Кастомная телеметрия и кэширование', variant: 'amber' },
        { text: 'Архитектура MVX и SOLID', variant: 'default' },
        { text: 'UniTask и UniRx', variant: 'default' },
        { text: 'Zenject DI', variant: 'default' },
        { text: 'AltTester и CI/CD', variant: 'default' },
      ],
      portraitAlt: 'Игорь Косяник — Senior Unity Developer',
      yearsBadge: '6+ лет в продакшене',
      cardRole: 'Senior / Lead Unity Developer',
      cardMeta: ['6+ лет опыта', 'Mobile, Web и PC', 'Кишинёв / Удалённо'],
    },
    metrics: {
      ariaLabel: 'Ключевые достижения',
      items: [
        {
          value: '6+ лет',
          label: 'Коммерческий опыт в Unity',
          description: 'Продакшен-разработка игр для Mobile (iOS/Android), PC и WebGL.',
        },
        {
          value: 'Mobile и LiveOps',
          label: 'Производительность и телеметрия',
          description:
            'Профилирование frame pacing, минимизация GC-аллокаций и аналитика на Firebase.',
        },
        {
          value: '5 платформ',
          label: 'Кроссплатформенная разработка',
          description:
            'Релизные сборки Unity для iOS, Android, PC, WebGL и дополненной реальности.',
        },
        {
          value: 'Lead и QA',
          label: 'Архитектура и автотесты',
          description: 'Проведение код-ревью, регрессионные тесты на AltTester и настройка CI/CD.',
        },
      ],
    },
    featuredProjects: {
      eyebrow: '01 / Избранные работы',
      heading: 'Ключевые инженерные кейсы',
      description:
        'Коммерческие мобильные релизы, модульная архитектура ПО и интеграция специализированных технологий.',
      viewAll: 'Все 5 проектов',
      flagshipBadge: 'Коммерческий мобильный флагман',
      teamLeadBadge: 'Team Lead',
      highlights: [
        {
          title: '⚡ Офлайн-конвейер телеметрии',
          color: 'amber',
          description:
            'Кастомный аналитический пайплайн с кэшированной очередью и пакетной синхронизацией при восстановлении сети.',
        },
        {
          title: '🌐 REST API и бэкенд на Firebase',
          color: 'cyan',
          description:
            'Клиент командного чата, JWT-авторизация и live-синхронизация через Firebase RTDB и Firestore.',
        },
        {
          title: '🧩 Переиспользуемое ядро (Git Submodule)',
          color: 'emerald',
          description:
            'Выделил ядро Match-3 в отдельный Git-субмодуль, что позволило другим проектам компании подключать его со своим визуалом.',
        },
        {
          title: '🎮 Миграция геймплея из 2D в 3D',
          color: 'purple',
          description:
            'Перевёл основной 2D-пайплайн геймплея в 3D и оптимизировал рендеринг и производительность для мобильных устройств.',
        },
      ],
      readArchitectureCaseStudy: 'Читать разбор архитектуры',
      readTechnicalCaseStudy: 'Читать технический кейс →',
      downloadsBadge: '100k+ установок',
      gameplayVideo: 'Видео геймплея',
      demoVideosSuffix: 'демо-видео',
      screenshotsSuffix: 'скриншотов',
      visualScreensNda: 'Скриншоты • NDA',
      architectureCaseStudyNda: 'Архитектурный кейс • NDA',
      gameplayVideoPlus: 'Видео геймплея +',
      screensLabel: 'экранов',
    },
    pillars: {
      eyebrow: '02 / Инженерные принципы',
      heading: 'Ключевые технические направления',
      description:
        'Мой подход к геймдеву как к системной программной инженерии: масштабируемая клиентская архитектура, отказоустойчивый бэкенд и оптимизация под мобильные устройства.',
      pillarLabel: 'Направление',
      items: [
        {
          number: '01',
          title: 'Коммерческий геймплей и мобильная оптимизация',
          description:
            'Проектирование надёжных геймплейных систем со стабильным frame pacing на мобильном железе.',
          items: [
            'Алгоритмы головоломок и Match-3 каскадов с детерминированным состоянием поля',
            'Управление памятью: профилирование и сокращение покадровых GC-аллокаций на горячих путях',
            'Мобильная GPU-оптимизация: снижение draw calls, оптимизация атласов и бюджета кадра',
            'Глубокое профилирование через Unity Profiler, Memory Profiler и на устройствах',
          ],
        },
        {
          number: '02',
          title: 'Интеграция бэкенда и конвейеры телеметрии',
          description:
            'Работа с игровым клиентом как с сетевым продуктом: надёжный обмен данными и наблюдаемость.',
          items: [
            'Интеграция REST API на клиенте с токен-авторизацией и политиками повторных запросов',
            'Экосистема Firebase: Realtime Database, Firestore и Authentication',
            'Кастомный конвейер телеметрии с очередями офлайн-кэширования',
            'Механизмы A/B-тестирования и динамической настройки сложности через Remote Config',
          ],
        },
        {
          number: '03',
          title: 'Модульная архитектура и чистый код',
          description:
            'Инженерная культура, позволяющая поддерживать и развивать крупные кодовые базы годами в LiveOps.',
          items: [
            'Компонентная композиция способностей на базе ScriptableObject',
            'Реактивное связывание данных через пайплайны событий UniRx и R3',
            'Внедрение зависимостей (Zenject / Extenject) для слабой связности и тестируемости',
            'Конечные автоматы (FSM), отделяющие мета-логику игры от основного геймплея',
          ],
        },
        {
          number: '04',
          title: 'Качество кода, тестирование и менторство',
          description:
            'Выстраивание стандартов разработки, автоматического тестирования и наставничества в кросс-функциональных командах.',
          items: [
            'Автоматическое регрессионное тестирование UI и геймплея на AltTester и PlayMode',
            'Пайплайны CI/CD для автоматической сборки артефактов под разные платформы',
            'Тщательные код-ревью с фокусом на чистоту архитектуры и безопасность памяти',
            'Менторство junior- и middle-разработчиков по идиомам C# и паттернам проектирования',
          ],
        },
      ],
    },
    aiSpotlight: {
      eyebrow: '03 / Вспомогательные процессы',
      heading: 'AI-ассистированная разработка',
      description:
        'Наряду с основной архитектурой Unity я применяю Claude Code и GitHub Copilot для генерации каркасов тестов, изучения SDK и ведения документации — всегда под строгим контролем код-ревью и профилировщика.',
      workflows: [
        {
          title: 'Автоматизация тестов с AI',
          description:
            'Подготовка модульных тестов и фикстур для граничных случаев чистой C#-логики с последующей ручной проверкой каждого утверждения.',
        },
        {
          title: 'Ускорение пайплайнов и бойлерплейта',
          description:
            'Быстрая генерация типизированных C# DTO, адаптеров сериализации и обёрток для SDK с помощью Claude Code и GitHub Copilot.',
        },
        {
          title: 'Архитектура и контекстная документация',
          description:
            'Поддержка структурированных правил репозитория (AGENTS.md) и архитектурных заметок, чтобы AI учитывал ограничения памяти и жизненного цикла Unity.',
        },
        {
          title: 'Контроль и верификация человеком',
          description:
            'Любой сгенерированный код рассматривается как черновик и проходит проверку компилятором, Unity Profiler и код-ревью.',
        },
      ],
    },
    experiencePreview: {
      eyebrow: '04 / Карьерный рост',
      heading: 'Профессиональный опыт и лидерство',
      description:
        'Более 6 лет создания коммерческих мобильных игр, командной работы и руководства техническими инициативами.',
      viewTimeline: 'Полная история опыта',
    },
    contact: {
      heading: 'Давайте создадим сильный продукт вместе',
      description:
        'Ищете Unity-разработчика для геймплейных систем, клиент-серверной интеграции или мобильной оптимизации? Буду рад пообщаться.',
      directContact: 'Прямой контакт',
      copyEmail: 'Копировать email',
      copiedToClipboard: 'Скопировано в буфер!',
      sendEmail: 'Написать письмо',
      viewFullCv: 'Открыть резюме',
    },
    projectsPage: {
      metaTitle: 'Проекты и технические кейсы | Senior Unity Developer',
      metaDescription:
        'Подробные разборы коммерческих мобильных игр, модульной архитектуры, интеграций Firebase/REST API и работы с внешним оборудованием.',
      eyebrow: 'Каталог портфолио',
      heading: 'Инженерные проекты',
      description:
        'Детальные технические кейсы: коммерческий мобильный продакшен, модульные компонентные архитектуры, конвейеры телеметрии и интеграция внешних технологий.',
      filterAll: 'Все проекты',
      filterCommercial: 'Коммерческий Mobile',
      filterArchitecture: 'Архитектура и системы',
      filterSpecialized: 'AR и оборудование',
      sectionCommercial: 'Коммерческий продакшен и LiveOps',
      sectionArchitecture: 'Архитектура ПО и независимые системы',
      sectionSpecialized: 'Специализированные технологии и оборудование',
    },
    projectCommon: {
      categories: {
        commercial: 'Коммерческий Mobile',
        'educational-ar': 'Дополненная реальность',
        'hardware-web3': 'Оборудование и Web3',
        'architecture-showcase': 'Архитектурный кейс',
        'independent-game': 'Геймплейная логика',
        default: 'Проект',
      },
      myRole: 'Моя роль',
      scope: 'Масштаб:',
      category: 'Категория',
      platforms: 'Платформы',
      verified: '(Подтверждено)',
      verifiedTitle: 'Подтверждённые данные из продакшена',
      ownershipHeading: 'Зоны ответственности и вклад в разработку',
      personallyImplemented: 'Реализовано лично',
      integratedMaintained: 'Интегрировано и поддерживалось',
      collaborativeSystems: 'Совместная разработка',
      telemetryHeading: '📊 Телеметрия и инфраструктура данных',
      backendHeading: '🌐 Бэкенд и REST API',
      technologiesHeading: 'Технологии и библиотеки',
      engineeringHighlights: 'Ключевые инженерные решения',
      exploreCaseStudy: 'Открыть разбор',
      mediaShowcaseHeading: 'Видео геймплея и визуальная галерея',
      oneVideo: '1 видео геймплея',
      demoVideos: 'демо-видео',
      screenshots: 'скриншотов',
      videoFallbackTitle: 'Демонстрация геймплея',
      videoUnsupported: 'Ваш браузер не поддерживает воспроизведение HTML5-видео.',
      mobileScreensHeading: 'Экраны мобильного геймплея и LiveOps',
      clickToEnlarge: 'Нажмите на экран для увеличения',
      keyArtHeading: 'Ключевые материалы и особенности',
      expand: 'Увеличить ⤢',
      lightboxAria: 'Просмотр изображения в полном размере',
      closeEsc: 'Закрыть [ESC]',
      previousCaseStudy: 'Предыдущий кейс',
      nextCaseStudy: 'Следующий кейс',
      backToAllProjects: 'Ко всем проектам',
      allProjects: 'Все проекты',
      projectNavAria: 'Навигация по проектам',
      titleSuffix: 'Технический кейс | Senior Unity Developer',
      opensInNewTab: '(откроется в новой вкладке)',
      viewFullSizePrefix: 'Открыть изображение в полном размере:',
      viewCaseStudyAriaPrefix: 'Открыть кейс и медиа проекта',
      viewCaseStudyAriaSuffix: '',
    },
    experienceCard: {
      remote: 'Удалённо',
      technicalOwnership: 'Техническая реализация и ответственность',
      leadershipMentoring: 'Лидерство, менторство и взаимодействие',
      linkedProjects: 'Связанные проекты:',
    },
    experiencePage: {
      metaTitle: 'Опыт и лидерство | Senior Unity Developer',
      metaDescription:
        'Карьерный путь, зоны ответственности, техническое лидерство, стандарты код-ревью и матрица компетенций Senior / Lead Unity разработчика.',
      eyebrow: 'История карьеры',
      heading: 'Профессиональный опыт и лидерство',
      description:
        '6+ лет коммерческой разработки игр. Полный цикл владения системами, конвейеры телеметрии, мобильная оптимизация и наставничество в команде.',
      viewPrintableCv: 'Версия для печати (CV)',
      section01Eyebrow: '01 / Опыт работы',
      section01Heading: 'Карьерный путь',
      section02Eyebrow: '02 / Инженерная культура',
      section02Heading: 'Философия лидерства и менторства',
      section02Description:
        'Технический сеньорити — это умение кратно усиливать всю команду через понятные архитектурные ориентиры, надёжные инструменты и конструктивное наставничество.',
      leadershipPillars: [
        {
          title: 'Код-ревью как менторство',
          color: 'cyan',
          description:
            'Ревью как точка роста: раннее выявление лишних аллокаций и утечек памяти, а также обучение middle- и junior-разработчиков паттернам C#.',
        },
        {
          title: 'Контракты клиент-серверного API',
          color: 'emerald',
          description:
            'Связующее звено между игровым клиентом и бэкендом: проектирование чётких REST/JSON-контрактов, JWT-авторизации и политик повторных запросов.',
        },
        {
          title: 'Автотесты и CI/CD',
          color: 'purple',
          description:
            'Сдвиг контроля качества на ранние этапы за счёт регрессионных автотестов на AltTester и PlayMode в пайплайнах непрерывной сборки.',
        },
        {
          title: 'Контекст и документация',
          color: 'amber',
          description:
            'Поддержка лаконичной технической документации, архитектурных RFC и правил для агентов (AGENTS.md) для единства стандартов команды.',
        },
      ],
      section03Eyebrow: '03 / Матрица компетенций',
      section03Heading: 'Технологический стек и уровень владения',
      section03Description:
        'Технологии чётко разделены на коммерческий продакшен-опыт, самостоятельные проекты и активное изучение.',
      section04Eyebrow: '04 / Образование и языки',
      section04Heading: 'Образование и владение языками',
      formalDegree: 'Высшее образование',
      completedPrefix: 'Окончание:',
      languageProficiencies: 'Языковые навыки',
      spokenWritten: 'Разговорный и письменный уровень',
    },
    cvPage: {
      metaTitleSuffix: 'Резюме / CV',
      metaDescription:
        'Резюме для печати: Игорь Косяник, Senior / Lead Unity Developer с 6+ годами опыта в коммерческом геймдеве, интеграции бэкенда и архитектуре.',
      printBannerLabel: 'Версия резюме для печати',
      printButton: 'Печать / Сохранить PDF',
      backToTimeline: 'К истории опыта',
      photoAlt: 'Фото Игоря Косяника',
      roleHeading: 'Senior / Lead Unity Developer',
      yearsExp: '6+ лет коммерческого опыта',
      specializationLine:
        'Специализация: геймплейные системы, мобильная оптимизация производительности, архитектура Unity, интеграция SDK и техническое лидерство',
      summaryHeading: 'О себе',
      summaryText:
        'Senior Unity Developer с 6+ годами опыта разработки игр для Mobile, PC и WebGL. Специализируюсь на геймплейных системах, оптимизации производительности на основе профилирования, архитектуре Unity и интеграции SDK, с опытом руководства командами и принятия технических решений. Подтверждённый опыт разработки и поддержки live-проектов (включая коммерческую Match-3 игру с 100k+ установок), инфраструктуры Firebase, кастомной телеметрии и непрерывного LiveOps.',
      competenciesHeading: 'Ключевые технические компетенции и навыки',
      competencyGroups: [
        {
          label: 'Продакшен — Unity и C#:',
          items:
            'Unity (Unity 6, Mobile 2D/3D, PC, WebGL), C#, URP, Addressables, профилирование CPU и памяти, оптимизация аллокаций, uGUI, DOTween.',
        },
        {
          label: 'Продакшен — Архитектура и DI:',
          items:
            'SOLID, OOP, паттерны MVX, HMVC, Zenject / Extenject, UniRx, UniTask, компонентный подход.',
        },
        {
          label: 'Продакшен — Бэкенд и аналитика:',
          items:
            'Firebase (RTDB, Firestore, Auth, Analytics, Crashlytics), REST API, LookerStudio, Google Cloud, AppsFlyer, Unity IAP, A/B-тестирование, офлайн-кэширование.',
        },
        {
          label: 'Продакшен — Качество и DevOps:',
          items:
            'Git, GitFlow, Git Submodules, CI/CD, автотесты AltTester, PlayMode-тесты, код-ревью и техническое менторство.',
        },
        {
          label: 'Дополнительный опыт:',
          items:
            'Фреймворки на ScriptableObject, R3, Vuforia AR, кастомные инструменты инспектора, AI-ассистированная разработка (Claude Code, Copilot).',
        },
        {
          label: 'Знакомство / Изучение:',
          items: 'ECS и Entitas, VContainer, UI Toolkit, AR Foundation, NFC и Web3 Client API.',
        },
      ],
      workHistoryHeading: 'Коммерческий опыт работы',
      remoteLabel: 'Удалённо',
      commercialHighlightHeading: 'Ключевой коммерческий проект',
      match3Title: 'Коммерческая мобильная Match-3 игра (NDA)',
      match3Badge: '100k+ установок • iOS и Android продакшен',
      match3Meta:
        'iOS и Android • Команда из 12 чел. (4 разработчика) • Team Lead / Senior Unity Developer',
      match3Description:
        'Руководил клиентской архитектурой, выделением ядра Match-3 в переиспользуемый Git-субмодуль, миграцией геймплея из 2D в 3D, интеграцией Firebase (Auth, RTDB, Firestore) и REST API, офлайн-телеметрией, монетизацией, A/B-тестами, автоматизацией на AltTester и проведением код-ревью.',
      selectedProjectsHeading: 'Избранные технические кейсы',
      educationHeading: 'Образование',
      languagesHeading: 'Языки',
    },
    notFound: {
      metaTitle: 'Страница не найдена (404) | Senior Unity Developer',
      metaDescription: 'Запрашиваемая страница не найдена.',
      badge: 'ОШИБКА 404',
      heading: 'Страница не найдена',
      description:
        'Запрашиваемая страница или ресурс отсутствует в этой сборке. Вернитесь на главную страницу или откройте каталог проектов.',
      returnHome: 'На главную',
      exploreProjects: 'Смотреть проекты',
    },
  },
} as const;

export type UITranslations = typeof UI_TRANSLATIONS.en;

export function getUI(locale: Locale) {
  return UI_TRANSLATIONS[locale];
}
