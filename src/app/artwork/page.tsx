"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const artworks = [
  // Oil Sketches
  { id: 1, title: "Ana", category: "Oil Sketch", image: "/Portrait oil sketch/Oil Sketch Ana.jpg", aspect: "aspect-[3/4]" },
  { id: 2, title: "Bob", category: "Oil Sketch", image: "/Portrait oil sketch/Oil Sketch Bob.jpg", aspect: "aspect-[3/4]" },
  { id: 3, title: "Jim", category: "Oil Sketch", image: "/Portrait oil sketch/Oil Sketch Jim.jpg", aspect: "aspect-[3/4]" },
  { id: 4, title: "Mattisse", category: "Oil Sketch", image: "/Portrait oil sketch/Oil Sketch Mattisse.jpg", aspect: "aspect-[3/4]" },
  { id: 5, title: "Alaina", category: "Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Alaina.PNG", aspect: "aspect-[3/4]" },
  { id: 6, title: "Stephanie", category: "Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Blonde Stephanie.PNG", aspect: "aspect-[3/4]" },
  { id: 7, title: "Elderly Woman", category: "Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Elderly Woman.PNG", aspect: "aspect-[3/4]" },
  { id: 8, title: "Johnathan", category: "Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Johnathan.JPG", aspect: "aspect-[3/4]" },
  { id: 9, title: "Muse", category: "Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Muse_.jpg", aspect: "aspect-[3/4]" },
  { id: 10, title: "Pearl Earring", category: "Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Pearl Earring.PNG", aspect: "aspect-[3/4]" },
  { id: 11, title: "Rebecca", category: "Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Rebecca.JPG", aspect: "aspect-[3/4]" },
  { id: 12, title: "Sara", category: "Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Sara.JPG", aspect: "aspect-[3/4]" },
  { id: 13, title: "Sherman", category: "Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Sherman.PNG", aspect: "aspect-[3/4]" },
  { id: 14, title: "Goatee Study", category: "Oil Sketch", image: "/Portrait oil sketch/Portrait Sketch Oil Goatee.jpg", aspect: "aspect-[3/4]" },

  // Drawings
  { id: 15, title: "Gypsy", category: "Charcoal Portrait", image: "/Portrait drawing/Charcoal Portrait Gypsy_.jpg", aspect: "aspect-[3/4]" },
  { id: 16, title: "Ariane", category: "Graphite Drawing", image: "/Portrait drawing/Graphite Drawing Ariane_.jpg", aspect: "aspect-[3/4]" },
  { id: 17, title: "Winston Churchill", category: "Graphite Drawing", image: "/Portrait drawing/Graphite Drawing Winston Churchill.jpg", aspect: "aspect-[3/4]" },
  { id: 18, title: "Alaina", category: "Graphite Portrait", image: "/Portrait drawing/Graphite Portrait Alaina.jpg", aspect: "aspect-[3/4]" },
  { id: 19, title: "Camille", category: "Pastel Drawing", image: "/Portrait drawing/Pastel Drawing Camille.JPG", aspect: "aspect-[3/4]" },
  { id: 20, title: "Study in Pastel 1", category: "Pastel Drawing", image: "/Portrait drawing/Pastel Drawing Girl 1.JPG", aspect: "aspect-[3/4]" },
  { id: 21, title: "Study in Pastel 2", category: "Pastel Drawing", image: "/Portrait drawing/Pastel Drawing Girl 2.JPG", aspect: "aspect-[3/4]" },
  { id: 22, title: "Study in Pastel 3", category: "Pastel Drawing", image: "/Portrait drawing/Pastel Drawing Girl 3.JPG", aspect: "aspect-[3/4]" },
  { id: 23, title: "Study in Pastel 4", category: "Pastel Drawing", image: "/Portrait drawing/Pastel Drawing Girl 4.JPG", aspect: "aspect-[3/4]" },
  { id: 24, title: "Study in Pastel 5", category: "Pastel Drawing", image: "/Portrait drawing/Pastel Drawing Girl 5.JPG", aspect: "aspect-[3/4]" },
  { id: 25, title: "Study in Pastel 6", category: "Pastel Drawing", image: "/Portrait drawing/Pastel Drawing Girl 6.JPG", aspect: "aspect-[3/4]" },

  // Pet Portraits
  { id: 26, title: "Benny", category: "Pet Portrait", image: "/Pet portrait/Pet Portrait Oil Benny.jpg", aspect: "aspect-[3/4]" },

  // Artworks For Sale
  { id: 27, title: "Alaina (Study)", category: "For Sale", price: "$200", image: "/Artworks For Sale/(Price - $200)Portrait Oil Sketch Alaina (Size 8_x10_).PNG", aspect: "aspect-[3/4]" },
  { id: 28, title: "Muse (Large)", category: "For Sale", price: "$500", image: "/Artworks For Sale/(Price 500)ortrait Oil Sketch Muse  (Size 18_x24_).JPG", aspect: "aspect-[3/4]" },
  { id: 29, title: "Rebecca (Study)", category: "For Sale", price: "$300", image: "/Artworks For Sale/Price (300) - Portrait Oil Sketch Rebecca (size 11_x14_).JPG", aspect: "aspect-[3/4]" },
  { id: 30, title: "Goatee Study", category: "For Sale", price: "$500", image: "/Artworks For Sale/Price (500) Portrait Sketch Oil Goatee (Size 18_x24_).JPG", aspect: "aspect-[3/4]" },
];

