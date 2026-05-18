"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const topRowItems = [
  {
    title: "Portrait Paintings",
    href: "/artwork?category=Portrait%20Paintings",
    image: "/Portrait Paintings/The Greenwalds.jpg",
    width: "w-[720px]",
    height: "h-[430px]",
  },
  {
    title: "Pastel Drawings",
    href: "/artwork?category=Pastel%20Drawings",
    image: "/Portrait drawing/Pastel Drawing Camille.JPG",
    width: "w-[390px]",
    height: "h-[430px]",
  },
];

const bottomRowItems = [
  {
    title: "Oil Sketches",
    href: "/artwork?category=Portrait%20Oil%20Sketch",
    image: "/Portrait oil sketch/Portrait Oil Sketch Rebecca.JPG",
  },
  {
    title: "Graphite Portraits",
    href: "/artwork?category=Graphite%20Drawings",
    image: "/Portrait drawing/Graphite Drawing Winston Churchill.jpg",
  },
  {
    title: "Charcoal Studies",
    href: "/artwork?category=Charcoal%20Studies",
    image: "/Portrait drawing/Charcoal Portrait Gypsy_.jpg",
  },
];

function Caption({ title }: { title: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 w-full mt-4">
      <h3 className="font-serif text-[clamp(0.95rem,1.05vw,1.25rem)] leading-none tracking-[0.055em] text-[#2a2a2a] uppercase truncate">
        {title}
      </h3>

      <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-[#2a2a2a]/45 whitespace-nowrap justify-self-end text-right">
        View Collection
      </span>
    </div>
  );
}

function TopRowCard({ item }: { item: (typeof topRowItems)[0] }) {
  return (
    <Link href={item.href} className={`${item.width} flex flex-col`}>
      <div className={`relative w-full ${item.height} overflow-hidden group`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
        />
      </div>

      <Caption title={item.title} />
    </Link>
  );
}

function BottomRowCard({ item }: { item: (typeof bottomRowItems)[0] }) {
  return (
    <Link href={item.href} className="w-[350px] flex flex-col">
      <div className="relative w-full h-[350px] overflow-hidden group">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
        />
      </div>

      <Caption title={item.title} />
    </Link>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      <section className="flex flex-col items-center text-center pt-4 md:pt-6 pb-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="font-serif text-[2rem] md:text-6xl tracking-[0.08em] uppercase text-[#2a2a2a] mb-2"
        >
          Zach Shev
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-[10px] md:text-sm font-bold tracking-[0.22em] uppercase text-[#2a2a2a]/75 leading-relaxed"
        >
          Heirloom Portraiture designed to last for generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4"
        >
          <Link
            href="/commission-process"
            className="inline-flex items-center justify-center bg-[#465761] border border-[#465761] text-white px-8 py-3 font-sans text-[10px] tracking-[0.24em] uppercase hover:bg-[#3b4a53] transition-all duration-500"
          >
            Commission a Portrait
          </Link>
        </motion.div>
      </section>

      <section className="w-full flex justify-center mt-8">
        <div className="flex items-start justify-center gap-20">
          {topRowItems.map((item) => (
            <TopRowCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="w-full flex justify-center mt-20 pb-24">
        <div className="grid grid-cols-3 gap-28">
          {bottomRowItems.map((item) => (
            <BottomRowCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
