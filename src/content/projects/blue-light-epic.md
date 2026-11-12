---
title: 'BlueLight Epic'
subtitle: 'Cross-platform business tycoon and card game listed on Epic Games Store, featuring NFC hardware interaction and Web3 integration'
category: 'hardware-web3'
tier: 'core'
featuredOnHome: false
order: 4

genre: 'Tycoon Simulator / CCG'
platforms: ['PC', 'Cross-platform']
role: 'Unity Game Developer'

shortDescription: 'A commercial game release listed on the Epic Games Store, combining startup business tycoon mechanics with card gameplay. Showcases integration of external technologies into Unity, including NFC hardware communication and Web3 ecosystem connectivity.'

implementedSystems:
  - 'Integration of NFC hardware communication protocols for physical-to-digital card activation'
  - 'Client-side communication with external Web3 API services and digital asset management'
  - 'UI integration for card collection, office tycoon simulation, and asset inspection'

integratedSystems:
  - 'Epic Games Store platform guidelines and release requirements'
  - 'External authentication and digital asset ownership validation'

technologies:
  - 'Unity'
  - 'C#'
  - 'NFC Hardware Bridge'
  - 'Web3 API Integration'
  - 'REST API'

architectureHighlights:
  - 'External hardware bridge isolating NFC hardware reads from core game logic'
  - 'Secure client-server handshake verifying asset ownership before state instantiation'

coverImage: '/images/projects/bluelight-cover.webp'
coverAlt: 'BlueLight game overview and card tycoon interface'

links:
  - label: 'Epic Games Store'
    url: 'https://store.epicgames.com/p/bluelight-dfabd2'
    type: 'epicgames'

metrics:
  - label: 'Store Release'
    value: 'Epic Games Store'
    verified: true
  - label: 'Hardware'
    value: 'NFC Integration'
    verified: true
---

## Project Overview

BlueLight is a commercial startup simulator and collectible card game listed on the Epic Games Store. The project presented unique technical requirements combining traditional Unity gameplay loops with physical hardware interactions and blockchain-based digital asset verification.

## Hardware & External Technology Integration

- **NFC Communication:** Implementing an interface layer between physical NFC readers/smartcards and the Unity client to unlock in-game items.
- **External Web3 Services:** Client-side integration of APIs verifying digital collectible ownership while preserving standard game performance.
