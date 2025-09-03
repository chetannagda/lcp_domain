import Reveal from "./reveal"

export function VideoSection() {
  return (
    <section id="video" className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-heading text-balance text-2xl md:text-3xl font-extrabold text-foreground">
            Domain Walkthrough Video
          </h2>
        </Reveal>
        <Reveal delayMs={180} className="mt-6">
          <div className="rounded-lg border border-border bg-card p-3">
            <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
              <video
                className="h-full w-full"
                controls
                playsInline
                aria-label="Domain walkthrough video"
              >
                <source src="/videos/domain-walkthrough.mp4" type="video/mp4" />
                
                {/* Fallback text if the browser cannot play the video */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
