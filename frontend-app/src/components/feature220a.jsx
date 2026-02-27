import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const stats = [
  {
    number: "12+",
    text: "cursos activos en la plataforma",
  },
  {
    number: "350+",
    text: "alumnos formados en la comunidad",
  },
  {
    number: "4.8/5",
    text: "valoración promedio de los cursos",
  },
];

const Feature220a = ({
  className
}) => {
  return (
    <section
      className={cn(
        "bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat py-24",
        className
      )}>
      <div className="container max-w-5xl">
        {/* Main Content */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="text-center text-lg font-medium tracking-tight text-foreground">
            Escuela espiritual
          </span>
          <h2
            className="mx-auto mt-3 max-w-4xl text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Cursos para aprender
            <span className="block text-primary">tarot, numerología y más</span>
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground md:text-lg">
            Aprende paso a paso con clases prácticas para desarrollar tu
            intuición, interpretar cartas y aplicar herramientas energéticas en
            tu día a día.
          </p>
          <Button size="lg" className="mt-8 px-8 py-6 text-lg">Ver cursos</Button>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-3xl">
            <video
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-8.mp4"
              className="block size-full object-cover object-center"
              loop
              autoPlay
              muted
              controls={false} />
          </AspectRatio>
        </div>

        {/* Stats */}
        <div className="rounded-2xl bg-card p-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((item, i) => (
              <div className="text-center" key={`stats-${i}`}>
                <div className="mb-2 text-4xl font-bold text-primary">
                  {item.number}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature220a };
