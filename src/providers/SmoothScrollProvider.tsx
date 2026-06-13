import Lenis from 'lenis'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from 'react'
import { useLocation } from 'react-router-dom'

interface SmoothScrollContextValue {
  scrollToSection: (id: string) => void
  scrollToTop: (immediate?: boolean) => void
}

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null)

export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext)
  if (!context) {
    throw new Error('useSmoothScroll must be used within SmoothScrollProvider')
  }
  return context
}

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const isFirstMount = useRef(true)
  const location = useLocation()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.1,
    })

    lenisRef.current = lenis

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    // Only skip if we're on the same page navigating to a section
    // Still scroll to top on fresh page load with a hash
    if (location.hash && !isFirstMount.current) return
  
    if (isFirstMount.current) {
      isFirstMount.current = false
      window.scrollTo(0, 0) // use native scroll here, Lenis may not be ready yet
      lenisRef.current?.scrollTo(0, { immediate: true })
      return
    }
  
    lenisRef.current?.scrollTo(0, { immediate: false })
  }, [location.pathname, location.hash])

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id)
    if (!target) return

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -112, duration: 1.2 })
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const scrollToTop = useCallback((immediate = false) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate })
      return
    }

    window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' })
  }, [])

  return (
    <SmoothScrollContext.Provider value={{ scrollToSection, scrollToTop }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}