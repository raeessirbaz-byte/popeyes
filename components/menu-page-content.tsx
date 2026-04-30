"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  cal: number;
  description: string;
  image: string;
}

interface Category {
  label: string;
  items: MenuItem[];
}

const IMG = {
  burger1: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
  burger2: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&auto=format&fit=crop&q=80",
  burger3: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&auto=format&fit=crop&q=80",
  burger4: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&auto=format&fit=crop&q=80",
  burger5: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80",
  chicken: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&auto=format&fit=crop&q=80",
  fries:   "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600&auto=format&fit=crop&q=80",
  shake:   "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80",
  hotdog:  "https://images.unsplash.com/photo-1612392062798-ade4b2b3e8a4?w=600&auto=format&fit=crop&q=80",
};

const CATEGORIES: Category[] = [
  {
    label: "Burgers",
    items: [
      { id: "burger-shackburger",  name: "ShackBurger",        price: 9.29,  cal: 530, description: "100% all-natural Angus beef, American cheese, ShackSauce, lettuce, tomato & pickles on a Martin's Potato Roll.", image: IMG.burger1 },
      { id: "burger-smokeshack",   name: "SmokeShack",         price: 12.49, cal: 610, description: "All-natural Angus beef with Applewood smoked bacon, cherry pepper relish and ShackSauce.", image: IMG.burger2 },
      { id: "burger-shackstack",   name: "Shack Stack",        price: 14.69, cal: 800, description: "Cheeseburger stacked with a crispy fried Portobello mushroom filled with muenster and cheddar.", image: IMG.burger3 },
      { id: "burger-shroombug",    name: "'Shroom Burger",     price: 10.29, cal: 480, description: "Crispy-fried portobello mushroom filled with molten muenster and cheddar, lettuce, tomato & ShackSauce.", image: IMG.burger4 },
      { id: "burger-doubleshack",  name: "Double ShackBurger", price: 13.49, cal: 860, description: "Two 100% all-natural Angus beef patties with American cheese, ShackSauce, lettuce, tomato & pickles.", image: IMG.burger5 },
      { id: "burger-cheese",       name: "Cheeseburger",       price: 7.99,  cal: 470, description: "Single all-natural Angus beef patty with American cheese, lettuce, tomato & ShackSauce.", image: IMG.burger1 },
      { id: "burger-hamburger",    name: "Hamburger",          price: 6.99,  cal: 420, description: "Single all-natural Angus beef patty with lettuce, tomato & ShackSauce. Simple. Perfect.", image: IMG.burger2 },
      { id: "burger-bacon",        name: "Bacon Burger",       price: 10.99, cal: 570, description: "All-natural Angus beef with Applewood smoked bacon, American cheese, lettuce, tomato & ShackSauce.", image: IMG.burger3 },
    ],
  },
  {
    label: "Chicken",
    items: [
      { id: "chicken-shack",    name: "Chick'n Shack",        price: 10.99, cal: 590, description: "Crispy all-natural chicken breast with lettuce, pickles and buttermilk herb mayo on a Martin's Potato Roll.", image: IMG.chicken },
      { id: "chicken-bites",    name: "Chick'n Bites",        price: 7.49,  cal: 380, description: "Crispy all-natural chicken bites with your choice of dipping sauce. Perfect for sharing — or not.", image: IMG.burger4 },
      { id: "chicken-spicy",    name: "Spicy Chick'n Shack",  price: 11.49, cal: 600, description: "Crispy chicken with a spicy kick, lettuce, pickles and spicy ShackSauce on a Martin's Potato Roll.", image: IMG.chicken },
      { id: "chicken-avocado",  name: "Avocado Bacon Chicken",price: 13.49, cal: 680, description: "Crispy chicken topped with Applewood smoked bacon, fresh avocado, Swiss cheese & herb mayo.", image: IMG.burger5 },
    ],
  },
  {
    label: "Fries & Sides",
    items: [
      { id: "fries-plain",       name: "Fries",              price: 4.29, cal: 420, description: "Crinkle-cut fries, crispy outside, fluffy inside. A Shake Shack staple since the very beginning.", image: IMG.fries },
      { id: "fries-cheese",      name: "Cheese Fries",       price: 5.49, cal: 530, description: "Crinkle-cut fries smothered in a rich, velvety cheese sauce. Impossible to stop eating.", image: IMG.fries },
      { id: "fries-baconcheese", name: "Bacon Cheese Fries", price: 6.99, cal: 640, description: "Crinkle-cut fries with cheese sauce and crumbled Applewood smoked bacon on top.", image: IMG.fries },
      { id: "fries-dog",         name: "Shack-cago Dog",     price: 5.99, cal: 310, description: "Vienna beef dog with relish, onion, cucumber, pickle, sport peppers, tomato & celery salt.", image: IMG.hotdog },
    ],
  },
  {
    label: "Shakes & Custard",
    items: [
      { id: "shake-vanilla",   name: "Vanilla Shake",       price: 5.99, cal: 660, description: "Hand-spun vanilla shake made with our fresh-frozen vanilla custard. A classic done right.", image: IMG.shake },
      { id: "shake-chocolate", name: "Chocolate Shake",     price: 5.99, cal: 670, description: "Hand-spun chocolate shake made with 100% real cocoa and our signature frozen custard.", image: IMG.shake },
      { id: "shake-strawberry",name: "Strawberry Shake",    price: 6.49, cal: 690, description: "Hand-spun strawberry shake made with real strawberries and our fresh-frozen vanilla custard.", image: IMG.shake },
      { id: "shake-bw",        name: "Black & White Shake", price: 6.99, cal: 770, description: "Half vanilla, half chocolate — the timeless combo hand-spun with our fresh-frozen custard.", image: IMG.shake },
      { id: "shake-caramel",   name: "Salted Caramel Shake",price: 6.99, cal: 720, description: "Our signature vanilla custard blended with rich salted caramel sauce. Sweet meets salty.", image: IMG.shake },
      { id: "shake-custard",   name: "Frozen Custard",      price: 4.99, cal: 390, description: "Fresh-frozen vanilla or chocolate custard made daily in-house. Served in a cup or cone.", image: IMG.shake },
    ],
  },
  {
    label: "Hot Dogs",
    items: [
      { id: "dog-chicago",    name: "Shack-cago Dog",    price: 5.99, cal: 310, description: "Vienna beef frank, bright green relish, onion, cucumber, pickle, sport peppers & celery salt.", image: IMG.hotdog },
      { id: "dog-cheese",     name: "Cheese Dog",        price: 5.99, cal: 370, description: "Vienna beef frank topped with our warm, gooey cheese sauce in a toasted potato roll.", image: IMG.hotdog },
      { id: "dog-baconcheese",name: "Bacon Cheese Dog",  price: 7.49, cal: 450, description: "Vienna beef frank with cheese sauce and crumbled Applewood smoked bacon.", image: IMG.hotdog },
      { id: "dog-plain",      name: "Hot Dog",           price: 4.99, cal: 290, description: "All-natural Vienna beef frank in a soft potato roll. The one that started it all in 2001.", image: IMG.hotdog },
    ],
  },
];

