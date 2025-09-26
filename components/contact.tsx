"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Request failed")
      setForm({ name: "", email: "", phone: "", message: "" })
      toast({ title: "Message sent", description: "We’ll get back to you shortly." })
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold md:text-3xl">Contact & Booking</h2>
            <p className="mt-2 text-muted-foreground">
              Serving Saint Paul and the Twin Cities metro. Evening & weekend appointments available by request.
            </p>
          </div>
          <Card className="glow bg-secondary/40">
            <CardHeader>
              <CardTitle>Reach Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                Phone:{" "}
                <a href="tel:+16515553382" className="text-primary underline">
                  (651) 555-DETAIL
                </a>{" "}
                — call or text
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@leatherandwooddetailing.com" className="text-primary underline">
                  info@leatherandwooddetailing.com
                </a>
              </p>
              <div className="hr-gradient my-3" />
              <div>
                <p className="font-medium">Hours</p>
                <ul className="mt-1 text-muted-foreground">
                  <li>Mon–Fri: 8:00 AM – 6:00 PM</li>
                  <li>Saturday: 9:00 AM – 4:00 PM</li>
                  <li>Sunday: Closed</li>
                  <li>Evening & weekend appointments by request</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 overflow-hidden rounded-lg border border-border/60">
            <iframe
              title="Service Area Map - Twin Cities"
              src="https://www.google.com/maps?q=Twin+Cities+MN&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <Card className="glow bg-secondary/40">
          <CardHeader>
            <CardTitle>Request a Booking</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm">
                  Phone
                </label>
                <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  required
                />
              </div>
              <Button
                disabled={loading}
                className="glow bg-primary text-primary-foreground hover:bg-[color-mix(in_oklch,var(--primary) 85%,black)]"
              >
                {loading ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
