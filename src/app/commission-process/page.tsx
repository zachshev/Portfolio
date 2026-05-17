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
              Phone Number
            </label>

            <input
              type="text"
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.25em] mb-6 text-[#2a2a2a]/60 leading-6">
              Do you have a suitable photo reference ready or would we arrange
              to shoot some together? Or, perhaps you want the portrait painted
              from life? If so, where would you want to meet and when?
            </label>

            <textarea
              rows={5}
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.25em] mb-6 text-[#2a2a2a]/60 leading-6">
              What is your vision for the painting? What do you want the portrait
              to express and what elements would you want included?
            </label>

            <textarea
              rows={8}
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.25em] mb-6 text-[#2a2a2a]/60 leading-6">
              What size are you envisioning for the painting?
            </label>

            <input
              type="text"
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.25em] mb-6 text-[#2a2a2a]/60 leading-6">
              Is this painting connected to a specific event or deadline?
            </label>

            <input
              type="text"
              className="w-full bg-transparent border-b border-[#2a2a2a]/20 pb-4 outline-none"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="text-xs uppercase tracking-[0.3em] border border-[#2a2a2a]/20 px-12 py-4 hover:bg-[#2a2a2a] hover:text-[#D9D9D4] transition-colors duration-500"
            >
              Submit Inquiry
            </button>
          </div>

        </form>

      </section>
    </main>
  )
}
