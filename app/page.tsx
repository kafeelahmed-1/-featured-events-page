import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { EventsGrid } from "@/components/events-grid"
import { Contact } from "@/components/contact"

export default function FeaturedEventsPage() {
  console.log("[v0] FeaturedEventsPage: Rendering started")

  return (
    // reinforced styles with inline hex codes for reliability in preview
    <div
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black"
      style={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      <Navbar />
      <main>
        <Hero />
        <EventsGrid />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-12 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>© 2026 Event Discovery Startup. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
