import { TrendingUp, Coins, Repeat, Bot, Check } from "lucide-react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

const metricas = [
  { icon: TrendingUp, valor: "R$ 18 mil", label: "recuperados em 6 meses" },
  { icon: Coins, valor: "R$ 80 a 120", label: "de custo por mês" },
  { icon: Repeat, valor: "25 a 30x", label: "de retorno sobre o custo" },
];

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

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Coluna visual — conversa real (anonimizada) */}
          <div className="md:col-span-7">
            <div className="flex justify-center gap-4 sm:gap-6">
              <PhoneFrame
                src="/images/agente-conv1.webp"
                alt="Atendimento do agente recuperando uma venda no WhatsApp, parte 1"
                width={500}
                height={872}
                className="w-1/2 max-w-[230px]"
              />
              <PhoneFrame
                src="/images/agente-conv2.webp"
                alt="Atendimento do agente contornando a objeção da cliente, parte 2"
                width={500}
                height={872}
                className="w-1/2 max-w-[230px]"
              />
            </div>

            {/* Fecho da venda */}
            <figure className="mx-auto mt-5 max-w-[400px] overflow-hidden rounded-xl border border-line bg-bg shadow-soft">
              <img
                src="/images/agente-fecho.webp"
                alt="Cliente confirmando o pagamento: Já fiz, obrigada"
                width={500}
                height={278}
                loading="lazy"
                className="block w-full"
              />
              <figcaption className="flex items-center gap-2 border-t border-line px-4 py-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/12 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider2 text-success">
                  <Check className="h-3 w-3" strokeWidth={3} />
                  Venda recuperada
                </span>
                <span className="text-[11px] text-ink-muted">
                  Cliente fechou pelo checkout, sozinha.
                </span>
              </figcaption>
            </figure>

            <p className="mt-3 text-center text-[11px] text-ink-muted">
              Conversa real do atendimento. Nome da cliente e marca anonimizados.
            </p>
          </div>

          {/* Coluna texto — case */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <header className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent-wash text-accent-deep shrink-0">
                <Bot className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-ink tracking-tightish mb-1">
                  Milena, recuperação de vendas
                </h3>
                <p className="text-sm text-ink-soft">
                  Agente de carrinho abandonado no WhatsApp, para um negócio de
                  cursos online
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
