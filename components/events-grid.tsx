"use client"

import { useState, useMemo } from "react"
import { Search, Calendar, MapPin, ArrowUpRight } from "lucide-react"

const DUMMY_EVENTS = [
  {
    id: 1,
    name: "Islamabad Tech Expo",
    date: "Feb 15, 2026",
    time: "10:00 AM",
    location: "Pak-China Friendship Centre",
    description: "The largest gathering of tech enthusiasts and startups in the capital city.",
    image: "/islamabad-modern-tech-event.jpg",
  },
  {
    id: 2,
    name: "Sufi Night & Qawwali",
    date: "Feb 20, 2026",
    time: "8:00 PM",
    location: "Lok Virsa Amphitheater",
    description: "An enchanting evening of traditional music and spiritual performance.",
    image: "/qawwali-night-culture.jpg",
  },
  {
    id: 3,
    name: "Art in the Hills",
    date: "Feb 22, 2026",
    time: "11:00 AM",
    location: "Saidpur Village",
    description: "Exhibition featuring contemporary Pakistani artists set in the historic village.",
    image: "/art-exhibition-village.jpg",
  },
  {
    id: 4,
    name: "Startup Weekend ISB",
    date: "Feb 25, 2026",
    time: "9:00 AM",
    location: "National Incubation Center",
    description: "Pitch your ideas and build a business in 54 hours with local mentors.",
    image: "/startup-office-meeting.png",
  },
  {
    id: 5,
    name: "Monal Sunset Yoga",
    date: "Feb 28, 2026",
    time: "5:00 PM",
    location: "Monal Restaurant Garden",
    description: "Wellness session with a breathtaking view of the Margalla Hills.",
    image: "/yoga-mountains-sunset.jpg",
  },
  {
    id: 6,
    name: "Margalla Hiking Trail 5",
    date: "March 02, 2026",
    time: "7:00 AM",
    location: "Margalla Hills National Park",
    description: "Guided morning trek through Islamabad's most scenic trail.",
    image: "/hiking-trail-nature.jpg",
  },
]

export function EventsGrid() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredEvents = useMemo(() => {
    return DUMMY_EVENTS.filter((event) => event.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery])

  return (
    <section className="py-20 bg-black/50" id="events">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground mb-4">
              Featured Events
            </h2>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight">
              Curated experiences <br /> for your community.
            </h3>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="SEARCH EVENTS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 px-12 py-4 text-[10px] font-mono tracking-widest focus:outline-none focus:border-white/30 transition-colors placeholder:text-muted-foreground uppercase"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-background p-8 hover:bg-white/5 transition-all duration-500 relative flex flex-col min-h-[450px] overflow-hidden"
            >
              <div
                className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                    0{event.id}
                  </span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>

                <h4 className="text-2xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {event.name}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-auto group-hover:translate-x-2 transition-transform duration-500 delay-75">
                  {event.description}
                </p>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-3 group-hover:translate-x-2 transition-transform duration-500 delay-150">
                  <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {event.date} • {event.time}
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                </div>

                <button className="mt-8 w-full border border-white/10 py-4 text-[10px] font-mono tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300 relative z-20">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-muted-foreground font-mono tracking-widest uppercase">
              No events found for "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
