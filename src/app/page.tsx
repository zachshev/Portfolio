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
    imageWidth: "md:max-w-[760px]",
    imageHeight: "h-[250px] sm:h-[320px] md:h-[430px] lg:h-[455px]",
  },
  {
    title: "Pastel Drawings",
    href: "/artwork?category=Pastel%20Drawings",
    image: "/Portrait drawing/Pastel Drawing Camille.JPG",
    className: "md:col-span-4 md:-ml-10 lg:-ml-16",
    imageWidth: "md:max-w-[420px]",
    imageHeight: "h-[390px] sm:h-[460px] md:h-[430px] lg:h-[455px]",
  },
  {
    title: "Oil Sketches",
    href: "/artwork?category=Portrait%20Oil%20Sketch",
    image: "/Portrait oil sketch/Portrait Oil Sketch Rebecca.JPG",
    className: "md:col-span-4",
    imageWidth: "md:max-w-[420px]",
    imageHeight: "h-[390px] sm:h-[460px] md:h-[430px] lg:h-[455px]",
  },
  {
    title: "Graphite Portraits",
    href: "/artwork?category=Graphite%20Drawings",
    image: "/Portrait drawing/Graphite Drawing Winston Churchill.jpg",
    className: "md:col-span-4",
    imageWidth: "md:max-w-[420px]",
    imageHeight: "h-[390px] sm:h-[460px] md:h-[430px] lg:h-[455px]",
  },
  {
    title: "Charcoal Studies",
    href: "/artwork?category=Charcoal%20Studies",
    image: "/Portrait drawing/Charcoal Portrait Gypsy_.jpg",
    className: "md:col-span-4",
    imageWidth: "md:max-w-[420px]",
    imageHeight: "h-[390px] sm:h-[460px] md:h-[430px] lg:h-[455px]",
  },
  {
    title: "Pet Portraits",
    href: "/artwork?category=Pet%20Portraits",
    image: "/Pet portrait/Pet Portrait Oil Benny.jpg",
    className: "md:col-span-4 md:col-start-5",
    imageWidth: "md:max-w-[420px]",
    imageHeight: "h-[390px] sm:h-[460px] md:h-[430px] lg:h-[455px]",
  },
];

function CategoryCard({ cat }: { cat: (typeof homepageItems)[0] }) {
  return (
    <Link href={cat.href} className={`block w-full ${cat.className}`}>
      <div className="w-full flex flex-col items-center">
        <div className={`w-full ${cat.imageWidth}`}>
          <div
            className={`relative w-full ${cat.imageHeight} mb-4 md:mb-5 group cursor-pointer overflow-hidden`}
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </div>

          <div className="flex justify-between items-start md:items-center w-full md:w-[88%] md:mx-auto gap-4">
            <h3 className="font-serif text-2xl md:text-xl leading-tight tracking-[0.08em] text-[#2a2a2a]">
              {cat.title}
            </h3>

            <span className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/50 whitespace-nowrap text-right pt-2 md:pt-0">
              View Collection
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      <section className="min-h-[30vh] md:min-h-[36vh] flex flex-col items-center justify-start text-center px-6 pt-9 md:pt-12 pb-8 md:pb-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-[2.45rem] md:text-6xl lg:text-7xl tracking-widest text-[#2a2a2a] mb-3 md:mb-4 uppercase drop-shadow-sm">
            Zach Shev
          </h1>
        </motion.div>

        <motion.div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-sans text-xs md:text-lg text-[#2a2a2a]/75 tracking-widest uppercase max-w-2xl leading-relaxed font-bold"
          >
            Heirloom Portraiture designed to last for generations.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-4 md:mt-5"
        >
          <Link
            href="/commission-process"
            className="inline-flex items-center justify-center bg-[#465761] border border-[#465761] text-white px-7 md:px-11 py-3.5 md:py-4 font-sans text-[10px] md:text-xs tracking-[0.22em] md:tracking-[0.3em] uppercase hover:bg-[#3b4a53] hover:border-[#3b4a53] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1"
          >
            Commission a Portrait
          </Link>
        </motion.div>
      </section>

      <section className="w-full max-w-[1450px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-y-14 md:gap-y-20 md:gap-x-16 lg:gap-x-24 pb-24 md:pb-32 items-start">
        {homepageItems.map((cat, idx) => (
          <CategoryCard key={cat.title + idx} cat={cat} />
        ))}
      </section>
    </div>
  );
}
