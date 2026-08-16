import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

export function PageHero({
  image,
  mobileImage,
  alt,
  eyebrow,
  title,
  lead,
  children,
  tall = false,
  priority = false,
  fit = "cover",
  scrim = "default",
  imagePosition = "default",
  /** Mobile: photo band + text panel (no overlay on faces). Desktop stays full-bleed. */
  stackOnMobile = false,
}: {
  image: string;
  /** Portrait-friendly image used on small screens (defaults to `image`). */
  mobileImage?: string;
  alt: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
  tall?: boolean;
  priority?: boolean;
  /** `contain` shows the full photo (no crop) — preferred for portrait people shots. */
  fit?: "cover" | "contain";
  /** `soft` reduces the dark tint so the photo reads more clearly. */
  scrim?: "default" | "soft";
  /** `top` keeps heads/faces in frame (no top crop from cover/parallax). */
  imagePosition?: "default" | "top" | "center";
  stackOnMobile?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contain = fit === "contain";
  const pinTop = imagePosition === "top";
  const pinCenter = imagePosition === "center";
  const stack = stackOnMobile && Boolean(mobileImage);
  const freezeParallax = reduced || contain || pinTop || pinCenter || stack;

  const coverClass = pinTop
    ? "h-full w-full object-cover object-top"
    : pinCenter
      ? "h-full w-full object-cover object-center"
      : "h-[116%] w-full object-cover object-[center_18%] sm:object-[center_22%]";

  let imgClass: string;
  if (contain) {
    imgClass = "max-h-full w-full object-contain object-center";
  } else if (stack) {
    imgClass =
      "h-full w-full object-cover object-[center_22%] sm:h-full sm:object-cover sm:object-top";
  } else if (mobileImage) {
    if (pinTop) {
      imgClass =
        "max-h-full w-full object-contain object-center sm:h-full sm:w-full sm:object-cover sm:object-top";
    } else if (pinCenter) {
      imgClass =
        "max-h-full w-full object-contain object-center sm:h-full sm:w-full sm:object-cover sm:object-center";
    } else {
      imgClass =
        "max-h-full w-full object-contain object-center sm:h-[116%] sm:w-full sm:object-cover sm:object-[center_18%] sm:object-[center_22%]";
    }
  } else {
    imgClass = coverClass;
  }

  const sectionHeight = tall
    ? stack
      ? "sm:min-h-[92svh]"
      : "min-h-[86svh] md:min-h-[92svh]"
    : stack
      ? "sm:min-h-[58svh]"
      : "min-h-[52svh] md:min-h-[58svh]";

  const overlayScrim = stack
    ? `pointer-events-none absolute inset-0 z-[1] hidden sm:block ${
        scrim === "soft" ? "photo-scrim photo-scrim--soft" : "photo-scrim"
      }`
    : null;

  return (
    <section
      ref={ref}
      className={[
        "relative isolate bg-dark-bg",
        stack
          ? "flex flex-col sm:flex sm:items-end sm:overflow-hidden"
          : [
              "photo-scrim flex items-end overflow-hidden",
              scrim === "soft" ? "photo-scrim--soft" : "",
            ].join(" "),
        sectionHeight,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <motion.div
        className={
          stack
            ? "relative z-0 h-[min(58svh,34rem)] w-full shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:h-auto sm:min-h-full"
            : `absolute inset-0 -z-10 will-change-transform ${
                contain ? "flex items-center justify-center" : ""
              }`
        }
        {...(freezeParallax ? {} : { style: { y } })}
      >
        <picture
          className={
            contain
              ? "flex h-full w-full items-center justify-center"
              : "block h-full w-full"
          }
        >
          {mobileImage ? (
            <source media="(max-width: 640px)" srcSet={mobileImage} />
          ) : null}
          <img
            src={image}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            className={imgClass}
          />
        </picture>
        {stack ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark-bg to-transparent sm:hidden"
          />
        ) : null}
      </motion.div>

      {overlayScrim ? <div aria-hidden className={overlayScrim} /> : null}

      <div
        className={
          stack
            ? "relative z-10 mx-auto w-full max-w-6xl bg-dark-bg px-5 pt-6 pb-10 sm:bg-transparent sm:px-10 sm:pt-40 sm:pb-20"
            : "relative z-10 mx-auto w-full max-w-6xl px-5 pt-36 pb-14 md:px-10 md:pt-40 md:pb-20"
        }
      >
        <div className="max-w-3xl">
          {eyebrow ? (
            <motion.p
              className="inline-block border-l-2 border-primary bg-dark-bg/45 py-1 pl-3 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-dark-text/85 uppercase backdrop-blur-sm sm:text-[0.6875rem]"
              {...(reduced
                ? {}
                : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } })}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <motion.h1
            className={
              stack
                ? "text-shadow-hero mt-3 text-[1.65rem] leading-[1.12] text-dark-text sm:mt-4 sm:text-5xl sm:leading-[1.08] md:text-6xl"
                : "text-shadow-hero mt-4 text-[2rem] leading-[1.08] text-dark-text sm:text-5xl md:text-6xl"
            }
            {...(reduced
              ? {}
              : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } })}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          >
            {title}
          </motion.h1>
          {lead ? (
            <motion.p
              className={
                stack
                  ? "text-shadow-hero mt-3 max-w-2xl text-[0.9rem] leading-relaxed text-dark-text/88 sm:mt-5 sm:text-[0.95rem] md:mt-6 md:text-lg"
                  : "text-shadow-hero mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-dark-text/90 md:mt-6 md:text-lg"
              }
              {...(reduced
                ? {}
                : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } })}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              {lead}
            </motion.p>
          ) : null}
          {children ? (
            <div className={stack ? "mt-6 sm:mt-8 md:mt-9" : "mt-8 md:mt-9"}>
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
