"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const VALUES = [
  {
    num: "2004",
    label: "First permanent Shack, Madison Square Park",
  },
  {
    num: "0",
    label: "Hormones or antibiotics. Ever.",
  },
  {
    num: "400+",
    label: "Shacks across 19 countries",
  },
  {
    num: "100%",
    label: "All-natural Angus beef, always",
  },
];

export default function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(contentRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="story" ref={sectionRef} className="bg-[#1A1A1A] overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left: Image panel */}
        <div className="relative h-[45vh] sm:h-[55vh] lg:h-auto lg:min-h-[90vh] order-2 lg:order-1">
          <motion.div style={{ y: imgY }} className="absolute inset-0">
            {/* Rich dark gradient background simulating restaurant interior */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f0f] via-[#1a2a1c] to-[#1A1A1A]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(61,139,10,0.10),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(61,139,10,0.10),transparent_50%)]" />

            {/* Decorative pattern overlay */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #3d8b0a 0, #3d8b0a 1px, transparent 0, transparent 50%)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Gradients for legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
          </motion.div>

          {/* Pull quote */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 z-10">
            <div className="w-10 h-1 bg-[#3d8b0a] rounded-full mb-4" />
            <blockquote className="text-white text-xl md:text-2xl font-light leading-snug italic mb-3">
              "Stand for something good. That&apos;s not just a tagline — it&apos;s a commitment to the food, the community, and the people who make it all happen."
            </blockquote>
            <p className="text-white/45 text-sm font-semibold not-italic uppercase tracking-widest">
              Danny Meyer, Chairman & Founder
            </p>
          </div>

          {/* Floating accent card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-10 right-6 bg-[#3d8b0a] rounded-2xl p-4 shadow-2xl hidden md:block z-10"
          >
            <div className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1">
              Community Impact
            </div>
            <div className="text-white font-black text-2xl">$10M+</div>
            <div className="text-white/60 text-xs mt-0.5">Donated since 2004</div>
          </motion.div>
        </div>

        {/* Right: Story content */}
        <div
          ref={contentRef}
          className="flex flex-col justify-center px-5 sm:px-8 py-12 sm:py-16 lg:py-28 lg:px-14 order-1 lg:order-2"
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[#3d8b0a] text-xs font-bold uppercase tracking-[0.28em] mb-5">
              <span className="h-px w-8 bg-[#3d8b0a] flex-shrink-0" />
              The Shack Story
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white leading-[0.95] mb-7">
              Born in a
              <br />
              hot dog cart.
              <br />
              <span className="text-[#3d8b0a]">Raised on love.</span>
            </h2>

            <div className="space-y-4 text-white/55 text-[15px] leading-relaxed">
              <p>
                In 2001, restaurateur Danny Meyer set up a humble hot dog cart in Madison Square Park, New York City — part of an art installation benefiting the park's conservancy. The lines never stopped.
              </p>
              <p>
                In 2004, Shake Shack opened as a permanent kiosk in the park. The secret wasn't complicated: 100% all-natural Angus beef, no hormones, no antibiotics — just real food cooked by people who genuinely care.
              </p>
              <p>
                From Miami to Dubai, London to Tokyo — 400+ Shacks across 19 countries still run on those same original values. No shortcuts. No freezers full of pre-made patties. Ever.
              </p>
            </div>

            {/* Values grid */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {VALUES.map((v) => (
                <div
                  key={v.label}
                  className="border border-white/10 rounded-2xl p-4 hover:border-[#3d8b0a]/40 transition-colors"
                >
                  <div className="text-2xl font-black text-white">{v.num}</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest font-medium mt-1 leading-tight">
                    {v.label}
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              whileHover={{ x: 5 }}
              href="#"
              className="mt-10 inline-flex items-center gap-2 text-[#3d8b0a] font-bold text-sm group"
            >
              Read the full story
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
