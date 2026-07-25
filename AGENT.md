# AGENT.md — AI Interaction Rules for My Curriculum Studio

## 🌍 Language
- **All user-facing text content must be in English** (Markdown, templates, ARIA labels, commit messages)
- New code comments in English
- Variable, function, component, and file names in English

## 🏗️ Architecture — Content-Driven (MDC)
- **Never hardcode page content in Vue components.** All text lives in `content/*.md`
- **Props** via YAML front matter (`---` blocks) for structured data
- **Named slots** via `#slot_name` for free-form content
- Components in `components/content/` are the rendering layer, not the data layer

## 🧩 Component Tiers

| Tier | Directory | Purpose | Auto-import |
|------|-----------|---------|-------------|
| **Base** | `components/Base/` | UI primitives, no content slots | `<BaseComponentName/>` |
| **Layout** | `components/Layout/` | Page shell, used in `layouts/` only | `<LayoutComponentName/>` |
| **Content** | `components/content/` | MDC-bound, consumed from Markdown | `::component-name` (kebab-case) |

## 🎨 Styling
- **Tailwind CSS + DaisyUI** only — no other CSS frameworks
- Theme via `useState('theme')` — `true` = dark, `false` = light
- Conditional classes: `:class="theme === true ? 'dark-class' : 'light-class'"`
- Icons via `@nuxt/icon` with Iconify names (e.g., `logos:vue`, `mdi:heart`)
- Tech pills use compact sizing: `px-2 py-1 rounded-xl text-xs icon-0.9em`

## 📝 TypeScript
- `<script setup lang="ts">` required on all components
- `defineProps<{}>()` for typed props
- Prefer Nuxt auto-imports (`ref`, `computed`, `useState`, `useRoute`)

## 🗺️ Routing
- All pages via `content/*.md` + catch-all `pages/[...slug].vue` → `<ContentDoc/>`
- Root `/` redirects to `/feed` via `routeRules`
- Add new routes to `components/Layout/Menu.vue` router array

## ⚠️ Don'ts
- Don't hardcode content in components — use Markdown + MDC
- Don't write content in Spanish — English only
- Don't add CSS frameworks beyond Tailwind + DaisyUI
- Don't create `.vue` pages unless content can't serve them
- Don't modify page transitions without approval
- Don't remove `@nuxthq/studio` module

## 📋 Quick Reference — Common Tasks

| Task | Files to Modify |
|------|----------------|
| Add a project post | `content/feed.md`, `public/` (image) |
| Add work experience | `content/about.md` (`#timeline_section`) |
| Add a skill | `content/about.md` (`#skills_section`) |
| Add a service | `content/services.md` |
| Add a new page | `content/new-page.md`, `components/Layout/Menu.vue` |
| Change social links | `components/Base/Contact.vue` |
| Modify profile bio | `components/Layout/Header.vue` |
| Change themes | `tailwind.config.ts` → `daisyui.themes` |
