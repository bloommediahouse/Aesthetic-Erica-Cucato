# Aesthetic Erica Cucato — Website

Static, single-page website for **Aesthetic Erica Cucato**, a facial, body and wellness aesthetics studio in Deerfield Beach, Florida.

- Plain HTML, CSS and JavaScript. No build step, no dependencies.
- Animations: staggered hero entrance, rotating badge, floating color blobs, marquees, scroll reveals, hover effects and filtered service cards.
- Responsive with a mobile menu. Respects `prefers-reduced-motion`.
- Online booking via [Fresha](https://www.fresha.com/a/aesthetic-erica-cucato-deerfield-beach-florida-eua-608-federal-highway-nnwquaw9).

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `erica-cucato-site`).
2. Upload `index.html` and `README.md` to the repository root (**Add file › Upload files**).
3. Go to **Settings › Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then **Save**.
4. After a minute or two the site will be live at `https://<your-username>.github.io/erica-cucato-site/`.

To use a custom domain (e.g. `ericacucato.com`), add it under **Settings › Pages › Custom domain** and follow GitHub's DNS instructions.

## Editing

- **Photos:** search `index.html` for `Replace with photo` / `Replace with studio photo`. Add your images to the repo (e.g. `images/erica.jpg`) and place an `<img src="images/erica.jpg" alt="Erica Cucato" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">` inside that frame (replacing the label).
- **Prices and services:** each service card is an `<article class="svc">` in the *Services* section.
- **Hours:** rows with `class="hr"` in the *Visit* section, plus the ticker at the top of the page.

## Contact

608 Federal Highway, Deerfield Beach, FL 33441 · Instagram [@aestheticerusa](https://www.instagram.com/aestheticerusa/)
