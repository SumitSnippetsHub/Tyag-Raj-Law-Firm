import logo from "@/assets/logo.jpg.asset.json";
import logoPng from "@/assets/logo.png.asset.json";
import logoLight from "@/assets/logo-light.png.asset.json";
import logoFirm from "@/assets/logo-firm.png.asset.json";
import watermarkFirm from "@/assets/watermark-firm.png.asset.json";
import namePlate from "@/assets/name-plate.jpg.asset.json";
import teamSumit from "@/assets/team-sumit.jpg.asset.json";
import advocateStanding from "@/assets/advocate-standing.jpg.asset.json";
import advocateDesk from "@/assets/advocate-desk.jpg.asset.json";
import advocateOffice from "@/assets/advocate-office.jpg.asset.json";
import advocatePortrait from "@/assets/advocate-portrait.jpg.asset.json";
import justiceStatue from "@/assets/justice-statue.jpg.asset.json";
import gavel from "@/assets/gavel.jpg.asset.json";
import lawBooks from "@/assets/law-books.jpg.asset.json";
import paDocuments from "@/assets/pa-documents.jpg";
import paFamily from "@/assets/pa-family.jpg";
import paCyber from "@/assets/pa-cyber.jpg";
import paProperty from "@/assets/pa-property.jpg";
import paCheque from "@/assets/pa-cheque.jpg";
import courtBuilding from "@/assets/court-building.jpg";

export const IMAGES = {
  logo: logo.url,
  logoPng: logoPng.url,
  logoLight: logoLight.url,
  logoFirm: logoFirm.url,
  watermarkFirm: watermarkFirm.url,
  namePlate: namePlate.url,
  teamSumit: teamSumit.url,
  advocateStanding: advocateStanding.url,
  advocateDesk: advocateDesk.url,
  advocateOffice: advocateOffice.url,
  advocatePortrait: advocatePortrait.url,
  justiceStatue: justiceStatue.url,
  gavel: gavel.url,
  lawBooks: lawBooks.url,
  paDocuments,
  paFamily,
  paCyber,
  paProperty,
  paCheque,
  courtBuilding,
} as const;

export type ImageKey = keyof typeof IMAGES;