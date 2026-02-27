import { Eye, Keyboard, Volume2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const FEATURES = [
  {
    title: "Lecturas por enfoque",
    summary:
      "Elige sesiones orientadas a amor, trabajo, decisiones personales o crecimiento espiritual, con guía clara y práctica.",
    icon: Keyboard,
  },
  {
    title: "Agenda rápida de citas",
    summary:
      "Reserva tu consulta en minutos y selecciona el formato que prefieras: sesión en vivo, seguimiento o lectura personalizada.",
    icon: Volume2,
  },
  {
    title: "Tienda espiritual",
    summary:
      "Explora cuarzos, velas, inciensos, dijes de protección y más herramientas energéticas para tu día a día.",
    icon: Eye,
  },
];

const FeatureItem = ({
  title,
  summary,
  icon: Icon
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Icon className="size-7 stroke-muted-foreground" />
      <div className="max-w-xs text-center text-xl font-semibold">{title}</div>
      <div className="max-w-lg text-center text-base text-muted-foreground">
        {summary}
      </div>
    </div>
  );
};

const Feature217a = ({
  className
}) => {
  return (
    <section className={cn("", className)}>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-10 after:absolute after:inset-0 after:z-10 after:block after:size-full after:bg-black/40 after:content-[''] md:py-16 xl:px-6 xl:py-28"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?auto=format&fit=crop&w=2000&q=80')",
        }}>
        <div className="relative z-20 container">
          <div className="flex flex-col items-center justify-center gap-12 text-center">
            <div className="flex max-w-4xl flex-col gap-5">
              <h2 className="text-2xl tracking-tight text-white md:text-7xl">
                Tu espacio de guía y energía
              </h2>
              <div className="text-lg font-medium tracking-tight text-white">
                Conecta con tu intuición a través de lecturas de tarot, agenda
                tus citas y encuentra productos seleccionados para proteger y
                armonizar tu energía.
              </div>
            </div>
            <div className="max-w-xl">
              <AspectRatio
                ratio={0.80239521}
                className="w-full overflow-hidden rounded-xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600429991827-5224817554f8?auto=format&fit=crop&w=900&q=80"
                  alt=""
                  className="block size-full object-cover object-center" />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid items-start gap-8 py-20 lg:grid-cols-3">
          {FEATURES.map((item) => (
            <FeatureItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature217a };
