export type Locale = 'en' | 'ru';

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALES: readonly Locale[] = ['en', 'ru'] as const;

export const LOCALE_LABELS: Record<Locale, { short: string; native: string }> = {
  en: { short: 'EN', native: 'English' },
  ru: { short: 'RU', native: 'Русский' },
};

/**
 * Normalizes Astro.currentLocale (or an optional override) into a supported Locale.
 */
export function resolveLocale(locale?: string): Locale {
  return locale === 'ru' ? 'ru' : 'en';
}

/**
 * Removes a leading `/ru` locale segment from a URL pathname.
 */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === '/ru' || pathname === '/ru/') {
    return '/';
  }
  if (pathname.startsWith('/ru/')) {
    return pathname.slice(3);
  }
  return pathname || '/';
}

/**
 * Prefixes an internal path with `/ru` when targeting the Russian locale.
 * Hash-only links (e.g. `#contact`) are returned unchanged.
 */
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith('/')) {
    return path;
  }

  const normalized = stripLocalePrefix(path);
  if (locale === 'en') {
    return normalized;
  }

  return normalized === '/' ? '/ru' : `/ru${normalized}`;
}

/**
 * Computes the equivalent pathname for `targetLocale` from the current pathname.
 */
export function switchLocalePath(currentPathname: string, targetLocale: Locale): string {
  return localizePath(currentPathname, targetLocale);
}
