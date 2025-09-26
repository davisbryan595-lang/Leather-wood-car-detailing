import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const TESTIMONIALS = [
  {
    name: "Jordan M.",
    text: "My car hasn’t looked this good since the showroom. The leather conditioning was next-level.",
  },
  {
    name: "Avery R.",
    text: "Professional, on-time, and the Full Package is absolutely worth it. Flawless finish.",
  },
  {
    name: "Sam K.",
    text: "Great value and super convenient mobile service. Highly recommend!",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">What Customers Say</h2>
          <p className="mt-2 text-muted-foreground">Trusted by drivers across the Twin Cities.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="glow bg-secondary/40">
              <CardHeader>
                <CardTitle className="text-lg">{t.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{t.text}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
