import { Navbar11 } from "../navbar11";
import { Hero55 } from "../hero55";
import { Hero234 } from "../hero234";
import { Feature247 } from "../feature247";
import { PromoBanner2 } from "../promo-banner2";

export function HomeBlocks() {
  return (
    <>
      <PromoBanner2
        className="fixed top-0 z-[1000]"
        message="Lecturas y tienda espiritual"
        discount="10% en tu primera compra"
        link="#tienda"
        linkText="Ver ofertas"
      />
      <Navbar11 className="top-10" />
      <Hero55 />
      <Hero234 />
      <Feature247 />
    </>
  );
}
