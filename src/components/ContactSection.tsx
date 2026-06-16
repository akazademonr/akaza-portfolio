import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaXTwitter, FaInstagram, FaGithub } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

const formContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const formItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting:', formData)
  }

  return (
    <section
      id="contact"
      className="w-full bg-white/80 dark:bg-[#16171D]/90 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 py-16 px-4 scroll-mt-28 backdrop-blur-sm"
    >
      <div className="max-w-3xl mx-auto flex flex-col">
        <ScrollReveal>
          <div className="mb-6">
            <h1
              className="text-[clamp(3rem,7vw,5.25rem)] text-black dark:text-white mt-12 text-center leading-none"
              style={{ fontFamily: 'Acorn, sans-serif' }}
            >
              Get in Touch
            </h1>
            <p className="text-neutral-700 dark:text-neutral-400 mt-10 leading-relaxed text-base sm:text-lg font-['Chillax'] text-left">
              I'm always interested in exploring new opportunities, collaborating, or exchanging
              ideas with like-minded individuals. Feel free to book a call or email me if you'd like
              to see my portfolio deck or to discuss a potential project.
            </p>
          </div>
        </ScrollReveal>

        <motion.form
          onSubmit={handleSubmit}
          variants={formContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex flex-col gap-4 font-['Chillax']"
        >
          <motion.div variants={formItem} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-4 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 rounded-2xl outline-none focus:border-neutral-400 dark:focus:border-neutral-600 focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)] dark:focus:shadow-[0_0_0_4px_rgba(255,255,255,0.04)] transition-all placeholder:text-neutral-400 text-[15px]"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-4 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 rounded-2xl outline-none focus:border-neutral-400 dark:focus:border-neutral-600 focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)] dark:focus:shadow-[0_0_0_4px_rgba(255,255,255,0.04)] transition-all placeholder:text-neutral-400 text-[15px]"
              required
            />
          </motion.div>

          <motion.textarea
            variants={formItem}
            placeholder="Write your Message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-5 py-4 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 rounded-2xl outline-none focus:border-neutral-400 dark:focus:border-neutral-600 focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)] dark:focus:shadow-[0_0_0_4px_rgba(255,255,255,0.04)] transition-all placeholder:text-neutral-400 resize-none text-[15px]"
            required
          />

          <motion.button
            variants={formItem}
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="w-full py-4 rounded-2xl cursor-pointer  text-[18px] tracking-wide text-white transition-all relative overflow-hidden bg-black dark:bg-neutral-900 border border-transparent dark:border-neutral-800 shadow-lg group"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none group-hover:opacity-15 transition-opacity" />
            <span className="relative z-10 font-['Chillax']">Send Message</span>
          </motion.button>
        </motion.form>

        <ScrollReveal delay={0.1}>
          <hr className="w-full border-neutral-100 dark:border-neutral-800/60 my-12" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <footer className="w-full flex flex-col items-center gap-6 text-neutral-500 dark:text-neutral-400 font-['Chillax'] text-sm">
            <div>
              <span>© MMXXVI • Ajibefun Emmanuel • All rights reserved</span>
            </div>

            <div className="flex items-center gap-6 text-xl text-neutral-600 dark:text-neutral-400">
              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <FaXTwitter size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                href="mailto:your-email@example.com"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <HiOutlineMail size={22} />
              </motion.a>
            </div>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  )
}
