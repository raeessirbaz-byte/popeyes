"use client";

import { Instagram, Twitter, Facebook, Youtube, ArrowRight } from "lucide-react";

const FOOTER_LINKS = {
  Menu: [
    { label: "Burgers", href: "#menu" },
    { label: "Chicken", href: "#menu" },
    { label: "Fries & Sides", href: "#menu" },
    { label: "Shakes & Custard", href: "#menu" },
    { label: "Hot Dogs", href: "#menu" },
    { label: "Seasonal Menu", href: "#menu" },
  ],
  Company: [
    { label: "Our Story", href: "#story" },
    { label: "Stand For Something Good", href: "#story" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Investor Relations", href: "#" },
  ],
  Order: [
    { label: "Find a Shack", href: "#locations" },
    { label: "Order Pickup", href: "#order" },
    { label: "Delivery", href: "#order" },
    { label: "Catering & Events", href: "#order" },
    { label: "Gift Cards", href: "#" },
    { label: "ShackRewards", href: "#" },
  ],
  Support: [
    { label: "Contact Us", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Accessibility", href: "#" },
    { label: "Allergen Information", href: "#" },
    { label: "Nutrition Info", href: "#" },
  ],
};

const SOCIAL_LINKS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white overflow-hidden">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-black uppercase text-white mb-1">
                Get Shack Updates
              </h3>
              <p className="text-white/45 text-sm leading-relaxed max-w-sm">
                New menu drops, limited-edition collabs, ShackRewards offers, and exclusive deals — straight to your inbox. Be the first to know.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto gap-3"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-72 px-5 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/35 text-sm outline-none focus:border-[#3d8b0a] transition-colors"
              />
              <button
                type="submit"
                className="flex-shrink-0 flex items-center gap-2 px-5 py-3 bg-[#3d8b0a] hover:bg-[#2d6a00] text-white font-bold rounded-xl text-sm transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-full bg-[#3d8b0a] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xs tracking-tighter">SS</span>
              </div>
              <span className="font-black text-xl uppercase tracking-tight text-white">
                Shake<span className="text-[#3d8b0a]">Shack</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Stand for something good. Premium burgers, fries, shakes, and frozen custard made with 100% all-natural Angus beef — no hormones, no antibiotics, no shortcuts.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#3d8b0a] hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-black uppercase tracking-[0.22em] text-white/35 mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white hover:text-[#3d8b0a] transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Shake Shack Inc. All rights reserved. Founded 2004, Madison Square Park, New York City. 400+ locations across 19 countries.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
            {["Privacy Policy", "Terms of Service", "Cookie Preferences"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/30 hover:text-white/60 transition-colors text-xs font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
