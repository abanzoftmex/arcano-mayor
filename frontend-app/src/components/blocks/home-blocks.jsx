import { ArrowRight, Star } from "lucide-react";
import { Navbar11 } from "../navbar11";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const stats = [
  { value: "2.8k+", label: "lecturas completadas" },
  { value: "4.9/5", label: "valoracion promedio" },
  { value: "24h", label: "entrega de guia" },
  { value: "98%", label: "clientes recurrentes" }
];

const services = [
  { title: "Lectura 1:1", copy: "Sesion de 60 minutos con plan de accion y seguimiento." },
  { title: "Carta natal", copy: "Interpretacion completa con recomendaciones para el mes." },
  { title: "Ritual guiado", copy: "Secuencia de 7 dias con audios, prompts y ejercicios." }
];

const products = [
  { title: "Mazo tarot luminoso", price: "$54 USD", image: "https://images.unsplash.com/photo-1604882737271-0ed3b6ec2d4f?auto=format&fit=crop&w=900&q=80" },
  { title: "Set de cristales", price: "$39 USD", image: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?auto=format&fit=crop&w=900&q=80" },
  { title: "Incienso lunar", price: "$24 USD", image: "https://images.unsplash.com/photo-1611071521082-6c3fb0f3e7f5?auto=format&fit=crop&w=900&q=80" },
  { title: "Diario de sombra", price: "$31 USD", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80" }
];

export function HomeBlocks() {
  return (
    <>
      <Navbar11 />
      <div className="mx-auto w-[min(1200px,92%)] py-10 pt-24 text-foreground">
        <section className="grid gap-5 rounded-2xl border border-border bg-card/80 p-6 shadow-sm md:grid-cols-2 md:p-8">
        <div>
          <Badge variant="outline" className="mb-4">Arcano Astral</Badge>
          <h1 className="mb-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Home en React con bloques shadcn/ui</h1>
          <p className="max-w-xl text-sm text-muted-foreground md:text-base">
            Esta portada ahora se renderiza con React y Tailwind, usando componentes de shadcn/ui para un flujo de bloques reutilizable.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#catalogo"><Button>Ver catalogo <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
            <a href="#features"><Button variant="outline">Explorar servicios</Button></a>
          </div>
        </div>
        <Card className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1513521776515-9277da37634d?auto=format&fit=crop&w=1400&q=80"
            alt="Cartas de tarot sobre una mesa"
            className="h-full min-h-[300px] w-full object-cover"
          />
        </Card>
        </section>

        <section className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <Card key={item.label}>
              <CardContent className="p-5">
                <div className="text-2xl font-semibold tracking-tight">{item.value}</div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section id="features" className="mt-12">
          <div className="mb-4 flex items-center gap-2">
            <Badge>Servicios</Badge>
            <span className="text-sm text-muted-foreground">Bloques tipo feature</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="catalogo" className="mt-12">
          <div className="mb-4 flex items-center gap-2">
            <Badge>Catalogo</Badge>
            <span className="text-sm text-muted-foreground">Bloques de producto</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((item) => (
              <Card key={item.title} className="overflow-hidden">
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                <CardContent className="p-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="testimonios" className="mt-12 grid gap-4 md:grid-cols-3">
          {["Ana R.", "Luis M.", "Carla V."].map((name) => (
            <Card key={name}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Star className="h-4 w-4" />
                  5.0
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  La experiencia fue clara, ordenada y con recomendaciones accionables para mi proceso.
                </p>
                <p className="mt-3 text-sm font-medium">{name}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section id="contacto" className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:flex md:items-center md:justify-between md:p-8">
          <div>
            <Badge variant="outline" className="mb-3">Siguiente paso</Badge>
            <h2 className="text-2xl font-semibold tracking-tight">Listo para insertar mas bloques de shadcnblocks</h2>
            <p className="mt-2 text-sm text-muted-foreground">Ya puedes iterar por secciones y mantener consistencia visual/componentes.</p>
          </div>
          <a href="#features" className="mt-4 inline-block md:mt-0">
            <Button size="lg">Continuar</Button>
          </a>
        </section>
      </div>
    </>
  );
}
