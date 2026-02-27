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
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="relative flex flex-col md:flex-row md:gap-0">
          {/* Left panel */}
          <div
            className="group relative isolate flex h-[300px] w-full cursor-pointer flex-col items-start gap-6 overflow-hidden p-6 md:h-[600px] md:w-1/2 md:p-10 md:transition-[width] hover:md:w-2/3">
            <img
              src={LEFT_IMAGE}
              alt="Lectura de tarot"
              className="absolute inset-0 z-0 h-full w-full rounded-t-[20px] object-cover md:rounded-2xl"
            />
            <div
              className="md:backdrop-blur-0 md:group-hover:backdrop-blur-0 absolute inset-0 z-10 rounded-t-[20px] bg-linear-to-b from-black/40 to-black/30 backdrop-filter transition-all duration-500 ease-out group-hover:from-black/30 group-hover:to-black/20 group-hover:backdrop-blur-[2px] md:rounded-2xl md:from-black/40 md:to-black/30 md:transition-colors md:duration-300 group-hover:md:from-black/50 group-hover:md:to-black/40" />
            <div className="relative z-20 flex flex-col items-start gap-6">
              <Button
                variant="outline"
                className="rounded-full border-white/20 bg-background/10 text-white hover:bg-background/20">
                CRM Software
              </Button>
              <h1 className="text-3xl font-bold text-white md:text-5xl">
                Streamline Sales
              </h1>
              <p className="max-w-md text-left text-white/90">
                Streamline your sales process with our innovative CRM software.
                Manage leads, track interactions, and boost your sales efficiency.
              </p>
            </div>
          </div>

          {/* Desktop divider - only visible on desktop */}
          <div className="relative hidden h-[600px] w-5 bg-background md:block">
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
            className="group relative isolate flex h-[300px] w-full cursor-pointer flex-col items-start gap-6 overflow-hidden p-6 md:h-[600px] md:w-1/2 md:items-end md:p-10 md:transition-[width] hover:md:w-2/3"
            onClick={() => {
              console.log("click");
            }}>
            <img
              src={RIGHT_IMAGE}
              alt="Cristales y energia"
              className="absolute inset-0 z-0 h-full w-full rounded-b-[20px] object-cover md:rounded-2xl"
            />
            <div
              className="md:backdrop-blur-0 md:group-hover:backdrop-blur-0 absolute inset-0 z-10 rounded-b-[20px] bg-linear-to-t from-black/40 to-black/30 backdrop-filter transition-all duration-500 ease-out group-hover:from-black/30 group-hover:to-black/20 group-hover:backdrop-blur-[2px] md:rounded-2xl md:from-black/40 md:to-black/30 md:transition-colors md:duration-300 group-hover:md:from-black/50 group-hover:md:to-black/40" />
            <div className="relative z-20 flex flex-col items-start gap-6 md:items-end">
              <Button
                variant="outline"
                className="rounded-full border-white/20 bg-background/10 text-white hover:bg-background/20">
                Analytics Suite
              </Button>
              <h1
                className="text-left text-3xl font-bold text-white md:text-right md:text-5xl">
                Measure Success
              </h1>
              <p className="max-w-md text-left text-white/90 md:text-right">
                Enhance customer satisfaction and retention with our powerful CRM
                tools. Analyze data and make informed decisions to drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature149 };
