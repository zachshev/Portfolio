"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 md:mb-24 text-center"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-[#2a2a2a] tracking-widest uppercase mb-6">
          Contact
        </h1>

        <p className="font-sans text-sm md:text-base tracking-widest uppercase text-[#2a2a2a]/60 mb-2">
          zach@zachshev.com
        </p>

        <p className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/40 italic">
          All inquiries and contacts will be directed to Zach directly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mx-auto"
      >
        <form
          className="space-y-12"
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const formData = new FormData(form);

            const data = {
              name: formData.get("name"),
              email: formData.get("email"),
              subject: formData.get("subject"),
              message: formData.get("message"),
              recipient: "zach@zachshev.com",
            };

            const response = await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            if (response.ok) {
              alert("Message sent successfully.");
              form.reset();
            } else {
              alert("Something went wrong.");
            }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2 relative group">
              <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[#465761]">
                Name
              </label>

              <input
                name="name"
                type="text"
                required
                className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[#465761] transition-colors font-serif text-lg text-[#2a2a2a]"
              />
            </div>

            <div className="space-y-2 relative group">
              <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[#465761]">
                Email
              </label>

              <input
                name="email"
                type="email"
                required
                className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[#465761] transition-colors font-serif text-lg text-[#2a2a2a]"
              />
            </div>
          </div>

          <div className="space-y-2 relative group">
            <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[#465761]">
              Subject
            </label>

            <input
              name="subject"
              type="text"
              required
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[#465761] transition-colors font-serif text-lg text-[#2a2a2a]"
            />
          </div>

          <div className="space-y-2 relative group">
            <label className="font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/60 transition-colors group-focus-within:text-[#465761]">
              Message
            </label>

            <textarea
              name="message"
              rows={6}
              required
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 py-2 outline-none focus:border-[#465761] transition-colors font-serif text-lg text-[#2a2a2a] resize-none"
            />
          </div>

          <div className="pt-8 text-center">
            <button
              type="submit"
              className="bg-[#465761] border border-[#465761] text-white px-16 py-4 font-sans text-sm tracking-widest uppercase hover:bg-[#3b4a53] hover:border-[#3b4a53] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 w-full md:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
