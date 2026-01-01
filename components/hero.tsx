export function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-9xl font-medium leading-[0.9] tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 text-balance text-white drop-shadow-[0_18px_30px_rgba(0,0,0,0.6)]">
            Discover <br />
            Events Near <br />
            You
          </h1>

          <p className="mt-4 text-lg md:text-xl text-muted-foreground/90 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700">
            Find curated local experiences — music, tech talks, art shows and community meetups.
          </p>

          <div className="flex justify-center gap-4 mt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <a href="#events" className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-[10px] font-mono tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300">
              Explore Events
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-[10px] font-mono tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300">
              Submit an Event
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-10 text-[10px] font-mono uppercase tracking-[0.2em] animate-in fade-in slide-in-from-bottom-12 duration-1000 justify-center">
            <div>
              <p className="text-muted-foreground mb-2">Location</p>
              <p>Islamabad</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">Date</p>
              <p>January 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-0" />

      {/* Abstract Shape Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div className="w-full h-full border border-white/20 rounded-full animate-pulse blur-3xl bg-gradient-to-br from-white/10 to-transparent" />
      </div>
    </section>
  )
}
