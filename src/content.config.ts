import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    category: z.enum([
      'commercial',
      'educational-ar',
      'hardware-web3',
      'architecture-showcase',
      'independent-game',
    ]),
    tier: z.enum(['flagship', 'core', 'compact']),
    featuredOnHome: z.boolean().default(false),
    order: z.number().default(100),

    // Project Context
    genre: z.string(),
    platforms: z.array(z.enum(['iOS', 'Android', 'PC', 'WebGL', 'Cross-platform'])),
    period: z.string().optional(),
    teamSize: z.string().optional(),
    role: z.string(),

    // Core Overview
    shortDescription: z.string().max(300),

    // Granular Responsibilities Breakdown
    implementedSystems: z.array(z.string()).default([]),
    integratedSystems: z.array(z.string()).default([]),
    collaborativeSystems: z.array(z.string()).default([]),

    // Technical Highlights
    technologies: z.array(z.string()).min(1),
    architectureHighlights: z.array(z.string()).default([]),
    analyticsHighlights: z.array(z.string()).default([]),
    backendHighlights: z.array(z.string()).default([]),

    // Visual Assets
    coverImage: z.string(),
    coverAlt: z.string(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),

    // External Proof & Store Links
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          type: z.enum([
            'googleplay',
            'appstore',
            'epicgames',
            'github',
            'youtube',
            'live',
            'article',
          ]),
        }),
      )
      .default([]),

    // Verified Production Metrics
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          verified: z.boolean().default(true),
        }),
      )
      .default([]),
  }),
});

const aiCaseStudiesCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/ai-case-studies',
  }),
  schema: z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    category: z.enum([
      'workflow-automation',
      'agent-architecture',
      'test-generation',
      'code-analysis',
    ]),
    workflowType: z.enum(['professional-practice', 'independent-lab']),
    featured: z.boolean().default(false),
    order: z.number().default(100),

    problemStatement: z.string(),
    aiToolsUsed: z.array(z.string()),
    humanValidationMethod: z.string(),
    outcomes: z.array(z.string()),
    limitationsEncountered: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
  'ai-case-studies': aiCaseStudiesCollection,
};
