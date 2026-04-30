"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center bg-[#1A1A1A] overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src="/burger-hero.jpg"
          alt="Shake Shack burger meal"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlays so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* Accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#3d8b0a] z-20" />


      {/* Rating badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute right-8 bottom-32 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 z-20"
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-[#3d8b0a] text-[#3d8b0a]" />
          ))}
        </div>
        <div>
          <div className="text-white font-black text-sm">4.8 / 5</div>
          <div className="text-white/50 text-[10px] uppercase tracking-wider">2M+ Reviews</div>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 w-full pt-28 pb-20"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-[#3d8b0a] flex-shrink-0" />
            <span className="text-[#3d8b0a] text-xs font-bold uppercase tracking-[0.28em]">
              Fresh Burgers · Fries & Shakes
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(52px,8.5vw,100px)] font-black uppercase leading-[0.88] tracking-tight text-white"
          >
            Stand for
            <br />
            <span className="text-[#3d8b0a]">Something</span>
            <br />
            <span className="italic font-black text-[#3d8b0a]">Good.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-7 text-white/65 text-lg md:text-xl max-w-lg leading-relaxed"
          >
            Premium burgers made with 100% all-natural Angus beef, crispy crinkle-cut fries, and hand-spun shakes. No shortcuts. Ever.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#order"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#3d8b0a] hover:bg-[#2d6a00] text-white font-black rounded-full transition-all duration-200 hover:scale-105 active:scale-95  text-base uppercase tracking-wide"
            >
              Order Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/menu"
              className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white/35 hover:border-white/70 text-white font-bold rounded-full transition-all duration-200 text-base hover:bg-white/10 uppercase tracking-wide"
            >
              View Menu
            </a>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="w-20 h-20 rounded-full bg-[#3d8b0a] flex flex-col items-center justify-center  flex-shrink-0"
            >
              <span className="text-xl font-black text-white leading-none">100%</span>
              <span className="text-[7px] font-black uppercase tracking-wide text-white/90 text-center leading-tight mt-0.5">
                All-Natural<br />Angus Beef
              </span>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-4"
          >
            {[
              { num: "400+", label: "Locations" },
              { num: "2004", label: "Est. NYC" },
              { num: "19", label: "Countries" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2.5">
                <span className="text-2xl md:text-3xl font-black text-white">{s.num}</span>
                <span className="text-white/35 text-xs font-semibold uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="/menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
