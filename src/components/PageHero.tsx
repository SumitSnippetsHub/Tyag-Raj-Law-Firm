import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

export function PageHero({
  image,
  alt,
  eyebrow,
  title,
  lead,
  children,
  tall = false,
  priority = false,
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
  tall?: boolean;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      className={`relative isolate overflow-hidden bg-dark-bg ${
        tall ? "min-h-[92svh]" : "min-h-[58svh]"
      } flex items-end`}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 will-change-transform"
        {...(reduced ? {} : { style: { y } })}
      >
        <img
          src={image}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className="h-[118%] w-full object-cover"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-dark-bg/72"
      />

      <div className="container-page relative w-full pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <motion.p
              className="eyebrow text-dark-text/70"
              {...(reduced ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } })}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <motion.h1
            className="mt-4 text-4xl leading-[1.05] text-dark-text sm:text-5xl md:text-6xl"
            {...(reduced ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } })}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          >
            {title}
          </motion.h1>
          {lead ? (
            <motion.p
              className="mt-6 max-w-2xl text-base leading-relaxed text-dark-text/80 md:text-lg"
              {...(reduced ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } })}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              {lead}
            </motion.p>
          ) : null}
          {children ? <div className="mt-9">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}