const HERO_IMAGES: Record<string, string> = {
  "Burgers":        IMG.burger1,
  "Chicken":        IMG.chicken,
  "Fries & Sides":  IMG.fries,
  "Shakes & Custard": IMG.shake,
  "Hot Dogs":       IMG.hotdog,
};

interface MenuCardProps {
  item: MenuItem;
  isLiked: boolean;
  onLikeToggle: (id: string) => void;
  index: number;
}

function MenuCard({ item, isLiked, onLikeToggle, index }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      className="bg-white rounded-2xl overflow-hidden border border-[#ddd9d2] hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Heart */}
        <button
          onClick={() => onLikeToggle(item.id)}
          aria-label={isLiked ? "Remove from favourites" : "Add to favourites"}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow transition-transform duration-200 hover:scale-110 focus:outline-none"
        >
          <Heart
            size={16}
            className={isLiked ? "fill-[#3d8b0a] stroke-[#3d8b0a]" : "stroke-[rgba(0,0,0,0.45)] fill-transparent"}
          />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5 text-center">
        <h3 className="font-black text-[rgba(0,0,0,0.87)] text-base leading-tight mb-2">
          {item.name}
        </h3>
        <p className="text-sm text-[rgba(0,0,0,0.50)] leading-relaxed flex-1 mb-5 line-clamp-4">
          {item.description}
        </p>

        {/* Price badge */}
        <div className="mt-auto">
          <span className="inline-block bg-[#3d8b0a] text-white font-black text-base px-6 py-2 rounded-lg">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>("Burgers");
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const handleLikeToggle = (id: string) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const currentCategory = CATEGORIES.find((c) => c.label === activeCategory)!;

  return (
    <div className="min-h-screen bg-[#f2f0eb]">
      {/* Hero banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeCategory}
            src={HERO_IMAGES[activeCategory]}
            alt={activeCategory}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            key={activeCategory + "-title"}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black uppercase text-white tracking-tight"
          >
            {activeCategory}
          </motion.h1>
        </div>
      </div>

      {/* Category tabs */}
      <div className="bg-white border-b border-[#ddd9d2]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-0 py-5">
            {CATEGORIES.map((cat) => {
              const isActive = cat.label === activeCategory;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`px-6 py-2.5 text-sm font-bold uppercase tracking-wide border transition-all duration-200 focus:outline-none ${
                    isActive
                      ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                      : "bg-white text-[rgba(0,0,0,0.70)] border-[#ddd9d2] hover:border-[#3d8b0a] hover:text-[#3d8b0a]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Card grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {currentCategory.items.map((item, idx) => (
            <MenuCard
              key={item.id}
              item={item}
              isLiked={liked.has(item.id)}
              onLikeToggle={handleLikeToggle}
              index={idx}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
