import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeatureCards } from "@/components/feature-cards"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <div className="hr-gradient" />
      <FeatureCards />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  )
}
