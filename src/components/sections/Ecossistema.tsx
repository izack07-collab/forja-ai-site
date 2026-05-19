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
    desc: "A loja online de verdade que sua cliente abre, escolhe peça, fecha pedido e paga — sem te chamar no privado.",
    features: [
      "Catálogo com filtros, busca e categorias",
      "Página de produto com galeria e descrição",
      "Checkout integrado: Pix com desconto + cartão parcelado em até 12x",
      "Frete calculado automático via Melhor Envio",
      "Carrinho abandonado salvo (cliente volta de onde parou)",
      "Pixel Meta + UTM em todas as páginas pra rastrear de onde veio cada venda",
      "Mobile-first (porque 80% das suas clientes compram do celular)",
      "Domínio próprio (sua marca, não 'forjaai.com/sua-loja')",
    ],
  },
  {
    icon: MessageCircle,
    eyebrow: "Pilar 2",
    nome: "Agente IA no WhatsApp",
    desc: "Vendedor virtual treinado com seu catálogo real, sua voz de marca. Atende 24/7 e fecha pedido enquanto você dorme.",
    features: [
      "Busca peça no seu estoque real (não inventa preço nem disponibilidade)",
      "Manda foto da peça sob demanda, direto do seu catálogo",
      "Calcula frete pra cidade da cliente em tempo real",
      "Gera link de carrinho pré-preenchido (cliente só precisa pagar)",
      "Entende áudio, foto e PDF — não só texto",
      "Tira dúvida educacional (banho, cuidados, garantia) com base na sua FAQ",
      "Escala pra você automaticamente em emergência (defeito, troca, conflito)",
      "Memória por cliente — não pergunta o mesmo CEP duas vezes",
      "Anti-injeção: ignora cliente tentando 'hackear' o agente",
      "Custo operacional baixo (~R$ 50/mês de API mesmo com volume alto)",
    ],
  },
  {
    icon: LayoutDashboard,
    eyebrow: "Pilar 3",
    nome: "CRM próprio",
    desc: "Painel que substitui Shopify, Excel, agenda e WhatsApp Business — tudo no mesmo lugar, com a sua cara.",
    features: [
      "Dashboard com receita do mês, ticket médio, conversão, leads novos",
      "Comparação automática com o mês anterior (delta % visível)",
      "Funil visual: lead novo → qualificação → negociação → pago",
      "Top produtos: quais peças giram, quais estão paradas",
      "Cadastro de cliente com histórico, preferências e cashback",
      "Pedidos: kanban com status (aguardando pagamento, pago, enviado, entregue)",
      "Carrinhos abandonados pra você recuperar manual ou via agente",
      "Painel mobile-first (você gerencia tudo do celular entre clientes)",
      "Exportação CSV de qualquer relatório quando precisar",
    ],
  },
  {
    icon: Target,
    eyebrow: "Pilar 4 · diferencial real",
    nome: "Atribuição + Financeiro num lugar só",
    desc: "Você sabe qual anúncio do Meta ou Google trouxe cada venda. Acaba o 'acho que essa campanha tá vendendo'.",
    features: [
      "Sync nativo com Meta Ads (Facebook + Instagram) e Google Ads",
      "Atribuição por UTM: cada venda mostra a campanha de origem",
      "Custo por venda calculado automático (CAC real, não estimado)",
      "ROI por campanha visível — sobe o que dá retorno, mata o que não dá",
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
            pilares foram desenhados pra trabalhar juntos. O agente IA precisa
            do catálogo da vitrine pra buscar peça. O CRM precisa dos eventos
            do agente pra montar o funil. A atribuição precisa do Pixel da
            vitrine. Se você compra só uma peça, ela funciona — mas o ganho
            real aparece quando os 4 conversam.
          </p>
        </div>
      </div>
    </section>
  );
}
