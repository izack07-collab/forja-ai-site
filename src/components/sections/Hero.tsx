import { Button } from "@/components/ui/button";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
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
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Coluna texto */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4 text-accent-deep" strokeWidth={1.5} />
              <span className="eyebrow">
                Forjage · Ecossistema completo para a sua loja escalar
              </span>
            </div>

            <h1 className="h-display font-medium italic text-balance leading-[1.04] animate-fade-up">
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
              Vitrine online, um consultor de IA atendendo no WhatsApp 24 horas,
              um painel com o seu financeiro e o registro de qual anúncio trouxe
              cada venda. O agente cuida do atendimento sozinho e aciona você
              apenas no que importa, já com a situação organizada para você
              decidir. Tudo montado por quem já fez uma loja do zero, em uma
              operação só, não quatro fornecedores soltos.
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
            </div>
          </div>

          {/* Coluna visual — produto real emoldurado */}
          <div
            className="lg:col-span-5 relative animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none pb-12 sm:pb-6 lg:pb-4">
              <BrowserFrame
                src="/images/vitrine-desktop.webp"
                alt="Vitrine da Ri Pratas no computador: joias em prata 925, layout editorial"
                url="ripratas.com.br"
                loading="eager"
                width={1280}
                height={800}
              />
              <PhoneFrame
                src="/images/vitrine-mobile.webp"
                alt="A mesma vitrine adaptada para o celular"
                loading="eager"
                width={390}
                height={844}
                className="absolute -bottom-6 left-0 w-24 sm:-bottom-8 sm:-left-6 sm:w-32 lg:w-36 z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
