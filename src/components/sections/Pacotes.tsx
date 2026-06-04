import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Peca = {
  nome: string;
  resumo: string;
  inclui: string[];
};

const pecas: Peca[] = [
  {
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
  },
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
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow mb-4">Pacotes</p>
          <h2 className="h-section text-balance">
            <span className="italic font-display">Monte do seu jeito</span>.
            As quatro peças, ou só as que fazem sentido.
          </h2>
          <p className="lead mt-6 text-pretty">
            Você escolhe: a operação completa ou só as peças que precisa
            agora, vitrine, agente no WhatsApp, painel ou rastreio de anúncios,
            juntas ou separadas.
          </p>
        </div>

        {/* Destaque — operação completa (o que mais escala) */}
        <div className="max-w-5xl mb-12">
          <article className="relative rounded-xl p-8 md:p-10 bg-bg-deep text-bg border border-accent shadow-elevated">
            <span className="absolute -top-3 left-8 px-3 py-1 bg-accent text-bg-deep text-xs font-medium uppercase tracking-wider2 rounded">
              O que mais escala
            </span>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="md:max-w-xl">
                <h3 className="font-display text-3xl md:text-4xl mb-3 tracking-tightish text-bg">
                  A operação completa
                </h3>
                <p className="text-bg/75 text-sm md:text-base leading-relaxed text-pretty">
                  Vitrine, agente IA, painel e rastreio de anúncios trabalhando
                  juntos desde o dia 1. É a combinação que tira você do gargalo e
                  deixa a loja crescer. Fechar tudo junto sai na melhor condição
                  e já nasce integrado, sem retrabalho depois.
                </p>
              </div>
              <Button asChild variant="accent" size="lg" className="shrink-0">
                <a href="#contato">Quero a operação completa</a>
              </Button>
            </div>

            <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-2.5 border-t border-bg/15 pt-6 mt-6">
              {pecas.map((p) => (
                <li key={p.nome} className="flex items-start gap-2.5">
                  <Sparkles
                    className="h-4 w-4 mt-0.5 shrink-0 text-accent"
                    strokeWidth={1.75}
                  />
                  <span className="text-sm leading-snug text-bg/85">
                    {p.nome}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Peças individuais — niveladas */}
        <p className="eyebrow mb-6">Ou pegue só as peças que quiser</p>
        <div className="grid md:grid-cols-2 gap-6">
          {pecas.map((p) => (
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

              <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 flex-1 pt-3 border-t border-line-soft">
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
