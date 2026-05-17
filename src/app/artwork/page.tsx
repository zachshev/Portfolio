"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const artworks = [
  // Portrait Paintings
  { id: 34, title: "The Greenwalds", category: "Portrait Paintings", image: "/Portrait Paintings/The Greenwalds.jpg" },
  { id: 31, title: "Portrait of my Mother", category: "Portrait Paintings", image: "/Portrait Paintings/Portrait Painting Mom.jpg" },
  { id: 32, title: "Sara", category: "Portrait Paintings", image: "/Portrait Paintings/Portrait Painting Sara.jpg" },
  { id: 33, title: "Self Portrait", category: "Portrait Paintings", image: "/Portrait Paintings/Self Portrait.jpg" },

  // Oil Sketches
  { id: 14, title: "Chuck", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Sketch Oil Goatee.jpg" },
  { id: 9, title: "Muse", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Muse_.jpg" },
  { id: 11, title: "Rebecca", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Rebecca.JPG" },
  { id: 5, title: "Alaina", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Alaina.PNG" },
  { id: 1, title: "Ana", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Oil Sketch Ana.jpg" },
  { id: 4, title: "Mattisse", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Oil Sketch Mattisse.jpg" },
  { id: 7, title: "Elderly Woman", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Elderly Woman.PNG" },
  { id: 8, title: "Johnathan", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Johnathan.JPG" },
  { id: 2, title: "Bob", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Oil Sketch Bob.jpg" },
  { id: 3, title: "Jim", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Oil Sketch Jim.jpg" },
  { id: 6, title: "Stephanie", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Blonde Stephanie.PNG" },
  { id: 10, title: "Pearl Earring", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Pearl Earring.PNG" },
  { id: 13, title: "Sherman", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Sherman.PNG" },
  { id: 12, title: "Sara", category: "Portrait Oil Sketch", image: "/Portrait oil sketch/Portrait Oil Sketch Sara.JPG" },

  // Drawings
  { id: 19, title: "Camille", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Camille.JPG" },
  { id: 20, title: "Ballerina 1", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Girl 1.JPG" },
  { id: 21, title: "Ballerina 2", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Girl 2.JPG" },
  { id: 22, title: "Ballerina 3", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Girl 3.JPG" },
  { id: 23, title: "Ballerina 4", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Girl 4.JPG" },
  { id: 24, title: "Izabel", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Girl 5.JPG" },
  { id: 25, title: "Vivi", category: "Pastel Drawings", image: "/Portrait drawing/Pastel Drawing Girl 6.JPG" },
  { id: 17, title: "Winston Churchill", category: "Graphite Drawings", image: "/Portrait drawing/Graphite Drawing Winston Churchill.jpg" },
  { id: 18, title: "Alaina", category: "Graphite Drawings", image: "/Portrait drawing/Graphite Portrait Alaina.jpg" },
  { id: 16, title: "Ariane", category: "Graphite Drawings", image: "/Portrait drawing/Graphite Drawing Ariane_.jpg" },
  { id: 15, title: "Gypsy Girl", category: "Charcoal Studies", image: "/Portrait drawing/Charcoal Portrait Gypsy_.jpg" },

  // Pet Portraits
  { id: 26, title: "Benny", category: "Pet Portraits", image: "/Pet portrait/Pet Portrait Oil Benny.jpg" },

  // Artworks For Sale
  { id: 27, title: "Alaina", category: "Artworks For Sale", price: "$200", image: "/Artworks For Sale/(Price - $200)Portrait Oil Sketch Alaina (Size 8_x10_).PNG" },
  { id: 28, title: "Muse", category: "Artworks For Sale", price: "$500", image: "/Artworks For Sale/(Price 500)ortrait Oil Sketch Muse  (Size 18_x24_).JPG" },
  { id: 29, title: "Rebecca", category: "Artworks For Sale", price: "$300", image: "/Artworks For Sale/Price (300) - Portrait Oil Sketch Rebecca (size 11_x14_).JPG" },
  { id: 30, title: "Chuck", category: "Artworks For Sale", price: "$500", image: "/Artworks For Sale/Price (500) Portrait Sketch Oil Goatee (Size 18_x24_).JPG" },
];

const subcategories = [
  "All",
  "Portrait Paintings",
  "Portrait Oil Sketch",
  "Pastel Drawings",
  "Graphite Drawings",
  "Charcoal Studies",
  "Pet Portraits",
  "Artworks For Sale",
];

function ArtworkCard({ art }: { art: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col"
    >
      <div className="relative w-full overflow-hidden mb-5 group cursor-pointer bg-[#D9D9D4]/20">
        <Image
          src={art.image}
          alt={art.title}
          width={1200}
          height={1600}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ width: "100%", height: "auto" }}
          className="transition-transform duration-1000 group-hover:scale-[1.025]"
        />
      </div>

      <div className="flex justify-between items-start gap-5 px-1">
        <h3 className="font-serif text-lg tracking-wider text-[#2a2a2a] leading-tight">
          {art.title}
        </h3>

        <div className="flex flex-col items-end text-right shrink-0 max-w-[48%]">
          <span className="font-sans text-[10px] md:text-[11px] tracking-widest uppercase text-[#2a2a2a]/50 leading-relaxed">
            {art.category}
          </span>

          {art.price && (
            <span className="font-sans text-sm md:text-xs tracking-widest text-[#2a2a2a] mt-1">
              {art.price}
            </span>
          )}
        </div>
      </div>

      {art.price && (
        <div className="px-1 mt-5 mb-8 md:mb-0 relative z-10">
          <a
            href="/contact"
            className="inline-block bg-[#465761] border border-[#465761] text-white px-5 md:px-8 py-3 md:py-4 font-sans text-[10px] md:text-xs tracking-[0.18em] md:tracking-[0.25em] uppercase hover:bg-[#3b4a53] hover:border-[#3b4a53] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1"
          >
            Inquire to Purchase
          </a>
        </div>
      )}
    </motion.div>
  );
}

function ArtworkGallery() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const initialCategory =
    categoryParam && subcategories.includes(categoryParam)
      ? categoryParam
      : "All";

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    if (categoryParam && subcategories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredArtworks = artworks.filter((art) => {
    if (activeCategory === "All") return true;
    return art.category === activeCategory;
  });

  const leftColumn = filteredArtworks.filter((_, idx) => idx % 2 === 0);
  const rightColumn = filteredArtworks.filter((_, idx) => idx % 2 !== 0);

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap gap-4 md:gap-8 mb-14 md:mb-20"
      >
        {subcategories.map((cat) => (
          <button
            key={cat}
            type="button"
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

      {/* Mobile: exact original order */}
      <div className="grid grid-cols-1 gap-y-16 md:hidden">
        {filteredArtworks.map((art) => (
          <ArtworkCard key={`${activeCategory}-${art.id}`} art={art} />
        ))}
      </div>

      {/* Desktop: independent staggered columns */}
      <div className="hidden md:grid grid-cols-2 gap-x-24">
        <div className="flex flex-col gap-y-20">
          {leftColumn.map((art) => (
            <ArtworkCard key={`${activeCategory}-${art.id}`} art={art} />
          ))}
        </div>

        <div className="flex flex-col gap-y-20 pt-24">
          {rightColumn.map((art) => (
            <ArtworkCard key={`${activeCategory}-${art.id}`} art={art} />
          ))}
        </div>
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

export default function ArtworkPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-6 py-24 text-center font-sans tracking-widest uppercase text-sm">
          Loading gallery...
        </div>
      }
    >
      <ArtworkGallery />
    </Suspense>
  );
}
