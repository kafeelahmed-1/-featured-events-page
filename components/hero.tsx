export function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-9xl font-medium leading-[0.9] tracking-tighter mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 text-balance">
            Discover <br />
            Events Near <br />
            You
          </h1>

          <div className="flex flex-col md:flex-row gap-12 mt-20 text-[10px] font-mono uppercase tracking-[0.2em] animate-in fade-in slide-in-from-bottom-12 duration-1000 justify-center">
            <div>
              <p className="text-muted-foreground mb-2">Location</p>
              <p>San Francisco, CA</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">Date</p>
              <p>January 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract Shape Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div className="w-full h-full border border-white/20 rounded-full animate-pulse blur-3xl bg-gradient-to-br from-white/10 to-transparent" />
      </div>
    </section>
  )
}
