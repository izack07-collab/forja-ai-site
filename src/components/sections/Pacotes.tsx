import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Peca = {
  nome: string;
  resumo: string;
  inclui: string[];
};

const pecaSolta: Peca = {
  nome: "Vitrine pública",
  resumo: "A loja online de verdade: catálogo, checkout Pix/cartão, no seu domínio.",
  inclui: [
    "Catálogo + pagamento Pix/cartão",
    "Frete automático (Melhor Envio)",
    "Rastreio de qual anúncio vende",
    "Domínio próprio (sua marca no ar)",
    "Feita pro celular",
    "7 dias úteis pra ficar no ar",
  ],
};

const pecasAdicionais: Peca[] = [
  {
    nome: "Agente IA no WhatsApp",
    resumo: "Consultor virtual 24/7 que atende, recupera carrinho e faz follow-up.",
    inclui: [
      "Atendimento texto + áudio + foto",
      "Busca produto + foto + frete + link carrinho",
      "Recupera carrinho abandonado pra fechar a venda",
      "Follow-up automático de quem não respondeu",
      "Escalação automática pra você em emergência",
      "Memória por cliente",
      "+3-5 dias úteis no setup",
    ],
  },
  {
    nome: "CRM próprio",
    resumo: "Painel com receita, ticket médio, funil, clientes e pedidos.",
    inclui: [
      "Painel com seus números, comparado ao mês passado",
      "Quadro visual dos pedidos",
      "Cadastro de cliente com histórico",
      "Carrinhos abandonados",
      "+3-5 dias úteis no setup",
    ],
  },
  {
    nome: "De onde vêm suas vendas",
    resumo: "Conecta Meta Ads e Google Ads. Mostra qual anúncio vendeu.",
    inclui: [
      "Conexão com Meta Ads + Google Ads",
      "Quanto cada anúncio rendeu e custou",
      "Comparação entre os canais de venda",
      "Aviso quando um anúncio começa a render menos",
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
            <span className="italic font-display">Monte do seu jeito</span>.
            As quatro peças, ou só as que fazem sentido.
          </h2>
          <p className="lead mt-6 text-pretty">
            Você escolhe: a operação completa ou só as peças que precisa
            agora, vitrine, agente no WhatsApp, painel ou rastreio de anúncios,
            juntas ou separadas. <span className="text-ink font-medium">No conjunto completo, a condição é
            a melhor</span> e tudo já nasce conversando, sem retrabalho de integração depois.
          </p>
        </div>

        {/* Peça base — vitrine */}
        <div className="max-w-5xl mb-8">
          <article className="relative rounded-xl p-8 md:p-10 bg-bg-deep text-bg border border-accent shadow-elevated">
            <span className="absolute -top-3 left-8 px-3 py-1 bg-accent text-bg-deep text-xs font-medium uppercase tracking-wider2 rounded">
              Foi por onde a Ri Pratas começou
            </span>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-display text-3xl md:text-4xl mb-2 tracking-tightish text-bg">
                  {pecaSolta.nome}
                </h3>
                <p className="text-bg/70 text-sm leading-relaxed">
                  {pecaSolta.resumo}
                </p>
              </div>
              <Button asChild variant="accent" size="lg" className="shrink-0">
                <a href="#contato">Quero a vitrine</a>
              </Button>
            </div>

            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2.5 border-t border-bg/15 pt-6 mt-6">
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
          </article>
        </div>

        {/* Peças adicionais */}
        <p className="eyebrow mb-6">Combine as outras peças como quiser</p>
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
                Conjunto completo (vitrine + agente + painel + rastreio)
              </h3>
              <p className="text-base text-ink-soft leading-relaxed text-pretty mb-4">
                Quando você fecha tudo de uma vez, o desconto é real. A
                instalação acontece no mesmo setup (os 4 pilares conversam
                desde o dia 1), sem retrabalho de integração nem custo extra
                de "ligar agente IA com CRM depois".
              </p>
              <p className="text-base text-ink leading-relaxed">
                <span className="font-medium">Fechamento de conjunto sai mais barato que somar peça por peça.</span> A gente manda o orçamento exato após
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
