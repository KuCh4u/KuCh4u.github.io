import content from '../data/content.json';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

/**
 * Contenido bilingüe completo (fuente: content-strategist).
 * `shared` contiene datos independientes de idioma (contacto, assets).
 */
export const siteContent = content as unknown as {
  shared: Record<string, any>;
  es: Record<string, any>;
  en: Record<string, any>;
};

export function getTranslations(locale: Locale) {
  return siteContent[locale];
}

export const shared = siteContent.shared;

/**
 * Dada una ruta canónica sin prefijo de idioma (ej. "/", "/blog",
 * "/blog/mi-post"), devuelve la ruta real para el locale pedido.
 * ES vive en la raíz, EN vive bajo /en/.
 */
export function pathFor(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  if (locale === 'es') {
    return clean === '' ? '/' : clean;
  }
  return clean === '' ? '/en/' : `/en${clean}`;
}

/** Ruta canónica (sin prefijo /en) a partir de la Astro.url.pathname actual. */
export function canonicalPathFrom(pathname: string): string {
  const withoutTrailing = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  if (withoutTrailing === '' || withoutTrailing === '/en') return '/';
  if (withoutTrailing.startsWith('/en/')) return withoutTrailing.slice(3);
  return withoutTrailing;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}
