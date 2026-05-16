"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const availableArtworks = [
  {
    id: 1,
    title: "Alaina (Study)",
    size: "8 x 10 inches",
    medium: "Portrait Oil Sketch",
    price: "$200",
    image: "/Artworks For Sale/(Price - $200)Portrait Oil Sketch Alaina (Size 8_x10_).PNG",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    title: "Muse (Large)",
    size: "18 x 24 inches",
    medium: "Portrait Oil Sketch",
    price: "$500",
    image: "/Artworks For Sale/(Price 500)ortrait Oil Sketch Muse  (Size 18_x24_).JPG",
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    title: "Rebecca (Study)",
    size: "11 x 14 inches",
    medium: "Portrait Oil Sketch",
    price: "$300",
    image: "/Artworks For Sale/Price (300) - Portrait Oil Sketch Rebecca (size 11_x14_).JPG",
    aspect: "aspect-[3/4]",
  },
  {
    id: 4,
    title: "Goatee Study",
    size: "18 x 24 inches",
    medium: "Portrait Oil Sketch",
    price: "$500",
    image: "/Artworks For Sale/Price (500) Portrait Sketch Oil Goatee (Size 18_x24_).JPG",
    aspect: "aspect-[3/4]",
  },
];

function ArtworkRow({ art, idx }: { art: any; idx: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${
        idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 md:gap-16 lg:gap-24 items-center group`}
    >
      <div className={`w-full md:w-1/2 relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-shadow duration-1000 rounded-sm bg-[#D9D9D4]/20 flex justify-center items-center`}>
        <motion.div style={{ y }} className="w-full scale-[1.15]">
          <Image
            src={art.image}
            alt={art.title}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ width: '100%', height: 'auto' }}
            className="transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
        </motion.div>
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-[#2a2a2a]/0 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#2a2a2a]/10 pointer-events-none border border-white/0 group-hover:border-white/10" />
      </div>

      <div
        className={`w-full md:w-1/2 flex flex-col ${
          idx % 2 === 0 ? "md:items-start text-left" : "md:items-end text-right"
        }`}
      >
        <h2 className="font-serif text-4xl md:text-5xl text-[#2a2a2a] mb-4">
          {art.title}
        </h2>
        <div className="font-sans text-sm tracking-widest uppercase text-[#2a2a2a]/60 space-y-2 mb-10">
          <p>{art.medium}</p>
          <p>{art.size}</p>
          <p className="text-[var(--accent)] mt-6 font-medium text-base">{art.price}</p>
        </div>
        <Link
          href={`/contact?subject=Inquiry about ${art.title}`}
          className="inline-block border border-[var(--accent)] text-[#2a2a2a] px-12 py-4 font-sans text-xs tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-all duration-500 hover:shadow-[0_10px_20px_rgba(166,138,100,0.15)] hover:-translate-y-1"
        >
          Contact To Purchase
        </Link>
      </div>
    </motion.div>
  );
}

export default function AvailableArtworkPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-32 text-center"
      >
        <h1 className="font-serif text-5xl md:text-7xl text-[#2a2a2a] tracking-widest uppercase mb-6 drop-shadow-sm">
          Available Works
        </h1>
        <p className="font-sans text-sm tracking-widest uppercase text-[#2a2a2a]/60">
          Original pieces currently available for acquisition.
        </p>
      </motion.div>

      <div className="space-y-32 md:space-y-48">
        {availableArtworks.map((art, idx) => (
          <ArtworkRow key={art.id} art={art} idx={idx} />
        ))}
      </div>
    </div>
  );
}
