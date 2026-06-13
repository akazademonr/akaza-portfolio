import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import { TechStackSection } from '../components/TechStack'
import { ContactSection } from '../components/ContactSection'
import { useSmoothScroll } from '../providers/SmoothScrollProvider'

export default function HomePage() {
  const { hash } = useLocation()
  const { scrollToSection } = useSmoothScroll()

  useEffect(() => {
    if (!hash) return

    const id = hash.replace('#', '')
    const timer = window.setTimeout(() => scrollToSection(id), 200)
    return () => window.clearTimeout(timer)
  }, [hash, scrollToSection])

  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SectionHeading>Tech Stack</SectionHeading>
      <ScrollReveal delay={0.1}>
        <TechStackSection />
      </ScrollReveal>
      <ContactSection />
    </>
  )
}
