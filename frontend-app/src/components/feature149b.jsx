"use client";;
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature149B = ({
  className
}) => {
  const LEFT_IMAGE =
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1600&q=80";
  const RIGHT_IMAGE =
    "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?auto=format&fit=crop&w=1600&q=80";

  return (
    <section className={cn("py-10 md:py-16 lg:py-20", className)}>
      <div className="container">
        <div className="relative flex flex-col md:flex-row md:gap-0">
          <div
            className="group relative isolate flex h-[280px] w-full cursor-pointer flex-col items-start gap-5 overflow-hidden p-5 md:h-[560px] md:w-1/2 md:gap-6 md:p-8 md:transition-[width] hover:md:w-2/3">
            <img
              src={LEFT_IMAGE}
              alt="Dijes de protección"
              className="absolute inset-0 z-0 h-full w-full rounded-t-[20px] object-cover brightness-[0.62] contrast-110 md:rounded-2xl"
            />
            <div
              className="absolute inset-0 z-10 rounded-t-[20px] bg-black/45 transition-colors duration-300 md:rounded-2xl group-hover:bg-black/55" />
            <div className="relative z-20 flex flex-col items-start gap-6">
              <Button
                variant="outline"
                className="rounded-full border-white/20 bg-background/10 text-white hover:bg-background/20">
                Protección energética
              </Button>
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Dijes de protección
              </h2>
              <p className="max-w-md text-left text-white/90">
                Elige dijes cargados con intención para resguardar tu energía y
                acompañarte en tu día a día.
              </p>
            </div>
          </div>

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

          <div className="group relative isolate flex h-[280px] w-full cursor-pointer flex-col items-start gap-5 overflow-hidden p-5 md:h-[560px] md:w-1/2 md:items-end md:gap-6 md:p-8 md:transition-[width] hover:md:w-2/3">
            <img
              src={RIGHT_IMAGE}
              alt="Baritas mágicas según numerología"
              className="absolute inset-0 z-0 h-full w-full rounded-b-[20px] object-cover brightness-[0.62] contrast-110 md:rounded-2xl"
            />
            <div
              className="absolute inset-0 z-10 rounded-b-[20px] bg-black/45 transition-colors duration-300 md:rounded-2xl group-hover:bg-black/55" />
            <div className="relative z-20 flex flex-col items-start gap-6 md:items-end">
              <Button
                variant="outline"
                className="rounded-full border-white/20 bg-background/10 text-white hover:bg-background/20">
                Numerología aplicada
              </Button>
              <h2
                className="text-left text-3xl font-bold text-white md:text-right md:text-5xl">
                Baritas mágicas
              </h2>
              <p className="max-w-md text-left text-white/90 md:text-right">
                Baritas seleccionadas de acuerdo con tu numerología para enfocar
                intención, rituales y manifestación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature149B };
