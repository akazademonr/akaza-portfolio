import xuryaimg from '../assets/xuryathumbnail.png'
import harveyNashimg from '../assets/harveythumbnail.png'

export type ProjectType = 'Web' | 'Mobile'

export interface Project {
  type: ProjectType
  category: string
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
}

export const projects: Project[] = [
  {
    type: 'Web',
    category: 'Web App',
    title: 'Xurya',
    description:
      'A modern, responsive landing page build emphasizing aesthetic clarity and interface fluidity. Developed to showcase professional-grade UI/UX execution, focusing on responsive layouts and polished interactive components to drive user conversion and brand identity.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Web'],
    image: xuryaimg,
    link: 'https://xurya-landing-page.vercel.app/',
  },

  {
    type: 'Web',
    category: 'Web App',
    title: 'Harvey Nash',
    description:
      'A modern, responsive landing page build emphasizing aesthetic clarity and interface fluidity. Developed to showcase professional-grade UI/UX execution, focusing on responsive layouts and polished interactive components to drive user conversion and brand identity.',
    tags: ['Html', 'Css', 'Javascript'],
    image: harveyNashimg,
    link: 'https://harvey-nash-mu.vercel.app/',
  }
]
