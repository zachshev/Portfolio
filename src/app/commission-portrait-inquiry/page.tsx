"use client";

import { motion } from "framer-motion";

export default function CommissionInquiryPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 md:mb-24 text-center"
      >
        <h1 className="font-serif text-3xl md:text-5xl text-[#2a2a2a] tracking-widest uppercase mb-6">
          Commission Inquiry
        </h1>
        <p className="font-sans text-sm md:text-base tracking-widest uppercase text-[#2a2a2a]/60 leading-relaxed">
          Please provide the details of your desired portrait. We will respond shortly to arrange an initial consultation.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2 relative group">
            <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[var(--accent)]">Name</label>
            <input type="text" className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[var(--accent)] transition-colors font-serif text-lg text-[#2a2a2a]" />
          </div>
          <div className="space-y-2 relative group">
            <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[var(--accent)]">Email</label>
            <input type="email" className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[var(--accent)] transition-colors font-serif text-lg text-[#2a2a2a]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2 relative group">
            <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[var(--accent)]">Phone</label>
            <input type="tel" className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[var(--accent)] transition-colors font-serif text-lg text-[#2a2a2a]" />
          </div>
          <div className="space-y-2 relative group">
            <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[var(--accent)]">Portrait Type</label>
            <select className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[var(--accent)] transition-colors font-serif text-lg text-[#2a2a2a] appearance-none rounded-none">
              <option value="">Select Type</option>
              <option value="oil">Oil Painting</option>
              <option value="sketch">Oil Sketch</option>
              <option value="pastel">Pastel Drawing</option>
              <option value="pet">Pet Portrait</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2 relative group">
            <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[var(--accent)]">Preferred Size</label>
            <input type="text" placeholder="e.g. 24x36 inches" className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[var(--accent)] transition-colors font-serif text-lg text-[#2a2a2a] placeholder-[#2a2a2a]/30" />
          </div>
          <div className="space-y-2 relative group">
            <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[var(--accent)]">Number of Subjects</label>
            <input type="number" min="1" className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[var(--accent)] transition-colors font-serif text-lg text-[#2a2a2a]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2 relative group">
            <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[var(--accent)]">Desired Timeline</label>
            <input type="text" className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[var(--accent)] transition-colors font-serif text-lg text-[#2a2a2a]" />
          </div>
          <div className="space-y-2 relative group">
            <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[var(--accent)]">Budget Range</label>
            <select className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[var(--accent)] transition-colors font-serif text-lg text-[#2a2a2a] appearance-none rounded-none">
              <option value="">Select Range</option>
              <option value="3k-5k">$3,000 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k+">$10,000+</option>
            </select>
          </div>
        </div>

        <div className="space-y-2 relative group">
          <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[var(--accent)]">Additional Details & Vision</label>
          <textarea rows={5} className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[var(--accent)] transition-colors font-serif text-lg text-[#2a2a2a] resize-none"></textarea>
        </div>

        <div className="pt-8 text-center">
          <button
            type="submit"
            className="inline-block border border-[var(--accent)] text-[#2a2a2a] px-16 py-4 font-sans text-sm tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors duration-500 w-full md:w-auto"
          >
            Submit Inquiry
          </button>
        </div>
      </motion.form>
    </div>
  );
}
