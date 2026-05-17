export default function CommissionPortraitPage() {
  return (
    <main className="min-h-screen bg-[#D9D9D4] text-[#2a2a2a] px-6 py-32">
      <section className="max-w-3xl mx-auto">
        <div className="text-center mb-28">
          <h1 className="font-serif text-5xl md:text-7xl tracking-[0.12em] uppercase mb-10">
            Commission a Portrait
          </h1>

          <p className="text-sm leading-8 tracking-wide text-[#2a2a2a]/70 max-w-2xl mx-auto">
            Please use this form if you are interested in commissioning a portrait
            by Zach Shev. This helps begin the conversation with the necessary
            details regarding timeline, scale, reference material, and overall
            vision for the painting.
          </p>
        </div>

        <form className="space-y-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <label className="block text-sm tracking-wide mb-6 text-[#2a2a2a]/55">
                Name
              </label>

              <input
                type="text"
                className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm tracking-wide mb-6 text-[#2a2a2a]/55">
                Email Address
              </label>

              <input
                type="email"
                className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm tracking-wide mb-6 text-[#2a2a2a]/55">
              Phone Number
            </label>

            <input
              type="text"
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm tracking-wide mb-8 text-[#2a2a2a]/55 leading-8">
              Tell me about the portrait you are considering.
            </label>

            <textarea
              rows={6}
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-sm tracking-wide mb-8 text-[#2a2a2a]/55 leading-8">
              What is your vision for the painting?
            </label>

            <textarea
              rows={6}
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-sm tracking-wide mb-8 text-[#2a2a2a]/55 leading-8">
              Do you have a suitable photo reference ready or would we arrange
              to shoot some together? If you'd like to do a photoshoot, which I
              recommend, when are you available?
            </label>

            <textarea
              rows={6}
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-sm tracking-wide mb-6 text-[#2a2a2a]/55">
              Approximate size, if known
            </label>

            <input
              type="text"
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm tracking-wide mb-6 text-[#2a2a2a]/55">
              Timeline or event deadline, if applicable
            </label>

            <input
              type="text"
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 outline-none"
            />
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="border border-[#2a2a2a]/25 px-14 py-5 text-xs tracking-[0.35em] uppercase hover:bg-[#2a2a2a] hover:text-[#D9D9D4] transition-all duration-500"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
