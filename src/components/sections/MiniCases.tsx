import { TrendingUp, Coins, Repeat, Bot, Check } from "lucide-react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

const metricas = [
  { icon: TrendingUp, valor: "R$ 18 mil", label: "recuperados em 6 meses" },
  { icon: Coins, valor: "R$ 80 a 120", label: "de custo por mês" },
  { icon: Repeat, valor: "25 a 30x", label: "de retorno sobre o custo" },
];

/**
 * Conversa MOCK (exemplo ilustrativo). Placeholder até o Isaac enviar o print
 * real do agente da Milena com dados anonimizados, que substitui este bloco.
 * Tom natural de propósito (atendimento conversacional no WhatsApp).
 */
const conversa = [
  {
    de: "agente",
    txt: "Oi, Marina! Vi que você começou a garantir sua vaga e parou no pagamento. Ficou alguma dúvida? 😊",
  },
  { de: "cliente", txt: "Oi! Consigo parcelar?" },
  {
    de: "agente",
    txt: "Consegue sim 💛 Até 12x no cartão, ou no Pix com desconto. Quer que eu já te mande o link?",
  },
  { de: "cliente", txt: "Quero!" },
  { de: "agente", txt: "Prontinho! É só finalizar por aqui 👉" },
] as const;

function MockConversa() {
  return (
    <div className="flex flex-col bg-bg-warm">
      {/* Topo do chat */}
      <div className="flex items-center gap-3 bg-bg-deep px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent-soft">
          <Bot className="h-4 w-4" strokeWidth={1.75} />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-medium text-bg">Milena</p>
          <p className="text-[10px] text-bg/60">consultora · online agora</p>
        </div>
      </div>

      {/* Bolhas */}
      <div className="flex flex-col gap-2 px-3 py-4">
        {conversa.map((m, i) => (
          <div
            key={i}
            className={
              m.de === "cliente" ? "flex justify-end" : "flex justify-start"
            }
          >
            <p
              className={
                m.de === "cliente"
                  ? "max-w-[80%] rounded-2xl rounded-tr-sm bg-[#E4EFE0] px-3 py-2 text-[12px] leading-snug text-ink shadow-sm"
                  : "max-w-[80%] rounded-2xl rounded-tl-sm bg-bg px-3 py-2 text-[12px] leading-snug text-ink shadow-sm"
              }
            >
              {m.txt}
            </p>
          </div>
        ))}

        {/* Chip de venda recuperada */}
        <div className="mt-1 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/12 px-3 py-1 text-[10px] font-medium uppercase tracking-wider2 text-success">
            <Check className="h-3 w-3" strokeWidth={3} />
            Compra finalizada no checkout
          </span>
        </div>
      </div>
    </div>
  );
}

export function MiniCases() {
  return (
    <section id="outros-cases" className="section surface-warm">
      <div className="container">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow mb-4">Também em produção</p>
          <h2 className="h-section text-balance">
            O agente de IA da Forjage{" "}
            <span className="italic font-display">não é experimento</span>. Já
            recupera venda em outra operação, há mais tempo.
          </h2>
          <p className="lead mt-6 text-pretty">
            A Ri Pratas é a vitrine completa. O agente que vai para a sua loja,
            porém, já tem um irmão em produção há mais tempo, em outro contexto,
            com número real para mostrar.
          </p>
        </div>

        <div className="max-w-5xl grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Coluna visual — conversa do agente (mock) */}
          <div className="md:col-span-5">
            <div className="mx-auto max-w-[280px]">
              <PhoneFrame>
                <MockConversa />
              </PhoneFrame>
              <p className="mt-3 text-center text-[11px] text-ink-muted">
                Exemplo ilustrativo de uma recuperação pelo agente.
              </p>
            </div>
          </div>

          {/* Coluna texto — case */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <header className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent-wash text-accent-deep shrink-0">
                <Bot className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-ink tracking-tightish mb-1">
                  Milena · MVM Creators
                </h3>
                <p className="text-sm text-ink-soft">
                  Agente de recuperação de carrinho via WhatsApp
                </p>
                <p className="text-xs text-ink-muted uppercase tracking-wider2 mt-1">
                  No ar desde dezembro de 2025
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-line pt-6">
              {metricas.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <m.icon
                    className="h-4 w-4 text-accent-deep mb-1"
                    strokeWidth={1.5}
                  />
                  <p className="font-display text-2xl md:text-3xl text-ink">
                    {m.valor}
                  </p>
                  <p className="text-xs text-ink-muted uppercase tracking-wider2">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-accent/30 bg-bg p-6">
              <p className="text-base text-ink leading-relaxed text-pretty">
                O cliente abandona o carrinho, o agente vai atrás, tira a
                dúvida, contorna a objeção e encaminha para o checkout. Cerca de{" "}
                <span className="font-medium text-ink">
                  uma venda recuperada por dia
                </span>
                , de forma totalmente automática, sem atendente humano
                respondendo. A mesma arquitetura do agente que entra na sua
                loja, em outro contexto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
