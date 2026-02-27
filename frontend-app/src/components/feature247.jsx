"use client";;
import { motion, useScroll, useTransform } from "motion/react";
import React from "react";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Feature247 = () => {
  return (
    <section className="pb-32">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex w-full">
          <TextReveal
            title="Servicios y tienda espiritual"
            className="items-start justify-start text-left">
            Explora todo lo que tenemos para ti: lectura de tarot, cuarzos, carta astral,
            numerologia, cursos y muchos servicios mas para acompanar tu proceso.
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export { Feature247 };

const TextReveal = ({
  children,
  title,
  className,
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[120vh] w-full", className)}>
      <div
        className="sticky top-20 mx-auto flex h-auto items-center bg-transparent px-4 py-10">
        <div className="flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div ref={targetRef} className="flex flex-col justify-center">
          <span
            className="text-left text-lg font-medium tracking-tight text-foreground">
            {title}
          </span>
          <span
            className={cn(
              "flex flex-wrap p-4 text-xl font-semibold text-black/20 dark:text-white/20",
              className
            )}>
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </span>
          </div>
          <div className="md:pr-8">
            <Button size="lg" asChild>
              <a href="#tienda">Ver tienda</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className="text-black dark:text-white">
        {children}
      </motion.span>
    </span>
  );
};
