# Daily Scroll Club — marketing site

Public site for [Daily Scroll Club](https://dailyscroll.club)
([app repo](https://github.com/jakewagner/thedailyscroll), private).

## Pages

| Path | Role |
|---|---|
| `/` | One-page marketing home |
| `/join/?code=…` | Chapter invite (Universal Link into the app) |
| `/privacy/` | Privacy policy (App Store Privacy Policy URL) |
| `/support/` | Support (App Store Support URL) |

## Branding

The site uses the app's house colours: brand purple `#8D029B` as the page
ground, white ink, hairline rules instead of cards. Tokens at the top of
`styles.css` mirror `Shared/BrandPalette.swift` in the app repo — change them
together.

**Modak** is self-hosted (`fonts/Modak-Regular.ttf`, SIL OFL) and used for the
header/footer lockup, the hero promise, and large section titles. Body,
buttons, nav, and legal copy stay the system UI face. Do not set paragraphs
in Modak.

Primary promise: **The internet can wait.** Product model: **Daily scroll**
(one hour a day) plus optional **chapters**. Emergency Access is the
intentional unlock (no Temporary Access). Icon / favicon / OG come from the
app repo `BrandAssets/` (full-bleed DAILY SCROLL CLUB mark).

## Home page (shipping)

1. Hero — splash shot, promise, App Store badge
2. Belong — “Daily Scroll Club is for…” ticker, membership copy, paused Home
3. How it works — Choose / Access / Together
4. Catastrophe case — Emergency Access
5. Close — **Come as you are.** / **Join the club**
6. Footer — socials, Privacy, Support, `hello@dailyscroll.club`

## Local preview

Open `index.html` in a browser, or from this directory:

```bash
python3 -m http.server 8080
```

## App Store

`STORE_URL` in `main.js` is live:

`https://apps.apple.com/app/id6792401715`

Home CTAs and the join-page “Get the app” link use that listing.

## Invites

- Chapter: `/join/?code=…` (Universal Link into the app when installed)
- iPhone fallback: `thedailyscroll://chapter/join?code=…`
- Copy invite writes the https URL; the app reads the clipboard only on
  **Paste invite**
- `/.well-known/apple-app-site-association` must stay at that path for Apple
  (a root copy exists for GitHub Pages)

## Privacy

- Policy: `/privacy/` (linked from the site footer; use this URL in App Store Connect)

## Support

- Contact: `/support/` (linked from the site footer; use this URL as the App Store Support URL)
- Inbox: `hello@dailyscroll.club`

## Social

- [X](https://x.com/DailyScrollClub)
- [Instagram](https://instagram.com/dailyscroll.club)
- [Threads](https://www.threads.net/@dailyscroll.club)
- [Bluesky](https://bsky.app/profile/dailyscroll.club)
- [Facebook](https://www.facebook.com/people/Daily-Scroll-Club/61592258904945)

## GitHub Pages

This repo deploys from the `main` branch root (`/`). `CNAME` is
`dailyscroll.club`.
