---
title: 'AR Language Lab'
subtitle: 'Marker-based Augmented Reality educational application built with Unity 6 and Vuforia, featuring decoupled content-driven lessons'
category: 'educational-ar'
tier: 'core'
featuredOnHome: true
order: 3

genre: 'Augmented Reality / Educational Mobile App'
platforms: ['Android']
role: 'Lead Unity Developer'

shortDescription: 'An interactive mobile educational application using marker-based Augmented Reality to teach foreign language vocabulary. Features 3D object manipulation, task-based learning, and a data-driven architecture separating lesson content from app updates.'

implementedSystems:
  - 'Marker-based AR recognition and 3D virtual object tracking using Vuforia Engine'
  - 'Interactive educational tasks (object discovery, sentence completion, spatial placement)'
  - 'Decoupled data-driven lesson configuration enabling content updates without re-publishing'
  - 'Multilingual localization pipeline and dynamic text/model binding'

integratedSystems:
  - 'Vuforia Engine marker tracking runtime'
  - 'Android camera access and mobile lifecycle state handling'

technologies:
  - 'Unity 6 (6000.3.16f1)'
  - 'Vuforia Engine'
  - 'C#'
  - 'Marker-based AR'
  - 'Android SDK'

architectureHighlights:
  - 'Content-driven lesson architecture separating educational data from runtime binaries'
  - 'Interactive validation pipeline verifying 3D spatial task completion in real-time'
  - 'Smooth state transitions between object discovery, interactive tasks, and evaluation'

coverImage: '/images/projects/ar-language-lab-cover.webp'
coverAlt: 'AR Language Lab educational interface and marker tracking'

links:
  - label: 'GitHub Repository'
    url: 'https://github.com/igorko8f/ar-languange-lab'
    type: 'github'

metrics:
  - label: 'Engine'
    value: 'Unity 6'
    verified: true
  - label: 'Tracking'
    value: 'Vuforia Markers'
    verified: true
---

## Project Overview

AR Language Lab transforms traditional rote vocabulary memorization into an intuitive spatial experience. Learners scan real-world physical markers to instantiate 3D objects, building cognitive associations between foreign words, physical items, and actions.

## Implemented vs. Planned Capabilities

- **Implemented:** Marker recognition, interactive 3D placement tasks, instantaneous task validation, and data-driven lesson JSON configs.
- **Planned Roadmap:** Machine-learning speech recognition for pronunciation scoring and neural text-to-speech voicing.
