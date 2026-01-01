"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed z-50 transition-all duration-500 ${isScrolled ? 'top-6 left-6 right-6 rounded-2xl bg-white/6 border border-white/10 backdrop-blur-xl shadow-2xl' : 'top-0 left-0 right-0 bg-transparent'}`}>
      <div className={`mx-auto ${isScrolled ? 'max-w-[1200px]' : ''}`}>
        <div className={`flex items-center justify-between px-6 transition-all duration-300 ${isScrolled ? 'py-3' : 'h-20 py-6'}`}>
          {/* Desktop Nav - slides to left when scrolled */}
          <div className={`hidden md:flex items-center gap-6 transition-all duration-500 ${isScrolled ? 'order-1 ml-0 -translate-x-2 opacity-100' : 'order-3 ml-auto translate-x-0 opacity-90'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.35em] text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              className="text-sm font-medium uppercase tracking-[0.35em] text-white/80 hover:text-white transition-colors"
            >
              Log In
            </Link>
          </div>

          {/* Brand - moves to right when scrolled */}
          <div className={`flex items-center gap-3 transition-all duration-500 ${isScrolled ? 'order-3 ml-auto text-right' : 'order-1'}`}>
            <div className="flex flex-col leading-tight">
              <span className={`font-bold tracking-tighter uppercase transition-all duration-300 ${isScrolled ? 'text-sm text-white/90' : 'text-lg text-white'}`}>EventDiscovery</span>
              <span className={`text-[10px] font-mono tracking-widest text-muted-foreground transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-80'}`}>Curated Events</span>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden transition-all duration-500 ${isScrolled ? 'order-1 p-2 bg-white/5 rounded-md -translate-x-1 text-white' : 'order-4 p-2 text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium uppercase tracking-widest">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
