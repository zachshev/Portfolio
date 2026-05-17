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

          <div className="font-sans text-[#2a2a2a]/80 leading-relaxed text-lg font-light space-y-8 mb-12">
            
            <p>
              Growing up in New York, Zach Shevlin developed an early fascination
              with the tradition of classical portraiture and the ability of
              painting to preserve both likeness and presence. After relocating
              to San Diego to study at the Watts Atelier of the Arts, he
              dedicated himself to the rigorous study of drawing and oil
              painting, with an emphasis on craftsmanship, structure, and
              timeless realism. Alongside his own studio practice, Zach teaches
              at Watts Atelier, where he continues to deepen his understanding
              of the human form and the traditions of representational art.
            </p>

            <p>
              Zach approaches portrait painting as more than simply creating an
              image. His work aims not only to capture a strong likeness, but
              also the character, atmosphere, and emotional presence that make
              each person unique. Influenced by the great portrait painters of
              the past while grounded in a contemporary sensibility, he strives
              to create paintings that feel personal, enduring, and deeply
              human. Above all, he hopes to create work that can be lived with,
              cherished,              and passed down through generations as meaningful family heirlooms.
            </p>

            <p>
              Zach currently lives and works in San Diego, California, where he
              accepts a limited number of portrait commissions for individuals,
              families, and collectors.
            </p>

          </div>

          <div className="flex flex-wrap gap-6">
            
            <a
              href="https://instagram.com/zachshev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#465761] border border-[#465761] text-white px-10 py-4 text-xs tracking-[0.35em] uppercase hover:bg-[#3b4a53] hover:border-[#3b4a53] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1"
            >
              Instagram
            </a>

            <a
              href="https://www.wattsatelier.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#465761] border border-[#465761] text-white px-10 py-4 text-xs tracking-[0.35em] uppercase hover:bg-[#3b4a53] hover:border-[#3b4a53] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1"
            >
              Watts Atelier
            </a>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
