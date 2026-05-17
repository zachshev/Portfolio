export default function CommissionPortraitPage() {
  return (
    <main className="min-h-screen bg-[#D9D9D4] text-[#2a2a2a] px-6 py-32">
      <section className="max-w-3xl mx-auto">
        
        <div className="text-center mb-24">
          <h1 className="font-serif text-5xl md:text-7xl tracking-[0.12em] uppercase mb-8">
            Commission a Portrait
          </h1>

          <p className="text-sm leading-8 tracking-wide text-[#2a2a2a]/70 max-w-2xl mx-auto">
            Please use this form if you are interested in commissioning a portrait
            by Zach Shev. This helps begin the conversation with the necessary
            details regarding reference material, timeline, scale, and overall
            vision for the painting.
          </p>
        </div>

        <form className="space-y-20">

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] mb-6 text-[#2a2a2a]/60">
                Name
              </label>

              <input
                type="text"
                className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.25em] mb-6 text-[#2a2a2a]/60">
                Email
              </label>

              <input
                type="email"
                className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.25em] mb-6 text-[#2a2a2a]/60">
              Subject
            </label>

            <input
              type="text"
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.25em] mb-6 text-[#2a2a2a]/60">
              Message
            </label>

            <textarea
              rows={10}
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 outline-none resize-none"
            />
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="text-xs uppercase tracking-[0.3em] border border-[#2a2a2a]/20 px-10 py-4 hover:bg-[#2a2a2a] hover:text-[#D9D9D4] transition-colors duration-500"
            >
              Submit
            </button>
          </div>

        </form>
      </section>
    </main>
  )
}
