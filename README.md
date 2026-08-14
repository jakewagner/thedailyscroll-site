# Daily Scroll Club — marketing site

Public one-page site for [Daily Scroll Club](https://github.com/jakewagner/thedailyscroll) (private app repo).

## Branding

The site uses the app's house colours: brand purple `#8D029B` as the page
ground, white ink, hairline rules instead of cards. Tokens at the top of
`styles.css` mirror `Shared/BrandPalette.swift` in the app repo — change them
together.

**Modak** is self-hosted (`fonts/Modak-Regular.ttf`, SIL OFL) and used for
the hero promise and large section titles. Body, buttons, nav, and legal copy
stay the system UI face. Do not set paragraphs in Modak.

Promise copy matches onboarding: **The internet can wait.** Product model is
club schedule (no Temporary Access). Icon / favicon / OG come from the
app repo `BrandAssets/` (full-bleed DAILY SCROLL CLUB mark).

## Local preview

Open `index.html` in a browser, or from this directory:

```bash
python3 -m http.server 8080
```

## App Store link

Set `STORE_URL` in `main.js` (home CTAs) when the listing is live.

## Invites

- Chapter: `/join/?code=…` (Universal Link into the app when installed)
- `/.well-known/apple-app-site-association` must stay at that path for Apple.

## Privacy

- Policy: `/privacy/` (linked from the site footer; use this URL in App Store Connect)

## Support

- Contact: `/support/` (linked from the site footer; use this URL as the App Store Support URL)

## GitHub Pages

This repo deploys from the `main` branch root (`/`).
