"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pricingData = [
  {
    category: "Oil Portrait Paintings",
    items: [
      {
        subcategory: "Head and Shoulders",
        prices: [
          { size: "16” × 20”", price: "$1,500" },
          { size: "18” × 24”", price: "$2,100" },
          { size: "20” × 24”", price: "$2,400" },
        ],
      },
      {
        subcategory: "Half Body",
        prices: [
          { size: "20” × 24”", price: "$3,400" },
          { size: "24” × 36”", price: "$4,800" },
        ],
      },
      {
        subcategory: "Half Body with Hands",
        prices: [
          { size: "20” × 24”", price: "$4,200" },
          { size: "24” × 36”", price: "$5,000" },
        ],
      },
      {
        subcategory: "Full Body",
        prices: [
          { size: "24” × 36”", price: "Starting at $6,000" },
        ],
      },
    ],
  },
  {
    category: "Oil Portrait Sketches",
    items: [
      {
        subcategory: "",
        prices: [
          { size: "8” × 10”", price: "$450" },
          { size: "11” × 14”", price: "$600" },
          { size: "16” × 20”", price: "$900" },
          { size: "18” × 24”", price: "$1,200" },
        ],
      },
    ],
  },
  {
    category: "Pastel Portrait Drawings",
    items: [
      {
        subcategory: "Head and Shoulders",
        prices: [
          { size: "9” × 12”", price: "$400" },
          { size: "11” × 14”", price: "$650" },
          { size: "16” × 20”", price: "$900" },
          { size: "18” × 24”", price: "$1,250" },
        ],
      },
      {
        subcategory: "Full Figure / Ballerina Portraits",
        prices: [
          { size: "18” × 24”", price: "$900" },
          { size: "24” × 36”", price: "$1,500" },
        ],
      },
    ],
  },
  {
    category: "Graphite Portrait Drawings",
    items: [
      {
        subcategory: "",
        prices: [
          { size: "9” × 12”", price: "$400" },
          { size: "11” × 14”", price: "$650" },
          { size: "16” × 20”", price: "$900" },
        ],
      },
    ],
  },
  {
    category: "Pet Portraits",
    items: [
      {
        subcategory: "Oil",
        prices: [
          { size: "8” × 10”", price: "$450" },
          { size: "11” × 14”", price: "$600" },
          { size: "16” × 20”", price: "$900" },
        ],
      },
      {
        subcategory: "Pastel",
        prices: [
          { size: "8” × 10”", price: "$300" },
          { size: "11” × 14”", price: "$550" },
          { size: "16” × 20”", price: "$900" },
        ],
      },
    ],
  },
];

export default function CommissionPricingPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-24 text-center"
      >
        <h1 className="font-serif text-4xl md:text-6xl text-[#2a2a2a] tracking-widest uppercase mb-6">
          Commission Pricing
        </h1>
        <p className="font-sans text-sm md:text-base tracking-widest uppercase text-[#2a2a2a]/60 max-w-2xl mx-auto leading-relaxed">
          Each portrait is developed through a highly individualized process, with only a limited number of commissions accepted each year.
        </p>
      </motion.div>

      <div className="space-y-32">
        {pricingData.map((section, idx) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <h2 className="font-serif text-3xl md:text-4xl tracking-widest text-[#2a2a2a] mb-12 text-center border-b border-[#2a2a2a]/10 pb-8">
              {section.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex flex-col">
                  {item.subcategory && (
                    <h3 className="font-serif text-xl tracking-widest text-[var(--accent)] mb-6 uppercase text-sm">
                      {item.subcategory}
                    </h3>
                  )}
                  <ul className="space-y-4">
                    {item.prices.map((priceLine, priceIdx) => (
                      <li
                        key={priceIdx}
                        className="flex justify-between items-baseline group"
                      >
                        <span className="font-sans text-[#2a2a2a]/80 text-lg font-light group-hover:text-[var(--accent)] transition-colors duration-300">
                          {priceLine.size}
                        </span>
                        <div className="flex-1 mx-4 border-b border-dashed border-[#2a2a2a]/20 opacity-50 relative top-[-6px]"></div>
                        <span className="font-serif text-[#2a2a2a] text-lg tracking-wider">
                          {priceLine.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-32 pt-16 border-t border-[#2a2a2a]/10 text-center max-w-3xl mx-auto"
      >
        <div className="space-y-4 mb-16">
          <p className="font-sans text-[#2a2a2a]/60 text-sm tracking-wider uppercase leading-relaxed">
            Custom sizes, multiple subjects, and more complex compositions are available upon request.
          </p>
          <p className="font-sans text-[#2a2a2a]/60 text-sm tracking-wider uppercase leading-relaxed">
            Prices may vary depending on complexity, background, and framing.
          </p>
        </div>

        <Link
          href="/commission-portrait-inquiry"
          className="inline-block border border-[var(--accent)] text-[#2a2a2a] px-12 py-4 font-sans text-sm tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors duration-500"
        >
          Begin An Inquiry
        </Link>
      </motion.div>
    </div>
  );
}
