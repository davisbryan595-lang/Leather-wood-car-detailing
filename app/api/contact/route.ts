import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)
  if (!data || !data.name || !data.email || !data.message) {
    return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 })
  }

  console.log("[v0] Contact submission:", data)

  return NextResponse.json({ ok: true })
}
