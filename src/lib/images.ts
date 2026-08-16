import logoFirm from "@/assets/logo_main_firm.jpeg";
import watermarkFirm from "@/assets/baclground_watermark.jpeg";
import namePlate from "@/assets/name_plate.jpeg";
import teamSumit from "@/assets/our_team_page_main.jpeg";
import teamVishaw from "@/assets/member-2.jpeg";
import teamNitin from "@/assets/member-3.jpeg";
import teamVikrant from "@/assets/member-4.jpeg";
import teamPooja from "@/assets/member-5.jpeg";
import foundersTogether from "@/assets/founder-cofounder-both.jpeg";
import aboutHero from "@/assets/about-hero.jpeg";
import homeHeroMobile from "@/assets/home-hero-mobile.jpeg";
import visionBlocks from "@/assets/vision-blocks.jpeg";
import foundersWithClients from "@/assets/founder-cofounder-with-clients.jpeg";
import fullTeam from "@/assets/full-team.jpeg";
import fullTeamAlt from "@/assets/full-team2.jpeg";
import coFounderChamber from "@/assets/co-founder-chamber.jpeg";
import advocateStanding from "@/assets/sumit_tyagi (1).jpeg";
import advocateDesk from "@/assets/sumit_tyagi (3).jpeg";
import advocateOffice from "@/assets/sumit_tyagi (2).jpeg";
import advocateChamber from "@/assets/sumit_tyagi (4).jpeg";
import advocatePortrait from "@/assets/our_team_page_main.jpeg";
import justiceStatue from "@/assets/law-statue.jpeg";
import gavel from "@/assets/gavel.jpeg";
import lawBooks from "@/assets/law-books.jpeg";
import paDocuments from "@/assets/pa-documents.jpg";
import paFamily from "@/assets/pa-family.jpg";
import paCyber from "@/assets/pa-cyber.jpg";
import paProperty from "@/assets/pa-property.jpg";
import paCheque from "@/assets/pa-cheque.jpg";
import courtBuilding from "@/assets/court-building.jpg";

/** All entries resolve to Vite-bundled URL strings from local assets. */
export const IMAGES = {
  logo: logoFirm,
  logoPng: logoFirm,
  logoLight: logoFirm,
  logoFirm,
  watermarkFirm,
  namePlate,
  teamSumit,
  teamVishaw,
  teamNitin,
  teamVikrant,
  teamPooja,
  foundersTogether,
  aboutHero,
  homeHeroMobile,
  visionBlocks,
  foundersWithClients,
  fullTeam,
  fullTeamAlt,
  coFounderChamber,
  advocateStanding,
  advocateDesk,
  advocateOffice,
  advocateChamber,
  advocatePortrait,
  justiceStatue,
  gavel,
  lawBooks,
  paDocuments,
  paFamily,
  paCyber,
  paProperty,
  paCheque,
  courtBuilding,
} as const;

export type ImageKey = keyof typeof IMAGES;

/**
 * Practice-area images by slug.
 * Drop client files into `public/images/practice-areas/{slug}.jpg` to override;
 * until then we fall back to bundled stock photos below.
 */
export const PRACTICE_AREA_FALLBACK: Record<string, string> = {
  "criminal-law": IMAGES.gavel,
  "civil-litigation": IMAGES.paDocuments,
  "matrimonial-family-divorce": IMAGES.paFamily,
  "child-custody": "/images/practice-areas/child-custody.png",
  "court-marriage-registration": IMAGES.paDocuments,
  "property-law": IMAGES.paProperty,
  ndps: "/images/practice-areas/ndps.png",
  "bail-matters": IMAGES.gavel,
  "cheque-bounce-138-ni-act": "/images/practice-areas/cheque-bounce-138-ni-act.png",
  "cyber-law": IMAGES.paCyber,
  rera: "/images/practice-areas/rera.png",
  "consumer-matters": IMAGES.paDocuments,
  "ipr-trademark-copyright": IMAGES.lawBooks,
};

export function practiceAreaImageSrc(slug: string): string {
  return `/images/practice-areas/${slug}.jpg`;
}
