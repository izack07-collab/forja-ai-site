import { ShoppingBag, MessageCircle, Wallet } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: ShoppingBag,
    title: "Você mostra sua loja",
    desc: "Manda o que vende, o tom da marca, as fotos. Cuido do resto: catálogo organizado, vitrine bonita, mobile primeiro. Você não precisa aprender ferramenta nova.",
  },
  {
    n: "02",
    icon: Wallet,
    title: "Conecto pagamento e frete",
    desc: "Pix com desconto, cartão parcelado, Melhor Envio integrado. Cliente compra sem te chamar no WhatsApp pra pedir Pix manual.",
  },
  {
    n: "03",
    icon: MessageCircle,
    title: "Vendedor virtual entra em cena",
    desc: "Agente de IA atende WhatsApp 24/7: mostra produto, tira dúvida de banho ou tamanho, fecha pedido. Você atende quando importa, não a noite toda.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="section bg-bg">
      <div className="container">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow mb-4">Como funciona</p>
          <h2 className="h-section text-balance">
            Em <span className="italic font-display">três movimentos</span>,
            sua loja física vira loja online.
          </h2>
          <p className="lead mt-6 text-pretty">
            Sem você trocar de plataforma. Sem cliente baixar app. Sem você
            virar madrugada respondendo "tem em outra cor?".
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden shadow-soft">
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
          <span className="text-ink font-medium">7 dias úteis</span> no pacote
          Essencial, <span className="text-ink font-medium">10 dias</span> no
          Completo (com agente IA).
        </p>
      </div>
    </section>
  );
}
