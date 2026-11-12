---
title: 'Jolly Match 3'
subtitle: 'Commercial mobile Match-3 title with deep Firebase RTDB/Firestore backend integration, custom telemetry pipelines, and LiveOps architecture'
category: 'commercial'
tier: 'flagship'
featuredOnHome: true
order: 1

genre: 'Match-3 / Mobile Puzzle Game'
platforms: ['Android', 'iOS']
role: 'Senior Unity Developer'

shortDescription: 'Commercial mobile Match-3 game (100k+ downloads) featuring rich gameplay systems, client-server synchronization, a 1600-line custom analytics pipeline, Firebase RTDB/Firestore integration, REST API social systems, and automated testing.'

implementedSystems:
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
  - 'Client-server architecture decoupling network responses from presentation state'
  - 'Offline-first analytics cache preventing telemetry data loss during connectivity drops'
  - 'Polymorphic JSON deserialization for real-time team messages and help requests'

analyticsHighlights:
  - 'Comprehensive 1,600+ line Analytics manager tracking custom events, progression, and difficulty'
  - 'Cached log queue (CachedLogStruct) synchronizing batches upon network recovery'
  - 'User property tracking for dynamic segmentation and A/B test experiments'

backendHighlights:
  - 'TeamsApi client handling REST API endpoints (/teams/{teamId}/chat/send) with JWT authentication'
  - 'Firebase Realtime Database synchronization for live team help and life gifting'
  - 'Cloud Firestore integration for persistent player meta-progression'

coverImage: '/images/projects/jolly-match-3-cover.webp'
coverAlt: 'Jolly Match 3 gameplay and mobile architecture overview'

links:
  - label: 'Google Play Store'
    url: 'https://play.google.com'
    type: 'googleplay'

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
- **Teams & Social Chat (`TeamsApi.cs`):** Polymorphic JSON message deserialization supporting real-time chat, join requests, and life help requests across team members.
- **Client-Side Validation:** String length, null payload, and rate-limiting safeguards to prevent invalid requests from touching backend endpoints.

## Analytics Infrastructure & Data Telemetry

Data-driven decision making required an extensive analytics foundation:

- **Custom Telemetry Manager (`Analytics.cs`):** Over 1,600 lines of structured logging handling dynamic difficulty adjustments, tutorial checkpoints, and monetization events.
- **Offline Resilience:** Telemetry events generated during network dropouts are captured in a structured cache (`CachedLogStruct`) and flushed once network connection is re-established.
