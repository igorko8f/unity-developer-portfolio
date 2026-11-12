# Open Questions & Information Requirements

> Portfolio Foundation — Document 07  
> Focus: Unverified Data, Missing Assets, Developer Clarifications across the 5 Projects

---

## 1. Project-Specific Information Needed

In adherence to our strict principle (**"Do not invent project results, metrics, responsibilities, or achievements"**), the following details must be confirmed by the developer before authoring final case studies:

---

### A. Jolly Match 3 (Main Professional Case Study)

_Repository inspection confirmed: Firebase (Auth, Analytics, Realtime Database, Cloud Firestore, Remote Config, Crashlytics, Storage), REST API (`TeamsApi.cs`), dynamic difficulty, offline cached analytics (`Analytics.cs`, 1600+ lines), AltTester autotests, and In-App Purchases._

- [x] **Employment & Studio Context:** Avantaj Prim S.R.L (05/2023 – Present), Senior Unity Developer.
- [ ] **Systems Personally Designed vs. Integrated vs. Collaborative:**
  - _Personally Designed & Implemented:_ (e.g., did you design the offline analytics cache `CachedLogStruct`, the team chat client parsing, specific match-3 grid algorithms?)
  - _Integrated & Maintained:_ (e.g., Firebase Authentication, AppsFlyer attribution, Google Mobile Ads mediation, Smartlook?)
  - _Collaborative Systems:_ (e.g., REST API contracts established with backend engineers for teams and dynamic difficulty?)
- [x] **Backend & GCP Scope:** Integrated Firebase services, Google Cloud, LookerStudio telemetry analysis, and backend REST APIs.
- [x] **Verifiable Production Metrics:**
  - Jolly Match 3: 100k+ downloads, team of 12 (4 developers).
  - Jolly Battle: 1M+ downloads, team of 2 engineers.
  - Jigsaw Puzzle by Jolly Battle: Team of 7 (2 developers).
- [ ] **Visual Materials:** Do you have high-resolution in-game screenshots, UI captures, or profiler screenshots that we can include in `public/images/projects/jolly-match-3/`?

---

### B. AR Language Lab (Educational / AR Application)

_Repository inspection of `e:\UnityProjects\ar-language-lab` confirmed: Unity 6 (6000.3.16f1), Vuforia Engine, marker-based AR tracking, interactive vocabulary tasks, 3D object manipulation, multilingual data-driven lesson configuration, and debug builds up to v1.0.0. Planned features in README: Speech Recognition, TTS, Progress Tracking._

- [ ] **Project Context:** Was this a university project, client contract, or independent commercial venture?
- [ ] **Personal Contribution:** Did you develop the entire application independently, or as part of a team?
- [ ] **Showcase Permissions:** Are there any confidentiality restrictions or NDA clauses, or is the project fully approved for public showcase and GitHub linking?
- [ ] **Repository Status:** Is the repository public on GitHub at `https://github.com/igorko8f/ar-languange-lab`?
- [ ] **Visual Materials:** Are there mobile screen recordings or screenshots of the AR marker tracking in action?

---

### C. BlueLight Epic (Mandatory Project — Web3 & Hardware Integration)

_Public store reference confirmed: Listed on Epic Games Store (`https://store.epicgames.com/p/bluelight-dfabd2`). Business tycoon & collectible card game (CCG) with Web3 tokenomics ($KALE, NFTs)._

- [ ] **Role & Employment Period:** What was your exact role and timeline on BlueLight?
- [ ] **Hardware & NFC Integration:** What was the technical scope of the NFC implementation? (e.g., scanning physical NFC smart cards to unlock digital cards/items, native Android/iOS NFC plugin integration, data verification?)
- [ ] **Web3 Client Integration:** What specific client-side Web3 technologies did you implement or integrate? (e.g., wallet authentication, JWT-based user credentials, external blockchain API communication, in-game marketplace UI?)
- [ ] **Demonstrable Materials:** Since the game has public Epic Games Store presence, what public screenshots, gameplay captures, or architecture diagrams are available to demonstrate this project?

