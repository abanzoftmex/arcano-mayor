"use client";;
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature149 = ({
  className
}) => {
  const LEFT_IMAGE =
    "https://images.unsplash.com/photo-1600429991827-5224817554f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RIGHT_IMAGE =
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80";

  return (
    <section className={cn("py-10 md:py-16 lg:py-20", className)}>
      <div className="container">
        <div className="relative flex flex-col md:flex-row md:gap-0">
          {/* Left panel */}
          <div
            className="group relative isolate flex h-[280px] w-full cursor-pointer flex-col items-start gap-5 overflow-hidden p-5 md:h-[560px] md:w-1/2 md:gap-6 md:p-8 md:transition-[width] hover:md:w-2/3">
            <img
              src={LEFT_IMAGE}
              alt="Lectura de tarot"
              className="absolute inset-0 z-0 h-full w-full rounded-t-[20px] object-cover brightness-[0.62] contrast-110 md:rounded-2xl"
            />
            <div
              className="absolute inset-0 z-10 rounded-t-[20px] bg-linear-to-b from-black/80 via-black/72 to-black/62 transition-colors duration-300 md:rounded-2xl group-hover:md:from-black/85 group-hover:md:via-black/78 group-hover:md:to-black/68" />
            <div className="relative z-20 flex flex-col items-start gap-6">
              <Button
                variant="outline"
                className="rounded-full border-white/20 bg-background/10 text-white hover:bg-background/20">
                Lecturas personalizadas
              </Button>
              <h1 className="text-3xl font-bold text-white md:text-5xl">
                Lectura de tarot
              </h1>
              <p className="max-w-md text-left text-white/90">
                Elige una sesion enfocada en amor, trabajo, decisiones importantes
                y crecimiento espiritual con guia clara y cercana.
              </p>
            </div>
          </div>

          {/* Desktop divider - only visible on desktop */}
          <div className="relative hidden h-[560px] w-5 bg-background md:block">
            <div
              className="absolute top-0 left-[-40px] h-[40px] w-[40px] rounded-[1rem] shadow-[10px_-10px_0_0_var(--background)]" />
            <div
              className="absolute top-0 right-[-40px] h-[40px] w-[40px] rounded-[1rem] shadow-[-10px_-10px_0_0_var(--background)]" />
            <div
              className="absolute bottom-0 left-[-40px] h-[40px] w-[40px] rounded-[1rem] shadow-[10px_10px_0_0_var(--background)]" />
            <div
              className="absolute right-[-40px] bottom-0 h-[40px] w-[40px] rounded-[1rem] shadow-[-10px_10px_0_0_var(--background)]" />
          </div>

          {/* Right panel */}
          <div
            className="group relative isolate flex h-[280px] w-full cursor-pointer flex-col items-start gap-5 overflow-hidden p-5 md:h-[560px] md:w-1/2 md:items-end md:gap-6 md:p-8 md:transition-[width] hover:md:w-2/3"
            onClick={() => {
              console.log("click");
            }}>
            <img
              src={RIGHT_IMAGE}
              alt="Cristales y energia"
              className="absolute inset-0 z-0 h-full w-full rounded-b-[20px] object-cover brightness-[0.62] contrast-110 md:rounded-2xl"
            />
            <div
              className="absolute inset-0 z-10 rounded-b-[20px] bg-linear-to-t from-black/80 via-black/72 to-black/62 transition-colors duration-300 md:rounded-2xl group-hover:md:from-black/85 group-hover:md:via-black/78 group-hover:md:to-black/68" />
            <div className="relative z-20 flex flex-col items-start gap-6 md:items-end">
              <Button
                variant="outline"
                className="rounded-full border-white/20 bg-background/10 text-white hover:bg-background/20">
                Tienda espiritual
              </Button>
              <h1
                className="text-left text-3xl font-bold text-white md:text-right md:text-5xl">
                Cuarzos y mas productos
              </h1>
              <p className="max-w-md text-left text-white/90 md:text-right">
                Encuentra cuarzos, velas, inciensos y herramientas energeticas
                para acompanar tus rituales y tu bienestar diario.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature149 };
