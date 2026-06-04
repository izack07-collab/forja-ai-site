import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const perguntas = [
  {
    q: "Isso é tipo Shopify ou Nuvemshop?",
    a: "Não. Shopify e Nuvemshop são plataformas SaaS onde você aluga um espaço pronto e adapta sua loja às regras delas. O que monto pra você é um pacote sob medida: código próprio rodando na sua marca, integrado com Pix/cartão/frete brasileiros, consultor virtual no WhatsApp e o controle de qual anúncio trouxe cada venda, que essas plataformas não têm nativo. Você não fica refém de pacote nem paga taxa por venda extra.",
  },
  {
    q: "O CRM mostra de onde veio cada venda?",
    a: "Sim, é justamente o 4º pilar. O CRM puxa dados do Meta Ads e Google Ads automaticamente via API, cruza com os rastreadores que a vitrine grava em cada acesso, e te mostra em português: 'Anúncio X do Instagram trouxe R$ 4.200 em vendas esse mês, custo de R$ 600, ROI 7x'. Você vê qual campanha tá dando retorno antes de subir o orçamento.",
  },
  {
    q: "Funciona se eu já anuncio no Meta ou Google Ads?",
    a: "Funciona melhor justamente nesse caso. Hoje você provavelmente vê os relatórios separados (um no Meta, outro no Google, vendas no Excel ou WhatsApp). O CRM unifica tudo num só painel e mostra a foto real: qual canal trouxe lucro, qual só consumiu orçamento. Se você não anuncia ainda, a atribuição já fica pronta pra quando começar.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "Vitrine sozinha: 7 dias úteis do briefing à loja no ar. Conjunto completo (vitrine + agente IA + CRM + atribuição): 12-15 dias úteis no total. Pegamos o briefing na segunda e em duas a três semanas sua operação inteira está atendendo. Tudo passa por aprovação sua antes de virar público.",
  },
  {
    q: "E se eu não souber mexer no painel?",
    a: "O painel admin é mobile-first e foi desenhado pra dona de loja, não pra desenvolvedor. Cadastrar produto, mudar foto, marcar pedido como enviado, ver o que vendeu hoje: tudo em 3 cliques no celular. Faço um vídeo de 15 minutos te mostrando como usar e fico disponível no WhatsApp na primeira semana pra qualquer dúvida.",
  },
  {
    q: "O agente IA é confiável? Não vai falar bobagem com cliente?",
    a: "Ele é treinado com o catálogo real da sua loja e regras claras: nunca chuta preço, nunca chuta prazo de frete, nunca finge ser humano. Quando aparece dúvida que ele não tem certeza (algo muito específico, reclamação delicada, defeito), ele te chama imediatamente no WhatsApp pra você assumir. Foi calibrado em produção na Ri Pratas e atende com a voz da marca, não como bot genérico.",
  },
  {
    q: "Tem fidelidade ou contrato longo?",
    a: "Não. A mensalidade cobre a infraestrutura (hospedagem, manutenção, suporte, atualizações). Você pode cancelar a qualquer momento com 30 dias de aviso. Levo seus dados em uma exportação organizada se quiser migrar pra outro lugar. Sua loja é sua, seus dados são seus.",
  },
  {
    q: "Como funciona o pagamento do meu cliente final?",
    a: "Integração nativa com Asaas: cliente paga Pix com desconto (preferido), cartão parcelado em até 12x, ou boleto (se você ativar). Dinheiro cai direto na sua conta, sem intermediário cobrando taxa por venda. Frete vem do Melhor Envio com cotação automática em tempo real.",
  },
  {
    q: "Por que começar só pela vitrine sai mais caro depois?",
    a: "Quando os 4 pilares são instalados juntos no setup inicial, eles já nascem conversando entre si: o agente IA usa o catálogo da vitrine, o CRM consome eventos do agente, a atribuição lê os dados da vitrine. Quando você adiciona uma peça depois, é trabalho extra de integração. Daí o orçamento por peça avulsa fica maior que a fatia equivalente do conjunto. Por isso o conjunto sai mais barato em valor absoluto.",
  },
  {
    q: "Preciso saber mexer com Meta Ads ou Google Ads?",
    a: "Você precisa saber criar campanha lá (ou contratar alguém que crie). O que eu entrego é a infraestrutura que mostra o que cada campanha está rendendo. Não rodo tráfego pra você. Entrego o painel que faz seu tráfego deixar de ser achismo. Se você ainda não anuncia, a atribuição fica armada pra quando começar.",
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
