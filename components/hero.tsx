import Reveal from "./reveal"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <header className="px-4 pt-10 pb-8 md:pt-16 md:pb-12">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal as="div">
          <h1 className="text-balance text-3xl md:text-5xl font-semibold text-slate-900">
            Premium domain for sale: lakecityproperties.in
          </h1>
        </Reveal>
        <Reveal as="p" delayMs={100} className="mt-3 md:mt-4 text-slate-500 leading-relaxed">
          Own a memorable, trust-building domain that’s perfect for real estate in lakeside cities. Drive brand recall,
          SEO, and credibility.
        </Reveal>
        <Reveal delayMs={180} className="mt-6 flex items-center justify-center gap-3">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href="#contact" aria-controls="contact">
              Inquire Now
            </a>
          </Button>
          <a href="#pricing" className="text-blue-600 hover:text-blue-700 underline underline-offset-4">
            See Pricing
          </a>
        </Reveal>
      </div>
    </header>
  )
}
