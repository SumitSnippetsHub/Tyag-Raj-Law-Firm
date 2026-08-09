# Advocate Sumit Tyagi — Tyag Raj Law Firm

Bilingual (English / Hindi) website for Advocate Sumit Tyagi, Ghaziabad. This file is the single source of truth for site content decisions.

## 1. Business identity

- **Advocate:** Sumit Tyagi — Founder & Advocate (BBA, MBA, LLB), 12+ years in litigation
- **Firm:** Tyag Raj Law Firm
- **Confirmed tagline (live):** "Strategic Legal Counsel. Trusted Representation, Proven Commitment."
- **Tagline options — client to confirm final pick** (alternates, not on the live site):
  1. "Justice, Integrity, Excellence."
  2. "Your Rights, Our Commitment, Justice Our Pursuit."
  3. "Where Your Rights Find Their Strongest Voice."
  4. "Strategic Counsel. Trusted Advocacy."
- **Chambers:** Ch. No. 33A, New Building, Second Floor, District & Session Court, Ghaziabad
- **Phone / WhatsApp:** 8060603368 (WhatsApp), 9217620368
- **Email:** sumittyagi09@gmail.com
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

Content lives in `src/lib/practice-areas.ts`; every area has its own page, hero image, JSON-LD `Service` schema and WhatsApp CTA.

## 3. Team roster

- Sumit Tyagi — Founder & Advocate (BBA, MBA, LLB, 12+ years)
- Vishu Raj Pratap — Associate Advocate (role title, bio and photo pending from client)
- Kanak Tyagi — Associate Advocate (role title, bio and photo pending from client)

Rendered on the homepage "Expert Team" section and the `/team` page (`src/lib/site.ts` → `TEAM`).

## 4. Homepage sections

Hero → trust bar → courts marquee → stats → about preview → practice areas (13) → why choose us → **Our Mission** → **Our Vision** → **Expert Team** → testimonials → booking form → process → assurances → FAQ → **Our Chambers** (single consolidated address / phone / email / hours / map / Get Directions block).

Persistent quick actions (Call → WhatsApp → Email) render as a fixed bottom bar on mobile and a floating cluster on desktop (`src/components/QuickActions.tsx`).

## 5. Brand assets

- Logo: `src/assets/logo_main_firm.jpeg` (navbar, footer)
- Background watermark: `src/assets/baclground_watermark.jpeg`
- Team photo: `src/assets/our_team_page_main.jpeg`
- Name plate: `src/assets/name_plate.jpeg`

---

## Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
