import Link from "next/link";
import React, { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import HeroScene from "./motion/HeroScene";
import Magnetic from "./motion/Magnetic";

const ease = [0.22, 1, 0.36, 1];
const headline = ["I", "build", "digital", "products", "that", "make", "complex", "things", "feel"];

// Server-renders the final value so SEO/no-JS see "06+", then counts up from zero on the client.
function useCountUp(target, delay = 0.8) {
  const value = useMotionValue(target);
  const text = useTransform(value, (v) => String(Math.round(v)).padStart(2, "0"));
  useEffect(() => {
    value.set(0);
    const controls = animate(value, target, { duration: 1.6, ease: "easeOut", delay });
    return () => controls.stop();
  }, [value, target, delay]);
  return text;
}

const Main = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const sceneRotateX = useTransform(smy, [-0.5, 0.5], [14, -14]);
  const sceneRotateY = useTransform(smx, [-0.5, 0.5], [-18, 18]);
  const textX = useTransform(smx, [-0.5, 0.5], [-8, 8]);
  const textY = useTransform(smy, [-0.5, 0.5], [-6, 6]);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -60]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  const years = useCountUp(6);
  const builds = useCountUp(4, 1.0);

  const onMouseMove = (e) => {
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      onMouseMove={onMouseMove}
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16"
    >
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1400px] flex-col justify-between"
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-between border-b border-line pb-5 text-xs uppercase tracking-[0.18em] text-muted"
        >
          <span>Portfolio / 2026</span>
          <span className="flex items-center gap-2">
            <i className="h-2 w-2 animate-pulse rounded-full bg-accent" /> Available for select projects
          </span>
        </motion.div>

        <div className="grid gap-10 py-16 lg:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div style={{ x: textX, y: textY }}>
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="eyebrow mb-6"
            >
              Software engineer / systems thinker
            </motion.p>
            <h1 className="max-w-5xl leading-[0.94] tracking-[-0.05em]">
              {headline.map((word, i) => (
                <span key={word} className="mr-[0.25em] inline-block overflow-hidden pb-[0.18em] -mb-[0.18em] align-top">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%", rotate: 6 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, ease, delay: 0.2 + i * 0.06 }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
              <span className="inline-block overflow-hidden pb-[0.18em] -mb-[0.18em] align-top">
                <motion.span
                  className="inline-block text-accent"
                  initial={{ y: "110%", rotate: 6 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.8, ease, delay: 0.2 + headline.length * 0.06 }}
                >
                  simple.
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Scene space is reserved with padding so it can never overlap the top bar on short viewports. */}
          <div className="relative max-w-md lg:justify-self-end lg:pt-[236px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease, delay: 0.5 }}
              className="hidden lg:block absolute inset-x-0 top-0"
            >
              <HeroScene rotateX={sceneRotateX} rotateY={sceneRotateY} className="h-[220px]" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.7 }}
              className="mb-8 text-lg leading-relaxed text-soft"
            >
              6+ years of experience designing, building, and scaling full-stack
              production software with React, Next.js, Node.js, and
              containerized/serverless cloud architectures.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.85 }}
              className="flex flex-wrap gap-3"
            >
              <Magnetic>
                <Link
                  href="/#projects"
                  className="inline-block bg-accent px-5 py-3 text-sm font-bold uppercase tracking-widest text-accent-ink transition-shadow hover:shadow-[0_12px_40px_-12px_var(--c-accent)]"
                >
                  View selected work
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/#contact" className="outline-button inline-block">
                  Let&apos;s talk
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 1 }}
          className="grid grid-cols-2 gap-6 border-t border-line pt-5 text-sm text-muted sm:grid-cols-4"
        >
          <span>
            <strong className="block text-2xl text-ink">
              <motion.span>{years}</motion.span>+
            </strong>{" "}
            years shipping
          </span>
          <span>
            <strong className="block text-2xl text-ink">
              <motion.span>{builds}</motion.span>
            </strong>{" "}
            featured builds
          </span>
          <span>
            <strong className="block text-2xl text-ink">BT</strong> current home
          </span>
          <span>
            <strong className="block text-2xl text-ink">∞</strong> curious by default
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Main;
