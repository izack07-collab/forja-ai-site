import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "yes" | "no" | "partial";

interface Linha {
  feature: string;
  forjage: { status: Status; nota?: string };
  shopify: { status: Status; nota?: string };
  nuvemshop: { status: Status; nota?: string };
}

const linhas: Linha[] = [
  {
    feature: "Vitrine + checkout integrado",
    forjage: { status: "yes" },
    shopify: { status: "yes" },
    nuvemshop: { status: "yes" },
  },
  {
    feature: "Pix + cartão BR sem taxa por venda",
    forjage: { status: "yes", nota: "Asaas direto na sua conta" },
    shopify: { status: "partial", nota: "Shopify Payments cobra %" },
    nuvemshop: { status: "partial", nota: "Pago: 2,99% por venda" },
  },
  {
    feature: "Agente IA no WhatsApp",
    forjage: { status: "yes", nota: "Treinado no seu catálogo" },
    shopify: { status: "no", nota: "Só app de terceiro genérico" },
    nuvemshop: { status: "no", nota: "Só app de terceiro genérico" },
  },
  {
    feature: "CRM com dashboard + funil + clientes",
    forjage: { status: "yes", nota: "Painel próprio" },
    shopify: { status: "partial", nota: "Reports básico, CRM via app pago" },
    nuvemshop: { status: "partial", nota: "Reports básico" },
  },
  {
    feature: "Atribuição Meta Ads + Google Ads nativa",
    forjage: { status: "yes", nota: "ROI real por campanha" },
    shopify: { status: "no", nota: "Só pixel — sem ROI por canal" },
    nuvemshop: { status: "no", nota: "Só pixel — sem ROI por canal" },
  },
  {
    feature: "Domínio próprio",
    forjage: { status: "yes" },
    shopify: { status: "partial", nota: "Plano Basic+" },
    nuvemshop: { status: "yes" },
  },
  {
    feature: "Comissão por venda da plataforma",
    forjage: { status: "yes", nota: "Zero" },
    shopify: { status: "no", nota: "0,5%-2% se não usar Shopify Payments" },
    nuvemshop: { status: "no", nota: "Planos Evoluir+ cobram" },
  },
  {
    feature: "Você leva os dados se sair",
    forjage: { status: "yes", nota: "Exportação completa" },
    shopify: { status: "partial", nota: "Limites por plano" },
    nuvemshop: { status: "partial", nota: "Limites por plano" },
  },
  {
    feature: "Customização do código",
    forjage: { status: "yes", nota: "Código próprio, ajuste qualquer coisa" },
    shopify: { status: "partial", nota: "Liquid templating" },
    nuvemshop: { status: "partial", nota: "Tema customizável" },
  },
  {
    feature: "Onboarding com humano de verdade",
    forjage: { status: "yes", nota: "Isaac no WhatsApp" },
    shopify: { status: "no", nota: "Self-service + chat" },
    nuvemshop: { status: "partial", nota: "Suporte por chat/email" },
  },
];

const labelMap: Record<Status, { icon: typeof Check; cor: string; texto: string }> = {
  yes: { icon: Check, cor: "text-success", texto: "Inclui" },
  no: { icon: X, cor: "text-danger", texto: "Não inclui" },
  partial: { icon: Minus, cor: "text-ink-muted", texto: "Parcial" },
};

function Celula({ entry, destaque = false }: { entry: { status: Status; nota?: string }; destaque?: boolean }) {
  const { icon: Icon, cor } = labelMap[entry.status];
  return (
    <td
      className={cn(
        "px-4 py-5 align-top text-center",
        destaque && "bg-accent-wash/40",
      )}
    >
      <div className="flex flex-col items-center gap-1.5">
        <Icon
          className={cn("h-5 w-5", cor, destaque && entry.status === "yes" && "text-accent-deep")}
          strokeWidth={2.5}
        />
        {entry.nota && (
          <span
            className={cn(
              "text-[11px] leading-tight text-pretty max-w-[160px]",
              destaque ? "text-ink-soft" : "text-ink-muted",
            )}
          >
            {entry.nota}
          </span>
        )}
      </div>
    </td>
  );
}

