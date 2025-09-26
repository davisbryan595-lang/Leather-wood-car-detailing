import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const PLANS = [
  {
    title: "Exterior Wash",
    price: "$40",
    blurb: "Perfect quick refresh for weekly shine.",
    features: ["Hand wash", "Wheel clean & tire shine", "Quick wax, glass polish"],
  },
  {
    title: "Full Package",
    price: "$149",
    blurb: "Our best value. Inside and out.",
    highlight: "Save $40",
    features: ["Exterior Wash included", "Interior deep clean", "Leather conditioning"],
  },
  {
    title: "Custom Quote",
    price: "Let’s talk",
    blurb: "Tailored packages for your vehicle.",
    features: ["Ceramic add-ons", "Odor removal", "Multi-vehicle discounts"],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Pricing</h2>
          <p className="mt-2 text-muted-foreground">Transparent rates with luxury results.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <Card key={p.title} className="glow bg-secondary/40">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{p.title}</span>
                  {p.highlight ? (
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">{p.highlight}</span>
                  ) : null}
                </CardTitle>
                <div className="text-3xl font-semibold">{p.price}</div>
                <p className="text-sm text-muted-foreground">{p.blurb}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a href="#contact" className="w-full">
                  <Button className="glow w-full bg-primary text-primary-foreground hover:bg-[color-mix(in_oklch,var(--primary) 85%,black)]">
                    Get Started
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
