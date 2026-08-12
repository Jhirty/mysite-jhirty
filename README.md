# JH Marketing — website (Cloudflare Pages)

## What this is
A static site built with plain HTML, CSS and a touch of vanilla JS (for the mobile nav toggle).
No build step, no framework — deploys to Cloudflare Pages as-is.

## Design direction
White/off-white base with generous white space, Space Grotesk (headings) and Inter (body), and a
purple-to-pink brand gradient (`#7C3AED → #EC4899`) used as an accent across headlines, buttons,
borders and the favicon mark. The stats bar and "About" section sit on black backgrounds for
contrast against the otherwise light page.

## Status
Live at `jhirty.com`. `jhirty.uk` redirects to `jhirty.com` (handled outside this repo).

- Domain references consistent across `index.html`, `robots.txt` and `sitemap.xml` — done
- Images stored locally in `/Images`, no external hot-linking — done
- Favicons (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`) in `/Images`, linked correctly — done
- Social share image (`og-cover.png`, 1200x630) in place and referenced in Open Graph/Twitter tags — done
- **Open issue:** Apollo.io website tracker may not be firing — likely a Cloudflare Rocket Loader
  conflict or a domain mismatch in Apollo's own tracking settings. Needs checking in DevTools
  (Sources/Network tabs) and Cloudflare's Rocket Loader setting before it's confirmed fixed.
- Google Analytics (gtag.js) also included, kept alongside Apollo

## SEO
Canonical tag, meta description, Open Graph/Twitter cards, JSON-LD structured data, robots.txt
and sitemap.xml are all in place. This gives a clean, crawlable technical foundation — it won't
by itself win rankings against established competitors on broad terms like "fractional CMO."
Ongoing content (case studies, niche-specific pages) and backlinks are what move that needle over
time.

## Deploying
Git-connected to Cloudflare Pages — pushing to the repo triggers an automatic redeploy. No build
command needed, output directory is `/` (root).

## Files
- `index.html` — markup, copy, SEO meta tags and structured data
- `styles.css` — all styling
- `script.js` — mobile menu toggle
- `_headers` — Cloudflare Pages caching rules
- `robots.txt` / `sitemap.xml` — crawler rules and sitemap
- `Images/` — all image assets, including favicons and og-cover.png
