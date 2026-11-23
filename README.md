# Aesthetic Erica Cucato — Website

Static website for **Aesthetic Erica Cucato**, a facial, body and wellness aesthetics studio in Deerfield Beach, Florida.
Built and maintained by Bloom Media House.

- Plain HTML, CSS and JavaScript. **No build step and no third-party packages.**
- Fonts are self-hosted (SIL Open Font License, see `assets/fonts/`). No requests to Google Fonts.
- Booking through [Fresha](https://www.fresha.com/a/aesthetic-erica-cucato-deerfield-beach-florida-eua-608-federal-highway-nnwquaw9).
- Cookie consent banner with optional Google Analytics 4 (loads **only** after the visitor accepts).

## Structure

```
index.html            Home page
privacy.html          Privacy Policy (fill in the highlighted placeholders before launch)
assets/css/style.css  All styles (fonts, animations, responsive rules, cookie banner)
assets/js/config.js   Site settings — Google Analytics ID goes here
assets/js/main.js     Menu, service filters, opening hours, scroll reveals, cookie consent
assets/fonts/         Self-hosted .woff2 fonts + licenses
assets/favicon.svg    Browser tab icon
```

## Security notes

- Content-Security-Policy and Referrer-Policy are set with `<meta>` tags on every page. Only this site, and Google Analytics once enabled, may load scripts.
- GitHub Pages cannot send custom HTTP headers (`X-Frame-Options`, `frame-ancestors`, `HSTS`, `X-Content-Type-Options`). To add them, put the site behind Cloudflare with a custom domain, or move hosting to Cloudflare Pages / Netlify.
- Never commit secrets. `.gitignore` blocks `.env` and key files; this site needs none.
- Recommended repository settings: require 2FA for all organization members, protect the `main` branch, and review collaborators and app access regularly.

## Cookie banner and analytics

1. Create a Google Analytics 4 property and copy its Measurement ID (`G-XXXXXXXXXX`).
2. Paste it into `assets/js/config.js` → `analyticsId`.
3. Commit. From then on the banner appears to new visitors; Analytics loads only after **Accept analytics**. **Reject** loads nothing. Visitors can change their choice via **Cookie settings** in the footer. The choice is remembered for 12 months.

While `analyticsId` is empty, no cookies are set and the banner stays hidden. To preview the banner, open the site with `?cookies=preview` at the end of the URL.

## Launch checklist (technical)

- [ ] Replace the photo placeholders (search `Replace with`) with approved, optimized images (`.webp`, ≤ 300 KB each) in `assets/img/`.
- [ ] Fill the placeholders in `privacy.html` (date, email, retention).
- [ ] Custom domain: add it in **Settings › Pages**, configure DNS, tick **Enforce HTTPS**, and verify the domain in the organization's Pages settings.
- [ ] Remove the `robots` / `googlebot` `noindex` meta tags from `index.html` (keep `privacy.html` as is or remove there too).
- [ ] Add LocalBusiness structured data (JSON-LD) back to `index.html`.
- [ ] Add the GA4 ID to `config.js` (if the client approved analytics).
- [ ] Submit the site to Google Search Console and link it from the Google Business Profile.
- [ ] Test on iPhone, Android, tablet and desktop; click every booking link.

## Publishing on GitHub Pages

**Settings › Pages** → *Deploy from a branch* → `main` / `(root)`. Every push to `main` goes live within a minute or two.

## Contact

608 Federal Highway, Deerfield Beach, FL 33441 · Instagram [@aestheticerusa](https://www.instagram.com/aestheticerusa/)
