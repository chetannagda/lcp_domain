"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"
import type { JSX } from "react"

type RevealProps = {
  as?: keyof JSX.IntrinsicElements
  className?: string
  delayMs?: number
  children: React.ReactNode
}

export default function Reveal({ as = "div", className = "", delayMs = 0, children }: RevealProps) {
  const Comp = as as any
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            timeoutId = setTimeout(() => setVisible(true), delayMs)
            io.disconnect()
          }
        })
      },
      { threshold: 0.12 },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [delayMs])

  return (
    <Comp
      ref={ref as any}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className || "",
      ].join(" ")}
    >
      {children}
    </Comp>
  )
}
