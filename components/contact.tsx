import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"

export function Contact() {
  const companyDetails = {
    name: "Dynamics360",
    location: "Islamabad, Pakistan",
    address: "Street 4, Sector I-10/3, Islamabad",
    phone: "+92 300 1234567",
    email: "contact@dynamics360.com",
  }

  return (
    <section className="py-24 bg-black border-t border-white/5" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground mb-4">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8">
              Let's build <br /> something great.
            </h3>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed mb-12">
              Have a question about an event or want to partner with us? Reach out and our team will get back to you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Office</p>
                  <p className="text-sm font-medium">{companyDetails.name}</p>
                  <p className="text-sm text-muted-foreground">{companyDetails.address}</p>
                  <p className="text-sm text-muted-foreground">{companyDetails.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                  <p className="text-sm font-medium">{companyDetails.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <p className="text-sm font-medium">{companyDetails.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 border border-white/10 relative">
            <div className="flex items-center gap-3 mb-12">
              <MessageSquare className="w-5 h-5" />
              <span className="text-[10px] font-mono uppercase tracking-widest">Send a Message</span>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-white text-black py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-all mt-8">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
