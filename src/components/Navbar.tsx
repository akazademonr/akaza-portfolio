import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useSmoothScroll } from '../providers/SmoothScrollProvider'

const scrollSections = ['work', 'contact'] as const

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => document.documentElement.classList.contains('dark')
  )
  const [activeSection, setActiveSection] = useState<string>('work')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { scrollToSection } = useSmoothScroll()
  const reduceMotion = useReducedMotion()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) return

    const sections = scrollSections
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isHome])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    if (!mobileOpen) return
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false)
  }, [location.pathname, mobileOpen])

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
    document.documentElement.classList.toggle('dark')
  }

  const goToSection = (id: string) => {
    setMobileOpen(false)
    if (isHome) {
      scrollToSection(id)
      setActiveSection(id)
      return
    }
    navigate(`/#${id}`)
  }

  const isWorkActive = isHome && activeSection === 'work'
  const isContactActive = isHome && activeSection === 'contact'

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className={`sticky top-6 z-50 hidden md:flex items-center w-fit mx-auto mt-8 gap-1 p-1.5 rounded-full border transition-all duration-500
          bg-white/75 dark:bg-gray-900/75 backdrop-blur-2xl
          border-gray-100/80 dark:border-gray-700/80
          ${scrolled ? 'premium-shadow dark:premium-shadow-dark scale-[1.01]' : 'shadow-lg'}`}
      >
        <button
          type="button"
          onClick={() => goToSection('work')}
          className={`relative px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 z-10 cursor-pointer ${
            isWorkActive ? 'text-white dark:text-black' : 'text-black dark:text-white'
          }`}
        >
          {isWorkActive && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-black dark:bg-white rounded-full z-[-1]"
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />
          )}
          Work
        </button>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 z-10 ${
              isActive ? 'text-white dark:text-black' : 'text-black dark:text-white'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-black dark:bg-white rounded-full z-[-1]"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              About
            </>
          )}
        </NavLink>

        <button
          type="button"
          onClick={() => goToSection('contact')}
          className={`relative px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 z-10 cursor-pointer ${
            isContactActive ? 'text-white dark:text-black' : 'text-black dark:text-white'
          }`}
        >
          {isContactActive && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-black dark:bg-white rounded-full z-[-1]"
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />
          )}
          Contact
        </button>

        <div className="w-px h-8 bg-gray-200 dark:bg-gray-700 mx-2 transition-colors duration-300" />

        <button
          type="button"
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className="p-3.5 mr-2 text-black dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <motion.div
            key={isDarkMode ? 'sun' : 'moon'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </motion.div>
        </button>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.div
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className={`md:hidden sticky top-4 z-50 flex items-center justify-between mx-4 mt-4 px-4 py-3 rounded-2xl border transition-all duration-500
          bg-white/75 dark:bg-gray-900/75 backdrop-blur-2xl
          border-gray-100/80 dark:border-gray-700/80
          ${scrolled ? 'premium-shadow dark:premium-shadow-dark' : 'shadow-lg'}`}
      >
        {/* Logo / Brand */}
        <span
          className="font-bold text-lg text-black dark:text-white"
          style={{ fontFamily: 'Acorn, sans-serif' }}
        >
          Akaza
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 text-black dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <motion.div
              key={isDarkMode ? 'sun' : 'moon'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed top-20 left-4 right-4 z-40 rounded-2xl border p-3 flex flex-col gap-1
              bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl
              border-gray-100/80 dark:border-gray-700/80 shadow-xl"
          >
            <button
              type="button"
              onClick={() => goToSection('work')}
              className={`w-full text-left px-5 py-3.5 rounded-xl font-semibold text-base transition-colors duration-200 ${
                isWorkActive
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Work
            </button>

            <NavLink
              to="/about"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `w-full px-5 py-3.5 rounded-xl font-semibold text-base transition-colors duration-200 ${
                  isActive
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`
              }
            >
              About
            </NavLink>

            <button
              type="button"
              onClick={() => goToSection('contact')}
              className={`w-full text-left px-5 py-3.5 rounded-xl font-semibold text-base transition-colors duration-200 ${
                isContactActive
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}