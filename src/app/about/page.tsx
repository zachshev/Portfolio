"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-1/2 relative aspect-[4/5] bg-[#c9c9c4] overflow-hidden"
        >
          <Image
            src="/artist-headshot.jpg"
            alt="Zach Shev - Contemporary Portrait Artist"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-1/2 flex flex-col justify-center h-full"
        >
          <h1 className="font-serif text-4xl md:text-6xl text-[#2a2a2a] tracking-widest uppercase mb-8">
            Zach Shev
          </h1>
          <div className="font-sans text-[#2a2a2a]/80 leading-relaxed text-lg font-light space-y-6 mb-12">
            <p>
              Zach Shev is a contemporary fine artist specializing in classical portraiture. Drawing inspiration from the grand masters, his work seeks to capture the timeless essence and profound depth of the human spirit.
            </p>
            <p>
              Trained in the rigorous traditions of classical realism, Zach's approach combines meticulous observation with an emotive, painterly touch. Each portrait is treated as an heirloom—a quiet, lasting testament to the individual's character and presence.
            </p>
            <p>
              His studio practice is defined by a dedication to craftsmanship, utilizing premium archival materials and traditional layering techniques that imbue his canvases with luminosity and life.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://instagram.com/zachshev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[var(--accent)] text-[#2a2a2a] px-10 py-3 font-sans text-xs tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors duration-500"
            >
              Instagram
            </a>
            <a
              href="https://www.wattsatelier.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[var(--accent)] text-[#2a2a2a] px-10 py-3 font-sans text-xs tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors duration-500"
            >
              Watts Atelier
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
