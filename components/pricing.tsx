import Reveal from "./reveal"
import { Button } from "@/components/ui/button"

export function Pricing() {
  return (
    <section id="pricing" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center">
            Simple, Transparent Pricing
          </h2>
        </Reveal>
        <Reveal delayMs={120} className="mt-2 text-center">
          <p className="text-muted-foreground">
            One-time purchase. Fast ownership verification and transfer assistance included.
          </p>
        </Reveal>

        <Reveal delayMs={180} className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-heading text-xl font-bold text-foreground">Buy Now</h3>
              <p className="mt-2 text-muted-foreground">Own lakecityproperties.in outright.</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-foreground">INR 9,999</span>
              </div>
              <ul className="mt-6 space-y-2 text-foreground/80">
                <li>• Domain transfer guidance</li>
                <li>• Free DNS setup help</li>
                <li>• Fast ownership verification</li>
              </ul>
              <div className="mt-6">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:opacity-90"
                  aria-controls="contact"
                >
                  <a href="#contact">Inquire to Purchase</a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-heading text-xl font-bold text-foreground">Make an Offer</h3>
              <p className="mt-2 text-muted-foreground">Prefer to negotiate? Send a serious offer.</p>
              <div className="mt-5">
                <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary ring-1 ring-secondary/20">
                  Flexible within reason
                </span>
              </div>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-foreground transition-colors hover:bg-muted"
                >
                  Contact Owner
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
