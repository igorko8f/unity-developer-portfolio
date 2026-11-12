---
title: 'Component Ability System'
subtitle: 'A modular, ScriptableObject-driven gameplay ability framework with execution sequencing and status effects'
category: 'architecture-showcase'
tier: 'flagship'
featuredOnHome: true
order: 2

genre: 'Gameplay Systems Framework'
platforms: ['PC', 'Cross-platform']
role: 'Software Architect & Developer'

shortDescription: 'An independent architecture showcase demonstrating a modular ability framework in Unity. Features component-based ability composition, ScriptableObject-driven configuration, instant and over-time status effects, target selection algorithms, and clean dependency management.'

implementedSystems:
  - 'Component-based ability pipeline with pluggable execution steps'
  - 'ScriptableObject data architecture for designer-friendly configuration'
  - 'Target selection and filtering algorithms (area of effect, single-target, chain)'
  - 'Instant and over-time effect processing system with duration management'
  - 'Status effect container handling buffs, debuffs, and stackable states'

technologies:
  - 'Unity'
  - 'C#'
  - 'ScriptableObjects'
  - 'Component Architecture'
  - 'Dependency Injection'

architectureHighlights:
  - 'Abilities are composed at runtime from reusable atomic effect components'
  - 'Zero tight coupling: abilities communicate through decoupled state interfaces'
  - 'Data and execution logic strictly separated for high extensibility'

coverImage: '/images/projects/cas-cover.webp'
coverAlt: 'Component Ability System architecture and inspector setup'

links:
  - label: 'GitHub Repository'
    url: 'https://github.com/igorko8f/component-ability-system'
    type: 'github'

metrics:
  - label: 'Architecture Type'
    value: 'Component-Based'
    verified: true
  - label: 'Decoupling'
    value: 'ScriptableObject Data'
    verified: true
---

## Architectural Philosophy

The Component Ability System was developed to address common architectural pitfalls in gameplay programming: monolithic character classes, hardcoded spell behaviors, and rigid animation event coupling.

By decomposing an ability into atomic, reusable components (Targeting, Execution, Effects, and Status Modifiers), designers can assemble complex abilities in the Unity Inspector without writing new C# code.

## Key Subsystems

- **Ability Definition:** ScriptableObject holding configuration data, mana costs, cooldowns, and effect lists.
- **Target Selection:** Decoupled algorithms handling single-target, cone, radius, and chain targeting.
- **Effect Processor:** Manages instant impacts (damage, healing, force) and over-time modifiers (burn, slow, haste) with tick rate controls.
