---
title: 'Commercial Match-3 Mobile Game (NDA)'
subtitle: 'Live mobile Match-3 title (100k+ downloads) with reusable core submodule architecture, Firebase RTDB/Firestore integration, custom telemetry pipelines, and LiveOps'
category: 'commercial'
tier: 'flagship'
featuredOnHome: true
order: 1

genre: 'Match-3 / Mobile Puzzle Game'
platforms: ['Android', 'iOS']
period: '05/2023 – 06/2026'
teamSize: '12 specialists (4 developers)'
role: 'Team Lead / Senior Unity Developer'

shortDescription: 'Commercial mobile Match-3 game (100k+ downloads, NDA) where I served as Team Lead within a 12-person team, leading client architecture, reusable Match-3 core extraction, Firebase & REST integrations, offline-cached telemetry, A/B testing, monetization, and automated testing.'

implementedSystems:
  - 'Extracted Match-3 core gameplay into a standalone Git submodule reusable across studio projects with independent visual theming'
  - 'Converted the core 2D gameplay pipeline to 3D and profiled rendering and frame pacing for mobile hardware'
  - 'Custom telemetry and analytics event pipeline with offline caching and retry flushing'
  - 'Teams and social chat client integration over REST API (JWT auth) and Firebase Realtime Database'
  - 'Dynamic difficulty telemetry and Remote Config listeners for LiveOps tuning'
  - 'Memory and allocation profiling routines reducing per-frame GC pressure in critical gameplay loops'

integratedSystems:
  - 'Firebase ecosystem (Authentication, Realtime Database, Cloud Firestore, Crashlytics, Storage)'
  - 'AppsFlyer attribution SDK and custom conversion event tracking'
  - 'Monetization systems with Unity IAP and ad mediation networks'
  - 'AltTester automated test driver for UI and gameplay regression suites'

collaborativeSystems:
  - 'REST API contract definitions with backend engineers for teams and social messaging'
  - 'Remote Config schemas and A/B test parameters designed with game designers and analysts'
  - 'Level design tooling, CI/CD build workflows, and seed validation utilities'

technologies:
  - 'Unity'
  - 'C#'
  - 'Firebase (RTDB, Firestore, Auth, Analytics)'
  - 'REST APIs'
  - 'UniTask'
  - 'AltTester'
  - 'Unity IAP'
  - 'AppsFlyer'

architectureHighlights:
  - 'Match-3 core extracted into a decoupled Git submodule enabling visual reskinning and reuse across multiple studio titles'
  - '2D-to-3D gameplay pipeline conversion with mobile-first draw call and memory optimization'
  - 'Client-server architecture decoupling network responses from presentation state'
  - 'Offline-first analytics cache preventing telemetry data loss during connectivity drops'
  - 'Polymorphic JSON deserialization for real-time team messages and help requests'

analyticsHighlights:
  - 'Custom analytics pipeline tracking custom events, progression, and difficulty'
  - 'Cached log queue synchronizing batches upon network recovery'
  - 'User property tracking for dynamic segmentation and A/B test experiments'

backendHighlights:
  - 'REST API client handling team and social endpoints with JWT authentication'
  - 'Firebase Realtime Database synchronization for live team help and life gifting'
  - 'Cloud Firestore integration for persistent player meta-progression'

coverImage: '/images/projects/commercial-match-3-cover.jpg'
coverAlt: 'Representative 3D mobile Match-3 puzzle board key art with rainbow orb and rocket boosters'

gallery:
  - src: '/images/projects/commercial-match-3/gameplay-board.jpg'
    alt: 'Representative 3D Match-3 puzzle grid with glossy gem tiles and rainbow star cascade booster'
    caption: 'Core 3D Match-3 Gameplay & Combo Boosters (NDA-safe concept)'
    aspect: 'landscape'
  - src: '/images/projects/commercial-match-3/liveops-rewards.jpg'
    alt: 'Representative mobile puzzle LiveOps treasure chest and reward cards'
    caption: 'LiveOps Events & Reward Economy (NDA-safe concept)'
    aspect: 'landscape'
  - src: '/images/projects/commercial-match-3-cover.jpg'
    alt: 'Representative 3D Match-3 key art featuring floating board and island backdrop'
    caption: '3D Pipeline & Visual Presentation (NDA-safe concept)'
    aspect: 'landscape'

