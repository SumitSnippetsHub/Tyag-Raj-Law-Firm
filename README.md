# Advocate Sumit Tyagi — Tyag Raj Law Firm

Bilingual (English / Hindi) website for Tyag Raj Law Firm, Ghaziabad. This file is the single source of truth for site content decisions.

## 1. Business identity

- **Founder:** Advocate Sumit Tyagi (BBA, MBA, LLB), 13 years — Phone/WhatsApp `8860600368` · Email `sumittyagi09@gmail.com`
- **Founder:** Advocate Vishaw Pratap (BA, LLB, LLM), 13 years — Phone `9910039006` · Email `vishupratap786@yahoo.co.in`
- **Firm:** Tyag Raj Law Firm
- **Taglines in active use:**
  1. **Hero (primary):** "Strategic Legal Counsel. Trusted Representation, Proven Commitment."
  2. **Values strip (secondary):** "Justice, Integrity, Excellence."
- **Tagline alternates (not live):**
  1. "Strategic Counsel. Trusted Advocacy."
  2. "Where Your Rights Find Their Strongest Voice."
  3. "Your Rights, Our Commitment, Justice Our Pursuit."
- **Main Chamber:** Office No. 435, 4th Floor, Aditya Height Street, Lal Kuan, Ghaziabad
- **Second Office:** Ch. No. 33A, New Building, Second Floor, District & Session Court, Ghaziabad
- **Phone / WhatsApp series:** `8860600368` (primary WhatsApp), `9910039006` (Founder), `9217620368`
- **Working days:** Monday to Saturday · **Working hours:** 10:00 AM – 5:00 PM
- **Service area:** Ghaziabad, Noida, Delhi NCR, Hapur, Meerut, Prayagraj High Court, Dehradun (centralized in `src/lib/site.ts` → `SERVICE_LOCATIONS`)

## 2. Practice areas (14)

1. Criminal Law
2. Civil Litigation
3. Matrimonial, Family & Divorce Law
4. Child Custody
5. Court Marriage & Marriage Registration
6. Property Law
7. RERA (Real Estate Matters)
8. NDPS Act
9. MACT / Accidental Cases
10. Bail Matters
11. Section 138 NI Act (Cheque Bounce)
12. Consumer Matters
13. Cyber Law
14. IPR — Trademark & Copyright

Content lives in `src/lib/practice-areas.ts`. Practice-area photos are served from client-provided files at `public/images/practice-areas/{slug}.jpg` / `.png`.

## 3. Brand Design System

**Confirmed palette: black & gold** (matches the firm logo). This **replaces** the earlier maroon accent.

| Token | Hex | Role |
| --- | --- | --- |
| `--background` | `#FAF8F4` | Warm off-white page background |
| `--surface` | `#FFFFFF` | Cards / panels |
| `--ink` | `#141414` | Primary text / black |
| `--ink-soft` | `#4A4A4A` | Secondary text |
| `--primary` | `#C9A227` | Gold accent (CTAs, links, icons, underlines) |
| `--accent-2` | `#E4C158` | Lighter gold for hover |
| `--border` | `#E5E1D8` | Hairline borders |
| `--dark-bg` | `#141414` | Footer / dark sections |
| `--dark-text` | `#F5F3EE` | Text on dark |

Design language stays **light, minimal, and flat**: thin gold accents, gold text/icons, gold underlines — no glow, multi-layer shadows, or gradient gold fills.

Fonts: Playfair Display (`--font-brand`), Manrope (`--font-display`), Inter (`--font-sans`).

## 4. Team roster

1. Advocate Sumit Tyagi — Founder
2. Advocate Vishaw Pratap — Founder
3. Nitin Chandela — Advocate (specific title TODO — confirm with client)
4. Vikrant Tyagi — Advocate (specific title TODO — confirm with client)
5. Pooja Saxena — Advocate (specific title TODO — confirm with client)

Photos under `src/assets/` (`member-2.jpeg` … `member-5.jpeg`, founder portraits, team group shots).

## 5. Homepage sections

Hero (soft bottom scrim so founders photo stays visible) → Founders → Chambers → trust bar → **secondary tagline strip** → courts marquee → stats → about preview → practice areas → why choose us → **Our Mission (copy + photo)** → **Our Vision (copy + distinct photo)** → Expert Team → testimonials → booking → process → FAQ.

**Hero visibility:** corrected with a bottom-weighted soft overlay (`scrim="soft"` + `imagePosition="top"`) so faces stay clear while CTAs remain legible.

**Mission + Vision:** both sections include supporting photos (`advocateDesk` for Mission, `namePlate` for Vision).

Persistent quick actions (Call → WhatsApp → Email) use WhatsApp number `918860600368`.

## 6. Brand assets

- Logo: `src/assets/logo_main_firm.jpeg`
- Watermark: `src/assets/baclground_watermark.jpeg`
- About / hero: `src/assets/about-hero.jpeg`
- Team / founders: `src/assets/our_team_page_main.jpeg`, `member-*.jpeg`, `founder-cofounder-*.jpeg`, `full-team*.jpeg`
- Practice areas: `public/images/practice-areas/*`
- OG / PWA: `public/og-image.jpg`, `public/favicon.png`, `public/apple-touch-icon.png`, `public/site.webmanifest`

---

## Development

```sh
git clone https://github.com/SumitSnippetsHub/Tyagi-Raj-Law-Firm.git
cd Tyagi-Raj-Law-Firm
npm i
npm run dev
```
