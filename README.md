# Advocate Sumit Tyagi — Tyag Raj Law Firm

Bilingual (English / Hindi) website for Tyag Raj Law Firm, Ghaziabad. This file is the single source of truth for site content decisions.

## 1. Business identity

- **Founder:** Advocate Sumit Tyagi (BBA, MBA, LLB), 12 years — Phone/WhatsApp `+91 88606 00368` · Email `sumittyagi09@gmail.com`
- **Co-Founder:** Advocate Vishaw Pratap (BA, LLB, LLM), 12 years — Phone `9910039006` · Email `vishupratap786@yahoo.co.in`
- **Firm:** Tyag Raj Law Firm
- **Confirmed tagline (live):** "Strategic Legal Counsel. Trusted Representation, Proven Commitment."
- **Tagline options — client to confirm final pick** (alternates, not on the live site):
  1. "Justice, Integrity, Excellence."
  2. "Your Rights, Our Commitment, Justice Our Pursuit."
  3. "Where Your Rights Find Their Strongest Voice."
  4. "Strategic Counsel. Trusted Advocacy."
- **Main Chamber:** Ch. No. 33A, New Building, Second Floor, District & Session Court, Ghaziabad
- **Second Office:** Office No. 435, 4th Floor, Aditya Height Street, Lal Kuan, Ghaziabad
- **Phone / WhatsApp:** `8860600368` (primary WhatsApp, display as `+91 88606 00368`), `9217620368`, `9910039006` (Co-Founder)
- **Working days:** Monday to Saturday · **Working hours:** 10:00 AM – 5:00 PM
- **Service area:** Ghaziabad, Noida, Delhi NCR

## 2. Practice areas (13)

1. Criminal Law
2. Civil Litigation
3. Matrimonial, Family & Divorce Law
4. Child Custody
5. Court Marriage & Marriage Registration
6. Property Law
7. RERA (Real Estate Matters)
8. NDPS Act
9. Bail Matters
10. Section 138 NI Act (Cheque Bounce)
11. Consumer Matters
12. Cyber Law
13. IPR — Trademark & Copyright

Content lives in `src/lib/practice-areas.ts`. Practice-area photos are served from **client-provided files** at `public/images/practice-areas/{slug}.jpg` (not stock CDN assets).

## 3. Team roster

1. Advocate Sumit Tyagi — Founder
2. Advocate Vishaw Pratap — Co-Founder
3. Nitin Chandela — Advocate (specific title TODO — confirm with client)
4. Vikrant Tyagi — Advocate (specific title TODO — confirm with client)
5. Pooja Saxena — Advocate (specific title TODO — confirm with client)

Photos are client-provided under `src/assets/` (`member-2.jpeg` … `member-5.jpeg`, founder portraits, team group shots). **Kanak Tyagi removed** from the roster.

Rendered on the homepage "Expert Team" section and the `/team` page (`src/lib/site.ts` → `TEAM` / `FOUNDERS`).

## 4. Homepage sections

Hero → **Founder & Co-Founder** → **Our Chambers (both offices)** → trust bar → courts marquee → stats → about preview → practice areas (13) → why choose us → Our Mission → Our Vision → Expert Team → testimonials → booking form → process → assurances → FAQ → extra photos → Our Chambers (dual maps) again near footer.

Persistent quick actions (Call → WhatsApp → Email) use WhatsApp number `918860600368`.

## 5. Brand assets

- Logo: `src/assets/logo_main_firm.jpeg`
- Watermark: `src/assets/baclground_watermark.jpeg`
- Team / founders: `src/assets/our_team_page_main.jpeg`, `member-*.jpeg`, `founder-cofounder-*.jpeg`, `full-team*.jpeg`
- Practice areas: `public/images/practice-areas/*.jpg`

---

## Development

```sh
git clone https://github.com/SumitSnippetsHub/Tyagi-Raj-Law-Firm.git
cd Tyagi-Raj-Law-Firm
npm i
npm run dev
```
