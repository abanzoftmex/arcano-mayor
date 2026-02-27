import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero55 = ({
  className
}) => {
  return (
    <section className={cn("relative py-32 lg:py-40", className)}>
      <div className="container">
        <div className="flex flex-col items-center gap-10 text-center">
          <a
            href="#servicios"
            className="flex items-center gap-2 rounded-full px-2 py-1 text-sm transition-colors hover:bg-muted">
            <Badge>Nueva</Badge>
            Lectura inicial de 15 minutos
            <ArrowRight className="h-auto w-4" />
          </a>
          <h1 className="text-4xl font-semibold lg:text-8xl">Encuentra la paz mental y conócete mejor a ti mismo.</h1>
          <p className="max-w-2xl text-base text-muted-foreground lg:text-lg">
            Sesiones personalizadas para amor, trabajo, finanzas y crecimiento espiritual.
            Elige entre consulta en vivo, reporte escrito o guia mensual.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#servicios">Ver servicios</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contacto">Reservar consulta</a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="#blog">Leer el blog</a>
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
