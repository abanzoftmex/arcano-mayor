"use client";;
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const galleryImages = [
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
  ],
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
  ],
];

const Hero234 = ({
  className
}) => {
  return (
    <section
      className={cn("relative h-[68vh] min-h-[460px] overflow-hidden bg-background md:h-[76vh] lg:h-[82vh]", className)}>
      <div className="absolute inset-0 flex flex-col justify-center gap-3 md:gap-4">
        {galleryImages.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-4 will-change-transform"
            animate={{
              x: rowIndex === 1 ? [-1920, 0] : [0, -1920],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}>
            {[...row, ...row, ...row].map((image, imageIndex) => (
              <motion.div
                key={`${rowIndex}-${imageIndex}`}
                className="relative flex-shrink-0 overflow-hidden rounded-lg"
                style={{
                  width: rowIndex === 1 ? "260px" : "220px",
                  height: rowIndex === 1 ? "320px" : "280px",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}>
                <img
                  src={image}
                  alt={`Gallery image ${imageIndex + 1}`}
                  className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
      {/* Left side masks */}
      <div
        className="absolute top-0 left-0 z-10 h-full w-[160px] bg-gradient-to-r from-background to-transparent md:w-[200px]" />
      {/* Right side masks */}
      <div
        className="absolute top-0 right-0 z-10 h-full w-[160px] bg-gradient-to-l from-background to-transparent md:w-[200px]" />
    </section>
  );
};

export { Hero234 };
