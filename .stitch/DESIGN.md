# Design System: SoftRest v2

## 1. Visual Theme & Atmosphere
A restrained, gallery-airy interface infused with the warm, professional aesthetic of modern Mexican hospitality. The UI balances functional POS utilitarianism with confident, fluid spring-physics motion. The atmosphere is clean, structured, yet inviting—like a well-lit, contemporary Mexican culinary studio.

## 2. Color Palette & Roles
- **Canvas Sand** (#FAFAF9) — Primary background surface, slight warmth
- **Pure Surface** (#FFFFFF) — Card, table, and container fill
- **Charcoal Ink** (#18181B) — Primary text, Zinc-950 depth
- **Muted Steel** (#71717A) — Secondary text, descriptions, metadata
- **Whisper Border** (rgba(226,232,240,0.5)) — Card borders, 1px structural lines, table dividers
- **Terracotta Accent** (#C05621) — Single accent for CTAs, active states, focus rings (Saturation < 80%. No purple/neon)
- **Emerald Success** (#059669) — Success states, completed orders
- **Rose Error** (#E11D48) — Cancelled orders, destructive actions

## 3. Typography Rules
- **Display:** Satoshi — Track-tight, controlled scale, weight-driven hierarchy
- **Body:** Satoshi — Relaxed leading, 65ch max-width, neutral secondary color
- **Mono:** JetBrains Mono — For prices, order numbers, timestamps, and high-density metrics
- **Banned:** Inter, generic system fonts for premium contexts. Serif fonts banned in dashboards.

## 4. Component Stylings
* **Buttons:** Subtly rounded (8px). Tactile -1px translate on active state. Flat, no outer glow. Accent fill for primary, ghost/outline for secondary.
* **Cards & Containers:** Generously rounded corners (1rem). Diffused whisper shadow. Used only when elevation serves hierarchy. For high-density tables or lists, replace with simple border-top dividers.
* **Inputs/Forms:** Label above, error below. Focus ring in Terracotta Accent. No floating labels. Standard gap spacing.
* **Badges:** Pill-shaped (rounded-full), soft background tint matching the semantic color with darker text.
* **Empty States:** Composed, illustrated structural compositions — not just "No data" text.

## 5. Layout Principles
- Grid-first responsive architecture. Fixed left sidebar navigation, expansive right content area.
- No overlapping elements — every element occupies its own clear spatial zone.
- Max-width containment for readable tables.
- Strict single-column collapse below 768px (Mobile-First collapse).

## 6. Motion & Interaction
- Spring physics default: `stiffness: 100, damping: 20` for all interactive elements.
- Perpetual micro-loops on active dashboard components (e.g., live kitchen timer pulsing).
- Staggered cascade delays for waterfall reveals of list items and table rows.

## 7. Anti-Patterns (Banned)
- No emojis anywhere.
- No Inter font.
- No pure black (#000000).
- No neon/outer glow shadows.
- No 3-column equal grid layouts for metrics (use asymmetric arrangements or horizontal scroll).
- No generic fake data metrics like "99.99%". Use realistic restaurant data.
- No AI copywriting clichés ("Elevate", "Next-Gen").
- No fake system metrics sections.
