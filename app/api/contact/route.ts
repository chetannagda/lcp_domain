import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    // Basic honeypot
    if (data?.company) {
      return NextResponse.json({ ok: true })
    }

    // Log the submission (replace with email or DB integration if desired)
    console.log("[v0] Contact submission received:", {
      name: data?.name,
      number: data?.number,
      email: data?.email,
      offerPrice: data?.offerPrice,
      at: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("[v0] Contact submission error:", e)
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
