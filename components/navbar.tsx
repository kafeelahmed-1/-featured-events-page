"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tighter uppercase">EventDiscovery</span>
            <div className="bg-white text-black text-[10px] font-bold px-1 rounded uppercase">26</div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium uppercase tracking-widest hover:text-white/60 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              className="text-xs font-medium uppercase tracking-widest hover:text-white/60 transition-colors"
            >
              Log In
            </Link>
            <button className="bg-white text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all">
              Sign Up
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
          <button className="w-full bg-white text-black py-4 text-xs font-bold uppercase tracking-widest">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  )
}
