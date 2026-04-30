"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "Menu",        href: "/menu" },
  { label: "Catering",   href: "#order" },
  { label: "Gift Cards",  href: "#" },
  { label: "Shack Store", href: "#" },
  { label: "Values",      href: "#story" },
  { label: "Fundraising", href: "#" },
  { label: "Careers",     href: "#" },
  { label: "Help",        href: "#" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f2f0eb]/97 backdrop-blur-md border-b border-[#ddd9d2]"
            : "bg-transparent"
        }`}
        style={scrolled ? { boxShadow: "0 1px 3px rgba(0,0,0,0.10), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-[#3d8b0a] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d6a00] transition-colors">
              <span className="text-white font-black text-xs tracking-tighter">SS</span>
            </div>
            <span
              className={`font-black text-xl uppercase tracking-tight transition-colors ${
                scrolled ? "text-[#1A1A1A]" : "text-white"
              }`}
            >
              Shake<span className="text-[#3d8b0a]">Shack</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-wide transition-colors hover:text-[#3d8b0a] whitespace-nowrap ${
                  scrolled ? "text-[#1A1A1A]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA group */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#locations"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[#3d8b0a] ${
                scrolled ? "text-[#1A1A1A]" : "text-white/80"
              }`}
            >
              <MapPin size={15} />
              Find a Shack
            </a>
            <a
              href="#order"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#3d8b0a] hover:bg-[#2d6a00] text-white font-bold rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-none"
            >
              <ShoppingBag size={14} />
              Order Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1A1A1A] hover:bg-[#F7F3EE]" : "text-white hover:bg-white/10"
            }`}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-72 max-w-[85vw] bg-[#f2f0eb] flex flex-col p-6 sm:p-8"
              style={{ boxShadow: "0 0 6px rgba(0,0,0,0.24), 0 8px 12px rgba(0,0,0,0.14)" }}
            >
              <div className="flex items-center justify-between mb-10">
                <a href="/" className="font-black text-xl uppercase tracking-tight text-[#1A1A1A]">
                  Shake<span className="text-[#3d8b0a]">Shack</span>
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-[#F7F3EE] text-[#1A1A1A] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3.5 text-base font-bold uppercase tracking-wide text-[#1A1A1A] hover:bg-[#F7F3EE] hover:text-[#3d8b0a] rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="#locations"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 border-2 border-[#3d8b0a] text-[#3d8b0a] font-bold rounded-full text-sm transition-all hover:bg-[#f2f0eb]"
                >
                  <MapPin size={15} />
                  Find a Shack
                </a>
                <a
                  href="#order"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#3d8b0a] hover:bg-[#2d6a00] text-white font-bold rounded-full text-sm transition-all"
                >
                  <ShoppingBag size={15} />
                  Order Now
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
