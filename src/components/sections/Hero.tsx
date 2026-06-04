import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 surface-paper overflow-hidden"
    >
      {/* Acento dourado sutil no canto */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-accent/8 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-accent-soft/20 blur-3xl pointer-events-none"
      />

      <div className="container relative">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent-deep" strokeWidth={1.5} />
            <span className="eyebrow">Forjage · Ecossistema de loja online completo</span>
          </div>

          <h1 className="h-display font-medium italic text-balance leading-[1.02] md:text-display-xl animate-fade-up">
            Sua loja vendendo
            <br />
            <span className="text-accent-deep">do anúncio ao pós-venda</span>
            <span className="not-italic font-light">,</span>
            <br />
            num lugar só.
          </h1>

          <p
            className="lead mt-8 text-pretty md:text-xl animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Vitrine online, consultor no WhatsApp, CRM com seu financeiro e o
            controle de qual anúncio trouxe cada venda. <span className="font-display italic text-ink">Tudo montado pra você</span> por
            quem já fez uma loja do zero. Uma operação só, não quatro
            fornecedores soltos.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild variant="accent" size="lg">
              <a href="#contato" className="group">
                Falar com a Forjage
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#ecossistema">Ver o que vem dentro</a>
            </Button>
          </div>

          <div
            className="mt-14 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-xs text-ink-muted">
                Case Ri Pratas no ar (prata 925, SP)
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-line" />
            <span className="text-xs text-ink-muted">
              A partir de <span className="text-ink font-medium">R$ 3.000</span> (só vitrine) · escala conforme você adiciona peças
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
