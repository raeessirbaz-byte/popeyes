"use client";

import * as React from "react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TextRoll from "@/components/text-roll";

const ITEMS = [
  {
    id: "shackburger",
    name: "ShackBurger",
    subtitle: "Our founding burger",
    price: "$9.29",
    description:
      "100% all-natural Angus beef, American cheese, crisp lettuce, ripe tomatoes, dill pickles, and ShackSauce on a Martin's Potato Roll.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
    orderHref: "#order",
  },
  {
    id: "smokeshack",
    name: "SmokeShack",
    subtitle: "Bold & smoky",
    price: "$12.49",
    description:
      "Stacked with Applewood-smoked bacon, chopped cherry peppers, and our legendary ShackSauce. For those who like things a little wild.",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&auto=format&fit=crop&q=80",
    orderHref: "#order",
  },
  {
    id: "shroom",
    name: "'Shroom Burger",
    subtitle: "The vegetarian icon",
    price: "$10.29",
    description:
      "A crispy-fried portobello mushroom filled with molten muenster and cheddar cheese, topped with fresh lettuce, tomato, and ShackSauce.",
    img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&auto=format&fit=crop&q=80",
    orderHref: "#order",
  },
];

function ItemCard({ item, index }: { item: (typeof ITEMS)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y - height / 2) / (height / 2)) * -8;
    const rotateY = ((x - width / 2) / (width / 2)) * 8;
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.4s ease-in-out",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={tiltStyle}
        className="relative w-full aspect-[9/12] rounded-3xl overflow-hidden shadow-xl cursor-pointer"
      >
        {/* Background image */}
        <img
          src={item.img}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "translateZ(-20px) scale(1.1)" }}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        {/* Content layer */}
        <div
          className="absolute inset-0 p-5 flex flex-col"
          style={{ transform: "translateZ(40px)" }}
        >
          {/* Glassmorphism header */}
          <div className="flex items-start justify-between rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
            <div className="flex flex-col">
              <h3 className="text-xl font-black uppercase text-white leading-tight">{item.name}</h3>
              <p className="text-xs text-white/65 mt-0.5 uppercase tracking-wider font-semibold">{item.subtitle}</p>
            </div>
            {/* SS logo mark */}
            <div className="w-8 h-8 rounded-full bg-[#3d8b0a] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-[10px] tracking-tighter">SS</span>
            </div>
          </div>

          {/* Price tag */}
          <div className="mt-3 self-start">
            <div className="rounded-full bg-black/50 px-4 py-1.5 text-sm font-black text-white backdrop-blur-sm border border-white/10">
              {item.price}
            </div>
          </div>

          {/* Description */}
          <div className="mt-auto">
            <p className="text-white/75 text-xs leading-relaxed mb-4 line-clamp-3">{item.description}</p>

            {/* CTA */}
            <a
              href={item.orderHref}
              className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wide text-white bg-[#3d8b0a] hover:bg-[#2d6a00] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Order This
              <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>

            {/* Pagination dots */}
            <div className="flex gap-1.5 mt-4 justify-center">
              {ITEMS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-4 bg-white" : "w-1.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SignatureItems() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-[#ffffff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <span className="text-[#3d8b0a] text-[9rem] md:text-[13.5rem] font-black uppercase tracking-tight leading-none">
              Signature Items
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase text-[rgba(0,0,0,0.87)] leading-[1.05]"
          >
            <TextRoll className="text-[rgba(0,0,0,0.87)]">The Burgers That</TextRoll>
            <TextRoll className="text-[#3d8b0a]">Made Us Famous.</TextRoll>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-[rgba(0,0,0,0.55)] text-lg max-w-xl mx-auto leading-relaxed"
          >
            Each burger is a work of art — fresh, never frozen, cooked to order, and served with obsessive care.
          </motion.p>
        </div>

        {/* Item cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <ItemCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[rgba(0,0,0,0.55)] text-sm mb-4">
            More than 20 items on our full menu — shakes, fries, dogs, chicken, and more.
          </p>
          <a
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f2f0eb] hover:bg-[#edebe9] text-[rgba(0,0,0,0.87)] font-black rounded-full text-sm uppercase tracking-wide transition-all duration-200 border border-[#ddd9d2]"
          >
            Explore Full Menu
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
