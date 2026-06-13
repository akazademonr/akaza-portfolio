import React from "react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  colorClass: string;
}

interface TechMarqueeProps {
  items: TechItem[];
  direction?: "left" | "right";
  speed?: number;
}

export const TechMarquee: React.FC<TechMarqueeProps> = ({
  items,
  direction = "left",
  speed = 12,
}) => {
  // Tripling the array elements ensures the loop never shows a blank gap
  const duplicatedItems = [...items, ...items, ...items];

  const isLeft = direction === "left";
  const animateX = isLeft ? [0, "-33.33%"] : ["-33.33%", 0];

  return (
    <div className="w-full py-2 overflow-hidden bg-transparent select-none">
      {/* Container with the fade gradient masks on the left and right edges */}
      <div className="flex w-full overflow-hidden mask-gradient rounded-xl">
        <motion.div
          animate={{ x: animateX }}
          transition={{
            ease: "linear",
            duration: speed,
            repeat: Infinity,
          }}
          className="flex gap-20 pr-20 items-center whitespace-nowrap min-w-max"
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className={`text-8xl md:text-9xl text-neutral-500 dark:text-neutral-500 
                         filter grayscale opacity-70
                         hover:filter-none hover:opacity-100 
                         transition-all duration-300 ease-out cursor-pointer
                         ${item.colorClass}`}
            >
              {item.icon}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};