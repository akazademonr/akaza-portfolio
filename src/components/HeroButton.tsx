import { motion } from 'framer-motion'
import { useSmoothScroll } from '../providers/SmoothScrollProvider'

export default function HeroButton() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <motion.button
      type="button"
      onClick={() => scrollToSection('contact')}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      className="px-8 py-3.5 mt-8 cursor-pointer bg-black text-white rounded-full text-lg
        shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.22)]
        transition-shadow duration-300
        dark:bg-white dark:text-black dark:shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
    >
      Get in Touch
    </motion.button>
  )
}
