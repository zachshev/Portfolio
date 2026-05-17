"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const homepageItems = [
  {
    title: "Portrait Paintings",
    href: "/artwork?category=Portrait%20Paintings",
    image: "/Portrait Paintings/The Greenwalds.jpg",
    className: "md:col-span-8",
  },
  {
    title: "Pastel Drawings",
    href: "/artwork?category=Pastel%20Drawings",
    image: "/Portrait drawing/Pastel Drawing Camille.JPG",
    className: "md:col-span-4",
  },
  {
    title: "Oil Sketches",
    href: "/artwork?category=Portrait%20Oil%20Sketch",
    image: "/Portrait oil sketch/Oil Sketch Rebecca.jpg",
    className: "md:col-span-4",
  },
  {
    title: "Graphite Portraits",
    href: "/artwork?category=Graphite%20Drawings",
    image: "/Portrait drawing/Graphite Drawing Winston Churchill.jpg",
    className: "md:col-span-4",
  },
  {
    title: "Charcoal Studies",
    href: "/artwork?category=Charcoal%20Studies",
    image: "/Portrait drawing/Charcoal Portrait Gypsy_.jpg",
    className: "md:col-span-4",
  },
  {
    title: "Pet Portraits",
    href: "/artwork?category=Pet%20Portrait",
    image: "/Pet portrait/Pet Portrait Oil Benny.jpg",
    className: "md:col-span-4 md:col-start-5",
  },
];

function CategoryCard({ cat }: { cat: typeof homepageItems[0] }) {
  return (
    <Link href={cat.href} className={`block ${cat.className}`}>
      <div className="w-fit max-w-full mx-auto">
        <div className="mb-6 group cursor-pointer overflow-hidden">
          <Image
            src={cat.image}
            alt={cat.title}
            width={1200}
            height={900}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-[520px] w-auto max-w-full object-contain transition-transform duration-1000"
          />
        </div>

        <div className="flex justify-between items-center gap-12 w-full">
          <h3 className="font-serif text-xl tracking-[0.08em] text-[#2a2a2a]">
            {cat.title}
          </h3>

          <span className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/50 whitespace-nowrap">
            View Collection
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
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

      <section className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 pb-32 items-start">
        {homepageItems.map((cat, idx) => (
          <CategoryCard key={cat.title + idx} cat={cat} />
        ))}
      </section>
    </div>
  );
}
