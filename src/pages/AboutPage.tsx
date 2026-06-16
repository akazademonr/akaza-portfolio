import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const paragraphVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const paragraphItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function AboutPage() {
  return (
    <main className="w-full max-w-3xl px-6 md:px-8 mt-16 mb-24 text-black dark:text-white">
      <ScrollReveal>
        <h1
          className="text-[clamp(3.5rem,7vw,6rem)] text-center leading-none mb-12 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent"
          style={{ fontFamily: 'Acorn, sans-serif' }}
        >
          About Me
        </h1>
      </ScrollReveal>

      <motion.div
        variants={paragraphVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        style={{ fontFamily: 'Chillax, sans-serif' }}
      >
        <motion.p variants={paragraphItem}>
          Hi, I'm Akaza — a full-stack developer who loves building seamless web and mobile
          experiences that look great and work perfectly.
        </motion.p>
        <motion.p variants={paragraphItem}>
          I specialize in creating user-friendly apps that are fast, accessible, and well-designed.
          From polished landing pages to full product builds, I focus on clean architecture,
          thoughtful UX, and reliable delivery.
        </motion.p>
        <motion.p variants={paragraphItem}>
          When I'm not coding, I'm exploring new tools, refining my craft, and looking for
          opportunities to collaborate on meaningful projects.
        </motion.p>
      </motion.div>
    </main>
  )
}
