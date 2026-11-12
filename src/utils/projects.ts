import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;
export type AICaseStudyEntry = CollectionEntry<'ai-case-studies'>;

/**
 * Returns all projects sorted by order ascending.
 */
export async function getAllProjects(): Promise<ProjectEntry[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Returns projects flagged for homepage display.
 */
export async function getFeaturedProjects(): Promise<ProjectEntry[]> {
  const projects = await getAllProjects();
  return projects.filter((p) => p.data.featuredOnHome);
}

/**
 * Retrieves a single project by its collection id/slug.
 */
export async function getProjectById(id: string): Promise<ProjectEntry | undefined> {
  const projects = await getCollection('projects');
  return projects.find((p) => p.id === id);
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
