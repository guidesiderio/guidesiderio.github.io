# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio site for Guilherme Desidério (Data Analyst & BI) hosted via GitHub Pages. No build step, no package manager — changes to `index.html`, `style.css`, or `script.js` are deployed by pushing to `main`.

## Stack

- **HTML5 / CSS3 / Vanilla JavaScript** — no frameworks, no bundler
- **Google Fonts** — Space Grotesk (display/headings) + Inter (body), loaded via `<link>` in `index.html`
- **Icons** — SimpleIcons CDN (inline `<img src="https://cdn.simpleicons.org/...">`) plus local SVGs in `assets/icons/`
- **Hosting** — GitHub Pages (`https://guidesiderio.github.io`)

## Architecture

All content lives in three files:

| File | Responsibility |
|------|----------------|
| `index.html` | Structure, content, SEO meta (Open Graph, Twitter Card), structured data (JSON-LD), inline SVG symbol definitions |
| `style.css` | All styling: dark-only theme (no light mode), CSS custom properties, responsive breakpoints, scroll-reveal animations, "Technical Observer" design system with zero border-radius |
| `script.js` | Nav scroll shadow, mobile menu toggle (hamburger + overlay), scroll-reveal via `IntersectionObserver`, active nav link tracking, PT/EN language toggle |

**Design system:** "The Technical Observer" — dark-only palette (`--surface: #131313`), zero border-radius enforced globally, monochrome with subtle tonal layering. Viewfinder corners and coordinate markers as visual motifs.

**Sections in `index.html`:** `#hero`, `#sobre`, `#experiencias`, `#projetos`, `#habilidades`, `#formacao`, `#certificados`, `#contato`

**Layout:** `#sobre` and `#experiencias` are side-by-side in a `.about-exp-row` wrapper.

**Scroll reveal pattern:** add `.reveal` class to any element — `script.js` will observe it and add `.visible` when it enters the viewport. Respects `prefers-reduced-motion`.

**i18n pattern:** add `data-lang-pt` and `data-lang-en` attributes to any element — `script.js` swaps the text content when the user clicks the PT/EN toggle in the nav. Default language is PT-BR.

**Accessibility:** skip-link, `aria-label`/`aria-expanded` on interactive elements, `prefers-reduced-motion` support, `noscript` fallback for reveal animations, focus-visible outlines.

**Static assets:** `assets/icons/` contains local SVGs (favicon, Power BI, Excel, VS Code); `assets/curriculum.pdf` is the downloadable résumé.

## Current Content

**Experiences:**
- Estagiário de BI / Governança de Dados — Tribunal de Justiça do Piauí (TJPI), out. 2025–presente
- Estagiário de BI — PRAD, Universidade Federal do Piauí (UFPI), mar. 2026–presente

**Projects:**
- Docker Data Pipeline (pessoal, GitHub público)
- Dashboard das Salas de Audiência — CEJUSC I (TJPI, institucional)
- Dashboard de Partes sem CPF/CNPJ (TJPI, institucional)
- Dashboard de Complementos Inválidos (TJPI, institucional)
- Maleta Digital da Fiscalização (PRAD/UFPI, link público via Vercel)

**Skills (3 groups):**
- Dados & BI: Python, Pandas, NumPy, SQL, Power BI, Qlik Sense, Looker Studio, Excel
- Infraestrutura: Docker, PostgreSQL, MySQL, Supabase, Jupyter
- Dev & Ferramentas: Git & GitHub, Linux, DBeaver, VS Code

**Certificates:** AWS Fundamentos de Nuvem, SQL para Análise de Dados (Udemy), Inteligência Artificial e Computacional (FIAP)

## Deployment

Push to `main` → GitHub Pages auto-deploys. No CI, no preview environments.
