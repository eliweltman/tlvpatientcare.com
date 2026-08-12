# tlvpatientcare.com

Marketing site for **TLV Patient Care Consultants, LLC** — Home, Services and About.
Static, no build step, no dependencies to install.

## Deploying to GitHub Pages

Upload the contents of this folder to the repository root (or to `/docs` and point Pages at it),
then enable Pages in **Settings → Pages**.

`.nojekyll` must stay. GitHub Pages runs Jekyll by default and Jekyll ignores any folder whose
name begins with an underscore — without that file, `_ds/` is never published and the site loads
unstyled.

## What is here

    index.html          The entire site — all three pages, the booking flow, all logic
    services.html       Entry point that hands off to index.html#services
    about.html          Entry point that hands off to index.html#about
    support.js          Rendering runtime that index.html loads
    image-slot.js       Drag-and-drop placeholder used by the one empty photo slot
    assets/fonts/       Gilroy, the display face
    assets/logo/        Logo lockups, color and on-dark
    uploads/            Photographs
    _ds/                Design-system tokens, stylesheet and component bundle

Navigation is client-side and writes `#home`, `#services`, `#about` to the URL, so any page can be
linked to, bookmarked or refreshed directly.

## Editing content

All copy, layout and logic live in `index.html`. Text sits in plain markup near the top of the file;
the booking flow's data (available times, form options, FAQ entries) is in the `<script>` class at
the bottom.

Photographs are ordinary `<img>` tags pointing at `uploads/`. To swap one, replace the file or change
the `src`. Each carries an `alt` description worth keeping accurate.

## Mobile

The site is built mobile-first below 640px: hamburger menu with the heart mark centered in the
header, a sticky "Book a free 30-minute consultation" bar that slides up once the hero CTA scrolls
away, lead copy dropped to body size, single-column footer, and the booking flow as a full-height
sheet. Nothing scrolls horizontally at any width.

## Before launch

1. **Booking flow** — the consultation modal validates and confirms, but submits nothing. It needs to
   be pointed at a real scheduler or form endpoint.
2. **Phone number** — `(555) 012-8834` in the footer is a placeholder.
3. **Terry's portrait** — the About page hero is an empty placeholder awaiting a headshot. Replace the
   `<image-slot id="tlv-terry">` element with an `<img>` once you have one.
4. **Gilroy licensing** — the display face ships here as desktop TTFs. The Fontspring EULA in
   `assets/fonts/gilroy/License.txt` asks that these not be linked directly as webfonts; generate
   WOFF2 files under the appropriate Fontspring webfont license and update the `@font-face` rules
   near the top of `index.html`.
5. **Logo vectors** — the artwork is raster (1400px wide). SVG or EPS is still needed for print or
   large-format use.

## Known compensations

The design-system bundle in `_ds/` is a version behind the design system itself, so `index.html`
works around it in two places, both commented in the file:

- it declares the Gilroy `@font-face` rules and overrides `--font-display` itself, because the
  bundled token file still names an earlier placeholder face;
- it passes the Eggplant contrast fill to the primary call-to-action buttons explicitly, because the
  bundled Button component predates that variant.

Both overrides can be deleted once the design system is re-exported.
