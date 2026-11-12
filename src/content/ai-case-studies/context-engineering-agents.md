---
title: 'Context Engineering & Developer Rules (AGENTS.md)'
subtitle: 'Designing structured context files and custom instructions to eliminate AI hallucinations and enforce Unity-specific performance constraints'
category: 'agent-architecture'
workflowType: 'professional-practice'
featured: true
order: 1

problemStatement: 'Generic AI assistants generate code that introduces serious Unity performance anti-patterns (such as FindObjectOfType inside Update loops, string-based coroutines, and excessive heap boxing allocations) due to lacking repo context.'

aiToolsUsed:
  - 'Antigravity'
  - 'Claude Code'
  - 'Custom Rulefiles (AGENTS.md)'

humanValidationMethod: 'Audited compiler diagnostics, profiled memory allocations using Unity Profiler, and performed code reviews against project architectural standards.'

outcomes:
  - 'Reduced AI code generation errors by establishing strict project conventions upfront'
  - 'Eliminated runtime memory boxing anti-patterns from generated utility scripts'
  - 'Created reusable context templates adapted across engineering projects'

limitationsEncountered:
  - 'LLMs occasionally struggle with newly introduced API changes in preview engine packages'
  - 'Context windows require strict pruning to avoid degraded attention on core rules'
---

## Overview

Context engineering is the difference between an AI model that acts as a liability and one that acts as a senior pair programmer. By defining explicit `AGENTS.md` instructions, the agent understands engine version constraints, allowed libraries (e.g. UniTask vs Coroutines, R3 vs standard C# events), and forbidden practices.
