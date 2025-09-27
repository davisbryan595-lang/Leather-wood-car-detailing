import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative section min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/heroimg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark base overlay for readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Brownish gradient fade overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(80, 50, 20, 0.4), rgba(0, 0, 0, 0.6))",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h1 className="text-balance text-3xl font-semibold md:text-5xl text-foreground">
          Experience the luxury your car deserves
        </h1>
        <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
          Premium mobile car detailing across the Twin Cities metro—at prices that fit your budget.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#contact">
            <Button
              size="lg"
              className="glow bg-primary text-primary-foreground hover:bg-[color-mix(in_oklch,var(--primary)_85%,black)]"
            >
              Book Now
            </Button>
          </a>
          <a href="#services">
            <Button
              size="lg"
              variant="outline"
              className="glow border-border/70 bg-secondary/40 text-foreground hover:bg-secondary"
            >
              View Services
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
