import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Peca = {
  nome: string;
  resumo: string;
  inclui: string[];
};

const pecaSolta: Peca = {
  nome: "Vitrine pública",
  resumo: "Base obrigatória: sem isso, nada conversa.",
  inclui: [
    "Catálogo + checkout Pix/cartão",
    "Frete automático (Melhor Envio)",
    "Pixel Meta + UTM",
    "Domínio próprio + deploy",
    "Mobile-first responsivo",
    "7 dias úteis pra ficar no ar",
  ],
};

const pecasAdicionais: Peca[] = [
  {
    nome: "Agente IA no WhatsApp",
    resumo: "Adiciona consultor virtual 24/7 treinado com seu catálogo.",
    inclui: [
      "Atendimento texto + áudio + foto",
      "Busca produto + foto + frete + link carrinho",
      "Escalação automática pra você em emergência",
      "Memória por cliente",
      "+3-5 dias úteis no setup",
    ],
  },
  {
    nome: "CRM próprio",
    resumo: "Painel com receita, ticket médio, funil, clientes e pedidos.",
    inclui: [
      "Dashboard com KPIs e deltas",
      "Funil visual com kanban",
      "Cadastro de cliente com histórico",
      "Carrinhos abandonados",
      "+3-5 dias úteis no setup",
    ],
  },
  {
    nome: "Atribuição + Tráfego",
    resumo: "Conecta Meta Ads e Google Ads. Mostra qual anúncio vendeu.",
    inclui: [
      "Sync Meta Ads + Google Ads",
      "ROI e CAC por campanha",
      "Comparativo de canais",
      "Alerta de performance",
      "+3-5 dias úteis no setup",
    ],
  },
];

export function Pacotes() {
  return (
    <section id="pacotes" className="section bg-bg">
      <div className="container">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow mb-4">Pacotes</p>
          <h2 className="h-section text-balance">
            <span className="italic font-display">A partir de R$ 3.000</span>.
            Escala conforme você quer mais peças.
          </h2>
          <p className="lead mt-6 text-pretty">
            Você começa pela vitrine (R$ 3.000) e adiciona as outras peças
            quando fizer sentido. <span className="text-ink font-medium">Comprando o conjunto completo,
            você paga menos</span> que somando peça por peça depois. A integração
            sai pronta no primeiro setup, sem retrabalho.
          </p>
        </div>

        {/* Peça base — vitrine */}
        <div className="max-w-5xl mb-8">
          <article className="relative rounded-xl p-8 md:p-10 bg-bg-deep text-bg border border-accent shadow-elevated">
            <span className="absolute -top-3 left-8 px-3 py-1 bg-accent text-bg-deep text-xs font-medium uppercase tracking-wider2 rounded">
              Ponto de partida
            </span>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              <header className="md:col-span-2">
                <h3 className="font-display text-3xl md:text-4xl mb-2 tracking-tightish text-bg">
                  {pecaSolta.nome}
                </h3>
                <p className="text-bg/70 text-sm mb-4 leading-relaxed">
                  {pecaSolta.resumo}
                </p>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {pecaSolta.inclui.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className="h-4 w-4 mt-1 shrink-0 text-accent"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm leading-relaxed text-bg/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </header>

              <div className="md:text-right">
                <span className="block text-xs uppercase tracking-wider2 text-bg/60 mb-2">
                  A partir de
                </span>
                <span className="font-display text-5xl md:text-6xl text-bg">
                  R$ 3.000
                </span>
                <p className="text-xs text-bg/60 mt-2">
                  + R$ 290/mês de infraestrutura
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Peças adicionais */}
        <p className="eyebrow mb-6">Adicione as peças que fazem sentido</p>
        <div className="grid md:grid-cols-3 gap-6">
          {pecasAdicionais.map((p) => (
            <article
              key={p.nome}
              className="rounded-xl p-6 md:p-7 bg-bg border border-line shadow-soft hover:shadow-medium hover:border-accent/50 transition-all flex flex-col gap-4"
            >
              <header>
                <h3 className="font-display text-xl md:text-2xl text-ink tracking-tightish mb-2">
                  {p.nome}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {p.resumo}
                </p>
              </header>

              <ul className="space-y-2 flex-1 pt-3 border-t border-line-soft">
                {p.inclui.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check
                      className="h-3.5 w-3.5 mt-1 shrink-0 text-accent-deep"
                      strokeWidth={2.5}
                    />
                    <span className="text-xs text-ink-soft leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-ink-muted pt-3 border-t border-line-soft">
                Valor sob orçamento conforme escopo combinado.
              </p>
            </article>
          ))}
        </div>

        {/* Bloco conjunto */}
        <div className="mt-12 max-w-5xl rounded-xl p-8 md:p-10 border border-accent bg-accent-wash">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-accent/15 text-accent-deep shrink-0">
              <Sparkles className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl text-ink tracking-tightish mb-3">
                Conjunto completo (vitrine + agente + CRM + atribuição)
              </h3>
              <p className="text-base text-ink-soft leading-relaxed text-pretty mb-4">
                Quando você fecha tudo de uma vez, o desconto é real. A
                instalação acontece no mesmo setup (os 4 pilares conversam
                desde o dia 1), sem retrabalho de integração nem custo extra
                de "ligar agente IA com CRM depois".
              </p>
              <p className="text-base text-ink leading-relaxed">
                <span className="font-medium">Fechamento de conjunto sai mais barato que somar peça por peça.</span> Mando orçamento exato após
                entender seu volume e o que você precisa primeiro.
              </p>
              <div className="mt-6">
                <Button asChild variant="accent" size="lg">
                  <a href="#contato">Pedir orçamento personalizado</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-ink-muted mt-8 max-w-3xl">
          Mensalidade de infraestrutura cobre hospedagem, manutenção,
          suporte e atualizações. Sem fidelidade (cancela com 30 dias de
          aviso). Você sempre leva seus dados se quiser migrar. A Forjage
          não cobra comissão por venda, só a mensalidade fixa de infra.
        </p>
      </div>
    </section>
  );
}
