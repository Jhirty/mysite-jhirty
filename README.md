# JH Marketing — website (Cloudflare Pages ready)

## What this is
A static site built with plain HTML, CSS and a touch of vanilla JS (for the mobile nav toggle).
No build step, no framework — it deploys to Cloudflare Pages as-is.

## Design direction
White/off-white base with generous white space, **Space Grotesk** for headings and **Inter** for
body copy, and a purple-to-pink gradient (`#7C3AED → #EC4899`) used as an accent across headlines,
buttons and borders. The stats bar and the "About" section sit on black backgrounds for contrast
against the otherwise light page.

This is a design interpretation, not a pixel copy of the original Framer site. If this direction
isn't the look you're after, let me know what you'd prefer (reference sites, a palette, mood
images) and it can be restyled.

## Images
Images are stored locally in the `/Images` folder and referenced directly in `index.html`
(e.g. `Images/hero_image.jpeg`), rather than hot-linked from an external CDN.

## Outstanding before this goes live
- **Domain consistency:** `index.html` (canonical tag, Open Graph tags, JSON-LD structured data)
  already points to `https://www.jhirty.com/`, but `robots.txt` and `sitemap.xml` still reference
  a placeholder domain (`https://www.jhmarketing.co.uk/`). These need to be updated to match
  whichever domain is live — `jhirty.com` or `jhirty.uk`.
- **Favicon path mismatch:** `favicon.svg` exists in `/Images`, but `index.html` looks for it at
  the site root (`/favicon.svg`, `/favicon.ico`). Either move the file to the repo root or update
  the `<link>` tags in `index.html` to point to `/Images/favicon.svg`.
- **`apple-touch-icon.png`** is referenced in `index.html` but not yet present in the repo.
- **`og-cover.jpg`** (1200×630px) is referenced as the social-share image but not yet present.
- Once live, submit the site in Google Search Console and Bing Webmaster Tools, and submit
  `sitemap.xml` there.

## Tracking currently included
- Apollo.io website tracker
- Google Analytics (gtag.js)

Worth confirming these are the trackers you want live before deploying — happy to remove, add, or
swap for something else (e.g. a cookie-consent-gated setup) if needed.

## SEO — what's in place, and what it can and can't do
What's in the code now:
- Descriptive `<title>` and meta description, written around your actual services and location
- `<link rel="canonical">` and a `robots` meta tag
- Full Open Graph and Twitter Card tags, so links look right when shared on LinkedIn or elsewhere
- JSON-LD structured data (`ProfessionalService` schema) listing your services, area served and
  contact — this is what helps Google understand the business, not just the text
- `robots.txt` and `sitemap.xml`
- Clean heading hierarchy (one H1, structured H2/H3s) and descriptive image alt text

Being honest about what this achieves: technical SEO like this makes the site crawlable, correctly
understood by search engines, and credible-looking when shared or inspected — all genuinely
useful, and worth having regardless. But in a competitive market like marketing consultancy,
generic terms ("marketing agency," "fractional CMO") are dominated by sites with far more content,
backlinks and domain history. This code gives a clean technical foundation; it won't by itself win
rankings against established competitors on broad terms. What tends to move the needle from here is
content (blog posts, case studies) targeting more specific searches — your actual niche and
location combined, e.g. "fractional marketing leadership for IT services companies" or "marketing
consultant Guildford Surrey" — plus backlinks and consistent publishing over time. Happy to help
plan that content layer if useful.

## Deploying to Cloudflare Pages

**Option A — Drag and drop (fastest, no Git needed)**
1. Go to the Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets.
2. Drag this whole folder in (or a zip of it).
3. Cloudflare gives you a live `*.pages.dev` URL immediately.
4. Add a custom domain afterwards under your Pages project → Custom domains.

**Option B — Git-connected (recommended for ongoing edits)**
1. Push this folder to a GitHub or GitLab repository.
2. In Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Select the repo. Build settings: no build command needed, output directory is `/` (root).
4. Deploy — every future push updates the live site automatically.

## Files
- `index.html` — page markup, copy, and SEO meta tags/structured data
- `styles.css` — all styling
- `script.js` — mobile menu toggle only
- `_headers` — optional Cloudflare Pages caching rules
- `robots.txt` — crawler rules and sitemap reference
- `sitemap.xml` — sitemap for search engines
- `Images/` — local image assets, including `favicon.svg`
