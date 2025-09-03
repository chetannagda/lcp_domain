import Image from "next/image"

export function DeviceMockups() {
  return (
    <section aria-labelledby="mockups-heading" className="mx-auto w-full max-w-5xl px-4 py-12 md:py-16">
      <h2 id="mockups-heading" className="sr-only">
        Domain preview mockups
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <figure className="flex flex-col items-center gap-3">
          <Image
            src="/images/mock-pc.jpg"
            alt="Desktop browser mockup showing lakecityproperties.in in the URL bar"
            width={800}
            height={520}
            className="h-auto w-full rounded-lg border border-gray-200"
            priority
          />
          <figcaption className="text-sm text-gray-600">Desktop preview</figcaption>
        </figure>
        <figure className="flex flex-col items-center gap-3">
          <Image
            src="/images/mock-mobile.jpg"
            alt="Mobile browser mockup showing lakecityproperties.in in the URL bar"
            width={400}
            height={800}
            className="h-auto w-full rounded-lg border border-gray-200"
          />
          <figcaption className="text-sm text-gray-600">Mobile preview</figcaption>
        </figure>
      </div>
    </section>
  )
}
