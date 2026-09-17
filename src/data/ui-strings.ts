/**
 * Microcopy de interfaz que no forma parte del contenido editorial
 * (content.json, a cargo de content-strategist): aria-labels, textos de
 * botones de sistema, decoraciones de terminal, etc. Se centraliza aquí
 * para que ningún componente contenga texto suelto y todo siga siendo
 * fácil de mantener/traducir.
 */
export const uiStrings = {
  es: {
    skipLink: 'Saltar al contenido',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    navPrimary: 'Navegación principal',
    navFooter: 'Navegación de pie de página',
    themeToLight: 'Cambiar a modo claro',
    themeToDark: 'Cambiar a modo oscuro',
    scrollCue: 'Desplázate',
    whoami: 'whoami',
    catStack: 'cat toolkit.txt',
    terminalRole: 'rol',
    terminalStack: 'toolkit',
    viewPdf: 'Ver PDF',
    credentialId: 'ID de credencial',
    obtained: 'Obtenido',
    inProgress: 'En curso',
    completed: 'Completado',
    opensNewTab: 'Abre en una pestaña nueva',
    footerRights: 'Todos los derechos reservados.',
    footerTagline: 'Ingeniero en Ciberseguridad · GRC & Gestión de Vulnerabilidades',
    backToTop: 'Volver arriba',
    statBefore: 'Antes',
    statAfter: 'Después',
    statCaption: 'Hallazgos críticos reducidos en 12 meses con remediación priorizada y seguimiento estructurado',
    notFoundTitle: 'Página no encontrada',
    notFoundBody: 'La página que buscas no existe o fue movida.',
    notFoundCta: 'Volver al inicio',
    noTranslation: 'Traducción no disponible para esta entrada',
    heroTerminalTitle: 'nico@sec: ~',
    downloadCert: 'Descargar certificado',
    aboutStats: [
      { value: '+3', label: 'Años gestionando controles de seguridad' },
      { value: '37→9', label: 'Hallazgos críticos en 12 meses' },
      { value: 'ISO 27001', label: 'SGSI implementado y recertificado' },
    ],
  },
  en: {
    skipLink: 'Skip to content',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    navPrimary: 'Primary navigation',
    navFooter: 'Footer navigation',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    scrollCue: 'Scroll',
    whoami: 'whoami',
    catStack: 'cat toolkit.txt',
    terminalRole: 'role',
    terminalStack: 'toolkit',
    viewPdf: 'View PDF',
    credentialId: 'Credential ID',
    obtained: 'Obtained',
    inProgress: 'In progress',
    completed: 'Completed',
    opensNewTab: 'Opens in a new tab',
    footerRights: 'All rights reserved.',
    footerTagline: 'Cybersecurity Engineer · GRC & Vulnerability Management',
    backToTop: 'Back to top',
    statBefore: 'Before',
    statAfter: 'After',
    statCaption: 'Critical findings reduced over 12 months with prioritized remediation and structured follow-up',
    notFoundTitle: 'Page not found',
    notFoundBody: 'The page you are looking for does not exist or was moved.',
    notFoundCta: 'Back to home',
    noTranslation: 'Translation not available for this entry',
    heroTerminalTitle: 'nico@sec: ~',
    downloadCert: 'Download certificate',
    aboutStats: [
      { value: '+3', label: 'Years managing security controls' },
      { value: '37→9', label: 'Critical findings in 12 months' },
      { value: 'ISO 27001', label: 'ISMS implemented and recertified' },
    ],
  },
};

export interface UiStrings {
  skipLink: string;
  menuOpen: string;
  menuClose: string;
  navPrimary: string;
  navFooter: string;
  themeToLight: string;
  themeToDark: string;
  scrollCue: string;
  whoami: string;
  catStack: string;
  terminalRole: string;
  terminalStack: string;
  viewPdf: string;
  credentialId: string;
  obtained: string;
  inProgress: string;
  completed: string;
  opensNewTab: string;
  footerRights: string;
  footerTagline: string;
  backToTop: string;
  statBefore: string;
  statAfter: string;
  statCaption: string;
  notFoundTitle: string;
  notFoundBody: string;
  notFoundCta: string;
  noTranslation: string;
  heroTerminalTitle: string;
  downloadCert: string;
  aboutStats: { value: string; label: string }[];
}

export function getUiStrings(locale: 'es' | 'en'): UiStrings {
  return uiStrings[locale];
}

/** Resuelve valores tipo "shared.social.linkedin" contra el objeto `shared`. */
export function resolveShared(path: string, shared: Record<string, any>): string {
  const parts = path.replace(/^shared\./, '').split('.');
  return parts.reduce((acc, key) => (acc ? acc[key] : undefined), shared as any) ?? '';
}
