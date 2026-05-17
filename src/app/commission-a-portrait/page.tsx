export default function CommissionPortraitPage() {
  return (
    <main className="min-h-screen bg-[#D9DDD4] px-6 py-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl tracking-widest text-center uppercase mb-16 text-[#2a2a2a]">
          Commission a Portrait
        </h1>

        <p className="text-sm leading-7 text-[#2a2a2a]/70 mb-12">
          Please use this form if you are interested in commissioning a portrait by Zach Shev.
          This helps begin the conversation with the necessary details about the sitter,
          desired size, timeline, reference material, and overall vision for the painting.
        </p>

        <form className="space-y-8">
          <input
            className="w-full bg-transparent border-b border-[#2a2a2a]/30 py-3 outline-none"
            placeholder="Name"
          />

          <input
            className="w-full bg-transparent border-b border-[#2a2a2a]/30 py-3 outline-none"
            placeholder="Email Address"
          />

          <input
            className="w-full bg-transparent border-b border-[#2a2a2a]/30 py-3 outline-none"
            placeholder="Phone Number"
          />

          <textarea
            className="w-full bg-transparent border-b border-[#2a2a2a]/30 py-3 h-32 outline-none"
            placeholder="Tell me about the portrait you are considering."
          />

          <textarea
            className="w-full bg-transparent border-b border-[#2a2a2a]/30 py-3 h-32 outline-none"
            placeholder="What is your vision for the painting?"
          />

          <input
            className="w-full bg-transparent border-b border-[#2a2a2a]/30 py-3 outline-none"
            placeholder="Approximate size, if known"
          />

          <input
            className="w-full bg-transparent border-b border-[#2a2a2a]/30 py-3 outline-none"
            placeholder="Timeline or event deadline, if applicable"
          />

          <button className="mt-8 border border-[#2a2a2a]/40 px-10 py-3 text-xs uppercase tracking-widest hover:bg-[#2a2a2a] hover:text-[#D9DDD4] transition">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
