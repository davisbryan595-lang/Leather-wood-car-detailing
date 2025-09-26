"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
  className={cn(
    "fixed inset-x-0 top-0 z-50 transition backdrop-blur supports-[backdrop-filter]:bg-background/60",
    scrolled ? "border-b border-border/60" : "border-b border-transparent",
  )}
  aria-label="Main navigation"
>
  <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
    <a href="#hero" className="flex items-center gap-3">
      <img
        src="/images/leather-wood-logo.png"
        alt="Leather & Wood Car Detailing logo"
        className="h-20 w-auto md:h-24 lg:h-28"
      />
      <span className="sr-only">Leather & Wood Car Detailing</span>
    </a>
    <div className="hidden gap-6 md:flex">
      <a href="#services" className="text-sm text-muted-foreground hover:text-foreground">
        Services
      </a>
      <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
        Pricing
      </a>
      <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground">
        Gallery
      </a>
      <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground">
        Testimonials
      </a>
      <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
        Contact
      </a>
    </div>
    <div className="flex items-center gap-3">
      <a href="tel:+16515553382" className="hidden text-sm md:block">
        (651) 555-DETAIL
      </a>
      <a href="#contact">
        <Button className="glow bg-primary text-primary-foreground hover:bg-[color-mix(in_oklch,var(--primary)_85%,black)]">
          Book Now
        </Button>
      </a>
    </div>
  </nav>
</header>

  )
}
