import { motion } from 'framer-motion'

export type ProjectFilter = 'All' | 'Web' | 'Mobile'

interface FilterTabsProps {
  active: ProjectFilter
  onChange: (filter: ProjectFilter) => void
}

const filters: ProjectFilter[] = ['All', 'Web', 'Mobile']

export default function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div
      className="inline-flex items-center gap-1.5 mt-12 p-1.5 rounded-full
        bg-white/60 dark:bg-gray-900/60 
        backdrop-blur-xl 
        border border-gray-100 dark:border-gray-700
        shadow-[0_8px_32px_0_rgba(0,0,0,0.06),inset_0_1px_1.5px_rgba(255,255,255,0.4)]
        dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)]
        transition-all duration-300"
      style={{ fontFamily: 'Chillax, sans-serif' }}
    >
      {filters.map((filter) => {
        const isActive = active === filter
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`relative text-[15px] md:text-base font-semibold px-6 py-2.5 rounded-full transition-colors duration-300 cursor-pointer z-10 select-none ${
              isActive
                ? 'text-white dark:text-black font-bold'
                : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterTab"
                className="absolute inset-0 rounded-full z-[-1]
                  bg-gradient-to-b from-gray-900 to-black 
                  dark:from-white dark:to-gray-100 
                  shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                  dark:shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 26,
                }}
              />
            )}
            {filter}
          </button>
        )
      })}
    </div>
  )
}
