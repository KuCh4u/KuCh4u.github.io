# Portafolio de Ciberseguridad — Nicolás Cartagena

Portafolio personal, construido con **[Astro](https://astro.build)**, bilingüe
(ES/EN), dark-first, siguiendo un sistema de diseño propio tipo "terminal
profesional" (identidad hacker/infosec aplicada con moderación editorial).

**Sitio en vivo:** https://kuch4u.github.io

## Stack

- **[Astro 7](https://astro.build)** — sitio 100% estático, cero JS de
  framework, islas mínimas solo donde aportan valor (toggle de tema, menú
  móvil, efecto de tipeo del hero, scroll-reveal, animación de métricas).
- **Content Collections** (`astro:content`, loader `glob`) para el blog.
- **i18n nativo de Astro** (`defaultLocale: 'es'`, rutas `/` para ES y `/en/`
  para EN, sin prefijo en el idioma por defecto).
- **@fontsource** (Inter + JetBrains Mono) self-hosted — sin dependencias de
  Google Fonts en runtime, sin layout shift.
- **@astrojs/sitemap** para `sitemap.xml` multi-idioma.
- **Shiki** (integrado en Astro) para resaltado de código en el blog.
- Diseño con **CSS custom properties** (`src/styles/tokens.css`) — un único
  archivo de tokens (color, tipografía, espaciado, radios, sombras,
  duración/easing) consumido por todos los componentes vía `var(--token)`.
- Deploy a **GitHub Pages** vía GitHub Actions (`withastro/action`).

## Estructura del proyecto

```
src/
├── components/         Componentes .astro reutilizables (Header, Hero, Skills, etc.)
├── content/
│   └── blog/            Colección del blog (posts .md)
│       └── _drafts/      Plantillas privadas (NO se publican, NO se suben al repo)
├── content.config.ts    Definición de la colección "blog" (schema + loader)
├── data/
│   ├── content.json     Contenido editorial bilingüe (content-strategist)
│   └── ui-strings.ts    Microcopy de interfaz (aria-labels, textos de sistema)
├── layouts/
│   └── BaseLayout.astro   <head>, SEO/hreflang, script anti-flash de tema, Header/Footer
├── pages/
│   ├── index.astro           Home ES  (/)
│   ├── 404.astro              404 ES  (/404)
│   ├── blog/
│   │   ├── index.astro        Índice del blog ES (/blog)
│   │   └── [slug].astro       Post individual ES (/blog/mi-post)
│   └── en/
│       ├── index.astro        Home EN (/en/)
│       ├── 404.astro          404 EN (/en/404)
│       └── blog/               Índice + posts EN (/en/blog, /en/blog/my-post)
├── styles/
│   ├── tokens.css       Design tokens (dark en :root, light en [data-theme="light"])
│   └── global.css       Reset, utilidades (.btn, .card, .tag, .badge, etc.)
└── utils/
    ├── i18n.ts           Helpers de idioma (pathFor, getTranslations, etc.)
    └── reading-time.ts   Estimación de tiempo de lectura del blog
```

## Desarrollo

```bash
npm install
npm run dev       # servidor local en http://localhost:4321
```

## Build

```bash
npm run build      # astro check + astro build -> dist/
npm run preview    # sirve dist/ localmente para verificar el build de producción
```

## Blog

- El blog usa **Content Collections** (`src/content.config.ts`). Cada post es
  un `.md` en `src/content/blog/` con frontmatter: `title`, `description`,
  `pubDate`, `lang` (`es`/`en`), `translationKey` (para emparejar la versión
  ES y EN de un mismo post), `tags`, `draft`.
- **Estado actual: sin posts publicados** (a propósito). El índice y el
  teaser de la home muestran el "empty state" definido en
  `content.json` (`blog.emptyState`).
- Para escribir un post nuevo: copia una de las plantillas privadas en
  `src/content/blog/_drafts/plantilla.es.md` / `plantilla.en.md` (tienen el
  frontmatter comentado campo por campo) a `src/content/blog/` con un nombre
  tipo slug, complétala y cambia `draft: false` cuando quieras publicarla.
- `_drafts/` está excluido explícitamente del loader de la colección (nunca
  genera rutas) y también está en `.gitignore` (no se sube al repo).

## Internacionalización

- ES vive en la raíz (`/`), EN vive bajo `/en/` (`prefixDefaultLocale: false`).
- Todo el contenido editorial sale de `src/data/content.json` (a cargo del
  content-strategist); ningún componente tiene copy de negocio hardcodeado.
- Selector de idioma con `<a href>` reales (funciona sin JS); además hay
  detección automática por navegador en la home ES (si el idioma del
  navegador no es español y el usuario no eligió manualmente antes, redirige
  a `/en/`).
- `hreflang` cruzado (`es`/`en`/`x-default`) en cada página, y `sitemap.xml`
  con las variantes de idioma.

## Deploy (GitHub Pages)

Workflow en `.github/workflows/deploy.yml`: en cada push a `main`, instala
dependencias, corre `astro build` (vía `withastro/action`) y publica `dist/`
a GitHub Pages. Requiere tener **Settings → Pages → Source: GitHub Actions**
habilitado en el repositorio. `site`/`base` en `astro.config.mjs` están
configurados para un sitio de usuario (`kuch4u.github.io`, servido desde la
raíz del dominio).

## Contacto

- Email: [nicolas.a.cartagena.m@gmail.com](mailto:nicolas.a.cartagena.m@gmail.com)
- LinkedIn: [nicolas-cartagena-cyber](https://www.linkedin.com/in/nicolas-cartagena-cyber/)
- GitHub: [@KuCh4u](https://github.com/kuch4u)
