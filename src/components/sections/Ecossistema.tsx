import {
  ShoppingBag,
  MessageCircle,
  LayoutDashboard,
  Target,
  Check,
} from "lucide-react";
import { BrowserFrame } from "@/components/ui/BrowserFrame";

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
      "Rastreio em todas as páginas para saber qual anúncio trouxe cada venda",
      "Feita para o celular (80% das suas clientes compram por ele)",
      "Domínio próprio (sua marca, não 'forjage.com/sua-loja')",
    ],
  },
  {
    icon: MessageCircle,
    eyebrow: "Pilar 2",
    nome: "Agente IA no WhatsApp",
    desc: "Consultor virtual treinado com seu catálogo real e a sua voz de marca. Atende 24/7, encaminha para o checkout e ainda vai atrás de quem não fechou: recupera carrinho abandonado e faz follow-up sozinho.",
    features: [
      "Busca peça no seu estoque real (não inventa preço nem disponibilidade)",
      "Manda foto da peça sob demanda, direto do seu catálogo",
      "Calcula o frete para a cidade da cliente em tempo real",
      "Gera link de carrinho pré-preenchido (cliente só precisa pagar)",
      "Recupera carrinho abandonado: vai atrás de quem encheu o carrinho e não pagou",
      "Faz follow-up sozinho: retoma quem ficou de pensar, na hora certa",
      "Entende áudio, foto e PDF, não só texto",
      "Tira dúvida sobre o produto (banho, cuidados, garantia) com base no que você ensinou",
      "Encaminha para você automaticamente em emergência (defeito, troca, conflito)",
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
      "Painel com receita do mês, ticket médio, quantos viraram venda e contatos novos",
      "Comparação automática com o mês anterior (delta % visível)",
      "Funil visual: lead novo → qualificação → negociação → pago",
      "Top produtos: quais peças giram, quais estão paradas",
      "Cadastro de cliente com histórico, preferências e cashback",
      "Pedidos num quadro visual (aguardando pagamento, pago, enviado, entregue)",
      "Carrinhos abandonados para você recuperar manualmente ou pelo agente",
      "Painel feito para o celular (você gerencia tudo entre um cliente e outro)",
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
      "Você decide o próximo investimento em tráfego com base em dados, não em suposição",
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
            Você pode começar pela peça que faz mais sentido agora e ir somando
            as outras quando quiser. Mas instaladas juntas, elas já nascem
            conversando, sem retrabalho de integração depois.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {pilares.map((p) => (
            <article
              key={p.nome}
              className="bg-bg rounded-xl border border-line shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all p-8 md:p-10 flex flex-col gap-6"
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

        {/* Showcase do painel real */}
        <div className="mt-16 md:mt-20">
          <div className="max-w-3xl mb-8 md:mb-10">
            <p className="eyebrow mb-3">O painel por dentro</p>
            <h3 className="font-display text-2xl md:text-3xl text-ink tracking-tightish text-balance">
              O mesmo painel que a{" "}
              <span className="italic">Ri Pratas</span> abre todo dia.
            </h3>
            <p className="body-prose mt-4 text-pretty">
              Receita, funil de conversão, pedidos e o retorno de cada anúncio,
              num lugar só. Feito para abrir no celular, entre um cliente e
              outro.
            </p>
          </div>

          <BrowserFrame
            src="/images/crm-dashboard.webp"
            alt="Painel do CRM da Ri Pratas: receita, ticket médio, funil de conversão e top produtos"
            url="painel.sualoja.com.br"
            width={1280}
            height={720}
            className="max-w-4xl"
          />

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mt-4 md:mt-6">
            <BrowserFrame
              src="/images/crm-campanhas.webp"
              alt="Tela de campanhas: gasto, ROAS, CAC e sincronização com Meta Ads"
              width={1280}
              height={720}
            />
            <BrowserFrame
              src="/images/crm-atribuicao.webp"
              alt="Tela de atribuição: de qual anúncio veio cada venda e o retorno por canal"
              width={1280}
              height={720}
            />
          </div>
        </div>

        <div className="mt-12 max-w-3xl p-6 rounded-md bg-bg-deep text-bg/85 border border-accent/30">
          <p className="text-sm leading-relaxed text-pretty">
            <span className="text-accent font-medium">
              Junto, é isso que te deixa escalar.
            </span>{" "}
            A vitrine vende, o agente atende 24 horas, o painel organiza tudo num
            lugar e o rastreio mostra onde investir o próximo real, sem você ser
            o gargalo de cada venda. Cada peça funciona sozinha; é com as quatro
            conversando que a loja cresce sem depender de você o tempo todo.
          </p>
        </div>
      </div>
    </section>
  );
}
