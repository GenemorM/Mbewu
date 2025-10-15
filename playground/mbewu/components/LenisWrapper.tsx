'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface LenisWrapperProps {
  children: React.ReactNode
}

export default function LenisWrapper({ children }: LenisWrapperProps) {
  useEffect(() => {
    // Set up GSAP ScrollTrigger defaults
    ScrollTrigger.defaults({
      scroller: window,
    })

    return () => {
      ScrollTrigger.killAll()
    }
  }, [])

  return (
    <div className="lenis">
      {children}
    </div>
  )
}