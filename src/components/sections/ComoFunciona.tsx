import { ShoppingBag, MessageCircle, Wallet, BarChart3 } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: ShoppingBag,
    title: "Você mostra sua loja",
    desc: "Você envia o que vende, o tom da marca e as fotos. Nós cuidamos do resto: catálogo organizado, vitrine bonita, feita para o celular. Você não precisa aprender ferramenta nova.",
  },
  {
    n: "02",
    icon: Wallet,
    title: "A gente conecta pagamento e frete",
    desc: "Pix com desconto, cartão parcelado, Melhor Envio integrado. Cliente compra direto sem te chamar no WhatsApp pedindo Pix manual ou foto de modelo.",
  },
  {
    n: "03",
    icon: MessageCircle,
    title: "Agente consultor entra em cena",
    desc: "O agente de IA atende no WhatsApp 24/7, mostra a peça, calcula o frete e gera o link pronto para pagamento. Vai além: recupera carrinho abandonado e faz follow-up de quem não respondeu. Encaminha para você quando o assunto é dinheiro ou troca.",
  },
  {
    n: "04",
    icon: BarChart3,
    title: "Você vê tudo num lugar só",
    desc: "Um painel só seu com a receita do mês, o ticket médio, quais produtos mais vendem, e qual anúncio do Meta ou Google trouxe cada venda. Você sabe onde está dando lucro antes de colocar mais dinheiro em anúncio.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="section bg-bg">
      <div className="container">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow mb-4">Como funciona</p>
          <h2 className="h-section text-balance">
            Em <span className="italic font-display">quatro movimentos</span>,
            sua loja física vira operação digital completa.
          </h2>
          <p className="lead mt-6 text-pretty">
            Sem trocar de plataforma. Sem o cliente baixar aplicativo. Sem você
            passar a madrugada respondendo "tem em outra cor?". E com número de
            verdade para decidir onde investir o próximo real em tráfego.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-lg overflow-hidden shadow-soft">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-bg p-8 md:p-10 flex flex-col gap-6"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl text-accent-deep/40">
                  {s.n}
                </span>
                <s.icon
                  className="h-6 w-6 text-accent-deep"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink mb-3 tracking-tightish">
                  {s.title}
                </h3>
                <p className="body-prose text-pretty">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-ink-muted mt-8 text-center">
          Do briefing à loja no ar:{" "}
          <span className="text-ink font-medium">7 dias úteis</span> para a
          vitrine base, mais 3 a 5 dias por peça adicionada (agente IA, rastreio
          de anúncios, painel completo).
        </p>
      </div>
    </section>
  );
}
