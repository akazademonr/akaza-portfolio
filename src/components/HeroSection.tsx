import { motion, useReducedMotion } from 'framer-motion'
import HeroButton from './HeroButton'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const headingClass = "font-bold m-0 leading-none text-[48px] sm:text-[72px] md:text-[90px] lg:text-[117px]"

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <section className="text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16 mb-16 sm:mb-20 lg:mb-24 text-black dark:text-white px-4">
        <div>
          <h1 className={headingClass} style={{ fontFamily: 'Acorn, sans-serif' }}>
            Hi. I'm Akaza
          </h1>
          <h1 className={headingClass} style={{ fontFamily: 'Acorn, sans-serif' }}>
            FullStack Dev.
          </h1>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto dark:text-gray-300 px-4 sm:px-8 mt-4">
          I love building seamless web and mobile experiences that look great and work perfectly. I specialize in creating user-friendly apps that are fast, accessible, and well-designed.
        </p>
        <HeroButton />
      </section>
    )
  }

  return (
    <section className="text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16 mb-16 sm:mb-20 lg:mb-24 text-black dark:text-white px-4">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.h1
          variants={item}
          className={headingClass}
          style={{ fontFamily: 'Acorn, sans-serif' }}
        >
          Hi. I'm Akaza
        </motion.h1>
        <motion.h1
          variants={item}
          className={`${headingClass} bg-gradient-to-r from-black via-neutral-700 to-black dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-transparent`}
          style={{ fontFamily: 'Acorn, sans-serif' }}
        >
          FullStack Dev.
        </motion.h1>
        <motion.p
          variants={item}
          className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto dark:text-gray-300 px-4 sm:px-8 mt-4"
        >
          I love building seamless web and mobile experiences that look great and work perfectly. I
          specialize in creating user-friendly apps that are fast, accessible, and well-designed.
        </motion.p>
        <motion.div variants={item}>
          <HeroButton />
        </motion.div>
      </motion.div>
    </section>
  )
}