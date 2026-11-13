---
title: 'BlueLight Inc.'
subtitle: 'Cross-platform business tycoon and collectible card game planned for Epic Games Store (project closed), featuring NFC hardware interaction and Web3 integration'
category: 'hardware-web3'
tier: 'core'
featuredOnHome: true
order: 3

genre: 'Tycoon Simulator / CCG'
platforms: ['PC', 'WebGL', 'Cross-platform']
period: '08/2022 – 04/2023'
role: 'Senior Unity Developer'

shortDescription: 'A startup tycoon simulator and collectible card game planned for release on the Epic Games Store (project is now closed). As part of the core game unit, I developed the card game logic, UI systems, and integration with the tycoon and meta-game layers across PC and WebGL.'

implementedSystems:
  - 'Core collectible card game (CCG) logic, turn-based project execution, and 4x4/5x4 spatial workroom grid mechanics'
  - 'Connections between core card game systems, isometric tycoon simulation, and meta-progression layers'
  - 'Gameplay UI features, deck/staff management interfaces, and DOTween animations'
  - 'Performance optimization and stability improvements across PC and WebGL environments'

integratedSystems:
  - 'Interfaces connecting core CCG gameplay with tycoon economy, meta systems, and backend services'
  - 'Cross-platform PC and WebGL build configuration and runtime adaptation'

collaborativeSystems:
  - 'Cross-functional collaboration with designers, backend developers, artists, and QA throughout the production cycle'
  - 'Technical architecture, feature planning, and code reviews within the core game unit'

technologies:
  - 'Unity'
  - 'C#'
  - 'CCG & Grid Systems'
  - 'Dependency Injection'
  - 'DOTween'
  - 'SOLID / OOP'
  - 'PC & WebGL'

architectureHighlights:
  - 'Grid-based CCG workroom board supporting spatial furniture zones of effect and staff card synergies'
  - 'Decoupled architecture connecting core card game mechanics with tycoon and meta-progression systems'
  - 'Cross-platform optimization and stable frame pacing across PC and WebGL builds'

coverImage: '/images/projects/bluelight-cover.webp'
coverAlt: 'BlueLight Inc. isometric startup office tycoon view in San Crypto'

video:
  src: '/videos/projects/bluelight-gameplay.mp4'
  poster: '/images/projects/bluelight-cover.webp'
  title: 'BlueLight Inc. — Office Tycoon, Deck Building & CCG Gameplay'
  caption: 'Captured from the live build showing startup garage management, staff card collection, deck building, furniture placement, and turn-based CCG project execution.'

gallery:
  - src: '/images/projects/bluelight/office-tycoon-overview.webp'
    alt: 'BlueLight Inc. isometric startup garage and office tycoon HUD'
    caption: 'Isometric Startup Office Tycoon — San Crypto garage headquarters with Projects, Shop, Player Deck, Staff, and Furniture management.'
    aspect: 'landscape'
  - src: '/images/projects/bluelight/ccg-workroom-battle.webp'
    alt: 'BlueLight Inc. active CCG card battle on a 4x4 office workroom grid'
    caption: 'Tactical CCG Project Execution — Deploying staff cards (Max Maverick, Brad Dirty, Nate Candy, Dani Vapor) onto the 4x4 workroom grid.'
    aspect: 'landscape'
  - src: '/images/projects/bluelight/ccg-furniture-buff-zone.webp'
    alt: 'BlueLight Inc. workroom grid showing Coffee Machine zone of effect and card hand'
    caption: 'Spatial Furniture Buffs & Action Budget — Coffee Machine zone of effect highlighting adjacent grid tiles alongside playable staff cards.'
    aspect: 'landscape'
  - src: '/images/projects/bluelight/project-workroom-setup.webp'
    alt: 'BlueLight Inc. project briefing modal with 5x4 workroom arrangement and deck selection'
    caption: 'Project Briefing & Workroom Setup — Reviewing mission parameters, BUX/XP rewards, 5x4 workroom layout, and assigned card deck.'
    aspect: 'landscape'
  - src: '/images/projects/bluelight/staff-card-collection.webp'
    alt: 'BlueLight Inc. Manage Your Staff collectible card inventory and filters'
    caption: 'Staff Card Collection — Filtering collectible team members by profession, rarity, and energy state.'
    aspect: 'landscape'
  - src: '/images/projects/bluelight/character-card-stats.webp'
    alt: 'BlueLight Inc. character card inspection modal showing level, rarity, cost, and productivity'
    caption: 'Character Card Progression — Detailed inspection of staff attributes (Level, Rarity, Profession, Lifetime, Cost, and Productivity).'
    aspect: 'landscape'
  - src: '/images/projects/bluelight/project-completed-rewards.webp'
    alt: 'BlueLight Inc. Project Completed victory screen and reward summary'
    caption: 'Project Completion & Progression — Mission victory modal awarding BUX currency and unlocking new startup technology directions.'
    aspect: 'landscape'

links:
  - label: 'Epic Games Store'
    url: 'https://store.epicgames.com/p/bluelight-dfabd2'
    type: 'epicgames'

metrics:
  - label: 'Project Status'
    value: 'Closed (Pre-release)'
    verified: true
  - label: 'Core Loop'
    value: 'Tycoon + Grid CCG'
    verified: true
  - label: 'Hardware'
    value: 'NFC + Web3 API'
    verified: true
---

## Project Overview

**BlueLight Inc.** is a startup simulator and collectible card game set in the _San Crypto_ universe (created alongside the _Take My Muffin_ animated series) that was planned for release on the **Epic Games Store** (the project is currently closed). Players build and customize an isometric startup office, collect and upgrade staff and equipment cards, arrange furniture buff zones, and complete startup projects through tactical turn-based card battles on a spatial workroom grid.

The project combined rich 2D/isometric simulation and collectible card game mechanics with physical NFC hardware interactions and external Web3 backend verification.

## Core Gameplay & Engineering Systems

- **Tactical Grid-Based CCG Execution:** Implemented interactive workroom boards (`4x4` and `5x4` grids) where players spend per-turn Action Points to deploy staff cards around office equipment (such as Coffee Machines providing directional adjacency buffs) while resolving project backlog tasks and emergency events.
- **Tycoon & Meta Integration:** Connected the core card game loop with isometric office management, room customization, furniture placement, multi-sheet deck construction, and multi-parameter staff filtering (profession, rarity, lifetime, and productivity progression).
- **UI & Cross-Platform Optimization:** Built responsive gameplay UI features with DOTween and optimized performance and stability across both PC and WebGL builds.
