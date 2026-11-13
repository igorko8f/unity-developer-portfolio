import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n';

export type ProjectEntry = CollectionEntry<'projects'>;
export type AICaseStudyEntry = CollectionEntry<'ai-case-studies'>;

/**
 * Extracts the URL slug (without the leading `en/` or `ru/` folder prefix).
 */
export function getProjectSlug(project: ProjectEntry): string {
  return project.id.replace(/^(en|ru)\//, '');
}

/**
 * Returns all projects for the given locale sorted by order ascending.
 */
export async function getAllProjects(locale: Locale = 'en'): Promise<ProjectEntry[]> {
  const prefix = `${locale}/`;
  const projects = await getCollection('projects', (entry) => entry.id.startsWith(prefix));
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Returns projects flagged for homepage display in the given locale.
 */
export async function getFeaturedProjects(locale: Locale = 'en'): Promise<ProjectEntry[]> {
  const projects = await getAllProjects(locale);
  return projects.filter((p) => p.data.featuredOnHome);
}

/**
 * Retrieves a single project by its slug and locale.
 */
export async function getProjectById(
  slug: string,
  locale: Locale = 'en',
): Promise<ProjectEntry | undefined> {
  const projects = await getAllProjects(locale);
  return projects.find((p) => getProjectSlug(p) === slug || p.id === slug);
}

/**
 * Returns all AI-augmented engineering case studies sorted by order.
 */
export async function getAllAICaseStudies(): Promise<AICaseStudyEntry[]> {
  const caseStudies = await getCollection('ai-case-studies');
  return caseStudies.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Returns featured AI-augmented engineering case studies.
 */
export async function getFeaturedAICaseStudies(): Promise<AICaseStudyEntry[]> {
  const caseStudies = await getAllAICaseStudies();
  return caseStudies.filter((cs) => cs.data.featured);
}
