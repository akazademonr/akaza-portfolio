import React from "react";
import { TechMarquee } from "./TechMarquee";
import ScrollReveal from "./ScrollReveal";
import { 
  SiReact, SiNextdotjs, SiHtml5, SiPython, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiPrisma,
  SiExpo, SiPnpm
} from "react-icons/si";
import { TbRoute } from "react-icons/tb";
import { FaPaw } from "react-icons/fa6"; 

export const TechStackSection: React.FC = () => {
  const fullStackItems = [
    { name: "React", icon: <SiReact />, colorClass: "hover:text-[#61DAFB]" },
    { name: "Next.js", icon: <SiNextdotjs />, colorClass: "hover:text-black dark:hover:text-white" },
    { name: "HTML5", icon: <SiHtml5 />, colorClass: "hover:text-[#E34F26]" },
    { name: "Python", icon: <SiPython />, colorClass: "hover:text-[#3776AB]" },
    { name: "TypeScript", icon: <SiTypescript />, colorClass: "hover:text-[#3178C6]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, colorClass: "hover:text-[#06B6D4]" },
    { name: "Node.js", icon: <SiNodedotjs />, colorClass: "hover:text-[#339933]" },
    { name: "Express", icon: <SiExpress />, colorClass: "hover:text-black dark:hover:text-white" },
    { name: "PostgreSQL", icon: <SiPostgresql />, colorClass: "hover:text-[#4169E1]" },
    { name: "MongoDB", icon: <SiMongodb />, colorClass: "hover:text-[#47A248]" },
    { name: "Prisma", icon: <SiPrisma />, colorClass: "hover:text-[#2D3748] dark:hover:text-white" },
  ];

  const mobileItems = [
    { name: "React Native", icon: <SiReact />, colorClass: "hover:text-[#61DAFB]" },
    { name: "TypeScript", icon: <SiTypescript />, colorClass: "hover:text-[#3178C6]" },
    { name: "Expo", icon: <SiExpo />, colorClass: "hover:text-black dark:hover:text-white" },
    { name: "Expo Router", icon: <TbRoute />, colorClass: "hover:text-[#000000] dark:hover:text-[#F43F5E]" },
    { name: "Zustand", icon: <FaPaw />, colorClass: "hover:text-[#4538CA] dark:hover:text-[#AB7A5E]" },
    { name: "pnpm", icon: <SiPnpm />, colorClass: "hover:text-[#F69220]" },
  ];

  return (
    <section className="w-full py-20 bg-white dark:bg-[#16171D] overflow-hidden transition-colors duration-300 flex flex-col gap-16">
      
      <div className="w-full flex flex-col gap-6">
        <ScrollReveal>
          <div className="w-full text-center">
            <h2 className="text-xl md:text-2xl font-bold tracking-widest text-neutral-800 dark:text-neutral-200 uppercase font-['Chillax']">
              Full-Stack Development
            </h2>
          </div>
        </ScrollReveal>
        
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-12">
          <TechMarquee items={fullStackItems} direction="left" speed={16} />
        </div>
      </div>

      <div className="w-full flex flex-col gap-6">
        <ScrollReveal delay={0.08}>
          <div className="w-full text-center">
            <h2 className="text-xl md:text-2xl font-bold tracking-widest text-neutral-800 dark:text-neutral-200 uppercase font-['Chillax']">
              Mobile Development
            </h2>
          </div>
        </ScrollReveal>

        <div className="w-full max-w-4xl mx-auto px-6 sm:px-12">
          <TechMarquee items={mobileItems} direction="right" speed={10} />
        </div>
      </div>

    </section>
  );
};