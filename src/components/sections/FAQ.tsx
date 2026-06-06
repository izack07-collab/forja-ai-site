import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const perguntas = [
  {
    q: "Isso é tipo Shopify ou Nuvemshop?",
    a: "Não. Shopify e Nuvemshop são plataformas SaaS onde você aluga um espaço pronto e adapta a sua loja às regras delas. O que a Forjage monta para você é um pacote sob medida: código próprio rodando na sua marca, integrado com Pix, cartão e frete brasileiros, consultor virtual no WhatsApp e o controle de qual anúncio trouxe cada venda, que essas plataformas não têm de forma nativa. Você não fica refém de pacote nem paga taxa por venda extra.",
  },
  {
    q: "O CRM mostra de onde veio cada venda?",
    a: "Sim, é justamente o 4º pilar. O painel puxa os dados do Meta Ads e do Google Ads sozinho, cruza com o que a vitrine registra em cada visita, e te mostra em português claro qual anúncio trouxe mais venda, quanto custou e quanto rendeu. Você vê qual anúncio está dando retorno antes de colocar mais dinheiro.",
  },
  {
    q: "Funciona se eu já anuncio no Meta ou Google Ads?",
    a: "Funciona melhor justamente nesse caso. Hoje você provavelmente vê os relatórios separados (um no Meta, outro no Google, vendas no Excel ou WhatsApp). O CRM unifica tudo num só painel e mostra a foto real: qual canal trouxe lucro, qual só consumiu orçamento. Se você não anuncia ainda, o rastreio de anúncios já fica pronto para quando você começar.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "Vitrine sozinha: 7 dias úteis do briefing à loja no ar. Conjunto completo (vitrine + agente IA + painel + rastreio de anúncios): 12-15 dias úteis no total. Pegamos o briefing na segunda e em duas a três semanas sua operação inteira está atendendo. Tudo passa por aprovação sua antes de virar público.",
  },
  {
    q: "E se eu não souber mexer no painel?",
    a: "O painel é feito para o celular e desenhado para a dona de loja, não para o programador. Cadastrar produto, mudar foto, marcar pedido como enviado, ver o que vendeu hoje: tudo em 3 toques no celular. Fazemos um vídeo de 15 minutos mostrando como usar e ficamos disponíveis no WhatsApp na primeira semana para qualquer dúvida.",
  },
  {
    q: "O agente IA é confiável? Não vai falar bobagem com cliente?",
    a: "Ele é treinado com o catálogo real da sua loja e com regras claras: nunca inventa preço, nunca inventa prazo de frete, nunca finge ser humano. Quando surge uma dúvida sobre a qual ele não tem certeza (algo muito específico, uma reclamação delicada, um defeito), ele aciona você imediatamente no WhatsApp para assumir. Foi calibrado em produção na Ri Pratas e atende com a voz da marca, não como um robô genérico.",
  },
  {
    q: "Como funciona o pagamento do meu cliente final?",
    a: "Integração nativa com Asaas: cliente paga Pix com desconto (preferido), cartão parcelado em até 12x, ou boleto (se você ativar). Dinheiro cai direto na sua conta, sem intermediário cobrando taxa por venda. Frete vem do Melhor Envio com cotação automática em tempo real.",
  },
  {
    q: "Vale instalar as peças juntas ou posso ir somando depois?",
    a: "Pode somar depois, sem problema. Mas quando os 4 pilares entram juntos no setup inicial, já nascem conversando entre si: o agente IA usa o catálogo da vitrine, o painel usa as conversas do agente, o rastreio de anúncios lê os dados da vitrine. Adicionar uma peça depois exige um trabalho extra de integração que o setup conjunto já resolve de imediato. Se você já sabe que vai querer mais de uma peça, instalar tudo de uma vez é o caminho mais eficiente. Alinhamos o que faz sentido para você no WhatsApp.",
  },
  {
    q: "Preciso saber mexer com Meta Ads ou Google Ads?",
    a: "Você precisa saber criar campanha lá (ou contratar alguém que crie). O que a Forjage entrega é a infraestrutura que mostra o que cada campanha está rendendo. Não gerenciamos o seu tráfego; entregamos o painel que faz o seu tráfego deixar de depender de suposição. Se você ainda não anuncia, o rastreio fica pronto para quando você começar.",
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
              Tire suas dúvidas
              <br />
              <span className="italic font-display">
                antes de entrar em contato
              </span>
              .
            </h2>
            <p className="body-prose mt-6 text-pretty">
              Se ficar algo de fora, envie pelo formulário logo abaixo.
              Respondemos direto no WhatsApp em até 24 horas.
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
