"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Smartphone,
  Truck,
  ShoppingBag,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";

const ORDER_OPTIONS = [
  {
    id: "pickup",
    icon: ShoppingBag,
    title: "Order & Pick Up",
    subtitle: "Skip the line",
    description:
      "Order ahead on the Shake Shack app or website, pick your nearest Shack, and your food will be hot and fresh when you arrive — zero wait.",
    perks: ["Ready in under 10 min", "Skip the queue entirely", "Full menu customization"],
    cta: "Order for Pickup",
    href: "#",
    color: "#3d8b0a",
    bg: "#f0f7eb",
  },
  {
    id: "delivery",
    icon: Truck,
    title: "Get It Delivered",
    subtitle: "Right to your door",
    description:
      "Shack delivered fresh to your door via Uber Eats, DoorDash, and Grubhub. Same quality ingredients, same obsessive care — no leaving required.",
    perks: ["Uber Eats · DoorDash · Grubhub", "Real-time order tracking", "Available in 19 countries"],
    cta: "Order Delivery",
    href: "#",
    color: "#3d8b0a",
    bg: "#f0f7eb",
  },
  {
    id: "catering",
    icon: Users,
    title: "Catering & Events",
    subtitle: "Feed the crowd",
    description:
      "From office lunches to large-scale events, our catering packages serve 10 to 500+ guests. Full Shack menu, customizable for any occasion.",
    perks: ["Minimum 10 guests", "Custom menu packages", "Dedicated event team"],
    cta: "Plan Catering",
    href: "#",
    color: "#E8291C",
    bg: "#f0f7eb",
  },
];

export default function OrderSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="order" className="py-24 md:py-32 bg-[#ffffff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <span className="text-[#3d8b0a] text-[2.75rem] sm:text-[5rem] md:text-[9rem] lg:text-[13.5rem] font-black uppercase tracking-tight leading-none">
              Order Your Way
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black uppercase text-[rgba(0,0,0,0.87)] leading-tight mb-5"
          >
            Shack On
            <br />
            <span className="text-[#3d8b0a]">Your Terms.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[rgba(0,0,0,0.55)] text-lg max-w-md mx-auto leading-relaxed"
          >
            Pickup, delivery, or full-scale catering — we make it easy to get great food however you want it.
          </motion.p>
        </div>

        {/* Order option cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
          {ORDER_OPTIONS.map((opt, i) => {
            const Icon = opt.icon;
            const cardRef = useRef<HTMLDivElement>(null);
            const cardInView = useInView(cardRef, { once: true, margin: "-40px" });

            return (
              <motion.div
                key={opt.id}
                ref={cardRef}
                initial={{ opacity: 0, y: 50 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl border border-[#ddd9d2] hover:border-transparent hover:shadow-[0_4px_16px_rgba(0,0,0,0.10),_0_1px_4px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300"
                style={{ background: opt.bg }}
              >
                <div className="p-7">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                    style={{ background: opt.color }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Subtitle */}
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-[rgba(0,0,0,0.55)] mb-1">
                    {opt.subtitle}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black uppercase text-[rgba(0,0,0,0.87)] mb-3">
                    {opt.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[rgba(0,0,0,0.55)] text-sm leading-relaxed mb-6">
                    {opt.description}
                  </p>

                  {/* Perks */}
                  <ul className="space-y-2 mb-7">
                    {opt.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: opt.color }}
                        >
                          <Check size={11} className="text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-semibold text-[rgba(0,0,0,0.87)]">
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={opt.href}
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                    style={{ background: opt.color }}
                  >
                    {opt.cta}
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* App download banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="relative rounded-3xl bg-[#1A1A1A] overflow-hidden"
        >
          {/* Background accents */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(61,139,10,0.10),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(61,139,10,0.10),transparent_50%)]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            {/* Phone icon area */}
            <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-[#3d8b0a] flex items-center justify-center shadow-none">
              <Smartphone size={36} className="text-white" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="text-[#3d8b0a] text-xs font-bold uppercase tracking-[0.28em] mb-2">
                Shake Shack App
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-2">
                Order Faster. Earn Free Shack.
              </h3>
              <p className="text-white/55 text-sm leading-relaxed max-w-lg">
                Download the Shake Shack app to earn points on every order, unlock exclusive offers, get early access to new menu items, and skip the line entirely.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[rgba(0,0,0,0.87)] font-black rounded-xl text-sm hover:bg-[#f2f0eb] transition-all duration-200 hover:scale-105"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-black rounded-xl text-sm hover:bg-white/20 transition-all duration-200 hover:scale-105"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.34.19.73.19 1.07 0L13.5 18.3l-2.45-2.46-7.87 7.92zM20.89 10.37L17.96 8.7l-2.75 2.74 2.75 2.75 2.95-1.7c.84-.48.84-1.64-.02-2.12zM1.64.62C1.28.84 1 1.26 1 1.79V22.2c0 .53.28.95.64 1.17L13.11 12 1.64.62zM13.5 5.7L4.25.24C3.91.05 3.52.05 3.18.24L13.5 10.55 16.25 7.8 13.5 5.7z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
