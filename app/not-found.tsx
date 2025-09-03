"use client"

import { Suspense } from "react"
import Link from "next/link"

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <h2 className="mt-4 text-xl font-semibold">Page Not Found</h2>
          <p className="mt-2 text-muted-foreground">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90"
          >
            Go Back Home
          </Link>
        </div>
      </main>
    </Suspense>
  )
}
