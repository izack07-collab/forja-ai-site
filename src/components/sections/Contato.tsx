import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MessageCircle } from "lucide-react";
import { trackLead } from "@/lib/analytics";

export function Contato() {
  const [enviando, setEnviando] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") || "");
    const loja = String(data.get("loja") || "");
    const cidade = String(data.get("cidade") || "");
    const wpp = String(data.get("wpp") || "");
    const conta = String(data.get("conta") || "");

    const texto =
      `Oi Isaac! Vim pelo site da Forjage.\n\n` +
      `Me chamo ${nome}, sou da loja ${loja} (${cidade}).\n` +
      `Meu WhatsApp: ${wpp}.` +
      (conta ? `\n\n${conta}` : "");

    const whatsapp = `https://wa.me/5511985587684?text=${encodeURIComponent(texto)}`;

    trackLead("form-contato"); // 🔵 dispara Lead (Pixel + Plausible) antes de sair pro WhatsApp
    window.location.href = whatsapp;

    setTimeout(() => setEnviando(false), 800);
  }

  return (
    <section id="contato" className="section bg-bg-deep text-bg relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-accent/15 blur-3xl pointer-events-none"
      />

      <div className="container relative">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-wider2 text-accent mb-4">
              Falar com a Forjage
            </p>
            <h2 className="font-display font-light italic text-display-md text-bg text-balance">
              Conta da sua loja
              <br />
              em 4 campos.
            </h2>
            <p className="text-lg text-bg/70 mt-6 leading-relaxed text-pretty">
              Te respondo no WhatsApp em até 24h. Sem agendamento, sem
              questionário longo. Só uma conversa direta pra ver se faz sentido
              pra você.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle
                  className="h-5 w-5 mt-0.5 text-accent shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-sm text-bg font-medium">WhatsApp direto</p>
                  <p className="text-sm text-bg/60">
                    Você fala comigo, sem robô e sem fila de atendimento
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Send
                  className="h-5 w-5 mt-0.5 text-accent shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-sm text-bg font-medium">Resposta em até 24h</p>
                  <p className="text-sm text-bg/60">
                    Geralmente no mesmo dia útil
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-bg text-ink rounded-xl p-6 md:p-10 shadow-elevated space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="nome">Seu nome</Label>
                  <Input
                    id="nome"
                    name="nome"
                    required
                    placeholder="Mariana"
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wpp">WhatsApp</Label>
                  <Input
                    id="wpp"
                    name="wpp"
                    required
                    placeholder="(11) 98765-4321"
                    autoComplete="tel"
                    type="tel"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="loja">Nome da loja</Label>
                  <Input
                    id="loja"
                    name="loja"
                    required
                    placeholder="Prata Pura Joias"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input
                    id="cidade"
                    name="cidade"
                    required
                    placeholder="São Paulo"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="conta">
                  Conta um pouco da sua loja (opcional)
                </Label>
                <Textarea
                  id="conta"
                  name="conta"
                  placeholder="Vendo semijoia há 6 anos, hoje atendo só pelo WhatsApp e Instagram. Tenho uns 80 produtos no catálogo..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
                disabled={enviando}
              >
                {enviando ? "Abrindo o WhatsApp..." : "Enviar pelo WhatsApp"}
                {!enviando && <Send className="h-4 w-4" />}
              </Button>

              <p className="text-xs text-ink-muted leading-relaxed text-center">
                Ao enviar, abre o WhatsApp com sua mensagem já pronta. É só
                tocar em enviar. Seus dados ficam só comigo.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
