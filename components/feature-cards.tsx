import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const FEATURES = [
  {
    title: "Premium Products",
    desc: "Only top-tier, safe products to protect paint, leather, and wood trims.",
    img: "/premium-detailing-products-on-workbench.jpg",
  },
  {
    title: "Expert Technicians",
    desc: "Skilled detailers with meticulous attention to every surface.",
    img: "/expert-auto-detailer-working.jpg",
  },
  {
    title: "Mobile Service",
    desc: "We come to you anywhere in Saint Paul and Twin Cities metro.",
    img: "/mobile-car-detailing-van.jpg",
  },
  {
    title: "Satisfaction Guarantee",
    desc: "If you’re not thrilled, we’ll make it right—your satisfaction comes first.",
    img: "/customer-satisfaction-checklist.jpg",
  },
]

export function FeatureCards() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Why Choose Us</h2>
          <p className="mt-2 text-muted-foreground">Elegant, trustworthy service with a luxury finish.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <Card key={f.title} className="glow bg-secondary/40">
              <CardHeader>
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <img src={f.img || "/placeholder.svg"} alt={f.title} className="h-36 w-full rounded-md object-cover" />
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
