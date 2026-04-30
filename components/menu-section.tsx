"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Beef, Drumstick, IceCream, Flame } from "lucide-react";
import { ExpandingCards, CardItem } from "@/components/expanding-cards";
import TextRoll from "@/components/text-roll";

const MENU_ITEMS: CardItem[] = [
  {
    id: "shackburger",
    title: "ShackBurger",
    description:
      "100% all-natural Angus beef, American cheese, ShackSauce, crisp lettuce, ripe tomato & pickles on a Martin's Potato Roll. The one that started it all.",
    imgSrc:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=80",
    icon: <Beef size={28} strokeWidth={1.5} />,
    linkHref: "#order",
  },
  {
    id: "smokeshack",
    title: "SmokeShack",
    description:
      "All-natural Angus beef topped with Applewood smoked bacon, cherry pepper relish, and ShackSauce. Bold, smoky, unforgettable.",
    imgSrc:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=900&auto=format&fit=crop&q=80",
    icon: <Flame size={28} strokeWidth={1.5} />,
    linkHref: "#order",
  },
  {
    id: "chickn-shack",
    title: "Chick'n Shack",
    description:
      "Crispy all-natural chicken breast with lettuce, pickles, and buttermilk herb mayo on a Martin's Potato Roll. Crispy on the outside, juicy on the inside.",
    imgSrc:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=900&auto=format&fit=crop&q=80",
    icon: <Drumstick size={28} strokeWidth={1.5} />,
    linkHref: "#order",
  },
  {
    id: "shakes",
    title: "Frozen Custard",
    description:
      "Hand-spun shakes and frozen custard made fresh daily. Black & White, Salted Caramel, or the classic Vanilla — made to order, never from a freezer.",
    imgSrc:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900&auto=format&fit=crop&q=80",
    icon: <IceCream size={28} strokeWidth={1.5} />,
    linkHref: "#order",
  },
  {
    id: "shack-stack",
    title: "Shack Stack",
    description:
      "A cheeseburger stacked with a crispy fried Portobello mushroom filled with melted muenster & cheddar cheeses. The ultimate Shake Shack indulgence.",
    imgSrc:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=900&auto=format&fit=crop&q=80",
    icon: <Beef size={28} strokeWidth={1.5} />,
    linkHref: "#order",
  },
];

export default function MenuSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="menu"
      className="py-24 md:py-32 bg-[#f2f0eb] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-[#3d8b0a] text-[9rem] md:text-[13.5rem] font-black uppercase tracking-tight leading-none">
              Menu
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase text-[rgba(0,0,0,0.87)] leading-[1.05] mb-5"
          >
            <TextRoll className="text-[rgba(0,0,0,0.87)]">Made Fresh.</TextRoll>
            <TextRoll className="text-[#3d8b0a]">Always.</TextRoll>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[rgba(0,0,0,0.55)] text-lg max-w-md mx-auto leading-relaxed"
          >
            Hover to explore — no hormones, no antibiotics, no shortcuts. Just
            real food made by people who care.
          </motion.p>
        </div>

        {/* Expanding Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <ExpandingCards items={MENU_ITEMS} defaultActiveIndex={0} />
        </motion.div>
      </div>
    </section>
  );
}
