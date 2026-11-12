---
title: 'Jolly Match 3'
subtitle: 'Commercial mobile Match-3 title with deep Firebase RTDB/Firestore backend integration, custom telemetry pipelines, and LiveOps architecture'
category: 'commercial'
tier: 'flagship'
featuredOnHome: true
order: 1

genre: 'Match-3 / Mobile Puzzle Game'
platforms: ['Android', 'iOS']
role: 'Team Lead / Senior Unity Developer'

shortDescription: 'Commercial mobile Match-3 game (100k+ downloads) where I served as Team Lead, featuring rich gameplay systems, client-server synchronization, a custom analytics pipeline, Firebase RTDB/Firestore integration, REST API social systems, and automated testing.'

implementedSystems:
  - 'Extracted Match-3 core gameplay into a standalone Git submodule reusable across other company projects with customizable visuals'
  - 'Converted the core 2D gameplay pipeline to 3D and optimized rendering and frame pacing for mobile hardware'
  - 'Custom telemetry and analytics event pipeline with offline caching and dynamic retry'
  - 'Teams and social chat client integration over REST API and Firebase Realtime Database'
  - 'Dynamic difficulty telemetry and remote configuration listeners'
  - 'Memory optimization routines eliminating GC spikes on low-end Android hardware'

integratedSystems:
  - 'Firebase ecosystem (Authentication, Realtime Database, Cloud Firestore, Crashlytics, Storage)'
  - 'AppsFlyer attribution SDK and custom conversion event tracking'
  - 'Monetization systems with Unity IAP and ad mediation networks'
  - 'AltTester automated test driver for UI and gameplay regression testing'

collaborativeSystems:
  - 'REST API contract definitions with backend engineers for teams and social messaging'
  - 'Remote configuration schemas designed with game designers for LiveOps tuning'
  - 'Level design tooling and seed validation utilities'

technologies:
  - 'Unity'
  - 'C#'
  - 'Firebase (RTDB, Firestore, Auth, Analytics)'
  - 'REST APIs'
  - 'UniTask'
  - 'AltTester'
  - 'In-App Purchases'
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
  - 'REST API client handling team and social endpoints (/teams/{teamId}/chat/send) with JWT authentication'
  - 'Firebase Realtime Database synchronization for live team help and life gifting'
  - 'Cloud Firestore integration for persistent player meta-progression'

coverImage: '/images/projects/jolly-match-3-cover.webp'
coverAlt: 'Jolly Match 3 world exploration artwork featuring Emma and dessert helpers'

video:
  src: '/videos/projects/jolly-match-3-gameplay.mp4'
  poster: '/images/projects/jolly-match-3/treasure-rewards-banner.webp'
  title: 'Match, Build, Explore — Jolly Match 3 Gameplay & LiveOps Update'
  caption: 'Official gameplay showcase featuring 60 FPS Match-3 board mechanics, helper abilities, meta-progression landmark restoration, and LiveOps events.'

gallery:
  - src: '/images/projects/jolly-match-3/gameplay-vibrant-levels.webp'
    alt: 'Jolly Match 3 core puzzle board with target goals, move counter, and donut line-clearing booster'
    caption: 'Core Match-3 Board & Booster Execution'
    aspect: 'portrait'
  - src: '/images/projects/jolly-match-3/gameplay-cute-boosters.webp'
    alt: 'Jolly Match 3 rainbow cake booster clearing tiles across the board'
    caption: 'Combo Boosters & Particle VFX'
    aspect: 'portrait'
  - src: '/images/projects/jolly-match-3/character-helpers.webp'
    alt: 'Jolly Match 3 selectable dessert helpers with unique board abilities'
    caption: 'Selectable Helpers & Companion Abilities'
    aspect: 'portrait'
  - src: '/images/projects/jolly-match-3/liveops-events.webp'
    alt: 'Jolly Match 3 LiveOps events and timed tournament progression'
    caption: 'LiveOps Events & Remote Config Timers'
    aspect: 'portrait'
  - src: '/images/projects/jolly-match-3/narrative-story.webp'
    alt: 'Jolly Match 3 narrative story cutscenes and kitchen progression'
    caption: 'Narrative Progression & Story Cutscenes'
    aspect: 'portrait'
  - src: '/images/projects/jolly-match-3/world-locations.webp'
    alt: 'Jolly Match 3 world map locations including Paris, New York, and London'
    caption: 'Global Meta-Progression Locations'
    aspect: 'portrait'
  - src: '/images/projects/jolly-match-3-cover.webp'
    alt: 'Jolly Match 3 world exploration banner artwork'
    caption: 'World Exploration Update Key Art'
    aspect: 'landscape'
  - src: '/images/projects/jolly-match-3/treasure-rewards-banner.webp'
    alt: 'Jolly Match 3 treasure chest and reward economy artwork'
    caption: 'Reward Economy & Chest Unlocks'
    aspect: 'landscape'

links:
  - label: 'Google Play'
    url: 'https://play.google.com/store/apps/details?id=com.jollyco.jollybattlematch3&hl=en'
    type: 'googleplay'
  - label: 'App Store'
    url: 'https://apps.apple.com/us/app/jolly-match-3-puzzle-game/id1554274735'
    type: 'appstore'

metrics:
  - label: 'Downloads'
    value: '100k+'
    verified: true
  - label: 'Target Frame Rate'
    value: '60 FPS'
    verified: true
  - label: 'Team Size'
    value: '12 (4 Devs)'
    verified: true
---

## Project Overview

Jolly Match 3 is a commercial mobile puzzle game with 100k+ downloads on iOS and Android developed at Avantaj Prim S.R.L. As Senior / Lead Unity Developer within a team of 12 specialists (including 4 developers), I led client architecture, gameplay feature delivery, monetization systems, and A/B testing infrastructure. Beyond core puzzle mechanics, the project required robust client-server communication, resilient telemetry pipelines, and third-party SDK integrations maintaining stability across thousands of mobile device profiles.

## Backend Integration & Server Communication

A commercial game is a connected product. In Jolly Match 3, the client communicates with backend microservices via REST API endpoints and Firebase services:

- **JWT Authentication:** Secure user token retrieval and authorization validation before executing service requests.
- **Teams & Social Chat:** Polymorphic JSON message deserialization supporting real-time chat, join requests, and life help requests across team members.
- **Client-Side Validation:** String length, null payload, and rate-limiting safeguards to prevent invalid requests from touching backend endpoints.

## Core Module Extraction & 3D Pipeline Migration

- **Reusable Core Git Submodule:** Extracted the Match-3 core game logic into a standalone Git submodule decoupled from presentation assets, allowing other company projects to connect the core module and customize visuals independently.
- **2D-to-3D Gameplay Conversion:** Migrated the core 2D gameplay pipeline to 3D and optimized rendering, draw calls, and memory usage to maintain smooth mobile performance.

## Analytics Infrastructure & Data Telemetry

Data-driven decision making required an extensive analytics foundation:

- **Custom Telemetry Manager:** Custom analytics pipeline with structured logging handling dynamic difficulty adjustments, tutorial checkpoints, and monetization events.
- **Offline Resilience:** Telemetry events generated during network dropouts are captured in a structured cache and flushed once network connection is re-established.
