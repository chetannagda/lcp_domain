import Link from "next/link"
import { DeviceMockups } from "@/components/device-mockups"
import { FeatureList } from "@/components/feature-list"
import { ContactForm } from "@/components/contact-form"
import { VideoSection } from "@/components/video-section"
import { Pricing } from "@/components/pricing"
import { OwnerContact } from "@/components/owner-contact"

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <header className="mx-auto w-full max-w-5xl px-4 py-10 md:py-14">
        <div className="flex flex-col items-center text-center gap-4">
          <p className="text-sm text-muted-foreground">Domain for Sale</p>
          <h1 className="text-balance text-3xl font-semibold text-foreground md:text-5xl">lakecityproperties.in</h1>
          <p className="mx-auto max-w-xl text-pretty text-foreground/90">
            Own a memorable, market-ready domain tailored for Indian real estate. Priced at{" "}
            <span className="font-semibold text-foreground">INR 9,999</span>.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="#contact" className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90">
              Make an Offer
            </a>
            <Link href="#why" className="rounded-md px-4 py-2 text-foreground underline-offset-4 hover:underline">
              Why this domain
            </Link>
          </div>
        </div>
      </header>

      {/* Visual mockups */}
      <DeviceMockups />

      {/* Video */}
      <VideoSection />

      {/* Reasons */}
      <FeatureList />

      {/* Pricing */}
      <Pricing />

      {/* Contact form */}
      <ContactForm />

      {/* Owner profile & direct contacts */}
      <OwnerContact />

      {/* Footer */}
      <footer className="mx-auto w-full max-w-5xl px-4 pb-12 pt-6">
        <div className="flex flex-col items-center justify-between gap-2 text-center text-sm text-muted-foreground md:flex-row md:text-left">
        </div>
      </footer>
    </main>
  )
}