metrics:
  - label: 'Downloads'
    value: '100k+'
    verified: true
  - label: 'Team Size'
    value: '12 (4 Devs)'
    verified: true
  - label: 'Platforms'
    value: 'iOS & Android'
    verified: true
---

## Project Context & Ownership

This **Commercial Match-3 Mobile Game (NDA)** is a live puzzle title with **100k+ downloads** on iOS and Android, developed at a mobile game studio by a multidisciplinary team of **12 specialists (including 4 Unity developers)**. Serving as **Team Lead / Senior Unity Developer**, I combined hands-on systems engineering with technical leadership—owning core client architecture, code reviews, developer mentoring, sprint estimation, and cross-functional alignment with backend, design, analytics, and QA.

## Match-3 Architecture & 3D Pipeline Migration

- **Reusable Core Git Submodule:** As the studio planned additional titles, duplicating Match-3 board logic created maintenance risk. I extracted the core gameplay simulation into a standalone **Git submodule** decoupled from presentation assets and meta-game UI, allowing other projects to integrate the same tested core and skin visuals independently.
- **2D-to-3D Gameplay Conversion:** Migrated the core 2D gameplay pipeline to 3D to support richer visual depth and camera/VFX presentation. To keep mobile frame pacing smooth across mid- and low-tier devices, we used Unity Profiler and Memory Profiler to reduce draw calls, consolidate textures, and minimize per-frame heap allocations in active board-cascading paths.

## Backend Integration & Server Communication

A live mobile game depends on reliable client-server boundaries:

- **REST APIs & JWT Authentication:** Implemented client integration for social and team endpoints, handling JWT token retrieval, request validation (payload size, null checks, client-side rate limiting), and graceful error recovery.
- **Polymorphic Team Chat:** Built polymorphic JSON deserialization for real-time team chat, join requests, and life-gifting messages without coupling network DTOs directly to UI views.
- **Firebase RTDB & Cloud Firestore:** Synchronized live team help requests via Firebase Realtime Database and persisted player meta-progression in Cloud Firestore.

## Analytics Infrastructure, A/B Testing & Monetization

- **Offline-First Telemetry Pipeline:** Designed and maintained a custom analytics wrapper that queues structured events (tutorial checkpoints, progression, dynamic difficulty signals, and monetization events) to local storage during connectivity drops and flushes batches once the network recovers—feeding downstream analysis in Firebase Analytics, Google Cloud, and LookerStudio.
- **A/B Testing & Remote Config:** Integrated Firebase Remote Config parameters with game designers and analysts to run live experiments on level difficulty, event cadence, and monetization offers without requiring binary store updates.
- **Monetization & Attribution:** Integrated and maintained **Unity IAP**, ad mediation networks, and **AppsFlyer** attribution SDKs, ensuring purchase validation and ad-rewarded flows remained resilient under poor network conditions.

## UI, Automated Testing & Technical Leadership

- **UI & LiveOps Feature Delivery:** Built and maintained responsive uGUI screens for meta-progression, narrative cutscenes, helper selection, and timed LiveOps events across diverse mobile aspect ratios.
- **Automated Testing & CI/CD:** Integrated **AltTester** for automated UI and gameplay regression runs alongside CI/CD build workflows, reducing manual smoke-test overhead before store releases.
- **Code Reviews & Mentoring:** Conducted daily code reviews across the 4-developer engineering group, coaching mid and junior developers on SOLID boundaries, allocation-conscious C#, and asynchronous error handling (`UniTask`), while partnering with PMs on milestone planning and technical risk assessment.
