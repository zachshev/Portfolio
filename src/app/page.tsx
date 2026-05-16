"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Portrait Painting",
    href: "/artwork",
    image: "/Portrait oil sketch/Portrait Oil Sketch Muse_.jpg",
  },
  {
    title: "Oil Sketches",
    href: "/artwork",
    image: "/Portrait oil sketch/Oil Sketch Ana.jpg",
  },
  {
    title: "Pastel Drawings",
    href: "/artwork",
    image: "/Portrait drawing/Pastel Drawing Camille.JPG",
  },
  {
    title: "Pet Portraiture",
    href: "/artwork",
    image: "/Pet portrait/Pet Portrait Oil Benny.jpg",
  },
  {
    title: "Charcoal Studies",
    href: "/artwork",
    image: "/Portrait drawing/Charcoal Portrait Gypsy_.jpg",
  },
  {
    title: "Graphite Studies",
    href: "/artwork",
    image: "/Portrait drawing/Graphite Drawing Winston Churchill.jpg",
  },
];

function CategoryCard({ cat, idx }: { cat: any; idx: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Link href={cat.href}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1.2,
          delay: idx * 0.15,
          ease: [0.16, 1, 0.3, 1], // Smooth spatial easing
        }}
        className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-[#c9c9c4] cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-shadow duration-1000 rounded-sm"
      >
        {/* Parallax Image Layer */}
        <motion.div style={{ y }} className="absolute inset-0 scale-[1.2]">
          <Image
            src={cat.image}
            alt={cat.title}
            fill
            className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Subtle Overlay Layer */}
        <div className="absolute inset-0 bg-[#2a2a2a]/0 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#2a2a2a]/20 flex items-center justify-center border border-white/0 group-hover:border-white/10">
          <div className="overflow-hidden px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-widest opacity-0 transform translate-y-8 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0">
              {cat.title}
            </h2>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center py-24 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-widest text-[#2a2a2a] mb-8 uppercase drop-shadow-sm">
            Zach Shev
          </h1>
        </motion.div>
        
        <motion.div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-lg md:text-xl text-[#2a2a2a]/70 tracking-widest uppercase max-w-2xl"
          >
            Heirloom Portraiture designed to last for generations.
          </motion.p>
        </motion.div>
      </section>

      {/* Category Grid */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 pb-32">
        {categories.map((cat, idx) => (
          <CategoryCard key={cat.title} cat={cat} idx={idx} />
        ))}
      </section>
    </div>
  );
}
