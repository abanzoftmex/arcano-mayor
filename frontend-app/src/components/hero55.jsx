import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero55 = ({
  className
}) => {
  return (
    <section className={cn("relative pt-32 lg:pt-40", className)}>
      <div className="container">
        <div className="flex flex-col items-center gap-10 text-center">
          <a
            href="#servicios"
            className="flex items-center gap-2 rounded-full px-2 py-1 text-sm transition-colors hover:bg-muted">
            <Badge>Agenda online</Badge>
            Reserva tu cita en segundos
            <ArrowRight className="h-auto w-4" />
          </a>
          <h1 className="text-4xl font-semibold lg:text-8xl">Descubre tu camino, conecta con tu energía</h1>
          <p className="max-w-2xl text-base text-muted-foreground lg:text-lg">
            Reserva lecturas personalizadas y adquiere productos esotéricos desde nuestra tienda en línea.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#tienda">Comprar productos</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#servicios">Agendar cita</a>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[50%_0] bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/shadow-overlay.png')] bg-no-repeat"></div>
    </section>
  );
};

export { Hero55 };
