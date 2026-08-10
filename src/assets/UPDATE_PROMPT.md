# Update Prompt — New Content & Corrections

> This is an **incremental update**, not a rebuild. Apply these changes to the existing Next.js project built from `BUILD_PROMPT.md`. Where content already exists, **update it in place** to match what's below (don't duplicate). Where it's new, add it. Update `README.md` in the repo to reflect every change here so it stays the single source of truth.

---

## 1. Tagline — pick one, don't ship all five

Add this as a decision point, not a build-all: use **one** tagline as the site's actual hero subheadline/meta description base, and list the other four in `README.md` under a "Tagline options — client to confirm final pick" note for future reference.

Recommended default (until client confirms otherwise): **"Strategic Legal Counsel. Trusted Representation, Proven Commitment."**

Other four (kept as alternates in README, not on the live site):
1. "Justice, Integrity, Excellence."
2. "Your Rights, Our Commitment, Justice Our Pursuit."
3. "Where Your Rights Find Their Strongest Voice."
4. "Strategic Counsel. Trusted Advocacy."

---

## 2. New homepage sections to add

### Our Mission
New section, homepage (after "Why Choose Us", before Testimonials). Include:
- Short mission paragraph (write real client-appropriate copy — e.g. commitment to accessible, ethical, effective legal representation across Ghaziabad/Noida/Delhi NCR)
- One supporting photo (real, relevant — e.g. "advocate courtroom commitment" or "legal justice concept" from Unsplash/Pexels, licensed)

### Our Vision
Same treatment, directly below Mission:
- Short vision paragraph (e.g. long-term goal — becoming a trusted, accessible legal partner for individuals and families across NCR)
- One supporting photo, distinct from the Mission image

Both should use the same scroll-reveal + two-column (text / image) layout pattern already used elsewhere on the site for consistency — don't introduce a new layout style for these two blocks.

---

## 3. Practice Areas — updated to 13 areas (was 9)

**Replace the existing 9-item list with this final 13-item list.** Match/merge existing pages where the topic already exists, and add net-new pages for the rest.

| # | Final area name | Status | Notes |
|---|---|---|---|
| 1 | Criminal Law | Existing — keep | |
| 2 | Civil Litigation | Existing — rename from "Civil Law" | Update slug/title copy, keep content |
| 3 | Matrimonial, Family & Divorce Law | Existing — rename/expand from "Matrimonial Law" | Broaden intro copy to explicitly cover family & divorce matters |
| 4 | Child Custody | **New page** | Add as its own practice-area page, not a subsection of #3 |
| 5 | Court Marriage & Marriage Registration | **New page** | |
| 6 | Property Law | **New page** | |
| 7 | RERA (Real Estate Matters) | Existing — keep, update subtitle to "Real Estate Matters" | |
| 8 | NDPS Act | Existing — keep | |
| 9 | Bail Matters | **New page** | |
| 10 | Sec 138 NI Act (Cheque Bounce) | Existing — keep, already labeled correctly | |
| 11 | Consumer Matters | Existing — keep | |
| 12 | Cyber Law | Existing — keep | |
| 13 | IPR — Trademark & Copyright | Existing — keep | |

For the 4 new pages (Child Custody, Court Marriage & Marriage Registration, Property Law, Bail Matters), follow the exact same page template as the existing practice-area pages (hero with real relevant image, 2–3 paragraph plain-language explanation, common case types, CTA to WhatsApp booking form pre-filled with that area). Suggested image search terms:
- Child Custody → "family child custody legal"
- Court Marriage & Marriage Registration → "marriage registration documents", "wedding legal ceremony"
- Property Law → "property deed documents", "real estate legal papers"
- Bail Matters → "courtroom bail hearing", "legal gavel bail"

Update the homepage Practice Areas grid, the sitemap, JSON-LD `Service` schema entries, and all internal nav/footer links to reflect all 13 areas.

---

## 4. Expert Team section — new

Add a new **"Our Team" / "Expert Team"** section (homepage section + optionally its own `/team` page if the site structure supports it) listing:

1. **Sumit Tyagi** — Founder & Advocate (use existing bio/credentials: BBA, MBA, LLB, 12 years experience)
2. **Vishu Raj Pratap**
3. **Kanak Tyagi**

For members 2 and 3, no bio details were provided — add a placeholder role field (e.g. "Associate Advocate") and a code comment `{/* TODO: client to provide role title, bio, and photo for this team member */}` rather than inventing credentials. Use a simple card layout: photo placeholder, name, role, consistent with the site's existing card style (see Practice Area cards).

---

## 5. "Our Chambers" section — new, consolidates contact/location info

Add a dedicated **"Our Chambers"** section (homepage, near the existing local-SEO/map block — merge rather than duplicate if a similar block already exists) with:

- **Address:** Ch. No. 33A, New Building, Second Floor, District & Session Court, Ghaziabad
- **Phone:** 8060603368, 9217620368
- **Email:** sumittyagi09@gmail.com
- **Working days:** Monday to Saturday
- **Working hours:** 10:00 AM – 5:00 PM
- **WhatsApp:** same number as primary phone (8060603368)
- **Directions / Map:** embedded Google Map iframe pointing to the office address, plus a "Get Directions" button linking to Google Maps directions URL for that address

If this data is currently split across the footer and a separate contact block, consolidate the display so "Our Chambers" is the single clearly-labeled section containing all of it — don't leave duplicate/conflicting contact blocks elsewhere on the page.

---

## 6. Front-page quick-action features — new

Add a persistent quick-action element (sticky bar or floating action cluster, mobile and desktop) with three direct actions, in this order:
1. **Call** → `tel:+918060603368`
2. **WhatsApp** → opens chat (existing floating WhatsApp button logic — just ensure Call and Email are added alongside it, not replacing it)
3. **Email** → `mailto:sumittyagi09@gmail.com`

On mobile, this can be a fixed bottom bar with 3 icon buttons. On desktop, it can live in the navbar/header as three small icon links, or as a floating cluster matching the existing WhatsApp button's position/style.

---

## 7. Data reconciliation notes for the agent

- The firm/founder identity, logo, 12-year experience figure, and Ghaziabad/Noida/Delhi service locations are unchanged — no update needed there.
- BBA, MBA, LLB are confirmed as Advocate Sumit Tyagi's credentials — add this to his bio on the About page and homepage About preview if not already present.
- Update `README.md` §2 (Practice Areas) and §1 (Business Identity) to reflect: the 13-area list above, the team roster, chamber working hours, and the confirmed tagline — so this file stays accurate for any future agent session and no one has to re-derive this from scratch again.
