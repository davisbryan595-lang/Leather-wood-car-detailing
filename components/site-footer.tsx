export function SiteFooter() {
  return (
    <footer className="section pb-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="hr-gradient mb-6" />
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          <div className="space-y-3">
            <img src="/images/leather-wood-logo.png" alt="Leather & Wood Car Detailing logo" className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground">
              Luxury car detailing in Saint Paul and across the Twin Cities metro.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
            <a href="#hero" className="text-muted-foreground hover:text-foreground">
              Home
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground">
              Services
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground">
              Pricing
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </nav>
          <div className="space-y-2 text-sm">
            <p>
              Phone:{" "}
              <a className="text-primary underline" href="tel:+16515553382">
                (651) 555-DETAIL
              </a>
            </p>
            <p>
              Email:{" "}
              <a className="text-primary underline" href="mailto:info@leatherandwooddetailing.com">
                info@leatherandwooddetailing.com
              </a>
            </p>
            <div className="flex gap-3 pt-2">
              <a className="text-muted-foreground hover:text-primary" href="#" aria-label="Facebook">
                Facebook
              </a>
              <a className="text-muted-foreground hover:text-primary" href="#" aria-label="Instagram">
                Instagram
              </a>
            </div>
            <p className="pt-2 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Leather & Wood Car Detailing
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
