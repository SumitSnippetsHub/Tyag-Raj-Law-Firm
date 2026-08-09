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
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contain = fit === "contain";

  return (
    <section
      ref={ref}
      className={`photo-scrim relative isolate flex items-end overflow-hidden bg-dark-bg ${
        tall ? "min-h-[86svh] md:min-h-[92svh]" : "min-h-[52svh] md:min-h-[58svh]"
      }`}
    >
      <motion.div
        aria-hidden
        className={`absolute inset-0 -z-10 will-change-transform ${
          contain ? "flex items-center justify-center" : ""
        }`}
        {...(reduced || contain ? {} : { style: { y } })}
      >
        <picture className={contain ? "flex h-full w-full items-center justify-center" : undefined}>
          {mobileImage ? (
            <source media="(max-width: 640px)" srcSet={mobileImage} />
          ) : null}
          <img
            src={image}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            className={
              contain
                ? "max-h-full w-full object-contain object-center"
                : "h-[116%] w-full object-cover object-[center_18%] sm:object-[center_22%]"
            }
          />
        </picture>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-36 pb-14 md:px-10 md:pt-40 md:pb-20">
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
            className="text-shadow-hero mt-4 text-[2rem] leading-[1.08] text-dark-text sm:text-5xl md:text-6xl"
            {...(reduced
              ? {}
              : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } })}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          >
            {title}
          </motion.h1>
          {lead ? (
            <motion.p
              className="text-shadow-hero mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-dark-text/90 md:mt-6 md:text-lg"
              {...(reduced
                ? {}
                : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } })}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              {lead}
            </motion.p>
          ) : null}
          {children ? <div className="mt-8 md:mt-9">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
