"use client"
import Reveal from "./reveal"
import Image from "next/image"
import { Linkedin, Mail, MessageSquare } from "lucide-react"

const OWNER = {
  name: "Chetan Nagda",
  title: "Domain Owner",
  avatarSrc: "/owner-avatar.jpg",
  linkedin: "https://linkedin.chetannagda.com",
  whatsapp: "https://wa.me/6367426746",
  email: "lakecitypropertieslcp@gmail.com",
}

export function OwnerContact() {
  return (
    <section id="owner" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <Image
            src={OWNER.avatarSrc || "/placeholder.svg?height=120&width=120&query=owner%20avatar"}
            alt="Owner avatar"
            width={120}
            height={120}
            className="mx-auto rounded-full ring-2 ring-background shadow-sm"
          />
        </Reveal>
        <Reveal delayMs={120}>
          <h3 className="font-heading mt-4 text-xl md:text-2xl font-extrabold text-foreground">{OWNER.name}</h3>
        </Reveal>
        <Reveal delayMs={160}>
          <p className="mt-1 text-muted-foreground">{OWNER.title}</p>
        </Reveal>

        <Reveal delayMs={220} className="mt-5 flex items-center justify-center gap-3">
          <a
            aria-label="LinkedIn profile"
            href={OWNER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-foreground transition-colors hover:bg-muted"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a
            aria-label="WhatsApp chat"
            href={OWNER.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-foreground transition-colors hover:bg-muted"
          >
            <MessageSquare className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
          <a
            aria-label="Send email"
            href={`mailto:${OWNER.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-foreground transition-colors hover:bg-muted"
          >
            <Mail className="h-4 w-4" />
            <span>Gmail</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
