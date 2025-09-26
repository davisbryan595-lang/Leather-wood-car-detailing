import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const SERVICES = [
  {
    title: "Exterior Wash",
    price: "$40",
    duration: "1–2 hours",
    img: "/shiny-black-car-exterior-wash.jpg",
    bullets: ["Foam pre-wash & hand wash", "Wheel & tire clean, tire shine", "Streak-free glass & quick wax"],
  },
  {
    title: "Full Package",
    price: "$149",
    duration: "3–4 hours",
    highlight: "Save $40",
    img: "/car-detailing-full-interior-and-exterior.jpg",
    bullets: ["Everything in Exterior Wash", "Interior vacuum & deep clean", "Leather conditioning, trim gloss"],
  },
  {
    title: "Interior Detail",
    price: "Custom",
    duration: "Timing varies",
    img: "/luxury-leather-interior-detailing.jpg",
    bullets: ["Deep vacuum & steam clean", "Leather clean & condition", "Odor removal & fabric care"],
  },
  {
    title: "Custom Quotes",
    price: "Custom",
    duration: "Tailored",
    img: "/custom-auto-detailing-service-consultation.jpg",
    bullets: ["Personalized packages", "Ceramic coating & add-ons", "Fleet & multi-vehicle pricing"],
  },
]

export function Services() {
  return (
    <section id="services" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Services</h2>
          <p className="mt-2 text-muted-foreground">Choose the detail that fits your needs.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Card key={s.title} className="glow bg-secondary/40">
              <img src={s.img || "/placeholder.svg"} alt={s.title} className="h-40 w-full rounded-t-md object-cover" />
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center justify-between">
                  <span>{s.title}</span>
                  {s.highlight ? (
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">{s.highlight}</span>
                  ) : null}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {s.price} • {s.duration}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a href="#contact" className="w-full">
                  <Button className="glow w-full bg-primary text-primary-foreground hover:bg-[color-mix(in_oklch,var(--primary) 85%,black)]">
                    Book {s.title}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
