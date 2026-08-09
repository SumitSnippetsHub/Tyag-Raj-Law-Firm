import logoFirm from "@/assets/logo_main_firm.jpeg";
import watermarkFirm from "@/assets/baclground_watermark.jpeg";
import namePlate from "@/assets/name_plate.jpeg";
import teamSumit from "@/assets/our_team_page_main.jpeg";
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
