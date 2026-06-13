import { Globe, Smartphone, Layers, ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  category: string
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
}

export default function ProjectCard({
  category,
  title,
  description,
  tags,
  image,
  link,
}: ProjectCardProps) {
  const renderCategoryIcon = () => {
    const cat = category.toLowerCase()
    if (cat.includes('web')) {
      return <Globe size={14} className="text-gray-400 dark:text-gray-500" />
    }
    if (cat.includes('mobile') || cat.includes('app')) {
      return <Smartphone size={14} className="text-gray-400 dark:text-gray-500" />
    }
    return <Layers size={14} className="text-gray-400 dark:text-gray-500" />
  }

  return (
    <div
      className="group flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-12 bg-white/80 dark:bg-gray-900/50 rounded-3xl p-6 md:p-8 lg:p-10 border border-black/[0.05] dark:border-white/[0.08] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_24px_48px_rgba(0,0,0,0.25)] transition-all duration-500 backdrop-blur-sm"
      style={{ fontFamily: 'Chillax, sans-serif' }}
    >
      {/* Left — image */}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-[1.3/1] rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800/50 block"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
          />
        </a>
      ) : (
        <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-[1.3/1] rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800/50">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Right — content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4">
          {renderCategoryIcon()}
          {category}
        </div>

        <div className="flex items-center justify-between gap-4 mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h2>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full shrink-0
                bg-black text-white hover:bg-neutral-800 
                dark:bg-white dark:text-black dark:hover:bg-neutral-200
                shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.15)]
                transition-all duration-300 hover:scale-110 active:scale-95 group/btn"
              aria-label={`Visit ${title} website`}
            >
              <ArrowRight
                size={22}
                className="transition-transform duration-300 ease-out -rotate-45 group-hover:rotate-0"
              />
            </a>
          )}
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-[15px] leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-300 bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] rounded-full px-4 py-2 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}