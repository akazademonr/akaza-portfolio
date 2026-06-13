import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import FilterTabs, { type ProjectFilter } from './FilterTabs'
import ProjectCard from './ProjectCard'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data/projects'

const premiumEase = [0.22, 1, 0.36, 1] as const

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All')

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.type === activeFilter)

  const showComingSoon = activeFilter === 'Mobile' && filteredProjects.length === 0

  return (
    <section id="work" className="w-full flex flex-col items-center scroll-mt-24 sm:scroll-mt-28">
      <SectionHeading>Projects</SectionHeading>
      <ScrollReveal delay={0.08}>
        <FilterTabs active={activeFilter} onChange={setActiveFilter} />
      </ScrollReveal>
      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8 mt-10 sm:mt-14 md:mt-16 mb-16 sm:mb-20 md:mb-24">
        <AnimatePresence mode="wait">
          {showComingSoon ? (
            <motion.div
              key="coming-soon"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.45, ease: premiumEase }}
              className="flex flex-col items-center justify-center py-14 sm:py-20 px-6 sm:px-8 rounded-3xl border border-dashed border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm"
              style={{ fontFamily: 'Chillax, sans-serif' }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-3">
                Coming Soon
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-center text-sm sm:text-base max-w-md">
                Mobile app projects are on the way. Check back soon for new releases.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-10 sm:gap-14 md:gap-16"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: premiumEase }}
                >
                  <ProjectCard
                    category={project.category}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    image={project.image}
                    link={project.link}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}