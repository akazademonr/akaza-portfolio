import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  amount?: number
}

const directionOffset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: 48 },
  right: { x: -48 },
  none: {},
}

const premiumEase = [0.22, 1, 0.36, 1] as const

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  amount = 0.2,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion()
  const offset = directionOffset[direction]

  const variants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, x: 0, y: 0 },
        visible: { opacity: 1, x: 0, y: 0 },
      }
    : {
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.75, delay, ease: premiumEase },
        },
      }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: '0px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
