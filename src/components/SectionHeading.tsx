import ScrollReveal from './ScrollReveal'

interface SectionHeadingProps {
  children: string
  className?: string
}

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <h1
        className={`text-[100px] text-black dark:text-white mt-12 text-center leading-none ${className}`}
        style={{ fontFamily: 'Acorn, sans-serif' }}
      >
        {children}
      </h1>
    </ScrollReveal>
  )
}
