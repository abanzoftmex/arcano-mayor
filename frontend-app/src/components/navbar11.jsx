"use client";
import {
  MenuIcon,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { Fragment, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

const LOGO = {
  url: "/",
  title: "LOGO",
};

const NAVIGATION = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Servicios",
    url: "#servicios",
  },
  {
    title: "Tienda",
    url: "#tienda",
  },
  {
    title: "Contacto",
    url: "#contacto",
  },
  {
    title: "Blog",
    url: "#blog",
  },
];

const DESKTOP_BUTTONS = [
  {
    label: "Carrito",
    icon: ShoppingCart,
    isPrimary: false,
    url: "#carrito",
  },
  {
    label: "Mi cuenta",
    icon: User,
    isPrimary: true,
    url: "#mi-cuenta",
  },
];

const MOBILE_BUTTONS = [
  {
    label: "Mi cuenta",
    icon: User,
    isPrimary: true,
    url: "#mi-cuenta",
  },
  {
    label: "Carrito",
    icon: ShoppingCart,
    isPrimary: false,
    url: "#carrito",
  },
];

const MOBILE_BREAKPOINT = 1024;

const Navbar11 = ({
  className
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleMobileMenu = () => {
    const nextOpen = !open;
    setOpen(nextOpen);
  };

  return (
    <Fragment>
      <section
        className={cn(
          "pointer-events-auto fixed top-0 z-[999] flex h-16 w-full items-center justify-center border-b border-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 text-sm font-medium text-foreground",
          className
        )}>
        <div className="container">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <a
                href={LOGO.url}
                className="flex items-center text-2xl font-semibold leading-none tracking-wide">
                <span>{LOGO.title}</span>
              </a>
              <NavigationMenu className="hidden xl:flex" viewport={false}>
                <NavigationMenuList>
                  {NAVIGATION.map((item, index) => (
                    <DesktopMenuItem key={`desktop-link-${index}`} item={item} index={index} />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="hidden items-center gap-3 xl:flex">
              {DESKTOP_BUTTONS.map((btn, index) => (
                <Button
                  size="sm"
                  variant={!btn.isPrimary ? "outline" : "default"}
                  className={
                    btn.isPrimary
                      ? "!text-primary-foreground font-medium"
                      : "text-foreground font-medium"
                  }
                  asChild
                  key={`navbar-btn-${index}`}>
                  <a href={btn.url}>
                    {btn.icon ? <btn.icon className="size-4" /> : null}
                    {btn.label}
                  </a>
                </Button>
              ))}
            </div>
            <div className="xl:hidden">
              <Button className="size-11" variant="ghost" onClick={handleMobileMenu}>
                {open ? (
                  <X className="size-5.5 stroke-foreground" />
                ) : (
                  <MenuIcon className="size-5.5 stroke-foreground" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <MobileNavigationMenu open={open} />
    </Fragment>
  );
};

const DesktopMenuItem = ({
  item,
  index
}) => {
  if (item.groups) {
    return (
      <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
        <NavigationMenuTrigger className="h-fit bg-transparent px-2.5 font-medium text-foreground/80">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-xl !border !p-0">
          <ul className="flex p-2" style={{ width: item.groups.length * 248 }}>
            {item.groups.map((group, index1) => (
              <li className="flex-1" key={`desktop-group-${index1}`}>
                <ul>
                  <li className="px-3 py-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {group.title}
                  </li>
                  {group.links.map((link, index2) => (
                    <li key={`desktop-links-${index1}-${index2}`}>
                      <NavigationMenuLink
                        asChild
                        className="group/link flex items-start gap-2 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-muted">
                        <a href={link.url}>
                          <div
                            className="flex size-8 shrink-0 rounded-lg border border-border bg-background">
                            <link.icon className="m-auto size-4 text-muted-foreground group-hover/link:text-foreground" />
                          </div>
                          <div className="flex flex-col gap-[2px]">
                            <div className="text-sm font-medium text-foreground">
                              {link.label}
                            </div>
                            <div
                              className="text-xs leading-snug text-muted-foreground group-hover/link:text-foreground">
                              {link.description}
                            </div>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
      <NavigationMenuLink
        href={item.url}
        className={`${navigationMenuTriggerStyle()} h-fit bg-transparent px-2.5 font-medium text-foreground/80`}>
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const MobileNavigationMenu = ({
  open
}) => {
  return (
    <Sheet open={open}>
      <SheetContent
        aria-describedby={undefined}
        side="top"
        className="inset-0 z-[998] h-dvh w-full bg-background pt-[3.9375rem] [&>button]:hidden">
        <div className="h-full overflow-y-auto pt-10 pb-20">
          <div className="container">
            <div
              className="absolute -m-px h-px w-px overflow-hidden border-0 mask-clip-border p-0 text-nowrap whitespace-nowrap">
              <SheetTitle className="text-primary">
                Mobile Navigation
              </SheetTitle>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {MOBILE_BUTTONS.map((btn, index) => (
                  <Button
                    variant={!btn.isPrimary ? "outline" : "default"}
                    className={
                      btn.isPrimary
                        ? "!text-primary-foreground font-medium"
                        : "text-foreground font-medium"
                    }
                    asChild
                    key={`navbar-btn-${index}`}>
                    <a href={btn.url}>
                      {btn.icon ? <btn.icon className="size-4" /> : null}
                      {btn.label}
                    </a>
                  </Button>
                ))}
              </div>
              <Accordion type="multiple" className="w-full">
                {NAVIGATION.map((item, index) =>
                  renderMobileMenuItem(item, index))}
              </Accordion>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const renderMobileMenuItem = (item, index) => {
  if (item.groups) {
    return (
      <AccordionItem key={item.title} value={`nav-${index}`} className="border-b-0">
        <AccordionTrigger
          className="h-14 items-center !px-4 py-0 text-sm font-medium text-foreground/80 hover:bg-muted hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="max-h-[60dvh] overflow-x-auto">
          {item.groups.flatMap((group, groupIndex) =>
            group.links.map((link, linkIndex) => (
              <a
                key={`mobile-link-${groupIndex}-${linkIndex}`}
                href={link.url}
                className="flex h-11 items-center gap-2 rounded-lg px-4 text-sm text-muted-foreground transition-colors duration-300 hover:bg-muted hover:text-foreground">
                <link.icon className="size-4 text-muted-foreground" />
                {link.label}
              </a>
            )))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="flex h-14 items-center rounded-md px-4 text-left text-sm font-medium text-foreground/80 ring-ring/10 outline-ring/50 transition-all hover:bg-muted focus-visible:ring-4 focus-visible:outline-1 nth-last-1:border-0">
      {item.title}
    </a>
  );
};

export { Navbar11 };
