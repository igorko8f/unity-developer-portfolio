---
title: 'Tetris Sudocu'
subtitle: 'Block puzzle logic game built with Unity 6, Zenject DI, R3 reactive streams, and custom Unity Inspector tooling'
category: 'independent-game'
tier: 'compact'
featuredOnHome: false
order: 5

genre: 'Block Puzzle / Logic Game'
platforms: ['PC', 'Cross-platform']
teamSize: 'Solo (Technical Assignment)'
role: 'Gameplay Developer'

shortDescription: 'A puzzle game combining Tetris and Sudoku block mechanics built for an engineering test assignment. Engineered with Unity 6, Zenject dependency injection, R3 reactive programming, and a custom Unity Inspector editor tool for configuring 5x5 figure matrices.'

implementedSystems:
  - 'Grid management and line/column clearing logic with score calculation'
  - 'Custom Unity Inspector editor tool for visually authoring 5x5 figure matrices'
  - 'Figure rotation mechanics and placement validation algorithms'
  - 'Persistent Top-3 high score save/load system using System.IO'
  - 'Dynamic audio ducking lowering music volume during game pause'

technologies:
  - 'Unity 6 (6000.3.16f1)'
  - 'C#'
  - 'Zenject (Dependency Injection)'
  - 'R3 (Reactive Programming)'
  - 'DOTween'
  - 'Unity New Input System'

architectureHighlights:
  - 'Clean dependency injection using Zenject context installers'
  - 'Reactive event streams using modern R3 for game state changes'
  - 'ScriptableObject-based figure and board configuration'

coverImage: '/images/projects/tetris-sudocu-cover.webp'
coverAlt: 'Tetris Sudocu key art showing an isometric 8x8 puzzle board with purple polyomino blocks, cyan row-and-column clearing energy bursts, and rotatable block figures'

videos:
  - src: '/videos/projects/tetris-sudocu-gameplay.mp4'
    poster: '/images/projects/tetris-sudocu-cover.webp'
    title: 'Tetris Sudocu — Gameplay & Scoring Loop'
    caption: 'Live gameplay demonstration showing polyomino rotation, drag-and-drop grid placement, row and column clearing bursts, score progression, and persistent Top-3 high score tracking.'

links:
  - label: 'GitHub Repository'
    url: 'https://github.com/igorko8f/ARTDOCK-tetris-sudocu'
    type: 'github'

metrics:
  - label: 'DI Framework'
    value: 'Zenject'
    verified: true
  - label: 'Reactive'
    value: 'R3 Streams'
    verified: true
---

## Project Overview

Tetris Sudocu was developed as a technical assignment for a Unity Developer position. The project combines classic block-fitting gameplay with Sudoku-style grid clearance, requiring clean architecture, testable logic, and polished UX.

## Technical Highlights

- **Dependency Injection & Reactive Flow:** Leveraged **Zenject** for loose coupling and **R3** (the modern C# reactive framework) to publish board state changes without tightly coupled callbacks.
- **Custom Editor Tooling:** Implemented an inspector-based 5x5 matrix editor allowing designers to create and edit custom figures directly in Unity without modifying code.
