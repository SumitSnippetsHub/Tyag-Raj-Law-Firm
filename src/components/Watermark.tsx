import { IMAGES } from "@/lib/images";

/**
 * Fixed, very low-opacity logo watermark sitting behind all page content.
 */
export function Watermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
    >
      <img
        src={IMAGES.logoPng}
        alt=""
        className="w-[150vw] max-w-none opacity-[0.04] sm:w-[95vw] lg:w-[70vw]"
      />
    </div>
  );
}

/** Section-scoped watermark for dark panels. */
export function SectionWatermark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <img
      aria-hidden
      alt=""
      src={tone === "dark" ? IMAGES.logoLight : IMAGES.logoPng}
      className="pointer-events-none absolute -right-10 bottom-0 -z-10 w-[26rem] max-w-none opacity-[0.05] sm:w-[34rem]"
    />
  );
}
