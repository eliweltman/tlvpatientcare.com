# TLV Patient Care — staging site

Drop the contents of this folder into your GitHub Pages repository (root, or /docs).

- `index.html` — the whole site, self-contained. No build step, no external files.
  Photographs, the Gilroy webfont and the logo artwork are all embedded.
- `services.html`, `about.html` — entry points that hand off to `index.html#services` / `index.html#about`.

Navigation inside the site is client-side and writes `#home`, `#services`, `#about` to the URL, so
any page can be linked to or refreshed directly.

## Before launch

1. **Booking flow** — the consultation modal validates and confirms, but sends nothing. Point it at a
   real scheduler or form endpoint.
2. **Phone number** — (555) 012-8834 in the footer is a placeholder.
3. **Terry's portrait** — the About page hero is still an empty placeholder awaiting a headshot.
4. **Gilroy licensing** — the display face is embedded from the desktop TTFs. The Fontspring EULA asks
   that these not be served as webfonts; generate WOFF2 files under the appropriate Fontspring webfont
   license and swap them in for production.

## Notes

The design system's bundled build is a version behind in two places, so the page compensates: it
declares Gilroy itself (the bundle still names the earlier placeholder face) and passes the Eggplant
contrast fill to the primary buttons explicitly (the bundled Button predates that variant). Both
overrides can be removed once the design system is re-exported.
