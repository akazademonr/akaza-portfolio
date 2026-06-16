import ScrollReveal from './ScrollReveal'

interface SectionHeadingProps {
  children: string
  className?: string
}

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <h1
        className={`text-[clamp(3.5rem,6.8vw,6rem)] text-black dark:text-white mt-12 text-center leading-none ${className}`}
        style={{ fontFamily: 'Acorn, sans-serif' }}
      >
        {children}
      </h1>
    </ScrollReveal>
  )
}
