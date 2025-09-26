"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const IMAGES = [
  "/before-and-after-exterior-shine.jpg",
  "/interior-leather-conditioning-close-up.jpg",
  "/wood-trim-polish-detail.jpg",
  "/ceramic-coating-water-beading.jpg",
  "/wheel-and-tire-detailing.jpg",
  "/engine-bay-cleaning.jpg",
]

export function Gallery() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  const onOpen = (src: string) => {
    setActive(src)
    setOpen(true)
  }

  return (
    <section id="gallery" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Gallery</h2>
          <p className="mt-2 text-muted-foreground">Before & After highlights of our work.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((src) => (
            <button
              key={src}
              onClick={() => onOpen(src)}
              className="glow overflow-hidden rounded-lg focus:outline-none"
              aria-label="Open image in lightbox"
            >
              <img src={src || "/placeholder.svg"} alt="Detailing example" className="h-60 w-full object-cover" />
            </button>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="bg-card/95">
            {active ? (
              <img
                src={active || "/placeholder.svg"}
                alt="Selected detailing example"
                className="lightbox-img mx-auto rounded-md"
              />
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
