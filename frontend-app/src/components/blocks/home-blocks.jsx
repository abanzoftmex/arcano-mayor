import { Navbar11 } from "../navbar11";
import { Hero55 } from "../hero55";
import { Hero234 } from "../hero234";
import { Feature247 } from "../feature247";
import { Feature149 } from "../feature149";
import { Feature149B } from "../feature149b";
import { Feature217a } from "../feature217a";
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
      <Feature149 className="pt-10 pb-5 md:pt-16 md:pb-5 lg:pt-20 lg:pb-5" />
      <Feature149B className="pt-0 pb-10 md:pt-0 md:pb-16 lg:pt-0 lg:pb-20" />
      <Feature217a />
    </>
  );
}
