import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Pacote = {
  nome: string;
  setup: string;
  mensal: string;
  desc: string;
  inclui: string[];
  cta: string;
  destaque?: boolean;
};

const pacotes: Pacote[] = [
  {
    nome: "Essencial",
    setup: "R$ 3.500",
    mensal: "R$ 390",
    desc: "Pra quem precisa de vitrine online de verdade, com checkout integrado e gestão de pedidos sem precisar de Shopify.",
    inclui: [
      "Vitrine digital responsiva",
      "CRM com leads, pedidos e carrinho abandonado",
      "Pix com desconto + cartão parcelado (Asaas)",
      "Frete calculado (Melhor Envio)",
      "Pixel Meta + UTM pra atribuição de tráfego pago",
      "Painel admin mobile-first",
      "7 dias úteis pra ficar no ar",
    ],
    cta: "Quero o Essencial",
  },
  {
    nome: "Completo",
    setup: "R$ 4.500",
    mensal: "R$ 690",
    desc: "Tudo do Essencial mais o vendedor virtual no WhatsApp atendendo 24/7 e fechando pedido sem você levantar do sofá.",
    inclui: [
      "Tudo do Essencial",
      "Agente de IA no WhatsApp (modelo Milena)",
      "Atende texto, áudio, foto e PDF",
      "Mostra produto, tira dúvida, fecha pedido",
      "Transbordo automático pra você em emergência",
      "Memória por cliente (não esquece quem é)",
      "10 dias úteis pra ficar no ar",
    ],
    cta: "Quero o Completo",
    destaque: true,
  },
];

export function Pacotes() {
  return (
    <section id="pacotes" className="section surface-warm">
      <div className="container">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow mb-4">Pacotes</p>
          <h2 className="h-section text-balance">
            Preço <span className="italic font-display">honesto</span>, sem
            mensalidade-armadilha.
          </h2>
          <p className="lead mt-6 text-pretty">
            Dois caminhos. O Completo sai mais barato fechando junto. Se você
            começar com Essencial e quiser adicionar o agente IA depois, custa
            mais (incentivo pra você fechar o pacote certo no go).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
          {pacotes.map((p) => (
            <article
              key={p.nome}
              className={cn(
                "relative rounded-xl p-8 md:p-10 flex flex-col gap-6 transition-all",
                p.destaque
                  ? "bg-bg-deep text-bg border border-accent shadow-elevated"
                  : "bg-bg border border-line shadow-soft hover:shadow-medium",
              )}
            >
              {p.destaque && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-accent text-bg-deep text-xs font-medium uppercase tracking-wider2 rounded">
                  Mais escolhido
                </span>
              )}

              <header>
                <h3
                  className={cn(
                    "font-display text-3xl md:text-4xl mb-2 tracking-tightish",
                    p.destaque ? "text-bg" : "text-ink",
                  )}
                >
                  {p.nome}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    p.destaque ? "text-bg/70" : "text-ink-muted",
                  )}
                >
                  {p.desc}
                </p>
              </header>

              <div
                className={cn(
                  "flex items-baseline gap-3 pb-6 border-b",
                  p.destaque ? "border-bg/15" : "border-line",
                )}
              >
                <div>
                  <span
                    className={cn(
                      "block text-xs uppercase tracking-wider2",
                      p.destaque ? "text-bg/60" : "text-ink-muted",
                    )}
                  >
                    Setup
                  </span>
                  <span
                    className={cn(
                      "font-display text-3xl md:text-4xl",
                      p.destaque ? "text-bg" : "text-ink",
                    )}
                  >
                    {p.setup}
                  </span>
                </div>
                <span
                  className={cn(
                    "text-xl",
                    p.destaque ? "text-bg/40" : "text-line-deep",
                  )}
                >
                  ·
                </span>
                <div>
                  <span
                    className={cn(
                      "block text-xs uppercase tracking-wider2",
                      p.destaque ? "text-bg/60" : "text-ink-muted",
                    )}
                  >
                    Mensal
                  </span>
                  <span
                    className={cn(
                      "font-display text-3xl md:text-4xl",
                      p.destaque ? "text-bg" : "text-ink",
                    )}
                  >
                    {p.mensal}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {p.inclui.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "h-4 w-4 mt-1 shrink-0",
                        p.destaque ? "text-accent" : "text-accent-deep",
                      )}
                      strokeWidth={2.5}
                    />
                    <span
                      className={cn(
                        "text-sm leading-relaxed",
                        p.destaque ? "text-bg/85" : "text-ink-soft",
                      )}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={p.destaque ? "accent" : "primary"}
                size="lg"
                className="w-full"
              >
                <a href="#contato">{p.cta}</a>
              </Button>
            </article>
          ))}
        </div>

        <div className="max-w-3xl mt-12 p-6 rounded-md bg-bg border border-line-soft">
          <p className="text-sm text-ink-soft leading-relaxed">
            <span className="font-medium text-ink">
              Já fechou Essencial e quer adicionar agente IA depois?
            </span>{" "}
            Custa <span className="text-ink">R$ 1.800 de setup + R$ 300/mês</span>{" "}
            (instalação separada). No pacote Completo no go, sai mais barato
            (R$ 1.000 + R$ 300/mês a mais). Sem letra miúda.
          </p>
        </div>
      </div>
    </section>
  );
}
