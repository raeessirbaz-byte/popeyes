"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, ArrowRight, Search, Navigation } from "lucide-react";

const FEATURED_LOCATIONS = [
  {
    id: "madison-sq",
    name: "Madison Square Park",
    address: "Madison Ave & E 23rd St",
    city: "New York, NY 10010",
    hours: "10:30 AM – 11:00 PM",
    tag: "The Original",
    tagColor: "#3d8b0a",
    distance: null,
  },
  {
    id: "grand-central",
    name: "Grand Central Terminal",
    address: "87 E 42nd St, Lower Level",
    city: "New York, NY 10017",
    hours: "7:30 AM – 10:00 PM",
    tag: "On the Go",
    tagColor: "#3d8b0a",
    distance: null,
  },
  {
    id: "times-square",
    name: "Times Square",
    address: "691 8th Ave",
    city: "New York, NY 10036",
    hours: "10:30 AM – 12:00 AM",
    tag: "Late Night",
    tagColor: "#E8291C",
    distance: null,
  },
];

function LocationCard({ loc, index }: { loc: (typeof FEATURED_LOCATIONS)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-[#ffffff] rounded-3xl p-6 border border-[#ddd9d2] hover:border-transparent hover:shadow-[0_4px_16px_rgba(0,0,0,0.10),_0_1px_4px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <span
          className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wide text-white"
          style={{ background: loc.tagColor }}
        >
          {loc.tag}
        </span>
        <div className="w-9 h-9 rounded-full bg-[#f2f0eb] group-hover:bg-[#f2f0eb] flex items-center justify-center transition-colors">
          <MapPin size={16} className="text-[rgba(0,0,0,0.55)] group-hover:text-[#3d8b0a] transition-colors" />
        </div>
      </div>

      <h3 className="text-xl font-black uppercase text-[rgba(0,0,0,0.87)] mb-1 leading-tight">
        {loc.name}
      </h3>
      <p className="text-[rgba(0,0,0,0.55)] text-sm">{loc.address}</p>
      <p className="text-[rgba(0,0,0,0.55)] text-sm">{loc.city}</p>

      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#ddd9d2]">
        <Clock size={14} className="text-[#3d8b0a] flex-shrink-0" />
        <span className="text-sm font-semibold text-[rgba(0,0,0,0.87)]">{loc.hours}</span>
      </div>

      <a
        href="#"
        className="group/link mt-4 inline-flex items-center gap-1.5 text-[#3d8b0a] font-bold text-sm hover:text-[#2d6a00] transition-colors"
      >
        Get Directions
        <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}

export default function LocationsSection() {
  const [searchValue, setSearchValue] = useState("");
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="locations" className="py-24 md:py-32 bg-[#f2f0eb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <span className="text-[#3d8b0a] text-[9rem] md:text-[13.5rem] font-black uppercase tracking-tight leading-none">
              Locations
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase text-[rgba(0,0,0,0.87)] leading-tight mb-5"
          >
            Find Your
            <br />
            <span className="text-[#3d8b0a]">Nearest Shack.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[rgba(0,0,0,0.55)] text-lg max-w-md mx-auto leading-relaxed"
          >
            400+ Shacks across 19 countries — from New York to London, Dubai to Tokyo. There&apos;s always one close by, and it&apos;s always worth the trip.
          </motion.p>
        </div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto mb-14"
        >
          <div className="relative flex items-center gap-3 bg-white rounded-2xl shadow-md border border-[#ddd9d2] overflow-hidden">
            <Search size={18} className="absolute left-5 text-[rgba(0,0,0,0.55)] pointer-events-none" />
            <input
              type="text"
              placeholder="Enter city, state, or zip code..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1 pl-12 pr-4 py-4 text-[rgba(0,0,0,0.87)] text-base placeholder:text-[#A0A0A0] outline-none font-medium"
            />
            <button className="flex-shrink-0 m-2 flex items-center gap-2 px-5 py-2.5 bg-[#3d8b0a] hover:bg-[#2d6a00] text-white font-bold rounded-xl text-sm transition-all duration-200 hover:scale-105 active:scale-95">
              <Navigation size={14} />
              <span className="hidden sm:inline">Use My Location</span>
              <span className="sm:hidden">Locate</span>
            </button>
          </div>
        </motion.div>

        {/* Featured locations */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {FEATURED_LOCATIONS.map((loc, i) => (
            <LocationCard key={loc.id} loc={loc} index={i} />
          ))}
        </div>

        {/* Map placeholder + global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="relative rounded-3xl overflow-hidden bg-[#1A1A1A] min-h-56 flex items-center justify-center"
        >
          {/* Map-style dot grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #3d8b0a 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 via-transparent to-[#1A1A1A]/80" />

          <div className="relative z-10 text-center py-10 px-6">
            <div className="text-white/40 text-sm uppercase tracking-widest font-bold mb-3">
              400+ locations worldwide
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white mb-5">
              Shacks in 19 Countries
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#3d8b0a] hover:bg-[#2d6a00] text-white font-black rounded-full text-sm uppercase tracking-wide transition-all duration-200 hover:scale-105 shadow-none"
            >
              <MapPin size={15} />
              View All Locations
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
