# TLV Patient Care — staging site

Drop the contents of this folder into your GitHub Pages repository (root, or /docs).

- `index.html` — the whole site, self-contained. No build step, no external files.
- `services.html`, `about.html` — entry points that hand off to `index.html#services` / `index.html#about`.

Navigation inside the site is client-side and writes `#home`, `#services`, `#about` to the URL, so
any page can be linked to or refreshed directly.

## Images

Every photograph is a drop target, not a file. Open the page, drag an image onto a placeholder, and it
is stored in that browser only — it does not travel with the file. Before going live, replace each
placeholder with a real `<img>`. The art direction for each is written in the placeholder text.

## Booking

The consultation flow is a front-end mockup. It validates and confirms, but sends nothing. It needs to
be pointed at a real scheduler or form endpoint before launch.
