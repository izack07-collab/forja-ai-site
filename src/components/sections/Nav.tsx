import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#ecossistema", label: "Ecossistema" },
  { href: "#pacotes", label: "Pacotes" },
  { href: "#faq", label: "Perguntas" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-line/60 shadow-soft"
          : "bg-transparent",
      )}
      style={{ height: "var(--header-h)" }}
    >
      <div className="container h-full flex items-center justify-between">
        <a
          href="#topo"
          className="font-display text-xl md:text-2xl tracking-tightish text-ink hover:text-accent-deep transition-colors"
          aria-label="Forjage — início"
        >
          Forj<span className="text-accent">age</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="accent" size="sm">
            <a href="#contato">Falar comigo</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center text-ink rounded hover:bg-bg-warm"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-px w-5 bg-current transition-transform",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-current transition-transform",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full inset-x-0 bg-bg border-b border-line shadow-medium">
          <nav className="container flex flex-col py-4" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-ink-soft hover:text-ink border-b border-line-soft last:border-0"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="accent" size="default" className="mt-4">
              <a href="#contato" onClick={() => setOpen(false)}>
                Falar comigo
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