---

### D. Component Ability System (Independent Architecture Showcase)

_Repository reference: `https://github.com/igorko8f/component-ability-system`._

- [ ] **Repository Completeness:** Is the repository currently complete and public on GitHub?
- [ ] **Technical Architecture Specifics:**
  - How are abilities structured (e.g., `AbilityDefinition` ScriptableObject referencing `IAbilityComponent` / `IAbilityEffect` nodes)?
  - How is execution flow handled (e.g., synchronous sequences, UniTask async chains, or state machines)?
  - Does it use a specific DI container (e.g., Zenject, VContainer, or pure C# service locator)?
- [ ] **Visual Materials:** Do you have Inspector setup GIFs or node architecture diagrams showing the ability configuration workflow?

---

### E. Tetris Sudocu (Gameplay Programming & Logic Study)

_Repository inspection of `e:\UnityProjects\ARTDOCK-tetris-sudocu` confirmed: Block puzzle / Sudoku hybrid technical test assignment for ArtDock. Built with Unity 6 (6000.3.16f1), Zenject, R3 reactive programming, DOTween, New Input System, System.IO top score persistence, and a custom Unity Inspector tool for creating 5x5 figure configurations._

- [ ] **GitHub Repository URL:** The assignment prompt referenced `https://github.com/igorko8f/tetris-sudocu-game` while the local git remote is `https://github.com/igorko8f/ARTDOCK-tetris-sudocu.git`. Which URL should be linked on the portfolio?
- [ ] **Playable WebGL Build:** Is there an exportable WebGL build of the game that we can host or link to?
- [ ] **Visual Assets:** Do you have screenshots of the game board and the custom 5x5 Figure Configuration inspector tool?

---

## 2. Professional Background & Chronology

- [x] **Display Name & Brand:** Igor Coseanic.
- [x] **Location & Availability Details:**
  - Current location: Chisinau, MD-2000 Moldova.
  - Role preference: Remote / Relocation.
  - Status: Available for Senior / Lead Roles.
- [x] **Work History Chronology:**
  - **Avantaj Prim S.R.L:** Senior Unity Developer (05/2023 – Present), Chisinau, Moldova.
  - **Dragon's Lake LTD:** Senior Unity Developer (08/2022 – 04/2023), Remote.
  - **WAB Studio & FastFoodGames:** Middle Unity Developer (01/2021 – 06/2022), Remote.
  - **OurView Games:** Unity Game Developer (04/2020 – 01/2021), Chisinau, Moldova.
- [x] **Education & Languages:**
  - Technical University of Moldova, Chisinau — B.S. in Software & Applications Development and Analysis (05/2019).
  - Languages: Russian (Native), Romanian (B2), English (B1).

---

## 3. AI-Augmented Engineering Scope & Boundaries

- [ ] **Commercial Usage Confirmation:**
  - Were AI tools (Copilot, Claude, ChatGPT) officially approved or used within your commercial mobile team for boilerplate generation, crash triage, or documentation?
  - _(We will ensure all commercial claims strictly respect confidentiality and company IP.)_
- [ ] **Preferred AI Workflow Highlights:**
  - Which tools do you want featured in the `/ai-engineering` hub (e.g., Antigravity, Claude Code, GitHub Copilot)?
  - Any custom rule files (such as `AGENTS.md`) or custom skills you would like to showcase as downloadable examples?

---

## 4. General Assets & Contact Links

- [x] **Contact Email:** `igor.coseanic@icloud.com`
- [x] **LinkedIn Profile:** `https://www.linkedin.com/in/igor-coseanic-unity`
- [x] **Phone:** `+37362033736`
- [x] **GitHub Profile:** `https://github.com/igorko8f`
- [ ] **Telegram / Discord (Optional):** Handles.
- [ ] **Resume / CV File:** PDF provided by developer.
- [ ] **Avatar / Photograph:** Photo in CV can be extracted / used for hero avatar.
