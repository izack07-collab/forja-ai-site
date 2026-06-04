import {
  ShoppingBag,
  MessageCircle,
  LayoutDashboard,
  Target,
  Check,
} from "lucide-react";

const pilares = [
  {
    icon: ShoppingBag,
    eyebrow: "Pilar 1",
    nome: "Vitrine pública",
    desc: "A loja online de verdade que sua cliente abre, escolhe a peça, compra e paga sozinha, sem te chamar no privado.",
    features: [
      "Catálogo com filtros, busca e categorias",
      "Página de produto com galeria e descrição",
      "Checkout integrado: Pix com desconto + cartão parcelado em até 12x",
      "Frete calculado automático via Melhor Envio",
      "Carrinho abandonado salvo (cliente volta de onde parou)",
      "Rastreio em todas as páginas pra saber qual anúncio trouxe cada venda",
      "Mobile-first (porque 80% das suas clientes compram do celular)",
      "Domínio próprio (sua marca, não 'forjage.com/sua-loja')",
    ],
  },
  {
    icon: MessageCircle,
    eyebrow: "Pilar 2",
    nome: "Agente IA no WhatsApp",
    desc: "Consultor virtual treinado com seu catálogo real, sua voz de marca. Atende 24/7: tira dúvida, mostra produto, quebra objeção e encaminha pro checkout, mesmo quando você não pode responder.",
    features: [
      "Busca peça no seu estoque real (não inventa preço nem disponibilidade)",
      "Manda foto da peça sob demanda, direto do seu catálogo",
      "Calcula frete pra cidade da cliente em tempo real",
      "Gera link de carrinho pré-preenchido (cliente só precisa pagar)",
      "Entende áudio, foto e PDF, não só texto",
      "Tira dúvida educacional (banho, cuidados, garantia) com base na sua FAQ",
      "Escala pra você automaticamente em emergência (defeito, troca, conflito)",
      "Memória por cliente: não pergunta o mesmo CEP duas vezes",
      "Anti-injeção: ignora cliente tentando 'hackear' o agente",
      "Operação enxuta, sem custo escondido por conversa",
    ],
  },
  {
    icon: LayoutDashboard,
    eyebrow: "Pilar 3",
    nome: "CRM próprio",
    desc: "Painel que substitui Shopify, Excel, agenda e WhatsApp Business, tudo no mesmo lugar, com a sua cara.",
    features: [
      "Dashboard com receita do mês, ticket médio, conversão, leads novos",
      "Comparação automática com o mês anterior (delta % visível)",
      "Funil visual: lead novo → qualificação → negociação → pago",
      "Top produtos: quais peças giram, quais estão paradas",
      "Cadastro de cliente com histórico, preferências e cashback",
      "Pedidos num quadro visual (aguardando pagamento, pago, enviado, entregue)",
      "Carrinhos abandonados pra você recuperar na mão ou pelo agente",
      "Painel feito pro celular (você gerencia tudo entre um cliente e outro)",
      "Exportação CSV de qualquer relatório quando precisar",
    ],
  },
  {
    icon: Target,
    eyebrow: "Pilar 4 · diferencial real",
    nome: "De onde veio cada venda + financeiro",
    desc: "Você sabe qual anúncio do Meta ou Google trouxe cada venda. Acaba o 'acho que essa campanha tá vendendo'.",
    features: [
      "Conexão automática com Meta Ads (Facebook + Instagram) e Google Ads",
      "Cada venda mostra de qual anúncio ela veio",
      "Quanto custou cada venda, calculado sozinho (não no chute)",
      "Quanto cada anúncio rendeu, claro na tela: sobe o que dá retorno, corta o que não dá",
      "Receita projetada vs realizada do mês",
      "Comparativo de canais: orgânico vs pago vs WhatsApp direto",
      "Alerta quando uma campanha começa a perder performance",
      "Você decide o próximo investimento de tráfego baseado em dado, não em achismo",
    ],
  },
];

export function Ecossistema() {
  return (
    <section id="ecossistema" className="section surface-warm">
      <div className="container">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow mb-4">O ecossistema</p>
          <h2 className="h-section text-balance">
            Não é um site. É a
            <span className="italic font-display"> operação inteira </span>
            da sua loja, montada peça por peça.
          </h2>
          <p className="lead mt-6 text-pretty">
            Você pode começar pelo que faz mais sentido agora (geralmente a
            vitrine) e ir adicionando os outros pilares conforme o caixa
            permite. Mas comprar tudo junto sai bem mais barato que somar peça
            por peça depois.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {pilares.map((p) => (
            <article
              key={p.nome}
              className="bg-bg rounded-xl border border-line shadow-soft hover:shadow-medium transition-all p-8 md:p-10 flex flex-col gap-6"
            >
              <header className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent-wash text-accent-deep shrink-0">
                  <p.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider2 text-accent-deep mb-1">
                    {p.eyebrow}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-ink tracking-tightish mb-2">
                    {p.nome}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed text-pretty">
                    {p.desc}
                  </p>
                </div>
              </header>

              <ul className="space-y-2.5 border-t border-line pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      className="h-4 w-4 mt-0.5 text-accent-deep shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm text-ink-soft leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 max-w-3xl p-6 rounded-md bg-bg-deep text-bg/85 border border-accent/30">
          <p className="text-sm leading-relaxed text-pretty">
            <span className="text-accent font-medium">Importante:</span> os 4
            pilares foram desenhados pra trabalhar juntos. O agente precisa
            do catálogo da vitrine pra buscar peça. O painel precisa das
            conversas do agente pra montar o funil de vendas. O rastreio de
            anúncios precisa dos dados da vitrine. Se você compra só uma peça,
            ela funciona, mas o ganho real aparece quando os 4 conversam.
          </p>
        </div>
      </div>
    </section>
  );
}
