````markdown
# Design System Technical Documentation

## 1. Overview & Creative North Star

### The Creative North Star: "The Technical Observer"

This design system is a radical departure from the soft, approachable "SaaS" aesthetic. It is inspired by the precision of a Leica view-finder, the raw structural integrity of a blueprint, and the unapologetic clarity of a brutalist photography portfolio.

The goal is not to "guide" the user through friendly metaphors, but to present content with the clinical authority of a curated archive. We break the template look through **Intentional Asymmetry**—where the layout feels like a photographic composition—and **Visible Infrastructure**, utilizing technical markers and grid lines as primary decorative elements. Every pixel must feel intentional, sharp, and engineered.

---

## 2. Colors

The color palette is built on a foundation of absolute contrast. We utilize a monochrome scale to ensure that the content (photography or typography) remains the sole focus.

- **Primary & Surface:** While the system utilizes `#131313` (`surface`) for standard backgrounds, the creative intent often pushes toward pure `#000000` to achieve "infinite depth" on OLED displays.

- **The "No-Line" Rule:** Standard 1px solid borders for sectioning are strictly prohibited. In this system, boundaries are defined by:
  1. **Tonal Transitions:** Moving from `surface` (#131313) to `surface-container-low` (#1b1b1b).

  2. **Hairline Grids:** Using the `outline-variant` (#474747) at 50% opacity to create a technical "measurement" feel rather than a structural container.

- **Surface Hierarchy:** Depth is created through nesting. A `surface-container-high` (#2a2a2a) element should only exist to draw immediate focus to a utility, such as a code snippet or a technical specification.

- **Signature Textures:** For high-end CTAs, avoid flat fills. Use a subtle linear gradient from `primary` (#FFFFFF) to `primary-container` (#d4d4d4) to give the element a "machined metal" feel.

---

## 3. Typography

Typography is the architecture of this system. We use a dual-font approach to balance technical precision with editorial impact.

- **Display & Headlines (Space Grotesk):** These are your "shouting" elements. Used for large-scale headers (`display-lg` at 3.5rem). The leading should be set to 0.9x or 1.0x—tight enough that the descenders almost touch the ascenders of the line below. This creates a block-like, architectural footprint.

- **Technical Labels (Space Grotesk):** Use `label-sm` for coordinate markers (e.g., '01', '02') and metadata. These should always be uppercase or paired with technical symbols.

- **Body & Titles (Inter):** Inter provides the "human" element. It is used for long-form reading and navigation. Its neutrality ensures it does not compete with the bold character of Space Grotesk.

- **Hierarchy through Scale:** Use extreme scale shifts. A 3.5rem headline next to a 0.75rem label creates a "Technical vs. Macro" tension that feels premium and intentional.

---

## 4. Elevation & Depth

Standard shadows and "floating" cards have no place here. We communicate hierarchy through **Tonal Layering** and **Technical Framing**.

- **The Layering Principle:** Stack `surface-container` tiers to create hierarchy. To lift a component, don't add a shadow; change its background from `surface` to `surface-container-lowest`.

- **The "Ghost Border":** If a separation is required for accessibility, use a "Ghost Border"—a 1px line using `outline-variant` at 20% opacity. This should look like a faint pencil mark on a blueprint.

- **View-finder Elements:** Use 'L-shaped' corner brackets (8px length, 1px thickness) to frame images or primary content blocks. These act as "optical containers" that guide the eye without closing off the layout.

- **Glassmorphism:** For overlays (modals or navigation drawers), use a `surface` color with 70% opacity and a `20px` backdrop-blur. This maintains the "Darkroom" aesthetic while allowing the underlying grid to bleed through.

---

## 5. Components

All components must adhere to the **Zero-Rounding Scale (0px)**. Sharp edges are non-negotiable.

### Buttons

- **Primary:** Pure `#FFFFFF` fill with `#000000` text. Sharp corners. No shadow.

- **Secondary:** Transparent fill with a 1px `outline` (#919191) border.

- **Hover State:** On hover, the secondary button should invert colors completely.

### Input Fields

- **Styling:** Forgo the "box" look. Use a single bottom border (1px `outline`).

- **Labels:** Use `label-md` in Space Grotesk, positioned exactly 4px above the technical hairline.

- **Error State:** Use `error` (#ffb4ab) for the underline and helper text. The contrast against the black background must be jarring to ensure immediate attention.

### Technical Elements (The "Utility" Layer)

- **Coordinate Markers:** Place `label-sm` numbers (e.g., '00', '01') at the intersection of grid hairlines.

- **Vertical Ticks:** Use 1px wide, 4px tall vertical lines to create a "ruler" effect at the top of main content sections.

### Cards & Lists

- **Rule:** No divider lines. Use `spacing-lg` (vertical white space) to separate list items. If separation is visually required, use a background shift to `surface-container-low`.

---

## 6. Do’s and Don’ts

### Do:

- **Embrace the Grid:** Let the technical lines be visible. They are the "bones" of the design.

- **Use Asymmetry:** Offset your columns. A 12-column grid might have content starting on column 3 and ending on column 11.

- **Tighten Leading:** Keep headers compact. The "air" in the design should come from margins, not line-height.

### Don't:

- **No Rounded Corners:** Never use `border-radius`. A single rounded corner destroys the brutalist integrity of the system.

- **No Traditional Shadows:** Avoid the "fuzzy" grey drop shadow. Use background color shifts to define layers.

- **Don't Center Everything:** Center-alignment often feels like a template. Lean into left-aligned or staggered compositions to maintain the editorial edge.

- **Avoid Softness:** This system is about precision. If an element feels "friendly," it is likely off-brand. Aim for "Authoritative."

---

_Director's Final Note: The beauty of this system lies in its restraint. Let the black space breathe. The user should feel like they are looking through a high-end lens at a perfectly composed subject._```
````
