JH Marketing — rebuilt site (Cloudflare Pages ready)
What this is
A static rebuild of `https://better-colleagues-144016.framer.app/` using plain HTML, CSS and a
touch of vanilla JS (for the mobile nav toggle). No build step, no framework — it will deploy
to Cloudflare Pages as-is.
What was preserved exactly
All copy, word for word, from the live Framer site.
Section order and structure (header, hero, stats bar, three-card service grid,
"what we do" feature rows, about section, contact CTA, footer).
The same image files, referenced directly from Framer's CDN (see note below).
What was NOT extracted from Framer (and why)
Framer sites render client-side with auto-generated, obfuscated CSS class names — there is no
readable stylesheet to copy. On top of that, my build environment couldn't reach
`framer.app` or `framerusercontent.com` to download files directly (only the page's rendered
text content was accessible via fetch). So the visual styling in `styles.css` is my own
design interpretation — clean, editorial, navy/gold/cream palette — not a pixel copy of the
original. If the original has a distinct look you want matched exactly (specific fonts, colours,
spacing), the most reliable route is:
Open the live Framer site, and use your browser's DevTools → "Inspect" → Computed styles
on key elements (fonts, colours, spacing), and send me those details, or
Export/copy code directly from within the Framer editor (Framer has a code export option),
or
Send screenshots and I'll refine the CSS to match more closely.
Image hosting
Right now the images are hot-linked from `framerusercontent.com` (Framer's own CDN). This will
work as-is when deployed, since these are public URLs. However, relying on another company's
CDN for your own site isn't ideal long-term (they could change or remove the assets). Recommended:
Download the three/four images from the URLs in `index.html`.
Put them in an `/images` folder in this project.
Update the `src` attributes in `index.html` to point to `images/filename.jpg` instead.
I can do this step for you if you upload the image files here, or if you'd like, I can try
fetching them again — my network access is currently restricted to a small allowlist that
doesn't include Framer's asset domain, so this needs to happen on your end.
Deploying to Cloudflare Pages
Option A — Drag and drop (fastest, no Git needed)
Go to the Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets.
Drag this whole folder in (or a zip of it).
Cloudflare gives you a live `*.pages.dev` URL immediately.
Add a custom domain afterwards under your Pages project → Custom domains.
Option B — Git-connected (recommended for ongoing edits)
Push this folder to a GitHub or GitLab repository.
In Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
Select the repo. Build settings: no build command needed, output directory is `/` (root).
Deploy — every future push updates the live site automatically.
SEO — what's been added, and what it can and can't do
What's in the code now:
Descriptive `<title>` and meta description, written around your actual services and location
`<link rel="canonical">` and a `robots` meta tag
Full Open Graph and Twitter Card tags, so links look right when shared on LinkedIn or elsewhere
JSON-LD structured data (`ProfessionalService` schema) listing your services, area served, and contact — this is what allows Google to understand the business, not just the text
`robots.txt` and `sitemap.xml`
Clean heading hierarchy (one H1, structured H2/H3s) and descriptive image alt text
Before this goes live, you need to:
Replace `https://www.jhmarketing.co.uk/` throughout `index.html`, `robots.txt` and `sitemap.xml` with your actual domain once you've registered/connected it in Cloudflare — the canonical tag, Open Graph URLs and structured data all reference this placeholder right now.
Create and add a real `og:image` (1200×630px) — currently the code points to `/images/og-cover.jpg`, which doesn't exist yet. This is the image shown when the site is shared on social platforms.
Add a favicon (`favicon.ico` and/or `favicon.svg`) — the code references them but the files aren't there yet.
Once live, submit the site in Google Search Console and Bing Webmaster Tools, and submit the sitemap there.
Being honest about what this achieves: technical SEO like this makes the site crawlable, correctly understood by search engines, and credible-looking when shared or inspected — all genuinely useful, and worth having regardless. But in a competitive market like marketing consultancy, generic terms ("marketing agency," "fractional CMO") are dominated by sites with far more content, backlinks and domain history. This code gives you a clean technical foundation; it won't by itself win rankings against established competitors on broad terms. What tends to move the needle from here is content (blog posts, case studies) targeting more specific searches — your actual niche and location combined, e.g. "fractional marketing leadership for IT services companies" or "marketing consultant Guildford Surrey" — plus backlinks and consistent publishing over time. Happy to help plan that content layer if useful.

Files
`index.html` — page markup, copy, and SEO meta tags/structured data
`styles.css` — all styling
`script.js` — mobile menu toggle only
`_headers` — optional Cloudflare Pages caching rules
`robots.txt` — crawler rules and sitemap reference
`sitemap.xml` — sitemap for search engines
