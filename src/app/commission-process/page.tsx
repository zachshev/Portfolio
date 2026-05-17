"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: [
      "The process begins with a conversation about the vision for the portrait. This includes discussing size, composition, mood, wardrobe, lighting, and where the final piece will live. Whether the painting is intended as a personal keepsake, a gift, or a family heirloom, the goal is to create something timeless and deeply personal.",
      "Clients are welcome to share inspiration images, existing photographs, or ideas they may have for the piece.",
    ],
  },
  {
    number: "02",
    title: "Reference Photography",
    description: [
      "High quality reference material is essential to creating a successful portrait.",
      "Depending on the project, references may come from existing photographs provided by the client, a custom directed photoshoot, or a combination of both. For larger commissions, a dedicated photoshoot is often recommended in order to achieve the strongest possible lighting, composition, and overall design.",
      "The goal during this stage is to gather reference material that feels natural, authentic, and painterly rather than overly posed or artificial.",
    ],
  },
  {
    number: "03",
    title: "Composition & Design",
    description: [
      "Once references are selected, the composition of the painting is developed. This stage may involve cropping adjustments, value studies, color considerations, and overall design decisions that help establish the final direction of the portrait.",
      "Attention is given not only to likeness, but also to mood, atmosphere, gesture, edge quality, and the overall visual impact of the piece.",
    ],
  },
  {
    number: "04",
    title: "Approval & Scheduling",
    description: [
      "After the concept, size, and reference material are finalized, the commission is officially scheduled.",
      "A deposit is required to reserve a place on the calendar and begin work on the painting.",
      "At this stage, major compositional decisions should be finalized before work begins on the final surface.",
    ],
  },
  {
    number: "05",
    title: "Painting Process",
    description: [
      "Each portrait is created by hand using professional archival materials intended to last for generations.",
      "Throughout the process, focus is placed on creating a painting that feels alive, personal, and enduring. Select progress updates may be shared during the development of the work.",
      "Completion times vary depending on the scale and complexity of the portrait.",
    ],
  },
  {
    number: "06",
    title: "Framing",
    description: [
      "Framing recommendations are available upon request. Clients may choose to receive the painting framed and ready to hang, or unframed depending on preference.",
      "A carefully chosen frame can play an important role in the final presentation of the artwork.",
    ],
  },
  {
    number: "07",
    title: "Shipping & Delivery",
    description: [
      "Completed paintings are professionally packaged for safe delivery.",
      "Local delivery may be available within Southern California. Domestic and international shipping are also available. Shipping costs vary depending on size, framing, and destination.",
    ],
  },
];

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
        prices: [{ size: "24” × 36”", price: "Starting at $6,000" }],
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

export default function CommissionProcessPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-24 text-center"
      >
        <h1 className="font-serif text-4xl md:text-6xl text-[#2a2a2a] tracking-widest uppercase mb-6">
          The Commission Process
        </h1>
      </motion.div>

      <div className="space-y-24">
        {steps.map((step) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
          >
            <div className="font-serif text-3xl md:text-5xl text-[#465761] opacity-60 shrink-0 w-16">
              {step.number}
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl tracking-widest text-[#2a2a2a] mb-4">
                {step.title}
              </h2>

              <div className="font-sans text-[#2a2a2a]/80 leading-relaxed text-lg font-light space-y-4">
                {step.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 pt-24 border-t border-[#2a2a2a]/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-[#2a2a2a] tracking-widest uppercase mb-6">
            Commission Pricing
          </h2>
        </motion.div>

        <div className="space-y-32">
          {pricingData.map((section) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <h3 className="font-serif text-2xl md:text-3xl tracking-widest text-[#2a2a2a] mb-12 text-center border-b border-[#2a2a2a]/10 pb-8">
                {section.category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col">
                    {item.subcategory && (
                      <h4 className="font-serif text-xl tracking-widest text-[#465761] mb-6 uppercase text-sm">
                        {item.subcategory}
                      </h4>
                    )}

                    <ul className="space-y-4">
                      {item.prices.map((priceLine, priceIdx) => (
                        <li
                          key={priceIdx}
                          className="flex justify-between items-baseline group"
                        >
                          <span className="font-sans text-[#2a2a2a]/80 text-lg font-light group-hover:text-[#465761] transition-colors duration-300">
                            {priceLine.size}
                          </span>

                          <div className="flex-1 mx-4 border-b border-dashed border-[#2a2a2a]/20 opacity-50 relative top-[-6px]" />

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
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-32 pt-16 border-t border-[#2a2a2a]/10 text-center max-w-3xl mx-auto"
      >
        <h2 className="font-serif text-2xl md:text-3xl tracking-widest text-[#2a2a2a] mb-8 uppercase">
          Final Notes
        </h2>

        <div className="space-y-4 mb-12">
          <p className="font-sans text-[#2a2a2a]/80 leading-relaxed text-lg font-light">
            Because each painting is created through a highly individualized
            process, only a limited number of commissions are accepted each year.
          </p>

          <p className="font-sans text-[#2a2a2a]/80 leading-relaxed text-lg font-light">
            For commission inquiries, availability, or additional information,
            please visit the Contact page.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-block bg-[#465761] border border-[#465761] text-white px-12 py-4 font-sans text-sm tracking-widest uppercase hover:bg-[#3b4a53] hover:border-[#3b4a53] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1"
        >
          Contact Zach
        </Link>
      </motion.div>
    </div>
  );
}
