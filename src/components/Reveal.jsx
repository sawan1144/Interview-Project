"use client"

import { useEffect, useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Reveal({ children, className = "", delay = 0.5, instant = false }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    gsap.set(ref.current, { y: 100, opacity: 0 })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()

      gsap.to(ref.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: instant ? undefined : {
          trigger: ref.current,
          start: "top 90%",
          once: true,
        },
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === ref.current) {
          trigger.kill()
        }
      })
    }
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
