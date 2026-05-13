---
name: Ethos & Systems
colors:
  surface: '#fdf8fb'
  surface-dim: '#ddd9dc'
  surface-bright: '#fdf8fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f2f5'
  surface-container: '#f1ecf0'
  surface-container-high: '#ece7ea'
  surface-container-highest: '#e6e1e4'
  on-surface: '#1c1b1d'
  on-surface-variant: '#49454d'
  inverse-surface: '#313032'
  inverse-on-surface: '#f4eff3'
  outline: '#7a757d'
  outline-variant: '#cbc4cd'
  surface-tint: '#645977'
  primary: '#1e142e'
  on-primary: '#ffffff'
  primary-container: '#332944'
  on-primary-container: '#9d90b0'
  inverse-primary: '#cfc0e3'
  secondary: '#625c69'
  on-secondary: '#ffffff'
  secondary-container: '#e6dcec'
  on-secondary-container: '#66606d'
  tertiary: '#636037'
  on-tertiary: '#ffffff'
  tertiary-container: '#b1ad7d'
  on-tertiary-container: '#43411b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ebdcff'
  primary-fixed-dim: '#cfc0e3'
  on-primary-fixed: '#201730'
  on-primary-fixed-variant: '#4c425e'
  secondary-fixed: '#e9dfef'
  secondary-fixed-dim: '#ccc3d3'
  on-secondary-fixed: '#1e1a25'
  on-secondary-fixed-variant: '#4a4451'
  tertiary-fixed: '#e9e4b0'
  tertiary-fixed-dim: '#cdc896'
  on-tertiary-fixed: '#1e1c00'
  on-tertiary-fixed-variant: '#4a4821'
  background: '#fdf8fb'
  on-background: '#1c1b1d'
  surface-variant: '#e6e1e4'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  section-padding: 120px
  card-padding: 40px
---

## Brand & Style

The brand personality of this design system is authoritative yet deeply human-centered, designed to evoke trust, clarity, and care. It is tailored for a professional audience—specifically leadership and organizational development—where the balance of intellectual rigor and emotional intelligence is paramount.

The design style is a blend of **Minimalism** and **Modern Corporate**, utilizing generous whitespace to allow complex ideas room to breathe. The aesthetic is clean and structured, mirroring a "systems thinking" philosophy. By moving toward a more desaturated and muted palette, the system feels more grounded and understated, relying on precise typographic hierarchy and sophisticated tonal shifts rather than high-contrast accents to convey value.

## Colors

The color palette is anchored by **Muted Mauve (#7e7291)**, used for primary actions and headings to establish a sophisticated, professional presence. This is supported by a **Grayish Purple (#7b7482)** for secondary elements, creating a cohesive, monochromatic-leaning atmosphere that reduces visual fatigue.

**Muted Sage (#b1ad7d)** serves as a strategic tertiary accent, used sparingly for small labels or decorative markers to provide a natural, organic contrast to the purple tones. The neutral foundation is built on a **Medium Gray (#797679)**, which is used to define structural boundaries and secondary text, ensuring the system feels established and serious rather than purely decorative.

## Typography

This design system employs a sophisticated pairing of **Newsreader** for headings and **Work Sans** for body and UI elements. 

**Newsreader** provides a literary, traditional feel that suggests expertise and thoughtful reflection. It is used for all major headlines and pull quotes. Italics should be used within headings to emphasize specific words, creating a bespoke, editorial feel.

**Work Sans** is used for all functional text, body copy, and navigation. Its clean, neutral geometry ensures maximum readability across long-form content. Labels and overlines should use the Bold weight of Work Sans in all-caps with increased letter spacing to create a clear structural distinction from body text.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model centered on the page, ensuring a consistent reading experience that mimics high-end editorial print. A 12-column grid is used for desktop, with wide gutters (32px) to maintain a sense of openness.

Vertical rhythm is intentionally "slow," utilizing generous section padding (up to 120px) to separate different thematic blocks. This prevents the user from feeling rushed and encourages deep engagement with the text. Content blocks often utilize asymmetric placement—such as text on the left balanced by a single large image or a colored block on the right—to create visual interest within a structured framework.

## Elevation & Depth

Hierarchy in this design system is achieved through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows. 

1.  **Flat Surfaces:** The majority of the UI is flat, using muted color blocks to define different zones.
2.  **Subtle Outlines:** Components like cards and input fields use very thin, low-opacity borders (usually 1px in a muted neutral or secondary tone) to define their boundaries.
3.  **Depth via Color:** A sense of depth is created by stacking neutral-toned cards on top of muted surface-variant backgrounds. 
4.  **Inverted Sections:** Darker containers (using the deep seed color background) are used for "Call to Action" areas or footers to provide a heavy visual anchor at the end of a page.

## Shapes

The shape language is **Soft** and restrained. Primary buttons and cards utilize a subtle 0.25rem (4px) corner radius, which provides a hint of approachability while maintaining a crisp, professional architectural feel. 

Images may occasionally use larger radii or even circular crops for profile shots to lean into the "human-centered" aspect of the brand. Horizontal rules are thin (1px) and often used to underline "Learn More" links or separate list items, reinforcing the grid-based, organized nature of the system.

## Components

### Buttons
Primary buttons are solid blocks of Muted Mauve (#7e7291) with white Work Sans text. Secondary buttons are outlined in the Secondary color (#7b7482) or the primary color depending on the background. Padding is generous horizontally to create a stable, grounded appearance.

### Cards
Cards typically use neutral or subtle surface-container colors with a 1px subtle border. They feature a high-level headline in the primary color and a "Learn More" text link at the bottom, often accompanied by a thin decorative horizontal rule that spans the width of the card.

### Inputs & Forms
Form fields are minimalist, featuring a thin bottom border or a full-width light stroke. Focus states should use the Muted Sage (#b1ad7d) accent to provide clear feedback.

### Lists & Bullet Points
Standard lists utilize the Muted Sage accent for bullets or markers to tie back to the brand identity. Spacing between list items is increased to improve scanability.

### Testimonial / Quote Blocks
These are treated as high-priority editorial elements, often using a larger font size of Newsreader in italics, sometimes placed within a muted secondary container to set them apart from the main narrative.