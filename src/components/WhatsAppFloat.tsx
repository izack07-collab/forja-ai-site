import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/analytics";

const WPP_DIRETO =
  "https://wa.me/5511985587684?text=" +
  encodeURIComponent(
    "Oi Isaac! Vim pelo site da Forjage, quero saber mais sobre montar minha loja.",
  );

/**
 * CTA flutuante no canto inferior direito.
 * Abre o WhatsApp do Isaac (5511985587684). No futuro, o número será
 * atendido pelo agente IA da Forjage.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Aparece depois do hero rolar (evita poluição no primeiro frame)
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-bg border border-line rounded-xl shadow-elevated p-5 max-w-[280px] animate-fade-up">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <p className="font-display text-lg text-ink tracking-tightish">
                Falar com a Forjage
              </p>
              <p className="text-xs text-ink-muted mt-0.5">
                Resposta em até 24h
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="text-ink-muted hover:text-ink transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-ink-soft mb-4 leading-relaxed">
            Conta da sua loja em 1 mensagem. Sem agendamento, sem
            questionário.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-bg-deep rounded-md text-sm font-medium hover:bg-accent-deep hover:text-bg transition-colors"
            >
              Preencher formulário
            </a>
            <a
              href={WPP_DIRETO}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead("whatsapp-float-direto")}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-bg border border-line text-ink rounded-md text-sm font-medium hover:border-accent transition-colors"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => { if (!open) trackLead("whatsapp-float-open"); setOpen(!open); }}
        aria-label={open ? "Fechar contato" : "Abrir contato"}
        className={cn(
          "group flex items-center gap-2 px-5 py-3.5 rounded-full shadow-elevated transition-all",
          "bg-ink text-bg hover:bg-ink-soft active:translate-y-px",
          open && "scale-95",
        )}
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
        <span className="text-sm font-medium hidden sm:inline">
          {open ? "Fechar" : "Falar com a Forjage"}
        </span>
      </button>
    </div>
  );
}