import { useState } from "react";

const subcategories = [
  "All",
  "Pet Portrait",
  "Portrait Drawing",
  "Portraits Oil Sketch",
  "Portrait Painting",
  "For Sale"
];

export default function ArtworkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArtworks = artworks.filter((art) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Portrait Drawing") {
      return [
        "Charcoal Portrait",
        "Graphite Drawing",
        "Graphite Portrait",
        "Pastel Drawing",
        "Portrait Drawing",
      ].includes(art.category);
    }
    if (activeCategory === "Portraits Oil Sketch") {
      return ["Oil Sketch", "Portraits Oil Sketch"].includes(art.category);
    }
    return art.category === activeCategory;
  });

  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 md:mb-16"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-[#2a2a2a] tracking-widest uppercase mb-4">
          Selected Works
        </h1>
        <p className="font-sans text-sm tracking-widest uppercase text-[#2a2a2a]/60">
          A curated exhibition of recent portraiture.
        </p>
      </motion.div>

      {/* Subcategory Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap gap-4 md:gap-8 mb-16 md:mb-24"
      >
        {subcategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-sans text-xs md:text-sm tracking-widest uppercase transition-colors duration-500 pb-1 border-b ${
              activeCategory === cat
                ? "text-[#2a2a2a] border-[#2a2a2a]"
                : "text-[#2a2a2a]/40 border-transparent hover:text-[#2a2a2a]/70"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {filteredArtworks.map((art, idx) => (
          <motion.div
            key={`${activeCategory}-${art.id}`} // Force re-animation on filter change
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: (idx % 4) * 0.1, // Stagger effect resets per batch
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`flex flex-col ${idx % 2 !== 0 ? "md:mt-24" : ""}`}
          >
            <div className={`relative w-full ${art.aspect} bg-[#c9c9c4] overflow-hidden mb-6 group cursor-pointer`}>
              <Image
                src={art.image}
                alt={art.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex justify-between items-center px-2">
              <h3 className="font-serif text-xl tracking-wider text-[#2a2a2a]">{art.title}</h3>
              <div className="flex flex-col items-end">
                <span className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/50">
                  {art.category}
                </span>
                {art.price && (
                  <span className="font-sans text-sm tracking-widest text-[#2a2a2a] mt-1">
                    {art.price}
                  </span>
                )}
              </div>
            </div>
            {art.price && (
              <div className="px-2 mt-4">
                <a href="/contact" className="inline-block border border-[#2a2a2a] text-[#2a2a2a] px-4 py-2 text-xs uppercase tracking-widest hover:bg-[#2a2a2a] hover:text-[#f8f8f8] transition-colors duration-300">
                  Inquire to Purchase
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      {filteredArtworks.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full text-center py-24"
        >
          <p className="font-serif text-xl tracking-widest text-[#2a2a2a]/50">
            No artworks currently available in this collection.
          </p>
        </motion.div>
      )}
    </div>
  );
}