export function Comparativo() {
  return (
    <section id="comparativo" className="section bg-bg">
      <div className="container">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow mb-4">Comparativo</p>
          <h2 className="h-section text-balance">
            Forjage <span className="italic font-display">vs</span> Shopify <span className="italic font-display">vs</span> Nuvemshop
          </h2>
          <p className="lead mt-6 text-pretty">
            Comparação honesta. Shopify e Nuvemshop são ótimos no que
            fazem (vitrine genérica em escala). A Forjage faz o que eles
            não fazem: pacote sob medida com agente IA, CRM próprio e
            atribuição de tráfego nativa — sem comissão por venda.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-line shadow-soft">
          <table className="w-full bg-bg">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left px-6 py-5 text-xs font-medium uppercase tracking-wider2 text-ink-muted">
                  Feature
                </th>
                <th className="px-4 py-5 text-center bg-accent-wash/40">
                  <span className="block font-display text-xl text-ink tracking-tightish">
                    Forjage
                  </span>
                  <span className="block text-[10px] uppercase tracking-wider2 text-accent-deep mt-1">
                    Sob medida
                  </span>
                </th>
                <th className="px-4 py-5 text-center">
                  <span className="block font-display text-lg text-ink-soft tracking-tightish">
                    Shopify
                  </span>
                  <span className="block text-[10px] uppercase tracking-wider2 text-ink-muted mt-1">
                    SaaS global
                  </span>
                </th>
                <th className="px-4 py-5 text-center">
                  <span className="block font-display text-lg text-ink-soft tracking-tightish">
                    Nuvemshop
                  </span>
                  <span className="block text-[10px] uppercase tracking-wider2 text-ink-muted mt-1">
                    SaaS BR
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {linhas.map((linha, i) => (
                <tr
                  key={linha.feature}
                  className={cn(
                    "border-b border-line-soft last:border-0",
                    i % 2 === 1 && "bg-bg-warm/30",
                  )}
                >
                  <td className="px-6 py-5 text-sm text-ink font-medium align-top">
                    {linha.feature}
                  </td>
                  <Celula entry={linha.forjage} destaque />
                  <Celula entry={linha.shopify} />
                  <Celula entry={linha.nuvemshop} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {linhas.map((linha) => (
            <div
              key={linha.feature}
              className="bg-bg border border-line rounded-lg p-5 shadow-soft"
            >
              <p className="text-sm font-medium text-ink mb-4">
                {linha.feature}
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { label: "Forjage", entry: linha.forjage, destaque: true },
                  { label: "Shopify", entry: linha.shopify, destaque: false },
                  { label: "Nuvemshop", entry: linha.nuvemshop, destaque: false },
                ].map((col) => {
                  const { icon: Icon, cor } = labelMap[col.entry.status];
                  return (
                    <div
                      key={col.label}
                      className={cn(
                        "rounded p-3 flex flex-col items-center gap-1",
                        col.destaque ? "bg-accent-wash/40" : "bg-bg-warm/40",
                      )}
                    >
                      <span
                        className={cn(
                          "text-[10px] uppercase tracking-wider2",
                          col.destaque ? "text-accent-deep font-medium" : "text-ink-muted",
                        )}
                      >
                        {col.label}
                      </span>
                      <Icon
                        className={cn(
                          "h-4 w-4",
                          cor,
                          col.destaque && col.entry.status === "yes" && "text-accent-deep",
                        )}
                        strokeWidth={2.5}
                      />
                      {col.entry.nota && (
                        <span className="text-[10px] text-ink-muted leading-tight">
                          {col.entry.nota}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-md bg-bg-warm border border-line-soft max-w-3xl">
          <p className="text-sm text-ink-soft leading-relaxed text-pretty">
            <span className="text-ink font-medium">Quando faz sentido escolher Shopify ou Nuvemshop:</span> se
            você quer self-service total, plano mensal de R$ 100, e não se
            importa de pagar comissão por venda, eles servem bem. A Forjage
            faz sentido pra quem quer pacote sob medida, agente IA + CRM
            integrados, e zero comissão sobre faturamento.
          </p>
        </div>
      </div>
    </section>
  );
}
