# 🚀 My Curriculum Studio

> A personal portfolio & curriculum vitae web application built with **Nuxt 3**, **Tailwind CSS**, and **DaisyUI** — powered by **Nuxt Content** for a fully markdown-driven content experience.

---

## ✨ Overview

**My Curriculum Studio** is Alejandro Ferran's personal portfolio site, designed as a social-media-inspired feed where projects, experience, skills, and services are presented through a clean, card-based UI with dark/light theme support and a subtle animated particle background.

The entire site follows a **content-driven architecture**: all page data (projects, work timeline, skills, services) lives in Markdown files under `content/`, and Vue components render them using Nuxt Content's [MDC syntax](https://content.nuxt.com/usage/markdown#mdc-syntax). This means **zero hardcoded page content** — everything is editable from Markdown.

---

## 🏗️ Tech Stack

| Layer         | Technology                                                                      |
| ------------- | ------------------------------------------------------------------------------- |
| Framework     | [Nuxt 3](https://nuxt.com) (Vue 3 + Nitro)                                     |
| Styling       | [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com) v4    |
| Content       | [@nuxt/content](https://content.nuxt.com) v2 (Markdown / MDC)                  |
| Images        | [@nuxt/image](https://image.nuxt.com) (lazy loading, optimization)             |
| Icons         | [@nuxt/icon](https://nuxt.com/modules/icon) (Iconify integration)              |
| Utilities     | [@vueuse/nuxt](https://vueuse.org) (composables like `useFullscreen`)          |
| Studio        | [@nuxthq/studio](https://nuxt.studio) (visual CMS editing)                     |
| Language      | TypeScript                                                                      |
| Themes        | DaisyUI themes: `light`, `dark`, `cupcake`                                     |

---

## 📁 Project Structure

```
my_curriculum_studio/
├── app.vue                      # Root component (layout wrapper + page transitions)
├── nuxt.config.ts               # Nuxt configuration (modules, routing, transitions)
├── tailwind.config.ts           # Tailwind + DaisyUI theme configuration
├── tsconfig.json                # TypeScript config (extends Nuxt-generated)
├── package.json                 # Dependencies and scripts
│
├── content/                     # 📝 Markdown content (MDC syntax)
│   ├── feed.md                  #    → Feed page: project cards
│   ├── about.md                 #    → About page: bio, timeline, skills
│   └── services.md              #    → Services page: service cards
│
├── pages/
│   └── [...slug].vue            # Catch-all route → renders <ContentDoc />
│
├── layouts/
│   └── default.vue              # Default layout (NavBar + Header + Menu + Particles + Footer)
│
├── components/
│   ├── ShareBox.vue             # Standalone: share & like interaction buttons
│   │
│   ├── Base/                    # 🔧 Base UI primitives
│   │   ├── Contact.vue          #    → Social links (GitHub, LinkedIn, Email)
│   │   ├── ThemeController.vue  #    → Dark/Light theme toggle
│   │   └── ParticleBackground.vue #  → Animated particle canvas background
│   │
│   ├── Layout/                  # 🏛️ Structural layout pieces
│   │   ├── NavBar.vue           #    → Sticky top navbar (gradient brand + theme toggle)
│   │   ├── Header.vue           #    → Profile banner, avatar, bio summary
│   │   ├── Menu.vue             #    → Fixed bottom navigation with icons
│   │   └── Footer.vue           #    → Footer with compact tech credits
│   │
│   └── content/                 # 📄 MDC-bound components (used from Markdown)
│       ├── FeedCard.vue         #    → Project post card (badges, image, slots)
│       ├── AboutPage.vue        #    → About page layout (slots for timeline/skills)
│       ├── TimeLine.vue         #    → Single timeline entry with icons
│       ├── Skill.vue            #    → Radial progress skill indicator
│       └── Service.vue          #    → Service card with compact tech pills
│
└── public/                      # Static assets
    ├── favicon.ico
    ├── profile_image.jpg
    └── post_*.{jpg,png}         # Project thumbnail images
```

---

## 🧩 Component Architecture

Components are organized into **three tiers**:

### `components/Base/` — UI Primitives
- **`ThemeController`** — DaisyUI swap toggle for dark/light theme
- **`Contact`** — Social icon buttons (GitHub, LinkedIn, Email)
- **`ParticleBackground`** — Canvas-based animated particle system with connecting lines, theme-aware colors

### `components/Layout/` — Structural Shell
- **`NavBar`** — Sticky glassmorphism bar with gradient brand name
- **`Header`** — Banner + avatar (fullscreen toggle) + bio summary
- **`Menu`** — Fixed bottom nav with icons, theme-aware glassmorphism
- **`Footer`** — Compact "Made with" credits with small tech pills

### `components/content/` — MDC Content Components
Invoked from Markdown using MDC syntax. Data via props (YAML) and slots (`#name`).

| Component     | Props                                          | Slots                                                         |
| ------------- | ---------------------------------------------- | ------------------------------------------------------------- |
| `FeedCard`    | `src`, `badges`, `is_pinned`                   | `#title`, `#description`, `#created_at`                       |
| `AboutPage`   | —                                              | `#title_of_timeline_section`, `#timeline_section`, `#title_of_skills_section`, `#skills_section` |
| `TimeLine`    | `time`, `company`, `location`, `position`, `description` | —                                                   |
| `Skill`       | `value`, `label`                               | —                                                             |
| `Service`     | `technologies` (array of `{icon, title}`)      | `#title`, `#description`                                      |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
npm run generate
```

---

## 📝 Adding Content

All content is managed through Markdown files in `content/` using MDC syntax. See `AGENT.md` for detailed patterns and rules.

---

© Alejandro Ferran
