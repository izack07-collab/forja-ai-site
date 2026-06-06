import { Quote } from "lucide-react";
import { BrowserFrame } from "@/components/ui/BrowserFrame";

export function Case() {
  return (
    <section id="case" className="section bg-bg">
      <div className="container">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow mb-4">Case vivo</p>
          <h2 className="h-section text-balance">
            A <span className="italic font-display">Ri Pratas</span> está no ar.
            O seu site pode estar também.
          </h2>
        </div>

        <div className="max-w-5xl grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Coluna visual — vitrine real no ar */}
          <div className="md:col-span-5">
            <div className="relative">
              {/* Selo flutuante — no ar */}
              <div className="absolute -top-3 left-4 z-10 flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1.5 shadow-soft">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-[11px] text-ink-muted uppercase tracking-wider2">
                  No ar desde 19/05/2026
                </span>
              </div>

              <BrowserFrame
                src="/images/vitrine-catalogo.webp"
                alt="Catálogo da Ri Pratas no ar: peças de prata 925 com filtros, busca e preços"
                url="ripratas.com.br/catalogo"
                width={1280}
                height={800}
              />

              {/* Rodapé — link vivo */}
              <a
                href="https://ripratas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between rounded-md border border-line bg-bg px-4 py-3 text-xs text-ink-muted hover:border-accent/50 hover:text-ink-soft transition-colors"
              >
                <span>Ver a loja no ar em ripratas.com.br</span>
                <span className="text-accent-deep">↗</span>
              </a>
            </div>
          </div>

          {/* Coluna texto */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <div>
              <Quote
                className="h-8 w-8 text-accent-deep/40 mb-4"
                strokeWidth={1.25}
              />
              <p className="font-display text-2xl md:text-3xl italic text-ink leading-snug text-balance">
                Antes era só álbum no WhatsApp e cliente perguntando "tem mais
                modelos?" toda hora. Agora ela vê tudo na vitrine, escolhe e
                paga sozinha. Eu só apareço quando ela quer fechar mesmo.
              </p>
              <p className="text-sm text-ink-muted mt-4">
                Operação Ri Pratas, em produção desde 19/05/2026
              </p>
            </div>

            <div className="divider-fine" />

            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="font-display text-3xl md:text-4xl text-accent-deep">
                  10
                </p>
                <p className="text-xs text-ink-muted uppercase tracking-wider2 mt-1">
                  dias do briefing
                  <br />
                  ao ar
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-accent-deep">
                  24/7
                </p>
                <p className="text-xs text-ink-muted uppercase tracking-wider2 mt-1">
                  atendimento
                  <br />
                  sem aumentar time
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-accent-deep italic">
                  Sozinho
                </p>
                <p className="text-xs text-ink-muted uppercase tracking-wider2 mt-1">
                  o cliente compra
                  <br />
                  sem te chamar no privado
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-accent/30 bg-accent-wash p-6">
              <p className="text-base text-ink leading-relaxed text-pretty">
                <span className="font-display italic text-xl text-accent-deep">
                  A loja roda quase no automático.
                </span>{" "}
                Quem opera a Ri Pratas cuida de separar o pedido, postar e do
                administrativo. Mostrar a peça, tirar dúvida, calcular frete,
                receber o pagamento e rastrear de onde veio cada venda: o
                ecossistema faz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
