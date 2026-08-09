import { IMAGES } from "@/lib/images";

/**
 * Fixed atmospheric logo watermark — full mark visible, soft visionary presence.
 */
export function Watermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center p-4 sm:p-8"
    >
      <div className="watermark-vision">
        <img
          src={IMAGES.watermarkFirm}
          alt=""
          className="h-auto w-auto max-h-[min(90svh,94vw)] max-w-[min(90svh,94vw)] object-contain opacity-[0.1] sm:opacity-[0.09]"
        />
      </div>
    </div>
  );
}

/** Section-scoped watermark for dark panels. */
export function SectionWatermark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <img
      aria-hidden
      alt=""
      src={tone === "dark" ? IMAGES.logoLight : IMAGES.watermarkFirm}
      className="pointer-events-none absolute bottom-4 right-4 -z-10 h-auto w-[min(18rem,70vw)] max-w-none object-contain opacity-[0.08] sm:bottom-6 sm:right-6 sm:w-[22rem]"
    />
  );
}
