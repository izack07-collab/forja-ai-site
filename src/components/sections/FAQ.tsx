import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const perguntas = [
  {
    q: "Isso é tipo Shopify ou Nuvemshop?",
    a: "Não. Shopify e Nuvemshop são plataformas SaaS onde você aluga um espaço pronto e adapta sua loja às regras delas. O que monto pra você é um pacote sob medida — código próprio rodando na sua marca, integrado com Pix/cartão/frete brasileiros e com vendedor virtual no WhatsApp que essas plataformas não têm. Você não fica refém de pacote nem paga taxa por venda extra.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "Essencial: 7 dias úteis do briefing à loja no ar. Completo (com agente IA): 10 dias úteis. Pegamos o briefing na segunda e na quarta da outra semana sua loja já está atendendo. Tudo passa por aprovação sua antes de virar público.",
  },
  {
    q: "E se eu não souber mexer no painel?",
    a: "O painel admin é mobile-first e foi desenhado pra dona de loja, não pra desenvolvedor. Cadastrar produto, mudar foto, marcar pedido como enviado — tudo em 3 cliques no celular. Faço um vídeo de 15 minutos te mostrando como usar e fico disponível no WhatsApp pela primeira semana pra qualquer dúvida.",
  },
  {
    q: "Tem fidelidade ou contrato longo?",
    a: "Não. A mensalidade cobre a infraestrutura (hospedagem, manutenção, suporte, atualizações). Você pode cancelar a qualquer momento com 30 dias de aviso. Levo seus dados em uma exportação organizada se quiser migrar pra outro lugar — sua loja é sua.",
  },
  {
    q: "Como funciona o pagamento do meu cliente final?",
    a: "Integração nativa com Asaas: cliente paga Pix com desconto (preferido), cartão parcelado em até 12x, ou boleto (se você ativar). Dinheiro cai direto na sua conta, sem intermediário. Frete vem do Melhor Envio com cotação automática em tempo real.",
  },
  {
    q: "O agente IA é confiável? Não vai falar bobagem com cliente?",
    a: "Ele é treinado com o catálogo real da sua loja e regras claras do que pode ou não responder. Quando aparece dúvida que ele não sabe (algo muito específico, reclamação delicada), ele te chama imediatamente no WhatsApp pra você assumir. Foi calibrado em produção com a Ri Pratas e atende com a voz da marca, não como bot genérico.",
  },
  {
    q: "Posso começar com Essencial e adicionar o agente IA depois?",
    a: "Pode. Mas custa R$ 1.800 de setup + R$ 300/mês a mais do que fechar Completo no go. Isso é proposital: configurar agente em loja já rodando dá retrabalho real (treinar com catálogo existente, ajustar integrações). Se você sabe que quer agente, fechar Completo desde o início sai mais barato.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section bg-bg">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Perguntas</p>
            <h2 className="h-section text-balance">
              Tira a dúvida
              <br />
              <span className="italic font-display">antes da call</span>.
            </h2>
            <p className="body-prose mt-6 text-pretty">
              Se ficar algo de fora, manda pelo formulário aqui embaixo. Te
              respondo direto no WhatsApp em até 24h.
            </p>
          </div>

          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {perguntas.map((p, i) => (
                <AccordionItem key={p.q} value={`item-${i}`}>
                  <AccordionTrigger>{p.q}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-pretty">{p.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
