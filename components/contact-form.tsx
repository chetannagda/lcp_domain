"use client"

import type React from "react"
import { useState } from "react"

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState<string>("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setMessage("")
    const form = e.currentTarget
    const formData = new FormData(form)

    // Check if it's a honeypot submission
    if (formData.get("company")) {
      setStatus("error")
      setMessage("Invalid submission")
      return
    }

    try {
      const name = formData.get("name") as string
      const number = formData.get("number") as string
      const email = formData.get("email") as string
      const offerPrice = formData.get("offerPrice") as string

      // Format the WhatsApp message with line breaks
      const messageText = `*New Property Offer*%0a%0aName: ${name}%0aPhone: ${number}%0aEmail: ${email}%0aOffer Price: ₹${offerPrice}`

      // Create WhatsApp URL (note: the country code +91 is added to your number)
      const whatsappUrl = `https://api.whatsapp.com/send?phone=916367426746&text=${messageText}`

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank")

      setStatus("success")
      setMessage("Opening WhatsApp... You'll be redirected to complete your offer submission.")
      form.reset()
    } catch (err) {
      console.error("[WhatsApp] Contact form error:", err)
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto w-full max-w-xl px-4 py-12 md:py-16">
      <h2 id="contact-heading" className="text-center text-xl font-semibold text-gray-900 md:text-2xl">
        Interested? Make an Offer
      </h2>
      <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
        {/* Honeypot field */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm text-gray-600">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              minLength={2}
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none ring-emerald-600/20 focus:ring-4"
              placeholder="Your full name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="number" className="mb-1 text-sm text-gray-600">
              Number
            </label>
            <input
              id="number"
              name="number"
              required
              inputMode="tel"
              pattern="^[0-9()+\\-\\s]{7,}$"
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none ring-emerald-600/20 focus:ring-4"
              placeholder="Phone or WhatsApp"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm text-gray-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none ring-emerald-600/20 focus:ring-4"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="offerPrice" className="mb-1 text-sm text-gray-600">
              Offer Price (INR)
            </label>
            <input
              id="offerPrice"
              name="offerPrice"
              required
              inputMode="numeric"
              pattern="^[0-9,]+$"
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none ring-emerald-600/20 focus:ring-4"
              placeholder="e.g., 9999"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-center text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          aria-busy={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send"}
        </button>
        {message ? (
          <p
            role={status === "error" ? "alert" : undefined}
            className={`text-sm ${status === "error" ? "text-red-600" : "text-gray-600"}`}
          >
            {message}
          </p>
        ) : null}
        <p className="text-center text-xs text-gray-600">We use your details only to respond to your offer.</p>
      </form>
    </section>
  )
}
