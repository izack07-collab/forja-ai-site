import {
  CreditCard,
  Truck,
  Database,
  Brain,
  Megaphone,
  MessageCircle,
  Workflow,
  Search,
} from "lucide-react";

const tecnologias = [
  { icon: CreditCard, nome: "Asaas", contexto: "Pix · Cartão" },
  { icon: Truck, nome: "Melhor Envio", contexto: "Frete automático" },
  { icon: Database, nome: "Supabase", contexto: "Dados seguros" },
  { icon: Brain, nome: "Claude · OpenAI", contexto: "Agente IA" },
  { icon: MessageCircle, nome: "Evolution API", contexto: "WhatsApp" },
  { icon: Workflow, nome: "n8n", contexto: "Automações" },
  { icon: Megaphone, nome: "Meta Ads", contexto: "Anúncios" },
  { icon: Search, nome: "Google Ads", contexto: "Anúncios" },
];

export function Tecnologias() {
  return (
    <section className="section-tight bg-bg border-y border-line-soft">
      <div className="container">
        <div className="text-center mb-10 md:mb-14">
          <p className="eyebrow mb-3">Construído com</p>
          <p className="text-base text-ink-muted max-w-2xl mx-auto text-pretty">
            Stack escolhida pra durar. Cada integração é nativa e validada em
            produção, não é "compatível em teoria".
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8">
          {tecnologias.map((t) => (
            <div
              key={t.nome}
              className="flex flex-col items-center text-center gap-2 group"
            >
              <div className="p-3 rounded-lg bg-bg-warm group-hover:bg-accent-wash transition-colors">
                <t.icon
                  className="h-5 w-5 text-ink-soft group-hover:text-accent-deep transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="text-xs font-medium text-ink leading-tight">
                  {t.nome}
                </p>
                <p className="text-[10px] text-ink-muted uppercase tracking-wider2 mt-1">
                  {t.contexto}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-ink-muted text-center mt-10 max-w-2xl mx-auto">
          Outras integrações sob demanda (ERP, migração de Shopify, RD Station,
          Instagram Shopping, etc.) entram conforme a sua operação pede.
        </p>
      </div>
    </section>
  );
}
