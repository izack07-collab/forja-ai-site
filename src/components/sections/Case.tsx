import { Quote, Sparkles } from "lucide-react";

export function Case() {
  return (
    <section id="case" className="section bg-bg">
      <div className="container">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow mb-4">Case vivo</p>
          <h2 className="h-section text-balance">
            A <span className="italic font-display">Ri Pratas</span> está no ar.
            O seu jeito pode estar também.
          </h2>
        </div>

        <div className="max-w-5xl grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Coluna visual — placeholder editorial até as fotos chegarem */}
          <div className="md:col-span-5">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-bg-warm via-accent-wash to-bg-warm border border-line shadow-soft relative">
              <div className="absolute inset-0 flex items-center justify-center text-ink-muted text-sm">
                <div className="text-center px-6">
                  <Sparkles
                    className="h-8 w-8 mx-auto mb-3 text-accent-deep"
                    strokeWidth={1.25}
                  />
                  <p className="font-display italic text-2xl text-ink-soft mb-1">
                    Ri Pratas
                  </p>
                  <p className="text-xs uppercase tracking-wider2 text-ink-muted">
                    Prata 925 · São Paulo
                  </p>
                  <p className="text-xs text-ink-muted mt-6 max-w-[200px] mx-auto">
                    Foto da loja em breve, fresquinha do shoot
                  </p>
                </div>
              </div>
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
                Depoimento da operação Ri Pratas, em produção desde 19/05/2026
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
                <p className="font-display text-3xl md:text-4xl text-accent-deep">
                  Pix +
                </p>
                <p className="text-xs text-ink-muted uppercase tracking-wider2 mt-1">
                  cartão integrado,
                  <br />
                  sem print manual
                </p>
              </div>
            </div>

            <p className="text-sm text-ink-muted italic">
              Métricas detalhadas (taxa de conversão, ticket médio, redução de
              tempo no WhatsApp) entram aqui quando completarmos 30 dias de
              operação. Por enquanto, a verdade nua: o sistema está vivo e a
              dona da loja tá dormindo mais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
